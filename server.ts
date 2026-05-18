import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Check if email configuration exists
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const receiver = process.env.EMAIL_RECEIVER || user;

    if (!user || !pass) {
      const logMsg = "Email submission received but credentials (EMAIL_USER/EMAIL_PASS) are not configured in Settings.";
      console.warn(logMsg);
      console.log(`Payload: Name: ${name}, Email: ${email}, Message: ${message}`);
      return res.json({ 
        success: true, 
        warning: "Your message was received, but the email notification system needs configuration." 
      });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: user,
          pass: pass,
        },
      });

      // Verify connection configuration
      try {
        await transporter.verify();
      } catch (verifyError: any) {
        if (verifyError.message.includes('535-5.7.8')) {
          console.error("CRITICAL: Gmail Authentication Failed. You must use an APP PASSWORD, not your main password.");
          return res.status(500).json({ 
            error: "Email authentication failed. Please ensure you are using a Google App Password in the Settings menu." 
          });
        }
        throw verifyError;
      }

      const mailOptions = {
        from: user,
        to: receiver,
        replyTo: email,
        subject: `New Listing Submission/Contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <h3>New Website Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

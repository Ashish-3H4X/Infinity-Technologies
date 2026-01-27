import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // 1. Save data to MongoDB
    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    // 2. Mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Mail to ADMIN (you)
    await transporter.sendMail({
      from: `"Infinity Technology" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // 4. Auto reply mail to USER
    await transporter.sendMail({
      from: `"Infinity Technology" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting Infinity Technology",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for choosing <b>Infinity Technology</b>.</p>
        <p>We have received your message and our tech team will contact you as soon as possible.</p>
        <br/>
        <p>Regards,<br/>Infinity Technology Team</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

export default router;

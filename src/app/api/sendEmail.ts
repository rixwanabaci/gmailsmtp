import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { to, subject, text, html } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your_gmail@gmail.com", // Your Gmail address
        pass: "your_app_password", // The app password you generated
      },
    });

    const mailOptions = {
      from: "your_gmail@gmail.com", // Sender address
      to: to,
      subject: subject,
      text: text,
      html: html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: ", info.messageId);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
}

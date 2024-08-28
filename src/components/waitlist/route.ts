import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return new NextResponse("Email is required", { status: 400 });
  }

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Welcome to the Voice-to-Text Summarization Tool Waitlist",
    text: `Hi there,

  Thank you for joining the waitlist for the Voice-to-Text Summarization Tool. We are excited to have you on board!

  Best regards,
  The Voice-to-Text Summarization Tool Team`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
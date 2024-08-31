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
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  // Define the email options
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
    to: email,
    subject: "Welcome to the HearMe AI Waitlist",
text: `Hi there,

Thank you for joining the waitlist for HearMe AI. We are excited to have you on board! HearMe AI helps you capture and summarize professional meetings and calls from any platform.

Best regards,
The HearMe AI Team`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error); // Add this line
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
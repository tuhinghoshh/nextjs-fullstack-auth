import User from "@/models/userModel";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailtype, userId }: any) => {
  try {
    //TODO: configure mail for usage
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    console.log("MAIL", userId);
    if (emailtype === "VERIFY") {
      const updateUser = await User.findByIdAndUpdate(userId, {
        $set: {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600000,
        },
      });
    } else if (emailtype === "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          forgotPasswordToken: hashedToken,
          forgotPasswordTokenExpiry: Date.now() + 3600000,
        },
      });
    }

    // Looking to send emails in production? Check out our Email API/SMTP product!
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "1390e170f20f9b", //
        pass: "f0df9f2fb1a7c5", //
      },
    });

    const mailOptions = {
      from: "tuhinkatwa@gmail.com", // sender address
      to: email, // list of receivers
      subject:
        emailtype === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">here</a> to ${
        emailtype === "VERIFY" ? "Verify your email" : "reset your password"
      } or copy and paste the link below in your browser.
      <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
      </p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

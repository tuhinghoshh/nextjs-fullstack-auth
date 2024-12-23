The GitHub repository  provides a comprehensive full-stack authentication membership system built entirely with Next.js. 
GITHUB

Key Features:-----------------------------------------------

Authentication:--
•Sign Up: Users can register and receive a verification email.
•Sign In: Secure login using email and password.
•Email Verification: Verify email addresses with a limit of 3 resends per day.
•Forgot Password: Request a password reset email.
•Reset Password: Securely update passwords via a reset token.
•Change Password: Change the current password from within the user account.

•User Invitations:--
•Invite Users:
•Two roles: Admin and User.
•Newly registered users are assigned the User role by default.
•Invited users receive a verification email and can register via an invite link.
•Invites are validated before allowing the user to register.

Tech Stack:--
Frontend:
•Framework: Next.js
•Styling: Tailwind CSS and Shadcn UI
•State Management & API Calls: React Toolkit Query

Backend:
•Framework: Next.js API routes (/api/...)
•Database: SQLite
•Authentication: JWT (JSON Web Tokens)
•Email Service: Brevo (Sendinblue)
•Installation Steps:

Clone the Repository:

bash
Copy code
git clone https://github.com/Seyla123/auth-fullstack-nextjs.git
cd auth-fullstack-nextjs
Install Dependencies:

bash
Copy code
npm install
Set Up Environment Variables:

Create a .env.local file in the root directory with the following content:
env
Copy code
DATABASE_URL="database.sqlite"
NODE_ENV=
JWT_SECRET=
JWT_EXPIRES_IN=
JWT_COOKIE_EXPIRES_IN=
JWT_INVITE_EXPIRES_IN=
JWT_EMAIL_VERIFY_TOKEN_EXPIRES_IN=
JWT_RESET_PASSWORD_TOKEN_EXPIRES_IN=
BREVO_EMAIL=
BREVO_API_KEY=
Start the Development Server:

bash
Copy code
npm run dev
Access the Application:

Open http://localhost:3000 in your browser.
API Endpoints:

POST /api/auth/signup - Register a new user and send a verification email.
POST /api/auth/signin - Login with email and password.
GET /api/auth/verify-reset-password-token - Verify the reset password token.
GET /api/auth/get-me - Retrieve the current authenticated user's information.
GET /api/auth/init-db - Initialize the database (for development purposes).
POST /api/auth/signout - Sign out the current user.

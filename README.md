# Capture Pixels Website

A Next.js website for Capture Pixels photography, built with TypeScript, Tailwind CSS, and shadcn/ui.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

## Admin Dashboard & Content Editing

The content of the website (hero section, testimonials, projects) is stored in `data/site-content.ts`. This project does not use a database.

To edit content:

1. **Go to the Admin Dashboard:**
   Navigate to [http://localhost:3000/admin](http://localhost:3000/admin).

2. **Login:**
   The default password is `admin123`. 
   *To change this in production, set the `ADMIN_PASSWORD` environment variable.*

3. **Edit Content:**
   Use the dashboard forms to update text, links, and image URLs.

4. **Save Changes:**
   The dashboard **does not save to disk** automatically (for security and simplicity).
   Instead, click **"Generate JSON Code"** at the top right.
   Copy the generated code block.

5. **Update the Codebase:**
   Open `data/site-content.ts` in your code editor and replace the entire content with what you copied.
   Commit and push the changes to deploy them.

## Deployment

This project is ready to be deployed on Vercel.

1. Push your code to a Git repository.
2. Import the project into Vercel.
3. (Optional) Add `ADMIN_PASSWORD` to Environment Variables.

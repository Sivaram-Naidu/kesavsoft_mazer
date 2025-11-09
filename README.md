Mazer Dashboard - KeshavSoft Customization (Task 3)

This is a customized version of the Mazer Admin Dashboard, adapted for the KeshavSoft internship task.

Live Demo: [Add your Netlify link here after you deploy]

Task Requirements Met

Forked & Cloned: The project is a fork of the original Mazer repository.

UI/UX Customization:

Branding: The logo, sidebar, and footer have been updated with the "KeshavSoft" brand and developer credit.

Theme: A new color theme (indigo) has been applied using custom CSS (/assets/static/custom/custom.css).

Layout: The default dashboard content was removed and replaced with new, data-driven sections.

Data-Driven Components:

The dashboard now displays "Active Projects" and "Team Members" sections.

This data is fetched asynchronously from /assets/static/custom/data.json.

A custom JavaScript file (/assets/static/custom/dashboard.js) handles the fetch request and populates the HTML.

How to Run

Clone this repository.

Run npm install --legacy-peer-deps to install dependencies.

Run npm run dev to start the local development server.

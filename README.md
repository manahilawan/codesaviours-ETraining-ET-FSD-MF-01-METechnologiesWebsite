# ME Technologies Website

A full-stack engineering consultancy and training website developed as part of the ME Technologies internship project.

## Technology Stack

- **Frontend:** React, Vite, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas with Mongoose
- **Version Control:** Git and GitHub

## Current Features

- Responsive website with Home, Services, Training, Projects, Blog, About, and Contact sections.
- Contact form with input submission and success/error feedback.
- Express API for handling contact enquiries.
- MongoDB integration to store submitted leads.
- Mongoose model for lead records.
- Environment variables for private configuration.
- GitHub repository for project version control.

## Requirements

- Node.js and npm
- Git
- MongoDB Atlas account or a compatible MongoDB instance

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/manahilawan/codesaviours-ETraining-ET-FSD-MF-01-METechnologiesWebsite.git
cd codesaviours-ETraining-ET-FSD-MF-01-METechnologiesWebsite
```

### 2. Start the backend

Open a terminal in the project root:

```bash
cd server
npm install
```

Create a local `server/.env` file containing the environment variables required by the backend. Use your existing local configuration, and **never upload real credentials or passwords to GitHub**.

Start the API using the script configured in `server/package.json`:

```bash
npm run dev
```

The API is configured to run on port 5000. Test the health endpoint at:

http://localhost:5000/api/health

### 3. Start the frontend

Open a second terminal in the project root:

```bash
cd client
npm install
npm run dev
```

Open the local URL displayed by Vite, usually:

http://localhost:5173

Keep both development servers running while testing the website.

## Database and Lead Testing

The contact form sends submissions to the backend API. Successful enquiries are saved in MongoDB through the Mongoose lead model.

To verify the integration:

1. Start the backend and frontend.
2. Submit a test enquiry through the Contact form.
3. Confirm that a success message appears.
4. Check MongoDB Atlas to verify that the lead record was saved.

Use test information rather than real customer data during development.

## Project Structure

```text
ME-Technologies-Website/
├── client/          # React frontend
├── server/          # Express API and database model
├── docs/            # Project documentation
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Remaining Development Work

The project is under development. Remaining tasks include:

- Implementing secure admin authentication and protected routes.
- Building admin dashboard features and content-management CRUD operations.
- Completing database-backed services, courses, projects, and blog content.
- Implementing any assigned advanced module.
- Completing responsive testing, SEO, error states, and accessibility checks.
- Preparing the Postman collection, screenshots, demo video, and final presentation.

Only features that have been implemented and tested should be considered complete.

## Security

- Keep `.env` files and database credentials private.
- Do not commit passwords, access tokens, or other secrets.
- Use `.env.example` with placeholder values to document required configuration.
- Keep `node_modules/` out of version control.


[View the project on GitHub](https://github.com/manahilawan/codesaviours-ETraining-ET-FSD-MF-01-METechnologiesWebsite)

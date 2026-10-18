# ME Technologies Website — Project Plan

## Goal
Create a responsive website for ME Technologies that supports two business goals: consulting enquiries and training-program enrolments.

## Sitemap
- Home: `/`
- About: `/about`
- Services: `/services`
- EV Charging: `/ev-charging`
- Training: `/training`
- Projects: `/projects`
- Blog: `/blog`
- Contact: `/contact`
- Get a Quote: `/quote`
- Admin: `/admin` (planned protected panel)

## Core content areas
1. Electrical Engineering
2. Solar PV
3. Battery Energy Storage Systems (BESS)
4. EV Charging
5. Architecture and Building Design
6. Civil and Structural Engineering

Training highlight: Online Solar Design Training Program covering PVsyst and SketchUp.

## Proposed database collections
- users: name, email, passwordHash, role
- services: title, slug, icon, shortText, description, order
- courses: title, slug, tools, duration, fee, outline, image
- batches: course, startDate, mode, totalSeats, seatsTaken
- enrollments: name, phone, email, university, course, batch, status
- projects: title, slug, capacity, sector, systemType, city, images, description
- posts: title, slug, category, coverImage, content, publishedAt
- leads: name, phone, email, city, service, message, source, status

## Proposed API endpoints
- POST `/api/auth/login`
- GET/POST/PUT/DELETE `/api/services`
- GET/POST/PUT/DELETE `/api/courses`
- GET/POST/PUT/DELETE `/api/batches`
- GET/POST/PUT/DELETE `/api/projects`
- GET/POST/PUT/DELETE `/api/posts`
- POST `/api/leads`
- POST `/api/enrollments`
- GET `/api/admin/dashboard`

## Homepage wireframe
1. Top contact strip
2. Sticky navigation and Get a Quote CTA
3. Hero with tagline and two calls to action
4. Impact/statistics strip (use clearly labelled illustrative figures until verified)
5. Six service cards
6. How we work: Consultation → Site survey → Design & proposal → Installation → Support
7. EV charging feature
8. Training feature
9. Latest blog cards
10. Software/tools strip
11. Final CTA
12. Footer with contact and social links
13. Floating WhatsApp link

## Notes
- The official logo colors must be measured from the actual logo; temporary colors in this starter are placeholders.
- Project examples, metrics, testimonials, and team profiles must be clearly marked as samples if not verified.
- Advanced module: awaiting confirmation from supervisor.

# Sprint 1

## Goal

Build the portfolio foundations.

## Completed

- Responsive Header
- Responsive Hero
- Internationalization
- Data architecture

## Learned

- Dynamic routes
- Presentation components
- Mobile first
- Data driven UI

## Next Sprint

- About
- Career Timeline

Q: "Pourquoi avez-vous séparé les données (data) des composants (components) ?"

R: "Je voulais des composants purement présentationnels, indépendants du contenu. Cela facilite l'internationalisation, améliore la réutilisabilité et simplifie la maintenance. La logique de composition reste dans la page Next.js, tandis que les composants se contentent d'afficher les données qu'on leur fournit."

# Sprint 2

## Goal

Build the About section and Career Journey.

## Completed

- Created About section
- Split About into small reusable components
- Introduced shared TypeScript models
- Built responsive Career Timeline
- Connected all sections to bilingual data

## Architecture decisions

- One responsibility per component
- Shared types moved to `types/`
- Content stays in `data/`
- Components remain presentation-only

## Learned

- Component composition
- Shared TypeScript models
- Data-driven UI
- Timeline layout with Tailwind

## Interview question

Q: Why did you split the About section into several components instead of creating one large component?

Suggested answer:

R: Each component has a single responsibility, making the code easier to maintain, test and reuse. It also keeps the page component focused on composition rather than implementation details.

Q: Pourquoi avoir créé plusieurs petits composants (AboutHeader, AboutHighlights, AboutStory) plutôt qu'un seul gros About.tsx ?

Suggested answer:

R: Chaque composant possède une responsabilité unique. Cette approche facilite la maintenance, la réutilisation, les tests et permet à plusieurs développeurs de travailler simultanément sur une même section sans créer de conflits.

## Next Sprint

- Skills
- Business × Tech

# Sprint 3

## Goal

Highlight my hybrid profile by presenting both my business expertise and my technical skills.

## Completed

- Built the Skills section
- Built the Business × Tech section
- Introduced reusable Skill and BusinessTech data models
- Continued the data-driven architecture
- Added bilingual content (FR / EN)

## Architecture decisions

- One section = one folder
- One responsibility per component
- Shared models stored in `types/`
- Content stored in `data/`
- Components remain presentation-only

## Learned

- Component composition
- Reusable TypeScript models
- Building reusable card-based layouts
- Separating content from presentation

## Interview question

Why store all portfolio content in dedicated `data` files instead of directly inside React components?

Suggested answer:

Separating content from presentation keeps components reusable and easier to maintain. It also makes internationalization straightforward, since switching languages only changes the data source while the UI remains identical.

## Next Sprint

- Projects
- Project cards
- Project detail pages

# Sprint 4

## Goal

Build the Projects section to showcase featured work, learning projects and future ideas.

## Completed

- Built the Projects section
- Created Featured Projects cards
- Created Learning Projects cards
- Created Coming Soon section
- Introduced reusable project data models
- Continued the bilingual architecture (FR / EN)

## Architecture decisions

- Featured, Learning and Coming Soon are treated as separate presentation components
- Project data is fully separated from the UI
- Section titles are stored in the data layer for internationalization
- The project architecture remains consistent with previous sections

## Learned

- Designing scalable data models
- Filtering data into multiple presentation layers
- Building reusable card components
- Maintaining a consistent architecture across the application

## Interview question

Why did you separate your projects into Featured Projects, Learning Projects and Coming Soon instead of displaying a single list?

Suggested answer:

I wanted visitors to immediately distinguish between production-level projects, learning exercises and future work. This improves readability and better reflects my learning journey while highlighting the projects that best represent my current skills.

## Reflection

The portfolio is no longer just a collection of sections. It is becoming a product with a coherent information architecture. Every new section follows the same design pattern, making the codebase easier to maintain and extend.

## Next Sprint

- Dynamic project pages
- Project case studies
- PrintForge case study
- EcoProfs case study
- Navigation between portfolio and project pages

# Sprint 5

## Goal

Design and build a reusable case study system for portfolio projects.

## Completed

- Created a reusable project architecture
- Added dynamic routing with Next.js App Router
- Introduced the ProjectDetails data model
- Implemented the first complete case study (PrintForge)
- Created reusable project components
- Added project metadata
- Added reusable action buttons
- Internationalised all case study labels
- Prepared the architecture for future case studies

## Architecture decisions

- Project data is isolated inside `data/projects`
- Shared UI labels are stored in `data/projects/ui.ts`
- Each case study is composed of small reusable components
- Dynamic routing allows adding new projects without changing page logic
- The same architecture will be reused for every future project

## Learned

- Dynamic routing with App Router
- Reusable page architecture
- Separation between project content and UI labels
- Better TypeScript modelling
- Building scalable portfolio pages

## Interview question

Why did you create a reusable case study architecture instead of hardcoding each project page?

Suggested answer:

I wanted every project to follow the same structure while keeping the content independent from the UI. Adding a new project only requires creating a new data file, without modifying the page logic. This approach improves scalability, maintainability and consistency across the portfolio.

## Reflection

This sprint transformed the portfolio from a collection of pages into a scalable platform for presenting projects. Future case studies can now be added with minimal development effort.

## Next Sprint

- EcoProfs case study
- Connect Featured Project cards
- Improve project navigation
- Prepare gallery support

# Sprint 6

## Goal

Reuse the case study system to add EcoProfs without rebuilding the project page architecture.

## Completed

- Added EcoProfs as a full case study
- Reused the existing ProjectDetails model
- Added EcoProfs to the project registry
- Added GitHub support
- Introduced `hasCaseStudy` to control project card navigation
- Added the Portfolio as a Featured Project
- Improved the distinction between Home project data and detailed case study data

## Architecture decisions

- `data/home/projectsSection.ts` controls the project cards displayed on the Home page
- `data/projects/*.ts` contains detailed case study content
- `data/projects/index.ts` acts as the central project registry
- `hasCaseStudy` determines whether a Featured Project card links to a detail page

## Learned

- Reusing a generic page architecture
- Building a simple static project registry
- Separating summary data from detailed domain data
- Making navigation data-driven

## Interview question

What is the purpose of the project registry in `data/projects/index.ts`?

Suggested answer:

The registry maps a URL slug to its corresponding project data. This allows the dynamic `[slug]` route to remain generic and independent from individual projects. Adding a new case study only requires creating its data file and registering it.

## Reflection

The value of the reusable architecture became very clear in this sprint. EcoProfs could be added without creating new page components or changing the dynamic routing logic.

## Next Sprint

- Beyond the Screen
- Contact
- Footer
- Social links
- CV download preparation

# Sprint 7

## Goal

Complete the portfolio Home page with personal context, contact information and final navigation.

## Completed

- Added the Beyond the Screen section
- Added Surf, Scuba Diving, Sport & Fitness and Science & Curiosity interests
- Added bilingual content for the new sections
- Added the Contact section
- Added Email, LinkedIn and GitHub actions
- Added the Footer
- Added Back to Top navigation
- Completed Header navigation across all Home sections
- Verified anchor navigation in English and French

## Architecture decisions

- Beyond and Contact follow the existing data-driven architecture
- Content remains separated from presentation components
- Hobby and contact data have dedicated TypeScript models
- Footer remains a layout component
- Navigation anchors map directly to section IDs

## Learned

- Building reusable data-driven sections
- Managing internal anchor navigation
- Separating layout components from page sections
- Maintaining bilingual content across new features

## Interview question

How do you manage content and UI responsibilities in the portfolio?

Suggested answer:

I separate content, TypeScript models and presentation components. The data layer contains the content, types define the contracts, and React components are responsible for rendering. This makes the application easier to maintain, internationalise and extend.

## Reflection

The Home page structure is now complete. The portfolio has evolved from a technical showcase into a more complete presentation of both professional experience and personal interests.

## Next Sprint

- Global responsive review
- Desktop improvements
- Visual consistency
- Beyond the Screen photography
- Project screenshots and galleries
- Micro-interactions and animations
- Accessibility review

# Sprint 8 — Responsive Design & Visual Polish

## Goal

Improve the portfolio's responsive behavior and strengthen its visual identity across mobile, tablet, laptop and desktop.

## Completed

### Responsive Design

- Audited the complete Home page at 375px, 768px, 1024px and 1440px
- Improved spacing between Header, Hero and About
- Added clearer visual separation between sections using subtle background variations
- Improved Contact button layout across breakpoints
- Standardized Featured Project card heights
- Changed Business × Tech cards to a horizontal layout on larger screens
- Changed the Career timeline to a horizontal layout from 1024px
- Preserved vertical layouts where they provide better readability on smaller screens

### Header

- Reworked the Header layout
- Replaced the temporary GL logo with a simpler Guillaume Legros identity
- Added the "Business × Code" signature
- Moved the language switch closer to the navigation
- Improved the visual treatment of the FR / EN switch
- Added a responsive mobile navigation menu
- Introduced local state to open and close the mobile menu
- Converted the Header into a Client Component for interactive behavior

### Hero

- Redesigned the Hero as a true two-column hero section
- Improved typography hierarchy and CTA presentation
- Added a dedicated portrait area
- Created a stylized illustrated portrait consistent with the portfolio identity
- Added blue graphic / brush elements to the portrait
- Prepared a transparent cutout version for better Hero integration
- Improved portrait sizing across responsive breakpoints
- Changed the Hero to a two-column layout from tablet size

## Architecture / Technical Decisions

- Keep responsive behavior primarily controlled through Tailwind breakpoints
- Use `md` for the Hero two-column transition
- Use `lg` for larger structural changes such as the horizontal Career timeline
- Keep visual content separate from textual project data
- Use `next/image` for the Hero portrait
- Keep the mobile Header interaction isolated inside the Header Client Component

## Learned

- Responsive design is not only about making elements smaller, but changing layout according to available space
- Breakpoints should reflect content needs rather than device names
- Large visual elements such as portraits require different sizing strategies across breakpoints
- `useState` and `"use client"` are required when a Server Component needs browser-side interaction
- Visual section separation can improve readability without adding unnecessary UI elements

## Backlog

- Add "Learn more / En savoir plus" links to Career timeline items
- Create detailed experience pages using `/[lang]/experience/[slug]`
- Add real photography to Beyond the Screen
- Add project screenshots / galleries to case studies
- Finalize Header visual identity / possible logo
- Add subtle micro-interactions
- Accessibility review
- Final visual consistency review

## Next

Continue Sprint 8 with visual polish:

- Beyond the Screen photography
- Project screenshots
- Micro-interactions
- Accessibility
- Final UI consistency

### Beyond the Screen

- Redesigned the Beyond the Screen section with visual content
- Added dedicated images for Surf, Scuba Diving, Sport & Fitness and Science & Curiosity
- Updated the Hobby data model to support images and alternative text
- Added responsive image rendering with Next.js Image
- Added subtle hover interactions to Hobby cards
- Introduced individual `objectPosition` settings for better image framing
- Adjusted image positioning independently for different source photographs

### Project Galleries

- Created a reusable `ProjectGallery` component
- Extended the `ProjectDetails` model with optional gallery data
- Added bilingual gallery labels
- Added screenshots to the PrintForge case study
- Added screenshots to the EcoProfs case study
- Added support for both landscape and portrait screenshots
- Improved mobile screenshot rendering without affecting desktop screenshots
- Kept gallery content entirely data-driven

### Responsive Typography

- Improved Hero title width at laptop and desktop breakpoints
- Improved French Hero title wrapping
- Allowed About titles to use more horizontal space from tablet size
- Improved Skills title width at larger breakpoints
- Improved Projects title width at larger breakpoints
- Improved Business × Tech title width on desktop
- Preserved mobile typography and readability

## Additional Architecture Decisions

- Project galleries remain optional through `gallery?: ProjectImage[]`
- Screenshot orientation is defined in project data rather than inside the UI component
- Individual hobby image framing is controlled through data
- Shared components remain independent from specific projects and images
- Visual customization should be configurable through data whenever possible

## Additional Learned

- `object-cover` preserves a container layout but may require individual `object-position` adjustments
- Different screenshot formats should not be forced into the same aspect ratio
- Optional data allows reusable components to support richer projects without affecting simpler ones
- Responsive typography sometimes requires changing content width rather than simply reducing font size
- A data-driven architecture can also manage visual presentation metadata such as image orientation and positioning

## Sprint 8 Status

Responsive design: ✅  
Header & Hero redesign: ✅  
Beyond the Screen visuals: ✅  
Project galleries: ✅  
Responsive typography: ✅  
Micro-interactions: ✅  
Keyboard focus states: ✅  
Accessibility review: ✅  
Mobile navigation review: ✅  
Final visual consistency review: ✅  

## Sprint 8 Completed

The portfolio is now responsive across mobile, tablet, laptop and desktop breakpoints.

The visual hierarchy has been strengthened through improved section backgrounds, typography, imagery and spacing.

Interactive elements now provide consistent hover and keyboard focus feedback, while project galleries and personal imagery make the portfolio more visual and engaging.

The next phase can focus on content completion, deployment and production readiness.

# Sprint 9 — Production & Deployment

## Goal

Prepare the portfolio for production and deploy a public version.

## Completed

- Added global SEO metadata
- Added dynamic metadata for FR / EN pages
- Added dynamic metadata for project case studies
- Added custom favicon
- Added Open Graph image
- Added `robots.ts`
- Added `sitemap.ts`
- Added `metadataBase`
- Added downloadable CVs in English and French
- Verified production build with `npm run build`
- Tested the production server locally
- Deployed the portfolio on Vercel
- Configured `NEXT_PUBLIC_SITE_URL`
- Verified production `robots.txt`
- Verified production `sitemap.xml`

## Architecture decisions

- Production URL is configured through an environment variable
- Local development keeps its own `.env.local`
- SEO metadata remains data-driven where possible
- CV files are served from the `public/` directory
- FR and EN routes provide their own metadata and CV documents

## Learned

- Difference between development and production builds
- Managing environment variables across local and production environments
- Next.js Metadata API
- Open Graph configuration
- Search engine metadata routes
- Deployment workflow with GitHub and Vercel

## Interview question

How did you prepare your Next.js application for production?

Suggested answer:

I validated the production build locally, configured SEO metadata, Open Graph assets, sitemap and robots files, separated local and production environment variables, and deployed the application through Vercel connected to GitHub.

## Reflection

This sprint moved the project from a local development application to a publicly accessible production portfolio. The project now has a complete development-to-deployment workflow.

## Production

URL:

https://guillaume-legros.vercel.app
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

## Sprint 11 — Portfolio Case Study & Project Navigation

### Objective

Extend the project case study system and improve navigation consistency across the portfolio.

### Completed

#### Personal Portfolio Case Study
- Added a dedicated bilingual case study for the Personal Portfolio.
- Added routes:
  - `/fr/projects/portfolio`
  - `/en/projects/portfolio`
- Added the Portfolio to the central project registry.
- Enabled `hasCaseStudy` for the Portfolio project cards.
- Added detailed FR/EN content covering:
  - Project context and objectives
  - Tech stack
  - Key features
  - Architecture
  - Technical and UX challenges
  - Lessons learned
  - Future improvements
- Added GitHub and live production links.

#### Portfolio Gallery
- Added dedicated Portfolio screenshots:
  - Desktop Hero
  - Skills section
  - Projects section
  - Mobile responsive view
- Added bilingual captions and alt texts.

#### Case Study Navigation
- Integrated the main Header into all project case studies.
- Kept the Header sticky across project pages.
- Adapted Home navigation anchors when accessed from a project page.
- Navigation now correctly redirects from a case study to sections such as:
  - About
  - Career
  - Skills
  - Projects
  - Contact
- Updated the FR/EN language switch to preserve the current project:
  - `/fr/projects/ecoprofs` → `/en/projects/ecoprofs`
  - `/fr/projects/printforge` → `/en/projects/printforge`
  - `/fr/projects/portfolio` → `/en/projects/portfolio`

#### Footer
- Integrated the existing Footer into all project case studies.
- Added consistent "Back to top" navigation.

#### Case Study Improvements
- Updated the case study wording from:
  - "If I were to rebuild this project..."
  - "Si je devais reconstruire ce projet..."
- To:
  - "If I were to improve this project..."
  - "Si je devais améliorer ce projet..."
- Started cleaning future improvement lists to remove already completed items.

#### Validation
- Tested Portfolio case study in FR and EN.
- Tested Header and Footer navigation on project pages.
- Tested language switching between project case studies.
- Reviewed responsive behaviour.
- Production build validated successfully with Next.js 16.3.0.
- TypeScript compilation completed without errors.
- No build warnings.

### Technical evolution

The project case study architecture now supports multiple projects and locales through:

`projects[slug][locale]`

Current case studies:

- PrintForge
- EcoProfs
- Personal Portfolio

This makes adding future bilingual case studies possible without changing the dynamic routing architecture.

### Backlog

- Detailed Career Experience pages.
- Continue accessibility improvements.
- Update FR/EN CVs to align with the new portfolio positioning.
- Add custom domain.
- Add traffic analytics only once the portfolio content and features are stable.

## Sprint 12 — Detailed Career Experience Pages

### Objective

Extend the portfolio with detailed bilingual career pages while keeping the Home career timeline concise.

The objective was to provide recruiters with more context about each professional experience without overloading the main portfolio page.

---

### Completed

#### Career Experience Architecture

- Added a new reusable `ExperienceDetails` data structure
- Added dynamic career route:
  - `/[lang]/experience/[slug]`
- Added centralized experience registry
- Added bilingual FR / EN content
- Added shared UI labels for career pages
- Reused the same data-driven architecture philosophy as the Project Case Studies

Career pages created for:

- Cdiscount Pro
- Octopia
- Temu
- La Capsule

---

### New Experience Components

Created reusable components for detailed career pages:

- `ExperienceHero`
- `ExperienceOverview`
- `ExperienceCareerPath`
- `ExperienceResponsibilities`
- `ExperienceAchievements`
- `ExperienceSkills`
- `ExperienceLessons`
- `ExperienceActions`

This keeps the page structure generic while allowing each experience to have different content.

---

### Cdiscount Pro

Created a detailed career page covering the evolution of my roles within Cdiscount's B2B division from 2010 to 2022.

Career progression documented:

- Commercial Online
- Business Developer Export
- Business Developer Incentive
- Business Developer Grands Comptes
- Chef d'activité commerciale & Marketing Digital B2B

The page highlights:

- B2B sales
- E-commerce
- Business development
- Customer acquisition
- Key account management
- Export
- Incentive
- Digital marketing
- Email marketing
- Commercial & marketing campaign management
- Trade marketing
- Landing pages
- SEO collaboration
- Revenue and margin management

Particular attention was given to making the Digital Marketing dimension more visible in the portfolio.

---

### Octopia

Created a dedicated page for the Octopia experience focused specifically on the development of the Dropshipping solution.

Highlighted responsibilities include:

- B2B seller acquisition
- Outbound prospecting
- Prospect identification and targeting
- Discovery and qualification meetings
- Pipeline management
- Prospecting campaign analysis
- Sales messaging optimisation
- French and European market development
- European e-commerce market analysis

The page also highlights the importance of structured qualification and understanding seller potential, expectations and constraints.

---

### Temu

Created a dedicated page for the Temu marketplace experience.

The content is structured around three main areas:

- Seller acquisition
- Negotiation & partnerships
- Seller support & performance

Highlighted responsibilities include:

- Identification and sourcing of French and European sellers
- Seller recruitment
- Seller onboarding
- Partnerships with resellers, brands and distributors
- Commercial negotiation
- Account management
- Seller performance support
- Pricing
- Logistics
- Marketplace marketing

The page presents the full seller journey from acquisition to marketplace performance.

---

### La Capsule

Created a dedicated page for the Full-Stack JavaScript training.

Unlike the other Career pages, La Capsule is identified as:

- `Training / Formation`

rather than:

- `Career Experience / Expérience professionnelle`

Added a dedicated experience category:

- `career`
- `training`

The page highlights the technical skills acquired during the six-month program:

- JavaScript
- TypeScript
- React
- Next.js
- React Native
- Expo
- Node.js
- Express
- MongoDB
- Mongoose
- Zod
- REST APIs
- Redux Toolkit
- Git
- Responsive Design
- Mobile Development

The training is positioned as an additional technical layer complementing the existing Business, E-commerce and Digital Marketing background rather than replacing it.

EcoProfs is also presented as the final team-based MVP project.

---

### Home Career Timeline

Updated the Career Journey section on the Home page.

Added a `slug` to each career experience.

Added:

- `Learn more →`
- `En savoir plus →`

Each Career item now links to its corresponding detailed page:

- `/[lang]/experience/cdiscount-pro`
- `/[lang]/experience/octopia`
- `/[lang]/experience/temu`
- `/[lang]/experience/la-capsule`

The locale is preserved during navigation.

---

### Company & Training Logos

Added visual branding to the Career Experience Hero.

Logos integrated for:

- Cdiscount Pro
- Octopia
- Temu
- La Capsule

Added to the Experience data model:

- `logo`
- `logoAlt`

Logos are stored in the public assets and rendered through `next/image`.

---

### Career Page Navigation

Integrated the existing portfolio Header and Footer into Career Experience pages.

The Header supports:

- Main portfolio navigation
- Sticky positioning
- Mobile navigation
- FR / EN switching

Language switching preserves the current Career Experience.

Example:

`/fr/experience/octopia`

switches to:

`/en/experience/octopia`

instead of returning to the Home page.

---

### Scroll Behaviour

Improved navigation behaviour across the portfolio.

#### Career pages

Created a reusable client component:

- `ScrollToTop`

It forces navigation to a new Career Experience page to start at the top of the page.

The experience `slug` is used as a trigger so the scroll behaviour also works when navigating between dynamic routes.

Smooth scrolling is used for a more natural transition.

#### Home anchors

The sticky Header was hiding the beginning of sections when navigating through anchors such as:

- About
- Experience
- Skills
- Projects
- Contact

Added:

`scroll-mt-24`

to the relevant Home sections.

This creates enough scroll offset for the section eyebrow and title to remain visible below the sticky Header.

The same behaviour also fixes:

`Career Experience → Back to Career`

when returning to:

`/[lang]#experience`

No additional JavaScript was required for Home anchor navigation.

#### Project Case Studies

Adjusted the top spacing of Project Case Study pages so the sticky Header no longer hides:

- `Case Study`
- `Étude de cas`

Project page layout now uses additional top padding rather than anchor-specific scroll behaviour.

---

### UX / Design Improvements

- Career pages share a consistent visual language with Project Case Studies
- Company logos provide faster visual identification
- Career progression is displayed as a dedicated timeline when relevant
- Responsibilities use structured cards
- Achievements are visually separated
- Skills are displayed as badges
- Long-form Career content is separated from the concise Home timeline
- Professional Experience and Training are clearly differentiated
- Sticky Header behaviour is now consistent across Home, Career and Project pages

---

### Architecture Decisions

- Career content remains fully data-driven
- FR and EN versions are stored together for each experience
- One generic dynamic route handles every Career page
- Shared components prevent UI duplication
- Optional fields allow experiences to have different levels of detail
- `careerSteps` is used only when an internal career progression needs to be represented
- `category` allows professional experience and training to share the same architecture without misleading labels
- Career pages follow the same architectural principles as Project Case Studies

---

### Key Learnings

- Dynamic content structures can support different types of professional experiences without duplicating page logic
- Optional TypeScript properties make reusable page architectures more flexible
- Long-form career information is better separated from the main portfolio Home
- A sticky Header needs to be considered when implementing anchor navigation
- `scroll-margin` provides a clean CSS solution for anchor positioning without unnecessary JavaScript
- Navigation between dynamic Next.js routes can require explicit scroll management
- Content architecture and UI architecture can evolve independently when data is properly separated from presentation

---

### Validation

- Tested all Career Experience routes
- Tested FR versions
- Tested EN versions
- Verified Career → Home navigation
- Verified Home → Career navigation
- Verified FR / EN switching
- Verified company / training logos
- Verified La Capsule `Training / Formation` label
- Verified sticky Header behaviour
- Verified Home anchor navigation
- Verified Career ScrollToTop behaviour
- Verified Project Case Study top spacing
- Verified responsive behaviour across main breakpoints
- Header and Footer navigation verified

Production build completed successfully:

`npm run build`

Results:

- Next.js compilation successful
- TypeScript validation successful
- Static page generation successful
- No build errors

New dynamic route confirmed:

`/[lang]/experience/[slug]`

Existing routes remain operational:

- `/[lang]`
- `/[lang]/projects/[slug]`

---

### Next

Sprint 13:

- Redesign and update CV FR / EN
- Align CV positioning with the portfolio
- Strengthen Digital Marketing visibility
- Integrate La Capsule Full-Stack JavaScript training
- Add updated technical skills
- Select relevant technical projects
- Add portfolio URL
- Review overall Business × Digital × Tech positioning

## Sprint 14 — Final Polish, Navigation & SEO

### Objective

Finaliser l’expérience utilisateur du portfolio et renforcer sa préparation pour la production :
responsive, navigation, liens projets, internationalisation et SEO technique.

---

### 1. Responsive & UI validation

- Validation globale du responsive sur les principaux breakpoints :
  - Mobile ~375px
  - Tablet ~768px
  - Laptop ~1024px
  - Desktop ~1440px
- Vérification de la Home, des Project pages et des Career Experience pages.
- Ajustements finaux du Header et de la navigation mobile.

---

### 2. Header & Navigation improvements

#### Scroll Spy

Ajout d’un système de navigation active basé sur `IntersectionObserver`.

Le Header indique maintenant automatiquement la section actuellement visible :

- About
- Career
- Skills
- Projects
- Contact

Desktop :
- texte actif en `ocean`
- underline actif

Mobile :
- état actif également matérialisé dans le menu burger

#### Mobile navigation redesign

Amélioration visuelle du menu burger :

- navigation sous forme de blocs
- meilleur spacing
- états hover / active
- flèches de navigation
- meilleure hiérarchie visuelle

#### Language switch redesign

Remplacement de l’ancien bouton FR / EN par un véritable segmented toggle :

`FR | EN`

- les deux langues restent visibles
- langue active avec fond `ocean`
- comportement cohérent desktop / mobile
- version compacte pour les petits écrans

#### Scroll / sticky header fixes

Correction des problèmes liés au Header sticky :

- navigation vers les sections de la Home
- retour depuis les Career pages
- retour depuis les Project pages
- changement de langue
- Hero / eyebrow correctement visibles après navigation

---

### 3. Projects section improvements

Modification du wording de la section Projects.

FR :
- `Projets principaux & projets d’apprentissage`
- `Projets principaux`
- `Projets d’apprentissage`

EN :
- `Main projects & learning projects`
- `Main projects`
- `Learning projects`

Ajout du titre `Projets principaux / Main projects` au-dessus des principales Project Cards.

Les principaux projets sont désormais :

- EcoProfs
- PrintForge
- Personal Portfolio

---

### 4. Project actions & external links

Amélioration de `ProjectActions`.

Support désormais de :

- `githubUrl` pour un repository unique
- `githubUrls` pour plusieurs repositories
- `liveUrl` pour une démo

#### PrintForge

- repository GitHub correctement relié
- pas de Demo publique actuellement

#### EcoProfs

EcoProfs utilisant deux repositories séparés :

- GitHub Frontend
- GitHub Backend

`ProjectActions` a été adapté pour supporter plusieurs liens GitHub.

Ajout également d’une vidéo de démonstration EcoProfs hébergée sur YouTube en mode non répertorié.

EcoProfs dispose maintenant de :

- GitHub Frontend
- GitHub Backend
- Demo vidéo

#### Personal Portfolio

- GitHub repository actif
- Demo redirige vers le portfolio live

---

### 5. SEO — Global Metadata

Amélioration de `app/layout.tsx`.

Ajout / amélioration de :

- `metadataBase`
- global title
- title template
- global description
- keywords
- authors
- creator
- Open Graph metadata
- Twitter metadata

Positionnement SEO harmonisé autour du profil hybride :

Business Development + E-commerce + Digital Marketing + Web Development.

---

### 6. SEO — Home FR / EN

Amélioration de `generateMetadata()` dans :

`app/[lang]/page.tsx`

Metadata spécifiques pour chaque langue :

- title
- description
- canonical URL
- language alternates
- Open Graph title
- Open Graph description
- Open Graph locale

FR et EN utilisent désormais un positionnement éditorial cohérent autour du concept de profil hybride.

---

### 7. SEO — Project pages

Amélioration de `generateMetadata()` dans :

`app/[lang]/projects/[slug]/page.tsx`

Chaque projet dispose maintenant dynamiquement de :

- title
- description
- canonical URL
- FR alternate URL
- EN alternate URL
- Open Graph metadata
- Twitter metadata

Exemple :

`/fr/projects/ecoprofs`

Canonical :
`/fr/projects/ecoprofs`

Language alternate :
`/en/projects/ecoprofs`

---

### 8. SEO — Career Experience pages

Même architecture SEO appliquée à :

`app/[lang]/experience/[slug]/page.tsx`

Chaque expérience dispose maintenant de metadata dynamiques :

- company + job title
- description
- canonical URL
- FR / EN alternates
- Open Graph
- Twitter

Applicable notamment à :

- Cdiscount Pro
- Octopia
- Temu
- La Capsule

---

### 9. Internationalisation & HTML language

Identification d’un problème dans le Root Layout :

`<html lang="en">`

était également utilisé pour les pages françaises.

Ajout d’un layout `[lang]` permettant de matérialiser la langue du contenu selon la route :

- `/fr` → contenu FR
- `/en` → contenu EN

Amélioration de la cohérence entre :

- URL
- contenu
- metadata
- language alternates
- langue déclarée dans la structure de page

---

### 10. robots.txt

Validation de :

`app/robots.ts`

Configuration :

- autorisation du crawl global
- déclaration du sitemap

Le site est accessible aux moteurs de recherche.

---

### 11. sitemap.xml

Mise à jour de :

`app/sitemap.ts`

Le sitemap contient maintenant les principales routes FR et EN.

Home :
- `/fr`
- `/en`

Projects :
- PrintForge FR / EN
- EcoProfs FR / EN
- Portfolio FR / EN

Career Experience :
- Cdiscount Pro FR / EN
- Octopia FR / EN
- Temu FR / EN
- La Capsule FR / EN

Priorités SEO différenciées entre Home, Projects et Career pages.

---

### 12. Production Build

Validation finale :

npm run build

Result:

- Compilation successful
- TypeScript successful
- Static page generation successful
- No build errors

Routes validated:

/
 /[lang]
 /[lang]/experience/[slug]
 /[lang]/projects/[slug]
 /icon.png
 /opengraph-image.png
 /robots.txt
 /sitemap.xml

---

### Sprint 14 Status

Completed.

Main outcomes:

- Responsive validation
- Improved mobile navigation
- Active section navigation / Scroll Spy
- Improved FR / EN toggle
- Improved Projects hierarchy
- GitHub / Demo actions cleaned up
- EcoProfs video demo added
- Global SEO metadata
- Localized FR / EN metadata
- Dynamic Project SEO
- Dynamic Career SEO
- Canonical URLs
- Language alternates
- Open Graph / Twitter metadata
- robots.txt validation
- sitemap expansion
- Production build validated
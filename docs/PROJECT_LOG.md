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
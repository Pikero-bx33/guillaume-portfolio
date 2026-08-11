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
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


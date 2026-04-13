# Heather Frank — Personal Site

Personal portfolio site for Heather Frank, Ethical AI Practitioner.  
Live at: **https://sjcswank.github.io/me/**

Built with React + Vite + Tailwind CSS. Deployed via GitHub Pages.

---

## Running locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

---

## Common updates

### Swap the hero layout (photo vs. no photo)
In [src/QAPortfolio.jsx](src/QAPortfolio.jsx), find the comment `// SWAP HERO COMPONENT HERE` and toggle which import is active:

```js
// SWAP HERO COMPONENT HERE — uncomment the variant you want active
import HeroWithoutPhoto from './sections/HeroWithoutPhoto';
// import HeroWithPhoto from './sections/HeroWithPhoto';
```

Then find the matching `// SWAP HERO COMPONENT HERE` comment in the JSX render block and swap the component name there too.

### Update the headshot
Drop a new file into `public/headshot.jpg`. The `HeroWithPhoto` component references it at `/headshot.jpg` — no code changes needed.

### Update About, Values, or Contact copy
Content lives directly in the section components:
- [src/sections/AboutSection.jsx](src/sections/AboutSection.jsx)
- [src/sections/PhilosophySection.jsx](src/sections/PhilosophySection.jsx) + [src/data/philosophyPillars.js](src/data/philosophyPillars.js)
- [src/sections/ContactSection.jsx](src/sections/ContactSection.jsx)

### Restore or update the Learning in Public section
The section is built but temporarily hidden. To bring it back:

1. In [src/data/sections.js](src/data/sections.js), uncomment the `learning` entry
2. In [src/QAPortfolio.jsx](src/QAPortfolio.jsx), uncomment the `LearningSection` import and render block, and update the `ContactSection` ref index from `[3]` back to `[4]`
3. In both Hero components, change `scrollToSection(3)` back to `scrollToSection(4)`
4. Update content in [src/data/learningMilestones.js](src/data/learningMilestones.js)

To add a new learning milestone later, add a new entry object to [src/data/learningMilestones.js](src/data/learningMilestones.js) — the section renders them automatically.

---

## Tech stack

| | |
|---|---|
| Framework | React 19 |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Fonts | Bebas Neue (headings), DM Sans (body) via Google Fonts |
| Icons | lucide-react |
| Deployment | GitHub Pages |

---

## Deployment

Pushes to `main` trigger the GitHub Pages deployment workflow automatically.  
The Vite base path is set to `/me/` in [vite.config.js](vite.config.js) to match the repo name.  
If the repo is ever renamed, update `base` in `vite.config.js` to match.

---

## Contact

- **Email**: heatherlynn.frank@gmail.com
- **LinkedIn**: [linkedin.com/in/heatherlynnfrank](https://linkedin.com/in/heatherlynnfrank)
- **GitHub**: [github.com/sjcswank](https://github.com/sjcswank)

import './App.css'

/**
 * 
 * portfolio/
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
 * @returns 
 */

import Home from './pages/home/Home';

function App() {
  return (
    <Home/>
  );
}

export default App;
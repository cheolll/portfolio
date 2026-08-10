import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'


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
function App() {

  return (
    <>
      <Hero />
    </>
  )
}

export default App

import React from 'react'

import { Layout } from './components/Layout.js';
import { Hero } from './components/Hero.js';
import { HeroIllustration } from './components/HeroIllustration.js';
import "./components/assets.css";

export const App = () =>{
  return (
    <Layout>
      <Hero
        title="Grupo 6"
        content="Sistemas de bases de datos 1"
        illustration={HeroIllustration}
      />
    </Layout>
  )
}
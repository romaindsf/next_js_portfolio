'use client'
import Accueil from './components/Accueil'
import Presentation from './components/Presentation'
import Realisation from './components/Realisation'
import Activites from './components/Activites'
import Competences from './components/Competences'
import Contact from './components/Contact'
import CV from './components/CV'

export default function Home() {
  return (
    <>
      <Accueil />
      <Presentation />
      <Realisation />
      <Activites />
      <Competences />
      <Contact />
      <CV />
    </>
  )
}

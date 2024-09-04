import Headers from './components/Headers'
import BottomNav from './components/NavBars/BottomNav'
import Hero from './components/HeroSections/Hero'
import HeroSectionTwo from './components/HeroSections/HeroSectionTwo'
import HeroSectionThree from './components/HeroSections/HeroSectionThree'
import HeroSectionFour from './components/HeroSections/HeroSectionFour'

function App () {
  return (
    <>
      <Headers />
      <Hero />
      <HeroSectionTwo />
      <HeroSectionThree />
      <HeroSectionFour />
      <BottomNav />
    </>
  )
}

export default App

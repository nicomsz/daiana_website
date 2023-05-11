import { Example } from './components/SideMenu/Example'
import NavBar from './components/NavBar'
import Introduction from './components/Introduction/Introduction'
import AboutMe from './components/About-Me/About-me'
import Micropigmentation from './components/Micropigmentation/micropigmentation'
import GoogleMap from './components/GoogleMap/GoogleMap'
import { Sacramento } from '@next/font/google'

const sacramento = Sacramento({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Home() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <Example />
      <Introduction />
      <AboutMe />
      <Micropigmentation />
      <div className="pb-8 pt-4 text-center text-6xl">
        <p className={sacramento.className}>Vamos criar algo juntos?</p>
      </div>
      <GoogleMap />
    </>
  )
}

import { Example } from './components/SideMenu/Example'
import NavBar from './components/NavBar'
import Introduction from './components/Introduction/Introduction'
import AboutMe from './components/About-Me/About-me'
import Micropigmentation from './components/Micropigmentation/micropigmentation'
import GoogleMap from './components/GoogleMap/GoogleMap'

// import TypeWritterText from './components/TypeWritterText'

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
      <GoogleMap />
    </>
  )
}

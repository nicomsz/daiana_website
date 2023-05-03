import { Example } from './components/SideMenu/Example'
import NavBar from './components/NavBar'
import Introduction from './components/Introduction/Introduction'
import AboutMe from './components/About-Me/About-me'
import Micropigmentation from './components/Micropigmentation/micropigmentation'

// import TypeWritterText from './components/TypeWritterText'

export default function Home() {
  return (
    <div className="w-full">
      <nav>
        <NavBar />
      </nav>

      <Example />
      <Introduction />
      <div className="bg-background-color">
        <AboutMe />
        <Micropigmentation />
      </div>
    </div>
  )
}

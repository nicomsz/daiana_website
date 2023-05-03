import { Example } from './components/SideMenu/Example'
import NavBar from './components/NavBar'
import Introduction from './components/Introduction'
// import TypeWritterText from './components/TypeWritterText'

export default function Home() {
  return (
    <div className="w-full">
      <nav>
        <NavBar />
      </nav>

      <Example />
      <Introduction />
      {/* <TypeWritterText /> */}
    </div>
  )
}

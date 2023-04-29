import DaiIcon from './components/DaiIcon'
import Example from './components/Example'
import TypeWritterText from './components/TypeWritterText'

export default function Home() {
  return (
    <>
      <Example />
      <div className="w-[600px] content-center align-middle text-center flex flex-row pl-[24rem]">
        <TypeWritterText />
      </div>
      <div className="flex flex-row-reverse">
        <DaiIcon width={150} height={150} />
      </div>
    </>
  )
}

import { Montserrat } from '@next/font/google'
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
})
export default function NavBar() {
  return (
    <nav className="fixed mx-auto h-[76px] w-full content-center bg-nav-bar-nude">
      <div className="mx-auto flex w-fit flex-row pt-2 align-middle">
        <div className={`${montserrat.className} pr-[5px] pt-[8px] text-4xl`}>
          DAI OLIVEIRA - SOBRANCELHAS E CÍLIOS
        </div>
      </div>
    </nav>
  )
}

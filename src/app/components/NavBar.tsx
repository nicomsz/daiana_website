import { Montserrat } from '@next/font/google'
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
})
export default function NavBar() {
  return (
    <nav className="fixed mx-auto h-[76px] w-screen content-center bg-nav-bar-nude">
      <div className="mr-1 flex w-fit flex-row pt-2 align-middle tablet:mx-auto lg:mx-auto">
        <div
          className={`${montserrat.className} pl-20 pt-5 text-[0.85rem] tablet:mx-auto tablet:pt-4 tablet:text-xl lg:mx-auto lg:pr-[5px] lg:pt-[8px] lg:text-4xl`}
        >
          DAI OLIVEIRA - SOBRANCELHAS E CÍLIOS
        </div>
      </div>
    </nav>
  )
}

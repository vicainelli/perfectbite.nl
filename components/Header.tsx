import { LinkWhatsapp } from "./LinkWhatsapp"
import { LanguageSelector } from './LanguageSelector'
import Image from "next/image"
const Header = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="py-2 px-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex-1 mr-6">
            <Image src="/perfect-bite.png" alt="Aline Yumi brigadeiros" width={200} height={43} />
          </div>
          <nav className="flex items-center">
            <LinkWhatsapp />
            <div className="ml-6">
              <LanguageSelector />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export { Header }
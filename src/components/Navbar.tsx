import Link from "next/link"
import { Icons } from "./Icons"
import { buttonVariants } from "./ui/Button"


const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-10 py-2 shadow">
      <nav className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 sm:h-10 sm:w-10" />
          <h3 className="hidden select-none text-zinc-700 font-semibold md:block">Connectit</h3>
        </Link>
        <Link href="sign-in" className={buttonVariants()}>Sign In</Link>
      </nav>
    </header>
  )
}

export default Navbar

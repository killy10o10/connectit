import Link from "next/link"
import { Icons } from "./Icons"
import { buttonVariants } from "./ui/Button"
import UserAuthForm from "./UserAuthForm"

const SignInForm = () => {
  return (
    <div className="container mx-auto flex flex-col w-full justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-8 w-8" />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a Connectit account and agree to our User Agreement and Privacy Policy
        </p>

        <UserAuthForm />

        <p className="px-8 text-center text-sm text-zinc-700">
          New to connectit?{' '}
          <Link href="sign-up" className={buttonVariants({variant: "subtle"})}>Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default SignInForm

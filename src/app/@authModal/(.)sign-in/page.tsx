"use client"
import SignInForm from "@/components/SignInForm"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"


const SignInModal = () => {
  const router = useRouter()

  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogContent className="sm:max-w-[425px]">
        <SignInForm />
      </DialogContent>
    </Dialog>
  )
}

export default SignInModal

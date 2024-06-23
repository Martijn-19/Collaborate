import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { createProject, getProject } from "@/convex/projects"
import { SignInButton, UserButton } from "@clerk/nextjs"
import { Authenticated, Unauthenticated } from "convex/react"
import { HeaderActions } from './header-actions'

export function Header() {
  return (
    <div className="bg-slate-900 py-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex items-center gap-4 text-2xl'>
            <Image src="/ilionx.png" width={50} height={50} alt="Ilionx Logo" className='rounded'/>
            Collaborate 🔐
        </div>
        <div className='flex items-center gap-6'>
        <ModeToggle />
        <HeaderActions />
        </div>
      </div>
    </div>
  );
}

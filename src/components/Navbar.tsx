import Link from 'next/link'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import { currentUser } from '@clerk/nextjs/server'
import { syncUser } from '@/actions/user.action'
import { DoodleBolt, DoodleSparkle } from './decorative/Doodles'

async function Navbar() {
  const user = await currentUser()
  if (user) await syncUser()
  return (
    <div className="sticky top-0 z-50 w-full bg-background/80 px-3 pt-3 backdrop-blur-md sm:px-4">
      <nav className="glass-panel mx-auto max-w-7xl rounded-full border border-border shadow-[0_8px_32px_-12px_rgba(255,193,7,0.28)] transition-shadow duration-200 hover:shadow-[0_10px_36px_-10px_rgba(255,193,7,0.38)] dark:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="relative flex items-center gap-2 text-xl font-bold tracking-wide text-foreground"
          >
            <span className="flex size-8 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <DoodleBolt className="size-4" />
            </span>
            Klyro
            <DoodleSparkle className="doodle absolute -top-2 -right-4 size-3 text-brand-pink" />
          </Link>

          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
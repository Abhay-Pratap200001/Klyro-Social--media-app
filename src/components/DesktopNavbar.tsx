import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { ModeToggle } from "./toggle-mode";
import { NavPill } from "./NavPill";

async function DesktopNavbar() {
  const user = await currentUser();

  return (
    <div className="hidden md:flex items-center gap-1.5">
      <ModeToggle />

      <NavPill href="/" icon={<HomeIcon className="h-4 w-4" />} label="Home" />

      {user ? (
        <>
          <NavPill
            href="/notifications"
            icon={<BellIcon className="h-4 w-4" />}
            label="Notifications"
          />
          <NavPill
            href={`/profile/${
              user.username ?? user.emailAddresses[0].emailAddress.split("@")[0]
            }`}
            icon={<UserIcon className="h-4 w-4" />}
            label="Profile"
          />
          <UserButton />
        </>
      ) : (
        <SignInButton mode="modal">
          <Button variant="default">Sign In</Button>
        </SignInButton>
      )}
    </div>
  );
}
export default DesktopNavbar;
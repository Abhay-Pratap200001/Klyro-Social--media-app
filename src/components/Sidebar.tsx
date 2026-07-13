import { currentUser } from "@clerk/nextjs/server";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { getUserByClerkId } from "@/actions/user.action";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { LinkIcon, MapPinIcon } from "lucide-react";
import {
  DoodleBolt,
  DoodleDots,
  DoodleStar,
  DoodleWave,
  DoodleZigzag,
} from "./decorative/Doodles";

async function Sidebar() {
  const authUser = await currentUser();
  if (!authUser) return <UnAuthenticatedSidebar />;

  const user = await getUserByClerkId(authUser.id);
  if (!user) return null;

  return (
    <div className="sticky top-24">
      <Card className="glow-yellow relative overflow-visible pt-0">
        <div className="relative h-28 overflow-hidden rounded-t-2xl bg-gradient-to-br from-brand-yellow via-brand-yellow-secondary to-brand-orange">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
          <DoodleStar className="doodle absolute top-3 left-4 size-4 text-white/70" />
          <DoodleZigzag className="doodle absolute right-6 top-8 h-3 w-10 text-white/60" />
          <DoodleDots className="doodle absolute bottom-6 left-8 h-3 w-9 text-white/50" />
          <DoodleBolt className="doodle absolute right-4 bottom-6 size-4 text-white/70" />
          <DoodleWave className="doodle absolute -bottom-1 left-0 h-4 w-full text-white/25" />
        </div>

        <div className="dot-grid pointer-events-none absolute inset-x-0 top-28 bottom-0 rounded-b-2xl opacity-[0.35]" />

        <CardContent className="relative -mt-10 pt-0">
          <div className="flex flex-col items-center text-center">
            <Link
              href={`/profile/${user.username}`}
              className="flex flex-col items-center justify-center"
            >
              <Avatar className="size-20 rounded-full border-4 border-card shadow-md">
                <AvatarImage src={user.image || "/avatar.png"} />
              </Avatar>

              <div className="mt-3 space-y-1">
                <h3 className="font-semibold text-foreground">{user.name}</h3>
                <p className="text-sm text-muted-foreground">{user.username}</p>
              </div>
            </Link>

            {user.bio ? (
              <p className="mt-3 text-sm text-muted-foreground">{user.bio}</p>
            ):(
                <p className="mt-3 text-sm text-muted-foreground">No Bio</p>
            )}

            <div className="mt-4 grid w-full grid-cols-2 gap-3">
              <div className="surface-yellow rounded-2xl border border-border py-3 shadow-sm">
                <p className="font-semibold text-foreground">{user._count.following}</p>
                <p className="text-xs text-muted-foreground">Following</p>
              </div>
              <div className="surface-pink rounded-2xl border border-border py-3 shadow-sm">
                <p className="font-semibold text-foreground">{user._count.followers}</p>
                <p className="text-xs text-muted-foreground">Followers</p>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="w-full space-y-2 text-sm">
              <div className="flex items-center text-muted-foreground">
                <MapPinIcon className="w-4 h-4 mr-2 text-brand-orange" />
                {user.location || "No location"}
              </div>
              <div className="flex items-center text-muted-foreground">
                <LinkIcon className="w-4 h-4 mr-2 shrink-0 text-brand-orange" />
                {user.website ? (
                  <a
                    href={`${user.website}`}
                    className="hover:underline truncate"
                    target="_blank"
                  >
                    {user.website}
                  </a>
                ) : (
                  "No website"
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Sidebar;

const UnAuthenticatedSidebar = () => (
  <div className="sticky top-24">
    <Card className="surface-yellow relative overflow-visible">
      <DoodleStar className="doodle absolute -top-2 -right-2 size-4 text-brand-orange/60" />
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">
          Welcome Back!
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-muted-foreground mb-4">
          Login to access your profile and connect with others.
        </p>
        <SignInButton mode="modal">
          <Button className="w-full" variant="outline">
            Login
          </Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button className="w-full mt-2" variant="default">
            Sign Up
          </Button>
        </SignUpButton>
      </CardContent>
    </Card>
  </div>
);

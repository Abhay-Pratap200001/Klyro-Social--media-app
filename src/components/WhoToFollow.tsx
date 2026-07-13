import { getRandomUsers } from "@/actions/user.action";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import FollowButton from "./FollowButton";
import { DoodleSparkle } from "./decorative/Doodles";

async function WhoToFollow() {
  const users = await getRandomUsers();

  if (users.length === 0) return null;

  return (
    <Card className="surface-lavender card-hover relative overflow-visible">
      <DoodleSparkle className="doodle absolute -top-2 -right-2 size-4 text-brand-purple/70" />
      <CardHeader>
        <CardTitle className="text-base">Who to Follow</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1.5">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between gap-2 rounded-2xl p-2 transition-colors duration-200 hover:bg-card/70"
            >
              <div className="flex items-center gap-2.5">
                <Link href={`/profile/${user.username}`}>
                  <Avatar className="size-10 border-2 border-primary/15">
                    <AvatarImage src={user.image ?? "/avatar.png"} />
                  </Avatar>
                </Link>
                <div className="text-xs">
                  <Link href={`/profile/${user.username}`} className="font-medium cursor-pointer text-foreground">
                    {user.name}
                  </Link>
                  <p className="text-muted-foreground">@{user.username}</p>
                  <p className="text-muted-foreground">{user._count.followers} followers</p>
                </div>
              </div>
              <FollowButton userId={user.id} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
export default WhoToFollow;
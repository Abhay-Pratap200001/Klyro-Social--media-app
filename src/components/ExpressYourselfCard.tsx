import Link from "next/link";
import { Button } from "./ui/button";
import {
  DoodleBolt,
  DoodleDots,
  DoodleSparkle,
  DoodleStar,
  DoodleWave,
} from "./decorative/Doodles";

function ExpressYourselfCard() {
  return (
    <div className="card-hover relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-brand-yellow via-brand-yellow-secondary to-brand-orange p-6 text-[#1F2937] shadow-[0_10px_28px_-12px_rgba(255,152,0,0.55)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.4),transparent_55%)]" />
      <div className="absolute -top-10 -right-10 size-32 rounded-full bg-white/15 blur-2xl" />

      <DoodleStar className="doodle absolute top-4 right-14 size-4 text-white/60" />
      <DoodleDots className="doodle absolute right-4 bottom-16 h-3 w-10 text-white/50" />
      <DoodleSparkle className="doodle absolute top-3 right-4 size-5 text-white/70" />
      <DoodleWave className="doodle absolute -bottom-1 left-0 h-4 w-full text-white/25" />

      <div className="relative flex size-9 items-center justify-center rounded-2xl bg-white/30">
        <DoodleBolt className="size-4" />
      </div>

      <h3 className="relative mt-4 text-lg font-semibold">Express Yourself</h3>
      <p className="relative mt-1 text-sm text-[#1F2937]/80">
        Share your thoughts, connect with friends and the world around you.
      </p>

      <Button asChild className="relative mt-4 bg-[#1F2937] text-white hover:bg-[#1F2937]/90">
        <Link href="/">Create a Post</Link>
      </Button>
    </div>
  );
}

export default ExpressYourselfCard;

import {
  DoodleBolt,
  DoodleCurve,
  DoodleDots,
  DoodleSparkle,
  DoodleStar,
  DoodleZigzag,
} from "./Doodles";

function BackgroundDecor() {
  return (
    <div
      aria-hidden="true"
      className="doodle fixed inset-0 -z-10 overflow-hidden"
    >
      {/* large soft blurred blobs */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-[#FFF9D6] opacity-70 blur-3xl dark:bg-brand-yellow/10 dark:opacity-100" />
      <div className="absolute top-[-8%] right-[-12%] h-[560px] w-[560px] rounded-full bg-[#FFEAF5] opacity-60 blur-3xl dark:bg-brand-purple/10 dark:opacity-100" />
      <div className="absolute bottom-[-15%] left-[8%] h-[480px] w-[480px] rounded-full bg-[#F5EEFF] opacity-60 blur-3xl dark:bg-brand-blue/10 dark:opacity-100" />
      <div className="absolute right-[6%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-[#FFEFD8] opacity-60 blur-3xl dark:bg-brand-orange/10 dark:opacity-100" />
      <div className="absolute top-[35%] left-[45%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#FFF0C8] opacity-40 blur-3xl dark:bg-brand-yellow/10 dark:opacity-80" />

      {/* subtle dotted grid wash */}
      <div className="dot-grid absolute inset-0 opacity-30 dark:opacity-20" />

      {/* scattered doodles */}
      <DoodleStar className="absolute top-[12%] left-[8%] size-4 text-brand-pink/25 dark:text-brand-yellow/30" />
      <DoodleSparkle className="absolute top-[20%] right-[12%] size-5 text-brand-orange/25 dark:text-brand-yellow/30" />
      <DoodleDots className="absolute top-[45%] left-[4%] h-3 w-10 text-brand-purple/25 dark:text-brand-purple/30" />
      <DoodleZigzag className="absolute bottom-[30%] right-[6%] h-3 w-12 text-brand-blue/25 dark:text-brand-blue/30" />
      <DoodleBolt className="absolute bottom-[15%] left-[15%] size-5 text-brand-yellow/40 dark:text-brand-yellow/30" />
      <DoodleCurve className="absolute top-[60%] right-[20%] size-8 text-brand-pink/20 dark:text-brand-purple/25" />
      <DoodleStar className="absolute bottom-[8%] right-[35%] size-3 text-brand-purple/25 dark:text-brand-yellow/25" />
      <DoodleSparkle className="absolute top-[5%] left-[40%] size-3 text-brand-yellow/40 dark:text-brand-yellow/25" />
    </div>
  );
}

export default BackgroundDecor;

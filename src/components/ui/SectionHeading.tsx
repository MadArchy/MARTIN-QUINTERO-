import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  action,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between",
        align === "center" && "items-center text-center lg:flex-col lg:items-center",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

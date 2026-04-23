type SectionHeadingProps = {
  kicker: string;
  title: string;
  description: string;
};

export function SectionHeading({ kicker, title, description }: SectionHeadingProps) {
  return (
    <header className="max-w-2xl">
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-4 text-3xl font-semibold md:text-5xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-secondary md:text-base">{description}</p>
    </header>
  );
}

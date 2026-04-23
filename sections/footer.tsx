export function FooterSection() {
  const name = "ABDOU".split("");

  return (
    <footer className="border-t border-edge/80 px-6 py-8 md:px-10">
      <div className="mx-auto grid max-w-6xl items-end gap-6 text-secondary md:grid-cols-[auto,1fr]">
        <div className="hidden gap-1 md:flex md:flex-col">
          {name.map((letter, index) => (
            <span key={`${letter}-${index}`} className="text-xs uppercase tracking-[0.2em]">
              {letter}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.12em]">
          <p>© {new Date().getFullYear()} Abdou</p>
          <a href="mailto:hello@example.com" className="transition hover:text-white">
            hello@example.com
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

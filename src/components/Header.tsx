import Image from "next/image";

export default function Header() {
  return (
    <header className="mb-8 flex items-center gap-5">
      <div className="size-[120px] shrink-0 overflow-hidden rounded-full">
        <Image
          src="/profile-natural.jpg"
          alt="Suin Kim"
          width={120}
          height={160}
          className="h-full w-full scale-[1.2] object-cover object-[center_25%]"
          priority
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Suin Kim</h1>
        <p className="mt-1 text-muted">Software Engineer</p>
        <p className="mt-2 text-sm text-muted">
          <a href="mailto:starcat370@gmail.com">starcat370@gmail.com</a>
          {" · "}
          <a href="https://github.com/starcat37" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {" · "}
          <a href="https://www.linkedin.com/in/starcat37/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {" · "}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            CV (PDF)
          </a>
        </p>
      </div>
    </header>
  );
}

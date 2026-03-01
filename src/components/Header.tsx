export default function Header() {
  return (
    <header className="mb-8">
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
    </header>
  );
}

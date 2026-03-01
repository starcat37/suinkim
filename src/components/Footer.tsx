export default function Footer() {
  return (
    <footer className="mt-12 border-t border-border pt-6 pb-8 text-sm text-muted">
      <p>
        <a href="https://github.com/starcat37" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {" · "}
        <a href="https://www.linkedin.com/in/starcat37/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {" · "}
        <a href="mailto:starcat370@gmail.com">Email</a>
      </p>
      <p className="mt-2">&copy; {new Date().getFullYear()} Suin Kim</p>
    </footer>
  );
}

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-lg font-bold uppercase tracking-wide border-b border-border pb-1">
        {title}
      </h2>
      {children}
    </section>
  );
}

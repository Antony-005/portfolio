export default function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="pt-40 pb-16 md:pt-48 md:pb-20 px-6 md:px-10 mx-auto max-w-6xl">
      <p className="label-eyebrow mb-4">{eyebrow}</p>
      <h1 className="text-h2 max-w-2xl">{title}</h1>
      {description && (
        <p className="text-body text-text-muted leading-relaxed mt-6 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
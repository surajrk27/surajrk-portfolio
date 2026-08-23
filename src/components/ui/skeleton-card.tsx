export function SkeletonCard() {
  return (
    <div
      role="status"
      aria-label="Loading project"
      className="animate-pulse border border-border bg-surface p-6"
    >
      <div className="mb-4 h-3 w-1/3 bg-border" />
      <div className="mb-3 h-5 w-3/4 bg-border" />
      <div className="mb-2 h-3.5 w-full bg-border" />
      <div className="mb-5 h-3.5 w-5/6 bg-border" />
      <div className="flex gap-2">
        <div className="h-6 w-16 bg-border" />
        <div className="h-6 w-20 bg-border" />
        <div className="h-6 w-14 bg-border" />
      </div>
      <span className="sr-only">Loading project details…</span>
    </div>
  );
}

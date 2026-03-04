interface ThemeWindowProps {
  variant: 'light' | 'dark' | 'system';
}

export function ThemeWindow({ variant }: ThemeWindowProps) {
  const SkeletonContent = ({ isDark }: { isDark?: boolean }) => (
    <div className={`flex h-full w-full flex-col gap-1 p-1.5 ${isDark ? 'bg-zinc-800' : 'bg-slate-100/50'}`}>
      <div className="mb-1 flex gap-1">
        <div className={`size-1 rounded-full ${isDark ? 'bg-zinc-600' : 'bg-slate-300'}`} />
        <div className={`size-1 rounded-full ${isDark ? 'bg-zinc-600' : 'bg-slate-300'}`} />
        <div className={`size-1 rounded-full ${isDark ? 'bg-zinc-600' : 'bg-slate-300'}`} />
      </div>
      <div className={`h-1.5 w-full rounded-sm ${isDark ? 'bg-zinc-700' : 'bg-slate-200'}`} />
      <div className={`h-1.5 w-[80%] rounded-sm ${isDark ? 'bg-zinc-700' : 'bg-slate-200'}`} />
      <div className={`h-1.5 w-[50%] rounded-sm ${isDark ? 'bg-zinc-700' : 'bg-slate-200'}`} />
    </div>
  );

  return (
    <div className="flex h-14 w-20 overflow-hidden rounded-md border border-inherit shadow-sm">
      {variant === 'light' && <SkeletonContent />}
      {variant === 'dark' && <SkeletonContent isDark />}
      {variant === 'system' && (
        <div className="flex h-full w-full">
          <div className="w-1/2 overflow-hidden">
            <SkeletonContent />
          </div>
          <div className="w-1/2 overflow-hidden border-l border-inherit">
            <SkeletonContent isDark />
          </div>
        </div>
      )}
    </div>
  );
}

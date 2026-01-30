interface ThemeWindowProps {
   variant: 'light' | 'dark' | 'system';
}

export function ThemeWindow({ variant }: ThemeWindowProps) {

   const SkeletonContent = ({ isDark }: { isDark?: boolean }) => (
      <div className={`flex flex-col w-full h-full p-1.5 gap-1 ${isDark ? 'bg-zinc-800' : 'bg-slate-100/50'}`}>
         <div className="flex gap-1 mb-1">
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
      <div className="w-20 h-14 rounded-md border border-inherit overflow-hidden flex shadow-sm">
         {variant === 'light' && <SkeletonContent />}
         {variant === 'dark' && <SkeletonContent isDark />}
         {variant === 'system' && (
            <div className="flex w-full h-full">
               <div className="w-1/2 overflow-hidden"><SkeletonContent /></div>
               <div className="w-1/2 overflow-hidden border-l border-inherit"><SkeletonContent isDark /></div>
            </div>
         )}
      </div>
   );
};
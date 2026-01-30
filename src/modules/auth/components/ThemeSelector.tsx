import { Check } from 'lucide-react';
import { ThemeWindow } from '@/modules/shared/components/ThemeWindow';
import { Label, RadioGroup, RadioGroupItem } from '@/modules/shared/components/ui';

interface ThemeSelectorProps {
   theme?: string;
   setTheme: (t: string) => void;
}

export function ThemeSelector({ theme, setTheme }: ThemeSelectorProps) {
   const options = [
      { value: 'light', label: 'CLARO' },
      { value: 'dark', label: 'OSCURO' },
      { value: 'system', label: 'SISTEMA' },
   ];

   return (
      <div className="flex items-start md:items-center flex-col md:flex-row gap-4 pt-2">
         <Label className="w-48 text-zinc-500 font-medium text-sm">Tema de la aplicación</Label>
         <RadioGroup value={theme} onValueChange={setTheme} className="flex gap-4">
            {options.map((opt) => {
               const isActive = theme === opt.value;
               return (
                  <label key={opt.value} className="group relative flex flex-col items-center cursor-pointer">
                     <RadioGroupItem value={opt.value} className="sr-only" />
                     <div className={`p-1 rounded-lg transition-all ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>
                        <ThemeWindow variant={opt.value as any} />
                     </div>
                     <span className={`mt-2 text-[10px] font-bold tracking-widest ${isActive ? 'text-blue-600' : 'text-zinc-400'}`}>
                        {opt.label}
                     </span>
                     {isActive && (
                        <div className="absolute top-0 right-0 bg-blue-500 text-white rounded-full p-0.5 border-2 border-white dark:border-zinc-950">
                           <Check className="w-2.5 h-2.5" strokeWidth={4} />
                        </div>
                     )}
                  </label>
               );
            })}
         </RadioGroup>
      </div>
   );
}
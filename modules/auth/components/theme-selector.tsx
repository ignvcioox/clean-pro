import { ThemeWindow } from '@/modules/shared/components/ThemeWindow';
import {
  Label,
  RadioGroup,
  RadioGroupItem,
} from '@/modules/shared/components/ui';

import { Check } from 'lucide-react';

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
    <div className="flex flex-col items-start gap-4 pt-2 md:flex-row md:items-center">
      <Label className="w-48 text-sm font-medium text-zinc-500">
        Tema de la aplicación
      </Label>
      <RadioGroup value={theme} onValueChange={setTheme} className="flex gap-4">
        {options.map((opt) => {
          const isActive = theme === opt.value;
          return (
            <label
              key={opt.value}
              className="group relative flex cursor-pointer flex-col items-center"
            >
              <RadioGroupItem value={opt.value} className="sr-only" />
              <div
                className={`rounded-lg p-1 transition-all ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}
              >
                <ThemeWindow variant={opt.value as any} />
              </div>
              <span
                className={`mt-2 text-[10px] font-bold tracking-widest ${isActive ? 'text-blue-600' : 'text-zinc-400'}`}
              >
                {opt.label}
              </span>
              {isActive && (
                <div className="absolute top-0 right-0 rounded-full border-2 border-white bg-blue-500 p-0.5 text-white dark:border-zinc-950">
                  <Check className="h-2.5 w-2.5" strokeWidth={4} />
                </div>
              )}
            </label>
          );
        })}
      </RadioGroup>
    </div>
  );
}

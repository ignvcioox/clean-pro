import { Label } from '@/modules/shared/components/ui/label';

interface InformationFieldProps {
   label? : string;
   value ?: React.ReactNode;
   right ?: React.ReactNode;
}

export function InformationField({ label, value, right }: InformationFieldProps) {
   return (
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center py-1">

         <Label className="text-sm font-medium text-primary sm:w-52 shrink-0">
            {label}
         </Label>

         <div className="flex flex-1 items-center justify-between gap-4">
            {value && (
               <div className="text-sm text-muted-foreground leading-relaxed max-w-md">
                  {value}
               </div>
            )}

            {right && (
               <div className="ml-auto shrink-0 flex items-center">
                  {right}
               </div>
            )}
         </div>
      </div>
   );
};
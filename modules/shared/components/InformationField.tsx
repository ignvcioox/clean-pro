import { Label } from '@/modules/shared/components/ui/label';

interface InformationFieldProps {
  label?: string;
  value?: React.ReactNode;
  right?: React.ReactNode;
}

export function InformationField({
  label,
  value,
  right,
}: InformationFieldProps) {
  return (
    <div className="flex flex-col gap-2 py-1 sm:flex-row sm:items-center">
      <Label className="text-primary shrink-0 text-sm font-medium sm:w-52">
        {label}
      </Label>

      <div className="flex flex-1 items-center justify-between gap-4">
        {value && (
          <div className="text-muted-foreground max-w-md text-sm leading-relaxed">
            {value}
          </div>
        )}

        {right && (
          <div className="ml-auto flex shrink-0 items-center">{right}</div>
        )}
      </div>
    </div>
  );
}

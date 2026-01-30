"use client"

import * as React from "react"

import { cn } from "@/src/modules/shared/lib/utils"
import { Eye, EyeOff } from "lucide-react";

type InputProps = React.ComponentProps<"input"> & {
   showPasswordToggle?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
   ({ className, type, showPasswordToggle = false, ...props }, ref) => {
      const [showPassword, setShowPassword] = React.useState(false);

      const isPassword = type === "password" && showPasswordToggle;

      return (
         <div className="relative">
            <input
               ref={ref}
               type={isPassword && showPassword ? "text" : type}
               data-slot="input"
               className={cn(
                  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 pr-10 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                  className
               )}
               {...props}
            />

            {isPassword && (
               <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
               >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
               </button>
            )}
         </div>
      );
   }
);

Input.displayName = "Input";

export { Input };
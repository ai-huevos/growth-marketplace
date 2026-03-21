"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface DiagnosticOption {
  value: string;
  label: string;
}

interface DiagnosticCardProps {
  question: string;
  options: DiagnosticOption[];
  onSelect: (value: string) => void;
}

export function DiagnosticCard({ question, options, onSelect }: DiagnosticCardProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    // Brief delay to show the animation before advancing
    setTimeout(() => {
      onSelect(value);
      setSelectedValue(null);
    }, 400);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-8 px-4 py-8">
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-2xl font-semibold text-foreground md:text-3xl lg:text-4xl"
      >
        {question}
      </motion.h2>

      <div className="w-full max-w-xl space-y-4">
        {options.map((option, i) => {
          const isSelected = selectedValue === option.value;
          const isFaded = selectedValue !== null && !isSelected;

          return (
            <motion.div
              key={option.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isFaded ? 0.4 : 1, y: 0, scale: isSelected ? 1.02 : 1 }}
              transition={{ delay: i * 0.1, duration: 0.2 }}
            >
              <Card
                className={cn(
                  "cursor-pointer p-6 transition-all hover:border-growos-primary hover:shadow-md",
                  isSelected && "border-growos-primary bg-primary/5 shadow-md ring-1 ring-growos-primary"
                )}
                onClick={() => handleSelect(option.value)}
              >
                <div className="flex items-center space-x-4">
                  <div className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full border",
                    isSelected ? "border-growos-primary bg-growos-primary" : "border-muted-foreground"
                  )}>
                    {isSelected && <div className="h-2 w-2 rounded-full bg-white" />}
                  </div>
                  <span className="text-lg font-medium">{option.label}</span>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAmount(amount: number) {
  if (amount >= 100000 && amount < 1000000) {
    return `${(amount / 1000).toFixed(1)}K`;
  } else if (amount >= 1000000 && amount < 100000000) {
    return `${(amount / 1000000).toFixed(1)}M`;
  } else return amount.toString();
}

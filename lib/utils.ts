import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Calculates years of experience from a start date. Rounds up if 6+ months into next year. */
export function getExperienceYears(startDate: Date): number {
  const now = new Date();
  const diffMs = now.getTime() - startDate.getTime();
  const years = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  const fullYears = Math.floor(years);
  const remainingMonths = (years - fullYears) * 12;
  return remainingMonths >= 6 ? fullYears + 1 : fullYears;
}

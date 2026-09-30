export type NocturneVariant = "midnight" | string;
export const NOCTURNE_TITLES: Record<string, string> = { midnight: 'Midnight' };
export const NOCTURNE_VARIANTS = ["midnight"] as const;
export function buildNocturneDocument(variant: string) {
  return '';
}

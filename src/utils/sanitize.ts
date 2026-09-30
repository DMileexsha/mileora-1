export function sanitizeString(str: string): string {
  // Truncate to reasonable length (e.g. 50 characters)
  const truncated = str.slice(0, 50);
  // Allow Sinhala Unicode characters and common English letters/spaces
  // Sinhala Unicode block: \u0D80-\u0DFF
  const regex = /[^a-zA-Z\s\u0D80-\u0DFF]/g;
  return truncated.replace(regex, '');
}

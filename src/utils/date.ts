interface FormatDateOptions {
  month?: "long" | "short"
  /** Always show the year. When false, the year is shown only if it differs from the current year. */
  forceYear?: boolean
}

export function formatDate(
  date: string | Date,
  { month = "long", forceYear = true }: FormatDateOptions = {},
): string {
  const d = date instanceof Date ? date : new Date(date)
  const showYear =
    forceYear || d.getUTCFullYear() !== new Date().getUTCFullYear()
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    month,
    day: "numeric",
    ...(showYear ? { year: "numeric" } : {}),
  }).format(d)
}

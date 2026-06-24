// Ann's Flowers & Gifts — Ashland, AL (Central Time)
// Mon–Fri: 8:00 AM – 4:30 PM | Sat: 8:00 AM – 12:00 PM | Sun: Closed

function ctParts(now: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = get("weekday");
  const time = (parseInt(get("hour")) % 24) * 60 + parseInt(get("minute"));
  return { day, time };
}

export function isStoreOpen(): boolean {
  const { day, time } = ctParts(new Date());
  if (day === "Sun") return false;
  if (day === "Sat") return time >= 480 && time < 720;
  return time >= 480 && time < 990;
}

export function msUntilOpen(): number {
  const now = new Date();
  const { day, time } = ctParts(now);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayIdx = days.indexOf(day);

  // Before 8am today (and today is a weekday or Saturday)
  if (day !== "Sun" && time < 480) {
    return (480 - time) * 60_000;
  }

  // Find the next open day starting from tomorrow
  for (let d = 1; d <= 7; d++) {
    const nextDay = days[(dayIdx + d) % 7];
    if (nextDay === "Sun") continue;
    return ((24 * 60 - time) + (d - 1) * 24 * 60 + 480) * 60_000;
  }

  return 0;
}

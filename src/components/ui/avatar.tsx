const PALETTE = [
  { bg: "bg-teal-100", text: "text-teal-700" },
  { bg: "bg-clay-100", text: "text-clay-700" },
  { bg: "bg-violet-100", text: "text-violet-700" },
  { bg: "bg-emerald-100", text: "text-emerald-700" },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Avatar({ name, index = 0 }: { name: string; index?: number }) {
  const { bg, text } = PALETTE[index % PALETTE.length];
  return (
    <div
      aria-hidden="true"
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-heading text-base font-medium ${bg} ${text}`}
    >
      {initials(name)}
    </div>
  );
}

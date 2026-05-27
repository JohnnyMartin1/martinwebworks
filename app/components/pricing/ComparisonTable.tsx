import { CheckIcon } from "@/app/components/ui/Icons";
import { PACKAGE_COMPARISON } from "@/app/data/packages";

const headerCellBase =
  "px-4 py-4 text-left text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[var(--warm-ash)]";

export function ComparisonTable() {
  return (
    <div className="rounded-2xl border border-[var(--divider)] bg-[var(--paper-white)] shadow-paper overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left">
          <thead className="bg-[var(--cream-deep)]">
            <tr>
              <th scope="col" className={headerCellBase}>Feature</th>
              <th scope="col" className={headerCellBase}>Starter</th>
              <th scope="col" className={`${headerCellBase} text-[var(--ink-navy)]`}>Growth</th>
              <th scope="col" className={headerCellBase}>Authority</th>
            </tr>
          </thead>
          <tbody>
            {PACKAGE_COMPARISON.map((row, idx) => (
              <tr
                key={row.label}
                className={`${idx % 2 === 1 ? "bg-[#fbf8f1]" : ""} hairline-top first:border-t-0`}
              >
                <td className="px-4 py-3.5 text-[0.95rem] font-medium text-[var(--ink-navy)]">{row.label}</td>
                <td className="px-4 py-3.5 text-[0.95rem] text-[var(--warm-ash)]">
                  <Cell value={row.starter} />
                </td>
                <td className="px-4 py-3.5 text-[0.95rem] text-[var(--ink-navy)] font-medium">
                  <Cell value={row.growth} highlight />
                </td>
                <td className="px-4 py-3.5 text-[0.95rem] text-[var(--warm-ash)]">
                  <Cell value={row.authority} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Cell({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
  if (value === true) {
    return (
      <span
        className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
          highlight
            ? "bg-[var(--signal-blue-soft)] text-[var(--signal-blue-deep)]"
            : "bg-[var(--cream-deep)] text-[var(--warm-ash)]"
        }`}
      >
        <CheckIcon className="h-3.5 w-3.5" />
      </span>
    );
  }
  if (value === false) {
    return <span aria-hidden className="inline-block h-px w-4 bg-[var(--warm-ash-soft)]" />;
  }
  return <span>{value}</span>;
}

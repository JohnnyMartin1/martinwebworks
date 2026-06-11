/**
 * Lighthouse score rings.
 *
 * Base generated with 21st Magic (/ui), then adapted to Martin Web Works
 * tokens: emerald rings on a cream track, ink numerals, warm-ash labels.
 *
 * Static by design. Per the homepage motion rule, only the comparison
 * slider and existing hover states animate, so the count-up animation from
 * the generated base was removed.
 */

type ScoreRingProps = {
  score: number;
  label: string;
  size?: number;
  strokeWidth?: number;
};

function ScoreRing({ score, label, size = 88, strokeWidth = 7 }: ScoreRingProps) {
  const clamped = Math.min(Math.max(score, 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - clamped / 100);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative inline-flex items-center justify-center">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="-rotate-90"
          role="img"
          aria-label={`${label}: ${clamped} out of 100`}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="var(--cream-edge)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="var(--success-emerald)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-[1.35rem] font-semibold tracking-[-0.01em] text-[var(--ink-navy)]">
          {clamped}
        </span>
      </div>
      <span className="text-[0.8rem] font-medium text-[var(--warm-ash)]">{label}</span>
    </div>
  );
}

export type LighthouseScores = {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
};

export function ScoreRings({
  scores = { performance: 100, accessibility: 100, bestPractices: 100, seo: 100 },
}: {
  scores?: LighthouseScores;
}) {
  const metrics = [
    { label: "Performance", score: scores.performance },
    { label: "Accessibility", score: scores.accessibility },
    { label: "Best Practices", score: scores.bestPractices },
    { label: "SEO", score: scores.seo },
  ];

  return (
    <ul className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-0">
      {metrics.map((m) => (
        <li key={m.label} className="flex justify-center">
          <ScoreRing score={m.score} label={m.label} />
        </li>
      ))}
    </ul>
  );
}

import { DocFooter } from '@/components/DocFooter';

const NEUTRAL_STOPS = ['0', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
const PRIMARY_STOPS = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

function ColorSwatch({ variable, label }: { variable: string; label: string }) {
  return (
    <div className="flex flex-col">
      <div
        className="h-12 w-full rounded-md border border-border/50"
        style={{ backgroundColor: `var(${variable})` }}
      />
      <p className="mt-1.5 text-xs font-medium">{label}</p>
    </div>
  );
}

export function ColorsDocs() {
  return (
    <article className="prose prose-neutral dark:prose-invert w-full max-w-none">
      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">Colors</h1>
      <p className="lead text-lg text-muted-foreground">
        The color palette includes neutral grays, primary blues, and semantic colors for states like
        error.
      </p>
      <h2 className="mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight">
        Semantic colors
      </h2>
      <p>Use semantic tokens for consistent theming across light and dark mode:</p>
      <ul>
        <li>
          <code>--hepta-color-background-primary</code> – page background
        </li>
        <li>
          <code>--hepta-color-text-primary</code> – primary text
        </li>
        <li>
          <code>--hepta-color-button-primary-background</code> – primary button background
        </li>
      </ul>
      <h2 className="mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight">
        Primitive colors
      </h2>
      <p>
        Use primitive tokens for custom UI when semantic tokens don&apos;t fit. Neutral and primary
        scales run from 50 through 950.
      </p>
      <h3 className="mt-6 text-lg font-semibold">Neutral (50–950)</h3>
      <div className="mt-3 grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-12">
        {NEUTRAL_STOPS.map((stop) => (
          <ColorSwatch
            key={stop}
            variable={`--hepta-color-neutral-${stop}`}
            label={stop === '0' ? 'White' : stop === '950' ? 'Black' : `Neutral ${stop}`}
          />
        ))}
      </div>
      <h3 className="mt-8 text-lg font-semibold">Primary (50–950)</h3>
      <div className="mt-3 grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-11">
        {PRIMARY_STOPS.map((stop) => (
          <ColorSwatch key={stop} variable={`--hepta-color-primary-${stop}`} label={`Primary ${stop}`} />
        ))}
      </div>
      <DocFooter prev={{ label: 'Foundations', href: '/foundations' }} next={{ label: 'Icons', href: '/foundations/icons' }} />
    </article>
  );
}

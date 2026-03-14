import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DocFooter } from '@/components/DocFooter';

const SPACING_ROWS = [
  { token: '--hepta-spacing-0', value: '0' },
  { token: '--hepta-spacing-1', value: '4px' },
  { token: '--hepta-spacing-2', value: '8px' },
  { token: '--hepta-spacing-3', value: '12px' },
  { token: '--hepta-spacing-4', value: '16px' },
  { token: '--hepta-spacing-5', value: '20px' },
  { token: '--hepta-spacing-6', value: '24px' },
  { token: '--hepta-spacing-8', value: '32px' },
  { token: '--hepta-spacing-10', value: '40px' },
];

export function SpacingDocs() {
  return (
    <article className="prose prose-neutral dark:prose-invert w-full max-w-none">
      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">Spacing</h1>
      <p className="lead text-lg text-muted-foreground">
        A consistent spacing scale from 0 to 10 defines padding, margins, and gaps across the design system.
      </p>
      <h2 className="mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight">
        Spacing scale
      </h2>
      <p>Use spacing tokens instead of hardcoded pixel values:</p>
      <pre className="rounded-lg border border-border bg-muted p-4">
        <code>{`padding: var(--hepta-spacing-4);
margin-bottom: var(--hepta-spacing-6);
gap: var(--hepta-spacing-2);`}</code>
      </pre>
      <h2 className="mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight">
        Scale reference
      </h2>
      <div className="rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-4">Token</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {SPACING_ROWS.map(({ token, value }) => (
              <TableRow key={token}>
                <TableCell className="pl-4">
                  <code>{token}</code>
                </TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <h2 className="mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight">
        Visual scale
      </h2>
      <div className="flex flex-wrap items-end gap-1 rounded-lg border border-border bg-muted/50 p-6">
        {[
          { token: 0, label: '0' },
          { token: 1, label: '1' },
          { token: 2, label: '2' },
          { token: 3, label: '3' },
          { token: 4, label: '4' },
          { token: 5, label: '5' },
          { token: 6, label: '6' },
          { token: 8, label: '8' },
          { token: 10, label: '10' },
        ].map(({ token, label }) => (
          <div key={token} className="flex flex-col items-center gap-1">
            <div
              className="w-6 rounded bg-primary"
              style={{ height: token === 0 ? 2 : `var(--hepta-spacing-${token})` }}
            />
            <span className="text-xs text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
      <DocFooter
        prev={{ label: 'Typography', href: '/foundations/typography' }}
        next={{ label: 'Themes', href: '/foundations/themes' }}
      />
    </article>
  );
}

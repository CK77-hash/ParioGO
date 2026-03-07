import { DocFooter } from '@/components/DocFooter';
import { Search, Moon, ChevronDown, AlertCircle } from 'lucide-react';

export function IconsDocs() {
  return (
    <article className="prose prose-neutral dark:prose-invert w-full max-w-none">
      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">Icons</h1>
      <p className="lead text-lg text-muted-foreground">
        ParioGO uses Lucide React for consistent, accessible icons throughout the design system.
      </p>
      <h2 className="mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight">
        Installation
      </h2>
      <p>Icons are included via the docs package. Add Lucide React to your project:</p>
      <pre className="rounded-lg border border-border bg-muted p-4">
        <code>{`npm install lucide-react`}</code>
      </pre>
      <h2 className="mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight">
        Usage
      </h2>
      <p>Import icons by name and use them like any React component:</p>
      <pre className="rounded-lg border border-border bg-muted p-4">
        <code>{`import { Search, Moon, ChevronDown } from 'lucide-react';

<Search className="h-4 w-4" />
<Moon className="h-5 w-5 text-muted-foreground" />`}</code>
      </pre>
      <h2 className="mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight">
        Sizing
      </h2>
      <p>
        Use consistent sizes with Tailwind or token-based values. Common sizes: <code>h-4 w-4</code> (16px)
        for inline with text, <code>h-5 w-5</code> (20px) for buttons, <code>h-6 w-6</code> (24px) for headings.
      </p>
      <div className="flex flex-wrap items-center gap-6 rounded-lg border border-border bg-muted/50 p-6">
        <div className="flex flex-col items-center gap-2">
          <Search className="h-4 w-4" />
          <span className="text-xs text-muted-foreground">16px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Moon className="h-5 w-5" />
          <span className="text-xs text-muted-foreground">20px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ChevronDown className="h-6 w-6" />
          <span className="text-xs text-muted-foreground">24px</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <AlertCircle className="h-8 w-8" />
          <span className="text-xs text-muted-foreground">32px</span>
        </div>
      </div>
      <h2 className="mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight">
        Library reference
      </h2>
      <p>
        Browse all 1000+ icons at{' '}
        <a href="https://lucide.dev/icons" target="_blank" rel="noopener noreferrer" className="text-primary underline">
          lucide.dev/icons
        </a>
        . Use <code>currentColor</code> or semantic color tokens so icons inherit text color.
      </p>
      <DocFooter
        prev={{ label: 'Colors', href: '/foundations/colors' }}
        next={{ label: 'Typography', href: '/foundations/typography' }}
      />
    </article>
  );
}

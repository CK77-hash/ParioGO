import { DocFooter } from '@/components/DocFooter';
import { WhenToUse, Related } from '@/components/DocSections';
import { Badge } from '@/components/ui/badge';

export function BadgeDocs() {
  return (
    <article className="prose prose-neutral dark:prose-invert w-full max-w-none">
      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">Badge</h1>
      <p className="lead text-lg text-muted-foreground">
        Displays a badge or label with optional variant styling.
      </p>
      <h2 className="mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight">
        Usage
      </h2>
      <pre className="rounded-lg border border-border bg-muted p-4">
        <code>{`import { Badge } from '@/components/ui/badge';

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}</code>
      </pre>
      <h2 className="mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight">
        Example
      </h2>
      <div className="flex flex-wrap gap-2 py-4">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <WhenToUse
        items={[
          'Status indicators (New, Beta, Deprecated)',
          'Counts or notifications (unread, cart quantity)',
          'Categories or tags',
        ]}
      />
      <h2 className="mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight">
        Props
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-2 text-left">Prop</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Default</th>
              <th className="px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="px-4 py-2">variant</td>
              <td className="px-4 py-2">default | secondary | destructive | outline</td>
              <td className="px-4 py-2">default</td>
              <td className="px-4 py-2">Visual style</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Related components={[{ label: 'Button', href: '/components/button' }]} />
      <DocFooter
        prev={{ label: 'Avatar', href: '/components/avatar' }}
        next={{ label: 'Breadcrumbs', href: '/components/breadcrumbs' }}
      />
    </article>
  );
}

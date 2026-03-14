import { Link } from 'react-router-dom';

const sectionHeading =
  'mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight';

interface WhenToUseProps {
  items: string[];
}

export function WhenToUse({ items }: WhenToUseProps) {
  return (
    <>
      <h2 className={sectionHeading} id="when-to-use">
        When to use
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

interface AccessibilityProps {
  items: string[];
}

export function Accessibility({ items }: AccessibilityProps) {
  return (
    <>
      <h2 className={sectionHeading} id="accessibility">
        Accessibility
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

interface RelatedProps {
  components: { label: string; href: string }[];
}

export function Related({ components }: RelatedProps) {
  return (
    <>
      <h2 className={sectionHeading} id="related">
        Related components
      </h2>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-muted-foreground">
        {components.map((c) => (
          <li key={c.href}>
            <Link to={c.href} className="text-primary hover:underline">
              {c.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

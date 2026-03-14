import { DocFooter } from '@/components/DocFooter';
import { WhenToUse, Related } from '@/components/DocSections';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ScatterChart,
  Scatter,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';

const sharedData = [
  { month: 'Jan', value: 186, value2: 80 },
  { month: 'Feb', value: 305, value2: 120 },
  { month: 'Mar', value: 237, value2: 95 },
  { month: 'Apr', value: 273, value2: 110 },
  { month: 'May', value: 398, value2: 150 },
  { month: 'Jun', value: 404, value2: 160 },
];

const pieData = [
  { name: 'Desktop', value: 420, color: 'hsl(var(--chart-1))' },
  { name: 'Mobile', value: 280, color: 'hsl(var(--chart-2))' },
  { name: 'Tablet', value: 180, color: 'hsl(var(--chart-3))' },
  { name: 'Other', value: 120, color: 'hsl(var(--chart-4))' },
];

const radarData = [
  { subject: 'A', value: 86, fullMark: 100 },
  { subject: 'B', value: 72, fullMark: 100 },
  { subject: 'C', value: 94, fullMark: 100 },
  { subject: 'D', value: 65, fullMark: 100 },
  { subject: 'E', value: 78, fullMark: 100 },
];

const scatterData = [
  { x: 10, y: 20 },
  { x: 15, y: 35 },
  { x: 22, y: 28 },
  { x: 28, y: 45 },
  { x: 35, y: 38 },
  { x: 42, y: 55 },
  { x: 48, y: 50 },
];

const chartConfig = {
  value: { label: 'Value', color: 'hsl(var(--chart-1))' },
  value2: { label: 'Secondary', color: 'hsl(var(--chart-2))' },
} satisfies ChartConfig;

const pieChartConfig = {
  desktop: { label: 'Desktop', color: 'hsl(var(--chart-1))' },
  mobile: { label: 'Mobile', color: 'hsl(var(--chart-2))' },
  tablet: { label: 'Tablet', color: 'hsl(var(--chart-3))' },
  other: { label: 'Other', color: 'hsl(var(--chart-4))' },
} satisfies ChartConfig;

export function ChartDocs() {
  return (
    <article className="prose prose-neutral dark:prose-invert w-full max-w-none">
      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">Chart</h1>
      <p className="lead text-lg text-muted-foreground">
        Data visualization components built with Recharts, styled for the design system.
      </p>

      <h2 className="mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight">
        Chart types
      </h2>
      <p className="text-muted-foreground">
        Recharts supports many chart types. All use <code>ChartContainer</code> for consistent styling and
        theme-aware colors via <code>ChartConfig</code>.
      </p>

      <h3 className="mt-8 text-xl font-semibold">Area chart</h3>
      <p className="text-sm text-muted-foreground">
        Filled area under a line. Good for cumulative or trend-over-time data.
      </p>
      <div className="h-[200px] w-full max-w-md py-4">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <AreaChart data={sharedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="var(--color-value)"
              fill="var(--color-value)"
              fillOpacity={0.4}
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </div>

      <h3 className="mt-8 text-xl font-semibold">Line chart</h3>
      <p className="text-sm text-muted-foreground">
        Single or multiple lines. Ideal for comparing trends across series.
      </p>
      <div className="h-[200px] w-full max-w-md py-4">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart data={sharedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line type="monotone" dataKey="value" stroke="var(--color-value)" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="value2" stroke="var(--color-value2)" strokeWidth={2} dot={false} strokeDasharray="5 5" />
          </LineChart>
        </ChartContainer>
      </div>

      <h3 className="mt-8 text-xl font-semibold">Bar chart</h3>
      <p className="text-sm text-muted-foreground">
        Vertical or horizontal bars. Best for discrete categories.
      </p>
      <p className="text-xs text-muted-foreground font-medium">Horizontal bars</p>
      <div className="h-[200px] w-full max-w-md py-4">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart data={sharedData} layout="vertical" margin={{ left: 12 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" />
            <YAxis dataKey="month" type="category" width={40} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="value" fill="var(--color-value)" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ChartContainer>
      </div>
      <p className="text-xs text-muted-foreground font-medium">Vertical bars (stacked or grouped)</p>
      <div className="h-[200px] w-full max-w-md py-4">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart data={sharedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="value" fill="var(--color-value)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="value2" fill="var(--color-value2)" radius={[4, 4, 0, 0]} opacity={0.8} />
          </BarChart>
        </ChartContainer>
      </div>

      <h3 className="mt-8 text-xl font-semibold">Pie chart</h3>
      <p className="text-sm text-muted-foreground">
        Circular segments for part-to-whole comparisons.
      </p>
      <div className="h-[240px] w-full max-w-md py-4">
        <ChartContainer config={pieChartConfig} className="h-full w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={2}
            >
              {pieData.map((entry, i) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>

      <h3 className="mt-8 text-xl font-semibold">Radar chart</h3>
      <p className="text-sm text-muted-foreground">
        Polar chart for multivariate data or performance comparison.
      </p>
      <div className="h-[240px] w-full max-w-md py-4">
        <ChartContainer config={{ value: { label: 'Score', color: 'hsl(var(--chart-1))' } }} className="h-full w-full">
          <RadarChart data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={90} domain={[0, 100]} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Radar name="Score" dataKey="value" stroke="var(--color-value)" fill="var(--color-value)" fillOpacity={0.4} />
          </RadarChart>
        </ChartContainer>
      </div>

      <h3 className="mt-8 text-xl font-semibold">Scatter chart</h3>
      <p className="text-sm text-muted-foreground">
        XY plot for correlation and distribution.
      </p>
      <div className="h-[200px] w-full max-w-md py-4">
        <ChartContainer config={{ x: { label: 'X', color: 'hsl(var(--chart-1))' }, y: { label: 'Y', color: 'hsl(var(--chart-1))' } }} className="h-full w-full">
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" name="X" />
            <YAxis dataKey="y" name="Y" />
            <ChartTooltip content={<ChartTooltipContent />} cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="Points" data={scatterData} fill="hsl(var(--chart-1))" />
          </ScatterChart>
        </ChartContainer>
      </div>

      <h3 className="mt-8 text-xl font-semibold">Composed chart</h3>
      <p className="text-sm text-muted-foreground">
        Combines Area, Bar, and Line in a single chart.
      </p>
      <div className="h-[200px] w-full max-w-md py-4">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <ComposedChart data={sharedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Area type="monotone" dataKey="value" fill="var(--color-value)" fillOpacity={0.3} stroke="var(--color-value)" />
            <Bar dataKey="value2" fill="var(--color-value2)" radius={[4, 4, 0, 0]} opacity={0.7} />
          </ComposedChart>
        </ChartContainer>
      </div>

      <WhenToUse
        items={[
          'Visualizing trends over time (line, area)',
          'Comparing categories (bar, pie)',
          'Showing distributions (scatter)',
          'Multivariate comparison (radar)',
        ]}
      />
      <h2 className="mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight">
        Usage
      </h2>
      <pre className="rounded-lg border border-border bg-muted p-4">
        <code>{`import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

const chartConfig = {
  value: { label: 'Value', color: 'hsl(var(--chart-1))' },
} satisfies ChartConfig;

<ChartContainer config={chartConfig} className="h-[200px] w-full">
  <AreaChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Area
      type="monotone"
      dataKey="value"
      stroke="var(--color-value)"
      fill="var(--color-value)"
    />
  </AreaChart>
</ChartContainer>`}</code>
      </pre>
      <h2 className="mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight">
        Best practices
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>Provide text alternatives (title, summary) for screen readers</li>
        <li>Use sufficient color contrast; don&apos;t rely on color alone</li>
        <li>Choose the chart type that best represents your data</li>
      </ul>
      <Related components={[{ label: 'Data table', href: '/components/data-table' }, { label: 'Progress bar', href: '/components/progress-bar' }]} />
      <DocFooter
        prev={{ label: 'Card', href: '/components/card' }}
        next={{ label: 'Checkbox', href: '/components/checkbox' }}
      />
    </article>
  );
}

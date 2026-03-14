import { useState, useMemo } from 'react';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  Search,
  User,
  Plus,
  MoreHorizontal,
  LayoutGrid,
  Code2,
  LayoutDashboard,
  Database,
  Settings,
  Globe,
  FileText,
  List,
  MessageCircle,
  ExternalLink,
  Pencil,
  Check,
  Upload,
  X,
  Github,
  Share2,
  Calendar,
  Filter,
  RefreshCw,
  Star,
  Mic,
  Users,
  Send,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const CHART_DATA_24H = [
  { time: '12:00', views: 2 },
  { time: '16:00', views: 1 },
  { time: '20:00', views: 3 },
  { time: '00:00', views: 8 },
  { time: '04:00', views: 2 },
  { time: '08:00', views: 5 },
];

const CHART_DATA_7D = [
  { time: 'Mon', views: 12 },
  { time: 'Tue', views: 8 },
  { time: 'Wed', views: 15 },
  { time: 'Thu', views: 6 },
  { time: 'Fri', views: 22 },
  { time: 'Sat', views: 18 },
  { time: 'Sun', views: 10 },
];

const CHART_DATA_30D = [
  { time: 'W1', views: 45 },
  { time: 'W2', views: 62 },
  { time: 'W3', views: 38 },
  { time: 'W4', views: 55 },
];

const TIME_RANGES = [
  { value: '24h', label: 'Last 24 hours', data: CHART_DATA_24H, metrics: { views: 15, visits: 10, visitors: 9, duration: '2m 30s', bounce: 70 } },
  { value: '7d', label: 'Last 7 days', data: CHART_DATA_7D, metrics: { views: 91, visits: 68, visitors: 52, duration: '3m 15s', bounce: 58 } },
  { value: '30d', label: 'Last 30 days', data: CHART_DATA_30D, metrics: { views: 200, visits: 145, visitors: 98, duration: '2m 45s', bounce: 62 } },
] as const;

const chartConfig = {
  views: { label: 'Views', color: 'hsl(217, 91%, 60%)' },
} satisfies ChartConfig;

const SIDEBAR_ICONS = [
  { id: 'hub', icon: Globe, label: 'Meeting Hub' },
  { id: 'search', icon: Search, label: 'Search' },
  { id: 'docs', icon: FileText, label: 'Documents' },
  { id: 'tasks', icon: List, label: 'Tasks' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

const SUGGESTED_FOLLOWUPS = [
  'Add a meeting list page that allows users to browse, filter, and search through multiple meeting records.',
  'Create an attendee management view with invite and remove capabilities.',
  'Add export options for meeting transcripts and summaries.',
];

export function ManusDashboardFullPageDemo() {
  const [activeSidebar, setActiveSidebar] = useState('hub');
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [completedFollowups, setCompletedFollowups] = useState<string[]>([]);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([]);
  const [timeRange, setTimeRange] = useState('24h');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const currentMetrics = useMemo(
    () => TIME_RANGES.find((r) => r.value === timeRange)?.metrics ?? TIME_RANGES[0].metrics,
    [timeRange]
  );

  const currentChartData = useMemo(
    () => TIME_RANGES.find((r) => r.value === timeRange)?.data ?? CHART_DATA_24H,
    [timeRange]
  );

  const pendingFollowups = SUGGESTED_FOLLOWUPS.filter((f) => !completedFollowups.includes(f));

  const handleSendMessage = () => {
    const messageToSend = chatMessage.trim();
    if (!messageToSend) return;
    setChatMessages((prev) => [...prev, { role: 'user', text: messageToSend }]);
    setChatMessage('');
    toast.success('Message sent');
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        { role: 'assistant', text: `Thanks for your message about "${messageToSend}". How can I help you with the Meeting Hub?` },
      ]);
    }, 800);
  };

  const handleCompleteFollowup = (text: string) => {
    setCompletedFollowups((prev) => [...prev, text]);
    toast.success('Follow-up marked complete');
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    toast.info('Refreshing analytics...');
    setTimeout(() => {
      setIsRefreshing(false);
      toast.success('Analytics refreshed');
    }, 1500);
  };

  const handleShare = () => toast.success('Share link copied to clipboard');
  const handlePublish = () => toast.success('Project published successfully');
  return (
    <div className="flex h-full min-h-0 flex-col bg-background">
      {/* Top Header */}
      <header className="flex h-14 shrink-0 items-center justify-between gap-4 border-b px-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Manus 1.6 Lite</span>
          <div className="flex items-center gap-1 ml-4">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info('Search')}>
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info('Profile')}>
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info('New')}>
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info('More options')}>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
          <TabsList className="h-9 bg-muted">
            <TabsTrigger value="grid" className="gap-1.5 px-3">
              <LayoutGrid className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="code" className="gap-1.5 px-3">
              <Code2 className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="gap-1.5 px-3">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="database" className="gap-1.5 px-3">
              <Database className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-1.5 px-3">
              <Settings className="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="grid" className="hidden" />
          <TabsContent value="code" className="hidden" />
          <TabsContent value="dashboard" className="hidden" />
          <TabsContent value="database" className="hidden" />
          <TabsContent value="settings" className="hidden" />
        </Tabs>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info('Opening GitHub...')}>
            <Github className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="gap-1.5" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button size="sm" className="gap-1.5 bg-foreground text-background hover:bg-foreground/90" onClick={handlePublish}>
            <Upload className="h-4 w-4" />
            Publish
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toast.info('Closing...')}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Left Icon Sidebar */}
        <aside className="flex w-14 shrink-0 flex-col items-center gap-2 border-r bg-muted/30 py-4">
          {SIDEBAR_ICONS.map((item) => (
            <Button
              key={item.id}
              variant={activeSidebar === item.id ? 'secondary' : 'ghost'}
              size="icon"
              className={cn(
                'h-9 w-9 rounded-lg',
                activeSidebar === item.id && 'bg-background shadow-sm'
              )}
              onClick={() => setActiveSidebar(item.id)}
            >
              <item.icon className="h-4 w-4" />
            </Button>
          ))}
          <div className="flex-1" />
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg" onClick={() => toast.info('Opening chat...')}>
            <MessageCircle className="h-4 w-4" />
          </Button>
        </aside>

        {/* Main Content - Two Columns */}
        <main className="flex-1 overflow-auto p-6">
          <div className="mx-auto grid max-w-[1400px] gap-6 lg:grid-cols-2">
            {/* Left Column - Meeting Hub */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <Globe className="h-4 w-4" />
                  <span>Meeting Hub</span>
                  <span>•</span>
                  <span>10 hours ago</span>
                  <a href="#" className="flex items-center gap-1 text-primary hover:underline">
                    meetinghub-m6wu8lnq.manus.space
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <Button variant="outline" size="sm" className="ml-auto h-7 text-xs" onClick={() => setActiveTab('dashboard')}>
                    Dashboard
                  </Button>
                </div>
                <h1 className="text-2xl font-bold tracking-tight">Meeting Hub</h1>
                <p className="text-muted-foreground">Centralized meeting management for your team</p>
                <div className="flex gap-2 mt-4">
                  <Button className="gap-2 bg-green-600 hover:bg-green-700" onClick={() => toast.success('Quick meeting started')}>
                    <Check className="h-4 w-4" />
                    Quick Meeting
                  </Button>
                  <Button variant="outline" className="gap-2" onClick={() => toast.success('Summary exported')}>
                    <Upload className="h-4 w-4" />
                    Export Summary
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Mic className="h-4 w-4" />
                      Microphone Test Recording
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Attendees
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      <li>Zahidon 1</li>
                      <li>Chukudum 1</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="flex items-center gap-2 text-green-600 dark:text-green-500">
                <Check className="h-4 w-4" />
                <span className="text-sm font-medium">Task completed</span>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">How was this result?</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Button
                      key={i}
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setRating(i)}
                      onMouseEnter={() => setHoveredRating(i)}
                      onMouseLeave={() => setHoveredRating(0)}
                    >
                      <Star
                        className={cn(
                          'h-4 w-4 transition-colors',
                          (hoveredRating || rating) >= i ? 'fill-amber-400 text-amber-500' : 'text-muted-foreground'
                        )}
                      />
                    </Button>
                  ))}
                </div>
                {rating > 0 && (
                  <p className="text-xs text-muted-foreground mt-1">Thanks for your rating!</p>
                )}
              </div>

              <div>
                <h3 className="font-semibold mb-3">Suggested follow-ups</h3>
                <ul className="space-y-2">
                  {pendingFollowups.map((text, i) => (
                    <li
                      key={text}
                      className="flex items-center gap-3 rounded-lg border p-3 text-sm hover:bg-muted/50 cursor-pointer transition-colors"
                      onClick={() => handleCompleteFollowup(text)}
                    >
                      <div className="h-4 w-4 rounded border shrink-0" />
                      <span className="flex-1">{text}</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
                    </li>
                  ))}
                  {completedFollowups.map((text) => (
                    <li
                      key={text}
                      className="flex items-center gap-3 rounded-lg border p-3 text-sm bg-muted/30 opacity-75"
                    >
                      <Check className="h-4 w-4 text-green-600 shrink-0" />
                      <span className="flex-1 line-through text-muted-foreground">{text}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-3 rounded-lg border p-3 text-sm bg-muted/30">
                    <Check className="h-4 w-4 text-green-600 shrink-0" />
                    <span className="flex-1">Finalize and deliver the website to the user</span>
                    <span className="text-xs text-muted-foreground">4/4</span>
                    <div className="h-8 w-16 rounded bg-muted" />
                  </li>
                </ul>
              </div>

              <div className="mt-auto pt-4 space-y-2">
                {chatMessages.length > 0 && (
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {chatMessages.map((msg, i) => (
                      <div
                        key={i}
                        className={cn(
                          'rounded-lg px-3 py-2 text-sm',
                          msg.role === 'user' ? 'ml-4 bg-primary text-primary-foreground' : 'mr-4 bg-muted'
                        )}
                      >
                        {msg.text}
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-2 rounded-lg border bg-background px-3 py-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={() => toast.info('Add attachment')}>
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={() => toast.info('Manus AI')}>
                    <span className="text-xs font-medium">M</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={() => toast.info('Attach file')}>
                    <FileText className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={() => toast.info('Settings')}>
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Input
                    placeholder="Send message to Manus"
                    className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={() => toast.info('Voice input')}>
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0" onClick={handleSendMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Analytics */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-muted">
                      <LayoutDashboard className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">meeting_hub</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        https://meetinghub-m6wu8lnq.manus.space
                        <Pencil className="h-3 w-3" />
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => toast.info('Opening documentation...')}>Documentation</Button>
                    <Button variant="outline" size="sm" onClick={() => toast.info('Opening website...')}>Open website</Button>
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-4 w-4" />
                    <span className="font-medium">Public</span>
                    <Button variant="outline" size="sm" className="ml-auto" onClick={() => toast.info('Manage access')}>Manage access</Button>
                  </div>
                  <p className="text-sm text-muted-foreground">Your website is now publicly available and can be accessed by anyone.</p>
                </CardContent>
              </Card>

              <div>
                <h3 className="font-semibold mb-4">Analytics</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Select value={timeRange} onValueChange={setTimeRange}>
                    <SelectTrigger className="w-[180px] gap-2">
                      <Calendar className="h-4 w-4 shrink-0" />
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      {TIME_RANGES.map((r) => (
                        <SelectItem key={r.value} value={r.value}>
                          {r.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => toast.info('Filters')}>
                    <Filter className="h-4 w-4" />
                    Filters
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 ml-auto"
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                  >
                    <RefreshCw className={cn('h-4 w-4', isRefreshing && 'animate-spin')} />
                    Refresh
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 mb-6">
                  {[
                    { label: 'PAGE VIEWS', value: String(currentMetrics.views), change: '+100%', positive: true },
                    { label: 'VISITS', value: String(currentMetrics.visits), change: '+100%', positive: true },
                    { label: 'VISITORS', value: String(currentMetrics.visitors), change: '+100%', positive: true },
                    { label: 'DURATION', value: currentMetrics.duration, change: '+100%', positive: true },
                    { label: 'BOUNCE RATE', value: `${currentMetrics.bounce}%`, change: '+100%', positive: false },
                  ].map((m) => (
                    <Card key={m.label}>
                      <CardContent className="pt-4 pb-4">
                        <p className="text-xs font-medium text-muted-foreground mb-1">{m.label}</p>
                        <p className="text-xl font-bold">{m.value}</p>
                        <p className={cn(
                          'text-xs flex items-center gap-1 mt-1',
                          m.positive ? 'text-green-600' : 'text-red-600'
                        )}>
                          {m.change}
                          <ExternalLink className="h-3 w-3" />
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mb-6">
                  <CardContent className="pt-6">
                    <ChartContainer config={chartConfig} className="h-[200px] w-full">
                      <AreaChart data={currentChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                          type="monotone"
                          dataKey="views"
                          stroke="hsl(217, 91%, 60%)"
                          fill="hsl(217, 91%, 60%)"
                          fillOpacity={0.3}
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Most viewed pages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>PAGE</TableHead>
                            <TableHead className="text-right">VISITORS</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>/</TableCell>
                            <TableCell className="text-right">9</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Referrers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>REFERRER</TableHead>
                            <TableHead className="text-right">VISITORS</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>manus.im</TableCell>
                            <TableCell className="text-right">2</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="flex h-12 shrink-0 items-center justify-between border-t px-6 text-sm text-muted-foreground">
        <span className="font-medium">Manus</span>
        <span>curated by Mobbin</span>
      </footer>
    </div>
  );
}

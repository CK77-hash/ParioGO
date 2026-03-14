import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  LayoutGrid,
  Home,
  Plus,
  LayoutDashboard,
  MessageSquare,
  Calendar,
  Briefcase,
  HelpCircle,
  Download,
  ChevronDown,
  Filter,
  Settings,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ClipboardList,
  Plus as PlusIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const AGENTS = [
  { label: 'Google revenue d...' },
  { label: 'News Insight Ana...' },
];

const WORKFLOWS = [
  { label: 'Accounts', icon: LayoutDashboard },
  { label: 'Outreach', icon: MessageSquare },
  { label: 'Meetings', icon: Calendar },
  { label: 'Opportunities', icon: Briefcase },
];

const RECOMMENDED_ACTIONS = [
  {
    icon: 'G',
    iconBg: 'bg-blue-500',
    title: 'Google Maps lane guidance for Polestar cars.',
    excerpt:
      'Google Maps is launching a live lane guidance feature, initially available in ...',
    tag: 'News',
    time: '3d ago',
  },
  {
    icon: '◇',
    iconBg: 'bg-emerald-600',
    title: 'OpenAI plans ads in ChatGPT, threatening Google.',
    excerpt:
      'OpenAI plans to introduce clearly marked ads in ChatGPT for its 900 millio...',
    tag: 'News',
    time: '4d ago',
  },
];

function RoxLogo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-foreground text-background text-sm font-bold',
        className
      )}
    >
      R
    </div>
  );
}

export function RoxDashboardFullPageDemo() {
  const [showCompleted, setShowCompleted] = useState(false);

  return (
    <div className="flex h-full min-h-0 flex-col bg-background">
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Sidebar */}
        <aside className="flex w-56 shrink-0 flex-col border-r bg-sidebar">
          <div className="flex flex-col gap-6 p-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <RoxLogo />
              <span className="font-semibold text-sidebar-foreground">ROX</span>
              <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                <LayoutGrid className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>

            {/* Home */}
            <nav className="space-y-1">
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary"
              >
                <Home className="h-4 w-4" />
                Home
              </a>
            </nav>

            {/* Agents */}
            <div>
              <div className="mb-2 flex items-center justify-between px-3">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Agents
                </span>
              </div>
              <div className="space-y-0.5">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Plus className="h-4 w-4" />
                  New Command
                </Button>
                {AGENTS.map((agent) => (
                  <a
                    key={agent.label}
                    href="#"
                    className="block truncate rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  >
                    {agent.label}
                  </a>
                ))}
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 text-sm text-primary hover:bg-sidebar-accent"
                >
                  ... View All
                </a>
              </div>
            </div>

            {/* Workflows */}
            <div>
              <div className="mb-2 flex items-center justify-between px-3">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Workflows
                </span>
              </div>
              <div className="space-y-0.5">
                {WORKFLOWS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href="#"
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Utility links */}
            <div className="space-y-0.5">
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <HelpCircle className="h-4 w-4" />
                Help
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <Download className="h-4 w-4" />
                Download Apps
              </a>
            </div>
          </div>

          {/* User profile */}
          <div className="mt-auto border-t p-4">
            <button className="flex w-full items-center gap-3 rounded-lg p-2 hover:bg-sidebar-accent">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-primary/20 text-primary text-sm font-medium">
                  AL
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 truncate text-left">
                <p className="truncate text-sm font-medium">alexsmith@...</p>
                <p className="truncate text-xs text-muted-foreground">Content-mob</p>
              </div>
              <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex flex-1 flex-col overflow-auto">
          <div className="flex flex-1 flex-col gap-6 p-8">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Afternoon, alexsmith@content-mobbin.com
              </h1>
              <p className="text-muted-foreground">Here's your focus for today</p>
            </div>

            <div className="grid flex-1 gap-6 lg:grid-cols-[1fr_320px]">
              {/* Recommended Actions */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    <TrendingUp className="h-5 w-5 text-muted-foreground" />
                    Recommended Actions (4)
                  </h2>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <Filter className="h-4 w-4" />
                      Filters
                    </Button>
                    <Button variant="outline" size="icon" className="h-9 w-9">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-0">
                  {RECOMMENDED_ACTIONS.map((action, i) => (
                    <div
                      key={i}
                      className={cn(
                        'flex gap-4 py-5',
                        i < RECOMMENDED_ACTIONS.length - 1 && 'border-b'
                      )}
                    >
                      <div
                        className={cn(
                          'flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white',
                          action.iconBg
                        )}
                      >
                        {action.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold">{action.title}</p>
                        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                          {action.excerpt}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs font-normal">
                            {action.tag}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{action.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Right column */}
              <div className="flex flex-col gap-6">
                {/* Calendar widget */}
                <Card className="relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                      backgroundSize: '16px 16px',
                    }}
                  />
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <h2 className="flex items-center gap-2 text-lg font-semibold">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      Today
                    </h2>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="relative flex flex-col items-center justify-center py-12">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <Calendar className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <p className="mt-4 font-semibold">Calendar not connected</p>
                    <p className="mt-1 text-center text-sm text-muted-foreground">
                      Connect your calendar to track meetings
                    </p>
                    <div className="mt-6 flex gap-3">
                      <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-white/20 text-xs font-bold">
                          G
                        </span>
                        Google Calendar
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-2 border-orange-300 bg-orange-50 text-orange-700 hover:bg-orange-100 dark:border-orange-800 dark:bg-orange-950/50 dark:text-orange-300 dark:hover:bg-orange-900/50"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-orange-200/50 text-xs font-bold dark:bg-orange-800/50">
                          O
                        </span>
                        Outlook Calendar
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Tasks widget */}
                <Card className="relative flex flex-1 flex-col overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                      backgroundSize: '16px 16px',
                    }}
                  />
                  <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-4">
                    <h2 className="flex items-center gap-2 text-lg font-semibold">
                      <ClipboardList className="h-5 w-5 text-muted-foreground" />
                      Tasks (0)
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Show Completed</span>
                      <Switch checked={showCompleted} onCheckedChange={setShowCompleted} />
                    </div>
                  </CardHeader>
                  <CardContent className="relative flex flex-1 flex-col items-center justify-center py-12">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <CheckCircle2 className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <p className="mt-4 font-semibold">All tasks completed</p>
                    <p className="mt-1 text-center text-sm text-muted-foreground">
                      Add any tasks you want to track here
                    </p>
                    <Button size="sm" className="mt-6 gap-2" variant="secondary">
                      <PlusIcon className="h-4 w-4" />
                      Add Task
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="relative flex shrink-0 items-center justify-between gap-4 border-t bg-muted/50 px-6 py-3">
        <div className="flex items-center gap-2">
          <RoxLogo className="h-6 w-6 text-xs" />
          <span className="text-sm font-medium">Rox</span>
        </div>
        <p className="text-sm text-muted-foreground">
          curated by <span className="font-medium text-foreground">Mobbin</span>
        </p>
        <Button
          size="icon"
          className="absolute -top-6 right-8 h-12 w-12 rounded-full shadow-lg"
        >
          <PlusIcon className="h-5 w-5" />
        </Button>
      </footer>
    </div>
  );
}

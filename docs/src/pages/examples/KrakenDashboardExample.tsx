import { useState } from 'react';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Home,
  Briefcase,
  Search,
  Percent,
  Activity,
  ChevronDown,
  LayoutGrid,
  Bell,
  ArrowDownToLine,
  ArrowUpFromLine,
  Plus,
  Calendar,
  X,
  Star,
  ArrowLeftRight,
  Coins,
  HelpCircle,
  Minimize2,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Mini downward trend SVG
function DownTrendChart({ className }: { className?: string }) {
  return (
    <svg
      width={48}
      height={24}
      viewBox="0 0 48 24"
      fill="none"
      className={className}
    >
      <path
        d="M0 4 L12 8 L24 14 L36 18 L48 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-red-500"
      />
    </svg>
  );
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
  { id: 'explore', label: 'Explore', icon: Search },
  { id: 'earn', label: 'Earn', icon: Percent },
  { id: 'activity', label: 'Activity', icon: Activity },
  { id: 'btc', label: 'Bitcoin', icon: null, color: 'bg-orange-500' },
  { id: 'eth', label: 'Ethereum', icon: null, color: 'bg-purple-500' },
];

const PROMO_CARDS = [
  {
    id: 'kraken-plus',
    icon: Plus,
    iconBg: 'bg-yellow-500',
    title: 'Zero trading fees with Kraken+',
    desc: 'Start your free trial',
  },
  {
    id: 'earn',
    icon: Percent,
    iconBg: 'bg-blue-500',
    title: 'Automatically earn rewards',
    desc: 'Up to 4.25% APR on eligible assets',
  },
  {
    id: 'dca',
    icon: Calendar,
    iconBg: 'bg-green-500',
    title: 'Start your DCA journey',
    desc: 'Start with BTC and build your crypto habit',
  },
];

const CRYPTO_ASSETS = [
  { id: 'btc', name: 'Bitcoin', ticker: 'BTC', icon: 'B', color: 'bg-orange-500', change: '-1.62%', price: '$90,959.00' },
  { id: 'eth', name: 'Ethereum', ticker: 'ETH', icon: 'E', color: 'bg-purple-500', change: '-1.91%', price: '$3,133.46' },
];

const STOCK_ASSETS = [
  { id: 'nvda', name: 'NVIDIA', ticker: 'NVDAX', icon: 'N', color: 'bg-green-600', change: '-1.81%', price: '$182.73' },
  { id: 'googl', name: 'Alphabet (Class A)', ticker: 'GOOGL', icon: 'G', color: 'bg-green-600', change: '-1.93%', price: '$1,793.59' },
];

function AssetCard({
  asset,
  onStar,
  isStarred,
}: {
  asset: (typeof CRYPTO_ASSETS)[0];
  onStar: () => void;
  isStarred: boolean;
}) {
  return (
    <Card
      className="cursor-pointer transition-colors hover:bg-muted/50"
      onClick={() => toast.info(`Viewing ${asset.name}`)}
    >
      <CardContent className="flex items-center gap-4 p-4">
        <div
          className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white',
            asset.color
          )}
        >
          {asset.icon}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-medium">{asset.name}</p>
          <p className="text-sm text-muted-foreground">{asset.ticker}</p>
        </div>
        <div className="flex items-center gap-2">
          <DownTrendChart />
          <div className="text-right">
            <p className="text-sm font-medium text-red-500">{asset.change}</p>
            <p className="text-sm font-semibold">{asset.price}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 shrink-0"
          onClick={(e) => {
            e.stopPropagation();
            onStar();
          }}
        >
          <Star
            className={cn('h-4 w-4', isStarred && 'fill-amber-400 text-amber-500')}
          />
        </Button>
      </CardContent>
    </Card>
  );
}

export function KrakenDashboardFullPageDemo() {
  const [activeNav, setActiveNav] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [dismissedPromos, setDismissedPromos] = useState<string[]>([]);
  const [starredAssets, setStarredAssets] = useState<Set<string>>(new Set(['btc', 'eth']));
  const [txMode, setTxMode] = useState<'buy' | 'sell' | 'convert'>('buy');
  const [marketTab, setMarketTab] = useState('crypto');
  const [amount, setAmount] = useState('');
  const [repeat, setRepeat] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState('btc');
  const [orderType, setOrderType] = useState('buy-now');
  const [paymentMethod, setPaymentMethod] = useState('');

  const visiblePromos = PROMO_CARDS.filter((p) => !dismissedPromos.includes(p.id));

  const handleDismissPromo = (id: string) => {
    setDismissedPromos((prev) => [...prev, id]);
    toast.success('Card dismissed');
  };

  const toggleStar = (id: string) => {
    setStarredAssets((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        toast.success('Removed from watchlist');
      } else {
        next.add(id);
        toast.success('Added to watchlist');
      }
      return next;
    });
  };

  const handleReview = () => {
    toast.success('Opening review...');
  };

  return (
    <div className="flex h-full min-h-0 flex-col bg-background">
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Sidebar */}
        <aside className="flex w-16 shrink-0 flex-col items-center gap-2 border-r bg-muted/30 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 text-white text-lg font-bold">
            K
          </div>
          <nav className="flex flex-1 flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveNav(item.id);
                  toast.info(`Navigated to ${item.label}`);
                }}
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-lg transition-colors',
                  activeNav === item.id
                    ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
                title={item.label}
              >
                {item.icon ? (
                  <item.icon className="h-5 w-5" />
                ) : (
                  <span
                    className={cn(
                      'flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white',
                      item.color
                    )}
                  >
                    {item.id === 'btc' ? 'B' : 'E'}
                  </span>
                )}
              </button>
            ))}
          </nav>
          <div className="flex flex-col gap-1">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
              onClick={() => toast.info('Collapse sidebar')}
              title="Collapse"
            >
              <Minimize2 className="h-5 w-5" />
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
              onClick={() => toast.info('Help')}
              title="Help"
            >
              <HelpCircle className="h-5 w-5" />
            </button>
          </div>
        </aside>

        {/* Main + Widget */}
        <div className="flex flex-1 min-w-0">
          {/* Main content */}
          <main className="flex flex-1 flex-col overflow-auto">
            {/* Header */}
            <header className="flex shrink-0 items-center gap-4 border-b px-6 py-3">
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search for assets, markets & more"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-16"
                  onKeyDown={(e) => e.key === 'k' && (e.metaKey || e.ctrlKey) && (e.preventDefault(), toast.info('Search focused'))}
                />
                <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden rounded border bg-muted px-1.5 py-0.5 text-[10px] font-medium sm:inline-block">
                  ⌘ K
                </kbd>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => toast.info('Transfer')}>
                  Transfer
                </Button>
                <Button variant="ghost" size="icon" onClick={() => toast.info('Menu')}>
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => toast.info('Notifications')}>
                  <Bell className="h-4 w-4" />
                </Button>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 text-sm font-medium text-white">
                  MF
                </div>
              </div>
            </header>

            <div className="flex-1 space-y-6 p-6">
              {/* Add money banner */}
              <Card className="overflow-hidden border-0 bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-purple-950/20">
                <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-200/50 dark:bg-purple-800/30">
                      <Coins className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold">Add money to buy crypto</h2>
                      <p className="text-sm text-muted-foreground">
                        Easily and securely add funds from your bank account or crypto wallet
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="border-purple-300 text-purple-700 hover:bg-purple-100 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-900/30"
                      onClick={() => toast.info('Buy crypto')}
                    >
                      Buy crypto
                    </Button>
                    <Button
                      className="bg-purple-600 hover:bg-purple-700"
                      onClick={() => toast.info('Deposit')}
                    >
                      Deposit cash or crypto
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Portfolio value */}
              <div>
                <p className="text-sm font-medium text-muted-foreground">Portfolio value</p>
                <p className="text-3xl font-bold">$0.00</p>
                <div className="mt-2 flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1.5"
                    onClick={() => toast.info('Deposit')}
                  >
                    <ArrowDownToLine className="h-4 w-4" />
                    Deposit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1.5"
                    onClick={() => toast.info('Withdraw')}
                  >
                    <ArrowUpFromLine className="h-4 w-4" />
                    Withdraw
                  </Button>
                </div>
              </div>

              {/* FOR YOU */}
              {visiblePromos.length > 0 && (
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    For you
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {visiblePromos.map((promo) => {
                      const Icon = promo.icon;
                      return (
                        <Card key={promo.id} className="relative">
                          <CardContent className="p-4">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute right-2 top-2 h-6 w-6"
                              onClick={() => handleDismissPromo(promo.id)}
                            >
                              <X className="h-3.5 w-3.5" />
                            </Button>
                            <div className={cn('mb-3 flex h-9 w-9 items-center justify-center rounded-full', promo.iconBg, 'text-white')}>
                              <Icon className="h-4 w-4" />
                            </div>
                            <h3 className="font-semibold">{promo.title}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">{promo.desc}</p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* WATCHLIST */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Watchlist
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {CRYPTO_ASSETS.map((asset) => (
                    <AssetCard
                      key={asset.id}
                      asset={asset}
                      onStar={() => toggleStar(asset.id)}
                      isStarred={starredAssets.has(asset.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Most Popular Global Markets */}
              <div>
                <h2 className="text-lg font-semibold">Most Popular Global Markets</h2>
                <p className="text-sm text-muted-foreground">Discover all the most popular assets on Kraken</p>
                <Tabs value={marketTab} onValueChange={setMarketTab} className="mt-4">
                  <TabsList>
                    <TabsTrigger value="crypto">Cryptocurrencies</TabsTrigger>
                    <TabsTrigger value="stocks" className="gap-1">
                      xStocks
                      <Badge variant="secondary" className="text-[10px]">New</Badge>
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="crypto" className="mt-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {CRYPTO_ASSETS.map((asset) => (
                        <AssetCard
                          key={asset.id}
                          asset={asset}
                          onStar={() => toggleStar(asset.id)}
                          isStarred={starredAssets.has(asset.id)}
                        />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="stocks" className="mt-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {STOCK_ASSETS.map((asset) => (
                        <AssetCard
                          key={asset.id}
                          asset={asset}
                          onStar={() => toggleStar(asset.id)}
                          isStarred={starredAssets.has(asset.id)}
                        />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </main>

          {/* Right transaction widget */}
          <aside className="hidden w-80 shrink-0 border-l bg-muted/20 lg:block">
            <div className="sticky top-0 p-4">
              <Card>
                <CardContent className="p-4">
                  <Tabs value={txMode} onValueChange={(v) => setTxMode(v as 'buy' | 'sell' | 'convert')}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="buy">Buy</TabsTrigger>
                      <TabsTrigger value="sell">Sell</TabsTrigger>
                      <TabsTrigger value="convert">Convert</TabsTrigger>
                    </TabsList>
                    <TabsContent value="buy" className="mt-4 space-y-4">
                      <div className="flex gap-2">
                        <Select value={selectedAsset} onValueChange={setSelectedAsset}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="btc">
                              <span className="flex items-center gap-2">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">B</span>
                                Bitcoin
                              </span>
                            </SelectItem>
                            <SelectItem value="eth">
                              <span className="flex items-center gap-2">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-[10px] font-bold text-white">E</span>
                                Ethereum
                              </span>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <Select value={orderType} onValueChange={setOrderType}>
                          <SelectTrigger className="w-[120px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="buy-now">Buy now</SelectItem>
                            <SelectItem value="limit">Limit</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border bg-background px-3 py-2">
                        <Input
                          type="number"
                          placeholder="0"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="border-0 p-0 text-2xl font-semibold shadow-none focus-visible:ring-0"
                        />
                        <span className="text-muted-foreground">{selectedAsset === 'btc' ? 'BTC' : 'ETH'}</span>
                        <Button variant="ghost" size="icon" className="ml-auto h-8 w-8" onClick={() => toast.info('Swap')}>
                          <ArrowLeftRight className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Repeat</span>
                        <Switch checked={repeat} onCheckedChange={setRepeat} />
                      </div>
                      <Select value={paymentMethod ?? ''} onValueChange={setPaymentMethod}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a payment method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bank">Bank transfer</SelectItem>
                          <SelectItem value="card">Credit / Debit card</SelectItem>
                          <SelectItem value="apple">Apple Pay</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button
                        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                        onClick={handleReview}
                      >
                        Review
                      </Button>
                    </TabsContent>
                    <TabsContent value="sell" className="mt-4">
                      <p className="text-center text-sm text-muted-foreground py-8">Sell flow</p>
                    </TabsContent>
                    <TabsContent value="convert" className="mt-4">
                      <p className="text-center text-sm text-muted-foreground py-8">Convert flow</p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex shrink-0 items-center justify-between gap-4 border-t bg-muted/50 px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-purple-600 text-xs font-bold text-white">
            K
          </div>
          <span className="font-semibold">Kraken</span>
        </div>
        <p className="text-sm text-muted-foreground">
          curated by <span className="font-medium text-foreground">Mobbin</span>
        </p>
      </footer>
    </div>
  );
}

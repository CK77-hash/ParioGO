import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { Linkedin, Mail, ExternalLink, Briefcase, Sparkles } from 'lucide-react';

const SUPERPOWERS = [
  { emoji: '👨🏾‍💼', label: "Founder's mindset" },
  { emoji: '🤯', label: 'Systems thinker' },
  { emoji: '🔝', label: 'Top-tier executor' },
  { emoji: '👀', label: 'Detail-oriented craftsman' },
  { emoji: '🛠️', label: 'Design system maker' },
  { emoji: '👏🏾', label: 'Team player' },
  { emoji: '👍🏽', label: 'User advocate' },
  { emoji: '📕', label: 'Continuous learner' },
];

const EXPERIENCE = [
  { role: 'Senior', period: '2024–Present' },
  { role: 'Lead', period: '2022–24' },
  { role: 'Senior', period: '2021–22' },
  { role: 'Designer', period: '2018–21' },
];

const CASE_STUDIES = [
  {
    title: 'Zenfinance',
    subtitle: 'Simplifying bookkeeping for small business owners',
  },
  {
    title: 'Debtsy',
    subtitle: 'Supporting debt-free ambitions',
  },
  {
    title: 'Sparta',
    subtitle: "Powering design at scale for a venture studio's startups",
  },
];

const TESTIMONIALS = [
  {
    quote:
      '"I worked with CK on several products at Yembo, and he was a delight to partner with. He worked to understand the business challenges and provided thoughtful, user-centered design solutions. He was a clear communicator and took feedback well."',
    author: 'Bill Slade',
    role: 'VP, Customer Success',
    company: 'Yembo',
  },
  {
    quote: '"CK brings exceptional design sensibility and a deep understanding of user needs. His collaborative approach made our projects run smoothly."',
    author: 'John Tran',
    role: 'Engineering Lead',
    company: 'Yembo',
  },
  {
    quote: '"Working with CK was a pleasure. He consistently delivered high-quality designs that balanced aesthetics with usability."',
    author: 'Sandy Vong',
    role: 'Product Manager',
    company: 'Yembo',
  },
];

const INSPIRATIONS = [
  { title: 'Make your own things', creator: 'Scott Yu-Jan' },
  { title: 'Config 2024: Serious play', creator: 'Andy Allen' },
  { title: 'The Making of Win or Lose', creator: 'Pixar' },
  { title: 'DataBass: Human music for a tech world', creator: 'Scott Mulvahill' },
];

export function CKPortfolioFullPageDemo() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-6 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-4xl font-bold tracking-tighter md:text-5xl">CK.</p>
            <h1 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
              I'm Chukwuma <span className="text-muted-foreground">/Chew-coo-ma/</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              A software product designer with 8+ years of experience working alongside startups
              and enterprise teams to design thoughtful end-to-end experiences, support product
              growth, and create accessible design systems.
            </p>
            <Button size="lg" className="mt-8 gap-2" asChild>
              <a href="https://www.linkedin.com/in/chukwumaudokporo" target="_blank" rel="noopener noreferrer">
                Connect with me
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* Superpowers */}
        <section className="py-16 px-6 border-t">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl font-semibold tracking-tight mb-8">Superpowers</h2>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {SUPERPOWERS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-lg border bg-card p-4 transition-colors hover:bg-muted/50"
                >
                  <span className="text-2xl" role="img" aria-hidden>
                    {item.emoji}
                  </span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past experience */}
        <section className="py-16 px-6 border-t">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl font-semibold tracking-tight mb-8">Past experience</h2>
            <div className="flex flex-wrap gap-4">
              {EXPERIENCE.map((item) => (
                <Card key={item.period} className="flex-1 min-w-[140px]">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Briefcase className="h-4 w-4" />
                      <span className="text-sm">{item.role}</span>
                    </div>
                    <p className="font-semibold">{item.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="py-16 px-6 border-t">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl font-semibold tracking-tight mb-8">Case studies</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CASE_STUDIES.map((study) => (
                <Card
                  key={study.title}
                  className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg"
                >
                  <div className="aspect-video bg-muted" />
                  <CardContent className="pt-4">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{study.subtitle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 px-6 border-t">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-xl font-semibold tracking-tight mb-8">Testimonial</h2>
            <Carousel className="w-full" opts={{ align: 'start' }}>
              <CarouselContent>
                {TESTIMONIALS.map((t, i) => (
                  <CarouselItem key={i}>
                    <Card>
                      <CardContent className="pt-8 pb-8">
                        <blockquote className="text-lg leading-relaxed text-muted-foreground">
                          {t.quote}
                        </blockquote>
                        <div className="mt-6 flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-lg font-semibold">
                            {t.author.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold">{t.author}</p>
                            <p className="text-sm text-muted-foreground">
                              {t.role} · {t.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="relative static translate-y-0" />
                <CarouselNext className="relative static translate-y-0" />
              </div>
              <div className="flex justify-center gap-1.5 mt-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={cn(
                      'h-2 rounded-full transition-all',
                      i === activeTestimonial ? 'w-6 bg-primary' : 'w-2 bg-muted-foreground/30'
                    )}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </section>

        {/* Inspiration */}
        <section className="py-16 px-6 border-t">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl font-semibold tracking-tight mb-2 flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Inspiration from other creators
            </h2>
            <p className="text-muted-foreground text-sm mb-8">
              Content and creators that inspire my work
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {INSPIRATIONS.map((item) => (
                <a
                  key={item.title}
                  href="#"
                  className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50 group"
                >
                  <div>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground">{item.creator}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 px-6">
        <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">v1.0.4</p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a href="https://www.linkedin.com/in/chukwumaudokporo" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a href="mailto:hello@cku.design">
                <Mail className="h-4 w-4" />
                Email
              </a>
            </Button>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-6">
          Recreated with <a href="https://github.com/CK77-hash/Hepta" className="underline hover:text-primary">Hepta Design System</a> · Original at{' '}
          <a href="https://cku.framer.wiki" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
            cku.framer.wiki
          </a>
        </p>
      </footer>
    </div>
  );
}

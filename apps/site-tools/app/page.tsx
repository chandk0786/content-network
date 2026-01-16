import { Card, CardContent, CardHeader, ButtonLink, Badge, FeatureCard } from "ui";
import { listTools, listPosts } from "../lib/content";

// Icons
const RocketIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

const ToolIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const ZapIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function Home() {
  const tools = listTools().slice(0, 4);
  const posts = listPosts().slice(0, 4);

  return (
    <div className="min-h-screen bg-linear-to-b from-orange-50/50 via-white to-rose-50/30">
      {/* Hero Section - Energetic Orange/Coral Theme */}
      <section className="relative overflow-hidden">
        {/* Geometric decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-linear-to-br from-orange-200 to-rose-200 blur-3xl opacity-60" />
          <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-linear-to-br from-amber-200 to-orange-200 blur-3xl opacity-50" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-linear-to-br from-rose-200 to-pink-200 blur-3xl opacity-40" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSIjZjk3MzE2IiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-60" />
        </div>

        <div className="mx-auto max-w-5xl px-4 py-20 md:py-28">
          <div className="text-center">
            {/* Animated rating badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-orange-200/50 shadow-lg shadow-orange-500/10 mb-6 animate-bounce-slow">
              <div className="flex text-amber-400">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <span className="text-sm font-semibold text-gray-700">Loved by 10,000+ users</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              <span className="text-gray-900">Your </span>
              <span className="relative">
                <span className="bg-linear-to-r from-orange-500 via-rose-500 to-pink-500 bg-clip-text text-transparent">
                  Productivity
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-300" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="text-gray-900"> Toolkit</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              The car cost calculators and financial tools you&apos;ve been looking for. 
              Make confident decisions with accurate numbers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink 
                href="/tools" 
                size="lg"
                className="bg-linear-to-r from-orange-500 to-rose-500 text-white hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-1 border-0"
                icon={<RocketIcon />}
              >
                Launch Tools
              </ButtonLink>
              <ButtonLink 
                href="/blog" 
                variant="outline" 
                size="lg"
                className="border-orange-200 hover:border-orange-400 hover:bg-orange-50"
                icon={<DocumentIcon />}
              >
                Read Guides
              </ButtonLink>
            </div>

            {/* Quick stats */}
            <div className="flex justify-center gap-8 mt-12 pt-8 border-t border-orange-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-500">Free Tools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10k+</div>
                <div className="text-sm text-gray-500">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-500">Free Forever</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2 items-stretch">
          {/* Tools Card */}
          <div className="relative group h-full">
            <div className="absolute -inset-1 bg-linear-to-r from-orange-400 to-rose-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            <Card className="relative h-full border-orange-100 flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <Badge className="bg-orange-100 text-orange-700 mb-2">🔥 Popular</Badge>
                    <h2 className="text-2xl font-bold text-gray-900">Calculators</h2>
                    <p className="text-gray-500 mt-1">Essential financial tools</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-orange-400 to-rose-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    <ToolIcon />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-1 flex-1">
                  {tools.map((t, i) => (
                    <a 
                      key={t.slug}
                      href={`/tools/${t.slug}`}
                      className="group/item flex items-center gap-4 p-4 -mx-4 rounded-2xl transition-all duration-200 hover:bg-orange-50"
                    >
                      <span className="shrink-0 w-8 h-8 rounded-xl bg-linear-to-br from-orange-100 to-rose-100 flex items-center justify-center text-orange-600 font-bold text-sm">
                        {i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 group-hover/item:text-orange-600 transition-colors flex items-center gap-2">
                          {t.title}
                          <ArrowRightIcon />
                        </div>
                        <div className="text-sm text-gray-500 truncate">{t.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t border-orange-100">
                  <ButtonLink 
                    href="/tools" 
                    variant="ghost" 
                    size="sm"
                    className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                    icon={<ArrowRightIcon />}
                    iconPosition="right"
                  >
                    See all tools
                  </ButtonLink>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Posts Card */}
          <div className="relative group h-full">
            <div className="absolute -inset-1 bg-linear-to-r from-rose-400 to-pink-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            <Card className="relative h-full border-rose-100 flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <Badge className="bg-rose-100 text-rose-700 mb-2">📚 Latest</Badge>
                    <h2 className="text-2xl font-bold text-gray-900">Guides</h2>
                    <p className="text-gray-500 mt-1">Expert tips and FAQs</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-rose-500/30 group-hover:scale-110 transition-transform duration-300">
                    <DocumentIcon />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-1 flex-1">
                  {posts.map((p) => (
                    <a 
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group/item flex items-start gap-4 p-4 -mx-4 rounded-2xl transition-all duration-200 hover:bg-rose-50"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 group-hover/item:text-rose-600 transition-colors flex items-center gap-2">
                          {p.title}
                          <ArrowRightIcon />
                        </div>
                        <div className="text-sm text-gray-500 line-clamp-2">{p.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t border-rose-100">
                  <ButtonLink 
                    href="/blog" 
                    variant="ghost" 
                    size="sm"
                    className="text-rose-600 hover:text-rose-700 hover:bg-rose-50"
                    icon={<ArrowRightIcon />}
                    iconPosition="right"
                  >
                    Read all guides
                  </ButtonLink>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="bg-orange-100 text-orange-700 mb-4">Why Us?</Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for real people</h2>
          <p className="text-gray-500 max-w-xl mx-auto">No complicated features. Just straightforward tools that get the job done.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<ZapIcon />}
            title="Instant Results"
            description="No loading, no waiting. Type your numbers and get answers immediately."
            color="orange"
          />
          <FeatureCard
            icon={<ShieldIcon />}
            title="Privacy First"
            description="Your data stays in your browser. We don't track or store anything."
            color="emerald"
          />
          <FeatureCard
            icon={<GlobeIcon />}
            title="Works Everywhere"
            description="Phone, tablet, or desktop. Our tools adapt to any screen size."
            color="sky"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="relative rounded-3xl bg-linear-to-r from-orange-500 via-rose-500 to-pink-500 p-8 md:p-12 text-center text-white overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Start making better decisions today</h2>
            <p className="text-white/90 mb-8 max-w-md mx-auto">
              Calculate car costs, compare options, and plan your budget with confidence.
            </p>
            <ButtonLink 
              href="/tools" 
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-50 shadow-xl"
              icon={<ArrowRightIcon />}
              iconPosition="right"
            >
              Try Free Now
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
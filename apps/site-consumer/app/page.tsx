import Link from "next/link";
import { Card, CardContent, CardHeader, ButtonLink, Badge, FeatureCard } from "ui";
import { listTools, listPosts } from "../lib/content";

const CalculatorIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

const BookIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

const BoltIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

export default function Home() {
  const tools = listTools().slice(0, 4);
  const posts = listPosts().slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div className="mx-auto max-w-5xl px-4 py-20 md:py-28">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm mb-6 animate-fade-in">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-600">100% Free • No Sign-up Required</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
              <span className="text-gray-900">Everyday tools that </span>
              <span className="bg-linear-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                save you time
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
              Quick calculators for budgeting, savings, and daily decisions. Simple, fast, and works great on any device.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <ButtonLink href="/tools" variant="gradient" size="lg" icon={<SparklesIcon />}>
                Explore Tools
              </ButtonLink>
              <ButtonLink href="/blog" variant="outline" size="lg" icon={<BookIcon />}>
                Read Guides
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Tools and Posts Grid */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2 items-stretch">
          {/* Popular Tools Card */}
          <Card className="animate-fade-in-up animation-delay-600 flex flex-col h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="purple">Popular</Badge>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Quick Tools</h2>
                  <p className="text-gray-500 mt-1">Utilities people use every day</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/25">
                  <CalculatorIcon />
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col">
              <div className="space-y-1 flex-1">
                {tools.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/tools/${t.slug}`}
                    className="group/item flex items-start gap-4 p-4 -mx-4 rounded-2xl transition-all duration-200 hover:bg-violet-50"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 group-hover/item:text-violet-600 transition-colors duration-200 flex items-center gap-2">
                        {t.title}
                        <svg
                          className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-500 mt-0.5 line-clamp-2">{t.description}</div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-gray-100">
                <ButtonLink href="/tools" variant="ghost" size="sm" icon={<ArrowRightIcon />} iconPosition="right">
                  View all tools
                </ButtonLink>
              </div>
            </CardContent>
          </Card>

          {/* Latest Posts Card */}
          <Card className="animate-fade-in-up animation-delay-800 flex flex-col h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="info">New</Badge>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Guides & Tips</h2>
                  <p className="text-gray-500 mt-1">Learn to make better decisions</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/25">
                  <BookIcon />
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col">
              <div className="space-y-1 flex-1">
                {posts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group/item flex items-start gap-4 p-4 -mx-4 rounded-2xl transition-all duration-200 hover:bg-sky-50"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 group-hover/item:text-sky-600 transition-colors duration-200 flex items-center gap-2">
                        {p.title}
                        <svg
                          className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-500 mt-0.5 line-clamp-2">{p.description}</div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-gray-100">
                <ButtonLink href="/blog" variant="ghost" size="sm" icon={<ArrowRightIcon />} iconPosition="right">
                  View all posts
                </ButtonLink>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why people love our tools</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Built with simplicity in mind. No accounts, no complexity, just results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<BoltIcon />}
            title="Lightning Fast"
            description="Get instant results. No loading screens, no waiting. Just quick answers when you need them."
            color="amber"
          />
          <FeatureCard
            icon={<PhoneIcon />}
            title="Mobile Friendly"
            description="Works perfectly on any device. Use our tools on the go, wherever you are."
            color="emerald"
          />
          <FeatureCard
            icon={<HeartIcon />}
            title="Free Forever"
            description="No hidden costs, no premium tiers. All tools are completely free to use."
            color="pink"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="rounded-3xl bg-linear-to-br from-gray-900 to-gray-800 p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-violet-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-fuchsia-500/20 to-transparent rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to save time?</h2>
            <p className="text-gray-300 mb-8 max-w-md mx-auto">
              Join thousands of people who use our free tools every day to make smarter decisions.
            </p>
            <ButtonLink href="/tools" variant="secondary" size="lg" icon={<ArrowRightIcon />} iconPosition="right">
              Get Started Free
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}

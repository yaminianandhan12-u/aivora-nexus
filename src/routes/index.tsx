import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Brain,
  BarChart3,
  MessagesSquare,
  Eye,
  Bot,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
  Cpu,
  Database,
  Code2,
  Menu,
  X,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: AivoraNexus,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    desc: "Custom ML models — from predictive analytics to recommendation engines — trained on your data and deployed at scale.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Turn raw data into decisions. Dashboards, pipelines, and statistical modeling that surface what actually matters.",
  },
  {
    icon: MessagesSquare,
    title: "Natural Language Processing",
    desc: "Chatbots, summarization, sentiment, and semantic search powered by state-of-the-art transformer models.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    desc: "Object detection, OCR, and video intelligence for real-world environments — from factories to city streets.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "End-to-end workflow automation with intelligent agents that plan, act, and integrate with your existing stack.",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    desc: "Retrieval-augmented copilots and content generation tuned to your brand, tone, and internal knowledge.",
  },
];

const PROJECTS = [
  {
    title: "Smart Traffic Management System",
    desc: "Real-time traffic optimization using CV + reinforcement learning to cut congestion in urban corridors by 34%.",
    tags: ["Python", "OpenCV", "TensorFlow", "IoT"],
  },
  {
    title: "AI Chatbot Assistant",
    desc: "Multilingual RAG-based assistant handling 50k+ conversations/month with context-aware routing and escalation.",
    tags: ["LLM", "LangChain", "React", "Node.js"],
  },
  {
    title: "Environmental Intelligence System",
    desc: "Satellite + sensor fusion predicting air quality, deforestation risk, and climate anomalies across regions.",
    tags: ["PyTorch", "GIS", "Data Science", "AWS"],
  },
  {
    title: "Student Analytics Dashboard",
    desc: "ML-driven early-warning platform identifying at-risk learners and personalizing intervention pathways.",
    tags: ["Python", "SQL", "React.js", "D3.js"],
  },
];

const STACK = [
  { name: "Python", icon: Code2 },
  { name: "Java", icon: Cpu },
  { name: "React.js", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "Machine Learning", icon: Brain },
  { name: "Data Science", icon: BarChart3 },
  { name: "SQL", icon: Database },
];

function AivoraNexus() {
  return (
    <div id="home" className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-neon-cyan via-neon-violet to-neon-magenta glow-shadow">
            <Sparkles className="h-5 w-5 text-background" />
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Aivora <span className="gradient-text">Nexus</span>
          </span>
        </a>

        <nav className={`hidden md:flex glass rounded-full px-2 py-1.5 transition-all ${scrolled ? "shadow-lg" : ""}`}>
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full transition-colors hover:bg-white/5"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet px-5 py-2 text-sm font-medium text-background hover:opacity-90 transition-opacity"
        >
          Get in touch <ArrowRight className="h-4 w-4" />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden glass rounded-lg p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-6 mt-3 glass rounded-2xl p-4 animate-fade-up">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-20 -left-32 h-96 w-96 rounded-full bg-neon-violet/30 blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-10 -right-32 h-[28rem] w-[28rem] rounded-full bg-neon-cyan/25 blur-3xl animate-float-slower pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-neon-magenta/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-neon-cyan animate-pulse" />
            AI Innovation & Data Science
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Building the Future with{" "}
            <span className="gradient-text">Artificial Intelligence</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Aivora Nexus designs and deploys production-grade AI, Machine Learning,
            and Data Science systems — turning ambitious ideas into intelligent products
            that scale.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta px-7 py-3.5 text-sm font-semibold text-background glow-shadow hover:scale-[1.02] transition-transform"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "50+", v: "AI models shipped" },
              { k: "12M+", v: "Predictions/day" },
              { k: "99.9%", v: "Uptime SLA" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl md:text-3xl font-bold gradient-text">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-neon-cyan mb-3">
            {eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          A studio for <span className="gradient-text">applied intelligence</span>.
        </>
      }
    >
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 text-muted-foreground text-lg leading-relaxed">
          Aivora Nexus is an AI & Data Science studio building intelligent
          products for teams that want to move faster, decide sharper, and
          automate the work worth automating. We ship research-grade models
          wrapped in production engineering.
        </div>
        <GlassCard>
          <div className="text-neon-cyan mb-4">
            <Brain className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            Democratize access to state-of-the-art AI by turning cutting-edge
            research into reliable, human-centered systems that create real
            business and social value.
          </p>
        </GlassCard>
        <GlassCard>
          <div className="text-neon-magenta mb-4">
            <Sparkles className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            A world where every organization — from startups to governments —
            can harness intelligent systems to solve their hardest problems
            responsibly and at scale.
          </p>
        </GlassCard>
      </div>
    </Section>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:glow-shadow ${className}`}
    >
      {children}
    </div>
  );
}

function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={
        <>
          What we <span className="gradient-text">build</span>.
        </>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          const accents = ["text-neon-cyan", "text-neon-violet", "text-neon-magenta"];
          return (
            <GlassCard key={s.title}>
              <div className={`${accents[i % 3]} mb-4`}>
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={
        <>
          Systems <span className="gradient-text">in the wild</span>.
        </>
      }
    >
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <div
            key={p.title}
            className="group relative glass rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:glow-shadow"
          >
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-xs text-muted-foreground mb-2">
                0{i + 1} / Case study
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:gradient-text transition-all">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Technology"
      title={
        <>
          Our <span className="gradient-text">stack</span>.
        </>
      }
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
        {STACK.map((t) => {
          const Icon = t.icon;
          return (
            <div
              key={t.name}
              className="glass rounded-xl p-5 flex flex-col items-center gap-3 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="h-11 w-11 grid place-items-center rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20">
                <Icon className="h-5 w-5 text-neon-cyan" />
              </div>
              <div className="text-sm font-medium">{t.name}</div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let's build something <span className="gradient-text">intelligent</span>.
        </>
      }
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Tell us about your problem — from prototype to production, we scope,
            build, and deploy AI systems that actually ship.
          </p>
          <div className="space-y-3 pt-4">
            {[
              { icon: Mail, label: "hello@aivoranexus.ai" },
              { icon: Phone, label: "+1 (415) 555-0142" },
              { icon: MapPin, label: "San Francisco · Remote worldwide" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="flex items-center gap-3 text-sm">
                  <div className="h-9 w-9 grid place-items-center rounded-lg glass">
                    <Icon className="h-4 w-4 text-neon-cyan" />
                  </div>
                  <span className="text-muted-foreground">{c.label}</span>
                </div>
              );
            })}
          </div>
          <div className="flex gap-3 pt-4">
            {[Github, Linkedin, Twitter].map((I, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="h-10 w-10 grid place-items-center rounded-lg glass hover:bg-white/10 hover:-translate-y-0.5 transition-all"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 glass rounded-2xl p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" placeholder="Ada Lovelace" />
            <Field label="Email" name="email" type="email" placeholder="you@company.com" />
          </div>
          <Field label="Company" name="company" placeholder="Acme Inc." />
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="What are you trying to build?"
              className="w-full rounded-xl bg-background/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-neon-cyan/60 focus:ring-2 focus:ring-neon-cyan/20 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-magenta px-7 py-3 text-sm font-semibold text-background glow-shadow hover:scale-[1.02] transition-transform"
          >
            {sent ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Message sent
              </>
            ) : (
              <>
                Send message <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl bg-background/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-neon-cyan/60 focus:ring-2 focus:ring-neon-cyan/20 transition-all"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-neon-cyan via-neon-violet to-neon-magenta">
            <Sparkles className="h-4 w-4 text-background" />
          </div>
          <span className="text-sm">
            Aivora <span className="gradient-text font-semibold">Nexus</span>
          </span>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aivora Nexus. Crafted with intelligence.
        </div>
      </div>
    </footer>
  );
}

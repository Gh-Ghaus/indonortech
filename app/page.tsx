import FeaturedProjects from "../components/projects/FeaturedProjects";
import { buildMetadata, pageSeo } from "@/lib/site";

export const metadata = buildMetadata(pageSeo.home);

export default function Home() {
  const expertise = [
    {
      title: "Software Development",
      desc: "Custom web, mobile and enterprise applications built for performance and scalability.",
      icon: "💻",
    },
    {
      title: "Cloud Solutions",
      desc: "Cloud migration, infrastructure modernization and managed cloud services.",
      icon: "☁️",
    },
    {
      title: "DevOps & Automation",
      desc: "CI/CD pipelines, Kubernetes, Docker, Infrastructure as Code and automation.",
      icon: "⚙️",
    },
    {
      title: "Artificial Intelligence",
      desc: "AI-powered business solutions, automation and intelligent analytics.",
      icon: "🤖",
    },
    {
      title: "Cyber Security",
      desc: "Secure digital infrastructure, compliance and proactive security practices.",
      icon: "🔒",
    },
    {
      title: "IT Consulting",
      desc: "Helping organizations make informed technology decisions for long-term growth.",
      icon: "📈",
    },
  ];

  const reasons = [
    "Norway-focused delivery approach",
    "Transparent communication",
    "Agile project execution",
    "Highly skilled engineering teams",
    "Secure & scalable architecture",
    "Long-term technology partnership",
  ];

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/banner-1.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="mt-8 max-w-4xl text-6xl font-bold leading-tight text-white">
              Engineering Digital Excellence
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-white/85">
              IndonorTech helps businesses across Norway accelerate digital
              transformation through secure software engineering, cloud
              solutions, DevOps, AI, cybersecurity and strategic IT consulting.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href="/services"
                className="rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Explore Services
              </a>

              <a
                href="/contact"
                className="rounded-lg border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div>
                <h3 className="text-3xl font-bold text-white">100+</h3>
                <p className="text-white/70">Projects Delivered</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">20+</h3>
                <p className="text-white/70">Technology Experts</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">24/7</h3>
                <p className="text-white/70">Support</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">99%</h3>
                <p className="text-white/70">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-center text-5xl font-bold">
          Why Choose IndonorTech?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-muted-foreground">
          We combine technical excellence, business understanding and a
          collaborative delivery model to help organizations innovate with
          confidence.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border bg-card p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-card-foreground">{item}</h3>

              <p className="mt-4 text-muted-foreground">
                Delivering quality solutions through innovation,
                transparency and long-term partnership.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-bold">Our Expertise</h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-muted-foreground">
            Empowering businesses with modern technologies and future-ready
            digital solutions.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-border bg-card p-8 shadow transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="text-5xl">{service.icon}</div>

                <h3 className="mt-6 text-2xl font-bold text-card-foreground">
                  {service.title}
                </h3>

                <p className="mt-4 text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT PROJECTS */}
      <section className="py-24">
        <FeaturedProjects />
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-bold">
            Let&apos;s Build the Future Together
          </h2>

          <p className="mt-8 text-xl leading-9 text-primary-foreground/85">
            Whether you need software development, cloud transformation,
            DevOps, AI or digital consulting, IndonorTech is ready to become
            your trusted technology partner.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-lg bg-background px-10 py-4 font-semibold text-foreground transition hover:opacity-90"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </main>
  );
}

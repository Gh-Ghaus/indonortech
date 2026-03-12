import Image from "next/image";

export default function AboutHero() {
  return (
  <section className="relative h-[90vh] flex items-center justify-center text-center">

  <Image
    src="/images/about-bg1.jpg"
    alt="company office"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/40" />

  <div className="relative z-10 max-w-3xl px-6 text-white pt-32">
    <h1 className="text-5xl font-bold mb-6">
      About Our Company
    </h1>

    <p className="text-lg opacity-90">
      We build enterprise-grade software, AI systems, and digital platforms.
    </p>
  </div>

</section>
  );
}
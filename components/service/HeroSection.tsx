import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center">

      <Image
        src="/images/service-hero.jpg"
        alt="services"
        fill
        priority
        className="object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-white">

        <h1 className="text-5xl md:text-6xl font-bold">
          Our Services
        </h1>

        <p className="mt-6 text-lg md:text-xl opacity-90">
          We build enterprise-grade applications, AI systems, and scalable
          cloud solutions that help businesses grow faster.
        </p>

        <button className="mt-8 px-8 py-3 rounded-full bg-primary hover:bg-primary/90 transition text-white">
          Start Your Project
        </button>

      </div>
    </section>
  );
}
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative py-24 text-center text-white">

      <Image
        src="/images/cta-bg.jpg"
        alt="cta"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-3xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to build something amazing?
        </h2>

        <p className="mt-4 opacity-90">
          Partner with our team to create scalable digital products
          powered by modern technologies.
        </p>

        <button className="mt-8 px-8 py-3 bg-primary rounded-full hover:bg-primary/90 transition">
          Let s Talk
        </button>

      </div>

    </section>
  );
}
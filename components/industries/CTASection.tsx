import Image from "next/image"

export default function CTASection() {
  return (
    <section className="relative py-28 text-center text-white">

      <Image
        src="/images/industries-lets-build.jpeg"
        alt="cta"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-3xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold">
          Let’s Build the Future Together
        </h2>

        <p className="mt-4 opacity-90">
          Partner with our team to build innovative technology solutions
          tailored to your industry.
        </p>

        <button className="mt-8 px-8 py-3 bg-primary rounded-full hover:bg-primary/90 transition">
          Start Your Project
        </button>

      </div>

    </section>
  )
}
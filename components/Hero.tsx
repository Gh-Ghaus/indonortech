// components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mt-28 px-6 py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold">
        Enterprise Technology Solutions for Modern Businesses
      </h1>

      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        We design and build scalable applications, cloud systems, and AI solutions
        tailored for your business needs.
      </p>

      <div className="mt-8">
        <Link
          href="/contact"
          className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors"
        >
          Book a Free Consultation
        </Link>
      </div>
    </section>
  );
}
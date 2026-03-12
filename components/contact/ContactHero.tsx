import Image from "next/image"

export default function ContactHero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center">

      <Image
        src="/images/contact-bg1.jpg"
        alt="contact"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative text-white max-w-3xl px-6">
        <h1 className="text-5xl font-bold mb-6">
          Contact Us
        </h1>

        <p className="text-lg opacity-90">
          Have a project in mind? Lets talk about how we can help you build
          innovative digital products.
        </p>
      </div>

    </section>
  )
}
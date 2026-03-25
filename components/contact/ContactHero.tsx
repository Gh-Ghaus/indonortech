import Image from "next/image"

export default function ContactHero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/contact-bg1.jpg"
        alt="contact"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30"></div>

      <div className="relative text-white max-w-4xl px-6 space-y-6">
        <div>
          <p className="text-primary font-semibold text-lg mb-3 tracking-wide">
            GET IN TOUCH
          </p>
          <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
            Let's Connect
          </h1>
        </div>

        <p className="text-lg lg:text-xl opacity-95 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind? We'd love to hear about it. Let's discuss how we can help you build innovative digital solutions that drive real results.
        </p>

        <div className="pt-4">
          <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300">
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  )
}
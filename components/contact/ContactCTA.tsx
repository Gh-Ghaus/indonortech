export default function ContactCTA() {
  return (
    <section className="relative py-24 text-center text-white">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/office1.png')" }}
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-3xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-6">
          Lets build something amazing
        </h2>

        <p className="opacity-90 mb-8">
          Talk to our team and start your next digital project today.
        </p>

        <button className="px-8 py-3 rounded-full bg-primary hover:opacity-90">
          Start a Project
        </button>

      </div>

    </section>
  )
}
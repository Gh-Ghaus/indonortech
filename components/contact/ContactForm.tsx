export default function ContactForm() {
  return (
    <div className="bg-background p-6 rounded-2xl border shadow-sm">

      <h2 className="text-2xl font-semibold mb-5">
        Send us a message
      </h2>

      <form className="flex flex-col gap-3">

        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded-lg bg-transparent"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="border p-3 rounded-lg bg-transparent"
        />

        <input
          type="text"
          placeholder="Company"
          className="border p-3 rounded-lg bg-transparent"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          className="border p-2 rounded-lg bg-transparent"
        />

        <button
          className="mt-2 bg-primary text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Send Message
        </button>

      </form>

    </div>
  )
}
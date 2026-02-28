export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold">Contact Us</h1>

      <form className="mt-8 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
        <textarea placeholder="Message" className="w-full p-3 border rounded" rows={6} />

        <button className="bg-blue-600 text-white px-6 py-3 rounded-md">
          Send Message
        </button>
      </form>
    </div>
  );
}
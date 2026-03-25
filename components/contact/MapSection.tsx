export default function MapSection() {
  // CORRECT EMBED URL: This is specifically formatted for iframes.
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.283181467406!2d26.09068067645107!3d44.44888490089069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4e6b7790b9%3A0x7d6706e9f1a0740b!2sArnia%20Software!5e0!3m2!1sen!2sro!4v1710324800000!5m2!1sen!2sro";

  return (
    <section className="w-full">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Find Us</h2>
        <p className="text-gray-600">Visit our office location</p>
      </div>
      <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg h-[500px] hover:shadow-xl transition-shadow duration-300">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
}
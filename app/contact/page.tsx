import ContactCTA from "../../components/contact/ContactCTA";
import ContactForm from "../../components/contact/ContactForm";
import ContactHero from "../../components/contact/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo";
import MapSection from "../../components/contact/MapSection";

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <ContactHero />
      
      <div className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Map takes 5 columns */}
            <div className="lg:col-span-5 w-full">
              <MapSection />
            </div>

            {/* Info takes 3 columns */}
            <div className="lg:col-span-3">
              <ContactInfo />
            </div>

            {/* Form takes 4 columns */}
            <div className="lg:col-span-4">
              <ContactForm />
            </div>

          </div>
        </div>
      </div>
      
      <ContactCTA />
    </main>
  );
}

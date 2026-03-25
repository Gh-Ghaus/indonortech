import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  const contactItems = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Friedrichstraße 171", "Berlin, Germany"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+40 374 60 88 99"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@company.com"]
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-600">
          We're here to help and answer any questions
        </p>
      </div>

      <div className="space-y-6">
        {contactItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="flex gap-4 items-start group">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <IconComponent className="text-primary w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 mt-8">
        <div className="flex gap-3 items-start mb-3">
          <Clock className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
          <h3 className="font-semibold text-gray-900 text-lg">
            Business Hours
          </h3>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          <span className="font-medium">Monday – Friday:</span><br/>
          9:00 AM – 6:00 PM (UTC+1)
        </p>
        <p className="text-gray-600 text-sm mt-3">
          For urgent matters, please call us during business hours
        </p>
      </div>
    </div>
  )
}
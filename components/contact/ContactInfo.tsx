import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">

      <h2 className="text-2xl font-semibold">
        Get in touch
      </h2>

      <div className="flex gap-4 items-start">
        <MapPin className="text-primary" />
        <p>
          Friedrichstraße 171  
          Berlin, Germany
        </p>
      </div>

      <div className="flex gap-4 items-start">
        <Phone className="text-primary" />
        <p>+40 374 60 88 99</p>
      </div>

      <div className="flex gap-4 items-start">
        <Mail className="text-primary" />
        <p>contact@company.com</p>
      </div>

      <div className="p-6 bg-muted rounded-xl mt-6">
        <h3 className="font-semibold mb-2">
          Working Hours
        </h3>
        <p className="text-muted-foreground">
          Monday – Friday  
          9:00 AM – 6:00 PM
        </p>
      </div>

    </div>
  )
}
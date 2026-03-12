import IndustryCard from "./IndustryCard"

const industries = [
  { title: "Telecom", image: "/images/telecom.jpeg" },
  { title: "Financial Services", image: "/images/finance.jpeg" },
  { title: "Retail & eCommerce", image: "/images/ecommerce.jpeg" },
  { title: "Healthcare", image: "/images/healthcare.jpeg" },
  { title: "Automotive", image: "/images/automotive.jpeg" },
  { title: "Education & eLearning", image: "/images/education.jpeg" },
]

export default function IndustriesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6">

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Our Industry Expertise
        </h2>

        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Our engineering teams bring deep expertise across industries
          helping companies build innovative digital platforms.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {industries.map((item, index) => (
          <IndustryCard key={index} {...item} />
        ))}

      </div>

    </section>
  )
}
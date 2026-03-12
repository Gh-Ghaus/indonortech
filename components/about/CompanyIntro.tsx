import Image from "next/image";

export default function CompanyIntro() {
  return (
    <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

      <div>
        <h2 className="text-3xl font-bold mb-6">
          Who We Are
        </h2>

        <p className="text-muted-foreground mb-4">
          We are a global technology company delivering high-quality
          software solutions across web, mobile, cloud and AI.
        </p>

        <p className="text-muted-foreground">
          Our engineers help companies build scalable digital products,
          automate processes, and accelerate digital transformation.
        </p>
      </div>

      <div className="relative h-[350px] rounded-2xl overflow-hidden">
        <Image
          src="/images/team.jpeg"
          alt="team"
          fill
          className="object-cover"
        />
      </div>

    </section>
  );
}
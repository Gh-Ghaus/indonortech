export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold">Our Services</h1>

      <div className="grid md:grid-cols-2 gap-12 mt-10">

        <div>
          <h2 className="text-2xl font-semibold">Enterprise Application Development</h2>
          <p className="text-gray-600 mt-2">
            We build scalable, secure enterprise systems using modern
            architectures like microservices, event-driven design, and serverless.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Cloud Solutions (AWS / Azure)</h2>
          <p className="text-gray-600 mt-2">
            Cloud-native transformation, cost optimization, DevOps pipelines, and automation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">API & Integration Architecture</h2>
          <p className="text-gray-600 mt-2">
            High‑performance APIs, integration patterns, and enterprise workflows.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">AI & Automation</h2>
          <p className="text-gray-600 mt-2">
            AI workflow automation, LLM-powered features, and intelligent analytics.
          </p>
        </div>
      </div>
    </div>
  );
}
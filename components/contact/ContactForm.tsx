'use client';

import { FormEvent, useState } from 'react';

const MAX = {
  name: 100,
  email: 254,
  company: 120,
  subject: 160,
  message: 4000,
} as const;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(value: string) {
  return value.replace(/[<>]/g, '').trim();
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const limit = MAX[name as keyof typeof MAX];
    setFormData((prev) => ({
      ...prev,
      [name]: limit ? value.slice(0, limit) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Bot trap — silently ignore automated fills
    if (honeypot) {
      setSuccess(true);
      return;
    }

    const name = sanitize(formData.name);
    const email = sanitize(formData.email);
    const company = sanitize(formData.company);
    const subject = sanitize(formData.subject);
    const message = sanitize(formData.message);

    if (!name || !email || !subject || !message) {
      setError('Please complete all required fields.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (message.length < 10) {
      setError('Please provide a bit more detail in your message.');
      return;
    }

    setIsSubmitting(true);
    // Placeholder until a secure server endpoint is wired
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    }, 800);
  };

  const fieldClass =
    "w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all";

  return (
    <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
      <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-foreground">
        Send us a message
      </h2>
      <p className="text-muted-foreground mb-8">
        We usually respond within one business day
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        {/* Honeypot for bots — keep visually hidden */}
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength={MAX.name}
            autoComplete="name"
            className={fieldClass}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={MAX.email}
            autoComplete="email"
            inputMode="email"
            className={fieldClass}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="company"
            placeholder="Company Name (Optional)"
            value={formData.company}
            onChange={handleChange}
            maxLength={MAX.company}
            autoComplete="organization"
            className={fieldClass}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            maxLength={MAX.subject}
            className={fieldClass}
          />
        </div>

        <textarea
          name="message"
          placeholder="Tell us about your project..."
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          maxLength={MAX.message}
          className={`${fieldClass} resize-none`}
        />

        {error ? (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        ) : null}
        {success ? (
          <p className="text-sm text-primary" role="status">
            Thanks — your message was received. We will get back to you soon.
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 disabled:opacity-70"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

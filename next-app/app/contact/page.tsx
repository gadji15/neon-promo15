"use client";
import { SectionWrapper } from "../../components/SectionWrapper";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("Merci pour votre message ! Nous vous répondrons rapidement.");
    formRef.current?.reset();
  }

  return (
    <SectionWrapper title="Contact">
      <form onSubmit={handleSubmit} ref={formRef} className="space-y-6 max-w-lg mx-auto">
        <div>
          <label htmlFor="name" className="block text-white mb-1 font-medium">
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-2 rounded border border-[var(--neon-purple)] bg-black/30 text-white focus:outline-none focus:border-[var(--neon-cyan)]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-2 rounded border border-[var(--neon-purple)] bg-black/30 text-white focus:outline-none focus:border-[var(--neon-cyan)]"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-white mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            className="w-full px-4 py-2 rounded border border-[var(--neon-purple)] bg-black/30 text-white focus:outline-none focus:border-[var(--neon-cyan)]"
          />
        </div>
        <button
          type="submit"
          className="btn btn-redirect w-full mt-4"
        >
          Envoyer
        </button>
      </form>
      <p className="mt-8 text-center text-white/70">
        Ou écrivez-nous à{" "}
        <a href="mailto:sunumarketing221@gmail.com" className="underline text-[var(--neon-cyan)]">
          sunumarketing221@gmail.com
        </a>
      </p>
    </SectionWrapper>
  );
}
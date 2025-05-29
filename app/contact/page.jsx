'use client';

import React, { useState } from 'react';

const ContactPage = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: '2ab29d83-0ff2-4c39-b9b2-115802d16ba6',
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setShowSuccess(true);
      form.reset();
      setTimeout(() => setShowSuccess(false), 4000); // hide after 4s
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="container px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-light">
          Let’s <span className="text-yellow-500 font-bold">Create Together</span>
        </h1>
        <p className="mt-4 text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl">
          Ready to take your brand to the next level? Get in touch with us. Whether it’s a product shoot, commercial, or fashion photography — we’re here to help.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-sm text-white/70">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="p-4 bg-zinc-900 text-white rounded-lg outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm text-white/70">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="email@example.com"
              className="p-4 bg-zinc-900 text-white rounded-lg outline-none"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="message" className="mb-2 text-sm text-white/70">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Enter your message"
              className="p-4 bg-zinc-900 text-white rounded-lg outline-none"
            />
          </div>

          <div className="md:col-span-2 text-right">
            <button
              type="submit"
              className="border-2 border-white text-white py-3 px-8 rounded-lg text-lg hover:bg-white hover:text-black transition duration-300"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>

      {showSuccess && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out">
          ✅ Message sent successfully!
        </div>
      )}

      {/* Tailwind animation (you can move this to global styles if needed) */}
      <style jsx>{`
        .animate-fade-in-out {
          animation: fadeInOut 4s ease-in-out forwards;
        }
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;

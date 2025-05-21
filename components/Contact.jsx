import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-background text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading text-neonGreen mb-8">Let’s Build Something Insane Together</h2>

        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="grid gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-black/40 border border-neonBlue focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-black/40 border border-neonBlue focus:outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded bg-black/40 border border-neonBlue focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-neonOrange text-black font-bold rounded hover:opacity-80 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-sm">
          <p>📧 <a href="mailto:chawlavasu2@gmail.com" className="text-neonBlue">chawlavasu2@gmail.com</a></p>
          <p>📞 <a href="tel:9318362477" className="text-neonGreen">9318362477</a></p>
        </div>

        <p className="mt-10 italic text-neonBlue">“The future is insane. Let’s create it together.”</p>
      </div>
    </section>
  );
};

export default Contact;

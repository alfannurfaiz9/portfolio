import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { EMAIL } from "../utils";

const Contact = ({ onSent }) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.id]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const subject = `Inquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      EMAIL,
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      onSent("Opening Gmail...");
    }, 500);
  };

  const inputCls =
    "w-full px-3 py-2 rounded bg-bgDark border border-borderColor text-textBright placeholder-gray-600 focus:outline-none focus:border-accent text-xs";

  return (
    <section
      id="contact"
      className="space-y-6 pt-6 border-t border-borderColor"
    >
      <SectionTitle num="05.">Contact</SectionTitle>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-textBright">
            Send a message or proposal.
          </h3>
          <p className="text-xs text-subtext leading-relaxed">
            Whether you are looking for a software developer, technical
            consultation, or project collaboration, feel free to drop an inquiry
            below.
          </p>

          <div className="pt-2 font-mono text-xs space-y-2 text-subtext">
            <p className="flex items-center gap-2">
              <span className="text-accent">&gt;</span> Email:{" "}
              <span className="text-textBright">{EMAIL}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-accent">&gt;</span> Location:{" "}
              <span className="text-textBright">Jakarta, Indonesia</span>
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-surface p-5 rounded border border-borderColor space-y-4 font-mono text-xs"
        >
          <div>
            <label htmlFor="name" className="block text-subtext mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className={inputCls}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-subtext mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="youremail@example.com"
              value={form.email}
              onChange={handleChange}
              className={inputCls}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-subtext mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              required
              placeholder="Describe project or inquiry..."
              value={form.message}
              onChange={handleChange}
              className={`${inputCls} resize-none`}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full py-2.5 rounded bg-textBright text-surface font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            {sending ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;

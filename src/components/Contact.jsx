import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const info = [
  { label: 'Location', value: 'India', icon: FiMapPin },
  { label: 'Email', value: 'rohitsolanki0473@gmail.com', icon: FiMail, href: 'mailto:rohitsolanki0473@gmail.com' },
];

const socials = [
  { icon: FiGithub, href: 'https://github.com/rohitsolanki01', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/rohit--solanki/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:rohitsolanki0473@gmail.com', label: 'Email' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form:', form);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/60">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[Outfit] mt-2">Get in <span className="gradient-text">Touch</span></h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-lg">Have a project in mind? Let&apos;s work together.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mt-8 sm:mt-12">
<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="lg:col-span-2 space-y-4 sm:space-y-6">
<div className="rounded-xl border border-border/50 bg-card/30 overflow-hidden">
              <table className="w-full">
                <tbody>
                  {info.map((item) => (
                    <tr key={item.label} className="border-b border-border/30 last:border-0">
                      <td className="px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm text-muted-foreground">{item.label}</td>
                      <td className="px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm text-foreground font-medium">
                        {item.href ? <a href={item.href} className="text-primary hover:underline break-all">{item.value}</a> : item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground">Feel free to reach out via email or connect on social media.</p>

            <div className="flex gap-2">
              {socials.map((s) => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}
                  className="p-2 sm:p-2.5 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all" aria-label={s.label}>
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>
<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border/50 bg-card/30 p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="text-[10px] sm:text-xs font-medium text-muted-foreground mb-1 sm:mb-1.5 block">Name</label>
                  <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/40 transition-all" />
                </div>
                <div>
                  <label className="text-[10px] sm:text-xs font-medium text-muted-foreground mb-1 sm:mb-1.5 block">Email</label>
                  <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/40 transition-all" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 sm:mb-1.5">
                  <label className="text-[10px] sm:text-xs font-medium text-muted-foreground">Message</label>
                  <span className="text-[9px] sm:text-[10px] text-muted-foreground/50">{form.message.length}/500</span>
                </div>
                <textarea required rows={4} maxLength={500} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell me about your project..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-background/50 border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/40 resize-none transition-all" />
              </div>
              <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                className="w-full py-2 sm:py-2.5 rounded-lg font-medium bg-primary text-primary-foreground text-xs sm:text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                <FiSend size={13} /> Send Message
              </motion.button>
              {sent && (
                <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-center text-[10px] sm:text-xs text-green-500 font-medium">
                  ✅ Message sent! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

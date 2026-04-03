import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 sm:py-18 lg:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="section-copy text-sm sm:text-base">Trusted feedback from real collaboration and mentoring experiences.</p>
        </motion.div>

        <div className="mt-8 sm:mt-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative reference-panel rounded-3xl p-6 sm:p-8 md:p-10 grid md:grid-cols-[150px_1fr] gap-6 items-center"
          >
            <FaQuoteLeft className="absolute top-5 left-5 sm:top-6 sm:left-6 text-primary/20" size={40} />

            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-white/15">
              <img src="/images/avatar.png" alt="Client" className="w-full h-full object-cover object-top" />
            </div>

            <div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed italic">
                &ldquo;Working with Rohit was smooth and transparent. He communicates clearly, ships fast, and keeps quality high from first draft to final delivery.&rdquo;
              </p>

              <div className="mt-5">
                <p className="text-sm sm:text-base font-bold text-foreground font-[Sora]">Anurag S.</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Operations Lead · Service Platform</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

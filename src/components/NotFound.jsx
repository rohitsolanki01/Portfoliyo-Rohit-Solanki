import { motion } from 'framer-motion';
import Logo from './Logo';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/14 rounded-full blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-accent/12 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '2s' }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10 max-w-md"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mx-auto mb-6"
        >
          <Logo size={56} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-7xl sm:text-8xl font-extrabold font-[Sora] gradient-text mb-2">404</h1>
          <p className="text-lg sm:text-xl font-semibold text-foreground mb-2">Page Not Found</p>
          <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
            Looks like you&apos;ve ventured into uncharted territory. The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_12px_45px_-18px_rgba(80,190,255,0.8)] hover:shadow-[0_14px_50px_-16px_rgba(117,255,197,0.7)] transition-all text-sm flex items-center justify-center gap-2"
          >
            <FiHome size={15} /> Back to Home
          </motion.a>
          <motion.button
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 rounded-xl font-semibold border border-white/15 bg-white/5 hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all text-sm flex items-center justify-center gap-2"
          >
            <FiArrowLeft size={15} /> Go Back
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 p-4 rounded-2xl border border-white/10 bg-card/45 backdrop-blur-xl text-left font-mono text-xs text-muted-foreground/60"
        >
          <p><span className="text-red-400">Error</span>: Route not found</p>
          <p className="text-muted-foreground/40 mt-1">at Router.resolve (/portfolio/router.js:42)</p>
          <p className="text-muted-foreground/40">at navigate (main.jsx:17)</p>
          <p className="mt-2"><span className="text-green-400">Suggestion</span>: Try navigating to <a href="/" className="text-primary hover:underline">/home</a></p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-serif text-lg font-bold gradient-text">
            Jacques Twizeyimana
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:twizojacques@gmail.com"
              className="text-muted hover:text-amber text-sm font-light transition-colors link-underline"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/twizeyimana-jacques"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-amber text-sm font-light transition-colors link-underline"
            >
              LinkedIn
            </a>
          </div>
          <div className="text-muted text-xs font-light">
            &copy; {new Date().getFullYear()} Jacques Twizeyimana
          </div>
        </div>
      </div>
    </footer>
  );
}

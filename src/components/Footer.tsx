const Footer = () => (
  <footer className="py-8 px-4 border-t border-border">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-display font-bold text-foreground">
        &lt;PJ /&gt;
      </span>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Praduman Singh. Built with passion & clean
        code.
      </p>
    </div>
  </footer>
);

export default Footer;

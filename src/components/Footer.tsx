const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">© jun by</span>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Minimal Square</a>
            <span className="text-sm text-muted-foreground">Powered by</span>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Webflow</a>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Style Guide</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Licenses</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Changelog</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
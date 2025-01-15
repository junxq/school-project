const Hero = () => {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight gradient-text">
            BOT DEVELOPMENT & ML ENGINEERING SOLUTIONS
          </h1>
          <p className="text-muted-foreground text-lg">
            Hi, I'm jun - a passionate Bot Developer and ML Engineer specializing in creating intelligent automation solutions and machine learning systems that drive real business value.
          </p>
          <button className="px-8 py-3 bg-primary/80 backdrop-blur-sm text-white rounded-[var(--radius)] text-lg hover:bg-primary hover:shadow-glow transition-all duration-300">
            Explore My Work
          </button>
        </div>
        <div className="relative animate-float">
          <div className="absolute inset-0 bg-gradient-dark opacity-20 blur-2xl rounded-[var(--radius)]"></div>
          <img
            src="/uploads/06c179e0-a7c4-4fd0-9d64-b6d724ed7e48.png"
            alt="Hero"
            className="relative w-full rounded-[var(--radius)] shadow-xl glass-card p-2 hover:shadow-glow-lg transition-shadow duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
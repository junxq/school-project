const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Chen",
      role: "AI Research Lead, TechCorp",
      image: "/uploads/e3a0c6af-2914-4e05-8cb2-e65b719d7670.png",
      text: "JUN's expertise in ML engineering is exceptional. The custom bot solution they developed has transformed our customer service operations, reducing response times by 75%.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "CTO, DataFlow Systems",
      image: "/uploads/e3a0c6af-2914-4e05-8cb2-e65b719d7670.png",
      text: "Working with JUN was a game-changer for our ML infrastructure. Their deep understanding of both theory and practical implementation helped us achieve remarkable results.",
    },
    {
      id: 3,
      name: "Michael Zhang",
      role: "Product Manager, AI Solutions",
      image: "/uploads/e3a0c6af-2914-4e05-8cb2-e65b719d7670.png",
      text: "The chatbot JUN developed for us has become an integral part of our platform. Their attention to detail and innovative approach to ML problems is truly impressive.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-dark text-transparent bg-clip-text">
          CLIENT TESTIMONIALS
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 bg-secondary/30 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-glow transition-all duration-300 group animate-fade-up"
            >
              <p className="text-muted-foreground mb-6 group-hover:text-white transition-colors duration-300">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-primary/50 group-hover:border-primary transition-colors duration-300"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
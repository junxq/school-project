const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "LLM Model",
      description: "The leaderboard open-source model",
      image: "/uploads/milad-fakurian-sin5WZzF1U0-unsplash.png",
      year: "2024",
    },
    {
      id: 2,
      title: "Visualization Bot",
      description: "Transforming data into stunning visuals",
      image: "/uploads/sebastian-svenson-8QgqOLJAL8k-unsplash.png",
      year: "2025",
    },
  ];

  return (
    <section className="py-16 bg-secondary/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold gradient-text">SELECTED PROJECTS</h2>
          <button className="px-6 py-2 glass-card text-white hover:shadow-glow transition-all duration-300">
            View all projects
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-[var(--radius)] hover-glow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="mt-2 text-gray-200">{project.description}</p>
                    <span className="absolute top-6 right-6 text-gray-200">{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
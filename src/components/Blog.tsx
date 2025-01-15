const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Shhhh!",
      category: "Interesting place",
      image: "/uploads/tilak-baloni-1UFjgyhTbH8-unsplash.png",
      excerpt: "Something incredible, that's breaking the rules.",
    },
    {
      id: 2,
      title: "Solar System",
      category: "Design",
      image: "/uploads/vadim-sadovski-o5xxn_PeOgU-unsplash.png",
      excerpt: "Immersive solar system will be here.",
    },
  ];

  return (
    <section className="py-16 bg-secondary/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold gradient-text">LATEST BLOGS</h2>
          <button className="px-6 py-2 glass-card text-white hover:shadow-glow transition-all duration-300">
            View all posts
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="glass-card overflow-hidden hover:shadow-glow transition-all duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-primary">{post.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-4 text-white">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <button className="text-primary hover:text-primary-hover transition-colors">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
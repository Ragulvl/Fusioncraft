import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/companyData';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = ["All", "Web Development", "Software Solutions", "UI/UX Design", "Branding"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    project => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses 
            achieve their digital goals with innovative solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'glass-card hover:bg-primary/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group glass-card overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500"
              onClick={() => setSelectedProject(project.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ExternalLink className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-accent font-medium mb-2">{project.category}</div>
                <h3 className="font-orbitron text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-muted-foreground">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="glass max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {(() => {
                const project = projects.find(p => p.id === selectedProject)!;
                return (
                  <>
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-border">
                      <div>
                        <h3 className="font-orbitron text-2xl font-bold">{project.title}</h3>
                        <p className="text-accent text-sm">{project.category}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedProject(null)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                      />
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.fullDescription}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span 
                              key={index}
                              className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-4">
                        <Button 
                          className="flex items-center space-x-2"
                          onClick={() => {
                            if (project.liveUrl && project.liveUrl !== '#') {
                              window.open(project.liveUrl, '_blank');
                            } else {
                              alert('Live URL not available for this project');
                            }
                          }}
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>View Live</span>
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex items-center space-x-2"
                          onClick={() => {
                            if (project.githubUrl && project.githubUrl !== '#') {
                              window.open(project.githubUrl, '_blank');
                            } else {
                              alert('GitHub URL not available for this project');
                            }
                          }}
                        >
                          <Github className="h-4 w-4" />
                          <span>View Code</span>
                        </Button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
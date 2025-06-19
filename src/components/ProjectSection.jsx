import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = [
  {
    id: 1,
    title: "Crowd Anomaly Detection",
    description:
      "A deep learning-based video surveillance system for detecting crowd anomalies such as fights, medical emergencies (fall detection), and mass running behavior, using LSTM, Isolation Forest, Autoencoders, One-Class SVM, and Local Outlier Factor with 97% accuracy on the UBnormal dataset.",
    image: "/projects/Crowd-Anomaly-Detection.png",
    tags: [
      "Python",
      "OpenCV",
      "LSTM",
      "ML",
      "Computer Vision",
      "Anomaly Detection",
    ],
    githubUrl: "#",
  },
  {
    id: 2,
    title: "GitHub Profile Analyzer",
    description:
      "A web-based tool for analyzing GitHub developer profiles — scrapes repositories, extracts key statistics, and generates insights on languages, frameworks, and activity, to assist recruiters in evaluating candidate skills.",
    image: "/projects/github-analyzer.png",
    tags: [
      "Java",
      "Spring Boot",
      "React",
      "REST API",
      "Web Scraping",
      "Full Stack",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-[1.03] flex flex-col"
            >
              {/* Image wrapper */}
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[3/2] object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-sm text-muted mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex space-x-4">
                  {project.demoUrl ?( project.demoUrl !== "#" ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-primary text-sm"
                    >
                      <ExternalLink className="drop-shadow hover:text-primary transition-colors duration-300" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="text-sm text-glow flex items-center space-x-1">
                      <ExternalLink className="drop-shadow hover:text-primary transition-colors duration-300" />
                      <span className="line-through text-primary/60">
                        Live Demo (Coming Soon!)
                      </span>
                    </span>
                  ) ): null }

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-primary text-sm"
                    >
                      <Github className="drop-shadow hover:text-primary transition-colors duration-300" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Smit-whitespace" target="_blank">
            Check Out my Github <ArrowRight size={16} />
          </a>
        </div>


      </div>
    </section>
  );
};

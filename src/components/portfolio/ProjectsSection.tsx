import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectElectron from "@/assets/project-electron.png";
import projectPhishing from "@/assets/project-phishing.png";
import projectSql from "@/assets/project-sql.png";

const projects = [
  {
    title: "Electron Desktop Shopping Application",
    description:
      "A cross-platform desktop shopping application featuring secure user authentication, category-based browsing, real-time cart updates, and QR-based payment support for UPI and card transactions.",
    tags: ["HTML", "CSS", "JavaScript", "Electron", "UI/UX Design"],
    color: "from-blue-500/10 to-cyan-500/10",
    image: projectElectron,
  },
  {
    title: "Web & Email Phishing Analysis Using NLP",
    description:
      "Addresses phishing threats using fine-tuned BERT and DistilBERT models. Deployed as an Explainable AI application on Hugging Face with Captum Integrated Gradients for transparent threat identification.",
    tags: ["Machine Learning", "NLP", "Python", "Explainable AI", "Cybersecurity"],
    color: "from-purple-500/10 to-pink-500/10",
    image: projectPhishing,
  },
  {
    title: "Hybrid Rule-ML SQL Injection Detection",
    description:
      "Real-time SQL injection detection combining rule-based analysis with ML classifier. Decodes obfuscated payloads and generates visual reports including accuracy, ROC, and confusion matrices.",
    tags: ["Cybersecurity", "Feature Engineering", "Python", "Machine Learning"],
    color: "from-emerald-500/10 to-teal-500/10",
    image: projectSql,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Featured Projects
          </span>
          <h2 className="heading-section">
            My Recent Work
          </h2>
        </div>

        <div className="space-y-8">
{projects.map((project, index) => (
            <div
              key={project.title}
              className={`card-interactive group relative overflow-hidden bg-gradient-to-br ${project.color}`}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Project Image */}
                <div className="lg:w-2/5 flex-shrink-0">
                  <div className="rounded-lg overflow-hidden border border-border/50 shadow-md">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 lg:h-56 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="relative z-10 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-body mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-background/80 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/DurgamPoojitha/" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

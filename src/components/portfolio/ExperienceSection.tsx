import { Briefcase, GraduationCap, Award } from "lucide-react";

const certifications = [
  "Supervised Learning, Advanced Learning Algorithms - Deeplearning.AI Coursera",
  "Business Analysis Fundamentals - Microsoft Coursera",
  "Data For Business Analysts Using Microsoft Excel - Microsoft Coursera",
  "Python For Beginners – Udemy",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="heading-section">
            Professional Journey
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Internship Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Work Experience
              </h3>
            </div>

            <div className="relative pl-8 border-l-2 border-accent/30">
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-accent" />
              <div className="card-interactive">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-accent">
                    May 2025 – June 2025
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  Full-Stack Development Intern
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  INNOVATIQ TECHNOLOGIES PTE. LTD.
                </p>
                <p className="text-body text-sm mb-4">
                  Built a Task Learning Management System using HTML, CSS, JavaScript, 
                  and Angular for frontend with Node.js backend. Contributed to feature 
                  development, bug fixing, and UI enhancements while developing 
                  practical understanding of IT infrastructure and deployment processes.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "Angular", "Node.js"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0" />
                  <p className="text-sm text-foreground">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

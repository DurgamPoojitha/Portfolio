import { Database, Shield, Smartphone, TrendingUp } from "lucide-react";

const focusAreas = [
  {
    icon: TrendingUp,
    title: "Data Analysis",
    description: "Transforming raw data into actionable insights",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Designing and optimizing database systems",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Building cross-platform mobile applications",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Implementing security solutions and threat detection",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="heading-section mb-6">
            Driven by Curiosity,<br />Fueled by Innovation
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-body mb-6">
              I'm a dedicated computer science professional with strong academic foundations 
              and versatile programming expertise. My experience spans problem-solving, 
              software development, and data analysis, with a strong interest in building 
              efficient and reliable systems.
            </p>
            <p className="text-body mb-6">
              I thrive in collaborative environments, enjoy translating complex ideas into 
              practical solutions, and actively engage in continuous learning. I am motivated 
              to contribute meaningfully to data-driven decision-making and to create 
              solutions that support organizational growth.
            </p>
            <p className="text-body">
              Beyond coding, I express creativity through music and dance, and actively 
              explore diverse projects that strengthen my critical thinking and innovation skills.
            </p>
          </div>

          {/* Focus Areas Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {focusAreas.map((area, index) => (
              <div
                key={area.title}
                className="card-interactive"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Code2, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frameworks & Libraries",
    icon: Code2,
    skills: [
      { name: "React", level: 85 },
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "Angular", level: 80 },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 87 },
      { name: "C++", level: 85 },
      { name: "Java", level: 80 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 75 },
    ],
  },
];

const tools = [
  "VS Code",
  "GitHub",
  "Jupyter Notebook",
  "MySQL Workbench",
  "Microsoft Visio",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Skills & Expertise
          </span>
          <h2 className="heading-section">
            Technical Proficiency
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="card-interactive">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Wrench className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-semibold text-foreground">
              Favourite Tools
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

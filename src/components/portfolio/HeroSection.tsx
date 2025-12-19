import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="heading-display mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Hi, I'm{" "}
              <span className="text-accent">Poojitha Durgam</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Computer Science Professional | Aspiring Data Analyst | ML Enthusiast
            </p>

            <p className="text-body mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Passionate about building efficient systems and translating complex ideas into practical solutions. 
              I thrive in collaborative environments and am driven by continuous learning.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">20+</div>
                <div className="text-sm text-muted-foreground">Contributions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Learning</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <a
                href="https://github.com/DurgamPoojitha/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/poojitha-durgam-856a0b291"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:durgampoojitha19@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 blur-xl scale-110" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-xl">
                <img
                  src={profilePhoto}
                  alt="Poojitha Durgam"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full animate-float" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

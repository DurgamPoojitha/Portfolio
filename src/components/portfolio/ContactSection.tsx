import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "durgampoojitha19@gmail.com",
    href: "mailto:durgampoojitha19@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9676831404",
    href: "tel:+919676831404",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, Karnataka, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/DurgamPoojitha/",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/poojitha-durgam-856a0b291",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="heading-section mb-4">
            Let's Work Together
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or potential collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-medium hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent hover:text-accent transition-all"
                  >
                    <social.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="card-interactive">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Send me a message
            </h3>
            <p className="text-body text-sm mb-6">
              Whether you have a question, want to collaborate, or just want to say hello, 
              I'd love to hear from you!
            </p>
            <div className="space-y-4">
              <Button variant="accent" size="lg" className="w-full" asChild>
                <a href="mailto:durgampoojitha19@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a
                  href="https://www.linkedin.com/in/poojitha-durgam-856a0b291"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

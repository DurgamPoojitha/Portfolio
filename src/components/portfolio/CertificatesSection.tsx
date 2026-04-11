import { Download, ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import certificates
import cert1 from "@/assets/Coursera 1VV39340IYKW.pdf";
import cert2 from "@/assets/Coursera 4QF84JF4LOHE.pdf";
import cert3 from "@/assets/Coursera 62QFSGJBIUTF.pdf";
import cert4 from "@/assets/Coursera AYRB2PYXU3QI.pdf";
import cert5 from "@/assets/Coursera JMYAG1SG0WZD.pdf";
import cert6 from "@/assets/Coursera R054WQ1UXC50.pdf";
import cert7 from "@/assets/Coursera WI3SBS8ARWZI.pdf";

const certificates = [
    {
        title: "Coursera Certificate - 1VV39340IYKW",
        issuer: "Coursera",
        file: cert1,
    },
    {
        title: "Coursera Certificate - 4QF84JF4LOHE",
        issuer: "Coursera",
        file: cert2,
    },
    {
        title: "Coursera Certificate - 62QFSGJBIUTF",
        issuer: "Coursera",
        file: cert3,
    },
    {
        title: "Coursera Certificate - AYRB2PYXU3QI",
        issuer: "Coursera",
        file: cert4,
    },
    {
        title: "Coursera Certificate - JMYAG1SG0WZD",
        issuer: "Coursera",
        file: cert5,
    },
    {
        title: "Coursera Certificate - R054WQ1UXC50",
        issuer: "Coursera",
        file: cert6,
    },
    {
        title: "Coursera Certificate - WI3SBS8ARWZI",
        issuer: "Coursera",
        file: cert7,
    },
];

const CertificatesSection = () => {
    return (
        <section id="certificates" className="section-padding bg-background/50">
            <div className="container-narrow">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                        Achievements
                    </span>
                    <h2 className="heading-section">
                        My Certificates
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <div key={index} className="card-interactive bg-secondary/20 border border-border/50 p-6 flex flex-col justify-between hover:border-primary/30 transition-colors">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                                    <Award className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm text-foreground mb-1 line-clamp-2">{cert.title}</h3>
                                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                                </div>
                            </div>
                            <div className="flex gap-3 mt-auto">
                                <Button variant="outline" size="sm" className="w-full flex-1" asChild>
                                    <a href={cert.file} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-3 h-3 mr-2" />
                                        View
                                    </a>
                                </Button>
                                <Button size="sm" className="w-full flex-1" asChild>
                                    <a href={cert.file} download>
                                        <Download className="w-3 h-3 mr-2" />
                                        Download
                                    </a>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;

import { Download, ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

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
        title: "Supervised Machine Learning: Regression and Classification",
        issuer: "Coursera (Stanford | DeepLearning.AI)",
        file: cert1,
    },
    {
        title: "Advanced Learning Algorithms",
        issuer: "Coursera (Stanford | DeepLearning.AI)",
        file: cert2,
    },
    {
        title: "Data and Business Process Modeling with Microsoft Visio",
        issuer: "Coursera (Microsoft)",
        file: cert3,
    },
    {
        title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
        issuer: "Coursera (Stanford | DeepLearning.AI)",
        file: cert4,
    },
    {
        title: "Machine Learning Specialization",
        issuer: "Coursera (Stanford | DeepLearning.AI)",
        file: cert5,
    },
    {
        title: "Data for Business Analysts Using Microsoft Excel",
        issuer: "Coursera (Microsoft)",
        file: cert6,
    },
    {
        title: "Business Analysis Fundamentals",
        issuer: "Coursera (Microsoft)",
        file: cert7,
    },
];

const CertificatesSection = () => {
    return (
        <section id="certificates" className="section-padding bg-background/50 overflow-hidden relative">
            <div className="container px-8 md:px-12 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                        Achievements
                    </span>
                    <h2 className="heading-section">
                        My Certificates
                    </h2>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full relative px-2"
                >
                    <CarouselContent className="-ml-4">
                        {certificates.map((cert, index) => (
                            <CarouselItem key={index} className="pl-4 sm:basis-1/1 md:basis-1/2 lg:basis-1/3 pb-4">
                                <div className="h-full card-interactive bg-secondary/20 border border-border/50 p-6 flex flex-col justify-between hover:border-primary/30 transition-colors rounded-xl">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0 transition-transform group-hover:scale-110">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-[15px] leading-tight text-foreground mb-2">{cert.title}</h3>
                                            <p className="text-xs font-medium text-muted-foreground">{cert.issuer}</p>
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
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious className="-left-4 sm:-left-8 border-border bg-background hover:bg-secondary transition-all w-10 h-10" />
                        <CarouselNext className="-right-4 sm:-right-8 border-border bg-background hover:bg-secondary transition-all w-10 h-10" />
                    </div>
                </Carousel>

                {/* Mobile controls visualization alternative if buttons are hidden - the user can also simply drag/swipe */}
                <div className="mt-8 text-center text-sm text-muted-foreground md:hidden flex justify-center items-center">
                    Swipe to view more certificates
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;

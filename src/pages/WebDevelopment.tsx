import { Link } from 'react-router-dom';
import { Globe, ShoppingCart, Code, Search, Wrench, CheckCircle2, Layers, Cpu, Smartphone, Database, Zap, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { TypewriterText } from '@/components/AnimatedText';
import webDevHero from '@/assets/web_development_hero.png';
import { LoadingWrapper, StaggeredLoadingWrapper } from '@/components/LoadingWrapper';
import { ServiceCardSkeleton } from '@/components/LoadingSkeletons';

const WebDevelopment = () => {
    const features = [
        {
            icon: Globe,
            text: "Fully Responsive Design",
            description: "Websites that adapt perfectly to any screen size, ensuring a flawless experience on mobiles, tablets, and desktops."
        },
        {
            icon: ShoppingCart,
            text: "eCommerce Solutions",
            description: "Secure, scalable online stores built on Shopify or custom platforms to maximize your sales and streamline management."
        },
        {
            icon: Code,
            text: "Custom Web Applications",
            description: "Tailor-made software solutions designed to address your specific business challenges and operational neads."
        },
        {
            icon: Search,
            text: "SEO & Performance",
            description: "Optimized from the ground up for lightning-fast load times and maximum visibility in search engine results."
        },
        {
            icon: Wrench,
            text: "Maintenance & Support",
            description: "Proactive monitoring, regular updates, and dedicated support to keep your digital presence secure and running smoothly."
        }
    ];

    const processSteps = [
        {
            icon: Search,
            title: "Discovery & Planning",
            description: "We dive deep into your business goals, target audience, and requirements to create a strategic roadmap."
        },
        {
            icon: Layers,
            title: "Design & Prototyping",
            description: "Crafting intuitive, user-centric designs and interactive prototypes that visualize the final product."
        },
        {
            icon: Code,
            title: "Development",
            description: "Writing clean, efficient, and scalable code using the latest technologies and best practices."
        },
        {
            icon: Rocket,
            title: "Launch & Growth",
            description: "Seamless deployment followed by ongoing optimization and support to ensure sustained success."
        }
    ];

    const technologies = [
        { name: "React", type: "Frontend" },
        { name: "Next.js", type: "Framework" },
        { name: "TypeScript", type: "Language" },
        { name: "Tailwind CSS", type: "Styling" },
        { name: "Node.js", type: "Backend" },
        { name: "Supabase", type: "Database" },
        { name: "Shopify", type: "eCommerce" },
        { name: "AWS", type: "Cloud" }
    ];

    const industries = [
        {
            title: "eCommerce & Retail",
            description: "High-conversion online stores with seamless checkout experiences and inventory management.",
            features: ["Custom Product Pages", "Payment Gateway Integration", "Inventory Sync", "Customer Accounts"]
        },
        {
            title: "Corporate & Business",
            description: "Professional digital presence that establishes authority and builds trust with potential clients.",
            features: ["Service Showcases", "Team Profiles", "Lead Generation Forms", "Resource Libraries"]
        },
        {
            title: "SaaS & Startups",
            description: "Scalable web applications designed for rapid growth and user engagement.",
            features: ["User Dashboards", "Subscription Management", "API Integrations", "Real-time Data"]
        },
        {
            title: "Service Industries",
            description: "Booking and management platforms for service-based businesses.",
            features: ["Appointment Scheduling", "Service Catalogs", "Customer Reviews", "Location Maps"]
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Web Development Services - Microfast Tech"
                description="Building fast, flawless, and future-ready websites. Custom web solutions, eCommerce, and responsive design managed by experts."
            />
            <Header />

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-10 animate-techGrid pointer-events-none">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
              linear-gradient(to right, hsl(var(--red-primary) / 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--red-primary) / 0.3) 1px, transparent 1px)
            `,
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="absolute inset-0 animate-heroReveal">
                    <img
                        src={webDevHero}
                        alt="Web Development Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/90 to-primary/80 animate-gradientSweep"
                        style={{ backgroundSize: '200% 100%' }} />
                </div>

                <div className="relative container mx-auto px-4 animate-contentSlideUp">
                    <div className="max-w-4xl">
                        <div className="flex items-center space-x-3 mb-6">
                            <Globe className="h-12 w-12 text-blue-400 animate-pulseSlow" />
                            <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                                <TypewriterText
                                    text="Web Development"
                                    delay={100}
                                    speed={50}
                                    className="text-white"
                                />
                            </h1>
                        </div>

                        <p className="text-2xl lg:text-3xl text-white/90 mb-8 font-light italic">
                            “Building fast, flawless, and future-ready websites.”
                        </p>

                        <p className="text-xl lg:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed">
                            At Microfast Tech, we believe your website is the digital storefront of your business. It needs to be faster, smarter, and more effective than your competition.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 items-center">
                            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto btn-red-hover shadow-xl shadow-red-500/10" asChild>
                                <Link to="/contact" className="text-red-primary font-bold">Start Your Project</Link>
                            </Button>
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 p-2 pr-4 rounded-full">
                                <div className="bg-green-500/20 p-1.5 rounded-full">
                                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                                </div>
                                <span className="text-white/90 text-sm font-medium">
                                    Managed by <strong>Krish Kavathia</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction & Leadership - The "Why Us" */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8 animate-fadeInLeft">
                            <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                                Transforming Ideas into <span className="text-primary">Digital Reality</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                At Microfast Tech, we believe your website is more than just a collection of pages — it’s the digital storefront of your business and often the first impression your customers have of your brand. In today’s fast-moving digital world, a website needs to be faster, smarter, and more effective than the competition. It should not only attract visitors but also engage them, build trust, and convert attention into action.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                That’s why we focus on creating websites that seamlessly blend beautiful design, powerful functionality, and bulletproof performance. Every project we take on is built with purpose — tailored to meet your goals, your audience, and your brand identity.
                            </p>

                            <div className="space-y-4 text-muted-foreground">
                                <h3 className="text-xl font-bold text-foreground">Our team specializes in building:</h3>
                                <ul className="space-y-2">
                                    {[
                                        "Fully responsive websites that look and perform flawlessly on every device",
                                        "Custom eCommerce solutions designed to scale with your business",
                                        "User-friendly interfaces backed by clean, maintainable code",
                                        "Optimized web performance for faster load times and higher search rankings",
                                        "Secure, reliable infrastructures that keep your business running smoothly"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                From concept to launch, we handle every stage of the process with precision. We take care of the technical details so you can focus on what matters most — running and growing your business.
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                At Microfast Tech, we combine strategic thinking, creative design, and solid development to help brands evolve from idea to impactful digital presence — without the tech headaches.
                            </p>

                            <div className="mt-8 p-8 bg-gradient-to-br from-secondary/50 to-background border border-border rounded-xl shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <AwardIcon className="w-24 h-24 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="text-primary h-6 w-6" />
                                    Technical Excellence
                                </h3>
                                <p className="text-muted-foreground relative z-10">
                                    "Every project is personally overseen by <strong>Krish Kavathia</strong>, ensuring that we don't just meet industry standards, but exceed them. We focus on clean code, scalability, and user experience."
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-6 animate-fadeInRight">
                            {features.map((feature, index) => (
                                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary group">
                                    <CardContent className="p-6 flex items-start gap-5">
                                        <div className="mt-1 bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                            <feature.icon className="h-6 w-6 text-primary group-hover:text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-foreground mb-2">{feature.text}</h4>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Development Process</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            A proven methodology to deliver high-quality results on time and within budget.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative group">
                                {/* Connector Line (Desktop) */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border -z-10 group-hover:bg-primary/30 transition-colors" />
                                )}

                                <div className="bg-background p-8 rounded-xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                                    <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-4 border-background shadow-lg">
                                        <step.icon className="h-10 w-10 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technologies We Master</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We use the latest tools and frameworks to build robust, future-proof applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                        {technologies.map((tech, index) => (
                            <div key={index} className="flex flex-col items-center justify-center p-4 bg-secondary/10 rounded-lg hover:bg-secondary/30 transition-colors border border-transparent hover:border-primary/20">
                                <span className="font-bold text-foreground">{tech.name}</span>
                                <span className="text-xs text-muted-foreground mt-1">{tech.type}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Solutions */}
            <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Industry Solutions</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Tailored web solutions designed for the unique needs of your industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {industries.map((industry, index) => (
                            <StaggeredLoadingWrapper key={index} index={index} staggerDelay={100} skeleton={<ServiceCardSkeleton />}>
                                <Card className="h-full hover:border-primary/50 transition-colors">
                                    <CardHeader>
                                        <CardTitle className="text-2xl text-primary">{industry.title}</CardTitle>
                                        <CardDescription className="text-base mt-2">
                                            {industry.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 opacity-70">Key Features</h4>
                                        <ul className="grid grid-cols-2 gap-3">
                                            {industry.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </StaggeredLoadingWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-primary via-primary to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Build Your Future-Ready Website?
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Let's create a digital experience that drives results for your business. Schedule a free consultation today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto btn-red-hover shadow-2xl" asChild>
                            <Link to="/contact" className="text-red-primary font-bold">Get a Free Quote</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto bg-transparent text-white border-white hover:bg-white hover:text-primary" asChild>
                            <Link to="/services">Explore More Services</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

// Helper Icon Component for the extra flair
function AwardIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
    )
}

export default WebDevelopment;

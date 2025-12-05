import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Network, Server, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import SEO from '@/components/SEO';
import { LoadingWrapper, StaggeredLoadingWrapper } from '@/components/LoadingWrapper';
import { ServiceCardSkeleton, HeroSkeleton, IndustryCardSkeleton } from '@/components/LoadingSkeletons';
import { TypewriterText, FadeInText, SlideInText } from '@/components/AnimatedText';
import heroTech1 from '@/assets/hero-tech-1.jpg';
import heroTech3 from '@/assets/hero-tech-3.jpg';
import cctvImage from '@/assets/cctv-system.jpg';
import pbxImage from '@/assets/pbx-system.jpg';
import cablingImage from '@/assets/network-cabling.jpg';
import itImage from '@/assets/it-infrastructure.jpg';
import posShowcase from '@/assets/pos-systems-showcase.jpg';
import eocIpImage from '@/assets/eoc-ip-system.png';
import Autoplay from 'embla-carousel-autoplay';

const productValueProps = [
  "Fast Shipping",
  "3 Year Guarantee",
  "Secure Checkout"
];

const productShowcaseSlides = [
  {
    badge: "POS Solutions",
    title: "Network & POS Integration",
    description: "Integrate your POS system with CCTV using our POS Text Inserter. Display real-time transaction data on 4K camera footage for accurate monitoring and loss prevention.",
    image: posShowcase,
    features: [
      "POS system connectivity",
      "Fuel management integration",
      "Payment processing support"
    ]
  },
  {
    badge: "CCTV Solutions",
    title: "AI-Ready IP Surveillance",
    description: "High-resolution monitoring with on-device analytics, mobile access, and hybrid storage options.",
    image: heroTech3,
    features: [
      "4K low-light sensors",
      "Instant mobile alerts",
      "Hybrid NVR & cloud"
    ]
  },
  {
    badge: "IT Infrastructure",
    title: "Structured Cabling & Fiber",
    description: "Precision installed cabling that keeps your data, voice, and building systems performing at peak speed.",
    image: heroTech1,
    features: [
      "CAT6/CAT7 certified",
      "Up to 100G fiber",
      "Lifetime workmanship"
    ]
  },
  {
    badge: "Upgrade Solution",
    title: "VISIQON EOC-IP System",
    description: "Upgrade analog camera systems to IP surveillance without replacing legacy coaxial cables. Transmit PoE power and ethernet data over coax.",
    image: eocIpImage,
    features: [
      "ExPOE Technology",
      "Power over Coax",
      "Ethernet over Coax"
    ]
  }
];

const Index = () => {
  const services = [
    {
      title: "CCTV Surveillance Systems",
      description: "Advanced security solutions for comprehensive monitoring and protection.",
      icon: Shield,
      image: cctvImage,
      href: "/cctv-surveillance",
      features: [
        "Professional installation",
        "Equipment supply",
        "Staff training",
        "Support & maintenance warranty"
      ]
    },
    {
      title: "PBX Communication Systems",
      description: "Professional phone systems with VoIP integration for seamless communication.",
      icon: Phone,
      image: pbxImage,
      href: "/pbx-systems",
      features: [
        "Professional installation",
        "System supply & setup",
        "Comprehensive training",
        "Storage backup solutions"
      ]
    },
    {
      title: "Structured Network Cabling",
      description: "Professional CAT6/CAT7 installation for reliable data, voice, and video transmission.",
      icon: Network,
      image: cablingImage,
      href: "/network-cabling",
      features: [
        "Professional installation",
        "Quality supply",
        "Technical training",
        "System consultation"
      ]
    },
    {
      title: "IT Infrastructure & Custom PCs",
      description: "Complete IT solutions from custom builds to network diagnostics.",
      icon: Server,
      image: itImage,
      href: "/it-infrastructure",
      features: [
        "Equipment installation",
        "Hardware supply",
        "Training & support",
        "Maintenance warranty"
      ]
    }
  ];

  const industries = [
    { name: "Gas Stations & Convenience Stores", href: "/industries/gas-stations" },
    { name: "Restaurants & Food Service", href: "/industries/restaurants" },
    { name: "Hotels & Hospitality", href: "/industries/hotels" },
    { name: "Corporate Offices", href: "/industries/offices" }
  ];

  const [showcaseApi, setShowcaseApi] = useState<CarouselApi | null>(null);
  const [activeShowcase, setActiveShowcase] = useState(0);

  useEffect(() => {
    if (!showcaseApi) return;

    const handleSelect = () => {
      setActiveShowcase(showcaseApi.selectedScrollSnap());
    };

    handleSelect();
    showcaseApi.on('select', handleSelect);

    return () => {
      showcaseApi.off('select', handleSelect);
    };
  }, [showcaseApi]);

  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Header />

      {/* Hero Section */}
      <section className="pt-8 pb-20 lg:pt-12 lg:pb-28 bg-gradient-to-b from-background via-background to-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-contentSlideUp mb-8">
            <p className="text-sm uppercase tracking-[0.6em] text-red-muted mb-4">
              <SlideInText text="Premium Technology Solutions" delay={200} className="text-red" />
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-red-primary leading-tight">
              <TypewriterText
                text="MicroFast Tech"
                delay={100}
                speed={40}
                className="text-red-primary"
              />
            </h1>
          </div>

          <div className="mb-12 space-y-10">
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-[32px] border border-border/60 bg-white shadow-[0_40px_120px_rgba(15,23,42,0.14)] p-4 sm:p-8 overflow-hidden">
                <div className="absolute inset-x-8 top-0 h-24 bg-gradient-to-b from-red-primary/5 to-transparent pointer-events-none" />
                <div className="relative">
                  <Carousel
                    className="w-full"
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    plugins={[
                      Autoplay({
                        delay: 6000,
                      })
                    ]}
                    setApi={setShowcaseApi}
                  >
                    <CarouselContent className="-ml-2 sm:-ml-4">
                      {productShowcaseSlides.map((slide, index) => (
                        <CarouselItem key={slide.title} className="pl-2 sm:pl-4">
                          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
                            <div className="order-2 lg:order-1 space-y-6">
                              <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">{slide.badge}</p>
                              <div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-red-primary mb-3">{slide.title}</h3>
                                <p className="text-base text-muted-foreground leading-relaxed">{slide.description}</p>
                              </div>
                              <div className="flex flex-wrap gap-3">
                                {slide.features.map((feature) => (
                                  <span key={feature} className="inline-flex items-center gap-2 rounded-full border border-red-primary/30 bg-red-primary/5 px-4 py-1.5 text-sm font-medium text-red-dark">
                                    <CheckCircle className="h-4 w-4 text-red-primary" />
                                    {feature}
                                  </span>
                                ))}
                              </div>
                              <Button variant="secondary" className="w-full sm:w-auto px-8 btn-red-hover">
                                <Link to="/catalog" className="flex items-center space-x-2">
                                  <span className="text-red-primary">View Product Catalog</span>
                                  <ArrowRight className="h-4 w-4 text-red-primary" />
                                </Link>
                              </Button>
                            </div>

                            <div className="order-1 lg:order-2">
                              <div className="relative">
                                <div className="aspect-[5/3] sm:aspect-[16/9] rounded-[28px] overflow-hidden bg-gradient-to-br from-slate-50 to-slate-200 shadow-2xl">
                                  <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                    loading={index === 0 ? "eager" : "lazy"}
                                  />
                                </div>
                                <div className="absolute inset-4 rounded-[24px] border border-white/70 pointer-events-none" />
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-xl text-sm font-semibold text-muted-foreground uppercase tracking-[0.5em] hidden sm:block">
                                  {slide.badge}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    <CarouselPrevious className="hidden md:flex left-6 top-1/2 -translate-y-1/2 bg-white border border-border/60 text-red-primary hover:bg-red-primary hover:text-white shadow-xl" />
                    <CarouselNext className="hidden md:flex right-6 top-1/2 -translate-y-1/2 bg-white border border-border/60 text-red-primary hover:bg-red-primary hover:text-white shadow-xl" />
                  </Carousel>

                  <div className="mt-10 flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2">
                      {productShowcaseSlides.map((slide, index) => (
                        <button
                          key={slide.title}
                          onClick={() => showcaseApi?.scrollTo(index)}
                          className={`h-2 rounded-full transition-all duration-300 ${activeShowcase === index ? "w-12 bg-red-primary" : "w-6 bg-muted"}`}
                          aria-label={`Go to ${slide.title}`}
                        />
                      ))}
                    </div>
                    <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">
                      {String(activeShowcase + 1).padStart(2, '0')} / {String(productShowcaseSlides.length).padStart(2, '0')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center animate-contentSlideUp">
            <p className="text-xl lg:text-2xl text-muted-foreground font-bold mb-4">
              <FadeInText
                text="Surveillance • PBX • Structured Cabling • IT Systems"
                delay={800}
                className="text-muted-foreground"
              />
            </p>
            <p className="text-lg text-muted-foreground/90 mb-8 font-medium animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
              Secure your business, connect every device, and simplify communications with turnkey systems delivered, installed, and supported by MicroFast.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp mb-12" style={{ animationDelay: '1.6s' }}>
              <Button size="lg" variant="secondary" className="text-lg px-8 btn-red-hover">
                <Link to="/services" className="flex items-center space-x-2">
                  <span className="text-red-primary">Explore Services</span>
                  <ArrowRight className="h-5 w-5 text-red-primary" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm uppercase tracking-[0.5em] text-red-primary font-semibold text-center">
              {productValueProps.map((value) => (
                <span key={value} className="text-[0.7rem] sm:text-xs tracking-[0.3em] text-muted-foreground font-semibold">
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Our Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology services designed to secure, connect, and enhance
              your business operations with cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <StaggeredLoadingWrapper
                key={index}
                skeleton={<ServiceCardSkeleton />}
                delay={1200}
                staggerDelay={200}
                index={index}
              >
                <div className="card-hover-animation">
                  <ServiceCard {...service} />
                </div>
              </StaggeredLoadingWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trusted by businesses across various industries for reliable technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <StaggeredLoadingWrapper
                key={index}
                skeleton={<IndustryCardSkeleton />}
                delay={1800}
                staggerDelay={150}
                index={index}
              >
                <Link
                  to={industry.href}
                  className="flex items-center space-x-3 p-6 rounded-lg border border-border hover:bg-accent/50 hover:border-red-primary/50 transition-all duration-300 group cursor-pointer card-hover-animation gradient-border-red"
                >
                  <CheckCircle className="h-6 w-6 text-red-primary flex-shrink-0 group-hover:scale-110 transition-transform animate-bounceSlow" />
                  <span className="text-red-dark font-medium group-hover:text-red-primary transition-colors underline-animation-red">{industry.name}</span>
                  <ArrowRight className="h-4 w-4 text-red-muted group-hover:text-red-primary group-hover:translate-x-1 transition-all ml-auto" />
                </Link>
              </StaggeredLoadingWrapper>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light animate-fadeInUp">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 animate-zoomIn">
            Ready to Upgrade Your Technology?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Let our experts design and implement the perfect technology solution for your business needs.
          </p>
          <div className="flex justify-center animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" variant="secondary" className="text-lg px-8 btn-red-hover">
              <Link to="/contact" className="flex items-center space-x-2">
                <span className="text-red-primary">Contact Us Today</span>
                <ArrowRight className="h-5 w-5 text-red-primary" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
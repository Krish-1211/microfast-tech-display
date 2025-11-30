import { Link } from 'react-router-dom';
import { Shield, Phone, Network, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { LoadingWrapper, StaggeredLoadingWrapper } from '@/components/LoadingWrapper';
import { ServiceCardSkeleton } from '@/components/LoadingSkeletons';
import { TypewriterText, FadeInText } from '@/components/AnimatedText';
import cctvImage from '@/assets/cctv-system.jpg';
import pbxImage from '@/assets/pbx-system.jpg';
import cablingImage from '@/assets/network-cabling.jpg';
import itImage from '@/assets/it-infrastructure.jpg';

const Services = () => {
  const services = [
    {
      title: "CCTV Surveillance Systems",
      description: "Advanced security solutions for comprehensive monitoring and protection with state-of-the-art technology.",
      icon: Shield,
      image: cctvImage,
      href: "/cctv-surveillance",
      features: [
        "Professional installation",
        "Equipment supply",
        "Staff training",
        "Support & maintenance (warranty)",
        "Storage backup solutions",
        "System consultation"
      ]
    },
    {
      title: "PBX Communication Systems",
      description: "Professional phone systems with VoIP integration for seamless business communication.",
      icon: Phone,
      image: pbxImage,
      href: "/pbx-systems",
      features: [
        "Professional installation",
        "System supply & setup",
        "Comprehensive training",
        "Support & maintenance (warranty)",
        "Storage backup solutions",
        "System consultation"
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
        "Support & maintenance (warranty)",
        "Storage backup solutions",
        "System consultation"
      ]
    },
    {
      title: "IT Infrastructure & Custom PCs",
      description: "Complete IT solutions from custom builds to network diagnostics and infrastructure management.",
      icon: Server,
      image: itImage,
      href: "/it-infrastructure",
      features: [
        "Equipment installation",
        "Hardware supply",
        "Training & support",
        "Support & maintenance (warranty)",
        "Storage backup solutions",
        "System consultation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Professional Technology Services - MicroFast Tech"
        description="Comprehensive technology services including CCTV surveillance, PBX systems, network cabling, and IT infrastructure solutions for businesses."
      />
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-red-primary mb-6">
              Our Technology Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              Comprehensive technology solutions designed to secure, connect, and enhance 
              your business operations with cutting-edge professional services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <StaggeredLoadingWrapper
                  key={index}
                  skeleton={<ServiceCardSkeleton />}
                  delay={800}
                  staggerDelay={300}
                  index={index}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer border-2 hover:border-red-primary/20 card-red-hover-animation gradient-border-red">
                    <Link to={service.href}>
                      {/* Text above image */}
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <IconComponent className="h-8 w-8 text-red-primary animate-pulseSlow" />
                          <CardTitle className="text-xl text-red-dark">{service.title}</CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </CardHeader>

                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-primary/80 to-transparent" />
                      </div>
                      
                      <CardContent className="pt-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-red-dark mb-3">What We Offer:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <div className="h-1.5 w-1.5 bg-red-primary rounded-full flex-shrink-0 animate-pulseSlow" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="pt-4">
                            <Button variant="outline" className="w-full bg-white border-red-primary/50 text-red-primary hover:bg-red-primary/10 group-hover:!bg-red-primary group-hover:!text-white group-hover:!border-red-primary transition-all" asChild>
                              <Link to="/contact">Contact Us</Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                </StaggeredLoadingWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light animate-fadeInUp">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 animate-zoomIn">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Our experts can design and implement the perfect technology solution tailored to your specific business needs.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 btn-red-hover animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact" className="text-red-primary">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
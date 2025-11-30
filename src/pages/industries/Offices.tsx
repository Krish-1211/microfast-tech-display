import { Link } from 'react-router-dom';
import { Building2, Shield, Phone, Network, Server, CheckCircle, Users, VideoIcon, Briefcase, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { LoadingWrapper, StaggeredLoadingWrapper } from '@/components/LoadingWrapper';
import { ServiceCardSkeleton, HeroSkeleton } from '@/components/LoadingSkeletons';
import { TypewriterText, FadeInText } from '@/components/AnimatedText';
import officesImage from '@/assets/industry-offices.jpg';

const Offices = () => {
  const services = [
    {
      icon: Shield,
      title: "Office Security Systems",
      description: "Professional surveillance and access control for corporate environments.",
      features: [
        "Reception area monitoring",
        "Conference room security",
        "Entry point surveillance",
        "Parking lot coverage",
        "After-hours protection",
        "Access control integration"
      ]
    },
    {
      icon: Phone,
      title: "Business Communication",
      description: "Advanced PBX systems designed for professional office environments.",
      features: [
        "Multi-line phone systems",
        "Conference call capabilities",
        "Voicemail management",
        "Call forwarding options",
        "Directory services",
        "Mobile integration"
      ]
    },
    {
      icon: Network,
      title: "Office Network Infrastructure",
      description: "High-performance networking solutions for modern office productivity.",
      features: [
        "Workstation connectivity",
        "Conference room networks",
        "Guest WiFi systems",
        "Server room cabling",
        "Wireless access points",
        "Cloud service integration"
      ]
    },
    {
      icon: Server,
      title: "Corporate IT Systems",
      description: "Complete IT infrastructure supporting business operations and growth.",
      features: [
        "Server installation & management",
        "Workstation deployment",
        "Data backup solutions",
        "Network security systems",
        "Remote access capabilities",
        "24/7 monitoring & support"
      ]
    }
  ];

  const officeTypes = [
    {
      type: "Corporate Headquarters",
      description: "Enterprise-level solutions for large corporate environments.",
      features: [
        "Executive floor security",
        "Boardroom AV systems",
        "Multi-floor networking",
        "Enterprise phone systems",
        "Visitor management integration"
      ]
    },
    {
      type: "Small to Medium Business",
      description: "Cost-effective solutions scaled for growing businesses.",
      features: [
        "Essential security coverage",
        "VoIP phone systems",
        "Basic networking setup",
        "Small business IT support",
        "Scalable infrastructure"
      ]
    },
    {
      type: "Co-working Spaces",
      description: "Flexible solutions for shared office environments.",
      features: [
        "Common area monitoring",
        "Individual office connectivity",
        "Shared resource management",
        "Visitor access systems",
        "Multi-tenant support"
      ]
    },
    {
      type: "Professional Services",
      description: "Specialized solutions for law firms, accounting, and consulting offices.",
      features: [
        "Client confidentiality protection",
        "Secure document handling",
        "Professional communication tools",
        "Compliance monitoring",
        "Data security measures"
      ]
    }
  ];

  const businessBenefits = [
    {
      icon: Users,
      title: "Enhanced Productivity",
      description: "Reliable technology infrastructure that keeps your team connected and efficient.",
      impact: "25% productivity increase"
    },
    {
      icon: Shield,
      title: "Improved Security",
      description: "Comprehensive protection for your people, property, and intellectual assets.",
      impact: "99% security coverage"
    },
    {
      icon: Briefcase,
      title: "Professional Image",
      description: "Modern technology systems that enhance your company's professional reputation.",
      impact: "Client confidence boost"
    },
    {
      icon: Clock,
      title: "Reduced Downtime",
      description: "Reliable systems with proactive monitoring to minimize business interruptions.",
      impact: "99.5% system uptime"
    }
  ];

  const features = [
    {
      category: "Security Features",
      items: [
        "HD surveillance cameras",
        "Access control systems",
        "Visitor management",
        "Perimeter monitoring",
        "Emergency response integration"
      ]
    },
    {
      category: "Communication Features",
      items: [
        "Auto-attendant systems",
        "Conference bridge capabilities",
        "Call recording & analytics",
        "Mobile app integration",
        "Unified communications"
      ]
    },
    {
      category: "Network Features",
      items: [
        "Gigabit ethernet connectivity",
        "Wireless coverage optimization",
        "Guest network isolation",
        "Quality of Service (QoS)",
        "Network redundancy"
      ]
    },
    {
      category: "IT Features",
      items: [
        "Cloud backup solutions",
        "Remote monitoring tools",
        "Cybersecurity protection",
        "Hardware lifecycle management",
        "Help desk support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Office Technology Solutions - Security, Communication & IT Systems"
        description="Professional technology solutions for corporate offices. CCTV surveillance, PBX systems, network infrastructure, and IT support for business environments."
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden animate-slideInFromLeft">
        <div className="absolute inset-0">
          <img
            src={officesImage}
            alt="Office Technology Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary-light/70" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <LoadingWrapper skeleton={<HeroSkeleton />} delay={300}>
              <div className="flex items-center space-x-3 mb-6 animate-fadeIn">
                <Building2 className="h-12 w-12 text-white animate-pulse" />
                <TypewriterText
                  text="Office Technology Solutions"
                  className="text-4xl lg:text-6xl font-bold text-white leading-tight"
                  delay={100}
                />
              </div>
              <FadeInText
                text="Professional technology infrastructure for modern business environments"
                className="text-xl lg:text-2xl text-white mb-8 animate-fadeInUp"
                delay={1000}
              />
            </LoadingWrapper>
            <br></br>
            <p className="text-xl lg:text-2xl text-white mb-8 animate-fadeInUp" style={{ animationDelay: '1s' }}>
              From small businesses to corporate headquarters, we provide integrated security,
              communication, and IT solutions that enhance productivity and protect your operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 btn-red-hover" asChild>
                <Link to="/contact" className="text-red-primary">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-red-primary transition-all duration-300" asChild>
                <Link to="/view-demo">View Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Office Technology Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to support modern business operations and professional environments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <StaggeredLoadingWrapper
                key={index}
                skeleton={<ServiceCardSkeleton />}
                delay={600}
                staggerDelay={200}
                index={index}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group card-red-hover-animation gradient-border-red">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-red-primary mb-4 group-hover:animate-pulse transition-colors" />
                    <CardTitle className="text-2xl text-red-dark group-hover:text-red-primary">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-red-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
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

      {/* Business Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Business Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform your office operations with measurable improvements in productivity and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessBenefits.map((benefit, index) => (
              <Card key={index} className="text-center h-full hover:shadow-lg transition-shadow card-red-hover-animation gradient-border-red">
                <CardContent className="pt-8">
                  <benefit.icon className="h-12 w-12 text-red-primary mx-auto mb-4 animate-bounceSlow" />
                  <h3 className="text-xl font-bold text-red-dark mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <div className="text-lg font-bold text-red-primary">{benefit.impact}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Types */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Solutions by Office Type
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Customized technology packages designed for different office environments and business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {officeTypes.map((office, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow card-red-hover-animation gradient-border-red">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-primary underline-animation-red">{office.type}</CardTitle>
                  <CardDescription className="text-base">
                    {office.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {office.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-primary rounded-full animate-pulseSlow" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Complete Feature Set
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology features across all business-critical systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((category, index) => (
              <Card key={index} className="h-full card-red-hover-animation gradient-border-red">
                <CardHeader>
                  <CardTitle className="text-lg text-red-primary">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-red-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Transform Your Office Technology
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Get a comprehensive technology solution that enhances productivity, security,
            and professional operations for your office environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 btn-red-hover" asChild>
              <Link to="/contact" className="text-red-primary">Contact Us</Link>
            </Button>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offices;
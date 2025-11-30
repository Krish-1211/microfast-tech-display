import { Link } from 'react-router-dom';
import { Home, Shield, Phone, Network, Server, CheckCircle, Users, Heart, Lock, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { LoadingWrapper, StaggeredLoadingWrapper } from '@/components/LoadingWrapper';
import { ServiceCardSkeleton, HeroSkeleton } from '@/components/LoadingSkeletons';
import { TypewriterText, FadeInText } from '@/components/AnimatedText';
import homesImage from '@/assets/industry-homes.jpg';

const Homes = () => {
  const services = [
    {
      icon: Shield,
      title: "Home Security Systems",
      description: "Comprehensive residential surveillance and security solutions for peace of mind.",
      features: [
        "Indoor and outdoor cameras",
        "Motion detection alerts",
        "Smart doorbell integration",
        "24/7 remote monitoring",
        "Mobile app access",
        "Cloud storage backup"
      ]
    },
    {
      icon: Phone,
      title: "Home Communication",
      description: "Modern communication solutions for connected homes and families.",
      features: [
        "Home phone systems",
        "Intercom solutions",
        "Smart home integration",
        "Voice over IP (VoIP)",
        "Multi-room communication",
        "Emergency contact systems"
      ]
    },
    {
      icon: Network,
      title: "Home Network Infrastructure",
      description: "High-speed networking for smart homes and remote work requirements.",
      features: [
        "Whole-home WiFi coverage",
        "Gigabit internet connectivity",
        "Smart device integration",
        "Guest network separation",
        "Home office networking",
        "Streaming optimization"
      ]
    },
    {
      icon: Server,
      title: "Smart Home IT Solutions",
      description: "Complete IT infrastructure for modern connected living.",
      features: [
        "Home automation systems",
        "Media server setup",
        "Data backup solutions",
        "Network security",
        "Remote access capabilities",
        "Technical support"
      ]
    }
  ];

  const homeTypes = [
    {
      type: "Single Family Homes",
      description: "Comprehensive solutions for standalone residential properties.",
      features: [
        "Perimeter security monitoring",
        "Garage and entry coverage",
        "Backyard surveillance",
        "Whole-home networking",
        "Smart home integration"
      ]
    },
    {
      type: "Condominiums & Townhomes",
      description: "Space-efficient solutions for connected living communities.",
      features: [
        "Compact security systems",
        "Balcony and patio coverage",
        "Building network integration",
        "Visitor management",
        "Community system compatibility"
      ]
    },
    {
      type: "Luxury Estates",
      description: "Premium technology solutions for high-end residential properties.",
      features: [
        "Extensive property coverage",
        "Advanced automation systems",
        "Multi-zone monitoring",
        "Professional installation",
        "Concierge-level support"
      ]
    },
    {
      type: "Home Offices",
      description: "Professional-grade solutions for remote work environments.",
      features: [
        "Dedicated office security",
        "Business-class networking",
        "Video conferencing setup",
        "Professional communication tools",
        "Reliable internet backup"
      ]
    }
  ];

  const familyBenefits = [
    {
      icon: Heart,
      title: "Family Safety",
      description: "Protect your loved ones with comprehensive security monitoring and alerts.",
      value: "24/7 protection"
    },
    {
      icon: Lock,
      title: "Property Protection",
      description: "Safeguard your home and belongings with advanced surveillance technology.",
      value: "Complete coverage"
    },
    {
      icon: Smartphone,
      title: "Remote Access",
      description: "Stay connected to your home from anywhere with mobile app control.",
      value: "Always connected"
    },
    {
      icon: Users,
      title: "Peace of Mind",
      description: "Enjoy worry-free living with reliable, professional security systems.",
      value: "Stress-free living"
    }
  ];

  const smartFeatures = [
    {
      category: "Security Features",
      items: [
        "Motion-activated recording",
        "Night vision cameras",
        "Smart doorbell cameras", 
        "Window and door sensors",
        "Professional monitoring"
      ]
    },
    {
      category: "Smart Home Integration",
      items: [
        "Voice control compatibility",
        "Smart lighting integration",
        "Thermostat connectivity",
        "Lock automation",
        "Scene-based control"
      ]
    },
    {
      category: "Network Features",
      items: [
        "Mesh WiFi systems",
        "Parental controls",
        "Device prioritization",
        "Guest network access",
        "Bandwidth management"
      ]
    },
    {
      category: "Mobile Features",
      items: [
        "Live video streaming",
        "Push notifications",
        "Two-way audio",
        "Cloud video storage",
        "Family sharing access"
      ]
    }
  ];

  const packages = [
    {
      name: "Essential Home",
      price: "$899",
      description: "Basic security and networking for starter homes.",
      includes: ["4 security cameras", "Basic WiFi setup", "Mobile app access", "1-year warranty"]
    },
    {
      name: "Connected Home",
      price: "$1,799",
      description: "Comprehensive smart home integration package.",
      includes: ["8 security cameras", "Whole-home WiFi", "Smart home integration", "Professional monitoring"]
    },
    {
      name: "Premium Estate",
      price: "$3,499",
      description: "Complete luxury home technology solution.",
      includes: ["16+ security cameras", "Advanced automation", "Professional installation", "24/7 support"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Residential Home Technology Solutions - Smart Security & Networking"
        description="Smart home technology solutions for residential properties. Home security systems, networking, smart home integration, and professional support services."
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden animate-slideInFromLeft">
        <div className="absolute inset-0">
          <img 
            src={homesImage} 
            alt="Home Technology Solutions" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary-light/70" />
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <LoadingWrapper skeleton={<HeroSkeleton />} delay={300}>
              <div className="flex items-center space-x-3 mb-6 animate-fadeIn">
                <Home className="h-12 w-12 text-white animate-pulse" />
                <TypewriterText 
                  text="Residential Home Solutions"
                  className="text-4xl lg:text-6xl font-bold text-white leading-tight"
                  delay={500}
                />
              </div>
              <FadeInText 
                text="Smart security and technology solutions for modern homes and families"
                className="text-xl lg:text-2xl text-red-100 mb-8"
                delay={1000}
              />
            </LoadingWrapper>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Protect your family and enhance your lifestyle with comprehensive home security, 
              networking, and smart home integration designed for residential living.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link to="/contact">Get Home Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/services">View Home Packages</Link>
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
              Residential Technology Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed specifically for home environments and family needs.
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

      {/* Family Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Family Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the comfort and security that comes with professional home technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {familyBenefits.map((benefit, index) => (
              <StaggeredLoadingWrapper 
                key={index} 
                skeleton={<ServiceCardSkeleton />}
                delay={800}
                staggerDelay={150}
                index={index}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 hover:scale-105 group card-red-hover-animation gradient-border-red">
                  <CardContent className="pt-8">
                    <benefit.icon className="h-12 w-12 text-red-primary mx-auto mb-4 group-hover:animate-pulse animate-bounceSlow" />
                    <h3 className="text-xl font-bold mb-3 text-red-dark">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4">{benefit.description}</p>
                    <div className="text-lg font-bold text-red-primary">{benefit.value}</div>
                  </CardContent>
                </Card>
              </StaggeredLoadingWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Home Packages */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Home Technology Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the right package for your home size and technology needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <StaggeredLoadingWrapper 
                key={index} 
                skeleton={<ServiceCardSkeleton />}
                delay={1000}
                staggerDelay={200}
                index={index}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group card-red-hover-animation gradient-border-red">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-red-primary">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-red-dark">{pkg.price}</div>
                    <CardDescription className="text-base">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {pkg.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-red-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                      ))}
                    </ul>
                    <Button className="w-full group-hover:bg-red-600 transition-colors" variant="outline" asChild>
                      <Link to="/contact">Learn More & Get Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggeredLoadingWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Home Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Solutions by Home Type
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Customized technology solutions designed for different residential property types.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {homeTypes.map((home, index) => (
              <StaggeredLoadingWrapper 
                key={index} 
                skeleton={<ServiceCardSkeleton />}
                delay={1200}
                staggerDelay={250}
                index={index}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group card-red-hover-animation gradient-border-red">
                  <CardHeader>
                    <CardTitle className="text-2xl text-red-primary underline-animation-red">{home.type}</CardTitle>
                    <CardDescription className="text-base">
                      {home.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {home.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-primary rounded-full animate-pulseSlow" />
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

      {/* Smart Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Smart Home Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Advanced features that make your home more secure, connected, and convenient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {smartFeatures.map((category, index) => (
              <StaggeredLoadingWrapper 
                key={index} 
                skeleton={<ServiceCardSkeleton />}
                delay={1400}
                staggerDelay={150}
                index={index}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] card-red-hover-animation gradient-border-red">
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
              </StaggeredLoadingWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <LoadingWrapper skeleton={<ServiceCardSkeleton />} delay={1600}>
            <div className="max-w-4xl mx-auto animate-fadeIn">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-red-700 mb-4">Happy Family</h3>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                      The Johnson Family - Complete Smart Home Setup
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">12</div>
                      <p className="text-muted-foreground">Security Cameras</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                      <p className="text-muted-foreground">WiFi Coverage</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                      <p className="text-muted-foreground">Peace of Mind</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground text-center">
                    "MicroFast Tech transformed our home into a smart, secure haven. The kids love the technology, 
                    and we love the peace of mind. We can monitor everything from our phones and feel completely 
                    secure whether we're home or away."
                  </p>
                  <p className="text-center text-red-600 font-medium mt-4">
                    - The Johnson Family, Homeowners
                  </p>
                </CardContent>
              </Card>
            </div>
          </LoadingWrapper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4 text-center">
          <LoadingWrapper skeleton={<HeroSkeleton />} delay={1800}>
            <div className="animate-fadeIn">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Transform Your Home Today
              </h2>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                Get professional home technology solutions that enhance security, connectivity, and peace of mind for your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 hover:scale-105 transition-transform" asChild>
                  <Link to="/contact">Schedule Assessment</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all" asChild>
                  <Link to="/services">Call: +1 (555) 123-4567</Link>
                </Button>
              </div>
            </div>
          </LoadingWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homes;
import { Link } from 'react-router-dom';
import { Hotel, Shield, Phone, Network, Server, CheckCircle, Users, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { LoadingWrapper, StaggeredLoadingWrapper } from '@/components/LoadingWrapper';
import { ServiceCardSkeleton, HeroSkeleton } from '@/components/LoadingSkeletons';
import { TypewriterText, FadeInText } from '@/components/AnimatedText';
import hotelsImage from '@/assets/industry-hotels.jpg';

const Hotels = () => {
  const services = [
    {
      icon: Shield,
      title: "CCTV Surveillance",
      description: "Comprehensive security coverage for guest safety and property protection.",
      features: [
        "Lobby and reception monitoring",
        "Hallway and corridor surveillance",
        "Parking area security",
        "Pool and amenity coverage",
        "Back-of-house monitoring",
        "24/7 recording and alerts"
      ]
    },
    {
      icon: Phone,
      title: "PBX Hotel Systems",
      description: "Advanced communication solutions designed specifically for hospitality.",
      features: [
        "Guest room phone systems",
        "Front desk call management",
        "Housekeeping communication",
        "Wake-up call automation",
        "Conference room connectivity",
        "Multi-language support"
      ]
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "High-speed connectivity throughout your entire hotel property.",
      features: [
        "Guest WiFi networks",
        "Business center connectivity",
        "POS system integration",
        "Smart room technology",
        "Conference room networks",
        "Property-wide coverage"
      ]
    },
    {
      icon: Server,
      title: "IT Management",
      description: "Complete IT solutions to support all hotel operations and guest services.",
      features: [
        "Property management systems",
        "Reservation system support",
        "Guest data security",
        "Staff workstations",
        "Server maintenance",
        "24/7 technical support"
      ]
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: "Enhanced Guest Experience",
      description: "Reliable communication and connectivity systems that improve guest satisfaction.",
      metrics: "98% guest satisfaction"
    },
    {
      icon: Shield,
      title: "Comprehensive Security",
      description: "Advanced surveillance systems that protect guests, staff, and property.",
      metrics: "24/7 monitoring"
    },
    {
      icon: Users,
      title: "Operational Efficiency",
      description: "Streamlined communication systems that improve staff coordination.",
      metrics: "40% faster response"
    },
    {
      icon: Clock,
      title: "Reduced Downtime",
      description: "Reliable IT infrastructure with proactive monitoring and maintenance.",
      metrics: "99.9% uptime"
    }
  ];

  const hotelTypes = [
    {
      type: "Luxury Hotels",
      description: "Premium technology solutions for high-end hospitality experiences.",
      solutions: [
        "4K security camera systems",
        "Integrated guest services",
        "High-speed fiber connectivity",
        "Smart room automation",
        "Concierge communication systems"
      ]
    },
    {
      type: "Business Hotels",
      description: "Professional-grade systems for corporate travelers and events.",
      solutions: [
        "Conference room AV systems",
        "Business center IT support",
        "Meeting room connectivity",
        "Executive floor security",
        "Corporate communication tools"
      ]
    },
    {
      type: "Boutique Hotels",
      description: "Customized technology solutions that maintain unique character.",
      solutions: [
        "Discrete security systems",
        "Personalized guest services",
        "Flexible network design",
        "Custom communication flows",
        "Aesthetic integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Hotel Technology Solutions - CCTV, PBX, Network & IT Systems"
        description="Comprehensive technology solutions for hotels and hospitality. Professional CCTV surveillance, PBX systems, network infrastructure, and IT management services."
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden animate-slideInFromLeft">
        <div className="absolute inset-0">
          <img
            src={hotelsImage}
            alt="Hotel Technology Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary-light/70" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <LoadingWrapper skeleton={<HeroSkeleton />} delay={300}>
              <div className="flex items-center space-x-3 mb-6 animate-fadeIn">
                <Hotel className="h-12 w-12 text-white animate-pulse" />
                <TypewriterText
                  text="Hotels & Hospitality Solutions"
                  className="text-4xl lg:text-6xl font-bold text-white leading-tight"
                  delay={100}
                />
              </div>
              <FadeInText
                text="Comprehensive technology solutions designed specifically for the hospitality industry"
                className="text-xl lg:text-2xl text-white mb-8 animate-fadeInUp"
                delay={1000}
              />
            </LoadingWrapper>
            <br></br>
            <p className="text-xl lg:text-2xl text-white mb-8 animate-fadeInUp" style={{ animationDelay: '1s' }}>
              From luxury resorts to boutique hotels, we provide integrated security, communication,
              and IT solutions that enhance guest experience while improving operational efficiency.
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
              Hotel Technology Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized technology solutions that address the unique challenges and requirements of the hospitality industry.
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Hospitality Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Measurable improvements in guest satisfaction, security, and operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center h-full hover:shadow-lg transition-shadow card-red-hover-animation gradient-border-red">
                <CardContent className="pt-8">
                  <benefit.icon className="h-12 w-12 text-red-primary mx-auto mb-4 animate-bounceSlow" />
                  <h3 className="text-xl font-bold text-red-dark mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <div className="text-2xl font-bold text-red-primary">{benefit.metrics}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Types Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Solutions by Hotel Type
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Customized technology packages designed for different types of hospitality properties.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hotelTypes.map((hotel, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow card-red-hover-animation gradient-border-red">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-primary underline-animation-red">{hotel.type}</CardTitle>
                  <CardDescription className="text-base">
                    {hotel.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {hotel.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{solution}</span>
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
            Ready to Upgrade Your Hotel Technology?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Get a customized technology assessment for your hospitality property. Our experts will design
            solutions that enhance guest experience and improve operations.
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

export default Hotels;
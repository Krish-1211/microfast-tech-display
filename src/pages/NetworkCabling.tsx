import { Link } from 'react-router-dom';
import { Network, Cable, Zap, Shield, Wrench, CheckCircle, Building2, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { LoadingWrapper, StaggeredLoadingWrapper } from '@/components/LoadingWrapper';
import { ServiceCardSkeleton } from '@/components/LoadingSkeletons';
import { TypewriterText, FadeInText } from '@/components/AnimatedText';
import cablingImage from '@/assets/network-cabling.jpg';

const NetworkCabling = () => {
  const services = [
    {
      icon: Cable,
      title: "CAT6 & CAT7 Installation",
      description: "High-performance structured cabling for current and future networking needs."
    },
    {
      icon: Zap,
      title: "Fiber Optic Solutions",
      description: "Ultra-fast fiber optic cabling for high-bandwidth applications and long distances."
    },
    {
      icon: Shield,
      title: "Cable Management",
      description: "Professional cable organization systems for clean, maintainable installations."
    },
    {
      icon: Wrench,
      title: "Testing & Certification",
      description: "Comprehensive testing to ensure optimal performance and industry compliance."
    },
    {
      icon: Network,
      title: "Network Design",
      description: "Custom network topology design optimized for your specific requirements."
    },
    {
      icon: Wifi,
      title: "Wireless Integration",
      description: "Seamless integration of wireless access points with wired infrastructure."
    }
  ];

  const cableTypes = [
    {
      type: "CAT6",
      speed: "10 Gbps",
      distance: "55m",
      applications: ["Office networks", "VoIP systems", "IP cameras"],
      description: "Reliable performance for most business applications with excellent interference resistance."
    },
    {
      type: "CAT6A",
      speed: "10 Gbps",
      distance: "100m",
      applications: ["Data centers", "High-density networks", "Server connections"],
      description: "Enhanced performance with reduced crosstalk for demanding environments."
    },
    {
      type: "CAT7",
      speed: "40 Gbps",
      distance: "100m",
      applications: ["Future-proofing", "Ultra-high bandwidth", "Mission-critical systems"],
      description: "Maximum performance and shielding for the most demanding applications."
    },
    {
      type: "Fiber Optic",
      speed: "100+ Gbps",
      distance: "40km+",
      applications: ["Long distances", "High bandwidth", "Electromagnetic immunity"],
      description: "Ultimate performance for high-speed, long-distance, and interference-free connections."
    }
  ];

  const industries = [
    {
      title: "Corporate Offices",
      icon: Building2,
      description: "Professional cabling solutions for modern workplace environments.",
      features: [
        "Workstation connectivity",
        "Conference room infrastructure",
        "Server room cabling",
        "Wireless access point connections",
        "Voice and data integration"
      ]
    },
    {
      title: "Hotels & Hospitality",
      icon: Building2,
      description: "Comprehensive cabling for guest services and operational systems.",
      features: [
        "Guest room connectivity",
        "Public area WiFi infrastructure",
        "POS system connections",
        "Security system integration",
        "Entertainment system cabling"
      ]
    },
    {
      title: "Warehouses & Industrial",
      icon: Wifi,
      description: "Robust cabling solutions for challenging industrial environments.",
      features: [
        "Inventory management systems",
        "Security and surveillance",
        "Environmental monitoring",
        "Equipment connectivity",
        "Harsh environment protection"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Network Cabling Services - Professional CAT6/CAT7 Installation"
        description="Professional structured network cabling with CAT6/CAT7 installation. Expert cable management, testing, and certification for reliable data transmission."
      />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated Tech Grid Background */}
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
            src={cablingImage}
            alt="Network Cabling Installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary-light/70 animate-gradientSweep"
            style={{ backgroundSize: '200% 100%' }} />
        </div>

        <div className="relative container mx-auto px-4 animate-contentSlideUp">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <Network className="h-12 w-12 text-white" />
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                <TypewriterText
                  text="Structured Network Cabling"
                  delay={100}
                  speed={30}
                  className="text-white"
                />
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-white mb-8 animate-fadeInUp" style={{ animationDelay: '1s' }}>
              Professional CAT6/CAT7 installation for reliable data, voice, and video transmission
            </p>
            <p className="text-xl lg:text-2xl text-white mb-8 animate-fadeInUp" style={{ animationDelay: '1s' }}>
              Build a future-ready network foundation with our expert structured cabling services,
              featuring high-performance cables and professional installation standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 btn-red-hover" asChild>
                <Link to="/contact" className="text-red-primary">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Complete Cabling Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From design to installation, we provide comprehensive structured cabling solutions
              that meet industry standards and your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow card-red-hover-animation gradient-border-red">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-red-primary mb-4 animate-bounceSlow" />
                  <CardTitle className="text-xl text-red-dark">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cable Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Cable Types & Performance
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the right cable type for your specific performance and distance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cableTypes.map((cable, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-2xl text-primary">{cable.type}</CardTitle>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Max Speed</div>
                      <div className="text-lg font-bold text-foreground">{cable.speed}</div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Distance: {cable.distance}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{cable.description}</p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Common Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cable.applications.map((app, appIndex) => (
                        <span key={appIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Industry Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tailored cabling solutions designed for the unique needs of different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-6">
                  {industry.icon && <industry.icon className="h-16 w-16 text-primary mx-auto mb-4" />}
                  <CardTitle className="text-2xl text-primary">{industry.title}</CardTitle>
                  <CardDescription className="text-base">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Installation Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional installation following industry best practices and standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Site Survey</h3>
              <p className="text-muted-foreground text-sm">Comprehensive assessment of your facility and requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Design & Planning</h3>
              <p className="text-muted-foreground text-sm">Custom network design optimized for your needs</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Professional Installation</h3>
              <p className="text-muted-foreground text-sm">Expert installation with clean cable management</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Testing & Certification</h3>
              <p className="text-muted-foreground text-sm">Complete testing and performance certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Build Your Network Foundation
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Get professional structured cabling that supports your current needs and future growth.
          </p>
          <div className="flex justify-center">
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

export default NetworkCabling;
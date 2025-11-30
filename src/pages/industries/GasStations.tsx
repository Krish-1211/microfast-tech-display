import { Shield, Camera, Server, Network, CheckCircle, Phone, ArrowRight, Fuel, DollarSign, Users, Clock, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { LoadingWrapper, StaggeredLoadingWrapper } from '@/components/LoadingWrapper';
import { ServiceCardSkeleton, HeroSkeleton } from '@/components/LoadingSkeletons';
import { TypewriterText, FadeInText } from '@/components/AnimatedText';
import retailImage from '@/assets/industry-retail.jpg';

const GasStations = () => {
  const services = [
    {
      icon: Shield,
      title: "Security & Surveillance Systems",
      description: "Comprehensive surveillance to protect fuel dispensers, store areas, and perimeter.",
      features: [
        "Fuel dispenser monitoring",
        "Convenience store coverage",
        "Cash register surveillance",
        "Storage area security",
        "Perimeter protection",
        "After-hours monitoring"
      ]
    },
    {
      icon: Phone,
      title: "Communication Systems",
      description: "Efficient communication solutions for gas station operations.",
      features: [
        "Intercom systems",
        "Emergency phones",
        "Manager paging",
        "Drive-off prevention",
        "Customer service lines",
        "Multi-site coordination"
      ]
    },
    {
      icon: Network,
      title: "Network & POS Integration",
      description: "Integrate your POS system with CCTV using our POS Text Inserter. Display real-time transaction data on 4K camera footage for accurate monitoring and loss prevention.",
      features: [
        "POS system connectivity",
        "Fuel management integration",
        "Payment processing support",
        "Loyalty program systems",
        "Inventory management",
        "Cloud-based operations"
      ],
      learnMore: "/pos-integration"
    },
    {
      icon: Server,
      title: "IT Infrastructure",
      description: "Complete IT solutions to support modern gas station operations.",
      features: [
        "POS workstations",
        "Fuel monitoring systems",
        "Environmental compliance",
        "Pump control systems",
        "Backup and security",
        "24/7 system monitoring"
      ]
    }
  ];

  const challenges = [
    {
      icon: DollarSign,
      title: "Loss Prevention & Security",
      description: "Prevent drive-offs, reduce theft, and protect cash handling with comprehensive surveillance.",
      solution: "Strategic camera placement at pumps, registers, and high-risk areas with real-time monitoring."
    },
    {
      icon: AlertCircle,
      title: "Compliance & Safety",
      description: "Meet regulatory requirements and ensure customer and employee safety.",
      solution: "Integrated safety systems with environmental monitoring and emergency communication."
    }
  ];

  const stationTypes = [
    {
      type: "High-Volume Stations",
      description: "Technology solutions for busy fuel stations with convenience stores.",
      solutions: [
        "Multi-pump surveillance",
        "High-traffic POS systems",
        "Queue management",
        "Advanced fuel monitoring",
        "Integrated car wash systems"
      ]
    },
    {
      type: "Truck Stops",
      description: "Specialized systems for large-scale truck stop operations.",
      solutions: [
        "Wide-area surveillance",
        "Diesel exhaust fluid monitoring",
        "Fleet card integration",
        "Restaurant POS systems",
        "Parking lot security"
      ]
    },
    {
      type: "Chain Stations",
      description: "Standardized solutions that scale across multiple locations.",
      solutions: [
        "Centralized monitoring",
        "Multi-location management",
        "Standardized POS systems",
        "Corporate reporting",
        "Performance analytics"
      ]
    }
  ];

  const benefits = [
    { metric: "40%", description: "Reduction in drive-offs and theft" },
    { metric: "30%", description: "Faster transaction processing" },
    { metric: "35%", description: "Improved operational efficiency" },
    { metric: "99%", description: "System uptime reliability" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Gas Station Technology Solutions - CCTV, POS, Communication Systems"
        description="Professional technology solutions for gas stations and convenience stores. CCTV surveillance, POS system cabling, communication systems, and IT infrastructure. Enhanced security and operational efficiency."
        keywords="gas station CCTV, fuel station security, convenience store technology, POS system cabling, gas station surveillance, fuel management systems"
      />

      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden animate-slideInFromLeft">
        <div className="absolute inset-0">
          <img
            src={retailImage}
            alt="Gas Station Technology Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary-light/70" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <LoadingWrapper skeleton={<HeroSkeleton />} delay={300}>
              <div className="flex items-center space-x-3 mb-6 animate-fadeIn">
                <Fuel className="h-12 w-12 text-white animate-pulse" />
                <TypewriterText
                  text="Gas Station & Convenience Store Solutions"
                  className="text-4xl lg:text-6xl font-bold text-white leading-tight"
                  delay={100}
                />
              </div>
              <FadeInText
                text="Comprehensive technology infrastructure for fuel stations and convenience stores"
                className="text-xl lg:text-2xl text-white mb-8 animate-fadeInUp"
                delay={1000}
              />
            </LoadingWrapper>
            <br></br>
            <p className="text-xl lg:text-2xl text-white mb-8 animate-fadeInUp" style={{ animationDelay: '1s' }}>
              From high-volume stations to truck stops, we provide integrated security, communication,
              and IT solutions that enhance operations, prevent loss, and ensure compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8" onClick={() => window.location.href = '/contact'}>
                Contact Us
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
              Gas Station Technology Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized solutions that address the unique operational needs and challenges of fuel stations and convenience stores.
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
                    {service.learnMore && (
                      <div className="mt-6">
                        <Button variant="outline" className="w-full btn-red-hover" asChild>
                          <Link to={service.learnMore} className="flex items-center justify-center space-x-2">
                            <span>Learn More</span>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </StaggeredLoadingWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Gas Station Challenges We Solve
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Address common fuel station pain points with targeted technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow card-red-hover-animation gradient-border-red">
                <CardHeader>
                  <challenge.icon className="h-12 w-12 text-red-primary mb-4 animate-bounceSlow" />
                  <CardTitle className="text-2xl text-red-primary">{challenge.title}</CardTitle>
                  <CardDescription className="text-base">
                    {challenge.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-red-primary/5 p-4 rounded-lg border-l-4 border-red-primary">
                    <h4 className="font-semibold text-red-dark mb-2">Our Solution:</h4>
                    <p className="text-muted-foreground">{challenge.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Statistics */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-light/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Proven Gas Station Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Measurable improvements in security, efficiency, and profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-red-primary mb-2">{benefit.metric}</div>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Station Types Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Solutions by Station Type
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Customized technology packages for different gas station formats and service styles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stationTypes.map((station, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow card-red-hover-animation gradient-border-red">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-primary underline-animation-red">{station.type}</CardTitle>
                  <CardDescription className="text-base">
                    {station.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {station.solutions.map((solution, solutionIndex) => (
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
            Ready to Improve Your Gas Station Operations?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Get a customized technology solution that reduces loss, improves efficiency,
            and ensures compliance with safety regulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" onClick={() => window.location.href = '/contact'}>
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20" onClick={() => window.location.href = 'tel:2295517613'}>
              Call: 229 551 7613
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GasStations;
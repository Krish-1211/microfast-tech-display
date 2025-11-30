import { Link } from 'react-router-dom';
import { Warehouse, Shield, Phone, Network, Server, CheckCircle, Package, Truck, BarChart3, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LoadingWrapper, StaggeredLoadingWrapper } from '@/components/LoadingWrapper';
import { ServiceCardSkeleton, HeroSkeleton } from '@/components/LoadingSkeletons';
import { TypewriterText, FadeInText } from '@/components/AnimatedText';
import warehousesImage from '@/assets/industry-warehouses.jpg';

const Warehouses = () => {
  const services = [
    {
      icon: Shield,
      title: "Warehouse Security Systems",
      description: "Comprehensive surveillance for large-scale facility protection and monitoring.",
      features: [
        "Perimeter security monitoring",
        "Loading dock surveillance",
        "Inventory protection cameras",
        "Employee access monitoring",
        "After-hours security coverage",
        "Motion detection alerts"
      ]
    },
    {
      icon: Phone,
      title: "Warehouse Communication",
      description: "Efficient communication systems for coordinating warehouse operations.",
      features: [
        "Forklift operator communication",
        "Supervisor coordination systems",
        "Loading dock communication",
        "Emergency notification systems",
        "Shift coordination tools",
        "Multi-zone paging systems"
      ]
    },
    {
      icon: Network,
      title: "Industrial Network Infrastructure",
      description: "Robust networking solutions designed for warehouse environments.",
      features: [
        "Warehouse management system connectivity",
        "RFID and barcode scanning support",
        "Industrial-grade cabling",
        "Weather-resistant installations",
        "High-density data transmission",
        "Scalable network architecture"
      ]
    },
    {
      icon: Server,
      title: "Warehouse IT Systems",
      description: "Complete IT infrastructure supporting modern warehouse operations.",
      features: [
        "Inventory management systems",
        "Warehouse management software",
        "RFID tracking integration",
        "Climate monitoring systems",
        "Automated sorting support",
        "Real-time data analytics"
      ]
    }
  ];

  const operationalNeeds = [
    {
      icon: Package,
      title: "Inventory Protection",
      description: "Comprehensive monitoring of high-value inventory and storage areas.",
      solutions: [
        "Strategic camera placement",
        "Motion-triggered recording",
        "Real-time theft alerts",
        "Access control integration",
        "Night vision capabilities"
      ]
    },
    {
      icon: Truck,
      title: "Loading Dock Management",
      description: "Streamlined operations for shipping and receiving activities.",
      solutions: [
        "Dock door monitoring",
        "Communication systems",
        "Traffic flow optimization",
        "Safety compliance monitoring",
        "Automated notification systems"
      ]
    },
    {
      icon: Users,
      title: "Worker Safety & Compliance",
      description: "Monitoring systems to ensure safety protocols and regulatory compliance.",
      solutions: [
        "Safety zone monitoring",
        "Incident documentation",
        "Training compliance tracking",
        "Emergency response systems",
        "Environmental monitoring"
      ]
    },
    {
      icon: BarChart3,
      title: "Operational Analytics",
      description: "Data-driven insights to optimize warehouse efficiency and performance.",
      solutions: [
        "Traffic pattern analysis",
        "Productivity monitoring",
        "Equipment utilization tracking",
        "Process optimization",
        "Performance reporting"
      ]
    }
  ];

  const warehouseTypes = [
    {
      type: "Distribution Centers",
      description: "Large-scale solutions for high-volume distribution operations.",
      specifications: [
        "100,000+ sq ft coverage",
        "Multi-zone monitoring",
        "Automated sorting integration",
        "Cross-docking support",
        "Real-time inventory tracking"
      ]
    },
    {
      type: "Cold Storage Facilities",
      description: "Specialized systems designed for temperature-controlled environments.",
      specifications: [
        "Temperature-resistant equipment",
        "Condensation-proof cameras",
        "Climate monitoring integration",
        "Energy-efficient operations",
        "Compliance documentation"
      ]
    },
    {
      type: "Manufacturing Warehouses",
      description: "Industrial-grade systems for manufacturing and production facilities.",
      specifications: [
        "Heavy-duty installations",
        "Production line monitoring",
        "Quality control integration",
        "Safety compliance systems",
        "24/7 operational support"
      ]
    }
  ];

  const benefits = [
    { metric: "50%", description: "Reduction in theft and loss" },
    { metric: "35%", description: "Improved operational efficiency" },
    { metric: "24/7", description: "Continuous monitoring coverage" },
    { metric: "99.5%", description: "System reliability uptime" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden animate-slideInFromLeft">
        <div className="absolute inset-0">
          <img
            src={warehousesImage}
            alt="Warehouse Technology Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary-light/70" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <LoadingWrapper skeleton={<HeroSkeleton />} delay={300}>
              <div className="flex items-center space-x-3 mb-6 animate-fadeIn">
                <Warehouse className="h-12 w-12 text-white animate-pulse" />
                <TypewriterText
                  text="Warehouse & Logistics Solutions"
                  className="text-4xl lg:text-6xl font-bold text-white leading-tight"
                  delay={500}
                />
              </div>
              <FadeInText
                text="Industrial-strength technology systems for large-scale warehouse operations"
                className="text-xl lg:text-2xl text-red-100 mb-8"
                delay={1000}
              />
            </LoadingWrapper>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              From distribution centers to cold storage facilities, we provide robust security,
              communication, and IT solutions designed for the demanding warehouse environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 btn-red-hover" asChild>
                <Link to="/contact">Contact Us</Link>
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
              Warehouse Technology Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Industrial-grade solutions designed to meet the unique challenges of warehouse and logistics operations.
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
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-red-600 mb-4 group-hover:animate-pulse transition-colors" />
                    <CardTitle className="text-2xl text-red-700 group-hover:text-red-800">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
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

      {/* Operational Needs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Critical Warehouse Operations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Address key operational challenges with targeted technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {operationalNeeds.map((need, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <need.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl text-foreground">{need.title}</CardTitle>
                  <CardDescription className="text-base">
                    {need.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {need.solutions.map((solution, solutionIndex) => (
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

      {/* Benefits Statistics */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-light/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Warehouse Performance Improvements
            </h2>
            <p className="text-lg text-muted-foreground">
              Measurable results from our industrial technology implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{benefit.metric}</div>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warehouse Types Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Specialized Warehouse Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Customized technology packages for different types of warehouse and distribution facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {warehouseTypes.map((warehouse, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{warehouse.type}</CardTitle>
                  <CardDescription className="text-base">
                    {warehouse.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {warehouse.specifications.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{spec}</span>
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
            Secure Your Warehouse Operations
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Get industrial-strength technology solutions designed for your warehouse's unique operational requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 btn-red-hover" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/view-demo">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Warehouses;
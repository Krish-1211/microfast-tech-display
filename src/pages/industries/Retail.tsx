import { Link } from 'react-router-dom';
import { ShoppingCart, Shield, Phone, Network, Server, CheckCircle, Eye, CreditCard, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LoadingWrapper, StaggeredLoadingWrapper } from '@/components/LoadingWrapper';
import { ServiceCardSkeleton, HeroSkeleton } from '@/components/LoadingSkeletons';
import { TypewriterText, FadeInText } from '@/components/AnimatedText';
import retailImage from '@/assets/industry-retail.jpg';

const Retail = () => {
  const services = [
    {
      icon: Shield,
      title: "Retail Security Systems",
      description: "Comprehensive loss prevention and customer safety solutions for retail environments.",
      features: [
        "Point-of-sale monitoring",
        "Shoplifting deterrence",
        "Employee oversight",
        "Customer flow analysis",
        "After-hours protection",
        "Real-time theft alerts"
      ]
    },
    {
      icon: Phone,
      title: "Retail Communication",
      description: "Efficient communication systems for store operations and customer service.",
      features: [
        "Store-to-office communication",
        "Customer service lines",
        "Inventory coordination",
        "Manager alert systems",
        "Multi-location connectivity",
        "Emergency communication"
      ]
    },
    {
      icon: Network,
      title: "Retail Network Infrastructure",
      description: "Reliable networking for POS systems and modern retail operations.",
      features: [
        "POS system connectivity",
        "Customer WiFi networks",
        "Inventory management support",
        "E-commerce integration",
        "Payment processing reliability",
        "Cloud-based operations"
      ]
    },
    {
      icon: Server,
      title: "Retail IT Solutions",
      description: "Complete IT infrastructure supporting modern retail business operations.",
      features: [
        "POS workstation setup",
        "Inventory management systems",
        "Customer database management",
        "Online store integration",
        "Data backup & recovery",
        "24/7 technical support"
      ]
    }
  ];

  const retailChallenges = [
    {
      icon: Eye,
      title: "Loss Prevention",
      description: "Prevent shoplifting, employee theft, and inventory shrinkage.",
      solutions: [
        "Strategic camera placement",
        "Real-time monitoring alerts",
        "Facial recognition technology",
        "Exit/entrance coverage",
        "Blind spot elimination"
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Security",
      description: "Secure payment processing and POS system protection.",
      solutions: [
        "PCI compliance monitoring",
        "Secure payment networks",
        "Transaction surveillance",
        "Card skimmer detection",
        "Data encryption"
      ]
    },
    {
      icon: Users,
      title: "Customer Experience",
      description: "Enhance shopping experience while maintaining security.",
      solutions: [
        "Discrete surveillance systems",
        "Queue management",
        "Customer flow optimization",
        "Fast WiFi for shoppers",
        "Mobile payment support"
      ]
    },
    {
      icon: TrendingUp,
      title: "Business Analytics",
      description: "Gather insights to improve store operations and sales.",
      solutions: [
        "Customer traffic analysis",
        "Heat map generation",
        "Dwell time tracking",
        "Conversion rate monitoring",
        "Staff performance metrics"
      ]
    }
  ];

  const retailTypes = [
    {
      type: "Fashion & Apparel",
      description: "Specialized solutions for clothing and accessory stores.",
      features: [
        "Fitting room monitoring",
        "High-value item protection",
        "Seasonal inventory tracking",
        "Customer preference analytics",
        "Loss prevention for small items"
      ]
    },
    {
      type: "Electronics & Technology",
      description: "Advanced security for high-value electronic merchandise.",
      features: [
        "Product demonstration areas",
        "Theft-proof display systems",
        "Employee access control",
        "Warranty tracking integration",
        "Technical support stations"
      ]
    },
    {
      type: "Grocery & Convenience",
      description: "Efficient systems for high-traffic retail environments.",
      features: [
        "Self-checkout monitoring",
        "Cooler/freezer surveillance",
        "Quick-serve communication",
        "Inventory turnover tracking",
        "Health compliance monitoring"
      ]
    },
    {
      type: "Specialty Retail",
      description: "Customized solutions for unique retail environments.",
      features: [
        "Niche product protection",
        "Expert consultation areas",
        "Appointment scheduling systems",
        "Specialized inventory management",
        "Customer education displays"
      ]
    }
  ];

  const benefits = [
    { metric: "40%", description: "Reduction in retail theft" },
    { metric: "25%", description: "Faster checkout times" },
    { metric: "30%", description: "Improved inventory accuracy" },
    { metric: "99%", description: "POS system uptime" }
  ];

  const features = [
    {
      category: "Loss Prevention",
      items: [
        "HD surveillance cameras",
        "Motion detection alerts",
        "Facial recognition",
        "License plate recognition",
        "Real-time theft notifications"
      ]
    },
    {
      category: "Customer Analytics",
      items: [
        "Traffic counting",
        "Heat mapping",
        "Dwell time analysis",
        "Conversion tracking",
        "Demographic insights"
      ]
    },
    {
      category: "Operational Efficiency",
      items: [
        "Queue management",
        "Staff communication",
        "Inventory alerts",
        "Performance monitoring",
        "Energy management"
      ]
    },
    {
      category: "Integration Capabilities",
      items: [
        "POS system integration",
        "Inventory management",
        "Access control",
        "Alarm systems",
        "Mobile notifications"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden animate-slideInFromLeft">
        <div className="absolute inset-0">
          <img
            src={retailImage}
            alt="Retail Technology Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary-light/70" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <LoadingWrapper skeleton={<HeroSkeleton />} delay={300}>
              <div className="flex items-center space-x-3 mb-6 animate-fadeIn">
                <ShoppingCart className="h-12 w-12 text-white animate-pulse" />
                <TypewriterText
                  text="Retail & Shopping Solutions"
                  className="text-4xl lg:text-6xl font-bold text-white leading-tight"
                  delay={500}
                />
              </div>
              <FadeInText
                text="Advanced technology systems designed for retail success and loss prevention"
                className="text-xl lg:text-2xl text-red-100 mb-8"
                delay={1000}
              />
            </LoadingWrapper>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              From boutique shops to large retail chains, we provide integrated security, communication,
              and IT solutions that protect inventory, enhance customer experience, and drive business growth.
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
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Retail Technology Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to address the unique challenges of retail environments.
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

      {/* Retail Challenges */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Retail Challenges We Address
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Targeted solutions for the most common retail security and operational challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {retailChallenges.map((challenge, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow card-red-hover-animation gradient-border-red">
                <CardHeader>
                  <challenge.icon className="h-12 w-12 text-red-primary mb-4 animate-bounceSlow" />
                  <CardTitle className="text-2xl text-red-primary">{challenge.title}</CardTitle>
                  <CardDescription className="text-base">
                    {challenge.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {challenge.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-primary rounded-full animate-pulseSlow" />
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
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Proven Retail Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Measurable improvements in loss prevention, efficiency, and customer satisfaction.
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

      {/* Retail Types */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Solutions by Retail Type
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Customized technology packages designed for different retail formats and merchandise types.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {retailTypes.map((retail, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{retail.type}</CardTitle>
                  <CardDescription className="text-base">
                    {retail.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {retail.features.map((feature, featureIndex) => (
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

      {/* Advanced Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Advanced Retail Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge capabilities that give your retail business a competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
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
            Protect Your Retail Business
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Get comprehensive retail technology solutions that reduce loss, improve operations,
            and enhance the shopping experience for your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Schedule Store Assessment
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
              Call: +1 (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Retail;
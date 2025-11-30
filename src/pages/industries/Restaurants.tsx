import { UtensilsCrossed, Shield, Camera, Server, Network, CheckCircle, Phone, ArrowRight, Fuel, Users, Clock, DollarSign, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LoadingWrapper, StaggeredLoadingWrapper } from '@/components/LoadingWrapper';
import { ServiceCardSkeleton, HeroSkeleton } from '@/components/LoadingSkeletons';
import { TypewriterText, FadeInText } from '@/components/AnimatedText';
import restaurantsImage from '@/assets/industry-restaurants.jpg';

const Restaurants = () => {
  const services = [
    {
      icon: Shield,
      title: "Restaurant Security Systems",
      description: "Comprehensive surveillance to protect staff, customers, and assets.",
      features: [
        "Dining area monitoring",
        "Kitchen surveillance",
        "Cash register coverage",
        "Storage area security",
        "Entrance and exit monitoring",
        "After-hours protection"
      ]
    },
    {
      icon: Phone,
      title: "Communication Systems",
      description: "Efficient communication solutions for smooth restaurant operations.",
      features: [
        "Kitchen-to-front coordination",
        "Order management systems",
        "Delivery coordination",
        "Manager paging systems",
        "Customer service lines",
        "Multi-location support"
      ]
    },
    {
      icon: Network,
      title: "Network & POS Integration",
      description: "Integrate your POS system with CCTV using our POS Text Inserter. Display real-time transaction data on 4K camera footage for accurate monitoring and loss prevention.",
      features: [
        "POS system connectivity",
        "Guest WiFi networks",
        "Payment processing support",
        "Online ordering systems",
        "Inventory management",
        "Cloud-based operations"
      ],
      learnMore: "/pos-integration"
    },
    {
      icon: Server,
      title: "IT Infrastructure",
      description: "Complete IT solutions to support modern restaurant operations.",
      features: [
        "POS workstations",
        "Inventory management systems",
        "Customer database management",
        "Online presence support",
        "Backup and security",
        "24/7 system monitoring"
      ]
    }
  ];

  const challenges = [
    {
      icon: DollarSign,
      title: "Loss Prevention",
      description: "Prevent theft, reduce waste, and protect cash handling with comprehensive surveillance.",
      solution: "Strategic camera placement and real-time monitoring systems."
    },
    {
      icon: Users,
      title: "Staff Coordination",
      description: "Improve communication between kitchen, front-of-house, and management teams.",
      solution: "Integrated communication systems with instant connectivity."
    }
  ];

  const restaurantTypes = [
    {
      type: "Fine Dining",
      description: "Premium technology solutions for upscale dining experiences.",
      solutions: [
        "Discrete surveillance systems",
        "Premium communication tools",
        "High-speed guest WiFi",
        "Integrated reservation systems",
        "Wine cellar monitoring"
      ]
    },
    {
      type: "Fast Casual",
      description: "Efficient systems for high-volume, quick-service operations.",
      solutions: [
        "Queue monitoring cameras",
        "Drive-thru communication",
        "Mobile ordering support",
        "Kitchen display systems",
        "Rapid POS processing"
      ]
    },
    {
      type: "Chain Restaurants",
      description: "Standardized solutions that can scale across multiple locations.",
      solutions: [
        "Centralized monitoring",
        "Multi-location management",
        "Standardized POS systems",
        "Corporate communication",
        "Performance analytics"
      ]
    }
  ];

  const benefits = [
    { metric: "30%", description: "Reduction in theft and loss" },
    { metric: "25%", description: "Faster order processing" },
    { metric: "40%", description: "Improved staff coordination" },
    { metric: "99%", description: "System uptime reliability" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden animate-slideInFromLeft">
        <div className="absolute inset-0">
          <img
            src={restaurantsImage}
            alt="Restaurant Technology Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary-light/70" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <LoadingWrapper skeleton={<HeroSkeleton />} delay={300}>
              <div className="flex items-center space-x-3 mb-6 animate-fadeIn">
                <UtensilsCrossed className="h-12 w-12 text-white animate-pulse" />
                <TypewriterText
                  text="Restaurant Technology Solutions"
                  className="text-4xl lg:text-6xl font-bold text-white leading-tight"
                  delay={100}
                />
              </div>
              <FadeInText
                text="Comprehensive technology systems designed for the food service industry"
                className="text-xl lg:text-2xl text-white mb-8 animate-fadeInUp"
                delay={1000}
              />
            </LoadingWrapper>
            <br></br>
            <p className="text-xl lg:text-2xl text-white mb-8 animate-fadeInUp" style={{ animationDelay: '1s' }}>
              From fine dining to fast casual, we provide integrated security, communication,
              and IT solutions that enhance operations, protect assets, and improve customer experience.
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
              Restaurant Technology Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized solutions that address the unique operational needs and challenges of food service establishments.
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
              Restaurant Challenges We Solve
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Address common restaurant pain points with targeted technology solutions.
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
              Proven Restaurant Results
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

      {/* Restaurant Types Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Solutions by Restaurant Type
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Customized technology packages for different restaurant formats and service styles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {restaurantTypes.map((restaurant, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow card-red-hover-animation gradient-border-red">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-primary underline-animation-red">{restaurant.type}</CardTitle>
                  <CardDescription className="text-base">
                    {restaurant.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {restaurant.solutions.map((solution, solutionIndex) => (
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
            Ready to Improve Your Restaurant Operations?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Get a customized technology solution that reduces loss, improves efficiency,
            and enhances your customer experience.
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

export default Restaurants;
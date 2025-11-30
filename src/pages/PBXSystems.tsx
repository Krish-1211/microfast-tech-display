import { Link } from 'react-router-dom';
import { Phone, Users, Cloud, BarChart3, Headphones, Router, Building, Hotel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { LoadingWrapper, StaggeredLoadingWrapper } from '@/components/LoadingWrapper';
import { ServiceCardSkeleton } from '@/components/LoadingSkeletons';
import { TypewriterText, FadeInText } from '@/components/AnimatedText';
import pbxImage from '@/assets/pbx-system.jpg';

const PBXSystems = () => {
  const features = [
    {
      icon: Users,
      title: "Multi-Line Support",
      description: "Handle multiple concurrent calls with advanced call routing and queue management."
    },
    {
      icon: Cloud,
      title: "VoIP Integration",
      description: "Seamless integration with Voice over IP technology for cost-effective communication."
    },
    {
      icon: BarChart3,
      title: "Call Analytics",
      description: "Detailed reporting and analytics to monitor call patterns and system performance."
    },
    {
      icon: Headphones,
      title: "Call Recording",
      description: "Automatic call recording with secure storage for training and quality assurance."
    },
    {
      icon: Router,
      title: "Network Integration",
      description: "Complete integration with your existing network infrastructure and systems."
    },
    {
      icon: Building,
      title: "Scalable Design",
      description: "Easily expandable systems that grow with your business needs and requirements."
    }
  ];

  const solutions = [
    {
      title: "Hotels & Hospitality",
      icon: Hotel,
      description: "Complete hotel communication solutions with guest services integration.",
      features: [
        "Guest room phone systems",
        "Front desk call management",
        "Housekeeping communication",
        "Conference room connectivity",
        "Wake-up call automation",
        "Multi-language support"
      ]
    },
    {
      title: "Office Buildings",
      icon: Building,
      description: "Professional communication systems for corporate environments.",
      features: [
        "Inter-office communication",
        "Conference call capabilities",
        "Voicemail management",
        "Call forwarding options",
        "Directory services",
        "Mobile integration"
      ]
    },
    {
      title: "Restaurants",
      icon: Users,
      description: "Efficient communication for restaurant operations and customer service.",
      features: [
        "Kitchen-to-front coordination",
        "Reservation management",
        "Delivery coordination",
        "Manager paging systems",
        "Customer inquiry handling",
        "Multi-location support"
      ]
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      description: "Significantly reduce communication costs with VoIP technology and efficient call routing.",
      percentage: "Up to 60%"
    },
    {
      title: "Improved Efficiency",
      description: "Streamline communications with advanced features like auto-attendant and call queuing.",
      percentage: "40% Faster"
    },
    {
      title: "Enhanced Reliability",
      description: "Enterprise-grade systems with redundancy and automatic failover capabilities.",
      percentage: "99.9% Uptime"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="PBX Communication Systems - Professional Business Phone Solutions"
        description="Advanced PBX systems with VoIP integration, multi-line support, and call management. Professional installation and training for seamless business communications."
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
            src={pbxImage}
            alt="PBX Communication System"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary-light/70 animate-gradientSweep"
            style={{ backgroundSize: '200% 100%' }} />
        </div>

        <div className="relative container mx-auto px-4 animate-contentSlideUp">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6 animate-slideUp">
              <Phone className="h-12 w-12 text-white animate-bounceSlow" />
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                <TypewriterText
                  text="PBX Communication Systems"
                  delay={100}
                  speed={30}
                  className="text-white"
                />
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-white mb-8 animate-fadeInUp" style={{ animationDelay: '1s' }}>
              Professional phone systems with VoIP integration for seamless communication
            </p>
            <p className="text-lg text-white mb-8 max-w-2xl animate-slideUp" style={{ animationDelay: '1.3s' }}>
              Transform your business communications with our advanced PBX systems featuring
              VoIP technology, call management, and comprehensive reporting capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '1.6s' }}>
              <Button size="lg" variant="secondary" className="text-lg px-8 btn-red-hover">
                <Link to="/contact" className="text-red-primary">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Advanced Communication Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our PBX systems provide comprehensive communication solutions with modern features
              designed to enhance productivity and customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow card-red-hover-animation gradient-border-red">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-red-primary mb-4 animate-bounceSlow" />
                  <CardTitle className="text-xl text-red-dark">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Measurable Business Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience significant improvements in communication efficiency and cost savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 rounded-lg bg-gradient-to-br from-red-primary/5 to-red-light/5 border border-red-primary/10 hover:shadow-lg transition-all duration-300 card-red-hover-animation">
                <div className="text-4xl font-bold text-red-primary mb-4">{benefit.percentage}</div>
                <h3 className="text-xl font-bold text-red-dark mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Industry-Tailored Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized PBX configurations designed for specific industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow card-red-hover-animation gradient-border-red">
                <CardHeader className="text-center pb-6">
                  <solution.icon className="h-16 w-16 text-red-primary mx-auto mb-4 animate-bounceSlow" />
                  <CardTitle className="text-2xl text-red-primary underline-animation-red">{solution.title}</CardTitle>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
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

      {/* Technical Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Technical Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Lines Supported</h3>
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Concurrent calls</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Extensions</h3>
              <p className="text-2xl font-bold text-primary">1000+</p>
              <p className="text-sm text-muted-foreground">User extensions</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Reliability</h3>
              <p className="text-2xl font-bold text-primary">99.9%</p>
              <p className="text-sm text-muted-foreground">System uptime</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">Integration</h3>
              <p className="text-2xl font-bold text-primary">24/7</p>
              <p className="text-sm text-muted-foreground">Cloud support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Upgrade Your Communication System
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Get a customized PBX solution that enhances your business communications and reduces costs.
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

export default PBXSystems;
import { Link } from 'react-router-dom';
import { Shield, Eye, Smartphone, Brain, Clock, Monitor, Camera, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { LoadingWrapper, StaggeredLoadingWrapper } from '@/components/LoadingWrapper';
import { ServiceCardSkeleton } from '@/components/LoadingSkeletons';
import { TypewriterText, FadeInText } from '@/components/AnimatedText';
import cctvImage from '@/assets/cctv-system.jpg';

const CCTVSurveillance = () => {
  const features = [
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Round-the-clock surveillance with advanced motion detection and alerts."
    },
    {
      icon: Monitor,
      title: "HD & 4K Quality",
      description: "Crystal clear video quality with high-definition and ultra-HD camera options."
    },
    {
      icon: Smartphone,
      title: "Remote Access",
      description: "View live feeds and recorded footage from anywhere using mobile apps."
    },
    {
      icon: Brain,
      title: "AI Analytics",
      description: "Smart detection features including facial recognition and behavior analysis."
    },
    {
      icon: Clock,
      title: "Cloud Storage",
      description: "Secure cloud backup with customizable retention periods and easy retrieval."
    },
    {
      icon: Lock,
      title: "Advanced Security",
      description: "Encrypted data transmission and secure access controls for complete privacy."
    }
  ];

  const solutions = [
    {
      title: "Hotels & Hospitality",
      description: "Comprehensive surveillance for guest safety, property protection, and staff monitoring.",
      applications: ["Lobby & reception areas", "Hallways & corridors", "Parking areas", "Back-of-house operations"]
    },
    {
      title: "Retail & Shops",
      description: "Loss prevention and customer safety with discrete monitoring solutions.",
      applications: ["Point of sale monitoring", "Inventory protection", "Customer flow analysis", "After-hours security"]
    },
    {
      title: "Warehouses",
      description: "Large-scale monitoring for inventory protection and operational oversight.",
      applications: ["Perimeter security", "Loading dock monitoring", "Inventory tracking", "Worker safety compliance"]
    },
    {
      title: "Offices",
      description: "Professional security solutions for corporate environments and sensitive areas.",
      applications: ["Entry point monitoring", "Conference room security", "Parking lot surveillance", "After-hours protection"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="CCTV Surveillance Systems - Professional Security Solutions"
        description="Advanced CCTV surveillance systems with HD cameras, 24/7 monitoring, and smart analytics. Professional installation and support for comprehensive property security."
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
            src={cctvImage}
            alt="CCTV Surveillance System"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary-light/70 animate-gradientSweep"
            style={{ backgroundSize: '200% 100%' }} />
        </div>

        <div className="relative container mx-auto px-4 animate-contentSlideUp">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6 animate-slideUp">
              <Shield className="h-12 w-12 text-white animate-bounceSlow" />
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                <TypewriterText
                  text="CCTV Surveillance Systems"
                  delay={100}
                  speed={30}
                  className="text-white"
                />
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-white mb-8 animate-fadeInUp" style={{ animationDelay: '1s' }}>
              Advanced security solutions for comprehensive monitoring and protection
            </p>
            <p className="text-lg text-white mb-8 max-w-2xl animate-slideUp" style={{ animationDelay: '1.3s' }}>
              Protect your property, assets, and people with our state-of-the-art surveillance systems
              featuring HD cameras, smart analytics, and 24/7 monitoring capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '1.6s' }}>
              <Button size="lg" variant="secondary" className="text-lg px-8 btn-red-hover" asChild>
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
              Advanced Surveillance Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our CCTV systems combine cutting-edge technology with reliable performance
              to deliver comprehensive security solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <StaggeredLoadingWrapper
                key={index}
                skeleton={<ServiceCardSkeleton />}
                delay={800}
                staggerDelay={200}
                index={index}
              >
                <Card className="h-full hover:shadow-lg transition-shadow card-red-hover-animation gradient-border-red">
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
              </StaggeredLoadingWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* POS Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-fadeInLeft">
              <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-6">
                POS System Integration
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Connect your Point of Sale system directly to your surveillance network for
                enhanced loss prevention and business intelligence.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time transaction text overlay on video",
                  "Search video by receipt number or item",
                  "Flag suspicious transactions (voids, no sales)",
                  "Compatible with major POS brands"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-primary rounded-full" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-red-primary/30 text-red-primary hover:bg-red-primary hover:text-white transition-all duration-300" asChild>
                  <Link to="/pos-integration">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 animate-fadeInRight">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-red-primary/20">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Monitor className="h-20 w-20 text-red-primary mx-auto mb-4 opacity-80" />
                    <p className="text-white/60 font-mono text-sm">TRANSACTION DATA OVERLAY</p>
                    <div className="mt-4 bg-black/40 p-4 rounded text-left font-mono text-xs text-green-400">
                      <p>01/15/2024 14:30:22</p>
                      <p>REG#1  CASHIER: JOHN</p>
                      <p>----------------</p>
                      <p>ITEM 1      $12.99</p>
                      <p>ITEM 2       $5.49</p>
                      <p>TOTAL       $18.48</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tailored surveillance systems designed for the unique needs of different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <StaggeredLoadingWrapper
                key={index}
                skeleton={<ServiceCardSkeleton />}
                delay={1200}
                staggerDelay={300}
                index={index}
              >
                <Card className="h-full card-red-hover-animation gradient-border-red">
                  <CardHeader>
                    <CardTitle className="text-2xl text-red-primary underline-animation-red">{solution.title}</CardTitle>
                    <CardDescription className="text-base">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-red-dark">Key Applications:</h4>
                      <ul className="space-y-2">
                        {solution.applications.map((app, appIndex) => (
                          <li key={appIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-red-primary rounded-full animate-pulseSlow" />
                            <span className="text-muted-foreground">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </StaggeredLoadingWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Technical Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <Camera className="h-16 w-16 text-red-primary mx-auto mb-4 animate-bounceSlow" />
              <h3 className="text-xl font-bold mb-2 text-red-dark">Camera Options</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>4K Ultra HD resolution</li>
                <li>Night vision capabilities</li>
                <li>Weather-resistant housing</li>
                <li>Pan-tilt-zoom functionality</li>
              </ul>
            </div>
            <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <Monitor className="h-16 w-16 text-red-primary mx-auto mb-4 animate-bounceSlow" />
              <h3 className="text-xl font-bold mb-2 text-red-dark">Recording Systems</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>Network Video Recorders</li>
                <li>Cloud-based storage</li>
                <li>Motion-triggered recording</li>
                <li>Customizable retention</li>
              </ul>
            </div>
            <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <Smartphone className="h-16 w-16 text-red-primary mx-auto mb-4 animate-bounceSlow" />
              <h3 className="text-xl font-bold mb-2 text-red-dark">Remote Access</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>Mobile app support</li>
                <li>Web browser access</li>
                <li>Real-time notifications</li>
                <li>Multi-device compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light animate-fadeInUp">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 animate-zoomIn">
            Secure Your Property Today
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Get a free security assessment and customized CCTV solution designed for your specific needs.
          </p>
          <div className="flex justify-center animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" variant="secondary" className="text-lg px-8 btn-red-hover">
              <Link to="/contact" className="text-red-primary">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CCTVSurveillance;
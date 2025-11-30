import { Link } from 'react-router-dom';
import { Building, Utensils, Hotel, Fuel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { LoadingWrapper, StaggeredLoadingWrapper } from '@/components/LoadingWrapper';
import { ServiceCardSkeleton } from '@/components/LoadingSkeletons';
import { TypewriterText, FadeInText } from '@/components/AnimatedText';

const Industries = () => {
  const industries = [
    {
      title: "Gas Stations & Convenience Stores",
      description: "Comprehensive security and communication solutions for fuel stations and retail convenience stores with 24/7 monitoring capabilities.",
      icon: Fuel,
      href: "/industries/gas-stations",
      features: [
        "24/7 CCTV surveillance systems",
        "Point-of-sale security integration",
        "Fuel pump monitoring cameras",
        "Emergency communication systems",
        "Remote monitoring capabilities",
        "Loss prevention solutions"
      ],
      benefits: "Enhanced security, reduced theft, improved customer safety"
    },
    {
      title: "Restaurants & Food Service",
      description: "Specialized technology solutions for restaurants, cafes, and food service businesses to ensure smooth operations and security.",
      icon: Utensils,
      href: "/industries/restaurants",
      features: [
        "Kitchen area surveillance",
        "Customer dining area monitoring",
        "PBX systems for reservations",
        "Network infrastructure for POS",
        "Staff training on systems",
        "Health compliance monitoring"
      ],
      benefits: "Improved operations, better customer service, compliance assurance"
    },
    {
      title: "Hotels & Hospitality",
      description: "Advanced technology infrastructure for hotels, resorts, and hospitality businesses to enhance guest experience and security.",
      icon: Hotel,
      href: "/industries/hotels",
      features: [
        "Guest room monitoring systems",
        "Lobby and common area surveillance",
        "Advanced PBX communication",
        "High-speed network infrastructure",
        "Staff communication systems",
        "Guest service integration"
      ],
      benefits: "Enhanced guest safety, improved service quality, operational efficiency"
    },
    {
      title: "Corporate Offices",
      description: "Professional technology solutions for corporate environments including security systems, communication infrastructure, and IT support.",
      icon: Building,
      href: "/industries/offices",
      features: [
        "Office security surveillance",
        "Conference room AV systems",
        "Corporate PBX solutions",
        "Structured network cabling",
        "IT infrastructure management",
        "Employee training programs"
      ],
      benefits: "Increased productivity, enhanced security, seamless communication"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Industries We Serve - MicroFast Tech"
        description="Specialized technology solutions for gas stations, restaurants, hotels, and corporate offices. Professional installation and support services."
      />
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-red-primary mb-6">
              <TypewriterText 
                text="Industries We Serve" 
                delay={200}
                speed={80}
                className="text-red-primary"
              />
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '1.5s' }}>
              Trusted by businesses across various industries for reliable, 
              professional technology solutions tailored to specific industry needs.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <StaggeredLoadingWrapper
                  key={index}
                  skeleton={<ServiceCardSkeleton />}
                  delay={800}
                  staggerDelay={300}
                  index={index}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer border-2 hover:border-red-primary/20 h-full card-red-hover-animation gradient-border-red">
                    <Link to={industry.href} className="block h-full">
                      <CardHeader className="bg-gradient-to-br from-red-primary/5 to-red-light/5 pb-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-red-primary/10 rounded-lg group-hover:bg-red-primary group-hover:text-white transition-colors animate-pulseSlow">
                            <IconComponent className="h-8 w-8 text-red-primary group-hover:text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl group-hover:text-red-primary transition-colors underline-animation-red">
                              {industry.title}
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <CardDescription className="text-base mb-4 flex-grow">
                          {industry.description}
                        </CardDescription>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-red-dark mb-3">Our Solutions Include:</h4>
                            <div className="grid grid-cols-1 gap-2">
                              {industry.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center space-x-2">
                                  <div className="h-1.5 w-1.5 bg-red-primary rounded-full flex-shrink-0 animate-pulseSlow" />
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="bg-red-muted/20 p-3 rounded-lg">
                            <h5 className="font-medium text-sm text-red-dark mb-1">Key Benefits:</h5>
                            <p className="text-sm text-muted-foreground">{industry.benefits}</p>
                          </div>
                          
                          <div className="pt-2">
                            <Button variant="outline" className="w-full bg-white border-red-primary/50 text-red-primary hover:bg-red-primary/10 group-hover:!bg-red-primary group-hover:!text-white group-hover:!border-red-primary transition-all">
                              View Industry Solutions
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                </StaggeredLoadingWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Your Industry */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Industry-Specific Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We understand that each industry has unique requirements and challenges. 
              Our solutions are tailored to meet your specific business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Industry Knowledge</h3>
              <p className="text-muted-foreground">
                Deep understanding of industry-specific regulations, requirements, and best practices.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fuel className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Custom Solutions</h3>
              <p className="text-muted-foreground">
                Tailored technology solutions designed specifically for your industry's unique challenges.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hotel className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Proven Results</h3>
              <p className="text-muted-foreground">
                Track record of successful implementations across various industry verticals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let our industry experts design the perfect technology solution for your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Get Industry-Specific Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
              Call: +91 9876543210
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
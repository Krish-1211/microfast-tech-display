import { Shield, Monitor, Mail, Server, Wallet, CheckCircle, ArrowRight, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { LoadingWrapper, StaggeredLoadingWrapper } from '@/components/LoadingWrapper';
import { ServiceCardSkeleton, HeroSkeleton } from '@/components/LoadingSkeletons';
import { TypewriterText, FadeInText } from '@/components/AnimatedText';
import { Link } from 'react-router-dom';
import posSystemsImage from '@/assets/pos-systems-showcase.jpg';

const POSIntegration = () => {
  const features = [
    {
      icon: CreditCard,
      title: "POS and Cash Register Support",
      description: "Supports most popular Point of Sale systems and Cash Registers, like GILBARCO Passport, Verifone Ruby2 Topaz, JMSC, SAM4S, CASIO, LOC, pcAmerica, Keystroke, StoreTender, POSitouch, AST, L-BOSS, MicroSoft Dynamic, MODISoft, NRS, Focus and more."
    },
    {
      icon: Monitor,
      title: "4K/1080P Analog Video Resolution",
      description: "The system is fully compatible with HD 4K to 1080P TVI/AHD/CVI Camera"
    },
    {
      icon: Server,
      title: "Text Overlay",
      description: "Smart POS BOX text overlay not only has most of the functions of a text inserter, but also has some special unique features.",
      features: [
        "Provides four character font sizes",
        "Six character colors: black, white, red, yellow, blue and orange",
        "Display area up to 48 rows by 120 columns",
        "Easily move text area by mouse"
      ]
    },
    {
      icon: Mail,
      title: "Email Alert",
      description: "Usually, viewing a certain transaction video is a time-consuming and headache mission. People have to watch the live view or recorded video all the time. Now Smart POS Box email function will help you to solve this problem at all.",
      features: [
        "Predefined any exception keyword, like No Sale, Void, Cancel, Delete etc., or items name",
        "Smart trigger email alert with exception keyword",
        "Email content includes Date, Time, Register Name and data text",
        "Easily and accurately view transaction video"
      ]
    },
    {
      icon: Shield,
      title: "PC Central Management System",
      description: "PC CMS software brings your all SmartPOSBox devices operation together.",
      features: [
        "Multiple Box devices management",
        "Configures Box device and POS camera over network",
        "Video live view and video text record management(Optional)",
        "Search transaction text and video(Optional)"
      ]
    },
    {
      icon: Wallet,
      title: "Cash Drawer Safety",
      description: "This feature will monitor the cash drawer opening and closing status, no matter how the cash drawer is opened or closed each time, the open and close status text message will be inserted to the video. And an alert message will be sent to manager when the cash drawer is abnormally opened or closed. You will never worry about someone stealing money from a cash drawer anymore!"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="POS Integration System - Advanced Text Inserter & Cash Register Solutions"
        description="Professional POS integration solutions with 4K video resolution, text overlay, email alerts, and central management. Compatible with major POS systems including GILBARCO, Verifone, pcAmerica, and more."
        keywords="POS integration, text inserter, cash register security, POS text overlay, transaction monitoring, cash drawer safety"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-primary to-primary-light overflow-hidden">
        <div className="container mx-auto px-4">
          <LoadingWrapper skeleton={<HeroSkeleton />} delay={300}>
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <CreditCard className="h-12 w-12 text-white animate-pulse" />
                <TypewriterText 
                  text="POS Integration System"
                  className="text-4xl lg:text-6xl font-bold"
                  delay={100}
                />
              </div>
              <FadeInText
                text="Advanced text inserter solutions for seamless POS and cash register integration with your surveillance system"
                className="text-xl lg:text-2xl text-red-light mb-8"
                delay={1000}
              />
            </div>
          </LoadingWrapper>
        </div>
      </section>

      {/* POS Systems Showcase */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Industry-Leading POS Text Inserter Systems
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See our advanced text overlay technology in action with leading POS systems
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <img 
              src={posSystemsImage} 
              alt="POS Text Inserter systems including GILBARCO Passport, Verifone Ruby2 Topaz, and SAM4S showing real-time transaction overlay on 4K camera footage"
              className="w-full rounded-lg shadow-2xl border-4 border-red-primary/20"
            />
            <p className="text-center text-sm text-muted-foreground mt-4">
              Real-time transaction data overlaid on surveillance footage with GILBARCO Passport, Verifone Ruby2 Topaz, and SAM4S systems
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Comprehensive POS Integration Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need for complete transaction monitoring and loss prevention
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <StaggeredLoadingWrapper 
                key={index} 
                skeleton={<ServiceCardSkeleton />}
                delay={600}
                staggerDelay={200}
                index={index}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-200 transition-colors">
                        <feature.icon className="h-8 w-8 text-red-600 group-hover:animate-pulse" />
                      </div>
                      <CardTitle className="text-xl text-red-700 group-hover:text-red-800">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {feature.description}
                    </CardDescription>
                    {feature.features && (
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-red-primary flex-shrink-0 mt-1" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </StaggeredLoadingWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Ready to Enhance Your Transaction Security?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to learn more about our POS integration solutions
            </p>
            <Button size="lg" className="text-lg px-8 btn-red-hover" asChild>
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Contact Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default POSIntegration;

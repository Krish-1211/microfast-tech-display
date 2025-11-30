import { Users, Award, Clock, MapPin, Phone, Mail, Target, Eye, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LoadingWrapper, StaggeredLoadingWrapper } from '@/components/LoadingWrapper';
import { ServiceCardSkeleton, ContactCardSkeleton } from '@/components/LoadingSkeletons';
import { TypewriterText, FadeInText } from '@/components/AnimatedText';

const About = () => {
  const teamMembers = [
    {
      name: "Raj Patel",
      role: "Founder & CEO",
      experience: "15+ years",
      specialization: "IT Infrastructure & Strategy"
    },
    {
      name: "Priya Singh",
      role: "Head of Security Solutions",
      experience: "12+ years", 
      specialization: "CCTV & Surveillance Systems"
    },
    {
      name: "Amit Kumar",
      role: "Network Solutions Lead",
      experience: "10+ years",
      specialization: "Structured Cabling & PBX"
    },
    {
      name: "Neha Sharma",
      role: "Customer Success Manager",
      experience: "8+ years",
      specialization: "Client Relations & Support"
    }
  ];

  const milestones = [
    { year: "2015", achievement: "Founded MicroFast Tech in Bangalore" },
    { year: "2017", achievement: "Completed 100+ CCTV installations" },
    { year: "2019", achievement: "Expanded to PBX and network solutions" },
    { year: "2021", achievement: "Served 500+ satisfied clients" },
    { year: "2023", achievement: "Launched IT infrastructure services" },
    { year: "2024", achievement: "Leading tech solutions provider in South India" }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide cutting-edge technology solutions that enhance security, connectivity, and communication for businesses and homes across India."
    },
    {
      icon: Eye,
      title: "Vision", 
      description: "To be the most trusted technology partner, known for innovation, reliability, and exceptional customer service in the digital transformation journey."
    },
    {
      icon: Heart,
      title: "Values",
      description: "Integrity, Innovation, Customer-centricity, Quality Excellence, and Sustainable Growth guide everything we do."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light animate-slideInFromLeft">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            <TypewriterText 
              text="About MicroFast Tech" 
              delay={200}
              speed={80}
              className="text-white"
            />
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '1.5s' }}>
            Your trusted technology partner since 2015, delivering innovative solutions 
            that secure, connect, and empower businesses across India.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-white/90 animate-slideUp" style={{ animationDelay: '2s' }}>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-white" />
              <span className="font-medium text-white">500+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-white" />
              <span className="font-medium text-white">9+ Years Excellence</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-6 w-6 text-red-light" />
              <span className="font-medium text-red-light">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Our Foundation
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Built on strong principles and driven by a clear vision for the future of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <StaggeredLoadingWrapper
                key={index}
                skeleton={<ServiceCardSkeleton />}
                delay={800}
                staggerDelay={200}
                index={index}
              >
                <Card className="text-center h-full card-red-hover-animation gradient-border-red">
                  <CardHeader>
                    <value.icon className="h-12 w-12 text-red-primary mx-auto mb-4 animate-bounceSlow" />
                    <CardTitle className="text-xl text-red-dark">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </StaggeredLoadingWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fadeInUp">
              <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground">
                From a small startup to a leading technology solutions provider
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 animate-slideUp" style={{ animationDelay: '0.5s' }}>
              <p>
                Founded in 2015 in Bangalore's bustling Electronic City, MicroFast Tech began with a simple 
                mission: to make advanced technology accessible and reliable for businesses of all sizes. 
                What started as a small team of passionate engineers has grown into a comprehensive technology 
                solutions provider serving clients across South India.
              </p>
              
              <p>
                Our journey began with CCTV surveillance systems, responding to the growing need for 
                security solutions in the rapidly expanding IT corridor of Bangalore. As our clients' 
                needs evolved, so did we. We expanded into PBX communication systems, structured network 
                cabling, and comprehensive IT infrastructure services.
              </p>
              
              <p>
                Today, MicroFast Tech stands as a testament to the power of customer-focused innovation. 
                We've successfully completed thousands of installations across hotels, restaurants, 
                offices, warehouses, and homes. Our commitment to quality, reliability, and exceptional 
                service has earned us the trust of over 500 satisfied clients.
              </p>
              
              <p>
                As we look to the future, we remain committed to staying at the forefront of technology, 
                continuously adapting our services to meet the evolving needs of our clients in an 
                increasingly connected world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Key milestones that shaped MicroFast Tech
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-start space-x-4 animate-slideUp`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex-shrink-0 w-20 h-20 bg-red-primary rounded-full flex items-center justify-center animate-pulseSlow">
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </div>
                  <div className="flex-grow pt-5">
                    <p className="text-lg font-medium text-red-dark underline-animation-red">{milestone.achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering excellence in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <StaggeredLoadingWrapper
                key={index}
                skeleton={<ContactCardSkeleton />}
                delay={1000}
                staggerDelay={150}
                index={index}
              >
                <Card className="text-center card-red-hover-animation gradient-border-red">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-red-primary to-red-light rounded-full mx-auto mb-4 flex items-center justify-center animate-pulseSlow">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-red-dark">{member.name}</CardTitle>
                    <CardDescription className="text-red-primary font-medium underline-animation-red">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-red-dark">Experience:</span> {member.experience}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-red-dark">Expertise:</span> {member.specialization}
                    </p>
                  </CardContent>
                </Card>
              </StaggeredLoadingWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light animate-fadeInUp">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 animate-zoomIn">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Experience the MicroFast Tech difference. Let's discuss how we can help 
            transform your technology infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-white animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-white" />
              <span className="text-white">2905 Chastain Meadows Pkwy, Marietta, GA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-white" />
              <span className="text-white">229 551 7613</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-red-light" />
              <span className="text-red-light">sales@microfasttech.com</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
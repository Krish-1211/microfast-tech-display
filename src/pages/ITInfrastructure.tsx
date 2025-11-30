import { Link } from 'react-router-dom';
import { Server, Monitor, HardDrive, Cpu, Wrench, Shield, Cloud, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { LoadingWrapper, StaggeredLoadingWrapper } from '@/components/LoadingWrapper';
import { ServiceCardSkeleton } from '@/components/LoadingSkeletons';
import { TypewriterText, FadeInText } from '@/components/AnimatedText';
import itImage from '@/assets/it-infrastructure.jpg';

const ITInfrastructure = () => {
  const services = [
    {
      icon: Cpu,
      title: "Custom PC Builds",
      description: "High-performance workstations tailored to your specific applications and requirements."
    },
    {
      icon: Server,
      title: "Server Installation",
      description: "Complete server setup, configuration, and deployment for business operations."
    },
    {
      icon: Monitor,
      title: "Network Diagnostics",
      description: "Comprehensive network analysis, troubleshooting, and performance optimization."
    },
    {
      icon: HardDrive,
      title: "Data Storage Solutions",
      description: "Scalable storage systems with backup and disaster recovery capabilities."
    },
    {
      icon: Shield,
      title: "Security Implementation",
      description: "Comprehensive IT security measures including firewalls, antivirus, and monitoring."
    },
    {
      icon: Wrench,
      title: "IT Support & Maintenance",
      description: "Ongoing support, maintenance, and system optimization services."
    }
  ];

  const workstationTypes = [
    {
      type: "Business Workstations",
      icon: Monitor,
      specs: ["Intel Core i5/i7", "16-32GB RAM", "SSD Storage", "Professional Graphics"],
      applications: ["Office productivity", "Email & communication", "Web browsing", "Basic design work"],
      startingPrice: "$899"
    },
    {
      type: "Design & CAD Workstations",
      icon: Cpu,
      specs: ["Intel Core i7/i9", "32-64GB RAM", "NVMe SSD", "Quadro/RTX Graphics"],
      applications: ["3D modeling", "CAD design", "Video editing", "Engineering software"],
      startingPrice: "$1,599"
    },
    {
      type: "Gaming & Creative PCs",
      icon: Zap,
      specs: ["AMD/Intel High-end", "32-64GB RAM", "High-speed SSD", "RTX Gaming Graphics"],
      applications: ["Gaming", "Streaming", "Content creation", "VR applications"],
      startingPrice: "$1,299"
    }
  ];

  const serverSolutions = [
    {
      title: "File & Print Servers",
      description: "Centralized file storage and printer management for office environments.",
      features: [
        "Shared file access",
        "Automated backups",
        "Print queue management",
        "User access controls",
        "Remote file access"
      ]
    },
    {
      title: "Database Servers",
      description: "High-performance database hosting for business applications and data management.",
      features: [
        "SQL Server support",
        "MySQL/PostgreSQL",
        "Data replication",
        "Performance optimization",
        "Security hardening"
      ]
    },
    {
      title: "Application Servers",
      description: "Dedicated servers for hosting business applications and web services.",
      features: [
        "Web application hosting",
        "API services",
        "Load balancing",
        "Scalable architecture",
        "High availability"
      ]
    },
    {
      title: "Virtualization Servers",
      description: "Efficient resource utilization through server virtualization technologies.",
      features: [
        "VMware/Hyper-V",
        "Resource optimization",
        "Multiple OS support",
        "Easy backup/restore",
        "Cost reduction"
      ]
    }
  ];

  const supportServices = [
    {
      title: "Remote Support",
      description: "24/7 remote assistance for immediate issue resolution and system monitoring.",
      responseTime: "< 1 hour"
    },
    {
      title: "On-site Support",
      description: "Professional technicians for hardware installation, maintenance, and repairs.",
      responseTime: "Same day"
    },
    {
      title: "System Monitoring",
      description: "Proactive monitoring of your IT infrastructure to prevent issues before they occur.",
      responseTime: "Real-time"
    },
    {
      title: "Backup Management",
      description: "Automated backup solutions with disaster recovery planning and testing.",
      responseTime: "Daily backups"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="IT Infrastructure & Custom PC Solutions - Professional IT Services"
        description="Complete IT solutions from custom workstations to enterprise servers. Professional installation, network diagnostics, and 24/7 support services."
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
            src={itImage}
            alt="IT Infrastructure Setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary-light/70 animate-gradientSweep"
            style={{ backgroundSize: '200% 100%' }} />
        </div>

        <div className="relative container mx-auto px-4 animate-contentSlideUp">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <Server className="h-12 w-12 text-white" />
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                <TypewriterText
                  text="IT Infrastructure & Custom PCs"
                  delay={100}
                  speed={30}
                  className="text-white"
                />
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-white mb-8 animate-fadeInUp" style={{ animationDelay: '1s' }}>
              Complete IT solutions from custom builds to network diagnostics
            </p>
            <p className="text-xl lg:text-2xl text-white mb-8 animate-fadeInUp" style={{ animationDelay: '1s' }}>
              Build a robust IT foundation with our custom workstations, server solutions,
              and comprehensive support services designed for business success.
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
              Comprehensive IT Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From custom workstations to enterprise servers, we provide complete IT solutions
              tailored to your business needs and budget.
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

      {/* Workstation Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Professional Workstation Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professionally built workstations optimized for specific applications and performance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workstationTypes.map((workstation, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-6">
                  <workstation.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                  <CardTitle className="text-2xl text-primary">{workstation.type}</CardTitle>
                  <div className="text-3xl font-bold text-foreground">
                    Starting at {workstation.startingPrice}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Specifications:</h4>
                    <ul className="space-y-2">
                      {workstation.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-muted-foreground text-sm">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Ideal For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {workstation.applications.map((app, appIndex) => (
                        <span key={appIndex} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
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

      {/* Server Solutions */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Enterprise Server Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Robust server infrastructure to support your business operations and data management needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serverSolutions.map((server, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{server.title}</CardTitle>
                  <CardDescription className="text-base">
                    {server.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {server.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Shield className="w-5 h-5 text-primary flex-shrink-0" />
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

      {/* Support Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              IT Support & Maintenance
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive support services to keep your IT infrastructure running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {supportServices.map((support, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl text-primary">{support.title}</CardTitle>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {support.responseTime}
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {support.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-light/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Custom PCs Built</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Servers Deployed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Support Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-muted-foreground">System Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Transform Your IT Infrastructure
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Get custom IT solutions that boost productivity, enhance security, and support your business growth.
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

export default ITInfrastructure;
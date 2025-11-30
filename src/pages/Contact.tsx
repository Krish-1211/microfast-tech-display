import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LoadingWrapper, StaggeredLoadingWrapper } from '@/components/LoadingWrapper';
import { ContactCardSkeleton, FormSkeleton } from '@/components/LoadingSkeletons';
import { TypewriterText, FadeInText } from '@/components/AnimatedText';
import { useToast } from '@/hooks/use-toast';


const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    serviceInterest: '',
    projectDetails: '',
    timeline: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Construct mailto link
      const subject = `New Contact Request from ${formData.firstName} ${formData.lastName}`;
      const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Industry: ${formData.industry}
Service Interest: ${formData.serviceInterest}
Timeline: ${formData.timeline}

Project Details:
${formData.projectDetails}
      `.trim();

      const mailtoLink = `mailto:sales@microfasttech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open email client
      window.location.href = mailtoLink;

      toast({
        title: "Opening Email Client",
        description: "Please send the pre-filled email to complete your request.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        serviceInterest: '',
        projectDetails: '',
        timeline: ''
      });
    } catch (error) {
      console.error('Error opening email client:', error);
      toast({
        title: "Error",
        description: "Failed to open email client. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["229 551 7613"],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["sales@microfasttech.com"],
      description: "Send us your requirements"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["2905 Chastain Meadows Pkwy", "STE 1108, Marietta, GA-30066"],
      description: "Visit our office for consultation"
    },
  ];

  const services = [
    "CCTV Surveillance Systems",
    "PBX Communication Systems",
    "Structured Network Cabling",
    "IT Infrastructure & Custom PCs",
    "General Consultation"
  ];

  const industries = [
    "Hotels & Hospitality",
    "Restaurants & Food Service",
    "Warehouses & Logistics",
    "Corporate Offices",
    "Residential Homes",
    "Retail & Shopping Centers",
    "Other"
  ];

  // Function to open email client
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  // Function to open Google Maps with the address
  const openGoogleMaps = () => {
    const address = "2905 Chastain Meadows Pkwy, STE 1108, Marietta, GA-30066";
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light animate-slideInFromLeft">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            <TypewriterText
              text="Get In Touch"
              delay={100}
              speed={40}
              className="text-white"
            />
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            <FadeInText
              text="Ready to upgrade your technology? Contact us for a consultation and customized solution."
              delay={800}
              className="text-white"
            />
          </p>
          <p className="text-lg text-white max-w-xl mx-auto animate-fadeInUp" style={{ animationDelay: '1.8s' }}>
            Our experts are standing by to help you secure, connect, and communicate more effectively.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to reach us for all your technology solution needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <StaggeredLoadingWrapper
                key={index}
                skeleton={<ContactCardSkeleton />}
                delay={800}
                staggerDelay={200}
                index={index}
              >
                <Card
                  className="h-full text-center hover:shadow-lg transition-shadow cursor-pointer card-red-hover-animation gradient-border-red"
                  onClick={() => {
                    if (info.title === "Email") {
                      handleEmailClick(info.details[0]);
                    } else if (info.title === "Location") {
                      openGoogleMaps();
                    } else if (info.title === "Phone") {
                      window.location.href = `tel:${info.details[0].replace(/\s/g, '')}`;
                    }
                  }}
                >
                  <CardHeader>
                    <info.icon className="h-12 w-12 text-red-primary mx-auto mb-4 animate-bounceSlow" />
                    <CardTitle className="text-xl text-red-dark">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="font-medium text-red-primary underline-animation-red">
                        {detail}
                      </p>
                    ))}
                    <CardDescription className="text-sm mt-3">
                      {info.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </StaggeredLoadingWrapper>
            ))}
          </div>

          {/* Google Map Embed */}
          <div className="mt-16 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.989134999528!2d-84.55138892437093!3d34.05124407315456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5105f81c96d7d%3A0x8d2b6a9b8c7b5e1f!2s2905%20Chastain%20Meadows%20Pkwy%20STE%201108%2C%20Marietta%2C%20GA%2030066!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MicroFast Tech Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fadeInUp">
              <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
                Request a Consultation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below and our team will get back to you within 24 hours with a customized solution.
              </p>
            </div>

            <LoadingWrapper
              skeleton={<FormSkeleton />}
              delay={1200}
            >

              <Card className="shadow-lg gradient-border-red">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-red-dark">First Name *</label>
                        <Input
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="Enter your first name"
                          className="h-12 focus:ring-red"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-red-dark">Last Name *</label>
                        <Input
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Enter your last name"
                          className="h-12 focus:ring-red"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-red-dark">Email *</label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@company.com"
                          className="h-12 focus:ring-red"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-red-dark">Phone</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="h-12 focus:ring-red"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-red-dark">Company Name</label>
                        <Input
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your company name"
                          className="h-12 focus:ring-red"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-red-dark">Industry</label>
                        <Select value={formData.industry} onValueChange={(value) => setFormData({ ...formData, industry: value })}>
                          <SelectTrigger className="h-12 focus:ring-red">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {industries.map((industry) => (
                              <SelectItem key={industry} value={industry.toLowerCase().replace(/\s+/g, '-')}>
                                {industry}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-red-dark">Service Interest</label>
                      <Select value={formData.serviceInterest} onValueChange={(value) => setFormData({ ...formData, serviceInterest: value })}>
                        <SelectTrigger className="h-12 focus:ring-red">
                          <SelectValue placeholder="Select the service you're interested in" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-red-dark">Project Details</label>
                      <Textarea
                        value={formData.projectDetails}
                        onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                        placeholder="Please describe your project requirements and any specific needs..."
                        className="min-h-[120px] focus:ring-red"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-red-dark">Timeline</label>
                      <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                        <SelectTrigger className="h-12 focus:ring-red">
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="3-months">Within 3 months</SelectItem>
                          <SelectItem value="6-months">Within 6 months</SelectItem>
                          <SelectItem value="planning">Just planning ahead</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full h-12 text-lg bg-red text-white hover:bg-red-dark btn-red-hover"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy. We'll only use your information to respond to your inquiry.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </LoadingWrapper>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Why Choose MicroFast Tech?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <CheckCircle className="h-16 w-16 text-red-primary mx-auto mb-4 animate-bounceSlow" />
              <h3 className="text-xl font-bold mb-2 text-red-dark">Expert Team</h3>
              <p className="text-muted-foreground">Certified professionals with years of experience in technology solutions.</p>
            </div>
            <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <CheckCircle className="h-16 w-16 text-red-primary mx-auto mb-4 animate-bounceSlow" />
              <h3 className="text-xl font-bold mb-2 text-red-dark">Quality Guarantee</h3>
              <p className="text-muted-foreground">All installations come with comprehensive warranties and ongoing support.</p>
            </div>
            <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <CheckCircle className="h-16 w-16 text-red-primary mx-auto mb-4 animate-bounceSlow" />
              <h3 className="text-xl font-bold mb-2 text-red-dark">Fast Response</h3>
              <p className="text-muted-foreground">Quick turnaround times and 24/7 emergency support when you need it.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
import { useState } from 'react';
import { Play, CheckCircle, ArrowRight, Users, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { TypewriterText, FadeInText } from '@/components/AnimatedText';

const StartProject = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: "Project Details", description: "Tell us about your needs" },
    { id: 2, title: "Timeline & Budget", description: "When and how much" },
    { id: 3, title: "Contact Info", description: "How to reach you" },
    { id: 4, title: "Review", description: "Confirm your project" }
  ];

  const projectTypes = [
    "CCTV Surveillance System",
    "PBX Communication System", 
    "Structured Network Cabling",
    "IT Infrastructure Setup",
    "Custom Solution"
  ];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Start Your Project - MicroFast Tech"
        description="Begin your technology project with MicroFast Tech. Get started with our simple project planning process."
      />
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light animate-slideInFromLeft">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            <TypewriterText 
              text="Start Your Project" 
              delay={100}
              speed={60}
              className="text-white"
            />
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            <FadeInText 
              text="Ready to transform your technology? Let's begin your journey to better security, communication, and infrastructure."
              delay={1000}
              className="text-white"
            />
          </p>
          <div className="flex items-center justify-center space-x-2 animate-fadeInUp" style={{ animationDelay: '1.5s' }}>
            <Play className="h-6 w-6 text-white" />
            <span className="text-white text-lg">Simple 4-step process</span>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                    currentStep >= step.id 
                      ? 'bg-red text-white border-red' 
                      : 'bg-background text-muted-foreground border-muted-foreground'
                  }`}>
                    {currentStep > step.id ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <span className="font-semibold">{step.id}</span>
                    )}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p className={`text-sm font-medium ${
                      currentStep >= step.id ? 'text-red' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-muted-foreground mx-4 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-red-primary">
                  Step {currentStep}: {steps[currentStep - 1].title}
                </CardTitle>
                <CardDescription>
                  {steps[currentStep - 1].description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Project Details */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-red-dark mb-2 block">
                        Project Type *
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your project type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-red-dark mb-2 block">
                        Project Description *
                      </label>
                      <Textarea 
                        placeholder="Describe your project requirements, goals, and any specific needs..."
                        rows={4}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-red-dark mb-2 block">
                        Location/Property Type
                      </label>
                      <Input placeholder="e.g., Office building, Restaurant, Warehouse..." />
                    </div>
                  </div>
                )}

                {/* Step 2: Timeline & Budget */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-red-dark mb-2 block">
                        Preferred Timeline *
                      </label>
                      <Select>
                        <SelectTrigger>
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
                    
                    <div>
                      <label className="text-sm font-medium text-red-dark mb-2 block">
                        Project Priority
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="How urgent is this project?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">High - Need to start immediately</SelectItem>
                          <SelectItem value="medium">Medium - Within a few weeks</SelectItem>
                          <SelectItem value="low">Low - Flexible timing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-red-dark mb-2 block">
                        Additional Requirements
                      </label>
                      <Textarea 
                        placeholder="Any special requirements, constraints, or considerations..."
                        rows={3}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Info */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-red-dark mb-2 block">
                          First Name *
                        </label>
                        <Input placeholder="Your first name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-red-dark mb-2 block">
                          Last Name *
                        </label>
                        <Input placeholder="Your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-red-dark mb-2 block">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="your.email@company.com" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-red-dark mb-2 block">
                        Phone Number *
                      </label>
                      <Input type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-red-dark mb-2 block">
                        Company Name
                      </label>
                      <Input placeholder="Your company name" />
                    </div>
                  </div>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <CheckCircle className="h-16 w-16 text-red-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-red-primary mb-2">
                        Ready to Submit Your Project
                      </h3>
                      <p className="text-muted-foreground">
                        Review your information and submit your project request
                      </p>
                    </div>
                    
                    <div className="bg-secondary/30 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">What happens next?</h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-red-primary" />
                          <span>We'll review your project within 24 hours</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-red-primary" />
                          <span>Our expert will contact you to discuss details</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-red-primary" />
                          <span>We'll provide a detailed proposal and timeline</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <Button 
                    variant="outline" 
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>
                  
                  {currentStep < steps.length ? (
                    <Button onClick={nextStep} className="bg-red text-white hover:bg-red-dark">
                      Next Step
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Button className="bg-red text-white hover:bg-red-dark">
                      Submit Project
                      <CheckCircle className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-primary mb-4">
              Why Start Your Project With Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-16 w-16 text-red-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-red-dark">Expert Team</h3>
              <p className="text-muted-foreground">
                Certified professionals with years of experience in technology solutions.
              </p>
            </div>
            <div className="text-center">
              <Clock className="h-16 w-16 text-red-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-red-dark">Fast Response</h3>
              <p className="text-muted-foreground">
                Quick project evaluation and detailed proposals within 24 hours.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-16 w-16 text-red-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-red-dark">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                All projects come with comprehensive warranties and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartProject;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Clock, CheckCircle, Briefcase } from "lucide-react";

const WorkplaceYoga = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">Workplace Yoga</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Corporate wellness programs designed to reduce workplace stress and enhance employee wellbeing
          </p>
        </div>

        <div className="space-y-8">
          {/* Program Overview */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Building2 className="h-6 w-6 mr-2" />
                Corporate Wellness Solutions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our Workplace Yoga programs are specifically designed to address the unique stressors and challenges 
                of modern work environments. We bring therapeutic yoga practices directly to your workplace, 
                helping employees manage stress, improve focus, and enhance overall wellbeing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From desk-based stretches to full wellness sessions, our programs are tailored to fit into busy 
                corporate schedules while delivering maximum benefit for stress reduction and productivity enhancement.
              </p>
            </CardContent>
          </Card>

          {/* Program Options */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Program Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">Desk-Based Sessions (15-30 minutes)</h4>
                  <p className="text-sm text-muted-foreground">
                    Quick stress-relief practices that can be done at the desk without changing clothes
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">Lunch Break Classes (45-60 minutes)</h4>
                  <p className="text-sm text-muted-foreground">
                    Full yoga sessions including movement, breathing, and relaxation techniques
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">Wellness Workshops</h4>
                  <p className="text-sm text-muted-foreground">
                    Educational sessions on stress management, mindfulness, and healthy lifestyle practices
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">Executive Programs</h4>
                  <p className="text-sm text-muted-foreground">
                    Specialized sessions for leadership teams focusing on decision-making clarity and stress resilience
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Corporate Benefits */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <Briefcase className="h-5 w-5 mr-2" />
                Corporate Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Reduced employee stress levels",
                  "Improved workplace productivity",
                  "Decreased absenteeism",
                  "Enhanced team collaboration",
                  "Better employee retention",
                  "Improved company culture",
                  "Lower healthcare costs",
                  "Increased job satisfaction"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Employee Benefits */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Employee Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Stress and anxiety reduction",
                  "Improved focus and concentration",
                  "Better work-life balance",
                  "Enhanced physical wellbeing",
                  "Reduced back and neck pain",
                  "Improved energy levels",
                  "Better sleep quality",
                  "Emotional resilience building"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Implementation */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Easy Implementation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Flexible Scheduling:</strong> Sessions designed to fit corporate schedules<br/>
                  <strong>Minimal Space Required:</strong> Conference rooms or small spaces work perfectly<br/>
                  <strong>No Equipment Needed:</strong> All practices can be done with regular work attire<br/>
                  <strong>Customized Programs:</strong> Tailored to your company's specific needs and culture
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button className="bg-gradient-primary shadow-medium text-lg px-8 py-3">
              Transform Your Workplace
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Contact us to discuss a customized workplace wellness program for your organization
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkplaceYoga;
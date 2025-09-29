import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Clock, Heart, Brain, Calendar, CheckCircle, User, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Services = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    condition: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Request Sent",
      description: "We'll contact you within 24 hours to schedule your appointment.",
    });
    setFormData({ name: "", email: "", phone: "", condition: "", message: "" });
  };

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">Consultation Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Personalized yoga therapy programs designed by Dr. Juhi Gautam to address your specific health needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Service Information */}
          <div className="space-y-8">
            {/* What is a YogaPhysician */}
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <User className="h-6 w-6 mr-2" />
                  What is a YogaPhysician?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A YogaPhysician uses medical knowledge and the physiology of the human body, integrated with yoga science 
                  and traditional systems of healing, to create holistic care plans addressing mental, physical, emotional, 
                  and spiritual needs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The YogaPhysician blends <strong>evidence-based yoga</strong> with modern medicine. By introducing yoga 
                  and meditative techniques, patients are empowered to handle daily stress and focus on preventive medicine 
                  to achieve optimal health.
                </p>
              </CardContent>
            </Card>

            {/* Programs Offered */}
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Specialized Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      name: "Heart Yoga Pranayama Program (HYPP)",
                      description: "For hypertension and cardiac conditions such as ischemic heart disease and heart failure"
                    },
                    {
                      name: "Yoga Nidra and Pranayama Program (YNPPS)",
                      description: "Specialized program for sleep disorders and insomnia"
                    },
                    {
                      name: "Kundalini Yoga Program (KYP)",
                      description: "For obsessive compulsive disorder (OCD) and anxiety-related conditions"
                    },
                    {
                      name: "Therapeutic Yoga Programs",
                      description: "For anxiety (TYPPA), depression (TYPPD), and stress (TYPPS)"
                    },
                    {
                      name: "Chanting Yoga Program (CYPO)",
                      description: "Revolutionary approach for obesity and weight management"
                    },
                    {
                      name: "Kundalini-based Yogic Meditation (KYMP)",
                      description: "For psychosomatic disorders and mental wellness"
                    }
                  ].map((program, index) => (
                    <div key={index} className="p-4 rounded-lg bg-secondary/30">
                      <h4 className="font-semibold text-primary mb-1">{program.name}</h4>
                      <p className="text-sm text-muted-foreground">{program.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Process Details */}
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Consultation Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Initial Consultation (2 hours)</p>
                    <p className="text-sm text-muted-foreground">Detailed medical history, lifestyle review, and condition assessment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Personalized Program Design</p>
                    <p className="text-sm text-muted-foreground">Tailored therapeutic yoga program addressing your specific needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Ongoing Support</p>
                    <p className="text-sm text-muted-foreground">Follow-up visits, telephone consultations, and online sessions</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Typical Duration:</strong> 12-24 months<br/>
                    <strong>Sessions:</strong> 2-3 per week (1.5-2 hours each)<br/>
                    <strong>Format:</strong> Individual or group sessions available
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Booking Form */}
          <div>
            <Card className="shadow-strong border-0 bg-gradient-card sticky top-20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Calendar className="h-6 w-6 mr-2" />
                  Book Your Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="condition">Primary Health Concern</Label>
                    <Select onValueChange={(value) => setFormData({...formData, condition: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your main concern" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hypertension">Hypertension / Heart Conditions</SelectItem>
                        <SelectItem value="anxiety">Anxiety / Stress</SelectItem>
                        <SelectItem value="depression">Depression</SelectItem>
                        <SelectItem value="sleep">Sleep Disorders</SelectItem>
                        <SelectItem value="pain">Chronic Pain</SelectItem>
                        <SelectItem value="obesity">Weight Management</SelectItem>
                        <SelectItem value="workplace">Workplace Stress</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Please describe your symptoms, current medications, or any specific concerns..."
                      rows={4}
                      className="focus:ring-primary"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-primary shadow-medium">
                    Request Consultation
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    We'll contact you within 24 hours to schedule your initial consultation. 
                    All information is kept strictly confidential.
                  </p>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <Card className="shadow-medium border-0 bg-gradient-card mt-6">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">info@yogaphysician.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">+44 (0) 20 7XXX XXXX</span>
                </div>
                <div className="mt-4 p-3 bg-secondary/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Emergency Note:</strong> Your YogaPhysician is not your GP. 
                    For urgent medical matters, please contact your doctor or emergency services.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Clock, Star, Quote, MessageCircle } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    const phoneNumber = "447XXXXXXXXX"; // Replace with actual WhatsApp number
    const message = encodeURIComponent("Hello Dr. Juhi Gautam, I would like to inquire about your yoga therapy programs. Could we schedule a consultation?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const testimonials = [
    {
      name: "Christopher",
      role: "Consultant geriatric medicine, London",
      text: "Since practicing chanting yoga, I feel much calmer. I sail through my management meetings at work now; before, I couldn't stand them. My day goes much smoother. 20–30 minutes in the morning helps me to completely relax and calm myself for the day."
    },
    {
      name: "David",
      role: "Consultant Cardiology, London",
      text: "I felt less angry and anxious in just 3 weeks. I feel kinder and my blood pressure has reduced from 156/94 to 117/78. My alcohol consumption reduced and I was able to stop drinking in just 6 weeks. I definitely recommend this to others as a life changer."
    },
    {
      name: "Lynda",
      role: "Volunteer MIND, UK",
      text: "It changed my life. I was anxious before and on medications for anxiety and antidepressants; now I feel calmer and happier. I have high levels of energy throughout the day."
    },
    {
      name: "Caroline Fuggle",
      role: "Teacher, UK",
      text: "Since I have been on the program I feel my life is much balanced. I have more tolerance and feel much stronger in coping with difficult situations and everyday stress. It's definitely the best program for wellness."
    },
    {
      name: "Claudia Zeff",
      role: "Heart disease patient",
      text: "Despite living what doctors described as a 'virtuous life', I was at risk of heart disease. After the yoga program, I am not only now medication-free, but my damaged heart had repaired itself. It has made a massive difference - the difference between being healthy and being unhealthy."
    },
    {
      name: "Lucy",
      role: "Psychotherapist, UK",
      text: "I suffered with flying phobia for 17 years. The practice of chanting yoga completely rid me of the fear of flying."
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">Contact & Testimonials</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with us and read what our patients have to say
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Get in Touch Section */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center py-8">
                <MessageCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Connect with Dr. Juhi Gautam</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Ready to start your healing journey? Connect with Dr. Gautam directly via WhatsApp for 
                  personalized consultation and program information.
                </p>
                
                <Button 
                  onClick={openWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white shadow-medium mb-4"
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Message on WhatsApp
                </Button>
                
                <div className="bg-secondary/30 rounded-lg p-4 text-sm text-muted-foreground">
                  <p className="mb-2"><strong>What to expect:</strong></p>
                  <ul className="text-left space-y-1">
                    <li>• Initial consultation discussion</li>
                    <li>• Personalized treatment plan</li>
                    <li>• Program recommendations</li>
                    <li>• Scheduling availability</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@chantinyoga.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+44 (0) 20 7XXX XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">London, UK</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Consultation Hours</p>
                    <p className="text-muted-foreground">By appointment only</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Professional Memberships</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">• Royal College of Physicians (MRCP)</p>
                <p className="text-muted-foreground">• Royal College of General Practitioners (MRCGP)</p>
                <p className="text-muted-foreground">• British Heart Foundation (Training)</p>
                <p className="text-muted-foreground">• 25+ Years Yoga Practice & Teaching</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-16" />

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Patient Testimonials</h2>
            <p className="text-lg text-muted-foreground">
              Real stories from patients who have experienced transformation through chantinyoga programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-medium border-0 bg-gradient-card h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-accent mr-2" />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-accent fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Success Story */}
        <Card className="shadow-strong border-0 bg-gradient-card mt-12">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Featured Success Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              <strong>Claudia Zeff's Heart Recovery:</strong> Despite living what doctors described as a 'virtuous life', 
              Claudia was at risk of heart disease due to genetic predisposition. A recent scan had showed one of the walls 
              in her heart was beginning to thicken — a worrying sign.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              After completing Dr. Gautam's intensive yoga meditation program, focusing on pranayam yoga and chanting, 
              Claudia's blood pressure dropped from 156/105 to 107/83. She is now completely medication-free, and regular 
              scans show the thickness of the damaged heart wall is back to normal.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <em>"It has made a massive difference," she said. "It is the difference between being healthy and being unhealthy. 
              I will do it forever."</em>
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              * This case was featured in national UK magazines including GP Life, demonstrating the integration of 
              yoga therapy with conventional cardiology care.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
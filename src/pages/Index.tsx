import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Stethoscope, Brain, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-yoga.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Yoga for Health, Mind, and Balance
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Integrating ancient yoga wisdom with modern medical expertise for complete healing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-strong">
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">
            Welcome to chantinyoga
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground mb-6">
              <strong>Quality of life</strong> is desired and expected, however, a serious question needs to be answered – 
              <strong> "How much have we achieved and at what cost"</strong>.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We effortlessly tend to accept the promise of <strong>biological medicine</strong> as it gives an explanation 
              to the cause of our misery, blaming the pathological process rather than changing our lifestyle.
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>Yoga and meditation</strong> introduce a person to good physical and mental health. It helps in 
              self-actualization, higher thinking, emotional balance and above all brings true happiness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Holistic Healing</h3>
                <p className="text-muted-foreground">
                  Integrating traditional yoga science with modern medicine for complete wellness.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardContent className="p-8 text-center">
                <Stethoscope className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Medical Expertise</h3>
                <p className="text-muted-foreground">
                  Dr. Juhi Gautam, MBBS, MRCP, MRCGP with 25+ years of yoga practice.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardContent className="p-8 text-center">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Evidence-Based</h3>
                <p className="text-muted-foreground">
                  Scientific and evidence-based yoga programs for various health conditions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Yoga Helps With
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Evidence-based medicine has found yoga efficacious in treating various chronic conditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Hypertension & Heart Conditions",
              "Chronic Pain & Musculoskeletal Problems",
              "Anxiety & Depression",
              "Sleep Disorders & Insomnia",
              "Obesity & Eating Disorders",
              "Stress & Workplace Burnout",
              "Psychiatric Disorders",
              "Epilepsy & Neurological Conditions",
              "Cancer Support & Recovery"
            ].map((condition, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-card shadow-soft">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-card-foreground">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Your Healing Journey Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience personalized yoga therapy programs designed specifically for your health needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/services" className="flex items-center">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/about">Learn About Dr. Juhi</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

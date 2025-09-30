import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Clock, CheckCircle } from "lucide-react";

const TherapeuticYoga = () => {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Therapeutic Yoga Programs</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Evidence-based yoga therapy for anxiety, depression, and stress management
          </p>
        </div>

        <div className="space-y-8">
          {/* Program Overview */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Brain className="h-6 w-6 mr-2" />
                Therapeutic Yoga Approach
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our Therapeutic Yoga Programs include specialized protocols for mental health conditions:
                TYPPA (Therapeutic Yoga Program for Anxiety), TYPPD (Therapeutic Yoga Program for Depression), 
                and TYPPS (Therapeutic Yoga Program for Stress).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These evidence-based programs combine traditional yoga practices with modern psychological 
                understanding to provide holistic treatment for mental health challenges.
              </p>
            </CardContent>
          </Card>

          {/* Program Types */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Specialized Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">TYPPA - Anxiety Program</h4>
                  <p className="text-sm text-muted-foreground">
                    Focused breathing techniques, grounding practices, and gentle movements to reduce anxiety symptoms
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">TYPPD - Depression Program</h4>
                  <p className="text-sm text-muted-foreground">
                    Energizing sequences, mood-lifting practices, and meditation techniques for emotional balance
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">TYPPS - Stress Program</h4>
                  <p className="text-sm text-muted-foreground">
                    Stress-release techniques, relaxation methods, and mindfulness practices for daily life
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Program Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Reduced anxiety symptoms",
                  "Improved mood regulation",
                  "Better stress management",
                  "Enhanced self-awareness",
                  "Improved sleep patterns",
                  "Increased emotional resilience",
                  "Better coping strategies",
                  "Enhanced overall well-being"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button className="bg-gradient-primary shadow-medium text-lg px-8 py-3">
              Start Your Therapeutic Journey
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Personalized therapeutic yoga programs tailored to your specific needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapeuticYoga;
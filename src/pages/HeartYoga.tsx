import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Clock, CheckCircle } from "lucide-react";

const HeartYoga = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">Heart Yoga Pranayama Program</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized breathing techniques and yoga practices for heart health and cardiovascular wellness
          </p>
        </div>

        <div className="space-y-8">
          {/* Program Overview */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Heart className="h-6 w-6 mr-2" />
                About Heart Yoga Pranayama
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The Heart Yoga Pranayama Program (HYPP) is specifically designed for individuals with hypertension, 
                cardiac conditions such as ischemic heart disease, and heart failure. This evidence-based program 
                combines traditional pranayama techniques with modern cardiovascular medicine principles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through controlled breathing exercises, gentle yoga postures, and meditation techniques, 
                participants learn to regulate their cardiovascular system naturally, reducing stress on the heart 
                and improving overall cardiac function.
              </p>
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
                  "Reduced blood pressure",
                  "Improved heart rate variability",
                  "Enhanced circulation",
                  "Stress reduction",
                  "Better sleep quality",
                  "Increased energy levels",
                  "Improved emotional balance",
                  "Enhanced quality of life"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Program Structure */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Program Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">Phase 1: Foundation (Weeks 1-4)</h4>
                  <p className="text-sm text-muted-foreground">Basic breathing techniques, gentle postures, and relaxation methods</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">Phase 2: Development (Weeks 5-12)</h4>
                  <p className="text-sm text-muted-foreground">Advanced pranayama, therapeutic sequences, and heart-specific practices</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">Phase 3: Maintenance (Weeks 13-24)</h4>
                  <p className="text-sm text-muted-foreground">Personal practice development and lifestyle integration</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button className="bg-gradient-primary shadow-medium text-lg px-8 py-3">
              Join Heart Yoga Program
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Consult with Dr. Juhi Gautam to determine if this program is right for you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartYoga;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Brain, Clock, CheckCircle, Sparkles } from "lucide-react";

const KundaliniMeditation = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">Kundalini Meditation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Awaken your inner potential through transformative Kundalini practices for mental wellness and spiritual growth
          </p>
        </div>

        <div className="space-y-8">
          {/* Program Overview */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Zap className="h-6 w-6 mr-2" />
                Kundalini-based Yogic Meditation (KYMP)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The Kundalini-based Yogic Meditation Program (KYMP) is designed for individuals dealing with 
                psychosomatic disorders, stress-related conditions, and those seeking deeper mental wellness. 
                This powerful practice awakens the dormant spiritual energy within.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through specific breathing techniques, mantras, mudras, and meditation practices, participants 
                learn to channel and balance their life force energy, leading to profound healing and transformation.
              </p>
            </CardContent>
          </Card>

          {/* Specialized Programs */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Program Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">Kundalini Yoga Program (KYP)</h4>
                  <p className="text-sm text-muted-foreground">
                    Specialized for Obsessive Compulsive Disorder (OCD) and anxiety-related conditions
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">Psychosomatic Healing</h4>
                  <p className="text-sm text-muted-foreground">
                    Addresses mind-body disorders where emotional stress manifests as physical symptoms
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">Mental Wellness Enhancement</h4>
                  <p className="text-sm text-muted-foreground">
                    Develops mental clarity, emotional balance, and spiritual awareness
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Practice Components */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <Sparkles className="h-5 w-5 mr-2" />
                Practice Components
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Kundalini breathing techniques",
                  "Sacred mantra meditation",
                  "Energy awakening postures",
                  "Chakra balancing practices",
                  "Mudra (hand gesture) work",
                  "Visualization techniques",
                  "Silent meditation",
                  "Energy sensing exercises"
                ].map((component, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{component}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Transformative Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Reduced OCD symptoms",
                  "Enhanced mental clarity",
                  "Improved emotional regulation",
                  "Increased spiritual awareness",
                  "Better stress management",
                  "Heightened intuition",
                  "Balanced energy levels",
                  "Inner peace and calm"
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
              Awaken Your Potential
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Begin your transformative journey with Kundalini meditation under expert guidance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KundaliniMeditation;
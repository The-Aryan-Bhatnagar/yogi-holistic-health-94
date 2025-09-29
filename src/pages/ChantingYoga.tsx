import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Weight, Clock, CheckCircle, Play } from "lucide-react";

const ChantingYoga = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">Chanting Yoga Program</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary approach to weight management through the power of sacred sound and vibration
          </p>
        </div>

        <div className="space-y-8">
          {/* Program Overview */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Music className="h-6 w-6 mr-2" />
                Chanting Yoga for Obesity (CYPO)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The Chanting Yoga Program for Obesity (CYPO) is a revolutionary approach that combines the ancient 
                practice of mantra chanting with modern understanding of metabolism and weight management. This unique 
                program uses specific sound vibrations to stimulate the body's natural healing mechanisms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through systematic chanting practices, participants experience improved metabolism, reduced stress-related 
                eating, enhanced mindfulness around food, and a deeper connection with their body's natural rhythms.
              </p>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary">How Chanting Helps Weight Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">Metabolic Activation</h4>
                  <p className="text-sm text-muted-foreground">
                    Specific sound frequencies stimulate the vagus nerve, improving digestion and metabolic function
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">Stress Reduction</h4>
                  <p className="text-sm text-muted-foreground">
                    Chanting reduces cortisol levels, helping to prevent stress-induced weight gain
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">Mindful Eating</h4>
                  <p className="text-sm text-muted-foreground">
                    Regular practice develops awareness and self-control around food choices and eating habits
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Practice Elements */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <Play className="h-5 w-5 mr-2" />
                Practice Elements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Sacred mantra chanting",
                  "Breathing coordination",
                  "Gentle movement sequences",
                  "Meditation practices",
                  "Dietary awareness techniques",
                  "Lifestyle counseling",
                  "Progress tracking",
                  "Community support"
                ].map((element, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{element}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Program Duration */}
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Program Duration & Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Duration:</strong> 6-12 months<br/>
                  <strong>Sessions:</strong> 3-4 per week (45-60 minutes each)<br/>
                  <strong>Format:</strong> Group sessions with individual guidance<br/>
                  <strong>Follow-up:</strong> Monthly progress assessments
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button className="bg-gradient-primary shadow-medium text-lg px-8 py-3">
              Begin Your Transformation
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Start your journey to sustainable weight management through the power of chanting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChantingYoga;
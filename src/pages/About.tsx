import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Heart, Stethoscope, Award, BookOpen, Users } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

const About = () => {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">About Dr. Juhi Gautam</h1>
          <p className="text-lg sm:text-xl text-muted-foreground">MBBS, MRCP, MRCGP - chantinyoga</p>
        </div>

        {/* Doctor Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardContent className="p-6">
                <img 
                  src={doctorPortrait} 
                  alt="Dr. Juhi Gautam" 
                  className="w-full rounded-lg mb-6"
                />
                <div className="space-y-3">
                  <Badge variant="secondary" className="w-full justify-center py-2">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    MBBS (1997)
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-center py-2">
                    <Award className="h-4 w-4 mr-2" />
                    MRCP (2002)
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-center py-2">
                    <Stethoscope className="h-4 w-4 mr-2" />
                    MRCGP
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-center py-2">
                    <Heart className="h-4 w-4 mr-2" />
                    25+ Years Yoga Practice
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="shadow-medium border-0 bg-gradient-card h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Professional Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Dr. Juhi Gautam</strong> has been practising yoga for over 25 years. She grew up in a Vedic culture 
                  in one of the holy places in India, where Ayurveda and yogic wisdom were part of her ancestral lineage. 
                  Her parents practiced a traditional lifestyle of yoga, pranayama, meditation, vegetarianism, prayers, 
                  chanting, satsang, and scripture study.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Juhi graduated as a doctor in 1997 from Bangalore, India, and moved to the UK in 1998 to further her 
                  academic qualifications. She became a member of the <strong>Royal College of Physicians (RCP)</strong> in 2002 
                  and is also a member of the <strong>Royal College of General Practitioners (RCGP)</strong> in London.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  During her internal medicine career, she trained in cardiology under Professor Beevers of the British 
                  Heart Foundation and interventional cardiologist Richard Carroll at St. John's Wood St. Elizabeth Hospital, London.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission & Approach */}
        <Card className="shadow-medium border-0 bg-gradient-card mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Heart className="h-6 w-6 mr-2" />
              Mission & Approach
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Her observation of Western medicine was that it was largely driven by the pharmaceutical industry and 
              lacked a holistic touch. While working as a specialist registrar at leading hospitals such as Chelsea 
              Westminster and Charing Cross, she transitioned into general practice to fulfill her dream of providing 
              holistic care in the community.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By combining <strong>traditional yoga science</strong> with <strong>conventional medicine</strong>, she now 
              helps patients heal in a complete way. Dr. Gautam believes that disease develops due to imbalance — a 
              disharmony of <strong>mind, body, and spirit</strong>. Integrating treatment modalities that address all 
              three vital components can restore homeostasis.
            </p>
          </CardContent>
        </Card>

        {/* Innovations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Chanting Yoga
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                She is the founder of <strong>Chanting Yoga</strong>, a revolutionary and preventive health method 
                that addresses the modern lifestyle on physical, mental, and spiritual levels.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Healthcare Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Her stress-relieving techniques are gaining popularity in the corporate sector, schools, universities, 
                and both NHS and private healthcare settings.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-16" />

        {/* Evidence Base Section */}
        <Card className="shadow-medium border-0 bg-gradient-card mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Evidence Base & Research</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Today, there is a paradigm shift around the concepts of health, illness, and treatment options. In the recent past, 
              efficacy and therapeutic effects of yoga have been reported in various medical journals using latest technology, 
              suggesting that yoga has scientific basis.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>What causes diseases? What is the role of oxygen?</strong> Disease arises when there is an imbalance 
              in the body due to negative thoughts and energy. Oxygen is vital for life and life is about the breaths. 
              A person who maintains the synchronization of breathing leads a healthy and disease free life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Scientists have concluded that the chemical basis of energy production in the body is a chemical called 
              ATP (Adenosine Triphosphate). If the production of this ATP is disrupted, the result is lowered vitality, 
              disease and premature ageing. Oxygen is considered critical for the production of this ATP and pranayam 
              allows us to tap into this vital component.
            </p>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="shadow-soft border border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-xl text-destructive">Important Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="text-muted-foreground">
              Due to the virtual absence of side effects, there are not many contraindications of yoga therapy. However, 
              caution should be exercised in major physical illness like severe cardiovascular disability, spondylosis 
              and bleeding ulcer when present.
            </p>
            <p className="text-muted-foreground">
              Meditation is not recommended in depression with suicidal ideations and psychosis. In such cases, help must 
              be sought from your GP or hospital physician to deal with the acute presentation. 
              <strong> Your chantinyoga practitioner is not your GP.</strong>
            </p>
            <p className="text-muted-foreground">
              Please consult your chantinyoga practitioner before starting yoga and meditation. Yoga is not an immediate or quick 
              remedy to any physical and mental problem. It is recommended that one gets the training from trained 
              personnel with adequate personal experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
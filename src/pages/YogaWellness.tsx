import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Brain, Briefcase, Flower2, Wind, BookOpen } from "lucide-react";

const YogaWellness = () => {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Yoga & Wellness</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive yoga programs integrating traditional wisdom with modern medical understanding
          </p>
        </div>

        {/* Tabs for different sections */}
        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-6 md:mb-8 h-auto gap-2">
            <TabsTrigger value="basics" className="text-xs sm:text-sm px-2 py-2">Yoga Basics</TabsTrigger>
            <TabsTrigger value="medicine" className="text-xs sm:text-sm px-2 py-2">Yoga as Medicine</TabsTrigger>
            <TabsTrigger value="workplace" className="text-xs sm:text-sm px-2 py-2">Workplace Yoga</TabsTrigger>
            <TabsTrigger value="meditation" className="text-xs sm:text-sm px-2 py-2">Meditation</TabsTrigger>
            <TabsTrigger value="pranayama" className="text-xs sm:text-sm px-2 py-2">Pranayama</TabsTrigger>
          </TabsList>

          {/* Yoga Basics */}
          <TabsContent value="basics" className="space-y-8">
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <BookOpen className="h-6 w-6 mr-2" />
                  Understanding Yoga
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Quality of life</strong> is desired and expected, however, a serious question needs to be answered — 
                  <strong> "How much have we achieved and at what cost"</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The Indian sage Patanjali wrote the <strong>original description</strong> of the yoga system in the Yoga Sutra 
                  around <strong>5000 years ago</strong>. This text is a unique blend of theoretical knowledge and practical 
                  application and remains to this day the primary text of yoga.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Yoga facilitates and helps one achieve good physical health, mental and emotional balance, and above all, 
                  true happiness. Yoga needs to be adopted as a lifestyle and not restricted to time, place, person, or situation.
                </p>
              </CardContent>
            </Card>

            {/* Eight Limbs of Yoga */}
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">The Eight Limbs of Yoga (Ashtanga)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Yama",
                      description: "Abstentions or extinction of wrong habits; develops forgiveness, fearlessness, non-violence, truthfulness"
                    },
                    {
                      name: "Niyama", 
                      description: "Moral purification; promotes positive behavior through austerity, contentment, charity, philosophy"
                    },
                    {
                      name: "Asana",
                      description: "Meditation postures maintained for certain time; supports mental, spiritual, and physical health"
                    },
                    {
                      name: "Pranayama",
                      description: "Control of vital breath using breathing exercises; important for physical health and peace of mind"
                    },
                    {
                      name: "Pratyahara",
                      description: "Control of mental activities; withdrawal from perceptual cognition"
                    },
                    {
                      name: "Dharana",
                      description: "Concentration on fewer objects until awareness narrows to one"
                    },
                    {
                      name: "Dhyana",
                      description: "Concentrated meditation, directing full consciousness inward beyond ego"
                    },
                    {
                      name: "Samadhi",
                      description: "Transcendental super-consciousness; perfect absorption beyond worldly bonds"
                    }
                  ].map((limb, index) => (
                    <div key={index} className="p-4 rounded-lg bg-secondary/50">
                      <h4 className="font-semibold text-primary mb-2">{index + 1}. {limb.name}</h4>
                      <p className="text-sm text-muted-foreground">{limb.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Yoga as Medicine */}
          <TabsContent value="medicine" className="space-y-8">
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Heart className="h-6 w-6 mr-2" />
                  Evidence-Based Yoga Medicine
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Evidence-based medicine has found yoga efficacious in treating various conditions. Modern medical research 
                  using latest technology confirms yoga's therapeutic effects reported in medical journals.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {[
                    "Hypertension",
                    "Chronic Pain & Musculoskeletal Problems", 
                    "Obesity & Eating Disorders",
                    "Sleep Issues",
                    "Smoking & Alcohol Dependence",
                    "Epilepsy",
                    "Psoriasis", 
                    "Menopause",
                    "Carpal Tunnel Syndrome",
                    "Cancer",
                    "Sexual Health Issues",
                    "Psychiatric Disorders"
                  ].map((condition, index) => (
                    <Badge key={index} variant="secondary" className="p-3 justify-center">
                      {condition}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Biological Understanding */}
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">The Science Behind Yoga</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Oxygen is vital for life and life is about the breaths.</strong> Scientists have concluded that 
                  the chemical basis of energy production in the body is ATP (Adenosine Triphosphate). Oxygen is considered 
                  critical for ATP production and pranayam allows us to tap into this vital component.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Effects of Yoga Practice:</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                    <li>Improved immune response and sympathetic nervous system regulation</li>
                    <li>Reduced chemical reflex to hypoxia (oxygen deficiency)</li>
                    <li>Enhanced muscle relaxation and optimal posture</li>
                    <li>Increased brain blood flow and oxygenation</li>
                    <li>Voluntary blood pressure control through abdominal breathing</li>
                    <li>Enhanced consciousness and temporary ego dissolution</li>
                    <li>Regulation of neurotransmitters and hormones</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Workplace Yoga */}
          <TabsContent value="workplace" className="space-y-8">
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Briefcase className="h-6 w-6 mr-2" />
                  Yoga at the Workplace
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Dr. Gautam's stress-relieving techniques are gaining popularity in the corporate sector, schools, 
                  and universities. Her innovative approach helps thousands of healthcare professionals and employees 
                  reduce stress and find balance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Workplace yoga programs are designed to address the modern lifestyle challenges faced by professionals, 
                  offering practical solutions that can be implemented during work hours without special equipment or clothing.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="p-4 rounded-lg bg-secondary/30">
                    <h4 className="font-semibold text-primary mb-2">Benefits for Employees</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Reduced workplace stress and anxiety</li>
                      <li>• Improved focus and productivity</li>
                      <li>• Better work-life balance</li>
                      <li>• Enhanced team cohesion</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30">
                    <h4 className="font-semibold text-primary mb-2">Benefits for Organizations</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Reduced absenteeism</li>
                      <li>• Lower healthcare costs</li>
                      <li>• Improved employee retention</li>
                      <li>• Enhanced company culture</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Meditation */}
          <TabsContent value="meditation" className="space-y-8">
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Brain className="h-6 w-6 mr-2" />
                  Meditation & Mindfulness
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  It's a common notion that "I exist because I think", but we need to understand that the cause of our 
                  misery is our thoughts, our defense mechanisms and egos, and meditation is the answer.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through yoga, we can rein this tendency in. The systematic practice of yoga teaches us how to turn inward 
                  and become aware of our true nature. Meditation is the yogic technique that enables us to experience the "self".
                </p>
                
                <div className="bg-secondary/20 p-6 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3">The Three Stages of Consciousness</h4>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li><strong>Emergence of consciousness</strong></li>
                    <li><strong>Enlargement of consciousness</strong></li>
                    <li><strong>Merging of consciousness with cosmic consciousness</strong></li>
                  </ol>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="p-4 rounded-lg bg-accent/10">
                    <h4 className="font-semibold text-primary mb-2">Kundalini Based Meditation</h4>
                    <p className="text-sm text-muted-foreground">
                      Advanced meditation technique focusing on awakening inner energy and consciousness.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/10">
                    <h4 className="font-semibold text-primary mb-2">Chanting Yoga Meditation</h4>
                    <p className="text-sm text-muted-foreground">
                      Revolutionary meditation method combining chanting with traditional yoga practices.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Course Details</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Length:</strong> 8 weeks, 2 sessions per week<br/>
                    <strong>Duration:</strong> 2 hours per session<br/>
                    <strong>Format:</strong> One-to-one or group sessions<br/>
                    <strong>Requirements:</strong> Can be done anywhere - no special clothing needed
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pranayama */}
          <TabsContent value="pranayama" className="space-y-8">
            <Card className="shadow-medium border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Wind className="h-6 w-6 mr-2" />
                  Pranayama - Controlled Breathing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Pranayama is controlled breathing ("prana" = breathing, "yama" = controlled). According to the Vedic scriptures, 
                  the human body is made of five elements: earth (prithvi), water (jal), fire (agni), air (vayu) and ether (space). 
                  Amongst these five elements, air is considered the most essential.
                </p>
                
                <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-muted-foreground font-medium italic">
                    "Oxygen is vital for life and life is about the breaths."
                  </p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  In pranayam, not only is the air in the body inhaled and exhaled, but along with the oxygen there is a 
                  vital force that is taken. This vital force permeates the entire universe and what we inhale and exhale 
                  is only a fragment of it.
                </p>
                
                <div className="bg-secondary/20 p-6 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3">Scientific Understanding</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Scientists have concluded that the chemical basis of energy production in the body is ATP (Adenosine Triphosphate). 
                    If the production of this ATP is disrupted, the result is lowered vitality, disease and premature ageing. 
                    Oxygen is considered critical for the production of this ATP and pranayam allows us to tap into this vital component.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {[
                    {
                      title: "Physical Benefits",
                      points: ["Improved lung capacity", "Better circulation", "Enhanced immunity", "Reduced blood pressure"]
                    },
                    {
                      title: "Mental Benefits", 
                      points: ["Reduced anxiety", "Better focus", "Emotional balance", "Stress relief"]
                    },
                    {
                      title: "Spiritual Benefits",
                      points: ["Inner awareness", "Enhanced consciousness", "Spiritual growth", "Self-realization"]
                    }
                  ].map((category, index) => (
                    <div key={index} className="p-4 rounded-lg bg-accent/10">
                      <h4 className="font-semibold text-primary mb-2">{category.title}</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {category.points.map((point, i) => (
                          <li key={i}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default YogaWellness;
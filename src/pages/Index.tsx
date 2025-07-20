import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  MapPin, 
  Truck, 
  MessageSquare, 
  Brain, 
  DollarSign, 
  Smartphone, 
  Database, 
  Cloud, 
  Wifi,
  ArrowDown,
  ArrowRight,
  Recycle,
  Leaf,
  Users,
  Download,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  ChevronUp
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useState, useEffect } from "react";

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = [
    {
      icon: MapPin,
      title: "GPS-based Collection",
      description: "Real-time location tracking for efficient waste collection routes and optimal resource allocation."
    },
    {
      icon: Truck,
      title: "Smart Task Assignment",
      description: "Intelligent task distribution to collectors based on proximity, capacity, and urgency."
    },
    {
      icon: MessageSquare,
      title: "Citizen Complaint System",
      description: "Direct communication channel for citizens to report waste issues and track resolution."
    },
    {
      icon: Brain,
      title: "Smart Bin Technology",
      description: "IoT-enabled bins with sensors for automatic waste detection and sorting capabilities."
    },
    {
      icon: DollarSign,
      title: "Cashback Rewards",
      description: "Incentivize recycling with cashback rewards and points for proper waste disposal."
    }
  ];

  const techStack = [
    { name: "React Native", icon: Smartphone, description: "Cross-platform mobile development" },
    { name: "Node.js", icon: Cloud, description: "Backend server & API development" },
    { name: "MongoDB", icon: Database, description: "NoSQL database for scalable data storage" },
    { name: "Google Maps", icon: MapPin, description: "GPS tracking & route optimization" },
    { name: "IoT Sensors", icon: Wifi, description: "Smart bin connectivity & monitoring" }
  ];

  const workflow = [
    { step: 1, title: "Citizens Mark Bins", description: "Users report full or problematic bins via the app" },
    { step: 2, title: "Smart Assignment", description: "AI assigns collection tasks to nearby workers" },
    { step: 3, title: "Real-time Updates", description: "Collectors update status and progress in real-time" },
    { step: 4, title: "Smart Sorting", description: "IoT bins automatically detect and sort waste types" },
    { step: 5, title: "Reward System", description: "Citizens earn cashback for proper recycling" }
  ];

  const stats = [
    { number: "10,000+", label: "KG of Waste Tracked", icon: Recycle },
    { number: "70%", label: "Recyclable Materials Sorted", icon: Leaf },
    { number: "5,000+", label: "Citizens Engaged", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">TrashGo</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#features" className="hover:text-primary transition-colors">Features</a>
              <a href="#tech" className="hover:text-primary transition-colors">Technology</a>
              <a href="#impact" className="hover:text-primary transition-colors">Impact</a>
              <a href="#download" className="hover:text-primary transition-colors">Download</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80"></div>
        </div>
        
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                TrashGo
              </h1>
              <p className="text-2xl md:text-3xl mb-4 font-medium">
                Track. Collect. Recycle. Reward.
              </p>
              <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
                Technology-driven urban waste management system that connects citizens, collectors, and smart infrastructure for a cleaner, more sustainable future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button className="btn-hero group">
                  <Download className="mr-2 h-5 w-5" />
                  Download APK
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="btn-hero-outline group">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ArrowDown className="h-6 w-6" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">About TrashGo</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Urban waste management faces critical challenges with inefficient collection routes, 
              overflowing bins, and lack of citizen engagement. TrashGo bridges the gap between 
              technology and sustainability.
            </p>
            <p className="text-2xl font-semibold text-primary">
              "Technology-driven urban waste management system."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto glow-effect">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A seamless workflow that connects every stakeholder in the waste management ecosystem
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {workflow.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl float-animation">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  {index < workflow.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full">
                      <ArrowRight className="h-6 w-6 text-primary mx-auto" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="py-20 section-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Tech Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powered by cutting-edge technologies for scalable and efficient waste management
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {techStack.map((tech, index) => (
              <Card key={index} className="feature-card text-center group hover:scale-105">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto group-hover:glow-effect transition-all">
                    <tech.icon className="h-8 w-8 text-secondary-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Bin Innovation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Smart Bin Innovation</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                      <Wifi className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Automatic Waste Detection</h3>
                      <p className="text-muted-foreground">IoT sensors automatically detect waste types and fill levels in real-time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center flex-shrink-0">
                      <Recycle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Smart Sorting System</h3>
                      <p className="text-muted-foreground">Advanced sorting for metal, plastic, and organic waste with 95% accuracy.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSign className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Circular Economy Rewards</h3>
                      <p className="text-muted-foreground">Earn cashback and points for proper waste disposal, creating a sustainable incentive system.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center mx-auto">
                  <div className="text-center">
                    <Brain className="h-32 w-32 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold">Smart Bin Mockup</p>
                    <p className="text-sm text-muted-foreground">IoT-Enabled Waste Sorting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 section-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Environmental Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Creating measurable positive change in urban waste management and environmental sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="stats-card text-center">
                <div className="mb-4">
                  <stat.icon className="h-12 w-12 text-primary mx-auto" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              By connecting technology with environmental responsibility, TrashGo is building a cleaner, 
              more sustainable future for urban communities worldwide. Join thousands of citizens already 
              making a difference in their neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Download TrashGo today and become part of the smart waste management revolution
            </p>
            
            <div className="space-y-8">
              <Button className="btn-hero text-xl px-12 py-6">
                <Download className="mr-3 h-6 w-6" />
                Download TrashGo APK
              </Button>
              
              <div className="flex items-center justify-center space-x-4 text-muted-foreground">
                <Smartphone className="h-5 w-5" />
                <span>Compatible with Android devices</span>
              </div>
              
              <div className="border-2 border-dashed border-border rounded-lg p-8">
                <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-muted-foreground text-sm">QR Code</span>
                </div>
                <p className="text-sm text-muted-foreground">Scan to download instantly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">TrashGo</h3>
              <p className="text-background/80 mb-6">
                Smart waste management for sustainable urban futures. 
                Track. Collect. Recycle. Reward.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                  <Mail className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                <a href="#about" className="block text-background/80 hover:text-background transition-colors">About</a>
                <a href="#features" className="block text-background/80 hover:text-background transition-colors">Features</a>
                <a href="#tech" className="block text-background/80 hover:text-background transition-colors">Technology</a>
                <a href="#impact" className="block text-background/80 hover:text-background transition-colors">Impact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-3 text-background/80">
                <p>Get in touch for partnerships</p>
                <p>or technical inquiries</p>
                <Button variant="ghost" className="text-background hover:bg-background/10 p-0 h-auto font-normal">
                  hello@trashgo.app
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
            <p>&copy; 2024 TrashGo. Licensed under MIT License.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary hover:bg-primary-dark shadow-lg z-50"
          size="icon"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default Index;

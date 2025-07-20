import React, { useEffect } from "react";
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
import trashgoLogo from "@/assets/trashgo-logo.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from "react";

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });

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
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={trashgoLogo} alt="TrashGo Logo" className="w-10 h-10 rounded-lg object-cover" />
              <span className="text-2xl font-bold text-primary">TrashGo</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">How It Works</a>
              <a href="#tech" className="text-muted-foreground hover:text-primary transition-colors font-medium">Technology</a>
              <a href="#impact" className="text-muted-foreground hover:text-primary transition-colors font-medium">Impact</a>
              <a href="#download" className="text-muted-foreground hover:text-primary transition-colors font-medium">Download</a>
            </div>
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-2 rounded-xl font-semibold transition-all hover:scale-105">
              Download APK
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <div data-aos="fade-up" className="mb-8">
              <img src={trashgoLogo} alt="TrashGo" className="w-24 h-24 mx-auto mb-6 rounded-2xl shadow-lg" />
              <h1 className="text-6xl md:text-8xl font-bold text-primary mb-6 leading-tight">
                TrashGo
              </h1>
            </div>
            <p data-aos="fade-up" data-aos-delay="200" className="text-2xl md:text-3xl text-accent font-semibold mb-6">
              Track. Collect. Recycle. Reward.
            </p>
            <p data-aos="fade-up" data-aos-delay="400" className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Technology-driven urban waste management system that transforms how cities handle waste collection and recycling.
            </p>
            
            <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground text-xl px-12 py-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
                <Download className="mr-3 h-6 w-6" />
                Download APK
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xl px-12 py-6 rounded-2xl font-semibold transition-all hover:scale-105 group">
                <ExternalLink className="mr-3 h-6 w-6" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary animate-bounce">
          <ArrowDown className="h-6 w-6" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20" data-aos="fade-up">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">About TrashGo</h2>
            <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
              Urban waste management faces critical challenges with inefficient collection routes, 
              overflowing bins, and lack of citizen engagement. TrashGo bridges the gap between 
              technology and sustainability.
            </p>
            <p className="text-3xl font-semibold text-accent">
              "Technology-driven urban waste management system."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-white/80 backdrop-blur-sm border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-lg text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="features" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-secondary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">How It Works</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A seamless workflow that connects every stakeholder in the waste management ecosystem
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {workflow.map((item, index) => (
                <div key={index} className="text-center relative" data-aos="fade-up" data-aos-delay={index * 150}>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-lg hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  {index < workflow.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-8 -ml-4">
                      <ArrowRight className="h-6 w-6 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">Tech Stack</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Powered by cutting-edge technologies for scalable and efficient waste management
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {techStack.map((tech, index) => (
              <Card 
                key={index} 
                className="bg-white/80 backdrop-blur-sm border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center group" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:bg-primary transition-colors">
                    <tech.icon className="h-8 w-8 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{tech.name}</h3>
                <p className="text-muted-foreground">{tech.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Bin Innovation */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-br from-secondary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div data-aos="fade-right">
                <h2 className="text-5xl md:text-6xl font-bold text-primary mb-12">Smart Bin Innovation</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Wifi className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Automatic Waste Detection</h3>
                      <p className="text-lg text-muted-foreground">IoT sensors automatically detect waste types and fill levels in real-time.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-warning rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Recycle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Smart Sorting System</h3>
                      <p className="text-lg text-muted-foreground">Advanced sorting for metal, plastic, and organic waste with 95% accuracy.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-3">Circular Economy Rewards</h3>
                      <p className="text-lg text-muted-foreground">Earn cashback and points for proper waste disposal, creating a sustainable incentive system.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative" data-aos="fade-left">
                <div className="w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                  <div className="text-center">
                    <Brain className="h-32 w-32 text-primary mx-auto mb-6" />
                    <p className="text-2xl font-bold text-primary mb-2">Smart Bin Mockup</p>
                    <p className="text-lg text-muted-foreground">IoT-Enabled Waste Sorting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">Environmental Impact</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Creating measurable positive change in urban waste management and environmental sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="bg-white/90 backdrop-blur-sm border border-border rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center" 
                data-aos="fade-up" 
                data-aos-delay={index * 200}
              >
                <div className="mb-6">
                  <stat.icon className="h-16 w-16 text-primary mx-auto" />
                </div>
                <div className="text-5xl font-bold text-primary mb-4">{stat.number}</div>
                <div className="text-xl text-muted-foreground font-semibold">{stat.label}</div>
              </Card>
            ))}
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="600">
            <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              By connecting technology with environmental responsibility, TrashGo is building a cleaner, 
              more sustainable future for urban communities worldwide. Join thousands of citizens already 
              making a difference in their neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div data-aos="fade-up">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">Ready to Get Started?</h2>
              <p className="text-2xl text-muted-foreground mb-16 leading-relaxed">
                Download TrashGo today and become part of the smart waste management revolution
              </p>
            </div>
            
            <div className="space-y-12" data-aos="fade-up" data-aos-delay="200">
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground text-2xl px-16 py-8 rounded-3xl font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <Download className="mr-4 h-8 w-8" />
                Download TrashGo APK
              </Button>
              
              <div className="flex items-center justify-center space-x-4 text-muted-foreground text-lg">
                <Smartphone className="h-6 w-6" />
                <span>Compatible with Android devices</span>
              </div>
              
              <div className="border-2 border-dashed border-primary/30 rounded-3xl p-12">
                <div className="w-40 h-40 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-lg font-semibold">QR Code</span>
                </div>
                <p className="text-lg text-muted-foreground font-medium">Scan to download instantly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img src={trashgoLogo} alt="TrashGo" className="w-12 h-12 rounded-lg" />
                <h3 className="text-3xl font-bold">TrashGo</h3>
              </div>
              <p className="text-primary-foreground/80 mb-8 text-lg leading-relaxed">
                Smart waste management for sustainable urban futures. 
                Track. Collect. Recycle. Reward.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 rounded-xl">
                  <Mail className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 rounded-xl">
                  <Github className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 rounded-xl">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-8">Quick Links</h4>
              <div className="space-y-4">
                <a href="#about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-lg">About</a>
                <a href="#features" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-lg">How It Works</a>
                <a href="#tech" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-lg">Technology</a>
                <a href="#impact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-lg">Impact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-8">Contact</h4>
              <div className="space-y-4 text-primary-foreground/80 text-lg">
                <p>Get in touch for partnerships</p>
                <p>team@trashgo.app</p>
                <p className="text-sm mt-8 pt-8 border-t border-primary-foreground/20">
                  © 2024 TrashGo. MIT License.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-110"
          size="icon"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default Index;
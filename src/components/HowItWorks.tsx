
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Wand2, Edit, Download, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Choose Your Purpose",
      description: "Select from ready templates or describe what letter you need",
      color: "bg-blue-500"
    },
    {
      step: "02",
      icon: Wand2,
      title: "AI Generates Your Letter",
      description: "Our AI creates a professional letter tailored to your recipient and purpose",
      color: "bg-purple-500"
    },
    {
      step: "03",
      icon: Edit,
      title: "Customize & Edit",
      description: "Use our intuitive editor to personalize and perfect your letter",
      color: "bg-green-500"
    },
    {
      step: "04",
      icon: Download,
      title: "Download & Share",
      description: "Get your letter in Word, PDF format or share directly via WhatsApp",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          How It Works - 
          <span className="text-blue-600"> Simple as 1-2-3-4</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Creating professional letters has never been easier. Follow these simple steps to get your letter ready in minutes.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-4 gap-8 mb-12">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className={`${step.color} w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
            
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="w-6 h-6 text-gray-400" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          Start Creating Your Letter Now
          <ArrowRight className="ml-3 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default HowItWorks;

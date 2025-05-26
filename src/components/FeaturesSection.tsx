
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Wand2, Edit3, Download, Save, Clock } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Ready-Made Templates",
      description: "500+ professional templates for courts, ministries, schools, and more",
      color: "bg-blue-500"
    },
    {
      icon: Wand2,
      title: "AI Letter Generation",
      description: "Smart AI creates custom letters based on your needs and recipient",
      color: "bg-purple-500"
    },
    {
      icon: Edit3,
      title: "Easy Text Editing",
      description: "Intuitive editor to customize and perfect your letters",
      color: "bg-green-500"
    },
    {
      icon: Download,
      title: "Multiple Formats",
      description: "Download as Word, PDF, or share via WhatsApp and email",
      color: "bg-orange-500"
    },
    {
      icon: Save,
      title: "Save & Access",
      description: "Keep all your letters organized and accessible anytime",
      color: "bg-red-500"
    },
    {
      icon: Clock,
      title: "Lightning Fast",
      description: "Generate professional letters in under 2 minutes",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Everything You Need to Create 
          <span className="text-blue-600"> Professional Letters</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our platform combines AI technology with professional templates to make letter writing accessible to everyone.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className={`${feature.color} w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 text-base leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

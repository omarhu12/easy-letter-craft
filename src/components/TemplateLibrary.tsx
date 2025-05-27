
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Users, GraduationCap, Building, Scale, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const TemplateLibrary = () => {
  const categories = [
    {
      icon: Scale,
      title: "Legal & Court",
      description: "Appeals, requests, complaints",
      count: "120+ templates",
      color: "bg-blue-600",
      bgColor: "bg-blue-50",
      templates: ["Court Appeal", "Legal Complaint", "Bail Request", "Evidence Submission"],
      link: "/templates/legal"
    },
    {
      icon: Building,
      title: "Government & Ministry",
      description: "Official requests and applications",
      count: "80+ templates",
      color: "bg-green-600",
      bgColor: "bg-green-50",
      templates: ["Tax Exemption", "License Application", "Ministry Appeal", "Document Request"],
      link: "/templates/government"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "School and university letters",
      count: "90+ templates",
      color: "bg-purple-600",
      bgColor: "bg-purple-50",
      templates: ["Admission Request", "Grade Appeal", "Transfer Letter", "Scholarship Application"],
      link: "/templates/education"
    },
    {
      icon: Users,
      title: "Municipal Services",
      description: "Local authority requests",
      count: "75+ templates",
      color: "bg-orange-600",
      bgColor: "bg-orange-50",
      templates: ["Permit Request", "Service Complaint", "Property Appeal", "Utility Request"],
      link: "/templates/municipal"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Medical and insurance letters",
      count: "65+ templates",
      color: "bg-red-600",
      bgColor: "bg-red-50",
      templates: ["Insurance Claim", "Medical Leave", "Treatment Request", "Disability Appeal"],
      link: "/templates/healthcare"
    },
    {
      icon: FileText,
      title: "General Business",
      description: "Professional correspondence",
      count: "70+ templates",
      color: "bg-indigo-600",
      bgColor: "bg-indigo-50",
      templates: ["Formal Complaint", "Request Letter", "Authorization", "Recommendation"],
      link: "/templates/business"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-gray-50/50">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Professional Templates for 
          <span className="text-blue-600"> Every Occasion</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Browse our extensive library of professionally crafted templates, organized by category for easy access.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold">
          Browse All Templates
        </Button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg ${category.bgColor}`}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-white/80 text-gray-700 font-medium">
                  {category.count}
                </Badge>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                {category.title}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {category.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                {category.templates.map((template, templateIndex) => (
                  <div key={templateIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span>{template}</span>
                  </div>
                ))}
              </div>
              <Link to={category.link}>
                <Button variant="outline" className="w-full group-hover:bg-white/50 transition-colors">
                  View Templates
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TemplateLibrary;

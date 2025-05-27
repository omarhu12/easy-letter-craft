
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, ArrowLeft, Download, Edit3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const GovernmentTemplates = () => {
  const governmentTemplates = [
    {
      title: "Tax Exemption Request",
      description: "Request tax exemption for various purposes",
      category: "Tax Affairs",
      difficulty: "Intermediate",
      estimatedTime: "12 min"
    },
    {
      title: "License Application",
      description: "Apply for business or professional licenses",
      category: "Licensing",
      difficulty: "Basic",
      estimatedTime: "8 min"
    },
    {
      title: "Ministry Appeal Letter",
      description: "Appeal decisions made by government ministries",
      category: "Appeals",
      difficulty: "Advanced",
      estimatedTime: "15 min"
    },
    {
      title: "Document Request",
      description: "Request official documents from government offices",
      category: "Document Services",
      difficulty: "Basic",
      estimatedTime: "5 min"
    },
    {
      title: "Permit Application",
      description: "Apply for various government permits",
      category: "Permits",
      difficulty: "Intermediate",
      estimatedTime: "10 min"
    },
    {
      title: "Complaint to Ministry",
      description: "File formal complaints with government departments",
      category: "Complaints",
      difficulty: "Intermediate",
      estimatedTime: "10 min"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Basic': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center">
              <Building className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Government & Ministry Templates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Official templates for government applications, permits, and ministry communications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {governmentTemplates.map((template, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs">
                    {template.category}
                  </Badge>
                  <Badge className={getDifficultyColor(template.difficulty)}>
                    {template.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {template.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {template.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>Est. time: {template.estimatedTime}</span>
                </div>
                <div className="flex space-x-2">
                  <Button className="flex-1" size="sm">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Use Template
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovernmentTemplates;

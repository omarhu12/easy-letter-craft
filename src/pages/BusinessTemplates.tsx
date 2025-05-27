
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, ArrowLeft, Download, Edit3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessTemplates = () => {
  const businessTemplates = [
    {
      title: "Formal Business Complaint",
      description: "File complaints against businesses or services",
      category: "Complaints",
      difficulty: "Intermediate",
      estimatedTime: "10 min"
    },
    {
      title: "Authorization Letter",
      description: "Authorize someone to act on your behalf",
      category: "Authorization",
      difficulty: "Basic",
      estimatedTime: "6 min"
    },
    {
      title: "Employment Verification Request",
      description: "Request employment verification letters",
      category: "Employment",
      difficulty: "Basic",
      estimatedTime: "5 min"
    },
    {
      title: "Contract Dispute Letter",
      description: "Address contractual disputes professionally",
      category: "Disputes",
      difficulty: "Advanced",
      estimatedTime: "15 min"
    },
    {
      title: "Reference Letter Request",
      description: "Request professional reference letters",
      category: "References",
      difficulty: "Basic",
      estimatedTime: "7 min"
    },
    {
      title: "Payment Request Letter",
      description: "Request payments for services or invoices",
      category: "Financial",
      difficulty: "Intermediate",
      estimatedTime: "8 min"
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
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
            <div className="bg-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Business Templates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional business letter templates for corporate communications and formal correspondence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessTemplates.map((template, index) => (
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

export default BusinessTemplates;

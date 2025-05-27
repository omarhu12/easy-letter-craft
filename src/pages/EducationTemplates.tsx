
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, ArrowLeft, Download, Edit3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const EducationTemplates = () => {
  const educationTemplates = [
    {
      title: "School Admission Request",
      description: "Request admission to educational institutions",
      category: "Admissions",
      difficulty: "Basic",
      estimatedTime: "8 min"
    },
    {
      title: "Grade Appeal Letter",
      description: "Appeal academic grades or assessment results",
      category: "Academic Appeals",
      difficulty: "Intermediate",
      estimatedTime: "12 min"
    },
    {
      title: "Transfer Request",
      description: "Request transfer between schools or programs",
      category: "Transfers",
      difficulty: "Intermediate",
      estimatedTime: "10 min"
    },
    {
      title: "Scholarship Application",
      description: "Apply for academic scholarships and financial aid",
      category: "Financial Aid",
      difficulty: "Advanced",
      estimatedTime: "15 min"
    },
    {
      title: "Leave of Absence Request",
      description: "Request academic leave for personal reasons",
      category: "Academic Leave",
      difficulty: "Basic",
      estimatedTime: "6 min"
    },
    {
      title: "Transcript Request",
      description: "Request official academic transcripts",
      category: "Documents",
      difficulty: "Basic",
      estimatedTime: "5 min"
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
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
            <div className="bg-purple-600 w-16 h-16 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Education Templates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic letter templates for schools, universities, and educational institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationTemplates.map((template, index) => (
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

export default EducationTemplates;

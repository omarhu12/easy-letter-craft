
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Wand2, Edit3, Download, Save, Users, Clock, CheckCircle } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TemplateLibrary from '@/components/TemplateLibrary';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <HeroSection />
      <FeaturesSection />
      <TemplateLibrary />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Sparkles, ArrowRight } from 'lucide-react';
const HeroSection = () => {
  return <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Letter Generation
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Create Official Letters 
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"> Effortlessly</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Professional letters in minutes, not hours. No experience needed - just select your purpose and let our AI handle the rest.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Start Creating Letters
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button variant="outline" size="lg" className="border-white/30 hover:bg-white/10 text-lg px-8 py-6 rounded-xl font-semibold transition-all duration-300 text-slate-950">
                  View Templates
                </Button>
              </div>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-200 text-sm">Ready Templates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-blue-200 text-sm">Letters Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-blue-200 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-yellow-300" />
                  <span className="font-semibold">Official Letter Generator</span>
                </div>
                
                <div className="bg-white/20 rounded-lg p-4 space-y-3">
                  <div className="h-3 bg-white/30 rounded animate-pulse"></div>
                  <div className="h-3 bg-white/30 rounded w-3/4 animate-pulse"></div>
                  <div className="h-3 bg-white/30 rounded w-1/2 animate-pulse"></div>
                </div>
                
                <div className="flex space-x-2">
                  <Badge className="bg-green-500/80 text-white">Court Request</Badge>
                  <Badge className="bg-purple-500/80 text-white">Ministry Appeal</Badge>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Sparkles className="w-8 h-8 text-blue-700" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
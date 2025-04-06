
import React from 'react';
import { Zap, Database, Cloud, Rocket, Leaf, BarChart } from 'lucide-react';
import CloudProviders from './CloudProviders';
import ResourceMetrics from './ResourceMetrics';
import GameElements from './GameElements';
import Title from './Title';

const AetherKubeScene = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-aether-dark bg-cyberpunk-grid">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-glow-green opacity-60 blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-glow-blue opacity-60 blur-3xl" />
      
      <div className="relative z-10 container mx-auto p-4 pt-16 pb-16">
        {/* Title component */}
        <Title />
        
        {/* Main cluster visualization */}
        <div className="relative mt-8 glass-panel p-6 mb-8">
          <div className="flex items-center justify-center mb-4">
            <Zap className="text-aether-purple w-8 h-8 mr-2 animate-pulse" />
            <h2 className="text-2xl font-bold text-white">AI-Powered Kubernetes Cluster</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Kubernetes Pod Cluster */}
            <div className="glass-panel p-4 col-span-2">
              <h3 className="text-xl font-medium text-white mb-4 flex items-center">
                <Database className="mr-2 text-aether-blue" /> Dynamic Pod Scaling
              </h3>
              
              <div className="relative h-[300px] flex items-center justify-center">
                {/* Central node */}
                <div className="absolute z-20 w-20 h-20 bg-aether-purple bg-opacity-20 rounded-full flex items-center justify-center border border-aether-purple border-opacity-60 animate-pulse-glow">
                  <div className="w-12 h-12 bg-aether-purple bg-opacity-30 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-aether-purple rounded-full" />
                  </div>
                </div>
                
                {/* Pod containers - large circle */}
                <div className="absolute w-[280px] h-[280px] border border-aether-gray border-opacity-20 rounded-full animate-rotate-slow" style={{ animationDuration: '120s' }} />
                
                {/* Pod containers */}
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i * 45 * Math.PI) / 180;
                  const x = 140 * Math.cos(angle);
                  const y = 140 * Math.sin(angle);
                  
                  return (
                    <div 
                      key={i} 
                      className="absolute w-10 h-10 bg-aether-blue bg-opacity-20 rounded-lg flex items-center justify-center border border-aether-blue animate-pulse-glow"
                      style={{ 
                        transform: `translate(${x}px, ${y}px)`,
                        animationDelay: `${i * 0.4}s`
                      }}
                    >
                      <Database size={16} className="text-aether-blue" />
                    </div>
                  );
                })}
                
                {/* Connector lines as SVG */}
                <svg className="absolute w-full h-full" viewBox="-150 -150 300 300">
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i * 45 * Math.PI) / 180;
                    const x = 140 * Math.cos(angle);
                    const y = 140 * Math.sin(angle);
                    
                    return (
                      <line 
                        key={`line-${i}`}
                        x1="0" 
                        y1="0" 
                        x2={x} 
                        y2={y} 
                        stroke="#33C3F0" 
                        strokeWidth="1" 
                        strokeOpacity="0.5"
                        className="connector"
                        style={{ animationDelay: `${i * 0.5}s` }}
                      />
                    );
                  })}
                </svg>
                
                {/* AI Neural Pathway Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-[200px] h-[200px] border border-aether-purple-light border-opacity-10 rounded-full" />
                  <div className="absolute w-[240px] h-[240px] border border-aether-purple-light border-opacity-5 rounded-full" />
                </div>
              </div>
            </div>
            
            {/* Resource Usage and Energy Metrics */}
            <ResourceMetrics />
          </div>
        </div>
        
        {/* Cloud Providers Integration */}
        <CloudProviders />
        
        {/* Gamification Elements */}
        <GameElements />
      </div>
    </div>
  );
};

export default AetherKubeScene;

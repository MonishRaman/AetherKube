import React from 'react';
import { Cloud, CloudUpload, CloudDownload, Database } from 'lucide-react';

const CloudProviders = () => {
  const clouds = [
    { name: 'AWS', color: 'text-orange-500' },
    { name: 'Azure', color: 'text-blue-500' },
    { name: 'GCP', color: 'text-green-500' }
  ];

  return (
    <div className="glass-panel p-6 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Cloud className="mr-2 text-aether-blue" />
        Cloud Provider Integrations
      </h2>

      <div className="relative h-[200px]">
        {/* Central hub */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-16 h-16 rounded-full bg-aether-purple bg-opacity-30 border border-aether-purple flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-aether-purple-dark flex items-center justify-center">
              <Database className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="mt-2 text-center text-xs text-aether-gray">AetherKube</div>
        </div>

        {/* Cloud providers */}
        {clouds.map((cloud, index) => {
          // Position clouds in a circle around the central hub
          const angle = (index * (360 / clouds.length) * Math.PI) / 180;
          const radius = 80;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div 
              key={cloud.name} 
              className="absolute w-20 h-20 flex flex-col items-center justify-center"
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className={`w-14 h-14 glass-panel rounded-full flex items-center justify-center ${cloud.color} animate-pulse-glow`} style={{ animationDelay: `${index * 0.5}s` }}>
                <Cloud className="w-8 h-8" />
              </div>
              <div className="mt-1 text-xs text-aether-gray">{cloud.name}</div>
              
              {/* Data flow animations */}
              <div className="absolute top-0 left-0 w-full h-full">
                <svg className="w-full h-full" style={{ 
                  position: 'absolute', 
                  top: '-80px', 
                  left: '-80px', 
                  width: '200px', 
                  height: '200px' 
                }}>
                  <line 
                    x1="80" 
                    y1="80" 
                    x2="80" 
                    y2="160" 
                    stroke={index === 0 ? '#f97316' : index === 1 ? '#3b82f6' : '#22c55e'} 
                    strokeWidth="2" 
                    strokeDasharray="4 2"
                    className="animate-data-flow"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  />
                </svg>
              </div>
              
              {/* Upload/Download indicators */}
              <div className="absolute" style={{
                top: `calc(50% + ${y * 0.6}px)`,
                left: `calc(50% + ${x * 0.6}px)`,
                transform: 'translate(-50%, -50%)'
              }}>
                {index % 2 === 0 ? (
                  <CloudUpload className="w-4 h-4 text-aether-blue-light animate-float" style={{ animationDelay: `${index * 0.2}s` }} />
                ) : (
                  <CloudDownload className="w-4 h-4 text-aether-green-light animate-float" style={{ animationDelay: `${index * 0.2}s` }} />
                )}
              </div>
            </div>
          );
        })}
        
        {/* Connection lines as SVG */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
          {clouds.map((cloud, index) => {
            const angle = (index * (360 / clouds.length) * Math.PI) / 180;
            const radius = 80;
            const x = radius * Math.cos(angle) + 100;
            const y = radius * Math.sin(angle) + 100;
            
            return (
              <line 
                key={`line-${index}`}
                x1="100" 
                y1="100" 
                x2={x} 
                y2={y} 
                stroke={index === 0 ? '#f97316' : index === 1 ? '#3b82f6' : '#22c55e'} 
                strokeWidth="2" 
                strokeOpacity="0.6"
                strokeDasharray="4 2"
                className="connector"
                style={{ animationDelay: `${index * 0.5}s` }}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default CloudProviders;

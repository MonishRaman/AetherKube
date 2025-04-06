import React, { useState, useEffect } from 'react';
import { BarChart, Leaf, Activity, RefreshCw, AlertTriangle } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  AreaChart,
  Tooltip
} from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ResourceMetrics = () => {
  const { toast } = useToast();
  
  const [metrics, setMetrics] = useState([
    { name: 'CPU Usage', value: 42, color: 'bg-aether-blue' },
    { name: 'Memory', value: 68, color: 'bg-aether-purple' },
    { name: 'Network', value: 35, color: 'bg-aether-green' },
  ]);

  const [energyMetrics, setEnergyMetrics] = useState([
    { name: 'Carbon Footprint', value: 'Low', color: 'text-aether-green' },
    { name: 'Energy Efficiency', value: '92%', color: 'text-aether-blue' },
  ]);

  const [emissionsData, setEmissionsData] = useState([
    { time: '00:00', value: 12.4 },
    { time: '04:00', value: 10.2 },
    { time: '08:00', value: 15.8 },
    { time: '12:00', value: 18.2 },
    { time: '16:00', value: 16.5 },
    { time: '20:00', value: 14.3 },
    { time: '24:00', value: 11.9 },
  ]);

  const [energyUsageData, setEnergyUsageData] = useState([
    { time: '00:00', value: 42 },
    { time: '04:00', value: 32 },
    { time: '08:00', value: 58 },
    { time: '12:00', value: 69 },
    { time: '16:00', value: 52 },
    { time: '20:00', value: 47 },
    { time: '24:00', value: 38 },
  ]);

  const [digitalWaste, setDigitalWaste] = useState({
    detected: 8,
    cleaned: 5,
    progress: 65,
    active: true
  });

  const [autoScaling, setAutoScaling] = useState({
    active: true,
    optimizing: false,
    lastOptimized: new Date().toLocaleTimeString(),
    recommendations: [
      { resource: 'Memory', action: 'Increase', amount: '+15%' },
      { resource: 'CPU', action: 'Decrease', amount: '-8%' },
    ]
  });

  const [manualControls, setManualControls] = useState(false);

  const [autoCleanup, setAutoCleanup] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: Math.max(5, Math.min(95, metric.value + Math.floor(Math.random() * 7) - 3))
      })));

      setEmissionsData(prev => {
        const newValue = parseFloat((prev[prev.length - 1].value + (Math.random() * 2 - 1)).toFixed(1));
        const newDataPoint = { 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          value: Math.max(5, Math.min(25, newValue))
        };
        
        const newData = [...prev.slice(1), newDataPoint];
        return newData;
      });

      setEnergyUsageData(prev => {
        const newValue = Math.floor(prev[prev.length - 1].value + Math.floor(Math.random() * 10) - 5);
        const newDataPoint = { 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          value: Math.max(25, Math.min(80, newValue))
        };
        
        const newData = [...prev.slice(1), newDataPoint];
        return newData;
      });

      if (autoCleanup && digitalWaste.cleaned < digitalWaste.detected) {
        setDigitalWaste(prev => ({
          ...prev,
          cleaned: Math.min(prev.detected, prev.cleaned + 1),
          progress: Math.min(100, prev.progress + Math.floor(100 / prev.detected))
        }));

        if (digitalWaste.cleaned + 1 >= digitalWaste.detected) {
          toast({
            title: "Digital Waste Cleanup Complete",
            description: "All detected idle resources have been optimized.",
            variant: "default",
          });
        }
      }

      if (autoScaling.active && Math.random() > 0.7) {
        setAutoScaling(prev => ({
          ...prev,
          optimizing: true,
          lastOptimized: new Date().toLocaleTimeString()
        }));

        toast({
          title: "AI Resource Optimization",
          description: "Kubernetes resources are being automatically optimized",
          variant: "default",
        });

        setTimeout(() => {
          setAutoScaling(prev => ({
            ...prev,
            optimizing: false,
            recommendations: [
              { resource: 'Memory', action: Math.random() > 0.5 ? 'Increase' : 'Decrease', amount: `${Math.random() > 0.5 ? '+' : '-'}${Math.floor(Math.random() * 20)}%` },
              { resource: 'CPU', action: Math.random() > 0.5 ? 'Increase' : 'Decrease', amount: `${Math.random() > 0.5 ? '+' : '-'}${Math.floor(Math.random() * 15)}%` },
            ]
          }));
        }, 3000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoCleanup, digitalWaste.cleaned, digitalWaste.detected, autoScaling.active]);

  const handleToggleAutoScaling = () => {
    setAutoScaling(prev => ({
      ...prev,
      active: !prev.active
    }));

    toast({
      title: `AI Auto-Scaling ${autoScaling.active ? 'Disabled' : 'Enabled'}`,
      description: autoScaling.active 
        ? "Manual resource control is now available"
        : "AI will automatically optimize resources",
      variant: "default",
    });
  };

  const handleToggleManualControls = () => {
    setManualControls(prev => !prev);
    
    toast({
      title: `Manual Controls ${manualControls ? 'Hidden' : 'Shown'}`,
      description: manualControls ? "Controls hidden" : "You can now manually adjust resources",
      variant: "default",
    });
  };

  const handleToggleAutoCleanup = () => {
    setAutoCleanup(prev => !prev);
    
    toast({
      title: `Digital Waste Auto-Cleanup ${autoCleanup ? 'Disabled' : 'Enabled'}`,
      description: autoCleanup ? "Manual cleanup required" : "AI will automatically clean up digital waste",
      variant: "default",
    });
  };

  const applyOptimization = (resource: string, action: string) => {
    toast({
      title: "Manual Optimization Applied",
      description: `${resource} resources ${action.toLowerCase()}d as recommended`,
      variant: "default",
    });

    if (resource === 'CPU') {
      setMetrics(prev => prev.map(m => 
        m.name === 'CPU Usage' 
          ? {...m, value: action === 'Increase' 
              ? Math.min(95, m.value + 10) 
              : Math.max(5, m.value - 10)} 
          : m
      ));
    }

    if (resource === 'Memory') {
      setMetrics(prev => prev.map(m => 
        m.name === 'Memory' 
          ? {...m, value: action === 'Increase' 
              ? Math.min(95, m.value + 15) 
              : Math.max(5, m.value - 15)} 
          : m
      ));
    }
  };

  const triggerManualCleanup = () => {
    if (digitalWaste.cleaned < digitalWaste.detected) {
      toast({
        title: "Manual Cleanup Initiated",
        description: "Cleaning up idle resources...",
        variant: "default",
      });

      setTimeout(() => {
        setDigitalWaste(prev => ({
          ...prev,
          cleaned: prev.detected,
          progress: 100
        }));

        toast({
          title: "Manual Cleanup Complete",
          description: `${digitalWaste.detected} idle resources optimized`,
          variant: "default",
        });
      }, 2000);
    } else {
      toast({
        title: "No Action Required",
        description: "All detected resources are already optimized",
        variant: "default",
      });
    }
  };

  return (
    <div className="glass-panel p-4">
      <h3 className="text-xl font-medium text-white mb-4 flex items-center">
        <BarChart className="mr-2 text-aether-blue" /> Resource Metrics
      </h3>
      
      <div className="mb-6 p-3 border border-aether-blue border-opacity-40 rounded bg-aether-blue bg-opacity-5">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-medium text-white flex items-center">
            <Activity className="mr-2 h-4 w-4 text-aether-blue" /> AI Resource Optimization
          </h4>
          <button 
            onClick={handleToggleAutoScaling}
            className={`text-xs px-2 py-1 rounded ${autoScaling.active ? 'bg-aether-blue text-white' : 'bg-aether-gray bg-opacity-20 text-aether-gray'}`}
          >
            {autoScaling.active ? 'Enabled' : 'Disabled'}
          </button>
        </div>
        
        <div className="text-xs text-aether-gray mb-2">
          Last optimized: {autoScaling.lastOptimized}
          {autoScaling.optimizing && (
            <span className="ml-2 text-aether-blue animate-pulse flex items-center">
              <RefreshCw className="h-3 w-3 mr-1 animate-spin" /> Optimizing...
            </span>
          )}
        </div>
        
        {autoScaling.recommendations.length > 0 && (
          <div>
            <div className="text-xs text-aether-gray mb-1">Recommendations:</div>
            <div className="space-y-2">
              {autoScaling.recommendations.map((rec, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-xs text-white">{rec.resource}: {rec.action} {rec.amount}</span>
                  {manualControls && (
                    <button 
                      onClick={() => applyOptimization(rec.resource, rec.action)}
                      className="text-xs bg-aether-blue bg-opacity-20 hover:bg-opacity-40 text-aether-blue px-2 py-0.5 rounded"
                    >
                      Apply
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-2">
          <button 
            onClick={handleToggleManualControls} 
            className="text-xs text-aether-blue hover:underline"
          >
            {manualControls ? 'Hide Manual Controls' : 'Show Manual Controls'}
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={metric.name} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-aether-gray">{metric.name}</span>
              <span className="text-white">{metric.value}%</span>
            </div>
            <Progress className="h-2" value={metric.value} />
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <h4 className="text-sm text-white mb-3 flex items-center">
          <Leaf className="mr-2 text-aether-green h-4 w-4" /> Sustainability Metrics
        </h4>
        
        <div className="space-y-3">
          {energyMetrics.map((metric) => (
            <div key={metric.name} className="flex justify-between items-center">
              <span className="text-xs text-aether-gray">{metric.name}</span>
              <span className={`text-sm font-medium ${metric.color}`}>{metric.value}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-aether-gray">CO₂ Emissions (kg)</span>
            <span className="text-xs text-aether-green">
              {emissionsData[emissionsData.length-1].value} kg now
            </span>
          </div>
          <div className="h-24 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={emissionsData}
                margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#333" strokeDasharray="2 2" />
                <XAxis 
                  dataKey="time" 
                  tick={{ fill: '#8E9196', fontSize: 8 }} 
                  tickMargin={4}
                  axisLine={false}
                />
                <YAxis 
                  tick={{ fill: '#8E9196', fontSize: 8 }} 
                  tickMargin={4}
                  axisLine={false}
                  domain={[0, 'dataMax + 5']}
                />
                <Tooltip
                  contentStyle={{ 
                    background: "#1A1F2C", 
                    border: "1px solid #333", 
                    color: "#fff",
                    fontSize: "11px",
                    padding: "4px 8px",
                    borderRadius: "4px"
                  }}
                  labelStyle={{ color: "#8E9196" }}
                  formatter={(value) => [`${value} kg`, "CO₂"]}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#22c55e" 
                  fillOpacity={1} 
                  fill="url(#colorEmissions)" 
                  activeDot={{ r: 4, fill: "#22c55e" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-aether-gray">Energy Usage (kWh)</span>
            <span className="text-xs text-aether-blue">
              {energyUsageData[energyUsageData.length-1].value} kWh now
            </span>
          </div>
          <div className="h-24 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={energyUsageData}
                margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
              >
                <CartesianGrid vertical={false} stroke="#333" strokeDasharray="2 2" />
                <XAxis 
                  dataKey="time" 
                  tick={{ fill: '#8E9196', fontSize: 8 }} 
                  tickMargin={4}
                  axisLine={false}
                />
                <YAxis 
                  tick={{ fill: '#8E9196', fontSize: 8 }} 
                  tickMargin={4}
                  axisLine={false}
                  domain={[0, 'dataMax + 10']}
                />
                <Tooltip
                  contentStyle={{ 
                    background: "#1A1F2C", 
                    border: "1px solid #333", 
                    color: "#fff",
                    fontSize: "11px",
                    padding: "4px 8px",
                    borderRadius: "4px"
                  }}
                  labelStyle={{ color: "#8E9196" }}
                  formatter={(value) => [`${value} kWh`, "Energy"]}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#33C3F0" 
                  strokeWidth={2}
                  dot={{ r: 1, fill: "#33C3F0" }}
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="mt-4 p-2 border border-dashed border-aether-green border-opacity-40 rounded bg-aether-green bg-opacity-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`h-3 w-3 rounded-full ${digitalWaste.active ? 'bg-aether-green animate-pulse' : 'bg-aether-gray'} mr-2`}></div>
              <span className="text-xs text-aether-gray">Digital Waste Cleanup</span>
            </div>
            <div className="flex items-center">
              <button 
                onClick={handleToggleAutoCleanup}
                className={`text-xs px-2 py-0.5 rounded mr-2 ${autoCleanup ? 'bg-aether-green text-white' : 'bg-aether-gray bg-opacity-20 text-aether-gray'}`}
              >
                {autoCleanup ? 'Auto' : 'Manual'}
              </button>
              {!autoCleanup && (
                <button 
                  onClick={triggerManualCleanup}
                  className="text-xs bg-aether-green bg-opacity-20 hover:bg-opacity-40 text-aether-green px-2 py-0.5 rounded flex items-center"
                  disabled={digitalWaste.cleaned >= digitalWaste.detected}
                >
                  <RefreshCw className="h-3 w-3 mr-1" /> Clean
                </button>
              )}
            </div>
          </div>
          <div className="mt-2">
            <div className="h-1 bg-aether-gray bg-opacity-20 rounded-full">
              <div 
                className={`h-1 ${digitalWaste.cleaned < digitalWaste.detected ? 'bg-aether-green animate-pulse' : 'bg-aether-green'} rounded-full`} 
                style={{ width: `${digitalWaste.progress}%` }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-aether-gray">{digitalWaste.detected} idle resources detected</span>
            <span className="text-xs text-aether-green">{digitalWaste.cleaned} cleaned</span>
          </div>
          {digitalWaste.detected > 0 && digitalWaste.cleaned < digitalWaste.detected && (
            <div className="mt-2 text-xs text-yellow-500 flex items-center">
              <AlertTriangle className="h-3 w-3 mr-1" />
              {digitalWaste.detected - digitalWaste.cleaned} resources need optimization
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceMetrics;

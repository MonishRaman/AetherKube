
import React from 'react';

const Title = () => {
  return (
    <div className="text-center my-6">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
        <span className="text-aether-blue glow-text">Aether</span>
        <span className="text-aether-purple glow-text">Kube</span>
      </h1>
      <p className="text-xl md:text-2xl text-white font-light tracking-wider">
        <span className="text-aether-blue">Smart.</span>
        {" "}
        <span className="text-aether-green">Green.</span>
        {" "}
        <span className="text-aether-purple">Optimized.</span>
      </p>
    </div>
  );
};

export default Title;

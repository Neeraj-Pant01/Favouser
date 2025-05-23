import React from 'react';

const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
      <div className="w-16 h-16 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default GlobalLoader;

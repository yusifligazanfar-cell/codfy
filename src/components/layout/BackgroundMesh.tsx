"use client";

export function BackgroundMesh() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-white pointer-events-none flex items-center justify-center">
      {/* Top Left Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-purple-300/40 mix-blend-multiply filter blur-[100px] opacity-80 animate-blob" />
      
      {/* Top Right Blob */}
      <div className="absolute top-[-5%] right-[-10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full bg-cyan-300/40 mix-blend-multiply filter blur-[100px] opacity-80 animate-blob animation-delay-2000" />
      
      {/* Bottom Left Blob */}
      <div className="absolute bottom-[-10%] left-[10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-pink-300/30 mix-blend-multiply filter blur-[120px] opacity-80 animate-blob animation-delay-4000" />
      
      {/* Bottom Right Blob */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-yellow-200/40 mix-blend-multiply filter blur-[100px] opacity-80 animate-blob animation-delay-6000" />
      
      {/* Center Soft Glow */}
      <div className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-blue-200/30 mix-blend-multiply filter blur-[150px] opacity-60 animate-blob animation-delay-2000" />
    </div>
  );
}

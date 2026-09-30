export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg className={`text-gold w-16 h-16 ${className}`} viewBox="0 0 100 100" fill="currentColor">
      {/* A simple lotus / Kandyan scroll placeholder */}
      <path d="M50 0 C60 30, 80 40, 100 50 C80 60, 60 70, 50 100 C40 70, 20 60, 0 50 C20 40, 40 30, 50 0 Z" opacity="0.8"/>
      <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

export function LotusDivider() {
  return (
    <div className="flex items-center justify-center my-0">
      <img 
        src="/scroll-divider.png" 
        alt="Divider" 
        className="w-50 md:w-96 object-contain mix-blend-multiply opacity-80" 
      />
    </div>
  );
}

export function SectionWrapper({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={`relative px-6 py-4 ${className}`}>
      {children}
    </section>
  );
}

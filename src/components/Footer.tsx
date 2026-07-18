import logoSrc from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-white py-16 px-4 border-t border-slate-100 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Call to Action Titles */}
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-800 leading-tight">
          Ready to build?<br />
          <span className="font-normal">Let’s talk about it</span>
        </h2>

        {/* Brand Accent Bar */}
        <div className="h-1 w-full max-w-xl mx-auto bg-amber-500 rounded-sm my-6"></div>

        {/* Business Contact Email */}
        <p className="text-lg md:text-xl font-medium text-slate-700 tracking-wide">
          hello@dreambuilt-gc.com
        </p>

        {/* Minimal House Icon */}
        <img src={logoSrc} alt="DreamBuilt Logo" className="mx-auto w-16 h-16 mt-4" />

      </div>
    </footer>
  );
}
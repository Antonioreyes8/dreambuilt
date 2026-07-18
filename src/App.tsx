import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import InvestingPage from "./pages/Investing";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";

// @ts-ignore
import introSrc from "./assets/intro.mp4";
// @ts-ignore
import heroLogo from "./assets/we-built-logo.png";

export default function App(): React.JSX.Element {
    const [currentPage, setCurrentPage] = useState<string>("home");
    // State to detect if iOS has forcefully blocked our video autoplay
    const [isAutoplayBlocked, setIsAutoplayBlocked] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Force parameters to be absolutely certain
        video.muted = true;
        video.playsInline = true;

        // Test if the video is allowed to play automatically
        const playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    // Autoplay worked perfectly! Keep video visible.
                    setIsAutoplayBlocked(false);
                })
                .catch((error) => {
                    // Autoplay was blocked by iOS Low Power Mode/Safari constraints.
                    // Fall back to a static visual to eliminate Apple's play button icon.
                    console.log("Autoplay prevented by iOS Safari:", error);
                    setIsAutoplayBlocked(true);
                });
        }
    }, []);

    const renderPage = (): React.JSX.Element => {
        switch (currentPage) {
            case "home":
                return <Home />;
            case "investing":
                return <InvestingPage />;
            case "projects":
                return <ProjectsPage />;
            case "contact":
                return <ContactPage />;
            default:
                return <Home />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
            {/* 1. Top banner wrapper */}
            <div 
                className="relative w-full overflow-hidden bg-slate-900 h-[40vh] sm:h-[55vh] md:h-[72vh] shrink-0 bg-cover bg-center"
                style={{
                    // Fallback static background frame if video is blocked
                    backgroundImage: isAutoplayBlocked 
                        ? `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80')` 
                        : 'none'
                }}
            >
                {/* Only render or show the video track if autoplay successfully executes */}
                {!isAutoplayBlocked && (
                    <video
                        ref={videoRef}
                        src={introSrc as string}
                        className="absolute inset-0 h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls={false}
                        preload="auto"
                        aria-hidden
                    />
                )}
                
                {/* Transparent overlay blocks clicking/touching interaction */}
                <div className="absolute inset-0 z-10 bg-transparent pointer-events-auto" />

                {/* Ambient shading mask overlay */}
                <div className="absolute inset-0 z-20 bg-slate-950/70" />
                
                {/* Centered Brand Logo */}
                <div className="absolute inset-0 z-30 flex items-center justify-center px-4 sm:px-6">
                    <img
                        src={heroLogo as string}
                        alt="We Built logo"
                        className="w-1/2 sm:w-1/3 md:w-1/6 max-w-[180px] sm:max-w-[280px] md:max-w-[420px] object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.55)] border-2 border-slate-50 rounded-lg"
                    />
                </div>
            </div>

            {/* 2. Navigation Header */}
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

            {/* 3. Main Route Block */}
            <main className="mx-auto max-w-7xl px-4 sm:px-6 py-6 grow w-full">
                {renderPage()}
            </main>

            {/* 4. Layout Footer */}
            <Footer />
        </div>
    );
}
import React, { useState } from "react";
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
            {/* 1. Mobile-friendly responsive top intro video banner */}
            <div className="relative w-full overflow-hidden bg-slate-900 h-[40vh] sm:h-[55vh] md:h-[72vh] shrink-0">
                <video
                    src={introSrc as string}
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    preload="auto"
                    aria-hidden
                    // CRITICAL: Force native iOS rendering instructions directly into the WebKit DOM layer
                    {...{
                        "webkit-playsinline": "true",
                        "controlslist": "nodownload nofullscreen noremoteplayback"
                    }}
                    // Safely tells the TS compiler to allow hidden WebKit pseudo-selectors inline
                    style={{
                        pointerEvents: "none",
                        WebkitMediaControlsPlayButton: "none",
                        WebkitMediaControlsStartPlaybackButton: "none",
                        WebkitMediaControlsPanel: "none"
                    } as React.CSSProperties}
                />

                {/* Transparent touch shield to block Safari click capture */}
                <div className="absolute inset-0 z-10 bg-transparent pointer-events-auto" />

                {/* Dark ambient layout overlay */}
                <div className="absolute inset-0 z-20 bg-slate-950/70" />

                {/* Top brand logo container asset layer */}
                <div className="absolute inset-0 z-30 flex items-center justify-center px-4 sm:px-6">
                    <img
                        src={heroLogo as string}
                        alt="We Built logo"
                        className="w-1/2 sm:w-1/3 md:w-1/6 max-w-[180px] sm:max-w-[280px] md:max-w-[420px] object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.55)] border-2 border-slate-50 rounded-lg"
                    />
                </div>
            </div>

            {/* 2. Sticky Header */}
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

            {/* 3. Page Content Area with responsive gutter padding */}
            <main className="mx-auto max-w-7xl px-4 sm:px-6 py-6 grow w-full">
                {renderPage()}
            </main>

            {/* 4. Global Footer */}
            <Footer />
        </div>
    );
}
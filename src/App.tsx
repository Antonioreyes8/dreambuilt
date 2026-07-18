import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import InvestingPage from "./pages/Investing";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import introSrc from "./assets/intro.mp4";
import heroLogo from "./assets/we-built-logo.png";

export default function App() {
	const [currentPage, setCurrentPage] = useState("home");

	const renderPage = () => {
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
			{/* 1. Top intro video */}
			<div className="relative w-full overflow-hidden bg-slate-900 h-[72vh] md:h-[72vh] shrink-0">
				<video
					src={introSrc}
					className="absolute inset-0 h-full w-full object-cover"
					autoPlay
					muted
					loop
					playsInline
					aria-hidden
				/>
				<div className="absolute inset-0 bg-slate-950/70" />
				<div className="absolute inset-0 flex items-center justify-center px-6">
					<img
						src={heroLogo}
						alt="We Built logo"
						className="w-1/6 max-w-70 md:max-w-105 object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.55)] border-2 border-slate-50 rounded-lg"
					/>
				</div>
			</div>

			{/* 2. Sticky Layout Header */}
			<Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

			{/* 3. Page Content Area */}
			<main className="mx-auto max-w-7xl px-6 py-4 grow w-full">
				{renderPage()}
			</main>

			{/* 4. Global Structural Footer (Visible on all tabs) */}
			<Footer />
		</div>
	);
}

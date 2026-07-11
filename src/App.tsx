import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import InvestingPage from "./pages/Investing";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";

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
			{/* 1. Top Graphic GIF */}
			<div className="w-full bg-slate-900 flex items-center justify-center overflow-hidden h-32 md:h-48 shrink-0">
				<img
					src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Bkbnd4cmpxbnNkb2t2bDQ5b3R1ZXZ2dW12Nzh4aXo2dGs5NjR1MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aD2saalBwwftBIY/giphy.gif"
					alt="Top Banner Display"
					className="w-full h-full object-cover opacity-80"
				/>
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

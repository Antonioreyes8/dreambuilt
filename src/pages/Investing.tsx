import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDollarSign,
	faHome,
	faCrown,
	faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import texasMapSrc from "../assets/texasmap.jpg";

// Type definitions for investment types tab structure
interface ProjectTabContent {
	title: string;
	timeframe: string;
	roi: string;
	descriptionTop: string;
	descriptionBottom: string;
	imageUrl: string;
}

export default function Investing() {
	// ----------------------------------------------------------------
	// STATE MANAGEMENT
	// ----------------------------------------------------------------
	const [activeTab, setActiveTab] = useState<
		"affordable" | "standard" | "luxury" | "multifamily"
	>("affordable");
	const [hoveredCounty, setHoveredCounty] = useState<string | null>(null);

	// ----------------------------------------------------------------
	// CONTENT LIBRARIES
	// ----------------------------------------------------------------
	const countiesList = [
		"Johnson County",
		"Hood County",
		"Somervell County",
		"Ellis County",
		"Navarro County",
		"Parker County",
		"Tarrant County",
		"Dallas County",
		"Kaufman County",
		"Denton County",
		"Hunt County",
		"Rockwall County",
		"Erath County",
		"Palo Pinto County",
	];

	const projectTabs: Record<
		"affordable" | "standard" | "luxury" | "multifamily",
		ProjectTabContent
	> = {
		affordable: {
			title: "Affordable Home",
			timeframe: "6 to 8 months",
			roi: "Low/Medium",
			descriptionTop:
				"Smaller-scale developments, ideal for quick, functional construction with a short-term return on investment.",
			descriptionBottom: "Affordable homes with a faster return on investment.",
			imageUrl:
				"https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=500&q=80",
		},
		standard: {
			title: "Standard Residence",
			timeframe: "6 to 8 months",
			roi: "Low/Medium",
			descriptionTop:
				"Medium-scale project, ideal for traditional family homes. Spacious design and consistent demand in suburban areas.",
			descriptionBottom:
				"Attractive due to its balance of costs, demand, and added value.",
			imageUrl:
				"https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=500&q=80",
		},
		luxury: {
			title: "Luxury House",
			timeframe: "9 to 12 months",
			roi: "Medium/High",
			descriptionTop:
				"Premium investment developments geared toward high-net-worth buyers.",
			descriptionBottom:
				"Greater projection, more attractive return, and improved real estate brand positioning.",
			imageUrl:
				"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=500&q=80",
		},
		multifamily: {
			title: "Multifamily Investment",
			timeframe: "12 to 16 months",
			roi: "High",
			descriptionTop:
				"Scalable projects with multiple housing units. Ideal for investors seeking diversification, high returns, and long term stability.",
			descriptionBottom:
				"High demand in urban areas and excellent asset appreciation.",
			imageUrl:
				"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&q=80",
		},
	};

	return (
		<div className="space-y-24 py-10">
			{/* =========================================================
          SECTION 1: HERO OVERVIEW ("DEVELOPMENT & INVESTMENT")
          ========================================================= */}
			<section className="relative overflow-hidden grid grid-cols-1 gap-12 lg:grid-cols-3 items-start pb-16">
				<div className="lg:col-span-1 relative">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
						Investment focus
					</p>
					<h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl uppercase leading-none">
						Development
						<br />& Investment
					</h1>
					<div className="mt-4 h-1.5 w-full max-w-70 bg-amber-500 rounded-sm"></div>

					<ul className="mt-6 space-y-1 text-lg font-medium text-slate-600">
						<li>Home builder</li>
						<li>Real estate investments</li>
						<li>ROI-focused projects</li>
						<li>Single homes</li>
						<li>Luxury houses</li>
						<li>Multifamily</li>
						<li className="text-slate-400 text-base font-normal mt-2">
							North Texas investment markets
						</li>
					</ul>
				</div>

				<div className="lg:col-span-2 space-y-6 text-slate-700 text-[1.05rem] leading-relaxed">
					<p>
						With experience in the{" "}
						<strong className="text-slate-900 font-bold">
							residential construction
						</strong>{" "}
						sector, we have developed everything from{" "}
						<strong className="text-slate-900 font-bold">compact homes</strong>{" "}
						to{" "}
						<strong className="text-slate-900 font-bold">
							multi-family buildings
						</strong>
						, combining technology and vision.
					</p>
					<p>
						<strong className="text-slate-900 font-bold">
							We don't just build,
						</strong>{" "}
						we{" "}
						<strong className="text-slate-900 font-bold">
							actively participate
						</strong>{" "}
						in the creation of investment projects, adding value from the
						outset. We focus on{" "}
						<strong className="text-slate-900 font-bold">
							reducing costs, optimizing timelines,
						</strong>{" "}
						and ensuring the{" "}
						<strong className="text-slate-900 font-bold">
							highest quality,
						</strong>{" "}
						without losing sight of profitability.
					</p>
					<p>
						If you're looking for a{" "}
						<strong className="text-slate-900 font-bold">
							strategic partner
						</strong>{" "}
						to transform your ideas into tangible, high-performing assets, we're
						here to help. Our collaborative approach ensures that each project
						is tailored to{" "}
						<strong className="text-slate-900 font-bold">your goals,</strong>{" "}
						balancing innovation with practicality.
					</p>
				</div>
			</section>

			{/* =========================================================
    SECTION 3: CLEAN & INTUITIVE MARKET MAP DISPLAY
    ========================================================= */}
			<section className="text-center">
				<div className="max-w-3xl mx-auto mb-10">
					<h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
						Which counties have we worked in?
					</h2>
					<p className="text-slate-500 mt-2 text-sm sm:text-base">
						Actively building and developing strategic real estate assets across
						key North Texas submarkets.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-5xl mx-auto bg-white border border-slate-200/80 p-6 sm:p-8 rounded-2xl shadow-sm">
					{/* Left Column: Polished Map Asset Container */}
					<div className="md:col-span-6 flex justify-center items-center bg-slate-50 border border-slate-100 p-4 rounded-xl relative overflow-hidden group h-64 sm:h-80 md:h-96 w-full">
						<img
							src={texasMapSrc}
							alt="Texas Regional Markets Map"
							className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.02]"
						/>
						{hoveredCounty && (
							<div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide uppercase border border-slate-700 shadow-md transition-all animate-fade-in">
								Focus Market:{" "}
								<span className="text-amber-400 font-bold">
									{hoveredCounty}
								</span>
							</div>
						)}
					</div>

					{/* Right Column: Intuitive Dynamic Interactive Sidebar List */}
					<div className="md:col-span-6 text-left flex flex-col justify-center h-full">
						<h3 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-4 block">
							Active DFW & Surrounding Areas
						</h3>

						<div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
							{countiesList.map((county) => {
								const isHighlighted = hoveredCounty === county;
								return (
									<div
										key={county}
										onMouseEnter={() => setHoveredCounty(county)}
										onMouseLeave={() => setHoveredCounty(null)}
										className={`text-sm sm:text-base font-semibold transition-all duration-200 py-2.5 px-3 rounded-lg border cursor-default flex items-center justify-between ${
											isHighlighted
												? "text-amber-700 bg-amber-50/70 border-amber-200 shadow-sm translate-x-1"
												: "text-slate-700 bg-slate-50/50 border-slate-100 hover:bg-slate-50 hover:border-slate-200"
										}`}
									>
										<span className="truncate">{county}</span>
										<span
											className={`h-1.5 w-1.5 rounded-full transition-all duration-200 shrink-0 ml-2 ${
												isHighlighted
													? "bg-amber-500 scale-125"
													: "bg-slate-300"
											}`}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>
			{/* =========================================================
          SECTION 4: STRATEGIC PROJECT SPECIFICATIONS TABBED UI
          ========================================================= */}
			<section>
				<div className="w-full rounded-xl overflow-hidden shadow-sm border border-slate-200">
					{/* Service Classification Selector Tabs Header Bar */}
					<div className="grid grid-cols-2 sm:grid-cols-4 bg-[#2a2a2a] text-white">
						<button
							onClick={() => setActiveTab("affordable")}
							className={`flex flex-col items-center justify-center p-6 transition-all duration-200 cursor-pointer text-center font-bold tracking-wider text-xs gap-3 ${
								activeTab === "affordable"
									? "bg-amber-500 text-slate-950"
									: "hover:bg-neutral-800 text-neutral-300"
							}`}
						>
							<FontAwesomeIcon
								icon={faDollarSign}
								className={`text-xl md:text-2xl ${activeTab === "affordable" ? "text-slate-950" : "text-amber-500"}`}
							/>
							AFFORDABLE HOMES
						</button>

						<button
							onClick={() => setActiveTab("standard")}
							className={`flex flex-col items-center justify-center p-6 transition-all duration-200 cursor-pointer text-center font-bold tracking-wider text-xs gap-3 ${
								activeTab === "standard"
									? "bg-amber-500 text-slate-950"
									: "hover:bg-neutral-800 text-neutral-300"
							}`}
						>
							<FontAwesomeIcon
								icon={faHome}
								className={`text-xl md:text-2xl ${activeTab === "standard" ? "text-slate-950" : "text-amber-500"}`}
							/>
							STANDARD RESIDENCES
						</button>

						<button
							onClick={() => setActiveTab("luxury")}
							className={`flex flex-col items-center justify-center p-6 transition-all duration-200 cursor-pointer text-center font-bold tracking-wider text-xs gap-3 ${
								activeTab === "luxury"
									? "bg-amber-500 text-slate-950"
									: "hover:bg-neutral-800 text-neutral-300"
							}`}
						>
							<FontAwesomeIcon
								icon={faCrown}
								className={`text-xl md:text-2xl ${activeTab === "luxury" ? "text-slate-950" : "text-amber-500"}`}
							/>
							LUXURY HOUSE
						</button>

						<button
							onClick={() => setActiveTab("multifamily")}
							className={`flex flex-col items-center justify-center p-6 transition-all duration-200 cursor-pointer text-center font-bold tracking-wider text-xs gap-3 ${
								activeTab === "multifamily"
									? "bg-amber-500 text-slate-950"
									: "hover:bg-neutral-800 text-neutral-300"
							}`}
						>
							<FontAwesomeIcon
								icon={faSeedling}
								className={`text-xl md:text-2xl ${activeTab === "multifamily" ? "text-slate-950" : "text-amber-500"}`}
							/>
							MULTIFAMILY INVESTMENT
						</button>
					</div>

					{/* Dynamic Specs Content Container View block */}
					<div className="bg-[#fcfcfc] p-6 md:p-10">
						<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
							{/* Left Side: Dynamic Showcase Image */}
							<div className="md:col-span-5 rounded-lg overflow-hidden shadow-sm h-64 border border-slate-100">
								<img
									src={projectTabs[activeTab].imageUrl}
									alt={projectTabs[activeTab].title}
									className="w-full h-full object-cover"
								/>
							</div>

							{/* Right Side: Tab Metrics Presentation Display */}
							<div className="md:col-span-7 space-y-4 text-slate-700">
								<h3 className="text-2xl font-bold text-slate-900">
									{projectTabs[activeTab].title}
								</h3>

								<div className="space-y-1 bg-white p-4 rounded-lg border border-slate-100 shadow-sm text-sm md:text-base">
									<p>
										<strong className="text-slate-900 font-bold">
											Estimated construction time:
										</strong>{" "}
										{projectTabs[activeTab].timeframe}
									</p>
									<p>
										<strong className="text-slate-900 font-bold">ROI:</strong>{" "}
										{projectTabs[activeTab].roi}
									</p>
								</div>

								<div className="space-y-3 text-sm md:text-base leading-relaxed pt-2">
									<p>{projectTabs[activeTab].descriptionTop}</p>
									<p>{projectTabs[activeTab].descriptionBottom}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* =========================================================
          SECTION 5: VISION ALIGNMENT FOOTER CAP BANNER
          ========================================================= */}
			<section
				className="relative bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden shadow-md"
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80')`,
				}}
			>
				<div className="bg-slate-950/70 w-full h-full py-16 px-6 md:py-20 md:px-12 text-center text-white">
					<div className="max-w-4xl mx-auto space-y-6">
						<h2 className="text-2xl md:text-3xl font-bold tracking-tight">
							At Dream Built, we turn vision into value.
						</h2>

						<div className="space-y-6 text-neutral-200 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
							<p>
								Whether you're building a single-family home, developing
								multi-family housing, or investing in real estate, our team
								helps you lead confidently in one of the fastest-growing regions
								in the country—
								<strong className="text-white font-bold">
									Dallas–Fort Worth.
								</strong>
							</p>
							<p className="font-medium text-white">
								We specialize in{" "}
								<strong className="text-white font-bold">
									affordable housing, premium residential builds,
								</strong>{" "}
								and{" "}
								<strong className="text-white font-bold">
									multi-family investments,
								</strong>{" "}
								delivering projects with:
							</p>

							<ul className="inline-block text-left space-y-2 font-semibold bg-black/30 p-6 rounded-xl border border-white/10 mx-auto">
								<li className="flex items-center">
									<FontAwesomeIcon
										icon={faSquare}
										className="text-amber-400 mr-3 text-[10px]"
									/>
									Long-term value
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon
										icon={faSquare}
										className="text-amber-400 mr-3 text-[10px]"
									/>
									Measurable community impact
								</li>
								<li className="flex items-center">
									<FontAwesomeIcon
										icon={faSquare}
										className="text-amber-400 mr-3 text-[10px]"
									/>
									Strong return on investment
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

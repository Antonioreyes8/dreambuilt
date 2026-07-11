import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDollarSign,
	faHome,
	faCrown,
	faSeedling,
} from "@fortawesome/free-solid-svg-icons";

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
			timeframe: "8 to 12 months",
			roi: "Medium",
			descriptionTop:
				"Modern single-family homes tailored for everyday urban living, combining high-quality architectural finishes with market-resilient equity setups.",
			descriptionBottom:
				"A balanced construction profile ideal for stable market scaling.",
			imageUrl:
				"https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=500&q=80",
		},
		luxury: {
			title: "Luxury House",
			timeframe: "14 to 18 months",
			roi: "High Yield",
			descriptionTop:
				"Premium custom estates built to elite client specifications. These projects leverage architectural superiority and highly exclusive location parameters.",
			descriptionBottom:
				"High capital entry yielding excellent long-term equity growth options.",
			imageUrl:
				"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=500&q=80",
		},
		multifamily: {
			title: "Multifamily Investment",
			timeframe: "18 to 24 months",
			roi: "Compounded High",
			descriptionTop:
				"Large-scale residential structures configured for multi-tenant occupancy, yielding dependable cashflows and immense scalable real estate leverage.",
			descriptionBottom:
				"Engineered specifically to support multi-investor syndicate groups.",
			imageUrl:
				"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&q=80",
		},
	};

	return (
		<div className="space-y-24 py-10">
			{/* =========================================================
          SECTION 1: HERO OVERVIEW ("DEVELOPMENT & INVESTMENT")
          ========================================================= */}
			<section className="grid grid-cols-1 gap-12 lg:grid-cols-3 items-start px-4">
				<div className="lg:col-span-1">
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
          SECTION 2: MARKET ANALYTICS (STATISTICS HERO BANNER)
          ========================================================= */}
			<section
				className="relative bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden shadow-md"
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80')`,
				}}
			>
				<div className="bg-black/75 w-full h-full py-16 px-6 md:py-20 md:px-12 text-center text-white space-y-8">
					<div className="space-y-2">
						<div className="text-4xl md:text-5xl font-black text-white tracking-tight">
							15%
						</div>
						<div className="h-0.5 max-w-80 bg-amber-500 mx-auto w-full"></div>
						<p className="text-base md:text-lg font-semibold tracking-wide pt-1">
							of the country's construction is done in Texas
						</p>
					</div>

					<div className="space-y-2">
						<p className="text-base md:text-lg font-semibold tracking-wide">
							Significant sales growth for growing demand
						</p>
						<div className="h-0.5 max-w-80 bg-amber-500 mx-auto w-full"></div>
					</div>

					<div className="space-y-2">
						<p className="text-base md:text-lg font-semibold tracking-wide">
							Better costs than other metropolitan areas in Texas and other
							cities in the country
						</p>
						<div className="h-0.5 max-w-135 bg-amber-500 mx-auto w-full"></div>
					</div>

					<div className="space-y-2">
						<div className="text-4xl md:text-5xl font-black text-white tracking-tight">
							#1
						</div>
						<p className="text-base md:text-lg font-semibold tracking-wide uppercase">
							DFW Real Estate Development Market in 2024
						</p>
						<div className="h-0.5 max-w-90 bg-amber-500 mx-auto w-full"></div>
					</div>

					<div className="space-y-2">
						<p className="text-base md:text-lg font-semibold tracking-wide">
							DFW continues to see an increase in population, businesses, and
							construction
						</p>
						<div className="h-0.5 max-w-145 bg-amber-500 mx-auto w-full"></div>
					</div>
				</div>
			</section>

			{/* =========================================================
          SECTION 3: TWO-WAY INTERACTIVE MAP COMPONENT
          ========================================================= */}
			<section className="px-4 text-center">
				<h2 className="text-3xl font-extrabold text-slate-900 mb-12 tracking-tight">
					Which counties have we worked in ?
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
					{/* Left Column: SVG Vector Map Shell Container */}
					<div className="md:col-span-7 flex justify-center p-4">
						<svg
							viewBox="0 0 600 500"
							className="w-full max-w-105 h-auto border border-neutral-200 rounded-xl bg-white shadow-inner p-4"
						>
							{/* Main Texas Outline Base Layer Shape */}
							<path
								d="M210,80 L260,80 L260,150 L360,170 L360,200 C390,170 410,210 430,170 C460,180 500,165 510,185 L510,240 C520,250 515,270 520,290 C510,310 525,320 515,340 C480,335 440,380 420,400 L380,450 C385,465 375,470 365,465 L355,440 L320,385 L310,380 C280,360 270,330 240,320 L240,315 C215,310 210,320 205,305 C180,285 175,280 175,255 L145,210 L145,205 L110,200 L210,80 Z"
								fill="none"
								stroke="#1e293b"
								strokeWidth="2"
							/>

							{/* Texas DFW Sub-Grid Overlay Blocks */}
							{countiesList.map((county, index) => {
								// Generate absolute offset coordinates representing DFW counties roughly
								const row = Math.floor(index / 4);
								const col = index % 4;
								const xPos = 295 + col * 24 - row * 3;
								const yPos = 190 + row * 22;

								const isHighlighted = hoveredCounty === county;

								return (
									<rect
										key={county}
										x={xPos}
										y={yPos}
										width="22"
										height="20"
										className="transition-all duration-150 cursor-pointer stroke-slate-900"
										strokeWidth="1.5"
										fill={isHighlighted ? "#f59e0b" : "#ffffff"}
										onMouseEnter={() => setHoveredCounty(county)}
										onMouseLeave={() => setHoveredCounty(null)}
									/>
								);
							})}
						</svg>
					</div>

					{/* Right Column: Dynamic Interactive County Sidebar List */}
					<div className="md:col-span-5 text-left bg-neutral-50/50 border border-neutral-100 p-6 rounded-xl">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
							{countiesList.map((county) => {
								const isHighlighted = hoveredCounty === county;
								return (
									<div
										key={county}
										onMouseEnter={() => setHoveredCounty(county)}
										onMouseLeave={() => setHoveredCounty(null)}
										className={`text-base font-bold transition-all duration-150 py-1 px-2 rounded-md cursor-pointer ${
											isHighlighted
												? "text-amber-600 bg-amber-50 scale-[1.02] pl-3"
												: "text-slate-800 hover:text-amber-500"
										}`}
									>
										{county}
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
			<section className="px-4">
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
									<span className="text-amber-400 mr-3">▪</span> Long-term value
								</li>
								<li className="flex items-center">
									<span className="text-amber-400 mr-3">▪</span> Measurable
									community impact
								</li>
								<li className="flex items-center">
									<span className="text-amber-400 mr-3">▪</span> Strong return
									on investment
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

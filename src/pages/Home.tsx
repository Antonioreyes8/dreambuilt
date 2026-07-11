import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHardHat,
	faBuilding,
	faChartLine,
} from "@fortawesome/free-solid-svg-icons";

interface TabContent {
	title: string;
	leftTextTop: string;
	leftTextBottom: string;
	bullets: string[];
}

export default function Home() {
	const [activeTab, setActiveTab] = useState<
		"general" | "management" | "investment"
	>("general");

	const tabData: Record<"general" | "management" | "investment", TabContent> = {
		general: {
			title: "GENERAL CONTRACTION",
			leftTextTop:
				"From concept to completion, we've got it covered. We provide comprehensive supervision at every stage of your project—whether it's new construction or a remodel. From pre-construction planning to the final walk-through, we coordinate all moving parts: teams, suppliers, and subcontractors.",
			leftTextBottom:
				"Our focus is on delivering quality, compliance, and efficiency, so your project stays on track and exceeds expectations.",
			bullets: [
				"Construction Management",
				"Project Coordination",
				"Schedule and quality supervision",
				"Technical and regulatory compliance",
				"Provide reports on progress and expenses",
			],
		},
		management: {
			title: "BUILDING MANAGEMENT",
			leftTextTop:
				"Protecting your asset and securing long-term value requires dedicated maintenance and operational precision. We manage property facilities, oversee maintenance crews, and run routine system evaluations.",
			leftTextBottom:
				"From physical updates to mechanical upkeep, our proactive oversight ensures minimal downtime and sustained tenant satisfaction.",
			bullets: [
				"Facilities Operations & Oversight",
				"Preventative & Routine Maintenance",
				"Vendor & Subcontractor Contracts",
				"Energy Efficiency & Code Audits",
				"Safety & Security System Compliance",
			],
		},
		investment: {
			title: "DEVELOPMENT & INVESTMENT",
			leftTextTop:
				"Smart builds start with robust market positioning. We evaluate high-growth submarkets, project deep financial pro-formas, and handle zoning, permitting, and pre-development strategies.",
			leftTextBottom:
				"We match capital resources with premium development sites to optimize project yield and build long-term real estate equity.",
			bullets: [
				"Market & Feasibility Analytics",
				"Site Acquisition & Due Diligence",
				"Zoning, Entitlements & Permitting",
				"Joint Venture & Investor Allocations",
				"Financial Underwriting & Pro-Formas",
			],
		},
	};

	return (
		<div className="space-y-24 pt-10 pb-16">
			{/* SECTION 1: MISSION & OVERVIEW */}
			<section className="grid grid-cols-1 gap-12 lg:grid-cols-3 items-start px-4">
				<div className="lg:col-span-1">
					<h1 className="text-5xl font-black tracking-tight text-slate-900 md:text-6xl uppercase leading-none">
						Building
						<br />
						Dreams
					</h1>
					<div className="mt-4 h-1.5 w-full max-w-70 bg-amber-500 rounded-sm"></div>

					<ul className="mt-6 space-y-1 text-lg font-medium text-slate-600">
						<li>General Contractor</li>
						<li>Builders</li>
						<li>Investors</li>
						<li className="text-slate-400 text-base font-normal mt-2">
							Dallas - Fort Worth
						</li>
					</ul>
				</div>

				<div className="lg:col-span-2 space-y-6 text-slate-700 text-[1.05rem] leading-relaxed">
					<p>
						<strong className="text-slate-900 font-bold">Dreambuildt</strong> is
						a general contractor based in{" "}
						<strong className="text-slate-900 font-bold">Denton, TX</strong>,
						proudly serving some of the fastest-growing cities in the{" "}
						<strong className="text-slate-900 font-bold">
							Dallas-Fort Worth metroplex.
						</strong>
					</p>
					<p>
						<strong className="text-slate-900 font-bold">Our mission:</strong>{" "}
						to help you build the home of your dreams—whether it's a{" "}
						<strong className="text-slate-900 font-bold">
							custom single-family residence
						</strong>
						, a{" "}
						<strong className="text-slate-900 font-bold">luxury estate</strong>,
						or a{" "}
						<strong className="text-slate-900 font-bold">
							large-scale multi-family development.
						</strong>
					</p>
					<p>
						We believe quality homes should be both{" "}
						<strong className="text-slate-900 font-bold">affordable</strong> and{" "}
						<strong className="text-slate-900 font-bold">accessible</strong>.
						That's why we pair deep industry experience with competitive pricing
						to deliver projects that are{" "}
						<strong className="text-slate-900 font-bold">
							efficient, high-quality,
						</strong>{" "}
						and{" "}
						<strong className="text-slate-900 font-bold">
							cost-effective.
						</strong>
					</p>
				</div>
			</section>

			{/* SECTION 2: INTERACTIVE SERVICES TABBED UI */}
			<section className="px-4">
				<h2 className="text-3xl font-extrabold text-center text-slate-900 mb-8 tracking-tight">
					What we do?
				</h2>

				<div className="w-full rounded-xl overflow-hidden shadow-sm border border-slate-200">
					<div className="grid grid-cols-1 sm:grid-cols-3 bg-[#2a2a2a] text-white">
						<button
							onClick={() => setActiveTab("general")}
							className={`flex flex-col items-center justify-center p-6 transition-all duration-200 cursor-pointer text-center font-bold tracking-wider text-xs md:text-sm gap-3 select-none ${
								activeTab === "general"
									? "bg-amber-500 text-slate-950"
									: "hover:bg-neutral-800 text-neutral-300"
							}`}
						>
							<FontAwesomeIcon
								icon={faHardHat}
								className={`text-2xl md:text-3xl ${activeTab === "general" ? "text-slate-950" : "text-amber-500"}`}
							/>
							GENERAL CONTRACTION
						</button>

						<button
							onClick={() => setActiveTab("management")}
							className={`flex flex-col items-center justify-center p-6 transition-all duration-200 cursor-pointer text-center font-bold tracking-wider text-xs md:text-sm gap-3 select-none ${
								activeTab === "management"
									? "bg-amber-500 text-slate-950"
									: "hover:bg-neutral-800 text-neutral-300"
							}`}
						>
							<FontAwesomeIcon
								icon={faBuilding}
								className={`text-2xl md:text-3xl ${activeTab === "management" ? "text-slate-950" : "text-amber-500"}`}
							/>
							BUILDING MANAGEMENT
						</button>

						<button
							onClick={() => setActiveTab("investment")}
							className={`flex flex-col items-center justify-center p-6 transition-all duration-200 cursor-pointer text-center font-bold tracking-wider text-xs md:text-sm gap-3 select-none ${
								activeTab === "investment"
									? "bg-amber-500 text-slate-950"
									: "hover:bg-neutral-800 text-neutral-300"
							}`}
						>
							<FontAwesomeIcon
								icon={faChartLine}
								className={`text-2xl md:text-3xl ${activeTab === "investment" ? "text-slate-950" : "text-amber-500"}`}
							/>
							DEVELOPMENT & INVESTMENT
						</button>
					</div>

					<div className="bg-[#fcfcfc] p-6 md:p-10">
						<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
							<div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
								<p>{tabData[activeTab].leftTextTop}</p>
								<p>{tabData[activeTab].leftTextBottom}</p>
							</div>
							<div className="lg:col-span-5 border-l-4 border-amber-500 pl-6 py-1">
								<ul className="space-y-3 font-semibold text-slate-800 text-sm md:text-base">
									{tabData[activeTab].bullets.map((bullet, idx) => (
										<li key={idx} className="flex items-start">
											<span className="text-amber-600 mr-2 selection:bg-transparent">
												▪
											</span>
											{bullet}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* NEW SECTION 3: WHY DREAM BUILT (Hero Banner) */}
			<section
				className="relative bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden shadow-md"
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80')`,
				}}
			>
				{/* Dark Overlay Tint to maintain text contrast */}
				<div className="bg-black/65 w-full h-full py-16 px-6 md:py-24 md:px-12 text-center text-white">
					<div className="max-w-4xl mx-auto space-y-6">
						<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
							Why Dream Built ?
						</h2>

						<div className="space-y-4 text-neutral-200 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
							<p className="font-semibold text-white text-base md:text-lg">
								At Dream Built, we don’t just build—we partner with you.
							</p>
							<p>
								From the first idea to final delivery, we’re by your side. Our
								team coordinates every phase—
								<strong className="text-white font-bold">
									design, budget, permits, construction, and handover
								</strong>
								—so your project moves forward with{" "}
								<strong className="text-amber-400 font-bold">
									clarity, confidence,
								</strong>{" "}
								and{" "}
								<strong className="text-amber-400 font-bold">
									peace of mind.
								</strong>
							</p>
							<p>
								Whether you already have land and a full vision, or you’re still
								exploring your options, we adapt to your needs and goals.
							</p>
							<p className="pt-2 font-medium">
								We focus on{" "}
								<strong className="text-white font-bold">
									quality, compliance,
								</strong>{" "}
								and{" "}
								<strong className="text-white font-bold">transparency</strong>{" "}
								every step of the way.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

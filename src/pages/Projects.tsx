import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface ProjectItem {
	id: string;
	category: string;
	name: string;
	location: string;
	serviceType: string;
	bullets: string[];
	images: string[];
}

export default function Projects() {
	// State array tracking which project cards are currently expanded
	const [expandedProjects, setExpandedProjects] = useState<string[]>([
		"affordable-1",
	]);

	// Master Data Matrix reflecting all projects and structural criteria from your screenshots
	const projectsData: ProjectItem[] = [
		{
			id: "affordable-1",
			category: "Affordable",
			name: "North Bluff",
			location: "Austin",
			serviceType: "General contracting",
			bullets: [
				"32 affordable homes",
				"71,000 SF total project",
				"2,200 square feet per unit",
				"2 or 3 bedrooms",
				"1.5 restrooms",
			],
			images: [
				"https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=300&q=80",
				"https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=300&q=80",
				"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=300&q=80",
				"https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=300&q=80",
				"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80",
			],
		},
		{
			id: "luxury-1",
			category: "Luxury",
			name: "Duchess Trail",
			location: "Dallas",
			serviceType: "Building management",
			bullets: [
				"10,000 square foot lot",
				"4,800 square foot home",
				"2 Story",
				"3.5 restrooms",
				"4 bedrooms",
				"2 Car garage",
			],
			images: [
				"https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=300&q=80",
				"https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=300&q=80",
				"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=300&q=80",
			],
		},
		{
			id: "multifamily-1",
			category: "Multifamily",
			name: "San Jacinto",
			location: "Dallas",
			serviceType: "General contracting",
			bullets: [
				"7 townhomes",
				"3 story",
				"2 bathrooms",
				"3 bedrooms",
				"2 car garage",
			],
			images: [
				"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=300&q=80",
				"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80",
			],
		},
	];

	// Toggle Functionality Logic
	const toggleProject = (id: string) => {
		if (expandedProjects.includes(id)) {
			setExpandedProjects(expandedProjects.filter((pId) => pId !== id));
		} else {
			setExpandedProjects([...expandedProjects, id]);
		}
	};

	return (
		<div className="space-y-24 py-10">
			{/* =========================================================
          SECTION 1: PAGE INTRO & DESCRIPTION
          ========================================================= */}
			<section className="relative overflow-hidden grid grid-cols-1 gap-12 lg:grid-cols-3 items-start pb-16">
				<div className="lg:col-span-1 relative">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
						Selected work
					</p>
					<h1 className="text-5xl font-black tracking-tight text-slate-900 uppercase leading-none">
						Projects
					</h1>
					<div className="mt-4 h-1.5 w-full max-w-60 bg-amber-500 rounded-sm"></div>

					<ul className="mt-6 space-y-1 text-lg font-medium text-slate-600">
						<li>Affordable homes</li>
						<li>Standard residences</li>
						<li>Luxury homes</li>
						<li>Multifamily</li>
						<li className="text-slate-400 text-base font-normal mt-2">
							Residential & multifamily expertise
						</li>
					</ul>
				</div>

				<div className="lg:col-span-2 space-y-6 text-slate-700 text-[1.05rem] leading-relaxed">
					<p>
						At <strong className="text-slate-900 font-bold">Dream Built</strong>
						, we develop construction projects with a clear focus on{" "}
						<strong className="text-slate-900 font-bold">
							efficiency, time reduction, and cost control
						</strong>{" "}
						leveraging our operational experience and network of partners in the
						Dallas–Fort Worth area.
					</p>
					<p>
						Thanks to our close relationships with local{" "}
						<strong className="text-slate-900 font-bold">
							suppliers, contractors, and specialists
						</strong>
						, as well as a streamlined management system, we can execute
						projects of varying scale, from single-family homes to multi-family
						developments or entire residential complexes, with{" "}
						<strong className="text-slate-900 font-bold">
							speed, cleanliness, efficiency, order, and quality.
						</strong>
					</p>
					<p>
						Whether you're looking to build{" "}
						<strong className="text-slate-900 font-bold">
							your ideal home, develop a subdivision
						</strong>
						, or launch a{" "}
						<strong className="text-slate-900 font-bold">
							profitable real estate investment
						</strong>
						, Dream Built is your strategic partner in one of the fastest
						growing areas in the United States.
					</p>
				</div>
			</section>

			{/* =========================================================
          SECTION 2: ACCORDION LISTING WITH DYNAMIC DROPDOWNS
          ========================================================= */}
			<section className="space-y-12 max-w-6xl mx-auto">
				{projectsData.map((project) => {
					const isExpanded = expandedProjects.includes(project.id);

					return (
						<div
							key={project.id}
							className="bg-[#fcfcfc] border border-neutral-200/70 rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden transition-all duration-300 hover:shadow-md"
						>
							{/* Top Row Block Layout */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
								{/* Left Side Labels Info */}
								<div>
									<h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
										{project.category}
									</h2>
									<h3 className="text-2xl font-bold text-slate-800 mb-1">
										{project.name}
									</h3>
									<p className="text-slate-500 text-lg font-medium">
										{project.location}
									</p>
								</div>

								{/* Right Side Spec Bullet Point Info */}
								<div>
									<h4 className="text-xl font-bold text-slate-900 mb-4 md:text-2xl">
										{project.serviceType}
									</h4>
									<ul className="space-y-2 text-slate-700 text-[1.05rem] font-medium pl-1">
										{project.bullets.map((bullet, idx) => (
											<li key={idx} className="flex items-start">
												<span className="text-slate-900 mr-3 select-none text-xs pt-1">
													▪
												</span>
												{bullet}
											</li>
										))}
									</ul>
								</div>
							</div>

							{/* Centered Accordion Action Button Trigger */}
							<div className="flex justify-center mt-8">
								<button
									onClick={() => toggleProject(project.id)}
									aria-expanded={isExpanded}
									className="p-3 text-slate-900 hover:text-amber-500 transition-colors duration-200 focus:outline-none cursor-pointer group"
								>
									<FontAwesomeIcon
										icon={faChevronDown}
										className={`text-2xl transition-transform duration-300 ${
											isExpanded
												? "rotate-180 text-amber-500"
												: "group-hover:translate-y-0.5"
										}`}
									/>
								</button>
							</div>

							{/* Hidden Dropdown Gallery Wrapper Block */}
							<div
								className={`grid transition-all duration-300 ease-in-out ${
									isExpanded
										? "grid-rows-[1fr] opacity-100 mt-8"
										: "grid-rows-[0fr] opacity-0 pointer-events-none"
								}`}
							>
								<div className="overflow-hidden">
									<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-4 border-t border-neutral-200">
										{project.images.map((imgUrl, imgIdx) => (
											<div
												key={imgIdx}
												className="h-40 rounded-xl overflow-hidden shadow-inner bg-neutral-100 border border-neutral-200/50"
											>
												<img
													src={imgUrl}
													alt={`${project.name} construction slide view ${imgIdx + 1}`}
													className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
												/>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</section>
		</div>
	);
}

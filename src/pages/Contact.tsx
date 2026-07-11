import { FormEvent } from "react";

export default function Contact() {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<div className="space-y-16 py-10 px-4">
			<section className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
				<div className="space-y-6">
					<div className="space-y-3">
						<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
							Contact us
						</p>
						<h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl uppercase leading-none">
							Start your next build
						</h1>
						<div className="h-1.5 w-full max-w-56 bg-amber-500 rounded-sm"></div>
					</div>

					<p className="text-lg leading-relaxed text-slate-700">
						Whether you are planning a custom home, renovation, or investment
						project, we would love to learn more about your goals. Share a few
						details below and we will reach out to schedule a consultation.
					</p>

					<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
						<h2 className="text-xl font-bold text-slate-900">
							What we typically need
						</h2>
						<ul className="mt-4 space-y-2 text-sm text-slate-600">
							<li>• Project type and timeline</li>
							<li>• Location or service area</li>
							<li>• Budget range and preferred contact method</li>
						</ul>
					</div>
				</div>

				<div className="rounded-3xl border border-slate-200 bg-[#fcfcfc] p-6 shadow-sm md:p-8">
					<form onSubmit={handleSubmit} className="space-y-5">
						<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
							<div>
								<label className="mb-2 block text-sm font-semibold text-slate-700">
									Name
								</label>
								<input
									type="text"
									placeholder="Your name"
									className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500"
								/>
							</div>
							<div>
								<label className="mb-2 block text-sm font-semibold text-slate-700">
									Email
								</label>
								<input
									type="email"
									placeholder="you@example.com"
									className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500"
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
							<div>
								<label className="mb-2 block text-sm font-semibold text-slate-700">
									Phone
								</label>
								<input
									type="tel"
									placeholder="(555) 123-4567"
									className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500"
								/>
							</div>
							<div>
								<label className="mb-2 block text-sm font-semibold text-slate-700">
									Project type
								</label>
								<select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500">
									<option>New construction</option>
									<option>Remodel</option>
									<option>Investment</option>
									<option>Other</option>
								</select>
							</div>
						</div>

						<div>
							<label className="mb-2 block text-sm font-semibold text-slate-700">
								Location
							</label>
							<input
								type="text"
								placeholder="City or area"
								className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500"
							/>
						</div>

						<div>
							<label className="mb-2 block text-sm font-semibold text-slate-700">
								Project details
							</label>
							<textarea
								rows={4}
								placeholder="Tell us a little about your project, timeline, and goals."
								className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500"
							/>
						</div>

						<button
							type="submit"
							className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-500 hover:text-slate-950"
						>
							Request a consultation
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}

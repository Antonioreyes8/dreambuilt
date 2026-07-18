import { useState, type ChangeEvent, type FormEvent } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xbldkgaq";

const initialFormState = {
	name: "",
	email: "",
	phone: "",
	projectType: "New construction",
	location: "",
	message: "",
};

export default function Contact() {
	const [formData, setFormData] = useState(initialFormState);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

	const handleChange = (
		event: ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = event.target;
		setFormData((current) => ({ ...current, [name]: value }));
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);
		setStatus("idle");

		try {
			const response = await fetch(FORM_ENDPOINT, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: new URLSearchParams({
					name: formData.name,
					email: formData.email,
					phone: formData.phone,
					projectType: formData.projectType,
					location: formData.location,
					message: formData.message,
				}).toString(),
			});

			if (response.ok) {
				setStatus("success");
				setFormData(initialFormState);
			} else {
				setStatus("error");
			}
		} catch {
			setStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="space-y-16 py-10 px-4">
			<section className="relative overflow-hidden grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start pb-16">
				<div className="space-y-6 relative">
					<div className="space-y-3">
						<p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
							Contact us
						</p>
						<h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl uppercase leading-none">
							Start your next build
						</h1>
						<div className="h-1.5 w-full max-w-56 bg-amber-500 rounded-sm"></div>
					</div>
					<p className="text-slate-400 text-base font-normal mt-2">
						New builds • remodels • consultations
					</p>

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
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder="Your name"
									required
									className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500"
								/>
							</div>
							<div>
								<label className="mb-2 block text-sm font-semibold text-slate-700">
									Email
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="you@example.com"
									required
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
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									placeholder="(555) 123-4567"
									className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500"
								/>
							</div>
							<div>
								<label className="mb-2 block text-sm font-semibold text-slate-700">
									Project type
								</label>
								<select
									name="projectType"
									value={formData.projectType}
									onChange={handleChange}
									className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500"
								>
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
								name="location"
								value={formData.location}
								onChange={handleChange}
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
								name="message"
								value={formData.message}
								onChange={handleChange}
								placeholder="Tell us a little about your project, timeline, and goals."
								className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-amber-500"
							/>
						</div>

						{status === "success" && (
							<p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
								Thanks! Your inquiry was sent successfully.
							</p>
						)}

						{status === "error" && (
							<p className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
								Something went wrong. Please try again or contact us directly.
							</p>
						)}

						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-500 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
						>
							{isSubmitting ? "Sending..." : "Request a consultation"}
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}

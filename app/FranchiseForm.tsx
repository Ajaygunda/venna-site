"use client";

import { FormEvent, useState } from "react";

const fields = {
  locationReady: ["Yes", "No"],
  investment: ["₹25 to ₹35 Lakhs", "Above ₹40 Lakhs"],
  funding: ["Self-funded", "Investor backed"],
  timeline: ["Immediately", "1–2 months", "3–6 months"],
};

function ChoiceGroup({
  legend,
  name,
  options,
}: {
  legend: string;
  name: string;
  options: string[];
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="mb-3 text-sm font-semibold leading-snug text-venna-espresso">
        {legend} <span className="text-venna-brown">*</span>
      </legend>
      <div className="flex flex-wrap gap-2.5">
        {options.map((option) => (
          <label key={option} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              required
              className="peer sr-only"
            />
            <span className="flex min-h-10 items-center justify-center rounded-full border border-venna-brown/25 bg-white px-4 py-2 text-center text-sm leading-snug text-venna-espresso transition peer-checked:border-venna-brown peer-checked:bg-venna-brown peer-checked:text-venna-ivory peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-venna-brown">
              {option}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function FranchiseForm() {
  const [submitted, setSubmitted] = useState(false);
  const [experienceAnswer, setExperienceAnswer] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const experience =
      data.get("experienceAnswer") === "Yes"
        ? `Yes — ${data.get("experienceDetails")}`
        : "No";
    const message = [
      "Hello Venna, I would like to enquire about owning a Venna outlet.",
      "",
      `Full name: ${data.get("fullName")}`,
      `Contact number: ${data.get("contactNumber")}`,
      `Email: ${data.get("email")}`,
      `Proposed city / area: ${data.get("proposedArea")}`,
      `Location identified: ${data.get("locationReady")}`,
      `Investment capacity: ${data.get("investment")}`,
      `Source of investment: ${data.get("funding")}`,
      `Previous business experience: ${experience}`,
      `Setup timeline: ${data.get("timeline")}`,
    ].join("\n");

    setSubmitted(true);
    window.open(
      `https://wa.me/918801166319?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  const inputClass =
    "mt-2 block min-h-12 w-full rounded-md border border-venna-brown/25 bg-white px-4 py-3 text-venna-espresso outline-none transition placeholder:text-venna-espresso/35 focus:border-venna-brown focus:ring-2 focus:ring-venna-brown/15";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
      <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2 sm:gap-y-5">
        <label className="block text-sm font-semibold text-venna-espresso">
          Full name <span className="text-venna-brown">*</span>
          <input name="fullName" type="text" autoComplete="name" required className={inputClass} />
        </label>
        <label className="block text-sm font-semibold text-venna-espresso">
          Contact number <span className="text-venna-brown">*</span>
          <input
            name="contactNumber"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            className={inputClass}
          />
        </label>
        <label className="block text-sm font-semibold text-venna-espresso">
          Email ID <span className="text-venna-brown">*</span>
          <input name="email" type="email" autoComplete="email" required className={inputClass} />
        </label>
        <label className="block text-sm font-semibold text-venna-espresso">
          Proposed city / area for the outlet <span className="text-venna-brown">*</span>
          <input name="proposedArea" type="text" required className={inputClass} />
        </label>
      </div>

      <div className="grid gap-x-6 gap-y-7 border-t border-venna-brown/15 pt-6 sm:grid-cols-2 sm:pt-8">
        <ChoiceGroup
          legend="Do you already have a location in mind?"
          name="locationReady"
          options={fields.locationReady}
        />
        <ChoiceGroup
          legend="Investment capacity for this venture"
          name="investment"
          options={fields.investment}
        />
        <ChoiceGroup
          legend="Source of investment"
          name="funding"
          options={fields.funding}
        />
        <fieldset className="min-w-0">
          <legend className="mb-3 text-sm font-semibold leading-snug text-venna-espresso">
            Have you invested in or operated a business before? <span className="text-venna-brown">*</span>
          </legend>
          <div className="flex gap-2.5">
            {["Yes", "No"].map((option) => (
              <label key={option} className="cursor-pointer">
                <input
                  type="radio"
                  name="experienceAnswer"
                  value={option}
                  required
                  checked={experienceAnswer === option}
                  onChange={() => setExperienceAnswer(option)}
                  className="peer sr-only"
                />
                <span className="flex min-h-10 items-center justify-center rounded-full border border-venna-brown/25 bg-white px-4 py-2 text-center text-sm leading-snug text-venna-espresso transition peer-checked:border-venna-brown peer-checked:bg-venna-brown peer-checked:text-venna-ivory peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-venna-brown">
                  {option}
                </span>
              </label>
            ))}
          </div>

          {experienceAnswer === "Yes" && (
            <label className="mt-4 block text-sm font-semibold text-venna-espresso sm:col-span-2">
              Brief business details <span className="text-venna-brown">*</span>
              <textarea
                name="experienceDetails"
                rows={3}
                required
                className={inputClass}
                placeholder="Tell us about the business and your role"
              />
            </label>
          )}
        </fieldset>
      </div>

      <div className="border-t border-venna-brown/15 pt-6 sm:pt-8">
        <ChoiceGroup
          legend="If approved, when can you start the setup process?"
          name="timeline"
          options={fields.timeline}
        />
      </div>

      <div className="flex flex-col items-stretch gap-3 border-t border-venna-brown/15 pt-6 sm:flex-row sm:items-center sm:pt-8">
        <button
          type="submit"
          className="w-full rounded-full bg-venna-brown px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-venna-ivory transition hover:bg-venna-brownDark sm:w-auto"
        >
          Send enquiry on WhatsApp
        </button>
        {submitted && (
          <p role="status" className="text-sm text-venna-espresso/70">
            Your enquiry is ready in WhatsApp. Tap send to share it with Venna.
          </p>
        )}
      </div>
    </form>
  );
}
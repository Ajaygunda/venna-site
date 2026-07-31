import FranchiseForm from "../FranchiseForm";
import Header from "../Header";

export const metadata = {
  title: "Own a Venna Outlet | Franchise Enquiry",
  description: "Enquire about owning a Venna Heritage Bangalore Dosa Cafe outlet.",
};

export default function FranchisePage() {
  return (
    <main id="top" className="min-h-screen bg-venna-cream">
      <Header />

      <section className="py-10 sm:py-14 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-venna-brown">
              Franchise with Venna
            </p>
            <h1 className="font-serif text-4xl leading-tight text-venna-espresso md:text-5xl">
              Want to own Venna Outlet?
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-venna-espresso/75 sm:mt-5 sm:text-[17px]">
              Bring Bangalore&apos;s beloved benne dose and filter kaapi to your city.
              Tell us a little about yourself and the outlet you have in mind.
            </p>
            <div className="mt-6 border-l-2 border-venna-marigold pl-4 sm:mt-8 sm:pl-5">
              <p className="font-serif text-xl text-venna-espresso">
                Partnership opportunities are limited and selective.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-venna-espresso/65">
                Our team will review your details and connect with suitable applicants.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-venna-brown/15 bg-venna-ivory p-4 shadow-xl shadow-venna-espresso/5 sm:p-7 lg:p-8">
            <FranchiseForm />
          </div>
        </div>
      </section>
    </main>
  );
}
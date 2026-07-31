import Header from "./Header";
import DeliveryLink from "./DeliveryLink";

type Item = { name: string };

const idlyVada: Item[] = [
  { name: "Vada (2pc)" },
  { name: "Puri (2pc)" },
  { name: "Plain Idly (3pc)" },
  { name: "Plain Thatte Idly (1pc)" },
  { name: "Benne Thatte Idly (1pc)" },
  { name: "Ghee Thatte Idly (1pc)" },
  { name: "Ghee Podi Thatte Idly (1pc)" },
  { name: "Button Idly (10pc)" },
  { name: "Ghee Button Idly (10pc)" },
  { name: "Ghee Podi Button Idly (10pc)" },
  { name: "Mangalore Buns (2pc)" },
];

const benneDose: Item[] = [
  { name: "Benne Plain Dose" },
  { name: "Benne Khali Dose" },
  { name: "Benne Podi Dose" },
  { name: "Benne Garlic Dose" },
  { name: "Benne Podi Masala Dose" },
  { name: "Benne Masala Dose" },
  { name: "Benne Karam Masala Dose" },
  { name: "Benne Garlic Masala Dose" },
  { name: "Benne Open Masala Dose" },
];

const combos: Item[] = [
  { name: "Combo 01 — 2pc Idly, 1pc Vada" },
  { name: "Combo 02 — 1pc Plain Thatte Idly, 1pc Vada" },
  { name: "Combo 03 — 1pc Benne Plain Dose, 1pc Vada" },
];

const beverages: Item[] = [
  { name: "Hot Milk" },
  { name: "Filter Kaapi" },
  { name: "Iced Filter Kaapi" },
  { name: "Vegan Iced Filter Kaapi" },
  { name: "Horlicks" },
  { name: "Iced Horlicks" },
  { name: "Vegan Iced Horlicks" },
  { name: "Boost" },
  { name: "Iced Boost" },
  { name: "Vegan Iced Boost" },
];

function MenuGroup({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: Item[];
}) {
  return (
    <details className="group rounded-lg border border-venna-ivory/10 bg-venna-ivory/[0.04] p-4 md:p-5">
      <summary className="flex cursor-pointer list-none items-center gap-2.5 sm:cursor-default [&::-webkit-details-marker]:hidden">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-venna-marigold/50 text-[9px] font-semibold text-venna-marigold">
          {number}
        </span>
        <h3 className="font-serif text-lg leading-tight text-venna-marigold">{title}</h3>
        <span className="h-px flex-1 bg-venna-ivory/10" aria-hidden="true" />
        <span className="text-xl font-light leading-none text-venna-marigold transition-transform group-open:rotate-45 sm:hidden" aria-hidden="true">
          +
        </span>
      </summary>
      <ul className="mt-4 hidden gap-y-2.5 group-open:grid sm:grid">
        {items.map((item) => (
          <li key={item.name} className="flex min-w-0 items-start gap-2 text-[13px] leading-snug text-venna-ivory/85">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-venna-marigold/70" aria-hidden="true" />
            <span className="break-words">{item.name}</span>
          </li>
        ))}
      </ul>
    </details>
  );
}

export default function Home() {
  return (
    <main id="top" className="bg-venna-cream">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end">
        <img
          src="/images/dosa-making.jpg"
          alt="A dosa being folded fresh on the griddle"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-venna-espresso/90 via-venna-espresso/55 to-venna-espresso/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-venna-espresso/80 via-transparent to-venna-espresso/10" />
        <div className="relative max-w-6xl mx-auto px-5 pb-20 pt-32 text-venna-ivory">
          <p className="font-serif text-5xl lowercase leading-none text-venna-ivory md:text-7xl">venna</p>
          <p className="mt-3 uppercase tracking-[0.3em] text-sm text-venna-marigold mb-5">
            వెన్న &nbsp;·&nbsp; वेन्ना
          </p>
          <h1 className="font-serif text-5xl md:text-7xl max-w-2xl leading-[1.05]">
            A piece of Bangalore, in the heart of Hyderabad.
          </h1>
          <p className="mt-6 max-w-xl text-venna-ivory/90 text-lg">
            Golden, buttery, crispy heritage dosas and aromatic filter coffee —
            served the way we grew up loving them.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="bg-venna-marigold text-venna-espresso uppercase tracking-wide text-sm font-semibold px-7 py-3.5 rounded-full hover:brightness-95 transition"
            >
              View Menu
            </a>
            <a
              href="#visit"
              className="border border-venna-ivory/70 text-venna-ivory uppercase tracking-wide text-sm px-7 py-3.5 rounded-full hover:bg-venna-ivory/10 transition"
            >
              Visit Us
            </a>
            <DeliveryLink
              webUrl="https://www.swiggy.com/city/hyderabad/venna-heritage-bangalore-dosa-cafe-manikonda-rest1382132"
              appPackage="in.swiggy.android"
              className="bg-[#fc8019] text-white uppercase tracking-wide text-sm font-semibold px-7 py-3.5 rounded-full hover:brightness-95 transition"
              label="Order Venna on Swiggy"
            >
              Swiggy
            </DeliveryLink>
            <DeliveryLink
              webUrl="https://www.zomato.com/hyderabad/venna-heritage-bangalore-dosa-cafe-manikonda/order"
              appPackage="com.application.zomato"
              className="bg-[#e23744] text-white uppercase tracking-wide text-sm font-semibold px-7 py-3.5 rounded-full hover:brightness-95 transition"
              label="Order Venna on Zomato"
            >
              Zomato
            </DeliveryLink>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="max-w-6xl mx-auto px-5 py-24 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="uppercase tracking-[0.25em] text-xs text-venna-brown mb-3">Our Story</p>
          <h2 className="font-serif text-4xl text-venna-espresso mb-6">Born from missing home.</h2>
          <p className="text-venna-espresso/80 leading-relaxed text-[17px]">
            We are bringing a piece of Bangalore to Hyderabad. Born from missing the
            heritage, golden, buttery, crispy dosas and aromatic filter coffee we grew
            up loving every day, Venna was created.
          </p>
          <p className="text-venna-espresso/80 leading-relaxed text-[17px] mt-4">
            Venna is a South Indian café serving authentic heritage Bangalore dosa,
            fresh tiffins, comforting chutneys, and classic filter coffee — a perfect
            breakfast place for those who crave real South Indian flavours and
            simple, soulful food.
          </p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-xl">
          <img
            src="/images/filter-coffee-pour.jpg"
            alt="Fresh filter coffee being poured into a steel davara"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-venna-espresso/80 to-transparent px-6 pb-6 pt-20 text-venna-ivory">
            <p className="font-serif text-xl">Filter kaapi, poured the old way.</p>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="bg-venna-espresso py-16 text-venna-ivory md:py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-10 text-center">
            <p className="uppercase tracking-[0.25em] text-xs text-venna-marigold mb-3">Menu</p>
            <h2 className="font-serif text-4xl md:text-5xl">What we&apos;re serving</h2>
          </div>

          <div className="grid items-start gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
            <MenuGroup number="01" title="Idly & Vada" items={idlyVada} />
            <MenuGroup number="02" title="Benne Dose" items={benneDose} />
            <MenuGroup number="03" title="Combos" items={combos} />
            <MenuGroup number="04" title="Beverages" items={beverages} />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="max-w-6xl mx-auto px-5 py-24">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.25em] text-xs text-venna-brown mb-3">Gallery</p>
          <h2 className="font-serif text-4xl text-venna-espresso">A little taste of Venna</h2>
        </div>
        <div className="grid auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-12 md:gap-4">
          <figure className="group relative col-span-2 row-span-2 overflow-hidden rounded-lg md:col-span-4">
            <img
              src="/images/podi-thatte-idli.jpg"
              alt="Podi thatte idli served with red and coconut chutneys"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </figure>
          <figure className="group relative row-span-2 overflow-hidden rounded-lg md:col-span-4">
            <img
              src="/images/benne-dosa.jpg"
              alt="Crisp benne dosa served with two chutneys"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </figure>
          <figure className="group relative overflow-hidden rounded-lg md:col-span-4">
            <img
              src="/images/brass-filter-coffee.jpg"
              alt="Filter coffee in a brass tumbler surrounded by coffee beans"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </figure>
          <figure className="group relative overflow-hidden rounded-lg md:col-span-2">
            <img
              src="/images/vada.jpg"
              alt="Crisp vadas served with chutney"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </figure>
          <figure className="group relative col-span-2 row-span-2 overflow-hidden rounded-lg md:col-span-2 md:row-span-1">
            <img
              src="/images/thatte-idli.jpg"
              alt="Traditional thatte idli served on a banana leaf"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="bg-venna-brown/10 py-24">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-venna-brown mb-3">Visit Us</p>
            <h2 className="font-serif text-4xl text-venna-espresso mb-8">Find your way to Venna</h2>

            <div className="space-y-6 text-venna-espresso/85">
              <div>
                <p className="font-semibold text-venna-espresso mb-1">Address</p>
                <p>
                  Ground Floor, Twin Diamond Apartment, Diamond Block,
                  <br />
                  Road No. 13, Alkapur Township, Puppalguda,
                  <br />
                  Hyderabad, Telangana 500089
                </p>
              </div>
              <div>
                <p className="font-semibold text-venna-espresso mb-1">Hours</p>
                <p>Everyday · 7:00 AM – 12:00 PM &amp; 6:00 PM – 11:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-venna-espresso mb-1">Phone</p>
                <p>
                  <a href="tel:+918801166319" className="hover:text-venna-brown">8801166319</a>
                  {" / "}
                  <a href="tel:+919502415999" className="hover:text-venna-brown">9502415999</a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-venna-espresso mb-1">Email</p>
                <p>
                  <a href="mailto:vennadosacafe@gmail.com" className="hover:text-venna-brown">
                    vennadosacafe@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/search?sca_esv=e6f5da5899513930&sxsrf=APpeQnuGeXRlr4yQ1YvQLwFbsVg3fCe4eQ:1785473866597&q=venna-heritage+bangalore+dosa+cafe+hyderabad+address&ludocid=17528056419269476634&sa=X&ved=2ahUKEwiD2Mu8kPyVAxWTbmwGHYqfOM8Q6BN6BAgnEAI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-9 bg-venna-brown text-venna-ivory uppercase tracking-wide text-sm px-7 py-3.5 rounded-full hover:bg-venna-brownDark transition"
            >
              Get Directions
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl min-h-[360px]">
            <iframe
              title="Venna location map"
              src="https://maps.google.com/maps?q=Venna%20Heritage%20Bangalore%20Dosa%20Cafe%20Puppalguda%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-venna-espresso text-venna-ivory/70 py-10">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-serif text-2xl lowercase text-venna-ivory">venna</span>
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Venna Heritage Bangalore Dosa Cafe · Puppalguda, Hyderabad
          </p>
        </div>
      </footer>
    </main>
  );
}

import { useState } from "react";
import { images, icons } from "./assets";


const steps = [
  {
    number: "01",
    icon: icons.squares,
    title: "Choose a service",
    description:
      "Start with what needs fixing, then add your area or PIN code.",
  },
  {
    number: "02",
    icon: icons.speech,
    title: "Tell us your problem",
    description:
      "Describe the symptoms. You don't need to know the technical cause.",
  },
  {
    number: "03",
    icon: icons.hardHat,
    title: "Get a technician",
    description:
      "Find nearby help and discuss the work, timing and charges directly.",
  },
  {
    number: "04",
    icon: icons.check,
    title: "Get it fixed",
    description:
      "Prepare for the visit and agree on the repair before work begins.",
  },
];

const services = [
  {
    icon: icons.plumbing,
    title: "Plumber",
    description: "Leaking tap? Blocked drain?",
    detail: "Start with plumbing help.",
  },
  {
    icon: icons.cooling,
    title: "AC Repair",
    description: "AC not cooling or leaking?",
    detail: "Start with AC repair.",
  },
];

const discussionPoints = [
  {
    icon: icons.carpenter,
    title: "The work",
    description:
      '"Do you handle this issue? What would you need to check?" Confirm what the visit will cover.',
  },
  {
    icon: icons.lamp,
    title: "The timing",
    description:
      '"When are you available?" Agree on a visit time directly, rather than assuming same-day help.',
  },
  {
    icon: icons.accurate,
    title: "The charges",
    description:
      '"Is there a visit or inspection charge? What might the repair cost?" Ask what is included.',
  },
  {
    icon: icons.setting,
    title: "The parts",
    description:
      '"Might any parts need replacing? Are parts and labour quoted separately?" Agree on costs before proceeding.',
  },
];

const preparation = [
  "Share your address, a useful landmark and any building access instructions.",
  "Clear a safe path to the appliance or repair area. Keep children and pets away.",
  "Keep the model number, error code or a photo of the issue handy, if available.",
  "Explain the problem again and confirm the proposed work and costs before the repair starts.",
];

const faqs = [
  {
    question: "What if I don't know which service I need?",
    answer:
      "Start with the item or area that needs attention. Plumber for a leaking tap, AC Repair for cooling issues, or Electrician for a faulty switch. Describe the symptoms rather than trying to name the fault.",
  },
  {
    question: "Do I have to allow my current location?",
    answer:
      "No. You can enter your area or PIN code instead. Location helps you look for technicians nearby; availability varies by service and location.",
  },
  {
    question: "How soon can a technician visit?",
    answer:
      "That depends on the service, your location and the technician's availability. Discuss a suitable time directly with the technician before planning around the visit.",
  },
  {
    question: "How much will the repair cost?",
    answer:
      "Discuss charges directly with the technician. Ask about any visit or inspection fee, labour, parts and the expected repair cost. Confirm changes to the scope or estimate before additional work starts.",
  },
  {
    question: "What if the issue could be unsafe?",
    answer:
      "For sparks, smoke, a burning smell or water near electrical fittings, keep clear and don't attempt a repair yourself. Seek appropriate urgent help rather than waiting for a routine repair visit.",
  },
];

function Icon({ src, className = "h-5 w-5" }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`shrink-0 object-contain ${className}`}
    />
  );
}

function Arrow() {
  return <Icon src={icons.arrow} className="h-4 w-4" />;
}

function Brand() {
  return (
   <a href="#home" aria-label="FixNear home" className="inline-flex shrink-0">
  <img
    src={images.logo}
    alt="FixNear"
    className="h-auto w-[140px] object-contain sm:w-[105px] lg:w-[165px] xl:w-[180px]"
  />
</a>
   
  );
}







function Navbar() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Become Tech", href: "#become-tech" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#D8C7AF] bg-[#F7F2E9]">
      <div
        className="
          mx-auto grid max-w-[1200px]
          grid-cols-[1fr_auto]
          grid-rows-[60px_42px]
          items-center
          gap-y-0
          px-3 py-1
          sm:px-5
          lg:flex lg:h-[80px] lg:flex-nowrap
          lg:justify-between lg:gap-0 lg:px-8 lg:py-0
        "
      >
        {/* Logo */}
        <div className="flex h-[60px] items-center [&_img]:h-27 [&_img]:w-auto [&_img]:object-contain lg:order-1">
          <Brand />
        </div>

        {/* Login and Sign Up */}
        <div className="flex h-[30px] items-center justify-end gap-2 lg:order-3 lg:gap-5">
          <a
            href="#login"
            className="whitespace-nowrap text-[12px] font-medium text-[#24483A] hover:text-[#C65D3A] lg:text-[13px] lg:font-normal"
          >
            Login
          </a>

          <a
            href="#signup"
            className="inline-flex h-7 min-w-[70px] items-center justify-center rounded-md bg-[#24483A] px-2.5 text-[11px] font-semibold !text-white lg:h-10 lg:min-w-[100px] lg:px-5 lg:text-sm"
          >
            <span className="whitespace-nowrap !text-white">
              Sign Up
            </span>
          </a>
        </div>

        {/* All Five Links - One Line */}
        <nav className="col-span-2 flex h-[20px] w-full items-center justify-between gap-x-1 lg:order-2 lg:col-span-1 lg:h-auto lg:w-auto lg:justify-center lg:gap-x-7">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`whitespace-nowrap text-[clamp(10px,3.2vw,13px)] leading-none transition hover:text-[#C65D3A] lg:text-[13px] lg:leading-normal ${
                link.label === "How It Works"
                  ? "font-semibold text-[#24483A] lg:underline lg:underline-offset-8"
                  : "text-[#24483A]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}









function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid w-full max-w-[1332px] items-center gap-6 px-5 py-8 sm:gap-8 sm:px-8 sm:py-10 lg:grid-cols-[1fr_1fr] lg:gap-8 lg:px-12 lg:py-12"
    >
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#D8C7AF] px-3.5 py-2 text-[13px] font-medium text-[#24483A] sm:px-3 sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-[#24483A] sm:h-1.5 sm:w-1.5" />
          Local help, a little less hassle
        </div>

        <h1 className="max-w-[620px] text-[34px] font-bold leading-[1.1] tracking-[-0.6px] text-[#24483A] sm:text-5xl lg:text-[52px]">
          Everyday problem?
          <span className="mt-1 block text-[#C65D3A]">
            Here’s where to start.
          </span>
        </h1>

        <p className="mt-5 max-w-[560px] text-base leading-[1.55] text-[#24483A]/80 sm:text-[15px] sm:leading-6">
          A leaking tap. An AC that isn't cooling. FixNear helps you
          find local technicians — and this guide helps you know what
          to share, ask and expect.
        </p>

        <div className="mt-6 flex flex-col items-stretch gap-5 sm:flex-row sm:items-center">
          <a
            href="#services"
            className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#24483A] px-5 text-base font-semibold text-white sm:min-h-12 sm:w-auto sm:gap-4 sm:rounded-md sm:text-sm"
          >
            <span className="!text-white">Find a technician</span>
            <Icon
              src={icons.arrow}
              className="h-5 w-5 brightness-0 invert sm:h-4 sm:w-4"
            />
          </a>

          <a
            href="#how-it-works"
            className="text-center text-[15px] font-semibold text-[#24483A] hover:text-[#C65D3A] sm:text-xs"
          >
            Explore the steps ↓
          </a>
        </div>

        <div className="mt-6 flex max-w-[540px] items-start gap-2 text-[13px] leading-[1.5] text-[#24483A]/80 sm:mt-5 sm:text-[11px] sm:leading-5">
          <Icon src={icons.location} className="mt-0.5 h-4 w-4" />
          <p>
            Choose a service and add your area or PIN code. Availability
            varies by service and location.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end lg:translate-x-6">
        <img
          src={images.heroTechnician}
          alt="FixNear technician ready to help with home repairs"
          className="h-auto w-full max-w-[320px] object-contain sm:max-h-[300px] sm:max-w-[440px] lg:max-h-[390px] lg:max-w-[600px]"
        />
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#D8C7AF] py-10 sm:py-9 lg:py-11">
      <div className="mx-auto max-w-[1332px] px-5 sm:px-8 lg:px-12">
        <h2 className="text-[26px] font-bold tracking-tight text-[#24483A] sm:text-2xl lg:text-3xl">
          How FixNear works
        </h2>
        <p className="mt-2 text-[15px] leading-6 text-[#24483A]/75 sm:text-sm">
          Four simple steps, with a few useful things to know along the way.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-lg bg-[#F7F2E9] p-5 transition duration-200 hover:-translate-y-1 hover:shadow-sm sm:min-h-[165px] sm:p-4"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#24483A] text-xs font-bold text-white sm:h-8 sm:w-8 sm:text-[11px]">
                {step.number}
              </span>
              <Icon src={step.icon} className="mt-3 h-6 w-6 sm:h-5 sm:w-5" />
              <h3 className="mt-3 text-lg font-semibold text-[#24483A] sm:mt-2 sm:text-sm">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-6 text-[#24483A]/75 sm:text-[11px] sm:leading-[1.6]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="mx-auto grid max-w-[1332px] gap-8 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-12 lg:py-14"
    >
      <div>
        <p className="mb-2 text-xs font-semibold tracking-wide text-[#C65D3A] sm:text-[10px]">
          01 / CHOOSE A SERVICE
        </p>
        <h2 className="text-[28px] font-bold leading-tight tracking-tight text-[#24483A] sm:text-3xl">
          Start with what needs fixing.
        </h2>
        <p className="mt-3 max-w-lg text-[15px] leading-6 text-[#24483A]/75 sm:mt-2 sm:text-xs sm:leading-5">
          Pick the appliance or part of your home that needs attention.
          You don't have to diagnose the fault first.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-[#D8C7AF] bg-white/70 p-4 sm:p-3.5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-md bg-[#D8C7AF] sm:h-8 sm:w-8">
                <Icon src={service.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-2 text-lg font-semibold text-[#24483A] sm:text-sm">
                {service.title}
              </h3>
              <p className="mt-1 text-sm leading-5 text-[#24483A]/75 sm:text-[11px] sm:leading-4">
                {service.description}
              </p>
              <p className="text-sm leading-5 text-[#24483A]/75 sm:text-[11px] sm:leading-4">
                {service.detail}
              </p>
              <a
                href="#find-technician"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#24483A] hover:text-[#C65D3A] sm:mt-2 sm:text-[11px]"
              >
                Find technician
                <Arrow />
              </a>
            </article>
          ))}
        </div>

        <a
          href="#services"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#24483A] hover:text-[#C65D3A] sm:mt-4 sm:text-[11px]"
        >
          Browse all services
          <Arrow />
        </a>

        <div className="mt-6 flex items-start gap-3 rounded-lg border border-[#D8C7AF] p-4 sm:mt-5 sm:p-3.5">
          <Icon src={icons.location} className="mt-0.5 h-4 w-4" />
          <div>
            <h3 className="text-sm font-semibold text-[#24483A] sm:text-[11px]">
              A little location detail goes a long way.
            </h3>
            <p className="mt-1 text-[13px] leading-[1.6] text-[#24483A]/75 sm:text-[10px]">
              Enter your area or PIN code, or allow your current location
              to find nearby technicians. Availability varies by service
              and location.
            </p>
          </div>
        </div>
      </div>

      <article className="self-start rounded-xl border border-[#D8C7AF] bg-white/80 p-5 lg:p-6">
        <p className="mb-2 text-xs font-semibold tracking-wide text-[#C65D3A] sm:text-[10px]">
          02 / TELL US YOUR PROBLEM
        </p>
        <h2 className="text-[28px] font-bold tracking-tight text-[#24483A] sm:text-2xl">
          Say what you notice.
        </h2>
        <p className="mt-3 text-[15px] leading-6 text-[#24483A]/75 sm:mt-2 sm:text-xs sm:leading-5">
          Share what isn't working, when it started, and the brand or model
          if you know it. Mention any noise, leak or error code.
        </p>

        <h3 className="mt-5 text-sm font-semibold text-[#24483A] sm:mt-4 sm:text-[11px]">
          For example, you could say:
        </h3>

        <div className="mt-3 rounded-lg bg-[#F7F2E9] p-4 sm:p-3.5">
          <h4 className="text-sm font-medium text-[#C65D3A] sm:text-[11px]">
            A leaking tap
          </h4>
          <p className="mt-1.5 text-sm leading-[1.6] text-[#24483A] sm:text-[11px]">
            "The kitchen tap keeps dripping even when it's closed.
            It started yesterday, and there's water under the sink too."
          </p>
        </div>

        <div className="mt-3 rounded-lg bg-[#F7F2E9] p-4 sm:p-3.5">
          <h4 className="text-sm font-medium text-[#C65D3A] sm:text-[11px]">
            An AC that isn't cooling
          </h4>
          <p className="mt-1.5 text-sm leading-[1.6] text-[#24483A] sm:text-[11px]">
            "My split AC runs, but the room isn't getting cool. It's been
            two days. The brand is LG, and there's no error code."
          </p>
        </div>

        <p className="mt-4 text-[13px] leading-5 text-[#24483A]/75 sm:mt-3 sm:text-[10px]">
          Not sure of the model? Share what you know. Clear symptoms
          are more useful than guessing the cause.
        </p>
      </article>
    </section>
  );
}

function TechnicianSection() {
  return (
    <section id="about" className="border-t border-[#D8C7AF]/70">
      <div className="mx-auto grid max-w-[1332px] gap-8 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-12 lg:py-14">
        <div>
          <h2 className="text-[28px] font-bold leading-tight tracking-tight text-[#24483A] sm:text-3xl">
            A clearer conversation. A smoother visit.
          </h2>

          <p className="mb-2 mt-7 text-xs font-semibold tracking-wide text-[#C65D3A] sm:text-[10px]">
            03 / GET A TECHNICIAN
          </p>
          <h3 className="text-[26px] font-bold text-[#24483A] sm:text-2xl">
            Ask before they come over.
          </h3>
          <p className="mt-3 text-[15px] leading-6 text-[#24483A]/75 sm:mt-2 sm:text-xs sm:leading-5">
            Once you find nearby help, discuss the details directly with
            the technician. A few questions now can avoid surprises later.
          </p>

          <div className="mt-5 space-y-4">
            {discussionPoints.map((item) => (
              <article key={item.title} className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#D8C7AF] sm:h-8 sm:w-8">
                  <Icon src={item.icon} className="h-5 w-5 sm:h-4 sm:w-4" />
                </span>
                <div>
                  <h4 className="text-base font-semibold text-[#24483A] sm:text-[11px]">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-[1.6] text-[#24483A]/75 sm:text-[11px]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <article className="self-center rounded-xl bg-[#E8EDE4] p-5 lg:p-6">
          <p className="mb-2 text-xs font-semibold tracking-wide text-[#C65D3A] sm:text-[10px]">
            04 / GET IT FIXED
          </p>
          <h3 className="text-[26px] font-bold text-[#24483A] sm:text-2xl">
            A little prep helps.
          </h3>
          <p className="mt-3 text-[15px] leading-6 text-[#24483A]/75 sm:mt-2 sm:text-xs sm:leading-5">
            Before the technician arrives, take a moment to get the space
            and details ready.
          </p>

          <ul className="mt-5 space-y-4 sm:space-y-3.5">
            {preparation.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm leading-[1.6] text-[#24483A] sm:text-[11px]"
              >
                <Icon src={icons.shield} className="mt-0.5 h-4 w-4" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 border-t border-[#D8C7AF] pt-4">
            <h4 className="text-base font-semibold text-[#24483A] sm:text-[11px]">
              Before wrapping up
            </h4>
            <p className="mt-1.5 text-sm leading-[1.6] text-[#24483A]/75 sm:text-[11px]">
              Check the repaired item together, where safe, and ask how
              to use or maintain it. If more work is needed, discuss the
              next steps and costs first.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="border-t border-[#D8C7AF]/70">
      <div className="mx-auto grid max-w-[1332px] gap-6 px-5 py-10 sm:gap-8 sm:px-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-12 lg:px-12 lg:py-14">
        <div>
          <h2 className="max-w-[300px] text-[26px] font-bold leading-tight text-[#24483A] sm:max-w-[260px] sm:text-2xl">
            A few things you might be wondering.
          </h2>
          <p className="mt-3 max-w-[300px] text-[15px] leading-6 text-[#24483A]/75 sm:mt-4 sm:max-w-[280px] sm:text-xs sm:leading-5">
            Straightforward answers before you look for local help.
          </p>
          <a
            href="#faq"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#24483A] hover:text-[#C65D3A] sm:mt-3 sm:text-[11px]"
          >
            Visit Help Center <Arrow />
          </a>
        </div>

        <div id="faq" className="divide-y divide-[#D8C7AF]">
          {faqs.map((faq, index) => (
            <article key={faq.question} className="py-4 first:pt-0 sm:py-3.5">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                aria-expanded={openIndex === index}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="text-base font-semibold text-[#24483A] sm:text-sm">
                  {faq.question}
                </span>
                <span className="text-xl text-[#24483A] sm:text-lg">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`grid transition-all duration-200 ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pt-2 text-[15px] leading-6 text-[#24483A]/75 sm:text-xs sm:leading-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section id="find-technician" className="bg-[#D8C7AF]">
      <div className="mx-auto flex max-w-[1332px] flex-col items-stretch justify-between gap-5 px-5 py-8 sm:px-8 sm:py-7 md:flex-row md:items-center lg:px-12">
        <div>
          <h2 className="text-[26px] font-bold leading-tight text-[#24483A] sm:text-xl lg:text-2xl">
            Let's find the right help near you.
          </h2>
          <p className="mt-2 text-[15px] leading-6 text-[#24483A]/75 sm:text-xs sm:leading-5">
            Choose your service, add your area or PIN code, and find nearby technicians.
          </p>
        </div>

        <a
          href="#services"
          className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#24483A] px-5 text-base font-semibold text-white sm:min-h-12 sm:w-auto sm:gap-4 sm:rounded-md sm:text-sm"
        >
          <span className="!text-white">Find a technician</span>
          <Icon
            src={icons.arrow}
            className="h-5 w-5 brightness-0 invert sm:h-4 sm:w-4"
          />
        </a>
      </div>
    </section>
  );
}


function Footer() {
  const columns = [
    {
      title: "Services",
      links: ["Electrician", "Plumber", "AC Repair", "Refrigerator", "View all"],
    },
    {
      title: "Company",
      links: ["About", "How It Works", "Become a technician", "Contact"],
    },
    {
      title: "Support",
      links: ["Help Center", "Privacy", "Terms", "Safety"],
    },
  ];

  const getLink = (link) => {
    const routes = {
      About: "#about",
      "How It Works": "#how-it-works",
      "Become a technician": "#become-tech",
      Contact: "#contact",
      "Help Center": "#faq",
      Privacy: "#privacy",
      Terms: "#terms",
      Safety: "#safety",
      "View all": "#services",
      Electrician: "#services",
      Plumber: "#services",
      "AC Repair": "#services",
      Refrigerator: "#services",
    };

    return routes[link] || "#";
  };

  const FooterColumn = ({ column }) => (
    <div>
      <h3 className="mb-3 text-[12px] font-bold text-[#24483A] sm:text-[13px] lg:text-[12px]">
        {column.title}
      </h3>

      <ul className="space-y-2.5 sm:space-y-3">
        {column.links.map((link) => (
          <li key={link}>
            <a
              href={getLink(link)}
              className="text-[11px] text-[#24483A]/75 transition hover:text-[#C65D3A] sm:text-[12px] lg:text-[11px]"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="w-full bg-[#F7F2E9]">
      <div className="mx-auto max-w-[1332px] px-5 pb-5 pt-7 sm:px-8 sm:pb-7 sm:pt-9 lg:px-12 lg:pt-12">

        {/* Mobile Footer */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-7 lg:hidden">

          {/* Left Column */}
          <div className="flex flex-col gap-7">
            <div>
              <Brand />

              <p className="mt-2 max-w-[140px] text-[11px] leading-[1.5] text-[#24483A]/75">
                Find trusted technicians near you.
              </p>
            </div>

            <FooterColumn column={columns[1]} />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-7">
            <FooterColumn column={columns[0]} />
            <FooterColumn column={columns[2]} />
          </div>
        </div>

        {/* Desktop Footer */}
        <div className="hidden grid-cols-4 gap-8 lg:grid">

          <div>
            <Brand />
            <p className="mt-3 max-w-[150px] text-[11px] leading-5 text-[#24483A]/75">
              Find trusted technicians near you.
            </p>
          </div>

          {columns.map((column) => (
            <FooterColumn key={column.title} column={column} />
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-7 border-t border-[#D8C7AF] pt-3 text-center sm:mt-9 sm:pt-4">
          <p className="text-[10px] text-[#24483A]/75">
            © 2026 FixNear. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F2E9] font-sans text-[#24483A]">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <ServicesSection />
        <TechnicianSection />
        <FAQSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

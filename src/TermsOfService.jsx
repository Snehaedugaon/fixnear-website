import { useState } from "react";
import logo from "./assets/images/fixnear-logo.png";

const sections = [
  {
    id: "using-fixnear",
    title: "Using FIXNEAR",
    paragraphs: [
      "FIXNEAR helps people find nearby technicians for home-service needs. It is a starting point for finding local help, not a substitute for a conversation about a specific repair. These draft terms cover the designed customer, technician and support journeys.",
      "Customers describe what needs attention; technicians describe their trade, experience and service area. The proposed expectations below should be read alongside the Privacy Policy and the practical guidance in Help/FAQ.",
    ],
    note: "Confirm before publishing",
    noteText: "Confirm the contracting legal entity, who may use the service, how a final agreement is accepted, and any applicable jurisdiction or governing-law details. The legal allocation of responsibilities between FIXNEAR, customers and technicians remains for review.",
  },
  {
    id: "accounts",
    title: "Accounts and email verification",
    paragraphs: [
      "Provide accurate account information and use an email address you can access. Complete the email-verification steps shown in the account journey. Email verification is an account step; it is not evidence of a technician’s skills or completed professional qualification.",
      "Keep your password and verification codes private. Do not use another person's account or misrepresent your identity. If you lose access or notice unexpected account activity, use the recovery journey or Contact Support without sending your password or codes.",
    ],
    note: "To confirm before publishing",
    noteText: "Confirm the account eligibility, age requirements, verification methods and account recovery process.",
  },
  {
    id: "requesting-help",
    title: "Requesting local help",
    paragraphs: [
      "Choose the relevant service and describe the problem as clearly as you can. Enter the service address, locality and postal code, or choose the optional current-location feature. Address Line 2 and map photos are optional. Check the location details before submitting.",
      "Describe what you notice rather than guessing the technical cause. Add only relevant photos and avoid unrelated private details. A service-request submission or support message is not a confirmed appointment, a guaranteed technician assignment or a promise that help is available in your area.",
    ],
  },
  {
    id: "joining-technician",
    title: "Joining as a technician",
    paragraphs: [
      "Professional registration asks for your trade, service locality and postal code, years of experience, and one required verification document. Provide truthful information and submit only a document you are entitled to use through the dedicated registration upload.",
      "Submitting a registration or uploading a document does not itself establish approval or completed verification. It does not guarantee work, earnings or a customer assignment. For submission problems, describe the step or error on Contact Support instead of attaching your verification document there.",
    ],
    note: "To confirm before publishing",
    noteText: "Confirm accepted documents, review criteria, what verification means, and how registration decisions are communicated. This draft does not establish background-check standards or approval times.",
  },
  {
    id: "service-details",
    title: "Arranging the service details",
    paragraphs: [
      "Discuss the repair directly with the technician before agreeing to a visit or work. Ask what they can take on and understand the proposed work before you decide. If the scope or estimate changes, discuss it before any additional work starts.",
    ],
    table: [
      ["The work", "What needs checking, the proposed repair, what is included and whether parts are needed."],
      ["The timing", "Whether the technician can help, when a visit is possible and any access arrangements."],
      ["The costs", "Any visit or inspection charge, labour, parts and any costs before work proceeds."],
    ],
    note: "To confirm before publishing",
    noteText: "Confirm any platform fees or commissions, payment handling, cancellation and refund terms, service warranties and the parties’ contractual responsibilities. None of these commercial terms is settled by this draft.",
  },
  {
    id: "content",
    title: "Acceptable use and uploaded content",
    paragraphs: [
      "Use FIXNEAR for genuine service needs, professional registration and relevant support questions. Do not impersonate others, submit misleading qualifications or documents, harass people, send spam, or try to access accounts or systems without permission.",
      "Descriptions, photos and attachments should be relevant, accurate to the best of your knowledge and yours to share. Do not upload unlawful material or another person’s private information without permission. Keep passwords, OTPs, bank details and identity documents out of general descriptions and support messages.",
    ],
    note: "To confirm before publishing",
    noteText: "Confirm content-review and removal procedures and any permissions needed to operate the service. This draft does not grant a copyright licence over uploaded content.",
  },
  {
    id: "privacy",
    title: "Privacy and information you share",
    paragraphs: [
      "See the Privacy Policy for the separate draft explanation of information involved in accounts, service requests, technician registration and support. It also identifies data practices that still need confirmation; this page does not turn those draft practices into promises.",
      "You can enter an address manually instead of choosing current location and leave optional problem photos or support attachments out. Use the dedicated registration upload for the required technician document. For a privacy question or request, use Contact Support and describe the issue without sending sensitive information.",
    ],
  },
  {
    id: "availability",
    title: "Availability and limitations",
    paragraphs: [
      "Local help depends on the service and location. A listed service or submitted request does not establish that a particular technician can help, when a visit is possible or what the repair outcome will be. Confirm the practical details before making plans.",
      "These designs do not establish uninterrupted website access or guaranteed service outcomes. They also do not settle who is legally responsible for a repair, a loss or a dispute. This draft is not intended to waive any applicable consumer rights.",
    ],
    note: "To confirm before publishing",
    noteText: "Review the definition of platform availability, service responsibilities and any limitations with legal counsel. No liability cap, blanket exclusion or service warranty is established here.",
  },
  {
    id: "restrictions",
    title: "Account restrictions and disputes",
    paragraphs: [
      "Report suspected misuse, an account-access problem or a concern about a request through Contact Support. Explain what happened and add a request or reference ID if you have one. Keep relevant details available, but remove private information from any optional attachment.",
      "For concerns about agreed work, start by explaining the issue to the technician where appropriate. You can also describe the concern to support; sending a message does not establish a particular remedy, refund or resolution.",
    ],
    note: "To confirm before publishing",
    noteText: "Confirm when accounts or content may be restricted, how reasons and review options are provided, and how service disputes are handled. No automatic suspension policy or mandatory dispute process is set by this draft.",
  },
  {
    id: "changes",
    title: "Changes and contacting support",
    paragraphs: [
      "These terms remain a draft while the product and contractual details are reviewed. A final version should reflect the implemented service and show a confirmed effective date. This draft does not establish that continued use counts as acceptance of future changes.",
      "For questions about these terms, use Contact Support. Choose “Other questions” if no listed topic fits, state the section you are asking about and explain the question. An attachment or existing request reference is not required to ask for help.",
    ],
    note: "To confirm before publishing",
    noteText: "Confirm the responsible legal entity and required contact details, the effective date, and how changes will be communicated and accepted before publishing.",
  },
];

function TermsHeader() {
  const links = [
    ["Home", "/#home"],
    ["Services", "/#services"],
    ["How It Works", "/#how-it-works"],
    ["About", "/#about"],
    ["Help/FAQ", "/#faq"],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-[#D8C7AF] bg-[#F7F2E9]/95 backdrop-blur">
      <div className="mx-auto flex min-h-[58px] max-w-[1332px] items-center justify-between gap-4 px-5 sm:px-8 lg:min-h-[66px] lg:px-12">
        <a href="/#home" aria-label="FixNear home" className="shrink-0">
          <img src={logo} alt="FixNear" className="w-[100px] object-contain sm:w-[112px]" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => <a key={label} href={href} className="text-[13px] text-[#24483A] hover:text-[#C65D3A]">{label}</a>)}
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <a href="/#become-tech" className="hidden whitespace-nowrap text-[13px] text-[#24483A] sm:inline">Become Tech</a>
          <a href="/#login" className="text-[13px] text-[#24483A]">Login</a>
          <a href="/#signup" className="inline-flex min-h-9 items-center justify-center rounded-md bg-[#24483A] px-4 py-2 text-[12px] font-semibold !text-white" style={{ color: "#fff", WebkitTextFillColor: "#fff", opacity: 1, visibility: "visible" }}><span className="relative z-10 inline-block !text-white" style={{ color: "#fff", WebkitTextFillColor: "#fff", fontSize: "12px", lineHeight: 1.2, opacity: 1, visibility: "visible" }}>Sign Up</span></a>
        </div>
      </div>
    </header>
  );
}

function TermsPage() {
  const [active, setActive] = useState(sections[0].id);
  return (
    <div className="min-h-screen bg-[#F7F2E9] text-[#24483A]">
      <TermsHeader />
      <a href="/#faq" className="mx-auto mt-5 block max-w-[1332px] px-5 text-[12px] text-[#24483A] hover:text-[#C65D3A] sm:px-8 lg:px-12">← <span>Back to Help/FAQ</span></a>

      <section className="mx-auto max-w-[780px] px-5 pb-8 pt-5 text-center sm:px-8 sm:pt-7">
        <span className="inline-flex rounded-full bg-[#D8C7AF] px-3 py-1 text-[11px] font-bold tracking-[0.08em] text-[#24483A]">✦ FIXNEAR HELP CENTER</span>
        <h1 className="mt-3 text-[30px] font-bold leading-tight sm:text-[38px]">Terms of Service</h1>
        <p className="mx-auto mt-3 max-w-[650px] text-[12px] leading-5 text-[#24483A]/75 sm:text-[14px]">A clearer guide to using FIXNEAR, requesting local help and joining as a technician — and what to discuss before a repair.</p>
        <p className="mt-3 text-[10px] text-[#24483A]/65">Effective date: To be confirmed</p>
        <div className="mt-5 rounded-md border border-[#D8C7AF] px-4 py-3 text-left">
          <p className="text-[11px] font-bold text-[#24483A]"><span className="mr-2 text-[#C65D3A]">✎</span>Draft terms — review before publishing</p>
          <p className="mt-1 text-[10px] leading-4 text-[#24483A]/75">Illustrative copy based on the designed FIXNEAR journeys, not an approved or enforceable final agreement or legal advice. “To confirm” notes need operational and legal review.</p>
        </div>
      </section>

      <div className="border-y border-[#D8C7AF]/70">
        <div className="mx-auto grid max-w-[1332px] gap-7 px-5 py-7 sm:px-8 lg:grid-cols-[235px_minmax(0,1fr)] lg:gap-10 lg:px-12 lg:py-9">
          <aside className="lg:sticky lg:top-[88px] lg:h-fit">
            <p className="mb-3 text-[10px] font-bold tracking-wide text-[#C65D3A]">ON THIS PAGE</p>
            <nav className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-1">
              {sections.map((section, index) => (
                <a key={section.id} href={`#${section.id}`} onClick={() => setActive(section.id)} className={`flex items-start gap-3 border-b border-[#D8C7AF]/70 py-2 text-[10px] leading-4 transition ${active === section.id ? "font-semibold text-[#C65D3A]" : "text-[#24483A]/80 hover:text-[#C65D3A]"}`}>
                  <span className="tabular-nums text-[#24483A]/55">{String(index + 1).padStart(2, "0")}</span><span>{section.title}</span>
                </a>
              ))}
            </nav>
            <div className="mt-5 rounded-lg border border-[#D8C7AF] p-4">
              <h3 className="text-[13px] font-bold leading-4">A request is a starting point.</h3>
              <p className="mt-2 text-[10px] leading-4 text-[#24483A]/75">Submitting a request is not a confirmed visit. Discuss the work, timing and costs directly with the technician before you agree.</p>
            </div>
            <div className="mt-5">
              <p className="mb-2 text-[10px] font-bold tracking-wide text-[#C65D3A]">RELATED GUIDANCE</p>
              <div className="flex flex-col items-start gap-2 text-[10px] font-semibold">
                <a href="/privacy-policy" className="hover:text-[#C65D3A]">Privacy Policy</a>
                <a href="/#faq" className="hover:text-[#C65D3A]">Help/FAQ</a>
                <a href="/#contact" className="hover:text-[#C65D3A]">Contact Support</a>
              </div>
            </div>
          </aside>

          <main className="min-w-0">
            {sections.map((section, index) => (
              <section id={section.id} key={section.id} className="scroll-mt-24 border-b border-[#D8C7AF] py-5 first:pt-0 last:border-0">
                <h2 className="text-[17px] font-semibold leading-tight sm:text-[19px]"><span className="mr-2 text-[15px] font-bold text-[#C65D3A]">{String(index + 1).padStart(2, "0")}</span>{section.title}</h2>
                {section.paragraphs.map((paragraph, i) => <p key={i} className="mt-3 text-[11px] leading-[1.6] text-[#24483A]/90 sm:text-[12px]">{paragraph}</p>)}
                {section.table && <div className="mt-3 overflow-hidden rounded-md border border-[#D8C7AF]">{section.table.map(([label, value]) => <div key={label} className="grid grid-cols-[90px_1fr] border-b border-[#D8C7AF] last:border-0 sm:grid-cols-[115px_1fr]"><strong className="bg-[#F1E9DC] px-3 py-2.5 text-[10px]">{label}</strong><span className="px-3 py-2.5 text-[10px] leading-4 text-[#24483A]/85">{value}</span></div>)}</div>}
                {section.note && <div className="mt-3 border-l-2 border-[#D8C7AF] pl-3"><p className="text-[10px] font-bold">{section.note}</p><p className="mt-1 text-[10px] leading-4 text-[#24483A]/70">{section.noteText}</p></div>}
              </section>
            ))}
            <div className="flex items-center justify-between pt-5 text-[12px] text-[#24483A]/70"><span>End of draft terms</span><a href="/privacy-policy" className="font-semibold text-[#24483A]">Privacy Policy</a></div>
          </main>
        </div>
      </div>

      <section className="bg-[#D8C7AF]">
        <div className="mx-auto flex max-w-[1332px] flex-col gap-5 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <div className="flex items-start gap-4">
            <svg viewBox="0 0 32 32" className="mt-1 h-7 w-7 shrink-0" fill="none" stroke="#24483A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h13A2.5 2.5 0 0 1 23 7.5v9a2.5 2.5 0 0 1-2.5 2.5H12l-5 4v-4.2a2.5 2.5 0 0 1-2-2.3z"/><path d="M13 23h9l5 4v-4.5a2.5 2.5 0 0 0 2-2.5v-9a2.5 2.5 0 0 0-2-2.4"/></svg>
            <div><h2 className="text-[21px] font-bold leading-tight sm:text-[24px]">Questions about these terms?</h2><p className="mt-2 max-w-[570px] text-[12px] leading-5 text-[#24483A]/80">Use Contact Support to ask about this draft or a FIXNEAR journey.<br className="hidden sm:block" /> Keep passwords, OTPs, bank details and identity documents out of your message.</p></div>
          </div>
          <a href="/#contact" className="inline-flex min-h-10 items-center justify-center gap-3 rounded-md bg-[#24483A] px-5 text-[12px] font-semibold !text-white" style={{ color: "#fff", WebkitTextFillColor: "#fff", opacity: 1, visibility: "visible" }}><span className="relative z-10 inline-block !text-white" style={{ color: "#fff", WebkitTextFillColor: "#fff", fontSize: "12px", lineHeight: 1.2, opacity: 1, visibility: "visible" }}>Contact support</span><span aria-hidden="true" className="relative z-10 text-base !text-white" style={{ color: "#fff", WebkitTextFillColor: "#fff" }}>→</span></a>
        </div>
      </section>

      <footer className="w-full bg-[#F7F2E9]">
        <div className="mx-auto max-w-[1332px] px-5 pb-5 pt-8 sm:px-8 sm:pb-7 sm:pt-10 lg:px-12 lg:pt-12">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:hidden">
            <div className="flex flex-col gap-8">
              <div>
                <a href="/#home" aria-label="FixNear home" className="inline-flex">
                  <img src={logo} alt="FixNear" className="w-[125px] object-contain" />
                </a>
                <p className="mt-3 max-w-[170px] text-[13px] leading-[1.6] text-[#24483A]/75">Find trusted technicians near you.</p>
              </div>
              <div>
                <h3 className="mb-3 text-[14px] font-bold">Company</h3>
                <ul className="space-y-3 text-[13px] text-[#24483A]/75">
                  <li><a href="/#about">About</a></li>
                  <li><a href="/#how-it-works">How It Works</a></li>
                  <li><a href="/#become-tech">Become a technician</a></li>
                  <li><a href="/#contact">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="mb-3 text-[14px] font-bold">Services</h3>
                <ul className="space-y-3 text-[13px] text-[#24483A]/75">
                  <li><a href="/#services">Electrician</a></li>
                  <li><a href="/#services">Plumber</a></li>
                  <li><a href="/#services">AC Repair</a></li>
                  <li><a href="/#services">Refrigerator</a></li>
                  <li><a href="/#services">View all</a></li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-[14px] font-bold">Support</h3>
                <ul className="space-y-3 text-[13px] text-[#24483A]/75">
                  <li><a href="/#faq">Help Center</a></li>
                  <li><a href="/privacy-policy">Privacy</a></li>
                  <li><a href="/terms-of-service">Terms</a></li>
                  <li><a href="/#safety">Safety</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden grid-cols-4 gap-8 lg:grid">
            <div>
              <a href="/#home" aria-label="FixNear home" className="inline-flex">
                <img src={logo} alt="FixNear" className="w-[155px] object-contain" />
              </a>
              <p className="mt-3 max-w-[190px] text-[13px] leading-5 text-[#24483A]/75">Find trusted technicians near you.</p>
            </div>
            <div><h3 className="mb-3 text-[14px] font-bold">Services</h3><ul className="space-y-3 text-[13px] text-[#24483A]/75"><li><a href="/#services">Electrician</a></li><li><a href="/#services">Plumber</a></li><li><a href="/#services">AC Repair</a></li><li><a href="/#services">Refrigerator</a></li><li><a href="/#services">View all</a></li></ul></div>
            <div><h3 className="mb-3 text-[14px] font-bold">Company</h3><ul className="space-y-3 text-[13px] text-[#24483A]/75"><li><a href="/#about">About</a></li><li><a href="/#how-it-works">How It Works</a></li><li><a href="/#become-tech">Become a technician</a></li><li><a href="/#contact">Contact</a></li></ul></div>
            <div><h3 className="mb-3 text-[14px] font-bold">Support</h3><ul className="space-y-3 text-[13px] text-[#24483A]/75"><li><a href="/#faq">Help Center</a></li><li><a href="/privacy-policy">Privacy</a></li><li><a href="/terms-of-service">Terms</a></li><li><a href="/#safety">Safety</a></li></ul></div>
          </div>

          <div className="mt-8 border-t border-[#D8C7AF] pt-4 text-center">
            <p className="text-[12px] text-[#24483A]/75">© 2026 FixNear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TermsPage;

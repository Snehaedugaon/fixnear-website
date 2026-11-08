import logo from "./assets/images/fixnear-logo.png";

const sections = [
  {
    id: "information",
    title: "Information you provide",
    intro: "This draft covers the information entered in the designed customer, technician and support journeys. The information involved depends on which journey you use.",
    rows: [
      ["Account & verification", "Contact and account information entered during sign-up, email verification and account recovery."],
      ["Service requests", "Selected service, address, locality, postal code, problem description and any optional problem photos."],
      ["Contact Support", "Name, email, support topic, subject and message, plus an optional reference ID and optional attachment."],
    ],
  },
  {
    id: "why",
    title: "Why information is needed",
    paragraphs: [
      "The intended purposes in these designs are to create and verify accounts, support password recovery, describe a service need and its location, review professional registrations, and understand support questions.",
      "A service selection and problem description give context to a request; locality and postal code help describe where help is needed. Contact details support the account or support journey you have chosen.",
    ],
    note: "Confirm the specific purposes and applicable legal basis before publishing. Any additional uses must be described in the final policy.",
  },
  {
    id: "location",
    title: "Location and optional photos",
    paragraphs: [
      "The service-request design offers manual address entry or a user-selected current-location option. You can enter Address Line 1, locality and postal code instead of choosing current location; Address Line 2 is optional.",
      "Problem photos are optional. Keep them focused on the repair issue and avoid faces, identity documents or unrelated private details. General support attachments are optional; remove private information before adding a file.",
    ],
    note: "Confirm how location is obtained, its precision, whether it is retained, and how photo metadata is handled. This draft does not assume background location tracking.",
  },
  {
    id: "verification",
    title: "Technician verification documents",
    paragraphs: [
      "Professional registration asks for trade, service locality and postal code, years of experience, and one required verification-document upload. Unlike optional problem photos or support attachments, this document is required in the designed registration flow.",
      "Use the dedicated registration upload for that step. For help with document submission, describe where you got stuck on Contact Support rather than attaching an identity or verification document there.",
    ],
    note: "Confirm accepted document types, reviewers, verification steps, access controls and retention. A document upload alone does not establish a completed verification.",
  },
  {
    id: "sharing",
    title: "Sharing and responsibilities",
    paragraphs: [
      "FIXNEAR is designed to connect people seeking home services with local professionals. Account support, registration review and arranging a service involve different roles; information access should be described separately for each role.",
      "This draft does not specify which contact details, addresses, photos or documents a technician, support team member or other party can see, or at what point in a request.",
    ],
    note: "Confirm recipients, service providers, technician access and responsibilities, any legally required disclosures, and any international transfers or data-sale practices. None are settled by this draft.",
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    paragraphs: [
      "The designs do not establish whether cookies, local storage, analytics or other tracking technologies are in use. No particular tracker, analytics provider or cookie-consent setup is assumed here.",
    ],
    note: "List the technologies actually used, their purposes and duration, and explain any available controls before publishing.",
  },
  {
    id: "retention",
    title: "Retention and security",
    paragraphs: [
      "A final policy needs to explain how long account information, requests, photos, support messages and verification documents are kept, including what happens after an account closes or a request ends.",
      "The designs do not establish storage locations or technical security measures. Please keep passwords and email verification codes private and avoid including sensitive details in descriptions or general support uploads.",
    ],
    note: "Confirm retention periods, deletion and backup handling, storage locations and security safeguards. No specific retention period or security standard is promised in this draft.",
  },
  {
    id: "choices",
    title: "Your choices and privacy requests",
    paragraphs: [
      "You can use manual address entry instead of selecting current location, leave optional problem photos and support attachments out, and limit free-text details to what is relevant to the issue.",
      "For a question about accessing, correcting or deleting information, use Contact Support to describe the type of privacy request. Do not attach identity documents or send passwords, OTPs, bank details or email verification codes.",
    ],
    note: "Confirm applicable rights, available identity-check processes and how requests will be handled. No specific automatic deletion or response time is established in this draft.",
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paragraphs: [
      "This page is a draft and may change as the product and its data practices are confirmed. The final version should reflect the implemented service and show a confirmed effective date.",
    ],
    note: "Confirm how material changes will be communicated and how earlier policy versions will be made available.",
  },
  {
    id: "contact",
    title: "Contacting support",
    paragraphs: [
      "The Contact Support page is the intended destination for privacy questions and requests. Use “Other questions” if none of the listed topics fits, and explain the privacy issue without including sensitive information.",
      "For technician document-submission questions, explain the step or error rather than sending your document through general support. You do not need to attach a file to ask a question.",
    ],
    note: "Confirm the responsible legal entity and required privacy contact details before this policy is published.",
  },
];

function Brand() {
  return <a href="/" aria-label="FixNear home" className="inline-flex items-center"><img src={logo} alt="FixNear" className="w-[112px] object-contain sm:w-[125px]" /></a>;
}

function Navbar() {
  const links = [["Home", "/"], ["Services", "/#services"], ["How It Works", "/#how-it-works"], ["About", "/#about"], ["Help/FAQ", "/#faq"]];
  return (
    <header className="border-b border-[#D8C7AF] bg-[#F7F2E9]">
      <div className="mx-auto flex min-h-[62px] max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6 lg:min-h-[72px]">
        <Brand />
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => <a key={label} href={href} className="text-[13px] text-[#24483A] hover:text-[#C65D3A]">{label}</a>)}
        </nav>
        <div className="flex items-center gap-3 sm:gap-5">
          <a href="/#become-tech" className="hidden whitespace-nowrap text-[13px] text-[#24483A] sm:inline">Become Tech</a>
          <a href="/#login" className="text-[13px] text-[#24483A]">Login</a>
          <a href="/#signup" className="inline-flex min-h-9 items-center justify-center rounded-md bg-[#24483A] px-4 py-2 text-[12px] font-semibold !text-white" style={{ color: "#fff", WebkitTextFillColor: "#fff", opacity: 1, visibility: "visible" }}><span className="relative z-10 inline-block !text-white" style={{ color: "#fff", WebkitTextFillColor: "#fff", fontSize: "12px", lineHeight: 1.2, opacity: 1, visibility: "visible" }}>Sign Up</span></a>
        </div>
      </div>
      <nav className="mx-auto flex max-w-[1200px] justify-between gap-2 px-4 pb-3 md:hidden">
        {links.map(([label, href]) => <a key={label} href={href} className="whitespace-nowrap text-[10px] text-[#24483A]">{label}</a>)}
      </nav>
    </header>
  );
}

function Footer() {
  const groups = [
    ["Services", "Electrician", "Plumber", "AC Repair", "Refrigerator", "View all"],
    ["Company", "About", "How It Works", "Become a technician", "Contact"],
    ["Support", "Help Center", "Privacy", "Terms", "Safety"],
  ];
  return <footer className="bg-[#F7F2E9]">
    <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-8 gap-y-8 px-5 py-9 sm:grid-cols-4 sm:px-8 lg:px-10">
      <div><Brand /><p className="mt-3 max-w-[150px] text-[11px] leading-5 text-[#24483A]/75">Find trusted technicians near you.</p></div>
      {groups.map(([title, ...items]) => <div key={title}><h3 className="mb-3 text-[12px] font-bold text-[#24483A]">{title}</h3><ul className="space-y-2">{items.map(item => <li key={item}><a className="text-[11px] text-[#24483A]/75 hover:text-[#C65D3A]" href={item === "Privacy" ? "/privacy-policy" : item === "Terms" ? "/terms-of-service" : "/#services"}>{item}</a></li>)}</ul></div>)}
    </div>
    <div className="border-t border-[#D8C7AF] py-4 text-center text-[10px] text-[#24483A]/75">© 2026 FixNear. All rights reserved.</div>
  </footer>;
}

export default function PrivacyPolicy() {
  return <div className="min-h-screen bg-[#F7F2E9] font-sans text-[#24483A]">
    <Navbar />
    <a href="/#faq" className="mx-auto mt-5 block max-w-[1200px] px-5 text-[12px] text-[#24483A] hover:text-[#C65D3A]">← Back to Help/FAQ</a>
    <section className="mx-auto max-w-[900px] px-5 pb-7 pt-7 text-center sm:pt-8">
      <span className="inline-flex rounded-full bg-[#D8C7AF] px-3 py-1 text-[10px] font-semibold tracking-wide text-[#24483A]">● FIXNEAR HELP CENTER</span>
      <h1 className="mt-3 text-[30px] font-bold leading-tight sm:text-[38px]">Privacy Policy</h1>
      <p className="mx-auto mt-3 max-w-[650px] text-[12px] leading-5 text-[#24483A]/75 sm:text-[14px]">A clearer look at the information involved when you create an account, request local help, join as a technician or contact support.</p>
      <p className="mt-3 text-[10px] text-[#24483A]/65">Effective date: To be confirmed</p>
      <div className="mx-auto mt-6 flex max-w-[700px] gap-3 rounded-md border border-[#D8C7AF] px-4 py-4 text-left">
        <span className="text-[#C65D3A]">♧</span><div><p className="text-[11px] font-bold">Draft policy — review before publishing</p><p className="mt-1 text-[10px] leading-4 text-[#24483A]/75">Illustrative copy based on the designed FIXNEAR journeys, not a statement of confirmed live practices. Notes marked “To confirm” need operational and legal review.</p></div>
      </div>
    </section>
    <div className="border-t border-[#D8C7AF]" />
    <main className="mx-auto grid max-w-[1200px] gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 lg:px-10 lg:py-10">
      <aside className="lg:sticky lg:top-6 lg:self-start">
        <h2 className="mb-4 text-[10px] font-bold tracking-wide text-[#C65D3A]">ON THIS PAGE</h2>
        <nav className="grid grid-cols-2 gap-x-4 gap-y-0 sm:grid-cols-2 lg:grid-cols-1">
          {sections.map((s, i) => <a key={s.id} href={`#${s.id}`} className="border-b border-[#D8C7AF] py-2 text-[10px] leading-4 text-[#24483A] hover:text-[#C65D3A]"><span className="mr-2 text-[#55776B]">{String(i+1).padStart(2,"0")}</span>{s.title}</a>)}
        </nav>
        <div className="mt-7 rounded-lg border border-[#D8C7AF] p-4">
          <div className="mb-2 text-[#C65D3A]">♧</div>
          <h3 className="text-[13px] font-bold leading-4">Share only what’s needed.</h3>
          <p className="mt-2 text-[10px] leading-4 text-[#24483A]/75">Keep passwords, OTPs, bank details and identity documents out of general support messages and attachments.</p>
          <p className="mt-3 text-[10px] leading-4 text-[#24483A]/75">Technician documents belong in the dedicated registration upload, not the support form.</p>
        </div>
      </aside>
      <div className="min-w-0">
        {sections.map((s, i) => <section id={s.id} key={s.id} className="scroll-mt-6 border-b border-[#D8C7AF] py-6 first:pt-0">
          <h2 className="flex items-baseline gap-2 text-[17px] font-semibold leading-tight sm:text-[19px]"><span className="text-[13px] font-medium text-[#C65D3A]">{String(i+1).padStart(2,"0")}</span>{s.title}</h2>
          {s.intro && <p className="mt-3 text-[11px] leading-[1.55] text-[#24483A]/90 sm:text-[12px]">{s.intro}</p>}
          {s.paragraphs?.map((p,j)=><p key={j} className="mt-3 text-[11px] leading-[1.6] text-[#24483A]/90 sm:text-[12px]">{p}</p>)}
          {s.rows && <div className="mt-4 overflow-hidden rounded-md border border-[#D8C7AF]">{s.rows.map(([a,b])=><div key={a} className="grid grid-cols-[125px_1fr] gap-3 border-b border-[#D8C7AF] px-3 py-3 last:border-b-0 sm:grid-cols-[160px_1fr]"><h3 className="text-[10px] font-semibold">{a}</h3><p className="text-[10px] leading-4 text-[#24483A]/85">{b}</p></div>)}</div>}
          {s.note && <div className="mt-4 border-l-2 border-[#D8C7AF] pl-3"><h3 className="text-[10px] font-bold">To confirm before publishing</h3><p className="mt-1 text-[10px] leading-4 text-[#24483A]/70">{s.note}</p></div>}
        </section>)}
        <div className="flex justify-between py-5 text-[11px] text-[#24483A]/70"><span>End of draft policy</span><a href="/#faq" className="font-medium text-[#24483A]">Help/FAQ</a></div>
      </div>
    </main>
    <section className="bg-[#D8C7AF]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div className="flex items-start gap-4">
          <svg viewBox="0 0 32 32" className="mt-1 h-7 w-7 shrink-0" fill="none" stroke="#24483A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h13A2.5 2.5 0 0 1 23 7.5v9a2.5 2.5 0 0 1-2.5 2.5H12l-5 4v-4.2a2.5 2.5 0 0 1-2-2.3z"/><path d="M13 23h9l5 4v-4.5a2.5 2.5 0 0 0 2-2.5v-9a2.5 2.5 0 0 0-2-2.4"/></svg>
          <div><h2 className="text-[21px] font-bold leading-tight sm:text-[24px]">Questions about privacy?</h2><p className="mt-2 max-w-[570px] text-[12px] leading-5 text-[#24483A]/80">Use Contact Support for a privacy question or request.<br className="hidden sm:block"/> Please keep passwords, OTPs, bank details and identity documents out of your message.</p></div>
        </div>
        <a href="/#contact" className="inline-flex min-h-10 items-center justify-center gap-3 rounded-md bg-[#24483A] px-5 text-[12px] font-semibold !text-white" style={{ color: "#fff", WebkitTextFillColor: "#fff", opacity: 1, visibility: "visible" }}><span className="relative z-10 inline-block !text-white" style={{ color: "#fff", WebkitTextFillColor: "#fff", fontSize: "12px", lineHeight: 1.2, opacity: 1, visibility: "visible" }}>Contact support</span><span aria-hidden="true" className="relative z-10 !text-white" style={{ color: "#fff", WebkitTextFillColor: "#fff" }}>→</span></a>
      </div>
    </section>
    <Footer />
  </div>;
}

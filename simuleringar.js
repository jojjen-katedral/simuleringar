/* =====================================================================
   LISTA ÖVER SIMULERINGAR (används av både startsidan och visa.html)
   Lägg till en ny simulering genom att kopiera ett block nedan och ändra:
   - fil:     filnamnet i mappen simuleringar/ (utan .html)
   - amnen:   "kemi" och/eller "biologi"
   - kurs:    kort kursnamn som visas som etikett
   - ikon:    en av: molekyl, dna, kol, kvave, standard
   - farg:    bakgrundsfärg för bilden på kortet
   ===================================================================== */
const SIMULERINGAR = [
  {
    fil: "molekylbygget", amnen: ["kemi"], kurs: "Kemi 1", ikon: "molekyl", farg: "#e8eefc",
    sv: { titel: "Molekylbygget", text: "Bygg molekyler i 3D eller rita strukturformler. Se form, bindningsvinklar, polaritet och namn." },
    en: { titel: "Molecule Builder", text: "Build molecules in 3D or draw structural formulas. Explore shape, bond angles, polarity and names." }
  },
  {
    fil: "fran-dna-till-protein", amnen: ["biologi", "kemi"], kurs: "Biologi 1", ikon: "dna", farg: "#f3e8fd",
    sv: { titel: "Från DNA till protein", text: "Följ transkription och translation steg för steg – från gen till veckat protein." },
    en: { titel: "From DNA to Protein", text: "Follow transcription and translation step by step – from gene to folded protein." }
  },
  {
    fil: "kolets-kretslopp", amnen: ["biologi", "kemi"], kurs: "Biologi 1", ikon: "kol", farg: "#e3f4fb",
    sv: { titel: "Kolets kretslopp", text: "Följ en kolatom genom fotosyntes, cellandning, havets kemi och fossila bränslen." },
    en: { titel: "The Carbon Cycle", text: "Follow a carbon atom through photosynthesis, respiration, ocean chemistry and fossil fuels." }
  },
  {
    fil: "kvavets-kretslopp", amnen: ["biologi", "kemi"], kurs: "Biologi 1", ikon: "kvave", farg: "#e6f6ea",
    sv: { titel: "Kvävets kretslopp", text: "Se hur kväve fixeras, omvandlas och återvänder till luften – med oxidationstal." },
    en: { titel: "The Nitrogen Cycle", text: "See how nitrogen is fixed, converted and returned to the air – with oxidation numbers." }
  }
];

const IKONER = {
  molekyl: '<svg viewBox="0 0 84 84" aria-hidden="true"><line x1="42" y1="38" x2="20" y2="60" stroke="#8a94a6" stroke-width="5" stroke-linecap="round"/><line x1="42" y1="38" x2="64" y2="60" stroke="#8a94a6" stroke-width="5" stroke-linecap="round"/><circle cx="42" cy="34" r="17" fill="#d92b2b"/><circle cx="18" cy="62" r="11" fill="#fff" stroke="#c3c9d4" stroke-width="2"/><circle cx="66" cy="62" r="11" fill="#fff" stroke="#c3c9d4" stroke-width="2"/></svg>',
  dna: '<svg viewBox="0 0 84 84" aria-hidden="true" fill="none" stroke-width="5" stroke-linecap="round"><path d="M28 8c0 22 28 24 28 46s-28 22-28 22" stroke="#7b3fe4"/><path d="M56 8c0 22-28 24-28 46s28 22 28 22" stroke="#e0524f"/><g stroke="#9aa3b5" stroke-width="3"><line x1="32" y1="18" x2="52" y2="18"/><line x1="36" y1="31" x2="48" y2="31"/><line x1="36" y1="57" x2="48" y2="57"/><line x1="32" y1="70" x2="52" y2="70"/></g></svg>',
  kol: '<svg viewBox="0 0 84 84" aria-hidden="true" fill="none" stroke-width="5" stroke-linecap="round"><path d="M18 34a25 25 0 0 1 42-14" stroke="#0284c7"/><path d="M66 50a25 25 0 0 1-42 14" stroke="#10b981"/><path d="M60 10v11H49M24 74V63h11" stroke-linejoin="round" stroke="#475569"/><circle cx="42" cy="42" r="11" fill="#374151" stroke="none"/><text x="42" y="47" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" stroke="none" font-family="system-ui">C</text></svg>',
  kvave: '<svg viewBox="0 0 84 84" aria-hidden="true"><path d="M42 74V40" stroke="#43a047" stroke-width="5" stroke-linecap="round"/><ellipse cx="30" cy="48" rx="12" ry="6" transform="rotate(-30 30 48)" fill="#66bb6a"/><ellipse cx="54" cy="40" rx="12" ry="6" transform="rotate(30 54 40)" fill="#66bb6a"/><circle cx="31" cy="18" r="10" fill="#0288d1"/><circle cx="53" cy="18" r="10" fill="#0288d1"/><g stroke="#64748b" stroke-width="2.5"><line x1="39" y1="14" x2="45" y2="14"/><line x1="39" y1="18" x2="45" y2="18"/><line x1="39" y1="22" x2="45" y2="22"/></g><circle cx="36" cy="72" r="4" fill="#ffb74d"/><circle cx="48" cy="74" r="4" fill="#ffb74d"/></svg>',
  standard: '<svg viewBox="0 0 84 84" aria-hidden="true"><circle cx="42" cy="42" r="26" fill="#2b59c3"/><path d="M36 30l16 12-16 12z" fill="#fff"/></svg>'
};


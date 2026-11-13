Claude















Simuleringar kod · TXT
/* =====================================================================
   LISTA ÖVER SIMULERINGAR (används av både startsidan och visa.html)
   Lägg till en ny simulering genom att kopiera ett block nedan och ändra:
   - fil:        filnamnet i mappen simuleringar/ (utan .html)
   - amnen:      "kemi" och/eller "biologi"
   - interaktiv: true om eleven själv styr och bygger (ger taggen "Interaktiv")
   - bild:       namnet på en bild i BILDER längre ned (saknas den visas "standard")
   ===================================================================== */
const SIMULERINGAR = [
  {
    fil: "molekylbygget", amnen: ["kemi"], interaktiv: true, bild: "molekyl",
    sv: { titel: "Molekylbygget", text: "Bygg molekyler i 3D eller rita strukturformler. Se form, bindningsvinklar, polaritet och namn." },
    en: { titel: "Molecule Builder", text: "Build molecules in 3D or draw structural formulas. Explore shape, bond angles, polarity and names." }
  },
  {
    fil: "fran-dna-till-protein", amnen: ["biologi", "kemi"], interaktiv: true, bild: "dna",
    sv: { titel: "Från DNA till protein", text: "Följ transkription och translation steg för steg – från gen till veckat protein." },
    en: { titel: "From DNA to Protein", text: "Follow transcription and translation step by step – from gene to folded protein." }
  },
  {
    fil: "genetiklabbet", amnen: ["biologi"], interaktiv: true, bild: "genetik",
    sv: { titel: "Genetiklabbet", text: "Korsa bananflugor, ärtor, höns och lejongap. Gameter, korsningsscheman, testkorsning, koppling och χ²." },
    en: { titel: "The Genetics Lab", text: "Cross fruit flies, peas, chickens and snapdragons. Gametes, Punnett squares, testcrosses, linkage and χ²." }
  },
  {
    fil: "cellandningen", amnen: ["biologi", "kemi"], bild: "cellandning",
    sv: { titel: "Cellandningen", text: "Följ glukosen genom glykolys, länkreaktion, citronsyracykeln och elektrontransportkedjan – hela vägen till ATP." },
    en: { titel: "Cellular Respiration", text: "Follow glucose through glycolysis, the link reaction, the citric acid cycle and the electron transport chain – all the way to ATP." }
  },
  {
    fil: "fasovergangar", amnen: ["kemi"], bild: "fas",
    sv: { titel: "Fasövergångar", text: "Värm och kyl koldioxid, väteklorid och vatten. Se hur bindningar mellan molekylerna och värmerörelse styr fasövergångarna." },
    en: { titel: "Phase Transitions", text: "Heat and cool carbon dioxide, hydrogen chloride and water. See how intermolecular forces and thermal motion drive phase changes." }
  },
  {
    fil: "kolets-kretslopp", amnen: ["biologi", "kemi"], bild: "kol",
    sv: { titel: "Kolets kretslopp", text: "Följ en kolatom genom fotosyntes, cellandning, havets kemi och fossila bränslen." },
    en: { titel: "The Carbon Cycle", text: "Follow a carbon atom through photosynthesis, respiration, ocean chemistry and fossil fuels." }
  },
  {
    fil: "kvavets-kretslopp", amnen: ["biologi", "kemi"], bild: "kvave",
    sv: { titel: "Kvävets kretslopp", text: "Se hur kväve fixeras, omvandlas och återvänder till luften – med oxidationstal." },
    en: { titel: "The Nitrogen Cycle", text: "See how nitrogen is fixed, converted and returned to the air – with oxidation numbers." }
  }
];
 
/* =====================================================================
   BILDER TILL KORTEN (SVG-illustrationer, 320 × 150)
   Varje bild har egna id:n (t.ex. "mb-") så att de inte krockar med varandra.
   ===================================================================== */
const BILDER = {
 
  /* ---------- Molekylbygget: kul-och-pinne-modell av etanol ---------- */
  molekyl: `<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="mb-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#eef3fe"/><stop offset="1" stop-color="#d3defa"/></linearGradient>
      <radialGradient id="mb-c" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#7b8494"/><stop offset="1" stop-color="#1f2530"/></radialGradient>
      <radialGradient id="mb-o" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#ff9a8f"/><stop offset="1" stop-color="#b71c1c"/></radialGradient>
      <radialGradient id="mb-h" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#c3cad8"/></radialGradient>
    </defs>
    <rect width="320" height="150" fill="url(#mb-bg)"/>
    <g fill="none" stroke="#2b59c3" stroke-opacity=".12" stroke-width="1.5">
      <path d="M20 30l14-8 14 8v16l-14 8-14-8z"/><path d="M268 104l14-8 14 8v16l-14 8-14-8z"/><path d="M282 22l10-6 10 6v12l-10 6-10-6z"/>
    </g>
    <!-- Etanol, CH3-CH2-OH: sicksack-kedja med ca 110° vid kolen och 104,5° vid syret -->
    <g transform="translate(163 78) scale(.86) translate(-163 -76)">
    <g stroke="#9aa3b4" stroke-width="7" stroke-linecap="round">
      <line x1="115" y1="93" x2="100" y2="129"/><line x1="164" y1="59" x2="146" y2="22"/>
      <line x1="115" y1="93" x2="83" y2="71"/><line x1="115" y1="93" x2="130" y2="128"/>
      <line x1="115" y1="93" x2="164" y2="59"/><line x1="164" y1="59" x2="184" y2="24"/>
      <line x1="164" y1="59" x2="213" y2="93"/><line x1="213" y1="93" x2="243" y2="67"/>
    </g>
    <circle cx="100" cy="129" r="10" fill="url(#mb-h)" opacity=".9"/>
    <circle cx="146" cy="22" r="10" fill="url(#mb-h)" opacity=".9"/>
    <circle cx="115" cy="93" r="21" fill="url(#mb-c)"/>
    <circle cx="164" cy="59" r="21" fill="url(#mb-c)"/>
    <circle cx="83" cy="71" r="12" fill="url(#mb-h)"/>
    <circle cx="130" cy="128" r="13" fill="url(#mb-h)"/>
    <circle cx="184" cy="24" r="13" fill="url(#mb-h)"/>
    <circle cx="213" cy="93" r="19" fill="url(#mb-o)"/>
    <circle cx="243" cy="67" r="12" fill="url(#mb-h)"/>
    </g>
  </svg>`,
 
  /* ---------- Från DNA till protein: dubbelspiral → mRNA → ribosom → aminosyrakedja ---------- */
  dna: `<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="dn-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f6eefe"/><stop offset="1" stop-color="#e4d3fa"/></linearGradient>
      <marker id="dn-arr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#8b6bb8"/></marker>
    </defs>
    <rect width="320" height="150" fill="url(#dn-bg)"/>
    <g stroke-width="4" stroke-linecap="round">
      <line x1="35" y1="49" x2="35" y2="70" stroke="#f59e0b"/><line x1="35" y1="70" x2="35" y2="91" stroke="#10b981"/>
      <line x1="50" y1="40" x2="50" y2="70" stroke="#3b82f6"/><line x1="50" y1="70" x2="50" y2="100" stroke="#ef4444"/>
      <line x1="65" y1="49" x2="65" y2="70" stroke="#10b981"/><line x1="65" y1="70" x2="65" y2="91" stroke="#f59e0b"/>
      <line x1="95" y1="49" x2="95" y2="70" stroke="#ef4444"/><line x1="95" y1="70" x2="95" y2="91" stroke="#3b82f6"/>
      <line x1="110" y1="40" x2="110" y2="70" stroke="#f59e0b"/><line x1="110" y1="70" x2="110" y2="100" stroke="#10b981"/>
      <line x1="125" y1="49" x2="125" y2="70" stroke="#3b82f6"/><line x1="125" y1="70" x2="125" y2="91" stroke="#ef4444"/>
    </g>
    <path d="M20 70C40 30 60 30 80 70S120 110 140 70" fill="none" stroke="#e0524f" stroke-width="6" stroke-linecap="round"/>
    <path d="M20 70C40 110 60 110 80 70S120 30 140 70" fill="none" stroke="#7b3fe4" stroke-width="6" stroke-linecap="round"/>
    <path d="M146 78Q160 100 170 112" fill="none" stroke="#8b6bb8" stroke-width="2.5" marker-end="url(#dn-arr)"/>
    <g stroke="#f59e0b" stroke-width="3" stroke-linecap="round">
      <line x1="182" y1="124" x2="182" y2="114"/><line x1="196" y1="124" x2="196" y2="114"/><line x1="210" y1="124" x2="210" y2="114"/>
      <line x1="262" y1="124" x2="262" y2="114"/><line x1="276" y1="124" x2="276" y2="114"/><line x1="290" y1="124" x2="290" y2="114"/>
    </g>
    <line x1="172" y1="124" x2="304" y2="124" stroke="#ea7a1b" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="236" cy="96" rx="34" ry="24" fill="#9b7bd4"/>
    <ellipse cx="236" cy="132" rx="28" ry="12" fill="#7c5bbf"/>
    <ellipse cx="226" cy="88" rx="12" ry="6" fill="#fff" opacity=".22"/>
    <g stroke="#6b5a8a" stroke-width="2.5">
      <line x1="244" y1="74" x2="252" y2="58"/><line x1="252" y1="58" x2="268" y2="50"/><line x1="268" y1="50" x2="280" y2="36"/><line x1="280" y1="36" x2="298" y2="30"/><line x1="298" y1="30" x2="306" y2="14"/>
    </g>
    <circle cx="244" cy="74" r="8" fill="#ef4444"/><circle cx="252" cy="58" r="8" fill="#10b981"/><circle cx="268" cy="50" r="8" fill="#3b82f6"/>
    <circle cx="280" cy="36" r="8" fill="#f59e0b"/><circle cx="298" cy="30" r="8" fill="#ec4899"/><circle cx="306" cy="14" r="8" fill="#14b8a6"/>
  </svg>`,
 
  /* ---------- Genetiklabbet: ärtskida, korsningsschema och kromosomer ---------- */
  genetik: `<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="ge-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fef7ea"/><stop offset="1" stop-color="#f6e2bd"/></linearGradient>
      <radialGradient id="ge-y" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#e2b018"/></radialGradient>
      <radialGradient id="ge-g" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#c5e8a0"/><stop offset="1" stop-color="#5f9e2f"/></radialGradient>
    </defs>
    <rect width="320" height="150" fill="url(#ge-bg)"/>
    <g transform="translate(47 0)">
    <g transform="rotate(-25 60 82)">
      <ellipse cx="60" cy="82" rx="46" ry="17" fill="#6aa83a" stroke="#4a7d24" stroke-width="2"/>
      <ellipse cx="60" cy="80" rx="40" ry="10" fill="#b9dc8e"/>
      <circle cx="32" cy="80" r="8" fill="url(#ge-g)"/><circle cx="50" cy="80" r="8" fill="url(#ge-g)"/>
      <circle cx="68" cy="80" r="8" fill="url(#ge-g)"/><circle cx="86" cy="80" r="8" fill="url(#ge-g)"/>
    </g>
    <g font-family="system-ui,sans-serif" font-weight="700" font-size="14" fill="#7a5b1f" text-anchor="middle">
      <text x="146" y="24">A</text><text x="190" y="24">a</text>
      <text x="114" y="61">A</text><text x="114" y="105">a</text>
    </g>
    <rect x="124" y="32" width="88" height="88" rx="8" fill="#fffdf8" stroke="#c9a96a" stroke-width="2.5"/>
    <line x1="168" y1="32" x2="168" y2="120" stroke="#c9a96a" stroke-width="2.5"/>
    <line x1="124" y1="76" x2="212" y2="76" stroke="#c9a96a" stroke-width="2.5"/>
    <circle cx="146" cy="54" r="13" fill="url(#ge-y)"/><circle cx="190" cy="54" r="13" fill="url(#ge-y)"/>
    <circle cx="146" cy="98" r="13" fill="url(#ge-y)"/><circle cx="190" cy="98" r="13" fill="url(#ge-g)"/>
    </g>
  </svg>`,
 
  /* ---------- Cellandningen: mitokondrie, glukos in och ATP ut ---------- */
  cellandning: `<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="ca-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff4ea"/><stop offset="1" stop-color="#fbd9bd"/></linearGradient>
      <radialGradient id="ca-atp" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#fff59d"/><stop offset="1" stop-color="#eab308"/></radialGradient>
      <clipPath id="ca-in"><ellipse cx="176" cy="78" rx="78" ry="38"/></clipPath>
      <marker id="ca-arr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#b45309"/></marker>
    </defs>
    <rect width="320" height="150" fill="url(#ca-bg)"/>
    <polygon points="40,58 55,66.5 55,83.5 40,92 25,83.5 25,66.5" fill="#fff" stroke="#b45309" stroke-width="3"/>
    <circle cx="40" cy="75" r="4" fill="#ef4444"/>
    <path d="M60 75H86" stroke="#b45309" stroke-width="2.5" marker-end="url(#ca-arr)"/>
    <ellipse cx="176" cy="78" rx="88" ry="48" fill="#fb923c" stroke="#c2410c" stroke-width="3"/>
    <ellipse cx="176" cy="78" rx="78" ry="38" fill="#ffe2c4"/>
    <g clip-path="url(#ca-in)" stroke="#f97316" stroke-width="11" stroke-linecap="round" fill="none">
      <path d="M126 30V90"/><path d="M151 126V66"/><path d="M176 30V92"/><path d="M201 126V66"/><path d="M226 30V90"/>
    </g>
    <g fill="#c2410c" opacity=".55"><circle cx="138" cy="104" r="2.5"/><circle cx="188" cy="52" r="2.5"/><circle cx="214" cy="104" r="2.5"/><circle cx="163" cy="50" r="2"/></g>
    <path d="M266 70L280 60M266 86L282 92" stroke="#b45309" stroke-width="2.5" marker-end="url(#ca-arr)"/>
    <g font-family="system-ui,sans-serif" font-weight="800" font-size="8.5" fill="#713f12" text-anchor="middle">
      <circle cx="294" cy="50" r="14" fill="url(#ca-atp)"/><text x="294" y="53">ATP</text>
      <circle cx="296" cy="100" r="14" fill="url(#ca-atp)"/><text x="296" y="103">ATP</text>
      <circle cx="300" cy="18" r="10" fill="url(#ca-atp)" opacity=".75"/><circle cx="302" cy="132" r="10" fill="url(#ca-atp)" opacity=".75"/>
    </g>
  </svg>`,
 
  /* ---------- Fasövergångar: fast → flytande → gas ---------- */
  fas: `<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="fa-bg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#dff1fd"/><stop offset=".5" stop-color="#eef6f2"/><stop offset="1" stop-color="#fde4e7"/></linearGradient>
      <linearGradient id="fa-t" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0ea5e9"/><stop offset=".5" stop-color="#94a3b8"/><stop offset="1" stop-color="#f43f5e"/></linearGradient>
    </defs>
    <rect width="320" height="150" fill="url(#fa-bg)"/>
    <g fill="#ffffff" fill-opacity=".75" stroke="#94a3b8" stroke-width="2">
      <rect x="22" y="20" width="80" height="96" rx="8"/><rect x="120" y="20" width="80" height="96" rx="8"/><rect x="218" y="20" width="80" height="96" rx="8"/>
    </g>
    <g fill="#0ea5e9">
      <circle cx="38" cy="102" r="7"/><circle cx="54" cy="102" r="7"/><circle cx="70" cy="102" r="7"/><circle cx="86" cy="102" r="7"/>
      <circle cx="46" cy="88" r="7"/><circle cx="62" cy="88" r="7"/><circle cx="78" cy="88" r="7"/>
      <circle cx="38" cy="74" r="7"/><circle cx="54" cy="74" r="7"/><circle cx="70" cy="74" r="7"/><circle cx="86" cy="74" r="7"/>
    </g>
    <g stroke="#0ea5e9" stroke-width="1.5" stroke-dasharray="2 2" opacity=".6">
      <line x1="38" y1="74" x2="86" y2="74"/><line x1="46" y1="88" x2="78" y2="88"/><line x1="38" y1="102" x2="86" y2="102"/>
    </g>
    <g fill="#10b981">
      <circle cx="136" cy="103" r="7"/><circle cx="151" cy="100" r="7"/><circle cx="168" cy="104" r="7"/><circle cx="184" cy="101" r="7"/>
      <circle cx="143" cy="88" r="7"/><circle cx="160" cy="86" r="7"/><circle cx="177" cy="89" r="7"/>
      <circle cx="137" cy="74" r="7"/><circle cx="186" cy="76" r="7"/><circle cx="165" cy="71" r="7"/>
    </g>
    <g fill="#f43f5e">
      <circle cx="236" cy="38" r="7"/><circle cx="276" cy="32" r="7"/><circle cx="258" cy="62" r="7"/>
      <circle cx="284" cy="80" r="7"/><circle cx="234" cy="92" r="7"/><circle cx="264" cy="102" r="7"/>
    </g>
    <g stroke="#f43f5e" stroke-width="2" stroke-linecap="round" opacity=".45">
      <line x1="244" y1="43" x2="252" y2="48"/><line x1="268" y1="36" x2="260" y2="40"/><line x1="250" y1="60" x2="242" y2="58"/>
      <line x1="281" y1="73" x2="277" y2="66"/><line x1="240" y1="86" x2="246" y2="80"/><line x1="272" y1="100" x2="280" y2="98"/>
    </g>
    <g fill="none" stroke="#64748b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M104 68h12m-5-5l5 5-5 5"/><path d="M202 68h12m-5-5l5 5-5 5"/>
    </g>
    <rect x="22" y="128" width="276" height="7" rx="3.5" fill="url(#fa-t)"/>
  </svg>`,
 
  /* ---------- Kolets kretslopp: sol, träd, fabrik, hav och CO₂ ---------- */
  kol: `<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="ko-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6effa"/><stop offset="1" stop-color="#eef9fd"/></linearGradient>
      <linearGradient id="ko-sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#38a3d1"/><stop offset="1" stop-color="#1e6f9c"/></linearGradient>
      <marker id="ko-g" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#16a34a"/></marker>
      <marker id="ko-s" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#64748b"/></marker>
      <marker id="ko-b" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0369a1"/></marker>
    </defs>
    <rect width="320" height="150" fill="url(#ko-sky)"/>
    <circle cx="34" cy="28" r="14" fill="#fbbf24"/>
    <g stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round"><line x1="34" y1="6" x2="34" y2="10"/><line x1="12" y1="28" x2="16" y2="28"/><line x1="52" y1="28" x2="56" y2="28"/><line x1="18" y1="12" x2="21" y2="15"/><line x1="50" y1="12" x2="47" y2="15"/></g>
    <path d="M0 118Q60 108 120 114T214 116V150H0z" fill="#7cc47f"/>
    <path d="M206 116Q232 110 258 116T320 114V150H206z" fill="url(#ko-sea)"/>
    <path d="M214 124q8-4 16 0t16 0 16 0 16 0 16 0 16 0" fill="none" stroke="#bfe6f5" stroke-width="1.5" opacity=".7"/>
    <rect x="70" y="88" width="9" height="28" fill="#8a5a33"/>
    <circle cx="74" cy="80" r="20" fill="#2e9e4f"/><circle cx="60" cy="88" r="13" fill="#38b25c"/><circle cx="89" cy="88" r="13" fill="#38b25c"/>
    <rect x="140" y="92" width="40" height="24" fill="#94a3b8"/><rect x="164" y="72" width="8" height="22" fill="#64748b"/>
    <g fill="#fff" opacity=".9"><rect x="146" y="98" width="8" height="7"/><rect x="158" y="98" width="8" height="7"/></g>
    <g fill="#cbd5e1"><circle cx="170" cy="62" r="7"/><circle cx="178" cy="54" r="8"/><circle cx="186" cy="44" r="6"/></g>
    <defs><g id="ko-co2"><circle cx="-10" cy="0" r="5.5" fill="#e53935"/><circle cx="10" cy="0" r="5.5" fill="#e53935"/><circle cx="0" cy="0" r="6.5" fill="#374151"/></g></defs>
    <use href="#ko-co2" transform="translate(132 30)"/>
    <use href="#ko-co2" transform="translate(240 40)"/>
    <path d="M118 36Q96 42 92 58" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#ko-g)"/>
    <path d="M190 38Q208 30 222 36" fill="none" stroke="#64748b" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#ko-s)"/>
    <path d="M244 52Q256 80 254 104" fill="none" stroke="#0369a1" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#ko-b)"/>
  </svg>`,
 
  /* ---------- Kvävets kretslopp: blixt, N₂, baljväxt med rotknölar, bakterier ---------- */
  kvave: `<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="kv-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e0f3e5"/><stop offset="1" stop-color="#f2faf4"/></linearGradient>
      <linearGradient id="kv-soil" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b98a62"/><stop offset="1" stop-color="#8d6142"/></linearGradient>
    </defs>
    <rect width="320" height="150" fill="url(#kv-sky)"/>
    <rect y="96" width="320" height="54" fill="url(#kv-soil)"/>
    <rect y="92" width="320" height="6" rx="3" fill="#66bb6a"/>
    <polygon points="60,44 50,66 60,66 52,88 74,58 63,58 70,44" fill="#facc15" stroke="#eab308" stroke-width="1"/>
    <g fill="#cfd8dc"><ellipse cx="58" cy="34" rx="30" ry="13"/><circle cx="44" cy="28" r="12"/><circle cx="66" cy="24" r="14"/></g>
    <defs><g id="kv-n2">
      <circle cx="-6" cy="0" r="7" fill="#0288d1"/><circle cx="6" cy="0" r="7" fill="#0288d1"/>
      <g stroke="#e1f5fe" stroke-width="1.3"><line x1="-2" y1="-3" x2="2" y2="-3"/><line x1="-2" y1="0" x2="2" y2="0"/><line x1="-2" y1="3" x2="2" y2="3"/></g>
    </g></defs>
    <use href="#kv-n2" transform="translate(236 28)"/>
    <use href="#kv-n2" transform="translate(280 52)"/>
    <use href="#kv-n2" transform="translate(120 36)"/>
    <path d="M176 94V40" stroke="#43a047" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="162" cy="70" rx="13" ry="6" transform="rotate(-30 162 70)" fill="#66bb6a"/>
    <ellipse cx="190" cy="60" rx="13" ry="6" transform="rotate(30 190 60)" fill="#66bb6a"/>
    <ellipse cx="164" cy="48" rx="11" ry="5" transform="rotate(-30 164 48)" fill="#81c784"/>
    <circle cx="176" cy="36" r="6" fill="#f48fb1"/>
    <g fill="none" stroke="#e8d6c3" stroke-width="2.5" stroke-linecap="round">
      <path d="M176 98V134"/><path d="M176 108Q160 116 152 132"/><path d="M176 112Q194 120 200 136"/>
    </g>
    <g fill="#ffb74d" stroke="#ef8f1c" stroke-width="1"><circle cx="160" cy="120" r="4.5"/><circle cx="176" cy="126" r="4.5"/><circle cx="192" cy="124" r="4.5"/><circle cx="154" cy="130" r="3.5"/><circle cx="198" cy="133" r="3.5"/></g>
    <g fill="#e57373"><rect x="80" y="118" width="14" height="6" rx="3" transform="rotate(20 87 121)"/><rect x="102" y="132" width="14" height="6" rx="3" transform="rotate(-15 109 135)"/><rect x="246" y="116" width="14" height="6" rx="3" transform="rotate(-25 253 119)"/><rect x="268" y="132" width="14" height="6" rx="3" transform="rotate(10 275 135)"/></g>
  </svg>`,
 
  /* ---------- Reservbild ---------- */
  standard: `<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="320" height="150" fill="#e8eefc"/>
    <circle cx="160" cy="75" r="30" fill="#2b59c3"/><path d="M152 60l22 15-22 15z" fill="#fff"/>
  </svg>`
};
 


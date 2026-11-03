# Simuleringar i kemi och biologi

Interaktiva simuleringar för gymnasiets kemi och biologi av Johan Jensen.

Webbplats: https://jojjen-katedral.github.io/

## Filer
- `index.html` – startsidan
- `visa.html` – visar en simulering med en rad överst (tillbaka, helskärm)
- `simuleringar.js` – listan över simuleringar som visas på startsidan
- `simuleringar/` – själva simuleringarna (en HTML-fil per simulering)

## Lägga till en ny simulering
1. Ladda upp HTML-filen till mappen `simuleringar/` (t.ex. `fasovergangar.html`).
2. Öppna `simuleringar.js`, kopiera ett block i listan och ändra `fil`, `amnen`, `kurs`, `ikon`, `farg` och texterna.
3. Spara (Commit changes). Efter någon minut syns den på startsidan.

## Bädda in en simulering på en annan sida
```html
<iframe src="https://jojjen-katedral.github.io/simuleringar/kvavets-kretslopp.html" width="100%" height="700" style="border:0" allowfullscreen></iframe>
```

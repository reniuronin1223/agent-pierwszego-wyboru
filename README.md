# Agent Pierwszego Wyboru — webinar APW ONLINE

Statyczna strona sprzedażowa z zapisem na webinar. Cztery samodzielne pliki HTML, bez zależności — działają też z dysku lokalnego.

## Publikacja na GitHub Pages

1. Wrzuć zawartość tego folderu do repozytorium (pliki muszą leżeć w korzeniu albo w `/docs`).
2. Settings → Pages → Source: `Deploy from a branch`, Branch: `main`, folder `/ (root)` lub `/docs`.
3. Po minucie strona jest pod `https://<user>.github.io/<repo>/`.

Nic nie trzeba budować — żadnego `npm`, żadnego frameworka.

## Pliki

| Plik | Rola |
| --- | --- |
| `index.html` | Landing page. Każde CTA prowadzi do `zamowienie.html`. |
| `zamowienie.html` | Formularz zapisu, dane do faktury, wybór metody płatności. |
| `potwierdzenie.html` | Po udanej płatności. |
| `blad-platnosci.html` | Po odrzuconej płatności, z powrotem do `zamowienie.html`. |

## Co trzeba uzupełnić przed startem

**Termin webinaru** — w `index.html` i `zamowienie.html` widnieje `[DATA] o [GODZINA]` (4 miejsca). Podmień na realny termin.

**Kontakt** — `kontakt@agentpierwszegowyboru.pl` i `+48 000 000 000` to placeholdery, występują na wszystkich stronach wyniku.

**Płatności** — to jest prototyp warstwy wizualnej. Formularz waliduje dane po stronie przeglądarki i symuluje płatność (2,6 s), potem przechodzi na stronę wyniku. Żadna transakcja się nie wykonuje i żadne dane nie są nigdzie wysyłane. Do uruchomienia sprzedaży potrzebujesz backendu: integracji z Przelewy24/PayU, zapisu zamówień i wysyłki maila z linkiem do webinaru.

**Regulamin i polityka prywatności** — linki w formularzu prowadzą do `regulamin.html` i `polityka-prywatnosci.html`, których jeszcze nie ma. Dodaj te dwie strony albo podmień linki na istniejące adresy.

**Zgoda na treści cyfrowe** — checkbox w formularzu mówi o utracie prawa odstąpienia po rozpoczęciu webinaru. Daj ten zapis do sprawdzenia prawnikowi.

**Licznik zapisów** — „14 osób zapisało się dzisiaj" startuje od 14 i rośnie o 1 co 26 sekund do 38. To liczba poglądowa, nie dane z systemu. Jeśli nie chcesz jej pokazywać bez realnego źródła, usuń bloki z tekstem `dzisiaj na webinar`.

## Dane techniczne

Czcionka Mulish, obrazy i komponenty design systemu są wbudowane w każdy plik jako base64 — dlatego `index.html` waży 1,3 MB. Zaletą jest zero zewnętrznych requestów i pełna praca offline. Strony są responsywne, mobile first, z obsługą `prefers-reduced-motion`.

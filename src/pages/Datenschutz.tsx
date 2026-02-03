import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Datenschutz = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Datenschutzerklärung – Philipp's Biohack</title>
        <meta name="description" content="Datenschutzerklärung für Philipp's Biohack – Informationen zur Verarbeitung personenbezogener Daten." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://stoffwechsel.philippsbiohack.de/datenschutz" />
      </Helmet>

      <Header />

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">

            <article className="prose prose-slate dark:prose-invert max-w-none">
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">Datenschutzerklärung</h1>
              <p><strong>Stand: Dezember 2024</strong></p>

              <h2>1. Verantwortlicher</h2>
              <p>
                <strong>Inovomarket Online-Marketing und Vertrieb e.U.</strong><br />
                Schulgasse 7<br />
                2100 Korneuburg<br />
                Österreich<br />
                E-Mail: info@inovomarket.at<br />
                Telefon: +43 677 64113808
              </p>

              <h2>2. Datenschutzbeauftragter</h2>
              <p>
                Ein Datenschutzbeauftragter ist gesetzlich nicht vorgeschrieben. Bei Fragen wenden Sie sich
                an den Verantwortlichen.
              </p>

              <h2>3. Allgemeines zur Datenverarbeitung</h2>
              <p>
                Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen
                Website sowie unserer Inhalte und Leistungen erforderlich ist.
              </p>

              <h2>4. Hosting</h2>
              <p>
                <strong>Hoster:</strong> Lovable Labs Incorporated, Dover, Delaware, USA<br />
                <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer">https://lovable.dev</a><br />
                Datenschutzerklärung:{" "}
                <a href="https://lovable.dev/privacy" target="_blank" rel="noopener noreferrer">
                  https://lovable.dev/privacy
                </a>
              </p>

              <h2>5. Cookies</h2>
              <p>
                Wir verwenden technisch notwendige, funktionale, Analyse- und Marketing-Cookies. Sie können
                die Speicherung über Ihre Browser-Einstellungen verhindern.
              </p>

              <h2>6. Newsletter / E-Mail-Marketing (Quentn)</h2>
              <p>
                <strong>Anbieter:</strong> Quentn.com GmbH, Friedrich-Ebert-Str. 51, 14469 Potsdam, Deutschland<br />
                <a href="https://quentn.com/datenschutz" target="_blank" rel="noopener noreferrer">
                  https://quentn.com/datenschutz
                </a>
              </p>
              <p>
                Quentn ist DSGVO-konform mit Server-Standort in Deutschland. Erhobene Daten: E-Mail, Vorname,
                IP-Adresse, Öffnungsraten, Klickverhalten.
              </p>
              <p>
                Abmeldung jederzeit über den Link im Newsletter oder per E-Mail an info@inovomarket.at.
              </p>

              <h2>7. Webinar-Software (Webinaris)</h2>
              <p>
                <strong>Anbieter:</strong> Webinaris GmbH, Bussardstraße 5, 82166 Gräfelfing, Deutschland<br />
                <a href="https://www.webinaris.com/datenschutz" target="_blank" rel="noopener noreferrer">
                  https://www.webinaris.com/datenschutz
                </a>
              </p>

              <h2>8. Google Tag Manager & Ads</h2>
              <p>
                Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland<br />
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  https://policies.google.com/privacy
                </a>
              </p>

              <h2>9. Ihre Rechte</h2>
              <p>
                Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18),
                Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21), Widerruf (Art. 7 Abs. 3),
                Beschwerde bei Aufsichtsbehörde (Art. 77 DSGVO).
              </p>
              <p>
                <strong>Aufsichtsbehörde:</strong> Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030 Wien<br />
                E-Mail: dsb@dsb.gv.at
              </p>

              <h2>Cookie-Einstellungen</h2>
              <p>
                Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
                Einige Cookies sind für den Betrieb der Website notwendig, während andere uns helfen,
                die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen.
              </p>
              <p>
                Weitere Informationen finden Sie in unserem{" "}
                <Link to="/impressum" className="text-primary hover:underline">Impressum</Link>.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Datenschutz;

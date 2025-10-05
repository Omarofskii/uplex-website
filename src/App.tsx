import {
  FileText,
  Lightbulb,
  CheckSquare,
  Layers,
  AlertTriangle,
  Clock,
  Shield,
  Building,
  Briefcase,
  Scale,
  BookOpen,
  Mail,
  Database,
  History,
} from "lucide-react";
import NewsletterForm from "../src/NewsLetterForm";

function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* HERO */}
      <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center space-y-8">
          <img
            src="/UpLex_Transparent.png"
            alt="UpLex Logo"
            className="h-70 md:h-80 w-auto"
          />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight max-w-4xl">
            De slimme manier om Belgische wetgeving te volgen
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
  Uplex verzamelt automatisch wetten, besluiten en arresten uit
  officiële bronnen en vat ze samen met AI: helder, relevant en
  direct toepasbaar.
</p>


          <button
            onClick={scrollToContact}
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 mt-4"
          >
            Contacteer Ons
          </button>
        </div>
      </section>

      {/* WHY UPLEX */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16">
            Waarom Uplex?
          </h2>

          <div className="grid md:grid-cols-5 gap-8 md:gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center space-y-4">
              <AlertTriangle className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-black">Cut Through Complexity</h3>
              <p className="text-gray-600 leading-relaxed">
                Geen eindeloze Staatsbladlectuur meer — krijg de essentie in enkele seconden.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center space-y-4">
              <Clock className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-black">Bespaar Tijd</h3>
              <p className="text-gray-600 leading-relaxed">
                Ontvang enkel updates die relevant zijn voor jouw sector of rechtsdomein.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center space-y-4">
              <Shield className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-black">Blijf Compliant</h3>
              <p className="text-gray-600 leading-relaxed">
                Weet wat er verandert en wat jij concreet moet doen om risico’s te vermijden.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center space-y-4">
              <Layers className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-black">Slimme Categorisatie</h3>
              <p className="text-gray-600 leading-relaxed">
                Elk artikel wordt automatisch getagd per sector, rechtsdomein en ministerie.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center space-y-4">
              <Database className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-black">Officiële Bronnen</h3>
              <p className="text-gray-600 leading-relaxed">
                Alle updates komen rechtstreeks uit het Belgisch Staatsblad, de Raad van State en het Hof van Cassatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16">
            Hoe het Werkt
          </h2>

          <div className="grid md:grid-cols-4 gap-8 md:gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center space-y-4">
              <FileText className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-black">AI-Samenvattingen</h3>
              <p className="text-gray-600 leading-relaxed">
                Wetteksten en arresten omgezet naar duidelijke TL;DR’s in Nederlands en Frans.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center space-y-4">
              <Lightbulb className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-black">Slimme Tags</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatische herkenning van sector, rechtsdomein en betrokken ministerie.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center space-y-4">
              <CheckSquare className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-black">Concreet Actieplan</h3>
              <p className="text-gray-600 leading-relaxed">
                Checklist met de acties die jij moet nemen om compliant te blijven.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center space-y-4">
              <History className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-black">Tijdlijn & Versies</h3>
              <p className="text-gray-600 leading-relaxed">
                Volg hoe wetten evolueren — van oorspronkelijke publicatie tot interpretaties door de rechtspraak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16">
            Voor wie is Uplex?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 space-y-4">
              <Scale className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-black">Juridische Professionals</h3>
              <p className="text-gray-600 leading-relaxed">
                Volg wetswijzigingen en rechtspraak sneller en accurater.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 space-y-4">
              <Building className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-black">Overheidsdiensten</h3>
              <p className="text-gray-600 leading-relaxed">
                Blijf op de hoogte van sectorale besluiten en ministeriële updates.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 space-y-4">
              <Briefcase className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-black">Bedrijven & Compliance Teams</h3>
              <p className="text-gray-600 leading-relaxed">
                Ontvang actiegerichte updates en handel proactief bij nieuwe regelgeving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED SOURCES */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
            Gebaseerd op officiële bronnen
          </h2>
          <div className="flex flex-wrap justify-center gap-10 text-gray-600 text-lg">
            <div className="flex items-center gap-2">
              <BookOpen className="text-teal-500" />
              Belgisch Staatsblad
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="text-teal-500" />
              Raad van State
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="text-teal-500" />
              Hof van Cassatie
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="px-6 py-20 bg-white text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Blijf op de hoogte</h2>
          <p className="text-gray-600 mt-4">
            Ontvang updates over nieuwe functies, juridische inzichten en het laatste nieuws van Uplex.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 bg-gray-50 text-center">
        <Mail className="w-12 h-12 text-teal-500 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Neem contact op</h2>
        <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
          Heb je vragen, wil je early access tot de beta of samenwerken met het team achter Uplex?
        </p>
        <a
          href="mailto:info@soarinnovations.be"
          className="text-teal-600 hover:underline text-lg font-semibold"
        >
          info@soarinnovations.be
        </a>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Uplex · Een product van Soar Innovations</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Voorwaarden</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

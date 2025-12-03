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

type HomePageProps = {
  onScrollToContact: () => void;
};

const HomePage = ({ onScrollToContact }: HomePageProps) => (
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
          De efficiente manier om nieuwe Belgische regels en rechtspraak meteen te begrijpen
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
          Uplex haalt automatisch alle nieuwe publicaties op en zet ze om in duidelijke inzichten waar je als organisatie onmiddellijk mee verder kan.
        </p>

        <button
          onClick={onScrollToContact}
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
              Geen onnodige lectuur meer je krijgt meteen de kern zonder tijd te verliezen.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center space-y-4">
            <Clock className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-black">Bespaar Tijd</h3>
            <p className="text-gray-600 leading-relaxed">
              Je ziet alleen wat echt telt voor jouw onderneming in jouw sector zodat je geen enkele belangrijke wijziging mist.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center space-y-4">
            <Shield className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-black">Blijf Compliant</h3>
            <p className="text-gray-600 leading-relaxed">
              Je krijgt meteen te zien welke verplichtingen veranderen en welke acties nodig zijn om in regel te blijven.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center space-y-4">
            <Layers className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-black">Slimme Categorisatie</h3>
            <p className="text-gray-600 leading-relaxed">
              Alles is duidelijk gestructureerd per sector per rechtsdomein en per ministerie zodat je snel vindt wat voor jouw organisatie relevant is.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center space-y-4">
            <Database className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-black">Officiele Bronnen</h3>
            <p className="text-gray-600 leading-relaxed">
              Uplex werkt uitsluitend met officiele publicaties zodat je altijd op correcte en betrouwbare informatie steunt.
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
              Wetteksten en arresten omgezet naar duidelijke TL;DR's in Nederlands en Frans.
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
              Volg hoe wetten evolueren - van oorspronkelijke publicatie tot interpretaties door de rechtspraak.
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
            <h3 className="text-xl font-bold text-black">Ondernemingen &amp; Compliance teams</h3>
            <p className="text-gray-600 leading-relaxed">
              Bedrijven die snel willen weten wat verandert en welke acties prioritair zijn.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 space-y-4">
            <Building className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-black">Ondernemingen die actief risicobeheer willen voeren</h3>
            <p className="text-gray-600 leading-relaxed">
              En op tijd willen reageren op nieuwe verplichtingen.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 space-y-4">
            <Briefcase className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-black">Organisaties die duidelijke stappen willen ontvangen</h3>
            <p className="text-gray-600 leading-relaxed">
              Zodat zij zonder vertraging in regel blijven.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* TRUSTED SOURCES */}
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Gebaseerd op betrouwbare officiele publicaties zodat elke update juridisch correct is.
        </h2>
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
        href="mailto:info@uplex.be"
        className="text-teal-600 hover:underline text-lg font-semibold"
      >
        info@uplex.be
      </a>
    </section>

    {/* FOOTER */}
    <footer className="px-6 py-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>(c) {new Date().getFullYear()} Uplex</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="/privacy" className="hover:text-gray-700">Privacy</a>
        </div>
      </div>
    </footer>
  </div>
);

const PrivacyPage = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <section className="px-6 py-16 md:py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black">Privacy</h1>
       
      </div>
    </section>

    <section className="px-6 py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-teal-600 font-semibold text-sm uppercase tracking-wide mb-4">
            Privacy Notice (NL)
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Deze privacyverklaring legt uit hoe Uplex persoonsgegevens verwerkt wanneer iemand onze website bezoekt, een contactverzoek indient of een privacygerelateerd verzoek verstuurt. Uplex is op dit moment nog niet formeel ingeschreven als onderneming, maar treedt wel op als verwerkingsverantwoordelijke voor alle gegevens die wij ontvangen. Voor alle vragen over deze verklaring en voor alle privacyverzoeken kan men contact opnemen via <a href="mailto:XX@XX.com" className="text-teal-600 font-semibold hover:underline">XX@XX.com</a>.
            </p>
            <p>
              Wij verwerken enkel gegevens die rechtstreeks door de gebruiker worden verstrekt, zoals naam, voornaam, e-mailadres, contactinhoud en alle bijkomende informatie die vrijwillig wordt gedeeld. Daarnaast gebruikt onze website standaard cookies die uitsluitend dienen om de functionaliteit van de site te ondersteunen. Wij maken geen gebruik van externe diensten, analyseplatformen of systemen van derde partijen en wij delen persoonsgegevens nooit zonder wettelijke verplichting of uitdrukkelijke toestemming van de betrokkene.
            </p>
            <p>
              Alle gegevens worden verwerkt op basis van de noodzaak om onze dienstverlening te kunnen aanbieden, om vragen te beantwoorden of om wettelijke verplichtingen na te leven. Wij bewaren persoonsgegevens enkel gedurende de periode die redelijkerwijs nodig is voor het doel waarvoor ze zijn verzameld. Wanneer gegevens niet langer nodig zijn worden ze veilig verwijderd.
            </p>
            <p>
              Iedere gebruiker heeft het recht om toegang te vragen tot zijn of haar persoonsgegevens, deze te laten verbeteren of verwijderen, bezwaar te maken tegen de verwerking, een kopie van de gegevens te ontvangen of een beperking van de verwerking te vragen zoals voorzien in de Algemene Verordening Gegevensbescherming en de Belgische privacywetgeving. Verzoeken kunnen op elk moment worden ingediend via <a href="mailto:XX@XX.com" className="text-teal-600 font-semibold hover:underline">XX@XX.com</a>. De Data Protection Officer van Uplex is bereikbaar via hetzelfde adres.
            </p>
            <p>
              Uplex zorgt voor passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, ongeoorloofde toegang en alle andere vormen van onrechtmatige verwerking.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-teal-600 font-semibold text-sm uppercase tracking-wide mb-4">
            Notice de confidentialite (FR)
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              La presente declaration de confidentialite explique comment Uplex traite les donnees personnelles lorsque quelqu un consulte notre site internet, envoie une demande de contact ou soumet une demande liee a la protection des donnees. Uplex n est pas encore enregistre en tant qu entreprise mais agit deja en tant que responsable du traitement pour toutes les donnees que nous recevons. Pour toute question concernant cette declaration ou pour toute demande relative aux donnees personnelles, il est possible de nous contacter a l adresse <a href="mailto:XX@XX.com" className="text-teal-600 font-semibold hover:underline">XX@XX.com</a>.
            </p>
            <p>
              Nous traitons uniquement les informations fournies directement par l utilisateur, telles que le nom, le prenom, l adresse e mail, le contenu du message et toutes autres informations communiquees volontairement. Notre site utilise uniquement des cookies standards necessaires au bon fonctionnement du site. Nous ne faisons appel a aucun service externe, aucune plateforme d analyse et aucun tiers, et nous ne partageons jamais les donnees personnelles sauf en cas d obligation legale ou avec le consentement explicite de la personne concernee.
            </p>
            <p>
              Toutes les donnees sont traitees dans la mesure ou cela est necessaire pour fournir nos services, repondre aux demandes ou respecter nos obligations legales. Les donnees sont conservees uniquement pendant la periode raisonnablement necessaire pour atteindre la finalite pour laquelle elles ont ete recueillies. Lorsqu elles ne sont plus utiles elles sont supprimees de maniere securisee.
            </p>
            <p>
              Chaque utilisateur dispose du droit d acceder a ses donnees, de demander leur rectification ou leur suppression, de s opposer au traitement, de recevoir une copie de ses donnees ou de demander une limitation du traitement, conformement au Reglement general sur la protection des donnees et a la legislation belge. Les demandes peuvent etre adressees a tout moment a <a href="mailto:XX@XX.com" className="text-teal-600 font-semibold hover:underline">XX@XX.com</a>. Le Data Protection Officer d Uplex peut etre contacte via la meme adresse.
            </p>
            <p>
              Uplex met en place des mesures techniques et organisationnelles adequates afin de proteger les donnees personnelles contre toute perte, acces non autorise ou toute autre forme de traitement illicite.
            </p>
          </div>
        </div>
      </div>
    </section>

    <footer className="px-6 py-10 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>(c) {new Date().getFullYear()} Uplex</p>
        <div className="flex gap-4">
          <a href="/" className="hover:text-gray-800">Home</a>
          <a href="mailto:info@uplex.be" className="hover:text-gray-800">Contact</a>
        </div>
      </div>
    </footer>
  </div>
);

function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isPrivacyPage =
    typeof window !== "undefined" && window.location.pathname.toLowerCase().includes("privacy");

  return isPrivacyPage ? <PrivacyPage /> : <HomePage onScrollToContact={scrollToContact} />;
}

export default App;

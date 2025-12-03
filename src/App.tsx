import { useState } from "react";
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

type Lang = "nl" | "fr";

const translations: Record<
  Lang,
  {
    heroTitle: string;
    heroSubtitle: string;
    cta: string;
    whyTitle: string;
    whyCards: { title: string; body: string }[];
    howTitle: string;
    howCards: { title: string; body: string }[];
    forWhoTitle: string;
    forWhoCards: { title: string; body: string; icon: "scale" | "building" | "briefcase" }[];
    sourcesTitle: string;
    sourcesSubtitle: string;
    newsletterTitle: string;
    newsletterSubtitle: string;
    contactTitle: string;
    contactBody: string;
    contactEmail: string;
    footerPrivacy: string;
    footerHome: string;
    footerContact: string;
    privacyTitle: string;
    privacyIntro: string;
    privacyCards: { title: string; paragraphs: string[] }[];
  }
> = {
  nl: {
    heroTitle: "De efficiente manier om nieuwe Belgische regels en rechtspraak meteen te begrijpen",
    heroSubtitle:
      "Uplex haalt automatisch alle nieuwe publicaties op en zet ze om in duidelijke inzichten waar je als organisatie onmiddellijk mee verder kan.",
    cta: "Contacteer Ons",
    whyTitle: "Waarom Uplex?",
    whyCards: [
      {
        title: "Cut Through Complexity",
        body: "Geen onnodige lectuur meer je krijgt meteen de kern zonder tijd te verliezen.",
      },
      {
        title: "Bespaar Tijd",
        body: "Je ziet alleen wat echt telt voor jouw onderneming in jouw sector zodat je geen enkele belangrijke wijziging mist.",
      },
      {
        title: "Blijf Compliant",
        body: "Je krijgt meteen te zien welke verplichtingen veranderen en welke acties nodig zijn om in regel te blijven.",
      },
      {
        title: "Slimme Categorisatie",
        body:
          "Alles is duidelijk gestructureerd per sector per rechtsdomein en per ministerie zodat je snel vindt wat voor jouw organisatie relevant is.",
      },
      {
        title: "Officiele Bronnen",
        body: "Uplex werkt uitsluitend met officiele publicaties zodat je altijd op correcte en betrouwbare informatie steunt.",
      },
    ],
    howTitle: "Hoe het Werkt",
    howCards: [
      {
        title: "AI-Samenvattingen",
        body: "Wetteksten en arresten omgezet naar duidelijke TL;DR's in Nederlands en Frans.",
      },
      {
        title: "Slimme Tags",
        body: "Automatische herkenning van sector, rechtsdomein en betrokken ministerie.",
      },
      {
        title: "Concreet Actieplan",
        body: "Checklist met de acties die jij moet nemen om compliant te blijven.",
      },
      {
        title: "Tijdlijn & Versies",
        body: "Volg hoe wetten evolueren - van oorspronkelijke publicatie tot interpretaties door de rechtspraak.",
      },
    ],
    forWhoTitle: "Voor wie is Uplex?",
    forWhoCards: [
      {
        title: "Ondernemingen & Compliance teams",
        body: "Bedrijven die snel willen weten wat verandert en welke acties prioritair zijn.",
        icon: "scale",
      },
      {
        title: "Ondernemingen die actief risicobeheer willen voeren",
        body: "En op tijd willen reageren op nieuwe verplichtingen.",
        icon: "building",
      },
      {
        title: "Organisaties die duidelijke stappen willen ontvangen",
        body: "Zodat zij zonder vertraging in regel blijven.",
        icon: "briefcase",
      },
    ],
    sourcesTitle: "Gebaseerd op betrouwbare officiele publicaties zodat elke update juridisch correct is.",
    sourcesSubtitle: "",
    newsletterTitle: "Blijf op de hoogte",
    newsletterSubtitle: "Ontvang updates over nieuwe functies, juridische inzichten en het laatste nieuws van Uplex.",
    contactTitle: "Neem contact op",
    contactBody: "Heb je vragen, wil je early access tot de beta of samenwerken met het team achter Uplex?",
    contactEmail: "info@uplex.be",
    footerPrivacy: "Privacy",
    footerHome: "Home",
    footerContact: "Contact",
    privacyTitle: "Privacy",
    privacyIntro: "",
    privacyCards: [
      {
        title: "Privacy Notice (NL)",
        paragraphs: [
          "Deze privacyverklaring legt uit hoe Uplex persoonsgegevens verwerkt wanneer iemand onze website bezoekt, een contactverzoek indient of een privacygerelateerd verzoek verstuurt. Uplex is op dit moment nog niet formeel ingeschreven als onderneming, maar treedt wel op als verwerkingsverantwoordelijke voor alle gegevens die wij ontvangen. Voor alle vragen over deze verklaring en voor alle privacyverzoeken kan men contact opnemen via XX@XX.com.",
          "Wij verwerken enkel gegevens die rechtstreeks door de gebruiker worden verstrekt, zoals naam, voornaam, e-mailadres, contactinhoud en alle bijkomende informatie die vrijwillig wordt gedeeld. Daarnaast gebruikt onze website standaard cookies die uitsluitend dienen om de functionaliteit van de site te ondersteunen. Wij maken geen gebruik van externe diensten, analyseplatformen of systemen van derde partijen en wij delen persoonsgegevens nooit zonder wettelijke verplichting of uitdrukkelijke toestemming van de betrokkene.",
          "Alle gegevens worden verwerkt op basis van de noodzaak om onze dienstverlening te kunnen aanbieden, om vragen te beantwoorden of om wettelijke verplichtingen na te leven. Wij bewaren persoonsgegevens enkel gedurende de periode die redelijkerwijs nodig is voor het doel waarvoor ze zijn verzameld. Wanneer gegevens niet langer nodig zijn worden ze veilig verwijderd.",
          "Iedere gebruiker heeft het recht om toegang te vragen tot zijn of haar persoonsgegevens, deze te laten verbeteren of verwijderen, bezwaar te maken tegen de verwerking, een kopie van de gegevens te ontvangen of een beperking van de verwerking te vragen zoals voorzien in de Algemene Verordening Gegevensbescherming en de Belgische privacywetgeving. Verzoeken kunnen op elk moment worden ingediend via XX@XX.com. De Data Protection Officer van Uplex is bereikbaar via hetzelfde adres.",
          "Uplex zorgt voor passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, ongeoorloofde toegang en alle andere vormen van onrechtmatige verwerking.",
        ],
      },
    ],
  },
  fr: {
    heroTitle: "La maniere efficace de suivre facilement les nouvelles regles et decisions en Belgique",
    heroSubtitle:
      "Uplex recupere automatiquement toutes les nouvelles publications et les transforme en informations claires et directement exploitables pour votre organisation.",
    cta: "Contactez-nous",
    whyTitle: "Pourquoi Uplex ?",
    whyCards: [
      {
        title: "Couper dans la complexite",
        body: "Plus besoin de lire des pages entieres vous recevez directement l'essentiel sans perdre de temps.",
      },
      {
        title: "Gagner du temps",
        body:
          "Vous recevez uniquement ce qui concerne votre secteur ce qui vous permet de ne manquer aucune evolution importante.",
      },
      {
        title: "Rester conforme",
        body:
          "Vous voyez immediatement quelles obligations evoluent et quelles actions sont necessaires pour rester en conformite.",
      },
      {
        title: "Structuration claire",
        body:
          "Tout est clairement structure par secteur par domaine juridique et par ministere ce qui vous permet de trouver rapidement ce qui concerne votre organisation.",
      },
      {
        title: "Sources officielles",
        body: "Uplex se base uniquement sur des sources officielles ce qui garantit une information correcte et fiable.",
      },
    ],
    howTitle: "Comment ca marche",
    howCards: [
      {
        title: "Resumes AI",
        body: "Textes legaux et arrets convertis en TL;DR clairs en neerlandais et en francais.",
      },
      {
        title: "Tags intelligents",
        body: "Identification automatique du secteur, du domaine juridique et du ministere concerne.",
      },
      {
        title: "Plan d'action concret",
        body: "Checklist des actions a prendre pour rester conforme.",
      },
      {
        title: "Chronologie et versions",
        body:
          "Suivez l'evolution des lois - de la publication initiale aux interpretations jurisprudentielles.",
      },
    ],
    forWhoTitle: "Pour qui est Uplex ?",
    forWhoCards: [
      {
        title: "Pour les entreprises et les equipes de conformite",
        body: "Les organisations qui veulent savoir rapidement ce qui change et quelles actions sont prioritaires.",
        icon: "scale",
      },
      {
        title: "Entreprises qui veulent gerer leurs risques de maniere proactive",
        body: "Et reagir a temps aux nouvelles obligations.",
        icon: "building",
      },
      {
        title: "Organisations qui souhaitent recevoir des actions concretes",
        body: "Afin de rester en conformite sans delai.",
        icon: "briefcase",
      },
    ],
    sourcesTitle: "Base sur des sources officielles fiables afin que chaque mise a jour soit juridiquement correcte.",
    sourcesSubtitle: "",
    newsletterTitle: "Restez informe",
    newsletterSubtitle:
      "Recevez des mises a jour sur les fonctionnalites, des insights juridiques et les nouveautes d'Uplex.",
    contactTitle: "Contactez-nous",
    contactBody:
      "Des questions, envie d'acceder a la beta ou de collaborer avec l'equipe Uplex ?",
    contactEmail: "info@uplex.be",
    footerPrivacy: "Confidentialite",
    footerHome: "Accueil",
    footerContact: "Contact",
    privacyTitle: "Confidentialite",
    privacyIntro:
      "",
    privacyCards: [
      {
        title: "Notice de confidentialite (FR)",
        paragraphs: [
          "La presente declaration de confidentialite explique comment Uplex traite les donnees personnelles lorsque quelqu un consulte notre site internet, envoie une demande de contact ou soumet une demande liee a la protection des donnees. Uplex n est pas encore enregistre en tant qu entreprise mais agit deja en tant que responsable du traitement pour toutes les donnees que nous recevons. Pour toute question concernant cette declaration ou pour toute demande relative aux donnees personnelles, il est possible de nous contacter a l adresse XX@XX.com.",
          "Nous traitons uniquement les informations fournies directement par l utilisateur, telles que le nom, le prenom, l adresse e mail, le contenu du message et toutes autres informations communiquees volontairement. Notre site utilise uniquement des cookies standards necessaires au bon fonctionnement du site. Nous ne faisons appel a aucun service externe, aucune plateforme d analyse et aucun tiers, et nous ne partageons jamais les donnees personnelles sauf en cas d obligation legale ou avec le consentement explicite de la personne concernee.",
          "Toutes les donnees sont traitees dans la mesure ou cela est necessaire pour fournir nos services, repondre aux demandes ou respecter nos obligations legales. Les donnees sont conservees uniquement pendant la periode raisonnablement necessaire pour atteindre la finalite pour laquelle elles ont ete recueillies. Lorsqu elles ne sont plus utiles elles sont supprimees de maniere securisee.",
          "Chaque utilisateur dispose du droit d acceder a ses donnees, de demander leur rectification ou leur suppression, de s opposer au traitement, de recevoir une copie de ses donnees ou de demander une limitation du traitement, conformement au Reglement general sur la protection des donnees et a la legislation belge. Les demandes peuvent etre adressees a tout moment a XX@XX.com. Le Data Protection Officer d Uplex peut etre contacte via la meme adresse.",
          "Uplex met en place des mesures techniques et organisationnelles adequates afin de proteger les donnees personnelles contre toute perte, acces non autorise ou toute autre forme de traitement illicite.",
        ],
      },
    ],
  },
};

const LangSwitch = ({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) => (
  <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-2 py-1 shadow-sm">
    {(["nl", "fr"] as Lang[]).map((code) => (
      <button
        key={code}
        onClick={() => setLang(code)}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
          lang === code ? "bg-teal-500 text-white" : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        {code === "nl" ? "NL" : "FR"}
      </button>
    ))}
  </div>
);

type HomePageProps = {
  t: (typeof translations)[Lang];
  onScrollToContact: () => void;
};

const HomePage = ({ t, onScrollToContact }: HomePageProps) => (
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
          {t.heroTitle}
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed">
          {t.heroSubtitle}
        </p>

        <button
          onClick={onScrollToContact}
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 mt-4"
        >
          {t.cta}
        </button>
      </div>
    </section>

    {/* WHY UPLEX */}
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16">
          {t.whyTitle}
        </h2>

        <div className="grid md:grid-cols-5 gap-8 md:gap-10">
          {t.whyCards.map((card, idx) => {
            const Icon = [AlertTriangle, Clock, Shield, Layers, Database][idx] || AlertTriangle;
            return (
              <div
                key={card.title}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center space-y-4"
              >
                <Icon className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-black">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* HOW IT WORKS */}
    <section className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16">
          {t.howTitle}
        </h2>

        <div className="grid md:grid-cols-4 gap-8 md:gap-10">
          {t.howCards.map((card, idx) => {
            const Icon = [FileText, Lightbulb, CheckSquare, History][idx] || FileText;
            return (
              <div
                key={card.title}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 text-center space-y-4"
              >
                <Icon className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-black">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* FOR WHO */}
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-16">
          {t.forWhoTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 text-center">
          {t.forWhoCards.map((card) => {
            const Icon = card.icon === "scale" ? Scale : card.icon === "building" ? Building : Briefcase;
            return (
              <div
                key={card.title}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 space-y-4"
              >
                <Icon className="w-12 h-12 text-teal-500 mx-auto" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-black">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* TRUSTED SOURCES */}
    <section className="px-6 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{t.sourcesTitle}</h2>
        <p className="text-gray-600 text-lg mb-10">{t.sourcesSubtitle}</p>
        
      </div>
    </section>

    {/* NEWSLETTER */}
    <section className="px-6 py-20 bg-white text-center border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black">{t.newsletterTitle}</h2>
        <p className="text-gray-600 mt-4">{t.newsletterSubtitle}</p>
        <NewsletterForm />
      </div>
    </section>

    {/* CONTACT */}
    <section id="contact" className="px-6 py-20 bg-gray-50 text-center">
      <Mail className="w-12 h-12 text-teal-500 mx-auto mb-4" />
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">{t.contactTitle}</h2>
      <p className="text-gray-600 mb-4 max-w-2xl mx-auto">{t.contactBody}</p>
      <a href={`mailto:${t.contactEmail}`} className="text-teal-600 hover:underline text-lg font-semibold">
        {t.contactEmail}
      </a>
    </section>

    {/* FOOTER */}
    <footer className="px-6 py-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>(c) {new Date().getFullYear()} Uplex</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="/privacy" className="hover:text-gray-700">
            {t.footerPrivacy}
          </a>
        </div>
      </div>
    </footer>
  </div>
);

const PrivacyPage = ({ t }: { t: (typeof translations)[Lang] }) => (
  <div className="min-h-screen bg-white flex flex-col">
    <section className="px-6 py-16 md:py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black">{t.privacyTitle}</h1>
        <p className="text-gray-600 text-lg mt-4">{t.privacyIntro}</p>
      </div>
    </section>

    <section className="px-6 py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {t.privacyCards.map((card) => (
          <div
            key={card.title}
            className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="text-teal-600 font-semibold text-sm uppercase tracking-wide mb-4">
              {card.title}
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {card.paragraphs.map((p, idx) => (
                <p key={idx}>{p.replace(/XX@XX\.com/g, "XX@XX.com")}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <footer className="px-6 py-10 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>(c) {new Date().getFullYear()} Uplex</p>
        <div className="flex gap-4">
          <a href="/" className="hover:text-gray-800">
            {t.footerHome}
          </a>
          <a href={`mailto:${t.contactEmail}`} className="hover:text-gray-800">
            {t.footerContact}
          </a>
        </div>
      </div>
    </footer>
  </div>
);

function App() {
  const [lang, setLang] = useState<Lang>("nl");

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isPrivacyPage =
    typeof window !== "undefined" && window.location.pathname.toLowerCase().includes("privacy");

  const t = translations[lang];

  return (
    <>
      <LangSwitch lang={lang} setLang={setLang} />
      {isPrivacyPage ? <PrivacyPage t={t} /> : <HomePage t={t} onScrollToContact={scrollToContact} />}
    </>
  );
}

export default App;

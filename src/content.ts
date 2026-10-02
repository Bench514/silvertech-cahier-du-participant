export const META = {
  title: "Cahier des participant·e·s",
  event: "Rencontre du conseil d'administration et du comité aviseur",
  date: "5 octobre 2026",
  time: "10 h à 12 h",
  place: "Musée d'art de Joliette",
  version: "Version du 30 septembre 2026 · Ariane",
  confidential: "Confidentiel · pour discussion seulement",
};

export const VIDEO = { id: "Srz17Ywxit0", title: "SilverTech : l'innovation technologique au service des milieux de vie pour aîné·e·s" };

export type TocItem = { id: string; num: string; title: string; children?: TocItem[] };

export const TOC: TocItem[] = [
  {
    id: "avant", num: "", title: "Avant la rencontre",
    children: [
      { id: "bienvenue", num: "", title: "Bienvenue" },
      { id: "ordre", num: "", title: "Ordre du jour" },
      { id: "personnes", num: "", title: "Personnes présentes" },
    ],
  },
  {
    id: "s1", num: "1", title: "Le Centre d'expertise SilverTech",
    children: [
      { id: "s1-1", num: "1.1", title: "La problématique" },
      { id: "s1-2", num: "1.2", title: "Un modèle unique" },
      { id: "s1-3", num: "1.3", title: "Nos fondements" },
      { id: "s1-4", num: "1.4", title: "Notre ambition d'impact" },
      { id: "s1-5", num: "1.5", title: "L'équipe terrain" },
      { id: "s1-6", num: "1.6", title: "Le modèle SilverTech" },
      { id: "s1-7", num: "1.7", title: "Le pipeline de projets" },
      { id: "s1-8", num: "1.8", title: "L'offre de membership" },
    ],
  },
  {
    id: "s2", num: "2", title: "Projet-phare : RPA à la maison",
    children: [
      { id: "s2-1", num: "2.1", title: "Pourquoi ce projet" },
      { id: "s2-2", num: "2.2", title: "Thématiques prioritaires" },
      { id: "s2-3", num: "2.3", title: "Les participant·e·s" },
      { id: "s2-4", num: "2.4", title: "Notre promesse" },
      { id: "s2-5", num: "2.5", title: "Les technologies déployées" },
      { id: "s2-6", num: "2.6", title: "Le cycle de vie" },
      { id: "s2-7", num: "2.7", title: "Le parcours d'un participant" },
      { id: "s2-8", num: "2.8", title: "Nos principes éthiques" },
      { id: "s2-9", num: "2.9", title: "Le paysage concurrentiel" },
      { id: "s2-10", num: "2.10", title: "Notre feuille de route" },
      { id: "s2-11", num: "2.11", title: "Les mesures d'impact" },
      { id: "s2-12", num: "2.12", title: "Nos apprentissages" },
      { id: "s2-13", num: "2.13", title: "Un comité à créer" },
      { id: "s2-14", num: "2.14", title: "Votre regard nous serait précieux" },
    ],
  },
  {
    id: "annexes", num: "3", title: "Annexes",
    children: [
      { id: "annexe-a", num: "A", title: "Le modèle SilverTech en détail" },
      { id: "annexe-b", num: "B", title: "L'étalonnage en détail" },
      { id: "annexe-c", num: "C", title: "Document d'adhésion des Innovateurs" },
    ],
  },
];

export const AGENDA = [
  ["Mot d'ouverture et mise en contexte", "Présentation des objectifs de la rencontre et amorce des échanges"],
  ["Tour de table", "Présentation des membres du comité aviseur et du conseil d'administration"],
  ["Présentation du conseil d'administration", "Rôle, mandat et fonctionnement"],
  ["Présentation du comité aviseur", "Rôle, mandat et contribution aux réflexions et orientations"],
  ["Présentation de SilverTech", "Mise en contexte de la vision, des objectifs et des principaux éléments du projet"],
  ["Discussion et échanges", ""],
  ["Présentation des prochaines étapes", ""],
  ["Mot de clôture", ""],
];

export const PEOPLE = [
  {
    group: "Conseil d'administration",
    members: [
      { name: "Sébastien Buisson", role: "Président", note: "inf. · Expertise terrain auprès des aînés, développement des affaires et milieux de vie" },
      { name: "Roxanne Martel", role: "Secrétaire-trésorière", note: "CPA · Stratégie, finances et gouvernance financière" },
      { name: "Me François Painchaud", role: "Vice-président", note: "Juridique, propriété intellectuelle, gouvernance et gestion des risques" },
    ],
  },
  {
    group: "Comité aviseur",
    members: [
      { name: "Véronique Hivon", role: "", note: "Vision stratégique et politiques publiques" },
      { name: "Dre Marie-Pascale Pomey", role: "", note: "Innovation en santé et implantation de nouveaux modèles de soin" },
    ],
  },
  {
    group: "Équipe",
    members: [
      { name: "Ariane Bourget", role: "Directrice du développement des affaires", note: "" },
      { name: "Claudine Neveu", role: "Directrice clinique", note: "" },
      { name: "Jean-Denis Hurtubise", role: "Directeur technologique", note: "" },
    ],
  },
  {
    group: "Consultation",
    members: [{ name: "Marie Lapalme", role: "", note: "Stratégie et croissance d'entreprises, gouvernance" }],
  },
];

export const TEAM = [
  {
    id: "ariane", name: "Ariane Bourget", role: "Directrice du développement des affaires", img: "ariane",
    expertise: "Expertise en structuration d'organisations, financement, vente et partenariats",
    bio: [
      "Ariane possède plus de dix ans d'expérience en innovation, avec une expertise en développement stratégique, en financement, en modèles d'affaires et en mobilisation de partenariats.",
      "Elle a cofondé Systèmes Skywalk, une PME québécoise qui développe une technologie destinée aux personnes aînées. Pendant trois ans, à titre de directrice générale, elle y a piloté la stratégie d'affaires et le financement, mobilisé des partenaires cliniques, scientifiques et industriels, et préparé la validation et le déploiement de la technologie en RPA et à domicile.",
      "Au Centre d'expertise SilverTech, Ariane met à profit son expérience entrepreneuriale et sa connaissance du secteur AgeTech pour accompagner les PME dans la validation, le financement et le déploiement de leurs innovations, tout en favorisant leur adéquation avec les besoins des RPA et des personnes aînées.",
    ],
  },
  {
    id: "claudine", name: "Claudine Neveu", role: "Directrice clinique", img: "claudine",
    expertise: "Expertise en soins et pratiques cliniques en milieux de vie · Intégration clinique des technologies et accompagnement des équipes",
    bio: [
      "Claudine possède plus de vingt ans d'expérience dans le domaine de la santé et du mieux-être, avec un parcours diversifié qui lui a permis d'évoluer dans plusieurs milieux de soins.",
      "Diplômée en massothérapie en 2004, elle a exercé cette profession pendant une dizaine d'années avant de se former en techniques de réadaptation physique. Elle a ensuite travaillé huit ans dans ce domaine, notamment en milieu hospitalier, en clinique privée et en CHSLD. Elle a par la suite obtenu son diplôme en soins infirmiers, en travaillant comme préposée aux bénéficiaires pendant ses études, puis comme infirmière en centre hospitalier pendant un an.",
      "Claudine s'est jointe aux Habitations Bordeleau en 2020, d'abord à titre d'infirmière-chef jusqu'en octobre 2022, puis de directrice des soins infirmiers jusqu'en octobre 2025. Dès son arrivée, elle a aussi été responsable de l'intégration clinique des technologies. D'octobre 2025 à septembre 2026, elle a agi comme conseillère clinique auprès des Habitations.",
      "Depuis septembre 2026, elle est directrice clinique du Centre d'expertise SilverTech. Elle y met à profit son expérience terrain et sa connaissance des milieux de soins pour contribuer à l'évolution des pratiques cliniques et à l'accompagnement des équipes.",
    ],
  },
  {
    id: "jean-denis", name: "Jean-Denis Hurtubise", role: "Directeur technologique", img: "jean-denis",
    expertise: "Expertise en conception, intégration et architecture technologiques · Opérationnalisation des technologies en milieu réel",
    bio: [
      "Jean-Denis cumule plus de 35 ans d'expérience en développement, intégration et opérationnalisation de solutions technologiques, particulièrement dans les secteurs de la santé, des milieux de vie pour aînés et du maintien à domicile.",
      "Technologue en ingénierie de formation, il a notamment fondé et dirigé TéléMedic, une entreprise spécialisée en télésanté et en dispositifs médicaux. Il a aussi contribué au développement de solutions de bâtiments intelligents et de technologies adaptées aux besoins des aînés.",
      "Aujourd'hui directeur technologique du Centre d'expertise SilverTech, il met son expertise au service de l'évaluation et de l'intégration de technologies innovantes, afin de les transformer en solutions concrètes, sécuritaires et adaptées aux réalités opérationnelles des organisations.",
    ],
  },
];

export const VALUES = [
  ["Centré sur l'humain", "Partir des besoins, capacités, préférences et réalités des personnes aînées, des proches et des équipes avec la technologie en support aux humains."],
  ["Rigueur", "Évaluer les solutions de façon structurée, objective et fondée sur des données probantes et leur utilisation en conditions réelles."],
  ["Éthique et responsabilité", "Porter une attention particulière à la sécurité, au consentement, à la vie privée, à l'autonomie et aux risques associés aux technologies."],
  ["Collaboration", "Faire travailler ensemble personnes aînées, proches, équipes cliniques, milieux de vie, chercheurs, entreprises et partenaires du réseau."],
  ["Innovation utile", "Privilégier les innovations qui répondent à un besoin réel et démontrent une valeur concrète pour les utilisateurs et les organisations."],
];

export const FOUR_P = [
  ["Personnalisée", "Adaptée au profil, aux besoins et aux préférences de chaque personne."],
  ["Prédictive", "Repère tôt les risques grâce aux données et aux signaux faibles."],
  ["Préventive", "Intervient avant l'apparition du problème pour maintenir la santé."],
  ["Participative", "Fait de la personne et de ses proches des acteurs de leur santé."],
];

export const OFFERS = [
  { n: 1, trl: [3, 6] as [number, number], title: "Soutien au développement", who: "Entreprises technologiques", market: "150 à 200 entreprises" },
  { n: 2, trl: [6, 8] as [number, number], title: "Évaluation des technologies", who: "Entreprises technologiques", market: "150 à 200 entreprises" },
  { n: 3, trl: [8, 8] as [number, number], title: "Aide au choix des technologies", who: "RPA", market: "Plus de 3 000 milieux au Canada" },
  { n: 4, trl: [9, 9] as [number, number], title: "Aide à l'implantation et à l'intégration", who: "Entreprises et RPA", market: "Plus de 3 000 milieux au Canada" },
];

export const TRL_PHASES = [
  { range: [1, 3], name: "Concept", text: "Idée, recherche, preuve de concept." },
  { range: [4, 6], name: "Validation", text: "Prototype testé en laboratoire, puis dans un environnement représentatif." },
  { range: [7, 8], name: "Démonstration", text: "Solution éprouvée en milieu réel, comme une RPA ou un domicile." },
  { range: [9, 9], name: "Déploiement", text: "Solution commercialisée et utilisée à grande échelle." },
];

export const DIMENSIONS = [
  "Valeur pour l'ensemble des participants",
  "Impact écosystémique (interactions entre les technologies)",
  "Capacité d'intégration dans l'environnement existant (personnel, techno., maintenance, physique, etc.)",
  "Coût total de possession sur l'ensemble du cycle de vie (TCO)",
  "Capacité de vente",
  "Pérennité du modèle d'affaires pour le RPA/résident (ROI)",
  "Cybersécurité, protection de la vie privée et souveraineté numérique",
  "Résilience de la chaîne d'approvisionnement",
  "Risque légal (assurabilité)",
];

export type Status = "En cours" | "En attente" | "Approuvé" | "Complété";
export type ProjectRow = { org: string; project: string; status: Status; value: string; extra?: string; ficheId?: string }[];

export const PIPELINE: { org: string; logo?: string; fiche?: string; projects: { name: string; status: Status }[]; value: string; phase?: string }[] = [
  { org: "Fondation Famille Bordeleau", logo: "fondation", fiche: "fondation", projects: [{ name: "RPA à la maison", status: "En cours" }], value: "Taux forfaitaire préférentiel" },
  { org: "Habitations Bordeleau", logo: "bordeleau", fiche: "bordeleau", projects: [{ name: "Plusieurs mandats", status: "En cours" }], value: "Taux forfaitaire préférentiel" },
  { org: "Virtuose Technologies", logo: "virtuose", fiche: "virtuose", projects: [{ name: "Nouvelle-Aquitaine", status: "Approuvé" }, { name: "Vidéotron et Cogir", status: "En attente" }], value: "800 k$" },
  { org: "Sentiom", logo: "sentiom", fiche: "sentiom", projects: [{ name: "Mance-IA", status: "En attente" }], value: "800 k$", phase: "Phase 1" },
  { org: "Paratus Medical", logo: "paratus", fiche: "paratus", projects: [{ name: "Plateforme Paratus en milieux de vie", status: "En cours" }], value: "135 k$" },
  { org: "Octogone", logo: "octogone", fiche: "octogone", projects: [{ name: "Gestion alimentaire personnalisée", status: "En cours" }], value: "45 k$", phase: "Phase 1" },
  { org: "Nosotech", logo: "nosotech", fiche: "nosotech", projects: [{ name: "IRIS-Aînés", status: "En cours" }], value: "5 k$" },
  { org: "Systèmes Skywalk", logo: "skywalk", fiche: "skywalk", projects: [{ name: "Validation de Sherpa", status: "Complété" }], value: "5 k$" },
];

export const CONVERSION = {
  entreprises: ["Avenant", "Morphcast", "LightX", "Get Vitaware"],
  rpa: ["Jardins de Magog", "Résidences Bromont", "Les Bâtisseurs", "Carrefour Santé Les Sources (Amos)"],
};

export type Fiche = { id: string; name: string; logo: string; badge: string; blocks: [string, string][] };
export const FICHES: Fiche[] = [
  {
    id: "virtuose", name: "Virtuose Technologies", logo: "virtuose", badge: "800 k$",
    blocks: [
      ["L'entreprise", "PME d'Alma fondée en 2020, issue de plus de quatre ans de R-D menée par des experts de la santé. Clients : CISSS, services de soutien à domicile et RPA. Retenue par la Vitrine d'innovations en santé du Québec."],
      ["La solution", "Plateforme de télésurveillance et de soins virtuels qui regroupe dans un seul tableau de bord les données d'objets connectés (montre, tablette, capteurs), avec alertes cliniques, vidéoconférence en cas d'alerte et application pour les proches aidants."],
      ["Projet Nouvelle-Aquitaine", "Modèle hybride de soutien à domicile inspiré des services en RPA, déployé dans 25 résidences. Collaborateurs : CRIUGM (partenaire scientifique) et Gérontopôle Nouvelle-Aquitaine (France). Financement envisAGE, approuvé en juin 2026. Budget global de 627 084 $. Durée : 18 mois."],
      ["Projet Vidéotron et Cogir", "Protocole Virtuose diffusé sur l'écran de télévision (plateforme Helix de Vidéotron Affaires). Milieux preneurs : Cogir et Habitations Bordeleau; partenaire scientifique : CRIUGM. Dossier envisAGE déposé en août 2026, décision attendue. Coût total de 1,54 M$. Durée : 18 mois, démarrage visé en décembre 2026."],
      ["Rôle de SilverTech", "Laboratoire communautaire : mise en place, formation, accompagnement des milieux et évaluation."],
    ],
  },
  {
    id: "sentiom", name: "Sentiom", logo: "sentiom", badge: "800 k$ · phase 1",
    blocks: [
      ["L'entreprise", "Entreprise technologique familiale fondée en 2018 à Montréal, appuyée sur trois décennies d'expérience en immobilier multirésidentiel. Technologies déployées dans plus de 400 logements. Lauréate des prix Fast Future de Cisco Canada (2021)."],
      ["La solution", "Plateforme de bâtiment intelligent : capteurs IoT, jumeau numérique et IA pour la sûreté des résidents, la prévention des dégâts d'eau et l'optimisation énergétique."],
      ["Le projet Mance-IA", "Environnement intelligent qui détecte les anomalies et alerte les intervenants, pour prévenir l'hospitalisation et l'institutionnalisation. Déploiement progressif aux Habitations Bordeleau, jusqu'à 525 résidents. Collaborateurs : IVADO, Concordia, UQAR et RÉISD. Durée : 24 mois (juillet 2025 à juin 2027)."],
      ["Rôle de SilverTech", "Accompagnement du milieu preneur et du déploiement."],
    ],
  },
  {
    id: "paratus", name: "Paratus Medical", logo: "paratus", badge: "135 k$",
    blocks: [
      ["L'entreprise", "PME montréalaise fondée par des urgentologues. Plateforme lancée commercialement en décembre 2025; plus de 8 000 utilisateurs."],
      ["La solution", "Transforme les protocoles cliniques et organisationnels en parcours d'action guidés sur mobile, tablette et ordinateur, avec un assistant conversationnel IA et un mode hors ligne."],
      ["Le projet", "Implantation et évaluation de Paratus auprès des infirmières, infirmières auxiliaires et préposés. Milieux preneurs : Habitations Bordeleau et Ressource Notre-Dame-de-la-Paix (Verdun). Collaborateur : OROT (CIUSSS du Centre-Ouest), responsable de l'évaluation scientifique. Financement envisAGE. Durée : 18 mois."],
      ["Rôle de SilverTech", "Tiers neutre : évaluation stratégique et technologique, accompagnement des deux milieux, rapport final consolidé. Contrat de 135 000 $."],
    ],
  },
  {
    id: "octogone", name: "Octogone", logo: "octogone", badge: "45 k$ · phase 1",
    blocks: [
      ["L'entreprise", "Jeune pousse de Sherbrooke, cofondée par Stéphane Grenon, Pascal Grenon, Simon Ampleman et Jérôme Fusey; récemment vendue."],
      ["La solution", "Plateforme de gestion pour la restauration et l'hôtellerie : ventes en temps réel, coûts fournisseurs, thermomètres connectés."],
      ["Le projet", "Développement d'un algorithme de gestion alimentaire personnalisée pour les résidents de RPA. Demande de subvention à MEDTEQ+. Phase 1 estimée à 45 k$."],
      ["Rôle de SilverTech", "Accompagnement de la R-D et tests cliniques; suite à confirmer avec le nouvel acquéreur."],
    ],
  },
  {
    id: "nosotech", name: "Nosotech", logo: "nosotech", badge: "5 k$",
    blocks: [
      ["L'entreprise", "Fondée en 2006 à Rimouski, avec un bureau à Paris. Logiciels de prévention des infections utilisés dans une cinquantaine d'établissements; certifiée ISO 27001."],
      ["La solution", "IRIS-Aînés : surveillance épidémiologique en temps réel, avec géolocalisation et alertes, pour détecter tôt les éclosions de virus respiratoires."],
      ["Le projet", "Pilote IRIS-Aînés avec OROT, le CIUSSS du Centre-Ouest et Santé Québec Bas-Saint-Laurent. Financement envisAGE. Durée : 18 mois."],
      ["Rôle de SilverTech", "Mobiliser les équipes cliniques, soutenir la collecte de données et faire le lien entre les parties. Forfait de 5 000 $."],
    ],
  },
  {
    id: "skywalk", name: "Systèmes Skywalk", logo: "skywalk", badge: "5 k$",
    blocks: [
      ["L'entreprise", "Jeune pousse montréalaise fondée en 2020; parcours d'Esplanade Québec. Ariane Bourget en est une ancienne cofondatrice et n'y est plus associée."],
      ["La solution", "Sherpa, une main courante mobile jumelée à un programme d'accompagnement, pour utiliser les escaliers en sécurité et prévenir chutes et déconditionnement."],
      ["Le projet", "Validation en environnement semi-réel aux Habitations Bordeleau (acceptabilité, sécurité perçue, utilisabilité), en août et septembre 2026. 5 k$."],
      ["Rôle de SilverTech", "Coordination clinique, recrutement des participants et tests."],
    ],
  },
  {
    id: "bordeleau", name: "Habitations Bordeleau", logo: "bordeleau", badge: "Taux forfaitaire préférentiel",
    blocks: [
      ["L'organisation", "Groupe de résidences pour aînés de Lanaudière : 903 logements (bientôt 1 122) et 175 unités de soins. Membre fondateur de SilverTech et principal milieu preneur de ses projets."],
      ["Les mandats", "Transformation numérique, unité de soins, soutien à l'administration, projet de construction et évaluations technologiques (réseau, anti-fugue, alarmes d'appel, gestion énergétique)."],
      ["Rôle de SilverTech", "Direction technologique externe, évaluation et recommandations, facturées à l'heure."],
    ],
  },
  {
    id: "fondation", name: "Fondation Famille Bordeleau", logo: "fondation", badge: "Taux forfaitaire préférentiel",
    blocks: [
      ["Le projet", "RPA à la maison, projet-phare de SilverTech. En cours."],
      ["Détails", "Voir la section 2."],
    ],
  },
];

export const FAMILIES = [
  {
    id: "fondateurs", name: "Fondateurs", vote: true, tagline: "Ceux qui ont fondé SilverTech et en portent la mission.",
    rows: [
      ["Qui", "Les Habitations Bordeleau et la Fondation Famille Bordeleau."],
      ["Droits", "Droit de vote; nomination de la majorité du CA pendant les cinq premières années; accord requis sur les décisions fondamentales (mission, règlements, dissolution)."],
      ["Rôle", "Orientation stratégique et soutien au démarrage du Centre."],
    ],
  },
  {
    id: "innovateurs", name: "Innovateurs", vote: false, tagline: "Les entreprises qui développent les technologies de demain pour les aînés.",
    rows: [
      ["Droits", "Membres associés, sans droit de vote, pour préserver la neutralité de l'évaluation; voix consultative au sein du comité des Innovateurs."],
    ],
    advantages: [
      "Revue officielle du niveau de maturité technologique (TRL) de leur solution",
      "20 % de rabais sur les services admissibles",
      "Information en primeur sur les besoins des milieux de vie et les appels de projets",
      "Mises en relation ciblées avec les RPA",
      "Événements et réseautage",
      "Visibilité dans le répertoire des membres et les communications du Centre",
    ],
    tiers: ["Démarrage", "Croissance", "Expansion"],
    who: ["Jeune pousse en précommercialisation, ou revenus annuels de moins de 1 M$", "PME technologique qui commercialise ses solutions, moins de 500 employés", "Grande entreprise de 500 employés ou plus, ou filiale d'un grand groupe"],
    grid: [
      ["Cotisation initiale (1re année)", "5 000 $", "7 000 $", "9 000 $"],
      ["Revue TRL officielle", "1 solution", "2 solutions", "3 solutions"],
      ["Heures d'accompagnement stratégique", "4 h", "8 h", "12 h"],
      ["Places aux événements", "2 personnes", "4 personnes", "6 personnes"],
      ["Formation « Réalités du terrain » pour l'équipe", "", "1 séance virtuelle", "1 séance en personne"],
      ["Immersion terrain : visite accompagnée d'un milieu de vie", "", "Jusqu'à 3 personnes", "Jusqu'à 6 personnes"],
      ["Prise de parole lors d'un événement SilverTech", "", "", "1 par année"],
    ],
    renewal: ["800 $", "1 200 $", "1 500 $"],
    renewalNote: "Renouvellement annuel, sans revue TRL",
  },
  {
    id: "milieux", name: "Milieux de vie", vote: true, tagline: "Les milieux qui accueillent les aînés et adoptent les technologies.",
    rows: [
      ["Qui", "RPA, ressources intermédiaires et CHSLD."],
      ["Droits", "Droit de vote; un siège au CA."],
    ],
    advantages: [
      "Accès aux services du CEST à tarif préférentiel",
      "Accès prioritaire aux technologies évaluées et aux résultats d'évaluation",
      "Possibilité d'agir comme milieu primo-adoptant",
      "Formation des équipes",
    ],
    tiers: ["Proximité", "Communauté", "Réseau"],
    who: ["Jusqu'à 100 résidents", "De 101 à 500 résidents", "Plus de 500 résidents"],
    grid: [
      ["Cotisation initiale (1re année)", "1 500 $", "3 500 $", "5 000 $"],
      ["Heures d'accompagnement stratégique", "4 h", "8 h", "12 h"],
      ["Places aux événements", "2 personnes", "4 personnes", "6 personnes"],
      ["Formation « Réalités du terrain » pour l'équipe", "", "1 séance virtuelle", "1 séance en personne"],
      ["Prise de parole lors d'un événement SilverTech", "", "", "1 par année"],
    ],
    renewal: ["250 $", "600 $", "850 $"],
    renewalNote: "Renouvellement annuel",
  },
];

export const PIONNIERS = [
  "Trois ans d'adhésion, sans frais de renouvellement.",
  "Le titre permanent de « Pionnier SilverTech », dans le répertoire des membres, sur le site, dans les communications et sur un mur des Pionniers.",
  "Une visibilité particulière : mise en valeur au lancement du Centre, portrait dans l'infolettre et présence à l'événement d'inauguration.",
  "Le cercle des Pionniers : deux rencontres par année pour co-construire l'offre du Centre, entreprises et milieux de vie autour de la même table.",
  "L'accès en primeur aux nouveaux services et au futur laboratoire SilverTech.",
];

export const IN_CONSTRUCTION = [
  ["Une bibliothèque et une veille stratégique", "incluant des outils, des analyses et des cas concrets, avec une lecture terrain des enjeux d'intégration technologique auprès des milieux de vie pour aînés."],
  ["Des webinaires", "pour comprendre, de l'intérieur, comment les technologies s'intègrent au quotidien des milieux de vie pour aînés : protocoles, rôles des intervenants, résultats mesurés et conditions de déploiement à plus grande échelle."],
  ["Une série balado", "consacrée à l'innovation et aux réalités du terrain, grâce à l'accès à un studio d'enregistrement partenaire. Nos membres seront parmi les premiers invités à y partager leur expertise et leur expérience d'implantation."],
  ["Le laboratoire SilverTech", "un environnement d'essai qui reproduit un milieu de vie, où les solutions sont mises à l'épreuve avant d'être déployées en RPA. On y vérifie qu'elles livrent la valeur promise, qu'elles cohabitent bien avec les autres outils et que les risques sont maîtrisés. Les Pionniers en seront les premiers utilisateurs."],
];

export const WHY_STRUCTURE = [
  ["La neutralité d'abord.", "Un évaluateur ne peut pas être gouverné par les entreprises qu'il évalue : les Innovateurs participent, mais ne votent pas."],
  ["La mission protégée pendant le démarrage.", "Les Fondateurs orientent les cinq premières années, avec une transition prévue vers un CA plus ouvert."],
  ["Une vraie voix pour les milieux de vie.", "Les RPA votent et font contrepoids, ce qui renforce la crédibilité du Centre."],
  ["Des revenus récurrents", "qui ne dépendent jamais des ventes des entreprises évaluées."],
];

export const THEMES = [
  ["Autonomie et indépendance", "Doter les aînés d'outils et de technologies leur permettant de conserver leur autonomie et leur indépendance, même en cas de déficience, de handicap ou de maladie.", "Des capteurs discrets et une équipe humaine aident la personne à rester chez elle, à son rythme."],
  ["Maintien des liens et rester connecté", "Être connecté permet de renforcer les liens sociaux, mais aussi d'assurer la communication entre les prestataires de soins et services, ainsi qu'entre les aînés, leurs intervenants et leur communauté.", "Les proches et les intervenants sont informés et coordonnés autour de la même personne."],
  ["Milieux de vie et communautés de soutien", "Les aînés vieilliront dans une variété de contextes et de communautés qui peuvent tous bénéficier d'améliorations en matière d'adaptation aux besoins des personnes âgées, de modèles de services offerts et de technologies intégrées.", "Le projet teste, auprès de personnes vivant seules à domicile, un modèle inspiré de la résidence pour aînés."],
  ["Les soins de santé et les prestations de services de santé", "Les défis en matière de soins de santé sont nombreux, mais les possibilités offertes par la technologie pour soutenir la prestation de services de soins de santé ou pour assurer un suivi et agir en tant qu'outil de prévention, le sont tout autant.", "La détection des chutes et des signes de détérioration permet d'intervenir avant l'urgence."],
];

export const PROMISE = [
  ["Détecter", "de petits capteurs discrets observent les habitudes de vie, sans caméra, sans micro et sans enregistrement."],
  ["Alerter", "la technologie repère les changements dans les habitudes de vie avant qu'une situation devienne critique."],
  ["Accompagner", "une personne dédiée ajuste le plan d'accompagnement et tient les proches informés. La personne n'est jamais seule."],
];

export const LIFECYCLE = [
  ["Détection continue", "Détection des chutes et des mouvements, sans caméra et sans appareil à porter."],
  ["Analyse prédictive", "Des algorithmes repèrent les changements dans les habitudes de vie, à partir des données historiques et du temps réel."],
  ["Alerte graduée", "Signal faible : visite préventive. Signal critique : urgence, 811 ou 911."],
  ["Intervention", "Infirmière, préposé, ergothérapeute et gérontologue interviennent."],
  ["Maintien à domicile", "Autonomie préservée, qualité de vie et sécurité."],
];

export const IMPROVEMENT_LOOP = [
  ["Évaluation indépendante", "Évaluation de l'implantation et documentation des bénéfices."],
  ["Données probantes", "Génération de preuves pour la décision d'acquisition."],
  ["Optimisation continue", "Ajustement du packaging technologique et de l'accompagnement."],
];

export const JOURNEY = [
  ["Recrutement", "La personne et ses proches découvrent le service et choisissent d'y participer, en toute connaissance de cause."],
  ["Évaluation de l'environnement", "Une coordonnatrice rencontre la personne à domicile pour dresser un portrait de sa situation, de ses habitudes et de son logement."],
  ["Installation et formation", "Les capteurs et la tablette sont installés de façon discrète; la personne apprend à les utiliser, à son rythme."],
  ["Alertes et réponses", "Lorsqu'un événement ou un changement inhabituel survient, l'équipe est alertée et intervient."],
  ["Accompagnement clinique", "L'équipe clinique recueille régulièrement les impressions de la personne : ce qui la rassure, ce qui la dérange, ce qui manque."],
  ["Ajustements", "Le plan et les technologies évoluent avec la personne et ses besoins."],
];

export const ETHICS = [
  ["Un consentement éclairé", "Chaque participant reçoit une explication complète du projet, de ses technologies et de ses limites, et peut poser toutes ses questions avant de signer."],
  ["La liberté de se retirer", "La personne peut quitter le projet en tout temps, sans aucune conséquence sur les services qu'elle reçoit habituellement."],
  ["Le respect de l'intimité", "Les capteurs ne comportent ni caméra, ni micro, ni enregistrement. On entre au domicile seulement avec le consentement de la personne."],
  ["La transparence sur les limites", "Le projet n'est ni un service médical ni un service d'urgence; les technologies peuvent faillir, et l'entente le dit clairement."],
  ["Des données protégées", "L'accès aux renseignements de santé est limité aux personnes autorisées. Toute analyse se fait sur des données anonymisées. Les fournisseurs technologiques sont tenus par contrat à des règles strictes sur les données de santé."],
  ["Le respect de l'autonomie, de la dignité et des choix", "de la personne, écrit noir sur blanc dans l'entente."],
];

export const ETHICS_QUESTIONS = [
  "Comment maintenir un consentement véritable si les capacités cognitives d'une personne diminuent en cours de route?",
  "Jusqu'où surveiller pour protéger, sans que la personne se sente observée chez elle?",
  "Que deviennent les participants lorsque le maintien à domicile n'est plus sécuritaire? Comment assurer une transition digne?",
  "Quelles balises encadrer pour l'usage des données anonymisées par un futur modèle commercial?",
];

// 0 absent, 1 partiel, 2 présent
export const COMPETITORS = {
  cols: ["Détection continue", "Coordination clinique", "Services humains", "Approche préventive"],
  rows: [
    { family: "Coordination sans technologie", who: "PRISMA, PACE, CRT Nouvelle-Aquitaine, Buurtzorg", v: [0, 2, 2, 1] },
    { family: "Services humains sans détection", who: "Bien Chez Soi, réseau EESAD, AQMVA, Village to Village", v: [0, 1, 2, 0] },
    { family: "Recherche et projets pilotes", who: "SUSTAIN, COMFORTage, Lab. Domus, CCEG", v: [1, 1, 0, 1] },
    { family: "Technologie et soins privés", who: "Equinoxe LifeCare", v: [2, 1, 2, 1] },
    { family: "Statut quo", who: "Services publics fragmentés (SAD, CLSC)", v: [0, 1, 1, 0] },
    { family: "LUCE-RPA", who: "Démonstration de 18 mois, 50 participants, Lanaudière", v: [2, 2, 2, 2], highlight: true },
  ],
};

export const PARTNERS = [
  { name: "Fondation Famille Bordeleau", logo: "fondation", text: "Maître d'œuvre; offre le service gratuitement aux participants" },
  { name: "Caisse Desjardins de Joliette et du Centre de Lanaudière", logo: "desjardins", text: "500 000 $, soit 100 000 $ par année pendant cinq ans" },
  { name: "Habitations Bordeleau", logo: "bordeleau", text: "Expertise en résidence pour aînés, équipes cliniques et modèle de services" },
  { name: "Centre d'expertise SilverTech", logo: "silvertech", text: "Évaluation indépendante, choix et intégration des technologies, protocoles et mesure des résultats" },
  { name: "Virtuose Technologies et LivingSafe", logo: "virtuose", logo2: "livingsafe", text: "Partenaires technologiques de la phase 1" },
];

export const ROADMAP = [
  { phase: 1, theme: "Sûreté et sécurité", text: "Détection des chutes, surveillance des habitudes de vie, alertes et réponse rapide", status: "En cours depuis mars 2026", year: "2026" },
  { phase: 2, theme: "Communication, communauté et loisirs", text: "Un outil qui permet aux proches aidants de communiquer avec la personne; qui qualifie et centralise les services à domicile (ménage, aide à l'hygiène, entretien du terrain); qui rend accessible l'offre de loisirs de la région et favorise les liens entre aînés selon leurs intérêts", status: "", year: "2027" },
  { phase: 3, theme: "Santé physique et émotionnelle", text: "Suivi des données biométriques et comportementales, en lien avec le dossier de santé, et analyse personnalisée pour prévenir plutôt que guérir", status: "", year: "2028" },
];

export const RESEARCH_QUESTIONS = [
  "Le modèle prolonge-t-il le maintien à domicile?",
  "Réduit-il les visites à l'urgence?",
  "Réduit-il le fardeau des proches aidants?",
  "LivingSafe : réduit-on le délai d'intervention après une chute?",
  "Virtuose : parvient-on à détecter plus tôt une détérioration de l'état de santé et à prévenir les complications?",
];

export const INDICATORS = [
  ["Qualité de vie", "Jours supplémentaires à domicile; satisfaction et sentiment de sécurité des participants (à 1, 3 et 6 mois); satisfaction des proches; évolution de l'autonomie fonctionnelle (outil SMAF)"],
  ["Prévention et sécurité", "Incidents détectés de façon précoce; temps de réponse aux alertes; part des interventions faites avant une situation critique; contribution de chaque technologie"],
  ["Coordination des services", "Délai pour organiser un service; communication proactive avec les proches"],
  ["Contribution au système de santé", "Visites à l'urgence, hospitalisations et jours d'hospitalisation, comparés aux 12 mois précédant l'adhésion; transports ambulanciers évités; heures d'aide des proches"],
  ["Viabilité", "Rétention des participants; coût moyen par participant et par intervention; nombre de participants par intervenant"],
];

export const LEARNINGS = [
  ["La complexité dépasse ce qu'on peut prévoir.", "Malgré une préparation rigoureuse, un projet qui conjugue participants, proches, équipes cliniques et plusieurs fournisseurs comporte une part d'imprévisible. C'est une donnée du modèle, pas un accident."],
  ["Il existe un écart entre la promesse et la réalité actuelle des technologies.", "Certaines sont encore en développement. L'évaluation en conditions réelles est justement là pour le mesurer, et pour aider les entreprises à combler cet écart."],
  ["L'engagement dans la durée est un défi en soi.", "Les outils de suivi à distance ont surtout fait leurs preuves sur de courtes périodes, après une chirurgie par exemple. Maintenir la participation des aînés sur des mois et des années demande autre chose : du sens, de la relation et une technologie qui se fait oublier."],
];

export const ADVISORY_QUESTIONS = [
  "Comment intégrer les participants et leurs proches comme partenaires à part entière, dès maintenant?",
  "Comment encadrer le consentement des personnes dont les capacités cognitives pourraient diminuer?",
  "Quelle continuité offrir aux participants lorsque le maintien à domicile n'est plus possible?",
  "Quelles conditions faudrait-il réunir pour que ce modèle inspire une politique publique?",
];

export const BENCHMARK = [
  { org: "CABHI (Toronto, 2015)", nature: "Accélérateur OBNL hébergé par Baycrest; financement public et philanthropique", learn: "Effet de levier : 185 M$ investis, 610 M$ de financement de suivi; 528 projets", extra: "Un service d'évaluation facturé, une classification propre, une spécialisation en RPA privées" },
  { org: "Vilans (Pays-Bas, 2006)", nature: "Centre national de connaissance en soins de longue durée; financé par le ministère de la Santé", learn: "Cadre d'évaluation de la valeur en 14 étapes avec décision go/no-go", extra: "Un accompagnement commercial des entreprises" },
  { org: "LiCalab (Belgique, 2012)", nature: "Laboratoire vivant universitaire; financé par projets européens", learn: "Panel d'environ 1 000 citoyens et 500 professionnels", extra: "Un modèle économique moins dépendant des projets" },
  { org: "CIRris (Québec)", nature: "Centre de recherche public", learn: "Validation en milieu réel, dont la télésurveillance à domicile", extra: "Un service commercial centré sur les RPA privées" },
];

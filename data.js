// js/data.js

const appData = {
  phasesData: [
    {
      "nom": "Phase 1 : L’avant-projet",
      "activites": [
        {
          "nom": "Activité 1.1 – L’esquisse, les études préliminaires et le diagnostic",
          "taches": [
            "Effectuer un relevé d’ouvrage",
            "Rédiger des éléments d’une notice descriptive de l’existant",
            "Mettre au net et compléter des documents graphiques d’esquisses",
            "Réaliser une maquette sommaire et des dessins de rendu",
            "Effectuer les calculs de surfaces"
          ],
          "niveau": 3
        },
        {
          "nom": "Activité 1.2 – L’avant-projet sommaire",
          "taches": [
            "Rechercher et classer la documentation spécifique au projet",
            "Produire des documents graphiques d’APS en 2D et 3D",
            "Rédiger une notice descriptive des choix architecturaux",
            "Vérifier et confirmer les calculs de surfaces"
          ],
          "niveau": 2
        },
        {
          "nom": "Activité 1.3 – L’avant-projet définitif",
          "taches": [
            "Analyser la compatibilité entre choix architecturaux et techniques",
            "Produire des documents graphiques architecturaux",
            "Transcrire les détails techniques et constructifs",
            "Établir un quantitatif sommaire des ouvrages et estimer le coût prévisionnel des travaux",
            "Établir un planning prévisionnel de l’opération"
          ],
          "niveau": 1
        },
        {
          "nom": "Activité 1.4 – Les autorisations de construire",
          "taches": [
            "Établir les pièces écrites et graphiques d’un dossier de demande de permis de construire",
            "Établir les pièces écrites et graphiques d’un dossier de demande de permis de démolir",
            "Établir les pièces écrites et graphiques d’un dossier de demande de déclaration préalable"
          ],
          "niveau": 1
        }
      ]
    },
    {
      "nom": "Phase 2 : Le projet",
      "activites": [
        {
          "nom": "Activité 2.1 – Les études de projet",
          "taches": [
            "Traduire graphiquement des choix techniques retenus et les intégrer au projet architectural",
            "Proposer un plan de recollement de l’existant",
            "Établir une notice descriptive détaillée des ouvrages",
            "Établir les quantitatifs des différents corps d’état",
            "Estimer le coût détaillé des travaux",
            "Établir le planning détaillé de l’opération"
          ],
          "niveau": 2
        },
        {
          "nom": "Activité 2.2 – L’assistance au maître d’ouvrage pour la passation des contrats de travaux",
          "taches": [
            "Établir le dossier de consultation des entreprises",
            "Gérer les réponses des entreprises",
            "Établir un rapport d’analyse des offres"
          ],
          "niveau": 2
        }
      ]
    },
    {
      "nom": "Phase 3 : La réalisation",
      "activites": [
        {
          "nom": "Activité 3.1 – Les plans d’exécution préalables au démarrage des travaux",
          "taches": [
            "Collecter les documents des entreprises, des bureaux d’études et de contrôle",
            "Traduire graphiquement des choix techniques retenus",
            "Produire des documents graphiques (plans de détails complémentaires…)"
          ],
          "niveau": 3
        },
        {
          "nom": "Activité 3.2 – La direction de l’exécution des marchés de travaux",
          "taches": [
            "Mettre à jour le dossier d’exécution de l’ouvrage",
            "Pointer l’avancement des travaux et actualiser le calendrier de travaux",
            "Assister aux réunions de chantier et rendre compte",
            "Effectuer le relevé des ouvrages exécutés",
            "Établir des documents modificatifs",
            "Collecter les pièces nécessaires au règlement des situations de travaux"
          ],
          "niveau": 3
        },
        {
          "nom": "Activité 3.3 – La réception et la livraison des ouvrages",
          "taches": [
            "Préparer les opérations préalables à la réception des travaux",
            "Contrôler les travaux conduisant aux levées de réserves et rendre compte",
            "Finaliser le DOE",
            "Assurer le suivi du parfait achèvement de l’ouvrage"
          ],
          "niveau": 2
        }
      ]
    }
  ],

  problematiquesParActivite: {
    "Activité 1.1 – L’esquisse, les études préliminaires et le diagnostic": [
      "Comment recueillir efficacement les informations techniques nécessaires au diagnostic ?",
      "Quelle méthode choisir pour représenter clairement un ouvrage existant ?",
      "Comment produire des documents précis et conformes aux normes graphiques ?"
    ],
    "Activité 1.2 – L’avant-projet sommaire": [
      "Comment traduire fidèlement les intentions architecturales dans l'avant-projet sommaire ?",
      "Quelle démarche adopter pour sélectionner et présenter efficacement les matériaux ?",
      "Comment garantir que les documents produits répondent clairement aux exigences du programme ?"
    ],
    "Activité 1.3 – L’avant-projet définitif": [
      "Comment assurer une intégration cohérente et complète des éléments techniques validés ?",
      "Quelle méthode utiliser pour quantifier précisément les ouvrages prévus au projet ?",
      "Comment structurer et présenter efficacement les documents graphiques et écrits définitifs ?"
    ],
    "Activité 1.4 – Les autorisations de construire": [
      "Comment assurer la conformité réglementaire et administrative des dossiers produits ?",
      "Quelle représentation graphique choisir pour faciliter l’obtention des autorisations ?",
      "Comment organiser et vérifier l’exhaustivité du dossier administratif à déposer ?"
    ],
    "Activité 2.1 – Les études de projet": [
      "Comment transcrire précisément les choix techniques en plans de projet détaillés ?",
      "Quelle approche privilégier pour l'établissement d'un quantitatif précis ?",
      "Comment structurer l’estimation des coûts pour une gestion budgétaire optimale ?"
    ],
    "Activité 2.2 – L’assistance au maître d’ouvrage pour la passation des contrats de travaux": [
      "Comment assurer une analyse rigoureuse des offres reçues des entreprises ?",
      "Quelle méthode efficace adopter pour gérer les échanges et questions durant la consultation ?",
      "Comment garantir la conformité du dossier marché aux attentes du maître d'ouvrage ?"
    ],
    "Activité 3.1 – Les plans d’exécution préalables au démarrage des travaux": [
      "Comment identifier et résoudre rapidement les incohérences avant le début du chantier ?",
      "Quelle démarche suivre pour obtenir et intégrer efficacement les informations complémentaires ?",
      "Comment produire des plans d’exécution clairs, complets et conformes aux normes ?"
    ],
    "Activité 3.2 – La direction de l’exécution des marchés de travaux": [
      "Comment organiser efficacement le suivi documentaire et opérationnel durant les travaux ?",
      "Quelle méthode employer pour actualiser précisément le calendrier et les relevés du chantier ?",
      "Comment produire des documents graphiques et écrits exacts et exploitables pendant les travaux ?"
    ],
    "Activité 3.3 – La réception et la livraison des ouvrages": [
      "Comment collecter, organiser et vérifier efficacement l’ensemble des documents de réception ?",
      "Quelle méthode adopter pour assurer un suivi rigoureux des réserves formulées lors de la réception ?",
      "Comment produire un Dossier des Ouvrages Exécutés clair, précis et utilisable par tous les acteurs concernés ?"
    ]
  },

  resultatsAttendusParTache: {
    "Effectuer un relevé d’ouvrage": [
      "Localiser l’ouvrage, préciser l’accessibilité et l’environnement.",
      "Compléter et préciser le croquis d’ensemble en respectant l’organisation des ouvrages.",
      "Identifier les systèmes constructifs, les matériaux (type, qualité, aspect…) et les différentes parties d’ouvrage.",
      "Relever et repérer les détails géométriques indispensables.",
      "Relever toutes les dimensions nécessaires."
    ],
    "Rédiger des éléments d'une notice descriptive de l'existant": [
      "Rédiger des notices descriptives précises, concises et explicites."
    ],
    "Mettre au net et compléter des documents graphiques d'esquisses": [
      "Utiliser les modes de représentation les mieux adaptés (croquis, photo, vidéo…).",
      "Mettre au net des documents exploitables, complets et conformes aux normes de dessin, aux conventions spécifiques de représentation et à la charte graphique."
    ],
    "Réaliser une maquette sommaire et des dessins de rendu": [
      "Traduire les données graphiques préalables (aspect et volumes) par la maquette.",
      "Adapter les matériaux de la maquette aux spécificités du projet.",
      "Produire des rendus traduisant et mettant en valeur le parti architectural."
    ],
    "Effectuer les calculs de surfaces": [
      "Détailler les surfaces permettant la comparaison avec les exigences du programme.",
      "Choisir l’outil ou le média adapté aux documents à produire (main levée, dessin, DAO, bureautique…)"
    ],
    "Rechercher et classer la documentation spécifique au projet": [
      "Collecter une documentation pertinente et suffisante.",
      "Classer les informations pour faciliter leur exploitation.",
      "Utiliser les outils numériques de gestion documentaire."
    ],
    "Produire des documents graphiques d'APS en 2D et 3D": [
      "Réaliser des documents graphiques clairs et compréhensibles.",
      "Produire des documents conformes aux normes de dessin et aux conventions spécifiques de représentation.",
      "Utiliser les outils de DAO et de modélisation 3D (BIM) adaptés."
    ],
    "Rédiger une notice descriptive des choix architecturaux": [
      "Rédiger des notices descriptives détaillées, explicites et argumentées.",
      "Préciser les choix architecturaux, les matériaux et les partis pris techniques."
    ],
    "Vérifier et confirmer les calculs de surfaces": [
      "Vérifier la cohérence des calculs de surfaces avec le programme.",
      "Confirmer les surfaces définitives après ajustements."
    ],
    "Analyser la compatibilité entre choix architecturaux et techniques": [
      "Identifier les contraintes techniques et réglementaires.",
      "Proposer des solutions adaptées et réalistes.",
      "Vérifier la faisabilité technique des choix architecturaux."
    ],
    "Produire des documents graphiques architecturaux": [
      "Produire des plans, coupes, façades et détails pertinents.",
      "Utiliser les outils de DAO/BIM pour l'élaboration des documents graphiques."
    ],
    "Transcrire les détails techniques et constructifs": [
      "Représenter graphiquement les détails techniques et constructifs.",
      "Préciser les assemblages et les mises en œuvre."
    ],
    "Établir un quantitatif sommaire des ouvrages et estimer le coût prévisionnel des travaux": [
      "Établir une liste des ouvrages par corps d’état.",
      "Estimer les quantités et les coûts unitaires.",
      "Définir le coût prévisionnel global de l’opération."
    ],
    "Établir un planning prévisionnel de l’opération": [
      "Établir les grandes phases de l'opération.",
      "Définir les délais prévisionnels et les jalons importants."
    ],
    "Établir les pièces écrites et graphiques d’un dossier de demande de permis de construire": [
      "Préparer le dossier de demande de permis de construire selon les réglementations en vigueur.",
      "Assurer la conformité des pièces graphiques (plans, coupes, façades, insertion) et écrites (formulaire Cerfa, notice descriptive)."
    ],
    "Établir les pièces écrites et graphiques d’un dossier de demande de permis de démolir": [
      "Préparer le dossier de demande de permis de démolir selon les réglementations en vigueur.",
      "Assurer la conformité des pièces graphiques et écrites."
    ],
    "Établir les pièces écrites et graphiques d’un dossier de demande de déclaration préalable": [
      "Préparer le dossier de demande de déclaration préalable selon les réglementations en vigueur.",
      "Assurer la conformité des pièces graphiques et écrites."
    ],
    "Traduire graphiquement des choix techniques retenus et les intégrer au projet architectural": [
      "Réaliser des plans d’exécution détaillés.",
      "Intégrer les solutions techniques validées au projet architectural.",
      "Produire des documents graphiques clairs et exploitables par les entreprises."
    ],
    "Proposer un plan de recollement de l’existant": [
      "Réaliser un plan de recollement fidèle à la réalité de l’existant.",
      "Identifier les modifications par rapport aux plans d’origine."
    ],
    "Établir une notice descriptive détaillée des ouvrages": [
      "Rédiger une notice descriptive détaillée des ouvrages, des matériaux et des équipements.",
      "Préciser les spécifications techniques et les normes applicables."
    ],
    "Établir les quantitatifs des différents corps d’état": [
      "Détailler les quantités par lot et par corps d’état.",
      "Utiliser des outils de métré adaptés."
    ],
    "Estimer le coût détaillé des travaux": [
      "Estimer le coût par poste et par corps d’état.",
      "Établir le coût total des travaux avec les marges et imprévus."
    ],
    "Établir le planning détaillé de l’opération": [
      "Établir un planning précis avec les tâches, les durées, les dépendances et les ressources.",
      "Utiliser un logiciel de gestion de projet."
    ],
    "Établir le dossier de consultation des entreprises": [
      "Préparer le Cahier des Clauses Techniques Particulières (CCTP), le Cahier des Clauses Administratives Générales (CCAG), les plans et le planning.",
      "Assurer la cohérence et l'exhaustivité du DCE."
    ],
    "Gérer les réponses des entreprises": [
      "Recevoir, enregistrer et organiser les offres.",
      "Répondre aux questions des entreprises.",
      "Gérer les avenants et modifications."
    ],
    "Établir un rapport d’analyse des offres": [
      "Analyser les offres techniques et financières.",
      "Comparer les propositions des entreprises.",
      "Recommander une entreprise au maître d’ouvrage."
    ],
    "Collecter les documents des entreprises, des bureaux d’études et de contrôle": [
      "Collecter tous les documents nécessaires à la bonne exécution des travaux (plans d'exécution, notes de calcul, fiches techniques, PV de contrôle...).",
      "Classer et organiser les documents."
    ],
    "Traduire graphiquement des choix techniques retenus": [
      "Produire des plans de détails complémentaires.",
      "Transcrire les solutions techniques validées en documents graphiques clairs."
    ],
    "Produire des documents graphiques (plans de détails complémentaires)": [
      "Réaliser des plans de détails complémentaires.",
      "Produire des documents conformes aux normes et aux conventions graphiques."
    ],
    "Mettre à jour le dossier d’exécution de l’ouvrage": [
      "Mettre à jour le dossier d'exécution au fur et à mesure de l'avancement des travaux.",
      "Intégrer les modifications et les avenants."
    ],
    "Pointer l’avancement des travaux et actualiser le calendrier de travaux": [
      "Suivre l'avancement physique des travaux sur site.",
      "Comparer l'avancement réel avec le planning prévisionnel.",
      "Actualiser le calendrier en cas d'écart."
    ],
    "Assister aux réunions de chantier et rendre compte": [
      "Participer activement aux réunions de chantier.",
      "Rédiger des comptes rendus précis et concis.",
      "Diffuser les comptes rendus aux parties prenantes."
    ],
    "Effectuer le relevé des ouvrages exécutés": [
      "Réaliser un relevé des ouvrages exécutés.",
      "Comparer avec les plans d'exécution et identifier les écarts.",
      "Produire les plans de récolement."
    ],
    "Établir des documents modificatifs": [
      "Établir les ordres de service, avenants et procès-verbaux de réception partielle.",
      "Documenter toutes les modifications apportées au projet."
    ],
    "Collecter les pièces nécessaires au règlement des situations de travaux": [
      "Collecter les attachements, les factures et les justificatifs des entreprises.",
      "Vérifier la conformité des pièces.",
      "Préparer les situations de travaux pour validation."
    ],
    "Préparer les opérations préalables à la réception des travaux": [
      "Organiser les visites de réception.",
      "Préparer les procès-verbaux et les listes de réserves.",
      "Assurer la présence des intervenants."
    ],
    "Contrôler les travaux conduisant aux levées de réserves et rendre compte": [
      "Vérifier la levée des réserves.",
      "Rédiger les procès-verbaux de levée de réserves.",
      "Rendre compte de l'état d'avancement des levées."
    ],
    "Finaliser le DOE": [
      "Compiler tous les documents du Dossier des Ouvrages Exécutés (DOE) : plans de récolement, notices techniques, fiches de maintenance, garanties.",
      "Structurer le DOE pour une consultation facile."
    ],
    "Assurer le suivi du parfait achèvement de l’ouvrage": [
      "Suivre les garanties de parfait achèvement.",
      "Gérer les éventuels désordres et les interventions nécessaires.",
      "Clore le dossier après un an."
    ]
  },

  competencesParTache: {
    "Effectuer un relevé d’ouvrage": ["C3.1 (Effectuer un relevé d’ouvrage)"],
    "Rédiger des éléments d'une notice descriptive de l'existant": ["C3.2 (Rédiger une notice descriptive)"],
    "Mettre au net et compléter des documents graphiques d'esquisses": ["C3.4 (Traduire graphiquement une solution technique et architecturale)"],
    "Réaliser une maquette sommaire et des dessins de rendu": ["C3.7 (Réaliser une maquette d’étude)"],
    "Effectuer les calculs de surfaces": ["C2.1 (Analyser un dossier)"],
    "Rechercher et classer la documentation spécifique au projet": ["C1.2 (Collecter et gérer des informations)", "C2.1 (Analyser un dossier)"],
    "Produire des documents graphiques d'APS en 2D et 3D": ["C3.4 (Traduire graphiquement une solution technique et architecturale)"],
    "Rédiger une notice descriptive des choix architecturaux": ["C3.2 (Rédiger une notice descriptive)"],
    "Vérifier et confirmer les calculs de surfaces": ["C2.1 (Analyser un dossier)"],
    "Analyser la compatibilité entre choix architecturaux et techniques": ["C2.1 (Analyser un dossier)", "C2.2 (Vérifier la cohérence du projet architectural avec les contraintes réglementaires et techniques)", "C2.3 (Proposer une solution à un problème identifié)"],
    "Produire des documents graphiques architecturaux": ["C3.4 (Traduire graphiquement une solution technique et architecturale)"],
    "Transcrire les détails techniques et constructifs": ["C3.4 (Traduire graphiquement une solution technique et architecturale)"],
    "Établir un quantitatif sommaire des ouvrages et estimer le coût prévisionnel des travaux": ["C2.1 (Analyser un dossier)", "C4.2 (Suivre la gestion économique d’un projet)"],
    "Établir un planning prévisionnel de l’opération": ["C4.2 (Suivre la gestion économique d’un projet)"],
    "Établir les pièces écrites et graphiques d’un dossier de demande de permis de construire": ["C2.2 (Vérifier la cohérence du projet architectural avec les contraintes réglementaires et techniques)"],
    "Établir les pièces écrites et graphiques d’un dossier de demande de permis de démolir": ["C2.2 (Vérifier la cohérence du projet architectural avec les contraintes réglementaires et techniques)"],
    "Établir les pièces écrites et graphiques d’un dossier de demande de déclaration préalable": ["C2.2 (Vérifier la cohérence du projet architectural avec les contraintes réglementaires et techniques)"],
    "Traduire graphiquement des choix techniques retenus et les intégrer au projet architectural": ["C3.4 (Traduire graphiquement une solution technique et architecturale)"],
    "Proposer un plan de recollement de l’existant": ["C3.1 (Effectuer un relevé d’ouvrage)"],
    "Établir une notice descriptive détaillée des ouvrages": ["C3.2 (Rédiger une notice descriptive)"],
    "Établir les quantitatifs des différents corps d’état": ["C5.1 (Établir un quantitatif ou un métré)"],
    "Estimer le coût détaillé des travaux": ["C5.2 (Établir une estimation)"],
    "Établir le planning détaillé de l’opération": ["C4.2 (Suivre la gestion économique d’un projet)"],
    "Établir le dossier de consultation des entreprises": ["C4.1 (Ordonner et actualiser un dossier)"],
    "Gérer les réponses des entreprises": ["C1.2 (Collecter et gérer des informations)"],
    "Établir un rapport d’analyse des offres": ["C2.1 (Analyser un dossier)"],
    "Collecter les documents des entreprises, des bureaux d’études et de contrôle": ["C1.2 (Collecter et gérer des informations)"],
    "Traduire graphiquement des choix techniques retenus": ["C3.4 (Traduire graphiquement une solution technique et architecturale)"],
    "Produire des documents graphiques (plans de détails complémentaires)": ["C3.4 (Traduire graphiquement une solution technique et architecturale)"],
    "Mettre à jour le dossier d’exécution de l’ouvrage": ["C4.1 (Ordonner et actualiser un dossier)"],
    "Pointer l’avancement des travaux et actualiser le calendrier de travaux": ["C4.2 (Suivre la gestion économique d’un projet)"],
    "Assister aux réunions de chantier et rendre compte": ["C1.3 (Rendre compte oralement)", "C1.4 (Rédiger un compte-rendu)"],
    "Effectuer le relevé des ouvrages exécutés": ["C3.1 (Effectuer un relevé d’ouvrage)"],
    "Établir des documents modificatifs": ["C3.4 (Traduire graphiquement une solution technique et architecturale)", "C4.1 (Ordonner et actualiser un dossier)"],
    "Collecter les pièces nécessaires au règlement des situations de travaux": ["C1.2 (Collecter et gérer des informations)", "C4.2 (Suivre la gestion économique d’un projet)"],
    "Préparer les opérations préalables à la réception des travaux": ["C4.1 (Ordonner et actualiser un dossier)"],
    "Contrôler les travaux conduisant aux levées de réserves et rendre compte": ["C4.3 (Vérifier la conformité de l’ouvrage et des prestations)", "C1.3 (Rendre compte oralement)"],
    "Finaliser le DOE": ["C4.1 (Ordonner et actualiser un dossier)"],
    "Assurer le suivi du parfait achèvement de l’ouvrage": ["C4.3 (Vérifier la conformité de l’ouvrage et des prestations)"]
  },

  competenceDetails: {
    "C1.1 (Participer à un collectif de travail)": {
      "etreCapable": [
        "Identifier les partenaires, leur fonction et leur mission.",
        "Mesurer la responsabilité collective du groupe et repérer la mission individuelle de chacun.",
        "S’informer, écouter, analyser, intervenir dans le cadre de sa mission.",
        "Se situer dans le groupe et participer au travail."
      ],
      "conditionsRessources": [
        "Situation professionnelle « réelle ou simulée », dans un environnement de travail (organigramme, partenaires, interlocuteurs, relations extérieures, etc.).",
        "Mise en présence des membres d’un groupe (en interne à l’entreprise, en coactivité d’intervention, …)"
      ],
      "criteresEvaluation": [
        "Les missions des différents partenaires sont clairement identifiées.",
        "L’enjeu de sa propre mission est explicité.",
        "Les limites de son intervention sont respectées.",
        "L’incidence de son intervention est identifiée dans la chaîne de responsabilités.",
        "Les interventions sont pertinentes."
      ]
    },
    "C1.2 (Collecter et gérer des informations)": {
      "etreCapable": [
        "Rechercher les informations nécessaires à la résolution d’un problème et mesurer la pertinence de leur source.",
        "Classer les informations en fonction de critères définis.",
        "Organiser et synthétiser les informations.",
        "Utiliser les outils numériques et les logiciels spécifiques pour la gestion de l’information."
      ],
      "conditionsRessources": [
        "Documents techniques",
        "Dossier d’Ouvrage Exécuté (DOE)",
        "Plans",
        "Normes",
        "Réglementations",
        "Logiciels de gestion documentaire",
        "Bases de données"
      ],
      "criteresEvaluation": [
        "Les informations sont pertinentes, fiables et complètes.",
        "Le classement est logique et opérationnel.",
        "La synthèse est claire et exploitable.",
        "Les outils numériques sont utilisés efficacement.",
        "Les informations sont accessibles et partagées."
      ]
    },
    "C1.3 (Rendre compte oralement)": {
      "etreCapable": [
        "S’exprimer de manière claire et précise.",
        "Adapter son discours à l’interlocuteur et à la situation.",
        "Argumenter ses propos et répondre aux questions.",
        "Utiliser des supports visuels si nécessaire."
      ],
      "conditionsRessources": [
        "Réunion de chantier",
        "Présentation orale",
        "Exposé",
        "Logiciels de présentation (PowerPoint, Prezi)"
      ],
      "criteresEvaluation": [
        "Le discours est compréhensible et bien structuré.",
        "L’adaptation à l’auditoire est manifeste.",
        "Les arguments sont pertinents et étayés.",
        "Les questions sont traitées de manière satisfaisante.",
        "Le support visuel est adapté et pertinent."
      ]
    },
    "C1.4 (Rédiger un compte-rendu)": {
      "etreCapable": [
        "Identifier les informations essentielles.",
        "Structurer le compte-rendu de manière logique.",
        "Rédiger avec clarté, concision et précision.",
        "Respecter les règles grammaticales et orthographiques."
      ],
      "conditionsRessources": [
        "Notes de réunion",
        "Enregistrements audio",
        "Modèles de compte-rendu",
        "Logiciels de traitement de texte"
      ],
      "criteresEvaluation": [
        "Toutes les informations essentielles sont présentes.",
        "La structure est claire et facilite la lecture.",
        "Le style est concis et précis.",
        "L’orthographe et la grammaire sont irréprochables.",
        "Le compte-rendu est exploitable et diffusé dans les délais."
      ]
    },
    "C2.1 (Analyser un dossier)": {
      "etreCapable": [
        "Identifier l’objet du dossier et son contexte.",
        "Extraire les informations pertinentes et les classer.",
        "Interpréter les données et identifier les problèmes.",
        "Proposer des pistes de résolution ou d’amélioration."
      ],
      "conditionsRessources": [
        "Dossiers techniques (plans, notices, CCTP, CCTP, etc.)",
        "Réglementations",
        "Normes",
        "Logiciels de bureautique (Word, Excel)"
      ],
      "criteresEvaluation": [
        "L’analyse est exhaustive et pertinente.",
        "Les problèmes sont identifiés et clairement formulés.",
        "Les propositions sont argumentées et réalistes.",
        "La méthode d’analyse est rigoureuse.",
        "Le rapport d’analyse est clair et structuré."
      ]
    },
    "C2.2 (Vérifier la cohérence du projet architectural avec les contraintes réglementaires et techniques)": {
      "etreCapable": [
        "Identifier les réglementations et normes applicables.",
        "Analyser la conformité du projet architectural avec ces contraintes.",
        "Repérer les non-conformités et proposer des solutions.",
        "Établir un tableau de conformité."
      ],
      "conditionsRessources": [
        "Réglementations (Code de la Construction et de l’Habitation, PLU, etc.)",
        "Normes (Accessibilité, Sécurité Incendie, Acoustique, Thermique, etc.)",
        "Plans architecturaux",
        "Notices descriptives"
      ],
      "criteresEvaluation": [
        "Toutes les réglementations et normes sont identifiées.",
        "Les non-conformités sont clairement signalées.",
        "Les solutions proposées sont pertinentes et respectent les contraintes.",
        "Le tableau de conformité est précis et à jour.",
        "Le projet est mis en conformité."
      ]
    },
    "C2.3 (Proposer une solution à un problème identifié)": {
      "etreCapable": [
        "Analyser la nature et la complexité du problème.",
        "Rechercher des solutions existantes ou innovantes.",
        "Évaluer les solutions (avantages, inconvénients, coûts, délais).",
        "Argumenter le choix de la solution retenue."
      ],
      "conditionsRessources": [
        "Bases de données techniques",
        "Ressources documentaires (livres, revues, internet)",
        "Logiciels de simulation",
        "Retours d'expérience"
      ],
      "criteresEvaluation": [
        "L’analyse du problème est pertinente.",
        "Un éventail de solutions est proposé.",
        "L’évaluation des solutions est objective et complète.",
        "Le choix de la solution est justifié.",
        "La solution proposée est réalisable et efficace."
      ]
    },
    "C3.1 (Effectuer un relevé d’ouvrage)": {
      "etreCapable": [
        "Préparer le matériel de relevé (mètre, laser, appareil photo, carnet...).",
        "Organiser le relevé (planification, méthodologie).",
        "Réaliser le relevé (mesures, croquis, photos).",
        "Mettre au propre les données collectées."
      ],
      "conditionsRessources": [
        "Matériel de relevé (mètre laser, télémètre, appareil photo, scanner 3D)",
        "Plans existants",
        "Logiciels de DAO/BIM"
      ],
      "criteresEvaluation": [
        "Le relevé est précis et complet.",
        "La méthodologie est rigoureuse.",
        "Les données sont exploitables et organisées.",
        "Les éventuelles anomalies sont signalées.",
        "Le document de relevé est fidèle à la réalité."
      ]
    },
    "C3.2 (Rédiger une notice descriptive)": {
      "etreCapable": [
        "Identifier les informations clés à inclure.",
        "Structurer la notice de manière claire et logique.",
        "Rédiger avec précision, concision et sans ambiguïté.",
        "Respecter les exigences normatives et réglementaires."
      ],
      "conditionsRessources": [
        "Cahier des Clauses Techniques Particulières (CCTP)",
        "Modèles de notice",
        "Normes de rédaction",
        "Logiciels de traitement de texte"
      ],
      "criteresEvaluation": [
        "La notice est complète et exhaustive.",
        "La structure est claire et facile à consulter.",
        "Le langage est précis et professionnel.",
        "Les informations sont exactes et vérifiables.",
        "La notice est conforme aux exigences du projet."
      ]
    },
    "C3.3 (Interpréter des documents techniques)": {
      "etreCapable": [
        "Identifier la nature et l’objectif du document.",
        "Déchiffrer les symboles, les légendes et les conventions.",
        "Comprendre les informations techniques (dimensions, matériaux, processus).",
        "Analyser la cohérence des informations entre plusieurs documents."
      ],
      "conditionsRessources": [
        "Plans techniques (architecte, structure, fluides)",
        "Notices techniques, fiches produits, DTU",
        "Normes de représentation",
        "Glossaires techniques"
      ],
      "criteresEvaluation": [
        "Les informations sont interprétées correctement.",
        "Les incohérences sont identifiées.",
        "La compréhension est rapide et efficace.",
        "L’utilisation des documents est pertinente.",
        "Les erreurs d’interprétation sont minimales."
      ]
    },
    "C3.4 (Traduire graphiquement une solution technique et architecturale)": {
      "etreCapable": [
        "Utiliser les logiciels de DAO/BIM (AutoCAD, Revit, ArchiCAD...).",
        "Appliquer les normes et conventions de dessin.",
        "Représenter les éléments techniques avec précision.",
        "Adapter la représentation au public ciblé."
      ],
      "conditionsRessources": [
        "Logiciels de DAO/BIM",
        "Matériel informatique performant",
        "Bibliothèques d’objets",
        "Normes de dessin (NF EN ISO)"
      ],
      "criteresEvaluation": [
        "Les documents graphiques sont clairs et compréhensibles.",
        "Les normes de dessin sont respectées.",
        "La solution est représentée fidèlement.",
        "Les documents sont exploitables pour la réalisation.",
        "L’utilisation des outils est maîtrisée."
      ]
    },
    "C3.5 (Concevoir ou adapter une solution technique)": {
      "etreCapable": [
        "Analyser les besoins et les contraintes.",
        "Rechercher des solutions existantes ou innover.",
        "Définir les caractéristiques techniques de la solution.",
        "Valider la faisabilité technique et économique."
      ],
      "conditionsRessources": [
        "Bases de données techniques",
        "Catalogues de produits",
        "Logiciels de calcul et de simulation",
        "Normes et réglementations"
      ],
      "criteresEvaluation": [
        "La solution répond aux besoins et aux contraintes.",
        "Elle est techniquement et économiquement faisable.",
        "Les caractéristiques techniques sont définies avec précision.",
        "La solution est innovante si nécessaire.",
        "Elle est intégrable au projet."
      ]
    },
    "C3.6 (Réaliser un diagnostic technique)": {
      "etreCapable": [
        "Collecter les données sur l’existant.",
        "Analyser les désordres, pathologies ou dysfonctionnements.",
        "Identifier les causes et les conséquences.",
        "Proposer des préconisations d’intervention."
      ],
      "conditionsRessources": [
        "Plans existants",
        "Dossiers d’interventions antérieures",
        "Rapports d’expertise",
        "Matériel d’inspection (endoscope, humidimètre...)"
      ],
      "criteresEvaluation": [
        "Le diagnostic est exhaustif et précis.",
        "Les causes des désordres sont identifiées.",
        "Les préconisations sont pertinentes et réalisables.",
        "Le rapport de diagnostic est clair et argumenté.",
        "La méthodologie est rigoureuse."
      ]
    },
    "C3.7 (Réaliser une maquette d’étude)": {
      "etreCapable": [
        "Choisir l’échelle et les matériaux adaptés.",
        "Réaliser les éléments de la maquette avec précision.",
        "Assembler les éléments selon le projet.",
        "Présenter la maquette pour visualiser le projet."
      ],
      "conditionsRessources": [
        "Matériaux (carton, bois, polystyrène, etc.)",
        "Outils de découpe et d’assemblage",
        "Plans et élévations du projet",
        "Espace de travail adapté"
      ],
      "criteresEvaluation": [
        "La maquette est fidèle au projet.",
        "L’échelle est respectée.",
        "Les détails sont soignés.",
        "La maquette est un bon support de visualisation.",
        "L’exécution est soignée."
      ]
    },
    "C4.1 (Ordonner et actualiser un dossier)": {
      "etreCapable": [
        "Structurer le dossier de manière logique.",
        "Classer les documents selon un plan prédéfini.",
        "Vérifier l’exhaustivité et la cohérence des pièces.",
        "Mettre à jour le dossier au fur et à mesure de l'avancement."
      ],
      "conditionsRessources": [
        "Plan de classement",
        "Logiciels de gestion documentaire",
        "Outils de numérisation",
        "Accès aux informations du projet"
      ],
      "criteresEvaluation": [
        "Le dossier est structuré et facile à consulter.",
        "Toutes les pièces sont présentes et à jour.",
        "Les informations sont cohérentes.",
        "Le dossier est accessible et partageable.",
        "La méthode de mise à jour est efficace."
      ]
    },
    "C4.2 (Suivre la gestion économique d’un projet)": {
      "etreCapable": [
        "Établir un budget prévisionnel.",
        "Suivre les dépenses et les recettes.",
        "Mettre à jour les tableaux de suivi financier.",
        "Analyser les écarts et proposer des actions correctives.",
        "Préparer les demandes de règlement et les situations de travaux."
      ],
      "conditionsRessources": [
        "Devis, factures, tableaux de suivi financier",
        "Logiciels de comptabilité",
        "Outils de bureautique (Excel)"
      ],
      "criteresEvaluation": [
        "Les postes de dépenses et de recettes sont identifiés.",
        "L’évolution des coûts est suivie rigoureusement.",
        "Les tableaux de suivi financier sont à jour.",
        "Les écarts sont analysés et des actions correctives sont proposées.",
        "Les demandes de règlement sont préparées correctement."
      ]
    },
    "C4.3 (Vérifier la conformité de l’ouvrage et des prestations)": {
      "etreCapable": [
        "Vérifier le respect des procédures administratives.",
        "Repérer et analyser les non-conformités.",
        "Contrôler le respect des règles de l’art et des tolérances.",
        "Vérifier la traçabilité des interventions.",
        "Établir les documents de suivi."
      ],
      "conditionsRessources": [
        "Pièces constitutives du marché",
        "Normes, DTU et Avis techniques",
        "Documents de labellisation ou de certification",
        "Fiches techniques et notices d’utilisation",
        "Rapports de contrôle",
        "Dossier d’intervention ultérieure sur l’ouvrage (DIUO)"
      ],
      "criteresEvaluation": [
        "Les erreurs ou manquements sont signalés.",
        "Les non-conformités sont clairement exposées.",
        "Les méthodes et outils de contrôle sont pertinents.",
        "Le bon achèvement est vérifié.",
        "Tous les aléas liés aux malfaçons ou désordres émergents sont pris en compte."
      ]
    },
    "C5.1 (Établir un quantitatif ou un métré)": {
      "etreCapable": [
        "Lire et interpréter les plans d'exécution.",
        "Identifier les ouvrages et les matériaux.",
        "Appliquer les méthodes de calcul de quantités.",
        "Utiliser les logiciels de métré."
      ],
      "conditionsRessources": [
        "Plans (architecte, structure, détails)",
        "Logiciels de métré",
        "Bordereaux de prix unitaires",
        "Règles de l'art"
      ],
      "criteresEvaluation": [
        "Le quantitatif est précis et exhaustif.",
        "Les calculs sont justes.",
        "La méthodologie est rigoureuse.",
        "Le document est clair et exploitable.",
        "Les règles professionnelles sont respectées."
      ]
    },
    "C5.2 (Établir une estimation)": {
      "etreCapable": [
        "Collecter les données de coût (prix unitaires, ratios).",
        "Appliquer les méthodes d'estimation (par ratios, au détail).",
        "Justifier les choix et les hypothèses.",
        "Présenter l'estimation de manière claire."
      ],
      "conditionsRessources": [
        "Bases de données de prix (Batiprix, etc.)",
        "Historique des coûts",
        "Devis d'entreprises",
        "Logiciels de tableur"
      ],
      "criteresEvaluation": [
        "L'estimation est réaliste et cohérente.",
        "Les hypothèses sont clairement énoncées.",
        "Les écarts sont justifiés.",
        "Le document est professionnel et compréhensible.",
        "L'estimation permet une prise de décision éclairée."
      ]
    }
  },

  ressourcesOnDonne: [
    "1 - Projet LISA",
    "1. Fichiers PDF (tutoriels/étapes)",
    "Création d’un projet.pdf",
    "Création murs porteurs.pdf",
    "Création Type de murs.pdf",
    "Création Cloisons.pdf",
    "Création MEI MEX.pdf",
    "Création Mur Rideau.pdf",
    "Création plancher bois.pdf",
    "Création escalier et garde corps.pdf",
    "Toitures.pdf",
    "Création des fondations.pdf",
    "Annotations.pdf",
    "Création des vues, nomenclature et feuilles.pdf",
    "2. Familles Revit (.rfa)",
    "1456133278175_Coffee Machine.rfa",
    "1456153326143_Kitchen_ExhaustHood.0001.rfa",
    "1456153326143_Kitchen_ExhaustHood.rfa",
    "cabane.rfa",
    "Chaise_Loungue_- Le_Corbusier -_with_parametric_oscillation_3304.rfa",
    "Eva_Chaise_12355.rfa",
    "ferme en bois.rfa",
    "FERME.rfa",
    "HAL-STOOL-MEDIUM-rfa-Vitra-27398.rfa",
    "Meuble_Haut.rfa",
    "MOBILIER DE BUREAU.rfa",
    "OBJET TEST.rfa",
    "PLACARD CHAMBRE.rfa",
    "Renault Megane.rfa",
    "Table_ronde_10185.rfa",
    "Tabouret bas.rfa",
    "table ronde.rfa",
    "TUBE.rfa",
    "3. Fichiers Revit (.rvt)",
    "Projet LISA.rvt",
    "Plan masse topographie.rvt",
    "4. Divers",
    "Fichiers images.zip",
    "S1 – Environnement professionnel",
    "S1.1 – Notions juridiques et réglementaires relatives au bâtiment",
    "S1.2 – Partenaires et intervenants",
    "S1.3 – Programmation d’un projet",
    "S1.4 – Outils de communication",
    "S2 – Confort et sécurité",
    "S2.1 – Accessibilité du cadre bâti",
    "S2.2 – Confort des personnes",
    "S2.3 – Protection des personnes",
    "S3 – Techniques de construction et règles de mise en œuvre",
    "S3.1 – Adaptation au site",
    "S3.2 – Structures porteuses",
    "S3.3 – Enveloppe du bâtiment",
    "S3.4 – Aménagement intérieur",
    "S3.5 – Équipements techniques",
    "S3.6 – Finitions",
    "S4 – Étude des structures",
    "S4.1 – Identification et évaluation des charges",
    "S4.2 – Analyse de l’équilibre d’un système",
    "S4.3 – Étude mécanique et choix technique",
    "S5 – Économie de la construction",
    "S5.1 – Avant-métré, métré et quantitatif",
    "S5.2 – Estimation",
    "S6 – Architecture : histoire et évolutions",
    "S6.1 – Histoire de l’architecture et du patrimoine",
    "S6.2 – Courants architecturaux actuels"
  ]
};
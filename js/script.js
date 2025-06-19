// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const introPage = document.getElementById('intro-page');
    const startBtn = document.getElementById('start-btn');
    const sequenceInput = document.getElementById('sequence-name');
    const sessionInput = document.getElementById('session-name');
    const dateInput = document.getElementById('session-date');

    const phaseGroup = document.getElementById('phase-group');
    const phaseSelect = document.getElementById('phase-select');
    const activitySelect = document.getElementById('activity-select');
    const taskSelect = document.getElementById('task-select');
    const problematicSelect = document.getElementById('problematic-select');

    const expectedResultCheckboxesDiv = document.getElementById('expected-result-checkboxes');
    const resourcesCheckboxesDiv = document.getElementById('resources-checkboxes');

    const etreCapableCheckboxesDiv = document.getElementById('etre-capable-checkboxes');
    const conditionsRessourcesCheckboxesDiv = document.getElementById('conditions-ressources-checkboxes');
    const criteresEvaluationCheckboxesDiv = document.getElementById('criteres-evaluation-checkboxes');

    const activityGroup = document.getElementById('activity-group');
    const taskGroup = document.getElementById('task-group');
    const problematicGroup = document.getElementById('problematic-group');
    const expectedResultGroup = document.getElementById('expected-result-group');
    const competenceGroup = document.getElementById('competence-group');

    const competenceSelect = document.getElementById('competence-select');
    const competenceDetailsDiv = document.getElementById('competence-details');
    const competenceNameSpan = document.getElementById('competence-name');

    const onDonneResourcesDiv = document.getElementById('on-donne-resources');
    const generatePdfBtn = document.getElementById('generate-pdf-btn');

    const sections = [
        introPage,
        phaseGroup,
        activityGroup,
        taskGroup,
        problematicGroup,
        expectedResultGroup,
        competenceGroup,
        competenceDetailsDiv,
        onDonneResourcesDiv
    ];

    const nextButtons = document.querySelectorAll('.next-btn');
    const prevButtons = document.querySelectorAll('.prev-btn');
    let currentStep = 0;

    // Variables pour stocker les informations de l'introduction
    window.sequenceName = '';
    window.sessionName = '';
    window.sessionDate = '';

    function showStep(index) {
        sections.forEach((sec, i) => {
            sec.style.display = i === index ? 'block' : 'none';
        });
        generatePdfBtn.style.display = index === sections.length - 1 ? 'block' : 'none';

        const nav = sections[index].querySelector('.navigation');
        if (nav) {
            const prev = nav.querySelector('.prev-btn');
            const next = nav.querySelector('.next-btn');
            if (prev) prev.style.display = index === 0 ? 'none' : 'block';
            if (next) next.style.display = index === sections.length - 1 ? 'none' : 'block';
        }
    }

    function validateStep(step) {
        switch (step) {
            case 0:
                if (!sequenceInput.value.trim() || !sessionInput.value.trim() || !dateInput.value) {
                    alert('Veuillez remplir tous les champs.');
                    return false;
                }
                if (phaseSelect.options.length === 1) {
                    populatePhases();
                }
                window.sequenceName = sequenceInput.value.trim();
                window.sessionName = sessionInput.value.trim();
                window.sessionDate = dateInput.value;
                return true;
            case 1:
                if (!phaseSelect.value) { alert('Sélectionnez une phase.'); return false; }
                return true;
            case 2:
                if (!activitySelect.value) { alert('Sélectionnez une activité.'); return false; }
                return true;
            case 3:
                if (!taskSelect.value) { alert('Sélectionnez une tâche.'); return false; }
                return true;
            case 4:
                if (!problematicSelect.value) { alert('Sélectionnez une problématique.'); return false; }
                return true;
            case 5:
                if (expectedResultCheckboxesDiv.querySelectorAll('input[name="expectedResult"]:checked').length === 0) {
                    alert('Sélectionnez au moins un résultat attendu.');
                    return false;
                }
                return true;
            case 6:
                if (!competenceSelect.value) { alert('Sélectionnez une compétence.'); return false; }
                return true;
            default:
                return true;
        }
    }

    function nextStep() {
        if (validateStep(currentStep)) {
            currentStep = Math.min(currentStep + 1, sections.length - 1);
            showStep(currentStep);
        }
    }

    function prevStep() {
        currentStep = Math.max(currentStep - 1, 0);
        showStep(currentStep);
    }

    nextButtons.forEach(btn => btn.addEventListener('click', nextStep));
    prevButtons.forEach(btn => btn.addEventListener('click', prevStep));

    showStep(currentStep);

    // Fonction pour réinitialiser les sélections suivantes et masquer les groupes
    function resetAndHide(startingLevel) {
        if (startingLevel <= 1) {
            activitySelect.innerHTML = '<option value="">--Choisir une activité--</option>';
            activityGroup.style.display = 'none';
        }
        if (startingLevel <= 2) {
            taskSelect.innerHTML = '<option value="">--Choisir une tâche--</option>';
            taskGroup.style.display = 'none';
            // La problématique ne doit pas être cachée si l'activité change, elle doit être peuplée.
            // On la cache uniquement si l'activité devient vide.
            if (!activitySelect.value) { // Si aucune activité sélectionnée
                 problematicSelect.innerHTML = '<option value="">--Choisir une problématique--</option>';
                 problematicGroup.style.display = 'none';
            }
        }
        // Pas de reset pour problematicSelect ici, car elle est gérée par populateProblematic
        // et ne doit pas être cachée par la sélection d'une tâche.
        if (startingLevel <= 4) { // Niveau de réinitialisation pour les résultats attendus
            expectedResultCheckboxesDiv.innerHTML = '';
            expectedResultGroup.style.display = 'none';
        }
        if (startingLevel <= 5) { // Niveau de réinitialisation pour les compétences et leurs détails
            competenceSelect.innerHTML = '<option value="">--Choisir une compétence--</option>';
            competenceGroup.style.display = 'none';
            competenceDetailsDiv.style.display = 'none'; // Masquer la section des détails de compétence
            // Vider et cacher les conteneurs individuels des détails
            etreCapableCheckboxesDiv.innerHTML = '';
            conditionsRessourcesCheckboxesDiv.innerHTML = '';
            criteresEvaluationCheckboxesDiv.innerHTML = '';
            document.getElementById('etre-capable-group').style.display = 'none';
            document.getElementById('conditions-ressources-group').style.display = 'none';
            document.getElementById('criteres-evaluation-group').style.display = 'none';
        }
        if (startingLevel <= 6) { // Niveau de réinitialisation pour les ressources "On donne"
            resourcesCheckboxesDiv.innerHTML = '';
            onDonneResourcesDiv.style.display = 'none';
            generatePdfBtn.style.display = 'none';
        }
    }

    // Fonctions de peuplement
    function populatePhases() {
        appData.phasesData.forEach(phase => {
            const option = document.createElement('option');
            option.value = phase.nom;
            option.textContent = phase.nom;
            phaseSelect.appendChild(option);
        });
    }

    // Ancien bouton de démarrage utilisé comme premier "Suivant"

    phaseSelect.addEventListener('change', () => {
        resetAndHide(1);
        const selectedPhaseName = phaseSelect.value;
        if (selectedPhaseName) {
            const selectedPhase = appData.phasesData.find(phase => phase.nom === selectedPhaseName);
            if (selectedPhase && selectedPhase.activites) {
                selectedPhase.activites.forEach(activity => {
                    const option = document.createElement('option');
                    option.value = activity.nom;
                    option.textContent = activity.nom;
                    activitySelect.appendChild(option);
                });
                activityGroup.style.display = 'block';
            }
        }
    });

    activitySelect.addEventListener('change', () => {
        resetAndHide(2);
        const selectedActivityName = activitySelect.value;
        if (selectedActivityName) {
            let tasks = [];
            for (const phase of appData.phasesData) {
                const foundActivity = phase.activites.find(act => act.nom === selectedActivityName);
                if (foundActivity) {
                    tasks = foundActivity.taches;
                    break;
                }
            }
            tasks.forEach(task => {
                const option = document.createElement('option');
                option.value = task;
                option.textContent = task;
                taskSelect.appendChild(option);
            });
            if (tasks.length > 0) {
                taskGroup.style.display = 'block';
            }
            populateProblematic(selectedActivityName);
        }
    });

    function populateProblematic(activityName) {
        problematicSelect.innerHTML = '<option value="">--Choisir une problématique--</option>';
        const problematics = appData.problematiquesParActivite[activityName];
        if (problematics && problematics.length > 0) {
            problematics.forEach(problematic => {
                const option = document.createElement('option');
                option.value = problematic;
                option.textContent = problematic;
                problematicSelect.appendChild(option);
            });
            problematicGroup.style.display = 'block';
        } else {
            problematicGroup.style.display = 'none';
        }
    }

    taskSelect.addEventListener('change', () => {
        resetAndHide(4);
        const selectedTask = taskSelect.value;
        if (selectedTask) {
            const expectedResults = appData.resultatsAttendusParTache[selectedTask];
            // Assurez-vous que expectedResults est un tableau
            const resultsArray = typeof expectedResults === 'string' ? [expectedResults] : expectedResults;

            if (resultsArray && resultsArray.length > 0) {
                expectedResultCheckboxesDiv.innerHTML = '';
                resultsArray.forEach((result, index) => {
                    // MODIFICATION ICI: isChecked à false
                    const checkboxItem = createCheckboxItem(`result-${index}`, 'expectedResult', result, result, false);
                    expectedResultCheckboxesDiv.appendChild(checkboxItem);
                });
                expectedResultGroup.style.display = 'block';
            } else {
                expectedResultGroup.style.display = 'none';
            }
            populateCompetences(selectedTask);
        }
    });

    function populateCompetences(taskName) {
        resetAndHide(5); // Réinitialise les compétences, leurs détails et les ressources "On donne"
        const competencies = appData.competencesParTache[taskName];
        if (competencies && competencies.length > 0) {
            competencies.forEach(competence => {
                const option = document.createElement('option');
                option.value = competence;
                option.textContent = competence;
                competenceSelect.appendChild(option);
            });
            competenceGroup.style.display = 'block';
        } else {
            competenceGroup.style.display = 'none';
        }
    }

    // Fonction utilitaire pour créer une checkbox
    // MODIFICATION ICI: isChecked est false par défaut
    function createCheckboxItem(id, name, value, textContent, isChecked = false) {
        const checkboxItem = document.createElement('div');
        checkboxItem.classList.add('checkbox-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = id;
        checkbox.name = name;
        checkbox.value = value;
        checkbox.checked = isChecked; // Utilisera la valeur par défaut (false) ou celle passée en paramètre

        const label = document.createElement('label');
        label.htmlFor = id;
        label.textContent = textContent;

        checkboxItem.appendChild(checkbox);
        checkboxItem.appendChild(label);
        return checkboxItem;
    }

    // Gérer l'affichage et le peuplement des détails de la Compétence
    competenceSelect.addEventListener('change', () => {
        resetAndHide(6); // Cache les ressources "On donne" et le bouton PDF

        const selectedCompetence = competenceSelect.value;
        competenceDetailsDiv.style.display = 'none'; // Cache la section globale des détails de compétence
        // Vider les conteneurs de checkboxes et les masquer
        etreCapableCheckboxesDiv.innerHTML = '';
        conditionsRessourcesCheckboxesDiv.innerHTML = '';
        criteresEvaluationCheckboxesDiv.innerHTML = '';
        document.getElementById('etre-capable-group').style.display = 'none';
        document.getElementById('conditions-ressources-group').style.display = 'none';
        document.getElementById('criteres-evaluation-group').style.display = 'none';


        if (selectedCompetence) {
            const details = appData.competenceDetails[selectedCompetence];
            if (details) {
                competenceNameSpan.textContent = selectedCompetence;

                // Peupler les checkboxes pour "Être capable de"
                if (details.etreCapable && details.etreCapable.length > 0) {
                    details.etreCapable.forEach((item, index) => {
                        // MODIFICATION ICI: isChecked à false
                        const checkboxItem = createCheckboxItem(`etre-capable-${index}`, 'etreCapableDetail', item, item, false);
                        etreCapableCheckboxesDiv.appendChild(checkboxItem);
                    });
                    document.getElementById('etre-capable-group').style.display = 'block';
                }

                // Peupler les checkboxes pour "Conditions et ressources"
                if (details.conditionsRessources && details.conditionsRessources.length > 0) {
                    details.conditionsRessources.forEach((item, index) => {
                        // MODIFICATION ICI: isChecked à false
                        const checkboxItem = createCheckboxItem(`conditions-ressources-${index}`, 'conditionsRessourcesDetail', item, item, false);
                        conditionsRessourcesCheckboxesDiv.appendChild(checkboxItem);
                    });
                    document.getElementById('conditions-ressources-group').style.display = 'block';
                }

                // Peupler les checkboxes pour "Critères d'évaluation"
                if (details.criteresEvaluation && details.criteresEvaluation.length > 0) {
                    details.criteresEvaluation.forEach((item, index) => {
                        // MODIFICATION ICI: isChecked à false
                        const checkboxItem = createCheckboxItem(`criteres-evaluation-${index}`, 'criteresEvaluationDetail', item, item, false);
                        criteresEvaluationCheckboxesDiv.appendChild(checkboxItem);
                    });
                    document.getElementById('criteres-evaluation-group').style.display = 'block';
                }

                // Afficher la section des détails de compétence si au moins un des sous-groupes est affiché
                if (document.getElementById('etre-capable-group').style.display === 'block' ||
                    document.getElementById('conditions-ressources-group').style.display === 'block' ||
                    document.getElementById('criteres-evaluation-group').style.display === 'block') {
                    competenceDetailsDiv.style.display = 'block';
                }

            }
            populateOnDonneResources(); // Appeler cette fonction pour afficher les ressources "On donne"
        } else {
            resourcesCheckboxesDiv.innerHTML = '';
        }
    });

    function populateOnDonneResources() {
        resourcesCheckboxesDiv.innerHTML = '';
        appData.ressourcesOnDonne.forEach((resource, index) => {
            // MODIFICATION ICI: isChecked à false
            const checkboxItem = createCheckboxItem(`resource-${index}`, 'onDonneResource', resource, resource, false);
            resourcesCheckboxesDiv.appendChild(checkboxItem);
        });
    }

    // Génération du PDF
    generatePdfBtn.addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        let y = 15; // Marge supérieure
        const margin = 20; // Marge latérale
        const lineHeight = 8;
        const paragraphSpacing = 10;
        const maxWidth = 170; // Largeur pour le texte

        // Fonction d'ajout de titre de section
        const addSectionTitle = (title, fontSize, textColor, background = null) => {
            doc.setFontSize(fontSize);
            doc.setTextColor(textColor[0], textColor[1], textColor[2]);
            if (background) {
                doc.setFillColor(background[0], background[1], background[2]);
                doc.rect(margin, y - fontSize * 0.7, maxWidth, fontSize * 1.2, 'F');
            }
            doc.text(title, margin + 5, y); // Décalage pour l'esthétique si background
            y += lineHeight + 5;
            doc.setTextColor(0, 0, 0); // Reset text color
        };

        // Fonction d'ajout de texte avec formatage et saut de ligne
        const addFormattedText = (label, value, isList = false) => {
            if (!value || (Array.isArray(value) && value.length === 0)) return;

            doc.setFontSize(11);
            doc.setTextColor(52, 152, 219); // Bleu pour les labels
            doc.text(`${label}:`, margin, y);
            y += lineHeight * 0.7; // Petit saut de ligne après le label

            doc.setTextColor(0, 0, 0); // Noir pour le texte
            doc.setFontSize(10);

            let textToPrint = Array.isArray(value) ? value.map(item => `• ${item}`).join('\n') : value;

            const splitText = doc.splitTextToSize(textToPrint, maxWidth - (isList ? 5 : 0)); // Retirer un peu de marge pour les listes
            doc.text(splitText, margin + (isList ? 5 : 0), y); // Décalage pour les listes
            y += splitText.length * lineHeight * 0.7 + paragraphSpacing;
        };


        // --- Titre principal : Problématique ---
        const selectedProblematic = problematicSelect.value;
        if (selectedProblematic) {
            doc.setFontSize(20);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(44, 62, 80); // Bleu très foncé
            doc.text("Fiche Pédagogique - Problématique :", margin, y);
            y += lineHeight * 1.5;
            doc.setFontSize(16);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(52, 152, 219); // Bleu vif pour la problématique
            const splitProblematic = doc.splitTextToSize(selectedProblematic, maxWidth);
            doc.text(splitProblematic, margin + 10, y); // Légèrement décalé
            y += splitProblematic.length * lineHeight + 15;
        } else {
            addSectionTitle("Fiche Pédagogique", 18, [44, 62, 80]);
        }

        // --- Informations Générales ---
        addSectionTitle("Informations Générales", 14, [41, 128, 185], [236, 240, 241]); // Bleu moyen, fond gris clair
        addFormattedText("Phase", phaseSelect.value);
        addFormattedText("Activité", activitySelect.value);
        addFormattedText("Tâche", taskSelect.value);
        y += 5; // Espace supplémentaire

        // --- Résultat(s) attendu(s) ---
        // Seuls les éléments cochés seront ajoutés au PDF
        const selectedExpectedResults = Array.from(expectedResultCheckboxesDiv.querySelectorAll('input[name="expectedResult"]:checked'))
                                       .map(checkbox => checkbox.value);
        if (selectedExpectedResults.length > 0) {
            addSectionTitle("Résultat(s) attendu(s)", 14, [41, 128, 185], [236, 240, 241]);
            addFormattedText("Liste", selectedExpectedResults, true);
            y += 5;
        }


        // --- Compétence Visée et Détails ---
        // La section "Compétence Visée" sera toujours présente si une compétence est sélectionnée
        const selectedCompetence = competenceSelect.value;
        if (selectedCompetence) {
            addSectionTitle("Compétence Visée", 14, [41, 128, 185], [236, 240, 241]);
            addFormattedText("Nom de la compétence", selectedCompetence);

            const details = appData.competenceDetails[selectedCompetence];
            if (details) {
                // "Être capable de :"
                const selectedEtreCapable = Array.from(etreCapableCheckboxesDiv.querySelectorAll('input[name="etreCapableDetail"]:checked'))
                                                .map(checkbox => checkbox.value);
                if (selectedEtreCapable.length > 0) {
                    addSectionTitle("Être capable de", 12, [39, 174, 96]); // Vert
                    addFormattedText("Éléments", selectedEtreCapable, true);
                }

                // "Conditions et ressources :"
                const selectedConditionsRessources = Array.from(conditionsRessourcesCheckboxesDiv.querySelectorAll('input[name="conditionsRessourcesDetail"]:checked'))
                                                          .map(checkbox => checkbox.value);
                if (selectedConditionsRessources.length > 0) {
                    addSectionTitle("Conditions et ressources", 12, [39, 174, 96]);
                    addFormattedText("Éléments", selectedConditionsRessources, true);
                }

                // "Critères d'évaluation :"
                const selectedCriteresEvaluation = Array.from(criteresEvaluationCheckboxesDiv.querySelectorAll('input[name="criteresEvaluationDetail"]:checked'))
                                                        .map(checkbox => checkbox.value);
                if (selectedCriteresEvaluation.length > 0) {
                    addSectionTitle("Critères d'évaluation", 12, [39, 174, 96]);
                    addFormattedText("Éléments", selectedCriteresEvaluation, true);
                }
            }
        }
        y += 5;

        // --- Ressources "On donne" ---
        // Seuls les éléments cochés seront ajoutés au PDF
        const selectedOnDonneResources = Array.from(resourcesCheckboxesDiv.querySelectorAll('input[name="onDonneResource"]:checked'))
                                           .map(checkbox => checkbox.value);
        if (selectedOnDonneResources.length > 0) {
            addSectionTitle("Ressources \"On donne\"", 14, [41, 128, 185], [236, 240, 241]);
            addFormattedText("Liste", selectedOnDonneResources, true);
        }


        doc.save('fiche_pedagogique.pdf');
    });

    // Les phases seront peuplées après la saisie des informations initiales
});
// js/pdf-generator.js

document.addEventListener('DOMContentLoaded', () => {
    const generatePdfBtn = document.getElementById('generate-pdf-btn');

    generatePdfBtn.addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Get the selected values
        const selectedPhase = document.getElementById('phase-select').value;
        const selectedActivity = document.getElementById('activity-select').value;
        const selectedTask = document.getElementById('task-select').value;
        const selectedProblematic = document.getElementById('problematic-select').value;
        const selectedExpectedResult = document.getElementById('expected-result-select').value;
        const selectedCompetence = document.getElementById('competence-select').value;

        // Add introductory information
        let yPos = 20;
        doc.setFontSize(14);
        if (window.sequenceName) {
            doc.text(`Séquence : ${window.sequenceName}`, 10, yPos);
            yPos += 7;
        }
        if (window.sessionName) {
            doc.text(`Séance : ${window.sessionName}`, 10, yPos);
            yPos += 7;
        }
        if (window.sessionDate) {
            doc.text(`Date : ${window.sessionDate}`, 10, yPos);
            yPos += 7;
        }

        // Add selected items to PDF
        doc.setFontSize(16);
        doc.text("Détails du Formulaire", 10, yPos);
        yPos += 10;
        doc.setFontSize(12);
        doc.text(`Phase sélectionnée: ${selectedPhase}`, 10, yPos);
        yPos += 7;
        doc.text(`Activité sélectionnée: ${selectedActivity}`, 10, yPos);
        yPos += 7;
        doc.text(`Tâche professionnelle sélectionnée: ${selectedTask}`, 10, yPos);
        yPos += 7;
        doc.text(`Problématique sélectionnée: ${selectedProblematic}`, 10, yPos);
        yPos += 7;
        doc.text(`Résultat attendu sélectionné: ${selectedExpectedResult}`, 10, yPos);
        yPos += 7;
        doc.text(`Compétence visée sélectionnée: ${selectedCompetence}`, 10, yPos);
        yPos += 15;

        // Add Competence Details
        const competenceDetailsDiv = document.getElementById('competence-details');
        if (competenceDetailsDiv.style.display !== 'none') {
            doc.setFontSize(14);
            doc.text("Détails de la Compétence", 10, yPos);
            yPos += 10;
            doc.setFontSize(12);
            doc.text(`Compétence: ${document.getElementById('competence-name').textContent}`, 10, yPos);
            yPos += 7;
            doc.text(`Être capable de: ${document.getElementById('etre-capable').textContent}`, 10, yPos, { maxWidth: 180 });
            yPos += doc.splitTextToSize(document.getElementById('etre-capable').textContent, 180).length * 7 + 7; // Adjust yPos based on text height
            doc.text(`Conditions/Ressources: ${document.getElementById('conditions-ressources').textContent}`, 10, yPos, { maxWidth: 180 });
            yPos += doc.splitTextToSize(document.getElementById('conditions-ressources').textContent, 180).length * 7 + 7;
            doc.text(`Critères d'évaluation: ${document.getElementById('criteres-evaluation').textContent}`, 10, yPos, { maxWidth: 180 });
            yPos += doc.splitTextToSize(document.getElementById('criteres-evaluation').textContent, 180).length * 7 + 15;
        }

        // Add "On donne" resources
        const onDonneResourcesDiv = document.getElementById('on-donne-resources');
        if (onDonneResourcesDiv.style.display !== 'none') {
            doc.setFontSize(14);
            doc.text("Ressources 'On donne'", 10, yPos);
            yPos += 10;
            doc.setFontSize(12);
            const resourcesListItems = document.querySelectorAll('#resources-list li');
            resourcesListItems.forEach(item => {
                doc.text(`- ${item.textContent}`, 10, yPos, { maxWidth: 180 });
                yPos += 7;
            });
        }

        doc.save('formulaire-selection.pdf');
    });
});
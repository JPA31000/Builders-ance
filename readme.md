# Formulaire Dynamique

Ce projet est un formulaire web dynamique avec filtrage conditionnel, développé en HTML, CSS et JavaScript. Il permet aux utilisateurs de naviguer à travers différentes phases, activités, tâches professionnelles, problématiques, résultats attendus et compétences, affichant les détails pertinents et les ressources associées en fonction des sélections.

## Structure du Projet
## Fonctionnalités

* **Sélection progressive en cascade:** Les options des menus déroulants sont filtrées dynamiquement en fonction des sélections précédentes.
* **Affichage des détails:** Une fois une compétence sélectionnée, ses détails (Être capable de, Conditions/Ressources, Critères d'évaluation) sont affichés.
* **Affichage des ressources:** Les ressources "On donne" sont également affichées lorsque les détails d'une compétence sont visibles.
* **Génération de PDF:** Un bouton permet de générer un PDF récapitulatif des sélections et des informations affichées.

## Architecture des Données

Les données sont structurées hiérarchiquement dans `js/data.js` pour faciliter le filtrage et l'affichage:

* `phases` → `activites` → `taches` professionnelles
* `taches` → `problematiques` (basé sur l'activité associée)
* `taches` → `resultatsAttendus`
* `taches` → `competences` visées
* `competences` → `etreCapable`, `conditionsRessources`, `criteresEvaluation`
* `ressourcesOnDonne` (liste globale)

## Technologies Utilisées

* **HTML5:** Structure du formulaire et du contenu.
* **CSS3:** Stylisation de l'interface utilisateur.
* **JavaScript (ES6+):** Logique dynamique du formulaire, manipulation du DOM.
* **jspdf:** Bibliothèque JavaScript pour la génération de PDF côté client.
* **html2canvas:** Bibliothèque JavaScript pour la capture d'écran de contenu HTML (utilisée avec jspdf pour des cas plus complexes, mais pour ce besoin simple, jspdf direct est suffisant).

## Comment Utiliser

1.  **Cloner le dépôt:**
    ```bash
    git clone [https://github.com/votre-utilisateur/Formulaire.git](https://github.com/votre-utilisateur/Formulaire.git)
    cd Formulaire
    ```
2.  **Ouvrir `index.html`:** Ouvrez simplement le fichier `index.html` dans votre navigateur web.

## Guide d'Utilisation (docs/guide-utilisation.md)

Ce fichier contiendra des instructions plus détaillées sur l'utilisation du formulaire.

```markdown
# Guide d'utilisation du formulaire dynamique

Ce guide vous expliquera comment utiliser le formulaire dynamique pour explorer les phases, activités, tâches, problématiques, résultats attendus et compétences.

## 1. Sélection d'une Phase

* Au chargement de la page, le premier menu déroulant "Sélectionner une Phase" est actif.
* Cliquez sur le menu déroulant et choisissez l'une des phases disponibles (ex: "Phase 1 : L’avant-projet").
* Une fois une phase sélectionnée, le menu déroulant suivant "Sélectionner une Activité" apparaîtra et sera peuplé avec les activités correspondantes à la phase choisie.

## 2. Sélection d'une Activité

* Après avoir choisi une phase, le menu "Sélectionner une Activité" est devenu visible.
* Sélectionnez une activité dans ce menu (ex: "Activité 1.1 – L’esquisse, les études préliminaires et le diagnostic").
* La sélection d'une activité activera et peuplera le menu "Sélectionner une Tâche professionnelle" et le menu "Sélectionner une Problématique" avec les options pertinentes.

## 3. Sélection d'une Tâche professionnelle

* Une fois l'activité sélectionnée, choisissez une tâche professionnelle dans le menu "Sélectionner une Tâche professionnelle" (ex: "Effectuer un relevé d’ouvrage").
* Ceci activera et peuplera le menu "Sélectionner un Résultat attendu" et le menu "Sélectionner une Compétence visée".

## 4. Sélection d'une Problématique

* Le menu "Sélectionner une Problématique" est peuplé automatiquement dès la sélection d'une activité.
* Vous pouvez choisir une problématique spécifique pour voir son détail (bien que dans cette version, la sélection de problématique ne déclenche pas d'affichage supplémentaire, elle est prête pour de futures extensions).

## 5. Sélection d'un Résultat attendu

* Le menu "Sélectionner un Résultat attendu" est peuplé automatiquement dès la sélection d'une tâche professionnelle.
* Vous pouvez choisir un résultat attendu spécifique.

## 6. Sélection d'une Compétence visée

* Le menu "Sélectionner une Compétence visée" est peuplé automatiquement dès la sélection d'une tâche professionnelle.
* Sélectionnez une compétence dans ce menu (ex: "C3.1 (Effectuer un relevé d’ouvrage)").
* Une fois la compétence sélectionnée, la section "Détails de la Compétence" apparaîtra en dessous, affichant les informations "Être capable de", "Conditions/Ressources" et "Critères d'évaluation" pour la compétence choisie.
* La section "Ressources "On donne"" sera également visible.

## 7-8. Détails de la Compétence

* Ces sections s'affichent automatiquement après la sélection d'une compétence et fournissent des informations détaillées sur la compétence choisie.

## 9. Ressources "On donne"

* Cette section apparaît également après la sélection d'une compétence et liste toutes les ressources "On donne" disponibles pour le projet.

## Générer un PDF

* Une fois que vous avez sélectionné une compétence (et donc que les détails sont affichés), un bouton "Générer PDF" apparaît en bas de la page.
* Cliquez sur ce bouton pour générer un fichier PDF récapitulatif de toutes vos sélections et des détails de la compétence affichés.
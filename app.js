// app.js
// Gère l'affichage des niveaux, thèmes, exercices, corrections et statistiques

document.addEventListener('DOMContentLoaded', () => {
    // Éléments DOM
    const levelTabs = document.getElementById('levelTabs');
    const themeMenuDiv = document.getElementById('themeMenu');
    const exercisesContainer = document.getElementById('exercisesContainer');
    const statsArea = document.getElementById('statsArea');
    const scoreValueSpan = document.getElementById('scoreValue');
    const adviceMessageSpan = document.getElementById('adviceMessage');
    const resetStatsBtn = document.getElementById('resetStatsBtn');

    // État global
    let currentLevelId = 'beginner';   // beginner, intermediate, advanced
    let currentThemeIndex = 0;
    let userAnswers = new Map();         // index de l'exercice -> réponse choisie (0-3)
    let feedbacks = new Map();           // index -> { msg, type }
    let scoreDisplayed = false;

    // Récupération des données depuis window.grammarData (défini dans exercises.js)
    function getCurrentLevel() {
        return grammarData[currentLevelId];
    }

    function getCurrentTheme() {
        const level = getCurrentLevel();
        return level ? level.themes[currentThemeIndex] : null;
    }

    // Construire les onglets de niveau
    function buildLevelTabs() {
        const btns = levelTabs.querySelectorAll('.level-btn');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const level = btn.getAttribute('data-level');
                if (level && grammarData[level]) {
                    currentLevelId = level;
                    // Mettre à jour l'apparence active
                    btns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    // Réinitialiser l'état
                    currentThemeIndex = 0;
                    userAnswers.clear();
                    feedbacks.clear();
                    scoreDisplayed = false;
                    statsArea.classList.remove('show');
                    // Recharger les thèmes
                    renderThemesMenu();
                    // Charger le premier thème du niveau
                    const firstTheme = getCurrentLevel()?.themes[0];
                    if (firstTheme) {
                        currentThemeIndex = 0;
                        renderExercises(firstTheme);
                    } else {
                        exercisesContainer.innerHTML = '<div class="empty-message">Aucun thème disponible pour ce niveau.</div>';
                    }
                }
            });
        });
    }

    // Afficher les boutons des thèmes pour le niveau courant
    function renderThemesMenu() {
        const level = getCurrentLevel();
        if (!level || !level.themes.length) {
            themeMenuDiv.innerHTML = '<div class="loading-message">Aucun thème trouvé.</div>';
            return;
        }
        themeMenuDiv.innerHTML = '';
        level.themes.forEach((theme, idx) => {
            const btn = document.createElement('button');
            btn.textContent = theme.name;
            btn.classList.add('theme-btn');
            if (idx === currentThemeIndex) btn.classList.add('active');
            btn.addEventListener('click', () => {
                // Changer de thème
                currentThemeIndex = idx;
                // Réinitialiser les réponses pour ce nouveau thème
                userAnswers.clear();
                feedbacks.clear();
                scoreDisplayed = false;
                statsArea.classList.remove('show');
                // Mettre à jour l'aspect actif
                document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                // Afficher les exercices du thème
                renderExercises(theme);
            });
            themeMenuDiv.appendChild(btn);
        });
    }

    // Générer l'affichage des exercices d'un thème
    function renderExercises(theme) {
        if (!theme || !theme.exercises.length) {
            exercisesContainer.innerHTML = '<div class="empty-message">Ce thème ne contient pas encore d\'exercices.</div>';
            return;
        }
        exercisesContainer.innerHTML = '';
        const gridDiv = document.createElement('div');
        gridDiv.className = 'exercises-grid';

        theme.exercises.forEach((ex, idx) => {
            const card = document.createElement('div');
            card.className = 'exercise-card';
            card.dataset.index = idx;

            const questionDiv = document.createElement('div');
            questionDiv.className = 'question-text';
            questionDiv.textContent = `${idx+1}. ${ex.question}`;
            card.appendChild(questionDiv);

            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options';
            ex.options.forEach((opt, optIdx) => {
                const label = document.createElement('label');
                label.className = 'opt-label';
                label.textContent = opt;
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = `q${idx}`;
                radio.value = optIdx;
                radio.style.display = 'none';
                radio.addEventListener('change', (e) => {
                    if (e.target.checked) {
                        handleAnswer(idx, optIdx, ex, card);
                        updateOptionStyle(card, optIdx);
                    }
                });
                label.prepend(radio);
                optionsDiv.appendChild(label);
            });
            card.appendChild(optionsDiv);

            const feedbackDiv = document.createElement('div');
            feedbackDiv.className = 'feedback';
            feedbackDiv.id = `fb-${idx}`;
            if (feedbacks.has(idx)) {
                const fb = feedbacks.get(idx);
                feedbackDiv.innerHTML = fb.msg;
                feedbackDiv.className = `feedback ${fb.type}`;
            }
            card.appendChild(feedbackDiv);
            gridDiv.appendChild(card);
        });

        // Bouton "Valider le thème"
        const submitBtn = document.createElement('button');
        submitBtn.textContent = '📊 Voir mon score et mes conseils (thème complet)';
        submitBtn.classList.add('submit-theme-btn');
        submitBtn.addEventListener('click', () => computeAndShowStats(theme));
        gridDiv.appendChild(submitBtn);
        exercisesContainer.appendChild(gridDiv);
    }

    function updateOptionStyle(card, selectedIdx) {
        const labels = card.querySelectorAll('.opt-label');
        labels.forEach((label, i) => {
            if (i === selectedIdx) label.classList.add('selected');
            else label.classList.remove('selected');
        });
    }

    function handleAnswer(qIndex, selectedOpt, exercise, card) {
        const isCorrect = (selectedOpt === exercise.correct);
        const feedbackDiv = document.getElementById(`fb-${qIndex}`);
        let msg = '';
        let type = '';
        if (isCorrect) {
            msg = `✅ Correct ! ${exercise.explanation || ''}`;
            type = 'correct';
        } else {
            const correctAnswerText = exercise.options[exercise.correct];
            msg = `❌ Faux ! La bonne réponse était "${correctAnswerText}". ${exercise.explanation}`;
            type = 'wrong';
        }
        feedbacks.set(qIndex, { msg, type });
        if (feedbackDiv) {
            feedbackDiv.innerHTML = msg;
            feedbackDiv.className = `feedback ${type}`;
        }
        userAnswers.set(qIndex, selectedOpt);
        // Si les stats étaient affichées, on les cache car l'utilisateur a modifié une réponse
        if (scoreDisplayed) {
            statsArea.classList.remove('show');
            scoreDisplayed = false;
        }
    }

    function computeAndShowStats(theme) {
        const total = theme.exercises.length;
        let correctCount = 0;
        for (let i = 0; i < total; i++) {
            const selected = userAnswers.get(i);
            if (selected !== undefined && selected === theme.exercises[i].correct) {
                correctCount++;
            }
        }
        const percent = Math.round((correctCount / total) * 100);
        scoreValueSpan.textContent = `${percent}% (${correctCount}/${total})`;
        let advice = '';
        if (percent > 80) {
            advice = '🎉 Continue comme ça, tes points forts sont solides !';
        } else {
            advice = '📚 Travaille sur les questions incorrectes pour t’améliorer. Relis les explications !';
        }
        adviceMessageSpan.textContent = advice;
        statsArea.classList.add('show');
        scoreDisplayed = true;
    }

    resetStatsBtn.addEventListener('click', () => {
        statsArea.classList.remove('show');
        scoreDisplayed = false;
    });

    // Initialisation
    buildLevelTabs();
    renderThemesMenu();
    // Charger le premier thème du niveau Beginner
    const firstTheme = getCurrentLevel()?.themes[0];
    if (firstTheme) {
        renderExercises(firstTheme);
    } else {
        exercisesContainer.innerHTML = '<div class="empty-message">Bienvenue ! Sélectionnez un thème pour commencer.</div>';
    }
});
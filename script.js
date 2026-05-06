(function () {
  'use strict';

  const QUESTIONS = [
    {
      id: 1,
      text: 'Haal je data uit meer dan één systeem voor een rapportage?'
    },
    {
      id: 2,
      text: 'Worden gegevens ergens handmatig overgetypt of gekopieerd?'
    },
    {
      id: 3,
      text: 'Heeft jouw team Excel-bestanden die door meerdere mensen worden aangepast?'
    },
    {
      id: 4,
      text: 'Duurt het meer dan een dag om een actueel overzicht te maken van klanten, voorraden of taken?'
    },
    {
      id: 5,
      text: 'Zijn er taken die blijven liggen als één persoon afwezig is?'
    }
  ];

  const RESULTS = {
    low: {
      level: 'low',
      title: 'Beperkte urgentie — maar er valt vaak meer te winnen dan je denkt',
      message:
        'Op basis van je antwoorden draait je organisatie redelijk strak. Toch zit er bijna altijd onzichtbaar handmatig werk in processen. Een korte verkenning helpt om de minder zichtbare kansen boven tafel te krijgen.',
      tips: [
        'Vraag je team waar zij elke week tijd op verliezen — vaak weet de werkvloer het beter dan de rapportage.',
        'Begin klein: één proces optimaliseren is waardevoller dan vijf experimenten tegelijk.',
        'Meet de doorlooptijd van één terugkerende taak en bekijk waar de wachttijd zit.'
      ]
    },
    mid: {
      level: 'mid',
      title: 'Duidelijke kansen — een gerichte verbetering levert snel resultaat',
      message:
        'Je organisatie heeft meerdere processen waarin handmatig werk en versnipperde data tijd kosten. Met één goed gekozen verbetering zie je binnen weken concreet effect.',
      tips: [
        'Kies het proces dat het vaakst terugkomt en de meeste irritatie oplevert — niet het grootste of meest complexe.',
        'Bepaal vooraf wat "beter" betekent: sneller, minder fouten, of minder afhankelijkheid van één persoon.',
        'Begin bij data-integratie: één bron van waarheid scheelt vaak meer dan een nieuwe AI-tool.',
        'Plan een korte sessie met je team om de top 3 tijdvreters te benoemen.'
      ]
    },
    high: {
      level: 'high',
      title: 'Structurele tijd- en geldverspilling — hier valt grote winst te halen',
      message:
        'Dit zijn geen kleine ergernissen. Op meerdere fronten kost handmatig werk en versnipperde data je organisatie structureel tijd, geld én mensen. De goede nieuws: juist hier is de winst het grootst en het snelst zichtbaar.',
      tips: [
        'Begin met het proces met de hoogste frequentie × tijdsverspilling — dat is je grootste hefboom.',
        'Centraliseer eerst je data, automatiseer daarna. Andersom werkt zelden.',
        'Maak een simpele businesscase: hoeveel uur per week × uurtarief = jaarlijkse besparing.',
        'Zorg dat kennis niet bij één persoon hangt — documenteer of automatiseer kritieke handelingen.',
        'Plan een quickscan-sessie om binnen 1–2 weken een eerste verbetering live te hebben.'
      ]
    }
  };

  const form = document.getElementById('quickscan-form');
  const submitBtn = document.getElementById('submit-btn');
  const resetBtn = document.getElementById('reset-btn');
  const resultEl = document.getElementById('result');
  const resultTitle = document.getElementById('result-title');
  const resultScore = document.getElementById('result-score');
  const resultMessage = document.getElementById('result-message');
  const resultDetails = document.getElementById('result-details');
  const progressFill = document.getElementById('progress');
  const progressText = document.getElementById('progress-text');
  const yearEl = document.getElementById('year');

  yearEl.textContent = new Date().getFullYear();

  // Build questions
  QUESTIONS.forEach((q) => {
    const row = document.createElement('div');
    row.className = 'question';
    row.dataset.questionId = String(q.id);
    row.innerHTML = `
      <div class="question-number">${q.id}</div>
      <div class="question-text">${q.text}</div>
      <div class="choice-group" role="radiogroup" aria-label="Vraag ${q.id}">
        <div class="choice yes">
          <input type="radio" id="q${q.id}-yes" name="q${q.id}" value="yes" />
          <label for="q${q.id}-yes">Ja</label>
        </div>
        <div class="choice no">
          <input type="radio" id="q${q.id}-no" name="q${q.id}" value="no" />
          <label for="q${q.id}-no">Nee</label>
        </div>
      </div>
    `;
    form.appendChild(row);
  });

  function updateProgress() {
    const answered = QUESTIONS.filter((q) => form.querySelector(`input[name="q${q.id}"]:checked`)).length;
    const pct = (answered / QUESTIONS.length) * 100;
    progressFill.style.width = pct + '%';
    progressText.textContent = `${answered} van ${QUESTIONS.length} beantwoord`;
    submitBtn.disabled = answered < QUESTIONS.length;

    QUESTIONS.forEach((q) => {
      const row = form.querySelector(`.question[data-question-id="${q.id}"]`);
      const isAnswered = !!form.querySelector(`input[name="q${q.id}"]:checked`);
      row.classList.toggle('answered', isAnswered);
    });
  }

  form.addEventListener('change', updateProgress);

  function getResultLevel(yesCount) {
    if (yesCount <= 2) return RESULTS.low;
    if (yesCount <= 4) return RESULTS.mid;
    return RESULTS.high;
  }

  function showResult() {
    const yesCount = QUESTIONS.filter(
      (q) => form.querySelector(`input[name="q${q.id}"]:checked`)?.value === 'yes'
    ).length;

    const result = getResultLevel(yesCount);

    resultEl.className = 'result level-' + result.level;
    resultTitle.textContent = result.title;
    resultScore.textContent = `${yesCount} van ${QUESTIONS.length} keer 'ja'`;
    resultMessage.textContent = result.message;

    resultDetails.innerHTML =
      '<h4>Aanbevolen volgende stappen</h4><ul>' +
      result.tips.map((t) => `<li>${t}</li>`).join('') +
      '</ul>';

    resultEl.hidden = false;
    resetBtn.hidden = false;
    submitBtn.hidden = true;

    // smooth scroll into view
    setTimeout(() => {
      resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }

  function resetScan() {
    form.reset();
    updateProgress();
    resultEl.hidden = true;
    resetBtn.hidden = true;
    submitBtn.hidden = false;
    submitBtn.disabled = true;
    document.getElementById('quickscan').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  submitBtn.addEventListener('click', showResult);
  resetBtn.addEventListener('click', resetScan);

  updateProgress();
})();

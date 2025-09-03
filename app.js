// ===== Config =====
const CONFIG = {
  MAX_SPOKES: 8,
  CONFIRMATION_KEEPS: 2,   // Needs 2 keeps to qualify
  EVICTION_SKIPS: 3,       // 3 skips on a spoke evicts it
  TOTAL_TOPICS: 50,
  HAND_SIZE: 5,
  PICKS_PER_HAND: 2
};

// ===== Topic pool (50) =====
const TOPICS = [
  { title: "Healthcare Access and Affordability", icon: "fa-solid fa-stethoscope", desc: "Lower costs and broader coverage" },
  { title: "Climate Change and Environmental Protection", icon: "fa-solid fa-leaf", desc: "Cut emissions and protect habitats" },
  { title: "Economic Inequality and Job Security", icon: "fa-solid fa-briefcase", desc: "Stability and fair opportunity" },
  { title: "Education Quality and Funding", icon: "fa-solid fa-school", desc: "Better schools and resources" },
  { title: "Gun Laws and Public Safety", icon: "fa-solid fa-shield-halved", desc: "Safety measures and rights" },
  { title: "Reproductive Rights and Abortion Access", icon: "fa-solid fa-heart-pulse", desc: "Access and privacy in care" },
  { title: "Policing and Criminal Justice Reform", icon: "fa-solid fa-scale-balanced", desc: "Fairness and accountability" },
  { title: "Immigration Policy", icon: "fa-solid fa-passport", desc: "Border, visas, and paths" },
  { title: "Civil Rights and Social Justice", icon: "fa-solid fa-handshake", desc: "Equal protection under law" },
  { title: "Taxation and Government Spending", icon: "fa-solid fa-coins", desc: "Priorities and tradeoffs" },
  { title: "Affordable Housing and Homelessness", icon: "fa-solid fa-house", desc: "Supply, zoning, and services" },
  { title: "Voting Rights and Electoral Integrity", icon: "fa-solid fa-square-check", desc: "Ballot access and trust" },
  { title: "Foreign Policy and National Security", icon: "fa-solid fa-globe", desc: "Alliances and defense" },
  { title: "Infrastructure and Transportation", icon: "fa-solid fa-road", desc: "Build and maintain systems" },
  { title: "Technology and Data Privacy", icon: "fa-solid fa-user-shield", desc: "Rights in a digital world" },
  { title: "Corporate Regulation and Consumer Protection", icon: "fa-solid fa-scale-unbalanced", desc: "Rules for fair markets" },
  { title: "Wages and Labor Rights", icon: "fa-solid fa-people-carry-box", desc: "Pay, benefits and safety" },
  { title: "Support for Small Businesses and Entrepreneurship", icon: "fa-solid fa-shop", desc: "Capital and less red tape" },
  { title: "Mental Health and Addiction Services", icon: "fa-solid fa-brain", desc: "Care access and stigma" },
  { title: "Campaign Finance Reform", icon: "fa-solid fa-landmark", desc: "Money in politics rules" },
  { title: "Policing in Schools", icon: "fa-solid fa-graduation-cap", desc: "Safety, discipline and equity" },
  { title: "Government Role in Childcare and Parental Leave", icon: "fa-solid fa-baby-carriage", desc: "Care access and paid time" },
  { title: "Internet Access and Digital Equity", icon: "fa-solid fa-wifi", desc: "Affordable broadband access" },
  { title: "Book Bans and Curriculum Restrictions in Schools", icon: "fa-solid fa-book", desc: "Content rules and oversight" },
  { title: "Religious Freedom and the Role of Religion in Government", icon: "fa-solid fa-church", desc: "Balance rights and neutrality" },
  { title: "DEI Programs and Workplace Policy", icon: "fa-solid fa-people-group", desc: "Hiring, inclusion and outcomes" },
  { title: "Israel-Palestine Conflict / War in Gaza", icon: "fa-solid fa-dove", desc: "War, civilians and diplomacy" },
  { title: "U.S. Military Support to Ukraine", icon: "fa-solid fa-helmet-safety", desc: "Aid, weapons and oversight" },
  { title: "U.S.-China Relations and Taiwan", icon: "fa-solid fa-dragon", desc: "Trade, tech and deterrence" },
  { title: "Defense Treaties and NATO Commitments", icon: "fa-solid fa-shield", desc: "Allied burden sharing" },
  { title: "Foreign Aid and International Development", icon: "fa-solid fa-hand-holding-heart", desc: "Aid goals and accountability" },
  { title: "Global Refugee and Asylum Policies", icon: "fa-solid fa-person-walking-luggage", desc: "Protection and resettlement" },
  { title: "American Tariff Policy", icon: "fa-solid fa-arrow-trend-up", desc: "Tradeoffs for growth and jobs" },
  { title: "Supply Chain Resilience and Domestic Manufacturing", icon: "fa-solid fa-industry", desc: "Reshoring and security" },
  { title: "Universal Basic Income (UBI)", icon: "fa-solid fa-hand-holding-dollar", desc: "Cash floors and work" },
  { title: "Artificial Intelligence and Job Displacement", icon: "fa-solid fa-robot", desc: "Automation and training" },
  { title: "Online Censorship and Platform Accountability", icon: "fa-solid fa-scale-balanced", desc: "Speech rules and harms" },
  { title: "TikTok and Foreign-Owned Social Media Regulation", icon: "fa-brands fa-tiktok", desc: "Data, youth and security" },
  { title: "Misinformation and Algorithms in Democracy", icon: "fa-solid fa-diagram-project", desc: "Ranking, reach and trust" },
  { title: "Pandemic Preparedness and Vaccine Mandates", icon: "fa-solid fa-syringe", desc: "Readiness and public health" },
  { title: "Water Access and Drought Management", icon: "fa-solid fa-droplet", desc: "Scarcity and conservation" },
  { title: "Food Security and Agricultural Policy", icon: "fa-solid fa-bowl-food", desc: "Farms, prices and aid" },
  { title: "Natural Disasters and Climate Resilience Funding", icon: "fa-solid fa-house-flood-water", desc: "Recovery and prevention" },
  { title: "January 6th and the 2020 Election", icon: "fa-solid fa-flag-usa", desc: "Accountability and norms" },
  { title: "Term Limits and Congressional Reform", icon: "fa-solid fa-gavel", desc: "Incentives and turnover" },
  { title: "National Debt and Deficit Spending", icon: "fa-solid fa-scale-balanced", desc: "Tradeoffs and growth" },
  { title: "Healthcare for Veterans and Military Support", icon: "fa-solid fa-medal", desc: "Benefits and care" },
  { title: "Space Exploration and Federal Investment", icon: "fa-solid fa-rocket", desc: "Science and industry" },
  { title: "Cryptocurrency and Digital Currency Regulation", icon: "fa-solid fa-coins", desc: "Innovation and risk" },
  { title: "Social Security and Medicare Reform", icon: "fa-solid fa-people-group", desc: "Solvency and promises" }
];

// Short labels for radar
const LABEL = {
  "Healthcare Access and Affordability": "Healthcare",
  "Climate Change and Environmental Protection": "Climate",
  "Economic Inequality and Job Security": "Inequality",
  "Education Quality and Funding": "Education",
  "Gun Laws and Public Safety": "PublicSafety",
  "Reproductive Rights and Abortion Access": "Reproductive",
  "Policing and Criminal Justice Reform": "Justice",
  "Immigration Policy": "Immigration",
  "Civil Rights and Social Justice": "CivilRights",
  "Taxation and Government Spending": "Taxes",
  "Affordable Housing and Homelessness": "Housing",
  "Voting Rights and Electoral Integrity": "Voting",
  "Foreign Policy and National Security": "Security",
  "Infrastructure and Transportation": "Infrastructure",
  "Technology and Data Privacy": "Privacy",
  "Corporate Regulation and Consumer Protection": "Consumer",
  "Wages and Labor Rights": "Labor",
  "Support for Small Businesses and Entrepreneurship": "SmallBiz",
  "Mental Health and Addiction Services": "MentalHealth",
  "Campaign Finance Reform": "CampaignFinance",
  "Policing in Schools": "SchoolSafety",
  "Government Role in Childcare and Parental Leave": "Childcare",
  "Internet Access and Digital Equity": "Broadband",
  "Book Bans and Curriculum Restrictions in Schools": "Curriculum",
  "Religious Freedom and the Role of Religion in Government": "Religion",
  "DEI Programs and Workplace Policy": "DEI",
  "Israel-Palestine Conflict / War in Gaza": "Gaza",
  "U.S. Military Support to Ukraine": "Ukraine",
  "U.S.-China Relations and Taiwan": "China",
  "Defense Treaties and NATO Commitments": "NATO",
  "Foreign Aid and International Development": "ForeignAid",
  "Global Refugee and Asylum Policies": "Refugees",
  "American Tariff Policy": "Tariffs",
  "Supply Chain Resilience and Domestic Manufacturing": "SupplyChain",
  "Universal Basic Income (UBI)": "UBI",
  "Artificial Intelligence and Job Displacement": "AI",
  "Online Censorship and Platform Accountability": "Platforms",
  "TikTok and Foreign-Owned Social Media Regulation": "TikTok",
  "Misinformation and Algorithms in Democracy": "Algorithms",
  "Pandemic Preparedness and Vaccine Mandates": "Pandemic",
  "Water Access and Drought Management": "Water",
  "Food Security and Agricultural Policy": "Food",
  "Natural Disasters and Climate Resilience Funding": "Disasters",
  "January 6th and the 2020 Election": "Jan6",
  "Term Limits and Congressional Reform": "TermLimits",
  "National Debt and Deficit Spending": "Debt",
  "Healthcare for Veterans and Military Support": "Veterans",
  "Space Exploration and Federal Investment": "Space",
  "Cryptocurrency and Digital Currency Regulation": "Crypto",
  "Social Security and Medicare Reform": "SocialSecurity"
};
const oneWordLabel = t => LABEL[t] || "Topic";

// ===== State =====
const state = {
  pool: [],
  deck: [],
  keepPile: [],
  discardPile: [],
  hand: [],
  selectedIds: new Set(),
  round: 1,
  roundDeckTotal: 0,
  radar: null,
  finalRadar: null,
  spokes: Array(CONFIG.MAX_SPOKES).fill(null),
  labelsLive: Array(CONFIG.MAX_SPOKES).fill("")
};

// ===== DOM =====
const els = {
  progressText: document.getElementById('progressText'),
  barInner: document.getElementById('barInner'),
  cardArea: document.getElementById('cardArea'),
  radarCanvas: document.getElementById('radarChart'),
  summary: document.getElementById('summary'),
  finalRadar: document.getElementById('finalRadar'),
  summaryList: document.getElementById('summaryList'),
  restartBtn: document.getElementById('restartBtn'),
  deckLeft: document.getElementById('deckLeft'),
  keepCount: document.getElementById('keepCount'),
  discardCount: document.getElementById('discardCount'),
  roundNum: document.getElementById('roundNum')
};

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  bootstrapPool();
  startRound(1);
  initRadar();
  bindControls();
});

// ===== Pool & Deck =====
function bootstrapPool() {
  state.pool = shuffle(TOPICS.map((t, i) => ({
    ...t,
    id: i,
    shown: 0,
    kept: 0,
    onSpokeSkips: 0,
    onSpokeIndex: -1,
    firstKeptAt: Infinity
  })));
}

function startRound(n) {
  state.round = n;
  state.selectedIds = new Set();
  state.keepPile = [];
  state.discardPile = [];
  state.hand = [];
  state.deck = n === 1 ? shuffle([...state.pool]) : shuffle([...state.prevKeepPile]);
  state.roundDeckTotal = state.deck.length;
  updateProgress();
  updateCounters();
  dealHand();
}

function dealHand() {
  if (state.deck.length === 0) {
    endRound();
    return;
  }
  const count = Math.min(CONFIG.HAND_SIZE, state.deck.length);
  state.hand = [];
  for (let i = 0; i < count; i++) {
    const t = state.deck.shift();
    t.shown += 1;
    state.hand.push(t);
  }
  state.selectedIds.clear();
  renderHand();
  updateProgress();
  updateCounters();
}

function renderHand() {
  const instructionText = "Pick two topics from these five";
  const cardsHtml = state.hand.map(t => `
    <div class="card selectable" data-topic-id="${t.id}">
      <div class="title"><i class="${t.icon}" aria-hidden="true"></i><span>${t.title}</span></div>
      <div class="subtitle">${t.desc}</div>
    </div>
  `).join('');

  els.cardArea.innerHTML =  `
    <div class="instruction">${instructionText}</div>
    <div class="five-card-container">${cardsHtml}</div>
  `;

  const container = els.cardArea.querySelector('.five-card-container');
  container.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => onCardClick(card, container));
  });
}

function onCardClick(cardEl, container) {
  const id = parseInt(cardEl.dataset.topicId);
  const selected = state.selectedIds.has(id);
  if (selected) {
    state.selectedIds.delete(id);
    cardEl.classList.remove('selected');
    return;
  }
  if (state.selectedIds.size >= CONFIG.PICKS_PER_HAND) return;

  state.selectedIds.add(id);
  cardEl.classList.add('selected');

  if (state.selectedIds.size === CONFIG.PICKS_PER_HAND) {
    // Lock further input, run animations, then resolve
    container.style.pointerEvents = 'none';
    const selectedCards = Array.from(container.querySelectorAll('.card'))
      .filter(el => state.selectedIds.has(parseInt(el.dataset.topicId)));
    const rejectedCards = Array.from(container.querySelectorAll('.card'))
      .filter(el => !state.selectedIds.has(parseInt(el.dataset.topicId)));

    // Animate
    setTimeout(() => {
      selectedCards.forEach(el => el.classList.add('to-keep'));
      rejectedCards.forEach(el => el.classList.add('to-discard'));
    }, 50);

    setTimeout(resolveHand, 380);
  }
}

function resolveHand() {
  const selected = state.hand.filter(t => state.selectedIds.has(t.id));
  const rejected = state.hand.filter(t => !state.selectedIds.has(t.id));

  // Update keeps and timestamps
  const now = performance.now();
  selected.forEach(t => {
    t.kept += 1;
    if (t.firstKeptAt === Infinity) t.firstKeptAt = now;
  });

  // Rejected penalty: increment skips for any incumbent on a spoke
  rejected.forEach(t => {
    if (t.onSpokeIndex !== -1) {
      t.onSpokeSkips += 1;
      if (t.onSpokeSkips >= CONFIG.EVICTION_SKIPS) {
        evictFromSpoke(t.onSpokeIndex);
      }
    }
  });

  // Placement / replacement policy: snappy
  selected.forEach(t => {
    if (t.kept >= CONFIG.CONFIRMATION_KEEPS && t.onSpokeIndex === -1) {
      const free = firstFreeSpoke();
      if (free !== -1) {
        placeOnSpoke(t, free);
      } else {
        const vulnerable = findMostVulnerableSpokeHolder();
        if (vulnerable) {
          const idx = vulnerable.onSpokeIndex;
          evictFromSpoke(idx);
          placeOnSpoke(t, idx);
        }
      }
    }
  });

  // Move cards to piles
  state.keepPile.push(...selected);
  state.discardPile.push(...rejected);

  // Next hand or round end
  if (state.deck.length > 0) {
    dealHand();
  } else {
    endRound();
  }

  updateCounters();
}

function endRound() {
  // Finish after full round if spokes are full
  if (spokesFull()) {
    showSummary();
    return;
  }
  // Prepare next round from keep pile, if any
  if (state.keepPile.length > 0) {
    state.prevKeepPile = [...state.keepPile];
    startRound(state.round + 1);
  } else {
    // Edge: nothing kept; reshuffle entire pool to avoid dead-end
    state.prevKeepPile = [...state.pool];
    startRound(state.round + 1);
  }
}

// ===== Progress & Counters =====
function updateProgress() {
  const used = state.roundDeckTotal - state.deck.length;
  const total = Math.max(1, state.roundDeckTotal);
  if (els.progressText) els.progressText.textContent = `Round ${state.round}: ${used} of ${total} cards`;
  if (els.barInner) els.barInner.style.width = `${(used / total) * 100}%`;
}

function updateCounters() {
  if (els.deckLeft) els.deckLeft.textContent = `Deck: ${state.deck.length}`;
  if (els.keepCount) els.keepCount.textContent = `Keep: ${state.keepPile.length}`;
  if (els.discardCount) els.discardCount.textContent = `Discard: ${state.discardPile.length}`;
  if (els.roundNum) els.roundNum.textContent = `Round: ${state.round}`;
}

// ===== Live radar =====
function initRadar() {
  els.radarCanvas.width = 400;
  els.radarCanvas.height = 400;
  els.radarCanvas.style.width = '400px';
  els.radarCanvas.style.height = '400px';

  const ctx = els.radarCanvas.getContext('2d');
  state.radar = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [...state.labelsLive],
      datasets: [{
        label: 'Selected Topics',
        data: Array(CONFIG.MAX_SPOKES).fill(0),
        fill: true,
        pointRadius: 0,
        pointHitRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: 'rgba(59,130,246,0.10)',
        borderColor: 'rgba(59,130,246,0.85)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      animation: { duration: 0 },
      layout: { padding: 42 },
      elements: { point: { radius: 0, hitRadius: 0, hoverRadius: 0 } },
      scales: {
        r: {
          min: 0, max: 1,
          ticks: { display: false },
          grid: { circular: true, color: 'rgba(255,255,255,0.10)' },
          angleLines: { color: 'rgba(255,255,255,0.18)' },
          pointLabels: {
            display: true, color: '#e5e7eb', padding: 12,
            font: { size: 16, weight: '700', family: 'system-ui, -apple-system, Segoe UI, Roboto, Arial' }
          }
        }
      },
      plugins: { legend: { display: false }, tooltip: { enabled: false } }
    }
  });
}

function placeOnSpoke(topic, spokeIndex) {
  state.spokes[spokeIndex] = topic.id;
  topic.onSpokeIndex = spokeIndex;
  topic.onSpokeSkips = 0;

  state.labelsLive[spokeIndex] = oneWordLabel(topic.title);
  state.radar.data.labels = [...state.labelsLive];
  state.radar.data.datasets[0].data[spokeIndex] = 1;
  state.radar.update('none');
}

function evictFromSpoke(spokeIndex) {
  const id = state.spokes[spokeIndex];
  if (id == null) return;
  const topic = getById(id);
  topic.onSpokeIndex = -1;

  state.spokes[spokeIndex] = null;
  state.labelsLive[spokeIndex] = "";
  state.radar.data.labels = [...state.labelsLive];
  state.radar.data.datasets[0].data[spokeIndex] = 0;
  state.radar.update('none');
}

function findMostVulnerableSpokeHolder() {
  let most = null;
  let bestScore = -Infinity;
  state.spokes.forEach(id => {
    if (id === null) return;
    const topic = getById(id);
    const score = topic.onSpokeSkips * 2 - topic.kept; // higher = more vulnerable
    if (score > bestScore) {
      bestScore = score;
      most = topic;
    }
  });
  return most;
}

function spokesFull() {
  return state.spokes.filter(Boolean).length === CONFIG.MAX_SPOKES;
}

// ===== Summary =====
function showSummary() {
  // Winners are whatever is on the spokes at the end of the round
  const winners = state.spokes.map(id => getById(id)).filter(Boolean);

  // If fewer than 8 are filled, pad with best candidates
  while (winners.length < CONFIG.MAX_SPOKES) {
    const c = bestCandidate(winners.map(w => w.id));
    if (!c) break;
    winners.push(c);
  }

  els.summaryList.innerHTML = winners
    .map(t => `<li><i class="${t.icon}" aria-hidden="true"></i> ${t.title}</li>`)
    .join('');

  // Fixed size to avoid squish
  els.finalRadar.width = 500;
  els.finalRadar.height = 500;
  els.finalRadar.style.width = '500px';
  els.finalRadar.style.height = '500px';

  const labels = winners.map(t => oneWordLabel(t.title));
  const values = winners.map(() => 1);

  const ctx = els.finalRadar.getContext('2d');
  if (state.finalRadar) state.finalRadar.destroy();
  state.finalRadar = new Chart(ctx, {
    type: 'radar',
    data: {
      labels,
      datasets: [{
        label: "Your 8 Topics",
        data: values,
        fill: true,
        pointRadius: 0,
        pointHitRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: 'rgba(59,130,246,0.20)',
        borderColor: 'rgba(59,130,246,1)',
        borderWidth: 3
      }]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      animation: { duration: 600 },
      layout: { padding: 42 },
      elements: { point: { radius: 0, hitRadius: 0, hoverRadius: 0 } },
      scales: {
        r: {
          min: 0, max: 1,
          ticks: { display: false },
          grid: { circular: true, color: 'rgba(255,255,255,0.10)' },
          angleLines: { color: 'rgba(255,255,255,0.18)' },
          pointLabels: {
            display: true, color: '#e5e7eb', padding: 12,
            font: { size: 16, weight: '700', family: 'system-ui, -apple-system, Segoe UI, Roboto, Arial' }
          }
        }
      },
      plugins: { legend: { display: false }, tooltip: { enabled: false } }
    }
  });

  els.summary.classList.remove('hidden');
}

// ===== Spoke helpers =====
function firstFreeSpoke() {
  for (let i = 0; i < CONFIG.MAX_SPOKES; i++) {
    if (state.spokes[i] === null) return i;
  }
  return -1;
}

function bestCandidate(excludeIds = []) {
  const ex = new Set(excludeIds);
  const cands = state.pool.filter(t =>
    t.kept >= CONFIG.CONFIRMATION_KEEPS && t.onSpokeIndex === -1 && !ex.has(t.id)
  );
  if (!cands.length) return null;
  cands.sort((a, b) => {
    if (b.kept !== a.kept) return b.kept - a.kept;
    if (a.firstKeptAt !== b.firstKeptAt) return a.firstKeptAt - b.firstKeptAt;
    return a.shown - b.shown;
  });
  return cands[0];
}

// ===== Restart =====
function restart() {
  state.spokes = Array(CONFIG.MAX_SPOKES).fill(null);
  state.labelsLive = Array(CONFIG.MAX_SPOKES).fill("");
  if (state.radar) {
    state.radar.data.labels = [...state.labelsLive];
    state.radar.data.datasets[0].data = Array(CONFIG.MAX_SPOKES).fill(0);
    state.radar.update('none');
  }
  els.summary.classList.add('hidden');
  bootstrapPool();
  startRound(1);
}

// ===== Utils =====
function getById(id) { return state.pool.find(t => t.id === id) || null; }

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function bindControls() {
  els.restartBtn.addEventListener('click', restart);
}



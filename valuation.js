const valuationData = {
  electronics: { base: 500, depreciation: 0.15, demand: 'high' },
  fashion: { base: 150, depreciation: 0.25, demand: 'medium' },
  home: { base: 200, depreciation: 0.10, demand: 'medium' },
  sports: { base: 180, depreciation: 0.12, demand: 'medium' },
  books: { base: 25, depreciation: 0.05, demand: 'low' },
  art: { base: 300, depreciation: -0.05, demand: 'high' },
  music: { base: 400, depreciation: 0.08, demand: 'medium' },
  tools: { base: 150, depreciation: 0.10, demand: 'medium' },
  toys: { base: 50, depreciation: 0.20, demand: 'low' },
  other: { base: 100, depreciation: 0.15, demand: 'medium' }
};

const conditionMultipliers = {
  'new': 1.0,
  'like-new': 0.9,
  'excellent': 0.75,
  'good': 0.6,
  'fair': 0.4
};

const ageMultipliers = {
  '0-6': 0.95,
  '6-12': 0.85,
  '1-2': 0.75,
  '2-5': 0.60,
  '5+': 0.45,
  'vintage': 1.1
};

document.getElementById('valuation-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const category = document.getElementById('item-category').value;
  const itemName = document.getElementById('item-name').value;
  const condition = document.querySelector('input[name="condition"]:checked').value;
  const originalPrice = parseFloat(document.getElementById('original-price').value) || null;
  const age = document.getElementById('item-age').value;
  
  const categoryData = valuationData[category];
  let baseValue = originalPrice || categoryData.base;
  
  const conditionMult = conditionMultipliers[condition];
  const ageMult = ageMultipliers[age];
  
  const estimatedValue = Math.round(baseValue * conditionMult * ageMult);
  const lowValue = Math.round(estimatedValue * 0.8);
  const highValue = Math.round(estimatedValue * 1.2);
  
  document.getElementById('estimated-value').textContent = `$${estimatedValue}`;
  document.getElementById('low-value').textContent = `$${lowValue}`;
  document.getElementById('avg-value').textContent = `$${estimatedValue}`;
  document.getElementById('high-value').textContent = `$${highValue}`;
  document.getElementById('base-value').textContent = `$${baseValue}`;
  
  const conditionPercent = Math.round((conditionMult - 1) * 100);
  document.getElementById('condition-adjustment').textContent = `${conditionPercent >= 0 ? '+' : ''}${conditionPercent}%`;
  document.getElementById('condition-adjustment').className = conditionPercent >= 0 ? 'font-semibold text-green-600' : 'font-semibold text-red-600';
  
  const agePercent = Math.round((1 - ageMult) * 100);
  document.getElementById('age-depreciation').textContent = `-${agePercent}%`;
  
  const demandText = categoryData.demand.charAt(0).toUpperCase() + categoryData.demand.slice(1);
  document.getElementById('demand-factor').textContent = demandText;
  document.getElementById('demand-factor').className = categoryData.demand === 'high' ? 'font-semibold text-green-600' : categoryData.demand === 'medium' ? 'font-semibold text-yellow-600' : 'font-semibold text-gray-600';
  
  document.getElementById('valuation-form').parentElement.classList.add('hidden');
  document.getElementById('valuation-result').classList.remove('hidden');
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function resetValuation() {
  document.getElementById('valuation-form').reset();
  document.getElementById('valuation-form').parentElement.classList.remove('hidden');
  document.getElementById('valuation-result').classList.add('hidden');
}

function createListing() {
  alert('Redirecting to create listing...');
  window.location.href = 'index.html#start-trade-form';
}

console.log('Valuation system loaded successfully!');

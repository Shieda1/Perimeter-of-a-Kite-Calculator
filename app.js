// https://calculator.swiftutors.com/perimeter-of-a-kite-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const perimeterofaKiteRadio = document.getElementById('perimeterofaKiteRadio');
const lengthofEachSideinOnePairRadio = document.getElementById('lengthofEachSideinOnePairRadio');
const lengthofEachSideinOtherPairRadio = document.getElementById('lengthofEachSideinOtherPairRadio');

let perimeterofaKite;
const two = 2;
let lengthofEachSideinOnePair = v1;
let lengthofEachSideinOtherPair = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

perimeterofaKiteRadio.addEventListener('click', function() {
  variable1.textContent = '(a) Length of Each Side in One Pair';
  variable2.textContent = '(b) Length of Each Side in Other Pair';
  lengthofEachSideinOnePair = v1;
  lengthofEachSideinOtherPair = v2;
  result.textContent = '';
});

lengthofEachSideinOnePairRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of a Kite';
  variable2.textContent = '(b) Length of Each Side in Other Pair';
  perimeterofaKite = v1;
  lengthofEachSideinOtherPair = v2;
  result.textContent = '';
});

lengthofEachSideinOtherPairRadio.addEventListener('click', function() {
  variable1.textContent = 'Perimeter of a Kite';
  variable2.textContent = '(a) Length of Each Side in One Pair';
  perimeterofaKite = v1;
  lengthofEachSideinOnePair = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(perimeterofaKiteRadio.checked)
    result.textContent = `Perimeter of a Kite = ${computePerimeterofaKite().toFixed(2)}`;

  else if(lengthofEachSideinOnePairRadio.checked)
    result.textContent = `Length of Each Side in One Pair = ${computeLengthofEachSideinOnePair().toFixed(2)}`;

  else if(lengthofEachSideinOtherPairRadio.checked)
    result.textContent = `Length of Each Side in Other Pair = ${computeLengthofEachSideinOtherPair().toFixed(2)}`;
})

// calculation

function computePerimeterofaKite() {
  return (2 * Number(lengthofEachSideinOnePair.value)) + (2 * Number(lengthofEachSideinOtherPair.value));
}

function computeLengthofEachSideinOnePair() {
  return (Number(perimeterofaKite.value) - (2 * Number(lengthofEachSideinOtherPair.value))) / 2;
}

function computeLengthofEachSideinOtherPair() {
  return (Number(perimeterofaKite.value) - (2 * Number(lengthofEachSideinOnePair.value))) / 2;
}
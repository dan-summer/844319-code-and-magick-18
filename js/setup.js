'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS_COLORS = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

// Окно-форма магов
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

// Список похожих персонажей
var similarListElement = userDialog.querySelector('.setup-similar-list');

// Шаблон похожего мага
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// случайное число-индекс
var randomIndex = Math.floor(Math.random() * WIZARD_NAMES.length);

// Массив с объектами вида магов
var wizards = [
  {
    name: WIZARD_NAMES[randomIndex],
    coatColor: WIZARD_COATS_COLORS[randomIndex],
    eyesColor: WIZARD_EYES_COLORS[randomIndex]
  },
  {
    name: WIZARD_NAMES[randomIndex],
    coatColor: WIZARD_COATS_COLORS[randomIndex],
    eyesColor: WIZARD_EYES_COLORS[randomIndex]
  },
  {
    name: WIZARD_NAMES[randomIndex],
    coatColor: WIZARD_COATS_COLORS[randomIndex],
    eyesColor: WIZARD_EYES_COLORS[randomIndex]
  },
  {
    name: WIZARD_NAMES[randomIndex],
    coatColor: WIZARD_COATS_COLORS[randomIndex],
    eyesColor: WIZARD_EYES_COLORS[randomIndex]
  }
];

// Функция случайной генерации
// var getRandom = function (wizardObjectProperty) {
//   var randomIndex = Math.floor(Math.random() * WIZARD_NAMES.length);
//   var randomWizadName = WIZARD_NAMES[randomIndex];
// };

// Функция отрисовки мага
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

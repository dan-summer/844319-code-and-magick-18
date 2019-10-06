'use strict';

// файл create-wizards.js
// Модуль создания магов
(function () {
  var WIZARDS_COUNT = 4;
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var userDialog = document.querySelector('.setup'); // Окно выбора магов
  var similarListElement = userDialog.querySelector('.setup-similar-list'); // Список похожих персонажей
  var similarWizardTemplate = document.querySelector('#similar-wizard-template') // Шаблон похожего мага
    .content
    .querySelector('.setup-similar-item');

  // Функция генерации случайного элемента массива
  var getRandomElement = function (arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);

    return arr[randomIndex];
  };

  // Функция генерации свойств мага
  var createWizard = function () {
    return {
      name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
      coatColor: getRandomElement(WIZARD_COATS_COLORS),
      eyesColor: getRandomElement(WIZARD_EYES_COLORS)
    };
  };

  // Функция добавления магов в массив
  var createWizards = function (count) {
    var wizards = [];

    for (var i = 0; i < count; i++) {
      wizards.push(createWizard());
    }

    return wizards;
  };

  // Функция отрисовки мага
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  // Добавление элементов на страницу
  var fragment = document.createDocumentFragment();
  var wizards = createWizards(WIZARDS_COUNT);
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  window.createWizards = {
    WIZARD_COATS_COLORS: WIZARD_COATS_COLORS,
    WIZARD_EYES_COLORS: WIZARD_EYES_COLORS,
    userDialog: userDialog,
    getRandomElement: getRandomElement
  };
})();

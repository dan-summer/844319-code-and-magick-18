'use strict';

// Файл setup-wizard.js
// Модуль настройки выбранного мага
(function () {
  var wizardSetup = window.createWizards.userDialog.querySelector('.setup-player'); // Блок настроек персонажа
  var wizardCoat = window.createWizards.userDialog.querySelector('.wizard-coat'); // Мантия
  var wizardEyes = window.createWizards.userDialog.querySelector('.wizard-eyes'); // Глаза
  var wizardFireball = window.createWizards.userDialog.querySelector('.setup-fireball-wrap'); // Фаербол

  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  // Событие клика (изменение цвета мантии случайным образом)
  wizardCoat.addEventListener('click', function () {
    var randomWizardCoatColor = window.createWizards.getRandomElement(window.createWizards.WIZARD_COATS_COLORS);

    wizardCoat.style = 'fill: ' + randomWizardCoatColor;
    wizardSetup.querySelector('input[name="coat-color"]').value = randomWizardCoatColor;
  });

  // Событие клика (изменение цвета глаз случайным образом)
  wizardEyes.addEventListener('click', function () {
    var randomWizardEyesColor = window.createWizards.getRandomElement(window.createWizards.WIZARD_EYES_COLORS);

    wizardEyes.style = 'fill: ' + randomWizardEyesColor;
    wizardSetup.querySelector('input[name="eyes-color"]').value = randomWizardEyesColor;
  });

  // Событие клика (изменение цвета фаербола случайным образом)
  wizardFireball.addEventListener('click', function () {
    var randomWizardFireballColor = window.createWizards.getRandomElement(WIZARD_FIREBALL_COLORS);

    wizardFireball.style = 'background-color: ' + randomWizardFireballColor;
    wizardSetup.querySelector('input[name="fireball-color"]').value = randomWizardFireballColor;
  });
})();

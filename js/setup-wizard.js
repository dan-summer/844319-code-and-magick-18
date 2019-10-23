'use strict';

// Файл setup-wizard.js
// Модуль настройки выбранного мага
(function () {
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizardSetup = window.createWizard.userDialog.querySelector('.setup-player'); // Блок настроек персонажа
  var wizardCoat = window.createWizard.userDialog.querySelector('.wizard-coat'); // Мантия
  var wizardEyes = window.createWizard.userDialog.querySelector('.wizard-eyes'); // Глаза
  var wizardFireball = window.createWizard.userDialog.querySelector('.setup-fireball-wrap'); // Фаербол

  // Событие клика (изменение цвета мантии случайным образом)
  wizardCoat.addEventListener('click', function () {
    var newColor = window.createWizard.getRandomElement(window.createWizard.WIZARD_COATS_COLORS);

    wizardCoat.style = 'fill: ' + newColor;
    wizardSetup.querySelector('input[name="coat-color"]').value = newColor;
    window.filter.onCoatChange(newColor);
  });

  // Событие клика (изменение цвета глаз случайным образом)
  wizardEyes.addEventListener('click', function () {
    var newColor = window.createWizard.getRandomElement(window.createWizard.WIZARD_EYES_COLORS);

    wizardEyes.style = 'fill: ' + newColor;
    wizardSetup.querySelector('input[name="eyes-color"]').value = newColor;
    window.filter.onEyesChange(newColor);
  });

  // Событие клика (изменение цвета фаербола случайным образом)
  wizardFireball.addEventListener('click', function () {
    var newColor = window.createWizard.getRandomElement(WIZARD_FIREBALL_COLORS);

    wizardFireball.style = 'background-color: ' + newColor;
    wizardSetup.querySelector('input[name="fireball-color"]').value = newColor;
  });
})();

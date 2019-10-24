'use strict';

// файл create-wizards.js
// Модуль создания магов
(function () {
  var WIZARDS_COUNT = 4;
  var WIZARD_COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var userDialog = document.querySelector('.setup'); // Окно выбора магов
  var userDialogForm = userDialog.querySelector('.setup-wizard-form'); // Форма с данными в окне выбора магов
  var similarListElement = userDialog.querySelector('.setup-similar-list'); // Список похожих персонажей
  var similarWizardTemplate = document.querySelector('#similar-wizard-template') // Шаблон похожего мага
    .content
    .querySelector('.setup-similar-item');

  // Функция генерации случайного элемента массива
  var getRandomElement = function (arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);

    return arr[randomIndex];
  };

  // Функция отрисовки мага
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  // Функция обработки успешной загрузки данных
  var renderSimilarWizards = function (wizards) {
    var similarWizardsCount = wizards.length > WIZARDS_COUNT ? WIZARDS_COUNT : wizards.length;
    similarListElement.innerHTML = '';

    for (var i = 0; i < similarWizardsCount; i++) {
      similarListElement.appendChild(renderWizard(wizards[i]));
    }

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  // Событие нажатия на кнопку "Сохранить" в окне выбора магов
  userDialogForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(userDialogForm), function () {
      window.dialogHandler.closePopup();
    }, window.filter.errorHandler);
    evt.preventDefault();
  });

  window.createWizard = {
    WIZARD_COATS_COLORS: WIZARD_COATS_COLORS,
    WIZARD_EYES_COLORS: WIZARD_EYES_COLORS,
    userDialog: userDialog,
    renderSimilarWizards: renderSimilarWizards,
    getRandomElement: getRandomElement
  };
})();


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
  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_COUNT; i++) {
      fragment.appendChild(renderWizard(getRandomElement(wizards)));
    }
    similarListElement.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  // Функция обработки неуспешной загрузки данных
  var errorHandler = function (errorMessage) {
    var divElement = document.createElement('div');

    divElement.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    divElement.style.position = 'absolute';
    divElement.style.left = 0;
    divElement.style.right = 0;
    divElement.style.fontSize = '30px';
    divElement.textContent = errorMessage;

    document.body.insertAdjacentElement('afterbegin', divElement);
  };

  window.backend.load(successHandler, errorHandler);

  // Событие нажатия на кнопку "Сохранить" в окне выбора магов
  userDialogForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(userDialogForm), function () {
      window.dialogHandler.closePopup();
    }, errorHandler);
    evt.preventDefault();
  });

  window.createWizards = {
    WIZARD_COATS_COLORS: WIZARD_COATS_COLORS,
    WIZARD_EYES_COLORS: WIZARD_EYES_COLORS,
    userDialog: userDialog,
    getRandomElement: getRandomElement
  };
})();


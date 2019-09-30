'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_COUNT = 4;
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var userDialog = document.querySelector('.setup'); // Окно выбора магов
var dialogOpen = document.querySelector('.setup-open'); // Иконка с аватаркой
var dialogClose = userDialog.querySelector('.setup-close'); // Крестик окна
var dialogWizardNameInput = userDialog.querySelector('.setup-user-name'); // Строка ввода имени персонажа
var wizardSetup = userDialog.querySelector('.setup-player'); // Блок настроек персонажа
var wizardCoat = userDialog.querySelector('.wizard-coat'); // Мантия
var wizardEyes = userDialog.querySelector('.wizard-eyes'); // Глаза
var wizardFireball = userDialog.querySelector('.setup-fireball-wrap'); // Фаербол
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

userDialog.querySelector('.setup-similar').classList.remove('hidden');

/* ------------------- module4-task1 (7. Учебный проект: одеть Надежду) ------------------- */

// Функция закрытия окна по нажатию ESC
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

// Функция открытия окна по нажатию Enter на фокусе
var onPopupAvatarEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
};

// Функция закрытия окна по нажатию Enter на фокусе
var onPopupCrossEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
};

// Функция открытия окна
var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

// Функция закрытия окна
var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// Событие открытия окна
dialogOpen.addEventListener('click', function () {
  openPopup();
});

// Событие открытия окна по нажатию Enter на фокусе иконки с аватаркой
dialogOpen.addEventListener('keydown', onPopupAvatarEnterPress);

// Событие закрытия окна
dialogClose.addEventListener('click', function () {
  closePopup();
});

// Событие закрытия окна по нажатию Enter на фокусе крестика
dialogClose.addEventListener('keydown', onPopupCrossEnterPress);

// Событие, когда поле ввода в фокусе
dialogWizardNameInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

// Событие, когда фокус снимается с поля ввода
dialogWizardNameInput.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

// Событие клика (изменение цвета мантии случайным образом)
wizardCoat.addEventListener('click', function () {
  var randomWizardCoatColor = getRandomElement(WIZARD_COATS_COLORS);

  wizardCoat.style = 'fill: ' + randomWizardCoatColor;
  wizardSetup.querySelector('input[name="coat-color"]').value = randomWizardCoatColor;
});

// Событие клика (изменение цвета глаз случайным образом)
wizardEyes.addEventListener('click', function () {
  var randomWizardEyesColor = getRandomElement(WIZARD_EYES_COLORS);

  wizardEyes.style = 'fill: ' + randomWizardEyesColor;
  wizardSetup.querySelector('input[name="eyes-color"]').value = randomWizardEyesColor;
});

// Событие клика (изменение цвета фаербола случайным образом)
wizardFireball.addEventListener('click', function () {
  var randomWizardFireballColor = getRandomElement(WIZARD_FIREBALL_COLORS);

  wizardFireball.style = 'background-color: ' + randomWizardFireballColor;
  wizardSetup.querySelector('input[name="fireball-color"]').value = randomWizardFireballColor;
});

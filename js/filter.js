'use strict';

// Файл filter.js
// Модуль фильтрации похожих магов
(function () {
  var coatColor;
  var eyesColor;
  // var fireballColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var updateWizards = function () {
    window.createWizard.renderSimilarWizards(wizards.slice().
      sort(function (left, rigth) {
        var rankDiff = getRank(rigth) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = wizards.indexOf(left) - wizards.indexOf(rigth);
        }

        return rankDiff;
      }));
  };

  window.wizard.onCoatChange = function (color) {
    coatColor = color;
    updateWizards();
  };

  window.wizard.onEyesChange = function (color) {
    eyesColor = color;
    updateWizards();
  };

  // window.wizard.onFireBallChange = function (color) {
  //   fireballColor = color;
  //   updateWizards();
  // };

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
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

  window.filter = {
    errorHandler: errorHandler
  };
})();

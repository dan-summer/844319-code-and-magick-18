'use strict';

// Файл dialog-handler
// Модуль обработки событий окна(popup)
(function () {
  var dialogOpen = document.querySelector('.setup-open'); // Иконка с аватаркой
  var dialogWizardNameInput = window.createWizards.userDialog.querySelector('.setup-user-name'); // Строка ввода имени персонажа
  var dialogHandler = window.createWizards.userDialog.querySelector('.upload'); // Иконка для перемещения окна
  var dialogClose = window.createWizards.userDialog.querySelector('.setup-close'); // Крестик окна

  var USER_DIALOG_START_TOP = 80; // в пикселях
  var USER_DIALOG_START_LEFT = 50; // в процентах

  window.createWizards.userDialog.querySelector('.setup-similar').classList.remove('hidden');

  // Событие, когда поле ввода в фокусе
  dialogWizardNameInput.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });

  // Событие, когда фокус снимается с поля ввода
  dialogWizardNameInput.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });

  // Функция открытия окна
  var openPopup = function () {
    window.createWizards.userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  // Функция открытия окна по нажатию Enter на фокусе
  var onPopupAvatarEnterPress = function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      openPopup();
    }
  };

  // Функция закрытия окна
  var closePopup = function () {
    window.createWizards.userDialog.classList.add('hidden');
    resetUserDialogCoords();
    document.removeEventListener('keydown', onPopupEscPress);
  };

  // Функция закрытия окна по нажатию ESC
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE) {
      closePopup();
    }
  };

  // Функция закрытия окна по нажатию Enter на фокусе
  var onPopupCrossEnterPress = function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      closePopup();
    }
  };

  // Функция сброса координат(положения) окна
  var resetUserDialogCoords = function () {
    window.createWizards.userDialog.style.top = USER_DIALOG_START_TOP + 'px';
    window.createWizards.userDialog.style.left = USER_DIALOG_START_LEFT + '%';
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

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.createWizards.userDialog.style.top = (window.createWizards.userDialog.offsetTop - shift.y) + 'px';
      window.createWizards.userDialog.style.left = (window.createWizards.userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();

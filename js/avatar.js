'use strict';

// Файл avatar.js
// Модуль загрузки аватарки пользователя
(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var fileChooser = document.querySelector('.upload input[type=file]'); // Кнопка выбора файла для загрузки
  var preview = document.querySelector('.setup-user-pic'); // Элемент с картинкой-миниатюрой

  // Обработчик события выбора файла для загрузки
  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
})();

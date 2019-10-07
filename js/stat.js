'use strict';

// Файл stat.js
// Модуль отображения гистограммы статистики игры
(function () {
  var CLOUD_WIDTH = 420; // ширина окна
  var CLOUD_HEIGHT = 270; // высота окна
  var CLOUD_X = 100; // координата окна по x
  var CLOUD_Y = 10; // координата окна по y
  var GAP = 10; // внешний отступ
  var FONT_GAP = 30; // отступ текста
  var BAR_HEIGHT = 150; // высота столбика в гистограмме
  var BAR_WIDTH = 40; // ширина столбика в гистограмме
  var BAR_GAP = 50; // расстояние между колонками

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + GAP * 3);
    ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + GAP * 5);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], CLOUD_X + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP);
      ctx.fillText(Math.round(times[i]), CLOUD_X + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - FONT_GAP - GAP - (BAR_HEIGHT * times[i]) / maxTime);
      ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';
      ctx.fillRect(CLOUD_X + FONT_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - FONT_GAP - (BAR_HEIGHT * times[i]) / maxTime, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    }
  };
})();

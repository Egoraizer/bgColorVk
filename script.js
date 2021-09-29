/*
    * Данный встраиваемый скрипт предназначен для использования в социальной сети - vk.com
    * Он изменяет задний фон верхней части страницы, а также цвет текста
    * при переключении аудиозаписи.
*/

function changeColorTopPlayer () {
  const topAudioPlayerBtns = document.querySelectorAll(".top_audio_player svg");
  const topHomeLink = document.querySelector(".TopHomeLink svg"); 
  let timer = setInterval(changeElements, 10 * 1000);
  
  // Функция по генерации рандомного числа
  const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

  /* 
    * Функция, измененяющая элементы с применением CSS стилей
    * P.S. из-за отсутсвия возможности интеграции .css файла на страницу,
    * приходится использовать свойство .style.cssText
  */

  function changeElements () {
      let bgColor = genRanHex(6);
      document.querySelector('.top_audio_player_title').style.cssText += `
        mix-blend-mode: difference; 
        color: white; font-weight:600; 
        font-size: 15px; 
        transition: 6s; 
        letter-spacing: 1px;`;
      document.querySelector("#page_header_cont").style.cssText += `
        background-color: #${bgColor}; 
        transition: 6s;`;
  }

  // Функция для обновления элементов в связи с переключением аудиозаписи
  function updateElements (playerBtns) {
      playerBtns.forEach((btn) => {
          btn.addEventListener('click', () => {
              setTimeout(function () {
                  clearInterval(timer);
                  changeElements();
                  timer = setInterval(changeElements, 10000);
              }, 100);
          });
      });
  }
  
  changeElements();
  updateElements(topAudioPlayerBtns);

}
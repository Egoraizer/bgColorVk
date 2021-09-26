function changeColorTopPlayer () {
  const topAudioPlayerBtns = document.querySelectorAll(".top_audio_player svg");
  const topHomeLink = document.querySelector(".TopHomeLink svg"); // Че то сделать надо бы
  let timer = setInterval(changeElements, 10 * 1000);

  const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
  
  function changeElements () {
      let bgColor = genRanHex(6);
      document.querySelector('.top_audio_player_title').style.cssText += `mix-blend-mode: difference; color: white; font-weight:600; font-size: 15px; transition: 6s; letter-spacing: 1px;`;
      document.querySelector("#page_header_cont").style.cssText += `background-color: #${bgColor}; transition: 6s;`
  }

  function updateElements (playerBtns) {
      playerBtns.forEach((btn) => {
          btn.addEventListener('click', (event) => {
              setTimeout(function () {
                  clearInterval(timer);
                  changeElements();
                  timer = setInterval(changeElements, 10 * 1000);
              }, 100);
          });
      });
  }
  
  changeElements();
  updateElements(topAudioPlayerBtns);

}
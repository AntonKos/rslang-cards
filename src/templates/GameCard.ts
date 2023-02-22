const GameCard = (data:any) => `
<div class="card__container-item game" data-word="${data.word}"
  <span>${data.translation}</span>
  <audio  data-word="audio" class="${data.word}" src="${data.audioSrc}" type="audio/mpeg"></audio>
  <audio  data-word="audio2" class="${data.word}" src="${data.audioQuote}" type="audio/mpeg"></audio>
    </div>
</div>
`;

export default GameCard;

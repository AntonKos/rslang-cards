const RepeatButton = (source:any) => `
<button class="repeat" type="button">repeat</button>
<audio
  controls
  src="${source}">
</audio>
`;

export default RepeatButton;

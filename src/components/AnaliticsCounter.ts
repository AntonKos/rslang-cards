export default class AnaliticsCounter {
  category:any;
  categoryStored:any;
  constructor(category:any) {
      this.category = category;
      this.categoryStored = this.getCategory();
      // console.log(this.categoryStored)
  }

  getCategory() {
      return localStorage.getItem(this.category) ?
          JSON.parse(localStorage.getItem(this.category)|| "{}") : {};
  }

  saveCategory() {
      localStorage.setItem(this.category, JSON.stringify(this.categoryStored));
  }

  incrementTrainClick(word:any) {
      const wordData = this.getWordData(word);
      wordData.trainClicks += 1;
      this.saveCategory();
  }

  incrementGameClick(word:any) {
      const wordData = this.getWordData(word);
      wordData.gameSuccessClicks += 1;
      this.saveCategory();
  }


  incrementErrorCount(word:any) {
      const wordData = this.getWordData(word);
      wordData.gameErrorClicks += 1;
      this.saveCategory();
  }

  getWordData(word:any) {
      if (!(word in this.categoryStored)) {
          this.categoryStored[word] = {
              trainClicks: 0,
              gameSuccessClicks: 0,
              gameErrorClicks: 0,
          };
      }
      return this.categoryStored[word];
  }
}

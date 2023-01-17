const wordCounter = (paragraph) => {
  let wordsArray = paragraph.split(" ");
  let finalString;

  for (let i = 0; i < wordsArray.length; i++) {
    finalString += " " + wordsArray[i];
    if ((i + 1) % 7 === 0) {
      finalString += "\n";
    }
  }
  return finalString;
};

export default wordCounter;

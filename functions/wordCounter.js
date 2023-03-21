const wordCounter = (paragraph) => {
  let wordsArray = paragraph.split(" ");
  let finalString;

  if (paragraph.length > 1) {
    for (let i = 0; i < wordsArray.length; i++) {
      finalString += " " + wordsArray[i];
      if ((i + 1) % 7 === 0) {
        finalString += "\n";
      }
    }
    return finalString;
  } else return " ";
};

export default wordCounter;

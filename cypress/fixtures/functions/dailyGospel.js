export const dailyGospel = () => {
  let now = new Date();
  let start = new Date(now.getFullYear(), 0, 0);
  let diff = now - start;
  let oneDay = 1000 * 60 * 60 * 24;
  let dayOfYear = Math.floor(diff / oneDay) - 1;
  console.log("Day of year: " + dayOfYear);

  let book, name, chap, text;

  if (dayOfYear > 357) {
    // Christmas Eve 358/359-th dayOfYear/s
    // Christmas is 359/360-th dayOfYear
    // until New Year
    book = 2; // Gospel of Luke
    name = "Лукі";
    chap = 0; // First book
  } else {
    // 89 Gospel chapters x 4 Times = 356 Days = indexes 0...355
    // indexes 356 and 357 are for Mathew 1, 2 = fit for Christmas reading
    let modulus = dayOfYear % 89;
    switch (true) {
      case modulus < 28:
        book = 0;
        name = "Матвея";
        chap = modulus;
        break;
      case modulus > 27 && modulus < 44:
        book = 1;
        name = "Марка";
        chap = modulus - 28;
        break;
      case modulus > 43 && modulus < 68:
        book = 2;
        name = "Лукі";
        chap = modulus - 44;
        break;
      case modulus > 67:
        book = 3;
        name = "Іаана";
        chap = modulus - 68;
    }
  }
  text =
    "Прапануем Вам на сёння Евангелле ад " +
    name +
    ", Раздзел " +
    (chap + 1) +
    ": https://dabravesce.by/?i=0-" +
    book +
    "-" +
    chap +
    ". #Gospel #Bible #Евангелле #Біблія";
  return text;
};

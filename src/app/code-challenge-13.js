export const sortByChildren = (charArray) => {

  charArray.sort((a, b) => {

    let x = a.children.length - b.children.length;
    if (x !== 0) {
      return x;
    } else {
      return a.house > b.house;
    }
  }
  );
  return charArray;

};

export const containsW = (str) => {

  const regex = /w/g;

  return (regex.test(str));

};

export const isNum = (input) => {

  const regex = /[0-9]/g;

  return (regex.test(input));

};

export const containsWorld = (input) => {

  const regex = /(world)/;

  return (regex.test(input));

};

export const isCapitalized = (str) => {

  const regex = /([A-Z][a-z]+)/g;

  return str.match(regex) || [];

};

export const citiesAtoJ = (arr) => {

  const string = arr.toString();
  const wordSeparators = /\s/g;
  const newString = string.replace(wordSeparators, '');
  console.log(newString);
  const regex = /\b([A-J][a-z]+)/g;
  // console.log(string);
  return newString.match(regex) || [];

};
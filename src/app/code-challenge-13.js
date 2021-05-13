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

};
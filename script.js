function toCase(text) {
  let lc = text.toLowerCase();
  let uc = text.toUpperCase();
  let str = lc + "-" + uc;
  return str;
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));

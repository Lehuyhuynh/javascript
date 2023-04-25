function theLetterA(strings) {
  let count = 0;
  for (let i = 0; strings.length > i; i++) {
    if (strings[i].includes("a")) {
      count = count + 1;
    }
  }
  return count;
}
module.exports= theLetterA
function longest(s1, s2) {
  let result = [];
  const long = new Set(s1 + s2);
  long.forEach((c) => result.push(c));
  result.sort();
  return result.join("");
}

longest("aretheyhere", "yestheyarehere");

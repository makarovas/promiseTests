function sum(a, b) {
  const result = new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return reject(new Error("not numbers"));
    }
    return resolve(a + b);
  });
  return result;
}

function square(a) {
  const result = new Promise((resolve, reject) => {
    if (typeof a !== "number") {
      return reject(new Error("a not numbers"));
    }
    return resolve(a * a);
  });
  console.log(result);
  return result;
}
sum(1, 2)
  .then((result) => {
    return square(result);
  })
  .then((final) => console.log(final));

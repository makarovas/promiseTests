function sum(a, b) {
  const result = new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return reject(new Error("not numbers"));
    }
    return resolve(a + b);
  });
  return result;
}

sum(1, 2).then(
  (value) => console.log(value),
  (error) => console.error(error)
);

sum("1", 2).then(
  (value) => console.log(value),
  (error) => console.error(error)
);

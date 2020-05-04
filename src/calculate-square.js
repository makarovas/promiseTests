function calculateSquare(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number !== "number") {
        return reject(new Error("Argument must be a number"));
      }
      const result = number * number;
      resolve(result);
    }, 1000);
  });
  return promise;
}

module.exports = calculateSquare;

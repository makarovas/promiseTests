function capitalize(text) {
  return;
}

function promiseCapitalize(text) {
  return new Promise((resolve, reject) => {
    if (text !== "string") {
      return reject(new Error("not a string"));
    }
    const result = text[0].toUpperCase() + text.substr(1);
    return resolve(result);
  });
}

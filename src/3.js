const sayHello = () => new Promise((resolve, reject) => resolve("resolve"));

sayHello()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

{
  // 🚬
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // function tsAdd(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // function jsFetchNum(id) {
  //  // code ...
  //  // code ...
  //  // code ...
  //  return new Promise((resolve, reject) => {
  //    resolve(100);
  //  })
  // }

  // function tsFetchNum(id: string): Promise<number> {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100)
  //   })
  // }

  // Javascript => TypeScript
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName("Sanghak", "Kim");
  printName("Daegu");
  printName("Dude", undefined);

  // Default parameter
  function printMessage(message: string = "default msg") {
    console.log(message);
  }
  printMessage();

  // Rest Parameter
  function addNumber(num1: number, ...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  addNumber(1, 2, 3);
  addNumber(1, 2, "d");
  addNumber(1, 2, 3);
}

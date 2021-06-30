{
  /**
   * Javascript
   * Primitive: number, string, boolean, bigInt, symbol, null, undefined
   * Object: function, array
   */

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = true;

  // undefined: 값이 결정 되지 않은 상태
  let name: undefined; // SHIT
  let age: number | undefined; // Union Type
  age = undefined;
  age = 1;

  // null: 값이 빈 상태
  let person: null;
  let person2: string | null; // Union Type

  // 🚬
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // 🚬
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    return;
  }

  let unusable: void = undefined;
  let unusable2: void = null;

  // never
  function throwError(mesage: string): never {
    // message -> server(log)
    throw new Error(message);
  }

  // 🚬 object안에 무엇이 들어갈지 '명확'하지 않기 때문에
  // 좋지 않음. 뭐든지 명확한게 좋다.
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
}

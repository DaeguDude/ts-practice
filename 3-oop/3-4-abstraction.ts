{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 현재는 하나의 기능밖에 없음
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    makeCoffee(shots: number) {
      console.log("making coffee");
      return {
        shots,
        hasMilk: false,
      };
    }

    fillCoffeeBeans(beans: number) {
      console.log("filling up the beans...");
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...");
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  // maker.fillCoffeeBeans()

  const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      this.machine.fillCoffeeBeans(30);
      this.machine.clean();
    }
  }

  const amateur = new AmateurUser(CoffeeMachine.makeMachine(32));
  const barista = new ProBarista(CoffeeMachine.makeMachine(32));

  amateur.makeCoffee();
  barista.makeCoffee();
}

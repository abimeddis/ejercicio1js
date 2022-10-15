class Pizza {
  constructor(nombre, ingredientes, precio) {
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
  }

  mostrarNombreyPrecio = () => {
    console.log("Pizza de " + this.nombre + " vale " + this.precio);
  };

  mostrarIngredientes = (nombre, ingredientes) => {
    console.log(
      "La pizza " +
        this.nombre +
        " tiene los siguientes ingredientes: " +
        this.ingredientes
    );
  };

  mostrarPrecio = () => {
    if (this.precio <= 600) {
      return console.log(
        "La pizza que vale menos de 600 es " +
          this.nombre +
          " y vale " +
          this.precio
      );
    }
    if (this.precio >= 600) {
      return console.log("La pizza " + this.nombre + " vale más de 600 pesos");
    }
  };

  mostrarImpares = (pizzaN) => {
    if (pizzaN % 2 == 0) return console.log("Esta Pizza es par");
    else return console.log("Esta Pizza es Impar");
  };
}

let pizza1 = new Pizza(
  "Muzzarella",
  ["Salsa de tomate", "Muzzarella", "Aceitunas verdes"],
  1000
);
let pizza2 = new Pizza(
  "Jamon y Morrones",
  ["Salsa de tomate", "Muzzarella", "Jamón", "Morrones", "Aceitunas verdes"],
  1300
);

let pizza3 = new Pizza(
  "Jamon y Morron",
  ["Salsa de Tomate", "Jamón", "Morrón", "Muzzarella", "Aceitunas verdes"],
  1800
);

let pizza4 = new Pizza(
  "Calabreza",
  ["Salsa de Tomate", "Longaniza", "Muzzarella", "Aceitunas negras"],
  1700
);

let pizza5 = new Pizza(
  "Fugazza",
  ["cebolla", "Muzzarella", "Aceitunas verdes"],
  1700
);
let pizza6 = new Pizza("Masa de Pizza", "Salsa de Tomate", 300);

//Las pizzas que tengan N° impar.
pizza1.mostrarImpares(1);
pizza2.mostrarImpares(2);
pizza3.mostrarImpares(3);
pizza4.mostrarImpares(4);
pizza5.mostrarImpares(5);
pizza6.mostrarImpares(6);

//Hay alguna pizza que valga menos de $600
pizza1.mostrarPrecio();
pizza2.mostrarPrecio();
pizza3.mostrarPrecio();
pizza4.mostrarPrecio();
pizza5.mostrarPrecio();
pizza6.mostrarPrecio();

//EL nombre de cda pizza con su precio.
pizza1.mostrarNombreyPrecio();
pizza2.mostrarNombreyPrecio();
pizza3.mostrarNombreyPrecio();
pizza4.mostrarNombreyPrecio();
pizza5.mostrarNombreyPrecio();
pizza6.mostrarNombreyPrecio();

//LOs ingredientes de cada pizza.
pizza1.mostrarIngredientes();
pizza2.mostrarIngredientes();
pizza3.mostrarIngredientes();
pizza4.mostrarIngredientes();
pizza5.mostrarIngredientes();
pizza6.mostrarIngredientes();

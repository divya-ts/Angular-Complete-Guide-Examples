// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }
// or we can use shortly like this
export class Ingredient {
    constructor(public name: string, public amount: number) {}
}
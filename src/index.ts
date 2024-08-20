// console.log("Hello World")

// ===

// let age: number = 25;
// let name: string = "Surya";
// let isStudent: boolean = true;

// console.log(age, name, isStudent)

// ===

// let vAny: any = 10; // bisa memasukkan data apapun ke any
// let vUnknown: unknown =  10; // bisa juga memasukkan data apapun seperti any

// let s1: string = vAny;     // any bisa dimasukkan ke data apapun
// let s2: string = vUnknown; // ❌ tidak bisa, karena kita tidak tau ini tipe datanya apa (kecuali kita melakukan type assertion)
// let s3: string = vUnkown as string // ✅ kita melakukan type assertion

// vAny.method();     // Ok; semuanya bisa dianggap bisa oleh any
// vUnknown.method(); // ❌ Tidak ok; kita tidak tau apapun dari variable ini

// ===

// // union

// let valueA : string | number // string ATAU number
// valueA = "hello" // valid
// valueA = 42 // valid juga

// // intersection

// type A = {
//     a: string
// }

// type B = {
//     b: number
// }

// let valueB: A & B // tipe A DAN tipe B

// valueB = { a: "hello", b: 42 } // valid

// ===

// type Direction = "left" | "right"
// let direction1 : Direction = "kiri" // ❌ error, direction bukan tipe string, tapi tipenya left dan right
// let direction2 : Direction = "left" // ✅

// ===

// enum Color {
//     Red,
//     Green,
//     Blue
// }

// const color: Color = Color.Green

// console.log(color)

// ===

// enum Color {
//     Red = "Red",
//     Green = "Green",
//     Blue = "Blue"
// }

// let color: Color = Color.Green

// console.log(color) // Green

// ===

// interface User {
//     name: string,
//     age: number
// }

// let user: User = {
//     name: "Sasuke",
//     age: 27
// }

// ===

// type User = {
//   name?: string;
//   email: string;
//   password: string;
// };

// let user: User = {
//   email: "surya@gmail.com",
//   password: "xxxx",
// };

// ===

// interface User {
//   name?: string;
//   email: string;
//   password: string;
// }

// interface Profile {
//   image?: string;
//   age?: number;
//   birthDate?: Date;
//   address: string;
// }

// interface UserProfile extends User, Profile {}

// ===

// type User = {
//   name?: string;
//   email: string;
//   password: string;
// };

// type Profile = {
//   image?: string;
//   age?: number;
//   birthDate?: Date;
//   address: string;
// };

// type UserProfile = User & Profile;

// let userProfile: UserProfile = {
//   name: "surya",
//   email: "surya@gmail.com",
//   password: "xxxx",
//   address: "Depok",
// };

// ===


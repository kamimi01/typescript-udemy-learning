// なるべくtypescriptの型推論に任せる
// const person: {
//   name: string
//   age:  number
// }
// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string]  // タプルの場合は、ちゃんと型の指定が必要
// } = {
//   name: "mika",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"]
// }

// このように、定数をグループで管理したい場合は、ENUM
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

// 自動的に数値が割り当てられるが、自分で割り当てることもできる
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = 200,
}

// ENUM型
const person = {
  name: "mika",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
}

// person.role.push("admin")
// person.role[1] = 10
// person.role = [0, "admin", "user"]

// Any型はなるべく避けるべき

let favoriteActivities: string[]
favoriteActivities = ["Sports"]

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // console.log(hobby.map())
}

if (person.role === Role.ADMIN) {
  console.log("管理者ユーザ")
}

// unknown型（Any型よりは、型チェックが強制されるので、Anyよりはマシ）
let userInput: unknown
let userName: string

userInput = 5
userInput = "Max"

// unknown型を特定のデータ型に代入することはできないので、型チェックが必要
if (typeof userInput === "string") {
  userName = userInput
}

// never型：戻り値を返すことはない（エラーを発生させてクラッシュさせる）
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
  // while (true) {}
}

const result = generateError("エラーが発生しました", 500)
// このままだとスクリプトがクラッシュする（戻り値がないので）
console.log(result)

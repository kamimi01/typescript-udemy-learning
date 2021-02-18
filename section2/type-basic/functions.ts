function add2(n1: number, n2: number) {
  return n1 + n2
}

// voidは何も返さない（undefinedが返る、undefinedを戻り値にするのは避けるべき）
// 普通はvoidは書かない
function printResult(num: number): void {
  console.log("Result:" + num)
}

// コールバック関数
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

addAndHandle(10, 20, (result) => {
  console.log(result)
  return result
})

// Funtion型（引数名は一致している必要はない）
let combineValues: (a: number, b: number) => number

// 関数を格納する
combineValues = add2
// combineValues = printResult
// combineValues = 5

console.log(combineValues(8, 8))

printResult(add2(5, 12))

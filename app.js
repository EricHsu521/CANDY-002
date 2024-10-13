// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

function missingChar(chars) {
  // let prevChar = 0;
  // let currentChar = 0;
  // let result = "";

  // chars
  //   .map((char) => {
  //     return char.charCodeAt(0);
  //   })
  //   .forEach((currentChar, index) => {
  //     if (index == 0) {
  //       prevChar = currentChar;
  //     } else {
  //       if (currentChar - prevChar != 1) {
  //         result = prevChar + 1;
  //       } else {
  //         prevChar = currentChar;
  //       }
  //     }
  //   });

  // return String.fromCharCode(result);

  for (let i = 0; i < chars.length - 1; i++) {
    const prevChar = chars[i].charCodeAt(0);
    const nextChar = chars[i + 1].charCodeAt(0);

    if (nextChar - prevChar != 1) {
      return String.fromCharCode(prevChar + 1);
    }
  }
}

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...

// [實作說明]
// 1. 使用陣列的map方法，針對陣列中的每一個字元指定索引值進行Unicode編碼，回傳一個編碼後的新陣列
// 2. 在輪巡的迴圈中，將索引值為0的編碼值，當作前一個編碼值
// 3. 因為連續的特性，所以會判斷目前的編碼值和前一個編碼值的差值是否為1，
//    如果成立，就把目前編碼值儲存當作前一編碼值，然後繼續往下執行
//    如果不成立，表示目前編碼值和前一個編碼值不是連續的，把前一個編碼值+1後儲存成結果
// 4. 使用字串的fromCharCode方法把編碼值轉換成字元，並且回傳

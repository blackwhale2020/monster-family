// 額外分數：修改數字
let extraScore = 1;

// 無敵模式：true 改為 false
let wuDi = true;

// 第一個人物：修改數字為 0-10, 0 為小米，9為劉啟揚
let firstFruit = 0;

// 人物合成反轉：false 改為 true
let reverseLevelUp = false;

// 指定生成的人物：默認值: 不開啟反轉 0-5 開啟反轉 6-11，修改對應數字即可重製蕤機生成的人物範圍
const minRandomFruitNum = reverseLevelUp ? 6 : 0; // 生成隨機人物最小值（0-10）0 為小米，9 為劉啟揚
const maxRandomFruitNum = reverseLevelUp ? 11 : 5; // 生成隨機人物最大值（1-11）0 為小米，9 為劉啟揚
let setFruits = {
  // 指定前幾次生成的人物，可填入任意數量的數字，0 為小米，9 為劉啟揚
  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [0, 0, 1, 2, 2, 3],
  randomFunction: () => {
    return minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum));
  }
}

// 讓人物更 Q 彈：false 改為大於 0 小於 1 的任意小數 (推薦 0.9)
let fruitQTan = false;

// 讓人物下落緩慢：false 改為大於 0 的任意數，值越大阻力越大，下落越慢 (推薦 5)
let fruitSlowDown = false;

// 點擊右上方圖標更換水果：false 改為 true 即可
let clickChangeFruit = true;

// 廣告連接：false 或為空字符串表示不會跳轉到廣告
let adLink = false;

// 修改網頁標題：將 "合成大西瓜" 進行替換
document.getElementsByTagName("title")[0].innerText = '合成怪獸家族';

// 開啟選分彈窗：將 false 改為 ture
let selectModal = false;


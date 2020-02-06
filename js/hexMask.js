// var xhr = new XMLHttpRequest();

// xhr.open('get','https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR0HV1nBB2_3JOSpa7X9CUZ6gNonmLYXQPF2vP6mjmTKGpBKEEbFCdBEt4A', true);
// xhr.setRequestHeader('Content-type', 'application/json');
// xhr.send(null);
// // 。 .send -> 空值或null 都是狀態4

// // 。 readyState
// //  : 0 -> 已產生了一個 XMLHttpRequest，但未撈取資料
// //  : 1 -> 使用了 open()，但未傳送資料過去
// //  : 4 -> 已撈到資料了
// //  : 2 -> 偵測有送出指令
// //  : 3 -> loading 量大可能出現

// // 。 status 頁面/資料
// //  : 200 ->  存在
// //  : 404 ->  不存在

// // 。open
// //  ,true  -> 為非同步，可讓程式未回傳資料就繼續往下執行
// //  ,false -> 為同步，程式需等待資料回傳後才繼續往下執行。
// //使用chrome會得到警告訊息，其告知開發者這會對使用者造成不當影響。

// console.log(xhr.responseText);
// var strToJOSN = JSON.parse(xhr.responseText);
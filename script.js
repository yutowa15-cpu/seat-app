function shuffle(){

    // 入力した人数を取得  people探す
    let people = document.getElementById("people").value;  

   //  入力した前にしたい人を取得
    let frontPeople = document.getElementById("frontPeople").value;
   ///一人づづ処理
    let frontList = frontPeople.split(",");
////前にする人の人数保存
    let frontNum = frontList.length;

    let numbers = [];　　　// numberという箱を作る

    let result = "";

    // 1番〜人数分を作成
    for(let i = 1; i <= people; i++){
        numbers.push(i + "番");
    }

    // ランダムに並び替え
    numbers.sort(() => Math.random() - 0.5);

    

    for(let i = 0; i < frontNum; i++){
        let front =Math.floor(Math.random() * 12);    //前の席の定義
        let TofrontPeople = numbers.indexOf(frontList[i] + "番")
        if (TofrontPeople != -1) {
         // 交換

        let temp = numbers[front];
        numbers[front] =numbers[TofrontPeople];   ///最前列6人と前にしたい人交換
        numbers[TofrontPeople] = temp;
        }
    }




   //＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＝表形式に表示＝＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊

    result += "<table><tr>";

    for(let i = 0; i <people; i++){
        result +="<td>"+numbers[i]+ "</td>";

        if ((i + 1) % 6 == 0)  {
            result += "</tr>"+"<tr>";
        }

    }
    result +=  "</tr></table>"

//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊

    // 結果表示

    
    document.getElementById("result").innerHTML = result;

    
}
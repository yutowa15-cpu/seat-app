function shuffle(){

    // 入力した人数を取得  people探す
    let people = document.getElementById("people").value;  

    let numbers = [];　　　// numberという箱を作る

    let result = "";

    // 1番〜人数分を作成
    for(let i = 1; i <= people; i++){
        numbers.push(i + "番");
    }

    // ランダムに並び替え
    numbers.sort(() => Math.random() - 0.5);

   //＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＝表形式に表示＝＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊

    result += "<table><tr>";

    for(let i = 0; i <people; i++){
        result +="<td>"+numbers[i]+ "</td>";

        if ((i + 1) % 6 == 0)  {
            result += "</tr>"+"<tr>";
        }

    }
    result +=  "<tr></table>"

//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊

    // 結果表示

    
    document.getElementById("result").innerHTML = result;

    
}
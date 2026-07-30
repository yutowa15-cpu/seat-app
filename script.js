alert("読み込み成功");
function shuffle(){

   // alert("動いています");

    /
    // 入力した人数を取得  people探す
    let people = document.getElementById("people").value;  

    let boy = document.getElementById("boy").value;  
    let boyList = boy.split(",");    //男のリスト
    let boyNum = boyList.length;    //男の人数

    let girl = document.getElementById("girl").value;  
    let girlList = girl.split(",");  //女のリスト
    let girlNum = girlList.length;    //女の人数

    //男女それぞれ並びをランダムにする
    boyList.sort(() => Math.random() - 0.5);
    girlList.sort(() => Math.random() - 0.5);





////******************************************************************************* */
   //  入力した前にしたい人を取得
    let frontPeople = document.getElementById("frontPeople").value;
   ///一人づづ処理
    let frontList = frontPeople.split(",");


////前にする人の人数保存
    let frontNum = frontList.length;

 //***************************************************************************************************** */




    let numbers = [];// numberという箱を作る

    let result = "";

    //男女交互
    let maxNum = Math.max(boyNum, girlNum);   //男女で多い方がなくなるまで入れていく

    for(let i = 0; i < maxNum; i++){

        if(i < boyNum){
            numbers.push(boyList[i] + "番");
        }

        if(i < girlNum){
            numbers.push(girlList[i] + "番");
        }

    }
  console.log(numbers);

   


//＊＊＊＊＊＊＊＊＊前にしたい人を前に＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊    


    let frontBoySeat = [0,2,4,6,8,10];
    let frontGirlSeat = [1,3,5,7,9,11];

    for(let i = 0; i < frontNum; i++){
        let front;
        //  前に行く人の行先を決める
    if (boyList.indexOf(frontList[i]) != -1) {    //前にしたい人が男なら
         let index = Math.floor(Math.random() * frontBoySeat.length);
        front = frontBoySeat[index];
        frontBoySeat.splice(index, 1);
    
    }
    else if (girlList.indexOf(frontList[i]) != -1) {//前にしたい人が女なら
         let index = Math.floor(Math.random() * frontGirlSeat.length);
        front = frontGirlSeat[index];
        frontGirlSeat.splice(index, 1);
    }

    

        let TofrontPeople = numbers.indexOf(frontList[i] + "番")    //前にしたい人の前に行く前の配列番号

        if (TofrontPeople != -1) {
         // 交換

        let temp = numbers[front];
        numbers[front] =numbers[TofrontPeople];   ///前に行きたい人を前へ 交換
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
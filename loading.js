let time = 0;
loading();
  //delayed for going into another html
   function loading(){  
   setTimeout(function (){
    window.location.assign("index.html");
} ,5000);
 }
 //content variables
 let pre = document.getElementById("content");
 let outPut =Math.floor(Math.random() * 8);
 console.log(outPut);
    //switch statement depending on numbers
    switch (outPut){
        case 2:
    pre.innerHTML =`
            🍎 🍈 🍉
  Mga pagkain para ma improve 
  ang iyong memory para di mo 
  makalimutan ang pag-iwan 
  nya sayo
    `;
    break;
        case 3:
    pre.innerHTML =`
  Pwede bang maligo sa gabi
  kahit pagod na pagod kana?
  Pwede ang di pwede maging 
  kayo
    `;
    break;
        case 4:
  pre.innerHTML = `
  In order to understand a women
  you need to learn in thick book to 
  understand them
  <img src="thickbook.png" width="100">
  `;
    break;
        case 5:
  pre.innerHTML = `
  your Crush is just like a moon
  beautiful to watch, but impossible
  to reach
  `;
    break;
        case 6:
  pre.innerHTML = `
  When soneone appears in your dreams
  Its because that person misses you
  `;
    break;
       case 7:
  pre.innerHTML = `
  If I Know What Love is.
  It Is Because Of You ♡ 
  `;
}
  
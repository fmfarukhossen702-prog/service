

let content = document.querySelector(".content");
let favrCount = document.getElementById("favrCount");
let copyCount = document.getElementById("copyCount");
let coinCount = document.getElementById("coinCount");
let callHis = document.getElementById("callHis");
let hisClear = document.getElementById("hisClear");
// console.log(callHis); 

let count = 0;
let cound = 0;
content.addEventListener("click", (h) => {
  if (h.target.className.includes("heartIcon")) {
    count++;
    favrCount.innerHTML = count;
  }
  if (h.target.className.includes("copyBtn")) {
    cound++;
    copyCount.innerHTML = cound;
    // copy korar jonno h3 tag er text ke select kora
    let card = h.target.closest(".col-js");
    const number = card.querySelector("h3").innerText;
    // copy kora
    navigator.clipboard.writeText(number);
    // alart
    alert("নম্বর কপি হয়েছে:" + number);
  }
  if(h.target.className.includes('callBtn')){
    // alard 
    let card = h.target.closest(".col-js");
    let title = card.querySelector('h2').innerText
    let service = card.querySelector('h4').innerText
    let number = card.querySelector('h3').innerText

    let coin = parseInt(coinCount.innerText)
    if(coin < 20){
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
        return;
    }
    coin -= 20 
    coinCount.innerText = coin
    alert("📞  Calling  " + service + "   " + number);

    //  time 
    let time = new Date().toLocaleTimeString()
    let div = document.createElement('div')
    div.innerHTML = `
      <div class="flex justify-between items-center border rounded-lg py-2 px-3 mb-5 text-black">
        <div>
          <p> ${title}</p>
          <h2> ${number} </h2>
        </div>
        <p> ${time} </p>
      </div>
    `
     
      callHis.appendChild(div)
  }
});
hisClear.addEventListener('click', () =>{
    callHis.innerHTML = " "
})

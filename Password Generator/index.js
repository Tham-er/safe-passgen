const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl_1 = document.getElementById("password-1")
let passwordEl_2 = document.getElementById("password-2")

let noSymbols = document.getElementById("no-symbols")
let noNumbers = document.getElementById("no-numbers")




function createPassword(l) {
   
   let passStockage = ""
   let usableChars = filter()

   for(let i= 0; i < l; i++){
      let randomIndex = Math.floor(Math.random() * usableChars.length)
      passStockage += usableChars[randomIndex]
   }
   
   return passStockage
}

function generate(){
   
   let pass_1 = createPassword(15)
   let pass_2 = createPassword(15)
   
   passwordEl_1.textContent = pass_1
   passwordEl_2.textContent = pass_2
   
}

passwordEl_1.addEventListener("click", function(){
      
   navigator.clipboard.writeText(passwordEl_1.textContent)
   alert("Copied : " + passwordEl_1.textContent)
})

passwordEl_2.addEventListener("click", function(){
      
   navigator.clipboard.writeText(passwordEl_2.textContent)
   alert("Copied : " + passwordEl_2.textContent)
})

function filter() {
   
   let isSymbolChecked = noSymbols.checked
   let isNumberChecked = noNumbers.checked
   
   let arrNbr = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]
   let symbols = [
  '!', '"', '#', '$', '%', '&', "'", '(', ')', '*',
  '+', ',', '-', '.', '/', ':', ';', '<', '=', '>',
  '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|',
  '}', '~'
];

   let filteredArr = characters
   
   if(isSymbolChecked){
       filteredArr = filteredArr.filter(e => !symbols.includes(e))
      
   }
   if(isNumberChecked){
      filteredArr = filteredArr.filter(e => !arrNbr.includes(e))
     
   } 
   
   console.log(filteredArr)
    
   return filteredArr
   
   
}

let lampEl = document.getElementById("lamp_el")
let bodyEl = document.getElementById("body_el")
let h1El = document.getElementById("h1_el")
let nsEL = document.getElementById("ns-element")
let nnEl = document.getElementById("nn-element")


let isLight = false

lampEl.addEventListener("click", function(){
   
   if(!isLight) {
   bodyEl.style.backgroundColor = "#ECFDF5"
   h1El.style.color = "#111827"
   nsEL.style.color = "#111827"
   nnEl.style.color = "#111827"
   localStorage.setItem("mode", "light")
   } else {
    bodyEl.style.backgroundColor = "#1F2937"
    h1El.style.color = "#fff"
    nsEL.style.color = "#fff"
    nnEl.style.color = "#fff"
    localStorage.setItem("mode", "dark")
   }
   
   isLight = !isLight
   
})

window.addEventListener("load", function() {
  const savedMode = localStorage.getItem("mode");
  if (savedMode === "light") {
    bodyEl.style.backgroundColor = "#ECFDF5"
    h1El.style.color = "#111827"
    nsEL.style.color = "#111827"
    nnEl.style.color = "#111827"
    isLight = true;
  } else {
    bodyEl.style.backgroundColor = "#111827"
    h1El.style.color = "#ECFDF5"
    nsEL.style.color = "#ECFDF5"
    nnEl.style.color = "#ECFDF5"
    isLight = false;
  }
});

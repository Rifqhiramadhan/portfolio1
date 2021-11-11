const txtelement = ['Photography', 'Editor', 'Pengusaha'];
let count = 0;
let txtindex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

   if(count == txtelement.length){
       count = 0;
   }

   currentTxt = txtelement[count];

   words = currentTxt.slice(0,  ++txtindex);
   document.querySelector('.efek-ngetik').textContent = words

   if(words.length == currentTxt.length){
       count++;
       txtindex 
       = 0;
   }

   setTimeout(ngetik, 500);

})();
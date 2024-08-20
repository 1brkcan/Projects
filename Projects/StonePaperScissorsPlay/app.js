//! Kullanıcı Seçimini al

var userChoice = prompt("Taş, Kağıt, Makas").toLowerCase();


//! Bilgisarin rastgele secimini yap 

var computerChoice = Math.random();

if (computerChoice < 0.34) {
    computerChoice = "taş";
}

else if (computerChoice <= 0.67){
    computerChoice = "kağıt";
}
else{
    computerChoice = "makas";
}


//! Kullanıcının seçimini ve bilgisayarın seçimini ekrana yazdır

console.log("Siz: " + userChoice);
console.log("Bilgisayar: " + computerChoice);


//! Oyun sonucunu kontrol et ve kazanani belirle

function determineWinner(user, computer){
   if (user == computer) return "Durum Berabere";

    else if (
        (user == "taş" && computer == "makas") ||
        (user == "kağıt" && computer == "taş") ||
        (user == "makas" && computer == "kağıt"))
    {
        return "Tebrikler Siz kazanınız :))";
    }
    
    else{
        return "Üzgünüm, Bilgisayar Kazandı."
    }    
}

//! Sonucu Ekrana Yazdir

console.log(determineWinner(userChoice, computerChoice));
















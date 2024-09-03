
// let c = 3;
// console.log(c-- < 3 ? ++c : c++);

// let x = "mississippi";
// let arr = x.split("");
// let s = new Set(arr);

// console.log([...s]);


 const rows = Array.from(document.querySelectorAll('tr'));

 function slideOut(row){
     row.classList.add('slide-out');

 }

 function slideIn(row, index){
     setTimeout(function(){
         row.classList.remove('slide-out');
     }, (index + 5) * 200);
 }

 rows.forEach(slideOut);
 rows.forEach(slideIn);



// const fun = () => {
//     console.log(x);
//     const x = "mississippi";
// };
// fun();


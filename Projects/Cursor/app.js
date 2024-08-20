// function ortalama(){
//     var number1 = document.getElementById("sayi1").value;
//     var number2 = document.getElementById("sayi2").value;

//     var number1 = Number(number1);
//     var number2 = Number(number2);

//     var ortalama = (number1 + number2) / 2;
    

//     document.getElementById("sonuc").innerHTML = "Ortalama: " + ortalama;
// }

// var hesaplaBtn = document.getElementById("buton");
// hesaplaBtn.onclick = ortalama;





// function alanhesapla(){

//     var uzunkenar = document.getElementById("sayi1").value;
//     var kisakenar = document.getElementById("sayi2").value;

//     var uzunkenar = Number(uzunkenar);
//     var kisakenar = Number(kisakenar);

//     var alan = uzunkenar * kisakenar;
//     var cevre = (uzunkenar + kisakenar) * 2;

//     document.getElementById("alan").innerHTML = "Alan: " + alan;
//     document.getElementById("cevre").innerHTML = "Cevre: " + cevre;

// }

// var hesaplaBtn = document.getElementById("buton");
//  hesaplaBtn.onclick = alanhesapla;





// function faktoriyel(){
//     var faktoriyele = 1;
//     var sayi1 = document.getElementById("sayi1").value;
//     sayi1 = Number(sayi1);

//     if(sayi1 => 0){

//         for(var x = 1; x <= sayi1; x++){
//             faktoriyele = faktoriyele * x;
//         } 
        
//     }

//     document.getElementById("sonuc").innerHTML = "Sonuc: " + faktoriyele;
// }
// var hesaplaBtn = document.getElementById("buton");
//   hesaplaBtn.onclick = faktoriyel;





// function notOkul(){
//     var not1 = document.getElementById("sayi1").value;
//     var not2 = document.getElementById("sayi2").value;
//     var not3 = document.getElementById("sayi3").value;

//       not1 = Number(not1);
//       not2 = Number(not2);
//       not3 = Number(not3);

//     var note = (not1 + not2 + not3) / 3;

//     if(note > 49.5){
//         document.getElementById("sonuc").innerHTML = "Ortalama: " + note + " Gectin";

//     }
//   +    else{
//         document.getElementById("sonuc").innerHTML = "Ortalama: " + note + " Kaldin";

//     }


// }
//     var hesaplaBtn = document.getElementById("buton");
//     hesaplaBtn.onclick = notOkul;





// function uniNot(){

//     var vize = document.getElementById("sayi1").value;
//     var final = document.getElementById("sayi2").value;

//     vize = Number(vize);
//     final = Number(final);

//     var ortalama = vize * 0.4 + final * 0.60;

//     if(ortalama >= 88 && ortalama <= 100){
//         document.getElementById("sonuc").innerHTML = "Ortalama: " + ortalama + " AA";
//     }
//     else if(ortalama >= 80 && ortalama <= 88){
//         document.getElementById("sonuc").innerHTML = "Ortalama: " + ortalama + " BA";
//     }
//     else if(ortalama >= 73 && ortalama <= 80){
//         document.getElementById("sonuc").innerHTML = "Ortalama: " + ortalama + " BB";
//     }
//     else if(ortalama >= 66 && ortalama <= 73){
//         document.getElementById("sonuc").innerHTML = "Ortalama: " + ortalama + " CB";
//     }
//     else if(ortalama >= 60 && ortalama <= 66){
//         document.getElementById("sonuc").innerHTML = "Ortalama: " + ortalama + " CC";
//     }
//     else if(ortalama >= 55 && ortalama <= 60){
//         document.getElementById("sonuc").innerHTML = "Ortalama: " + ortalama + " DC";
//     }
//     else if(ortalama >= 50 && ortalama <= 55){
//         document.getElementById("sonuc").innerHTML = "Ortalama: " + ortalama + " DD";
//     }
//     else{
//         document.getElementById("sonuc").innerHTML = "Ortalama: " + ortalama + " FF" + " > Kaldin";
//     }
// }

// var hesaplaBtn = document.getElementById("buton");
// hesaplaBtn.onclick = uniNot;




// Listeye Eleman Ekleme

// let butonEkle = document.getElementById("buton");
// let listeEkle = document.getElementById("liste");


// butonEkle.onclick = function(){
// let eklenenMetin = document.getElementById("metin").value;
// listeEkle.innerHTML += "<li>" + eklenenMetin + "</li>"; 

// }

// function hipotenus(){
//     let kisakenar = document.getElementById("sayi1").value;
//     let uzunkenar = document.getElementById("sayi2").value;

//     let k1 = Number(kisakenar);
//     let k2 = Number(uzunkenar);

//     let sonuc = Math.sqrt((k1 * k1) + (k2 * k2));
//     document.getElementById("sonuc").innerHTML = "Hipotenüs: " + sonuc;
// }

// let hesaplaBtn = document.getElementById("buton");
// hesaplaBtn.onclick = hipotenus;





// var canvas = document.getElementById("canvas");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var gl = canvas.getContext('webgl');
// if (!gl) {
//   console.error("Unable to initialize WebGL.");
// }

// var time = 0.0;

// var vertexSource = `  
//   attribute vec2 position;  
//   void main() {  
//     gl_Position = vec4(position, 0.0, 1.0);  
//   }  
//   `;
// var fragmentSource = `  
//   precision highp float;  
//   uniform float width;  
//   uniform float height;  
//   vec2 resolution = vec2(width, height);  
//   uniform float time;  

//   #define POINT_COUNT 8  

//   vec2 points[POINT_COUNT];  
//   const float speed = -0.5;  
//   const float len = 0.25;  
//   float intensity = 1.3;  
//   float radius = 0.008;  

//   float sdBezier(vec2 pos, vec2 A, vec2 B, vec2 C){    
//       vec2 a = B - A;  
//       vec2 b = A - 2.0*B + C;  
//       vec2 c = a * 2.0;  
//       vec2 d = A - pos;  
//       float kk = 1.0 / dot(b,b);  
//       float kx = kk * dot(a,b);  
//       float ky = kk * (2.0*dot(a,a)+dot(d,b)) / 3.0;  
//       float kz = kk * dot(d,a);     
//       float res = 0.0;  

//       float p = ky - kx*kx;  
//       float p3 = p*p*p;  
//       float q = kx*(2.0*kx*kx - 3.0*ky) + kz;  
//       float h = q*q + 4.0*p3;  
//       if(h >= 0.0){   
//           h = sqrt(h);  
//           vec2 x = (vec2(h, -h) - q) / 2.0;  
//           vec2 uv = sign(x)*pow(abs(x), vec2(1.0/3.0));  
//           float t = uv.x + uv.y - kx;  
//           t = clamp( t, 0.0, 1.0 );  
          
//           vec2 qos = d + (c + b*t)*t;  
//           res = length(qos);  
//       }else{  
//           float z = sqrt(-p);  
//           float v = acos( q/(p*z*2.0) ) / 3.0;  
//           float m = cos(v);  
//           float n = sin(v)*1.732050808;  
//           vec3 t = vec3(m + m, -n - m, n - m) * z - kx;  
//           t = clamp( t, 0.0, 1.0 );  

//           vec2 qos = d + (c + b*t.x)*t.x;  
//           float dis = dot(qos,qos);  
//           res = dis;  
//           qos = d + (c + b*t.y)*t.y;  
//           dis = dot(qos,qos);  
//           res = min(res,dis);  
//           qos = d + (c + b*t.z)*t.z;  
//           dis = dot(qos,qos);  
//           res = min(res,dis);  
//           res = sqrt( res );  
//       }  
//       return res;  
// }  

// vec2 getHeartPosition(float t){  
//       return vec2(16.0 * sin(t) * sin(t) * sin(t),  
//                                     -(13.0 * cos(t) - 5.0 * cos(2.0*t)  
//                                     - 2.0 * cos(3.0*t) - cos(4.0*t)));  
// }  

// float getGlow(float dist, float radius, float intensity){  
//       return pow(radius/dist, intensity);  
// }  
// float getSegment(float t, vec2 pos, float offset, float scale){  
//       for(int i = 0; i < POINT_COUNT; i++){  
//           points[i] = getHeartPosition(offset + float(i)*len + fract(speed * t) * 6.28);  
//       }  
//       vec2 c = (points[0] + points[1]) / 2.0;  
//       vec2 c_prev;  
//       float dist = 10000.0;  
//       for(int i = 0; i < POINT_COUNT-1; i++){  

//           c_prev = c;  
//           c = (points[i] + points[i+1]) / 2.0;  
//           dist = min(dist, sdBezier(pos, scale * c_prev, scale * points[i], scale * c));  
//       }  
//       return max(0.0, dist);  
// }  
// void main(){  
//       vec2 uv = gl_FragCoord.xy/resolution.xy;  
//       float widthHeightRatio = resolution.x/resolution.y;  
//       vec2 centre = vec2(0.5, 0.5);  
//       vec2 pos = centre - uv;  
//       pos.y /= widthHeightRatio;  
      
//       pos.y += 0.02;  
//       float scale = 0.000015 * height;  
//       float t = time;  
      
//   float dist = getSegment(t, pos, 0.0, scale);  
//   float glow = getGlow(dist, radius, intensity);  
//   vec3 col = vec3(0.0);  
      
//   col += 10.0*vec3(smoothstep(0.003, 0.001, dist));  

//   col += glow * vec3(1.0,0.05,0.3);  

//   dist = getSegment(t, pos, 3.4, scale);  
//   glow = getGlow(dist, radius, intensity);  

//   col += 10.0*vec3(smoothstep(0.003, 0.001, dist));  

//   col += glow * vec3(0.1,0.4,1.0);  
  
//       col = 1.0 - exp(-col);  

//       col = pow(col, vec3(0.4545));  

//       gl_FragColor = vec4(col,1.0);  
// }  
// `;
// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   gl.viewport(0, 0, canvas.width, canvas.height);
//   gl.uniform1f(widthHandle, window.innerWidth);
//   gl.uniform1f(heightHandle, window.innerHeight);
// }
  
// function compileShader(shaderSource, shaderType) {
//   var shader = gl.createShader(shaderType);
//   gl.shaderSource(shader, shaderSource);
//   gl.compileShader(shader);
//   if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
//     throw "Shader compile failed with: " + gl.getShaderInfoLog(shader);
//   }
//   return shader;
// }

// function getAttribLocation(program, name) {
//   var attributeLocation = gl.getAttribLocation(program, name);
//   if (attributeLocation === -1) {
//     throw 'Cannot find attribute ' + name + '.';
//   }
//   return attributeLocation;
// }
// function getUniformLocation(program, name) {
//   var attributeLocation = gl.getUniformLocation(program, name);
//   if (attributeLocation === -1) {
//     throw 'Cannot find uniform ' + name + '.';
//   }
//   return attributeLocation;
// }

// var vertexShader = compileShader(vertexSource, gl.VERTEX_SHADER);
// var fragmentShader = compileShader(fragmentSource, gl.FRAGMENT_SHADER);

// var program = gl.createProgram();
// gl.attachShader(program, vertexShader);
// gl.attachShader(program, fragmentShader);
// gl.linkProgram(program);
// gl.useProgram(program);

// var vertexData = new Float32Array([
//   -1.0, 1.0,   
//   -1.0, -1.0,    
//   1.0, 1.0,     
//   1.0, -1.0,   
// ]);

// var vertexDataBuffer = gl.createBuffer();
// gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
// gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

// var positionHandle = getAttribLocation(program, 'position');
// gl.enableVertexAttribArray(positionHandle);
// gl.vertexAttribPointer(positionHandle,
//   2,
//   gl.FLOAT,
//   false,
//   2 * 4,
//   0
// );
// var timeHandle = getUniformLocation(program, 'time');
// var widthHandle = getUniformLocation(program, 'width');
// var heightHandle = getUniformLocation(program, 'height');
// gl.uniform1f(widthHandle, window.innerWidth);
// gl.uniform1f(heightHandle, window.innerHeight);
// var lastFrame = Date.now();
// var thisFrame;
// function draw() {

//   thisFrame = Date.now();
//   time += (thisFrame - lastFrame) / 1000;
//   lastFrame = thisFrame;

//   gl.uniform1f(timeHandle, time);

//   gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
//   requestAnimationFrame(draw);
// }
// draw();




























// function goster(){

// let sayi1 = document.getElementById("sayi1").value;
// let sayi2 = document.getElementById("sayi2").value;
// let sayi3 = document.getElementById("sayi3").value;

// sayi1 = Number(sayi1);
// sayi2 = Number(sayi2);
// sayi3 = Number(sayi3);

//     if(sayi1 > sayi2 && sayi1 > sayi3){
//         document.getElementById("sonuc").innerHTML = "En büyük 1. Sayı = " + sayi1;
//     }
//     else if(sayi2 > sayi1 && sayi2 > sayi3){
//         document.getElementById("sonuc").innerHTML = "En büyük 2. Sayı = " + sayi2;
//     }
//     else if(sayi3 > sayi1 && sayi3 > sayi2){
//         document.getElementById("sonuc").innerHTML = "En büyük 3. Sayı = " + sayi3;
//     }
//     else if(sayi1 == sayi2 || sayi1 == sayi3 || sayi2 == sayi3){
//         document.getElementById("sonuc").innerHTML = "Eşitlik var KRALL";
//     }
// }
// let hesaplaBtn = document.getElementById("buton");
// hesaplaBtn.onclick = goster;



// function daire(){
//     var pi = 3.14, dairealan, dairecevre;
//     var sayi = document.getElementById("sayi").value;
//     var yaricap = Number(sayi);

//     dairealan = pi * yaricap * yaricap;
//     dairecevre = 2 * pi * yaricap;

//     document.getElementById("sonuc").innerHTML = "Dairenin Alani: " + dairealan + ", Dairenin Cevresi: " + dairecevre;

// }
// var hesaplaBtn = document.getElementById("buton");
// hesaplaBtn.onclick = daire;



// var yasNesne = document.getElementById("yas");

//         function ehliyet(){
//             var yas =Number(yasNesne.value);
//             var durumGoster = document.getElementById("sonuc");
//             if(yas >= 18){
//                 durumGoster.innerHTML = "Yasiniz ehliyet almaya uygundur";

//             }
//             else{
//                 durumGoster.innerHTML = "Yasiniz Ehliyet almaya uygun degildir " + ( 18 - yas) + " yil sonra ehliyet alabilirsiniz." ;
//             }

//         }

    
//         const hesaplaBtn = document.querySelector("#goster");
//         hesaplaBtn.onclick = ehliyet;





// var sayi1 = parseInt(prompt("sayi 1 giriniz"));
// var sayi2 = parseInt(prompt("sayi 2 giriniz"));
// var sayi3 = parseInt(prompt("sayi 3 giriniz"));

// var ortalama = (sayi1 + sayi2 + sayi3) / 3;

// if(ortalama < 50){
//     document.write(ortalama + " ile kaldin");
// }
// else{
//     document.write(ortalama + " ile gectin");
// }




// var toplam = 0;

// for(var i = 1; i < 50; i++ ){
//     toplam = toplam + i;
// }    
// document.write("Toplam: " + toplam);


// var i = 0;

// while (i < 10) {
//     document.write("burak <br>");
//     i++;
// }



// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9, 10];

//!const array3 = array1.concat(array2);
//!const array4 = [...array1, ...array2,]

//console.log(array3);
//console.log(array4);




document.onmousemove = (e) => {

    let img = document.createElement("img");
    img.src = "araba.jpg";
    img.style.position = "absolute";
    img.style.left = e.pageX + "px";
    img.style.top = e.pageY + "px";
    img.style.width = 100 + "px";
    img.style.height = 100 + "px";
    img.animate([{opacity: 0}],
        {duration: 1000}).onfinish = () => img.remove();
        document.body.append(img)


}






























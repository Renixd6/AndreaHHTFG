

let cuenta = 0;

let imagenes1 = [" Img/profe.PNG"," Img/sierra.PNG"," Img/palermo.PNG"," Img/moscu.PNG"];
let imagenes2 = [" Img/tokio.PNG"," Img/arturito.PNG"," Img/estocolmo.PNG"," Img/rio.PNG"];
let imagenes3 = [" Img/berlin.PNG"," Img/helsinki.PNG"," Img/helsinki.PNG"," Img/nairobi.PNG",];
let imagenes4 = [" Img/denver.PNG"," Img/oslo.PNG"," Img/oslo.PNG"," Img/lisboa.PNG"];

let img =document.getElementById("uno");
let img2 =document.getElementById("dos");
let img3 =document.getElementById("tres");
let img4 =document.getElementById("cuatro");




function dere() {

  if (cuenta ==0){
    cuenta =3;
  }else{cuenta--;}
 
  if (cuenta ==1 ){
   img3.style.display = "none";
   img4.style.display = "none";

  }else{
    img3.style.display = "inline";
    img4.style.display = "inline";

  }
  img.src = imagenes1[cuenta];
  img2.src = imagenes2[cuenta];
  img3.src = imagenes3[cuenta];  
  img4.src = imagenes4[cuenta]; 

  if(cuenta == 0){
  document.getElementById("uno").classList.add("anima");
  document.getElementById("dos").classList.add("anima");
  document.getElementById("tres").classList.add("anima");
  document.getElementById("cuatro").classList.add("anima");

  document.getElementById("uno").classList.remove("anima4");
  document.getElementById("dos").classList.remove("anima4");
  document.getElementById("tres").classList.remove("anima4");
  document.getElementById("cuatro").classList.remove("anima4");
}

  if(cuenta == 3){
    document.getElementById("uno").classList.add("anima3");
    document.getElementById("dos").classList.add("anima3");
    document.getElementById("tres").classList.add("anima3");
    document.getElementById("cuatro").classList.add("anima3");

    document.getElementById("uno").classList.remove("anima");
    document.getElementById("dos").classList.remove("anima");
    document.getElementById("tres").classList.remove("anima");
    document.getElementById("cuatro").classList.remove("anima");

}

if(cuenta == 2){
    document.getElementById("uno").classList.add("anima2");
    document.getElementById("dos").classList.add("anima2");
    document.getElementById("tres").classList.add("anima2");
    document.getElementById("cuatro").classList.add("anima2");

    document.getElementById("uno").classList.remove("anima3");
    document.getElementById("dos").classList.remove("anima3");
    document.getElementById("tres").classList.remove("anima3");
    document.getElementById("cuatro").classList.remove("anima3");
}
if(cuenta == 1){
    document.getElementById("uno").classList.add("anima4");
    document.getElementById("dos").classList.add("anima4");
    document.getElementById("tres").classList.add("anima4");
    document.getElementById("cuatro").classList.add("anima4");

    document.getElementById("uno").classList.remove("anima2");
    document.getElementById("dos").classList.remove("anima2");
    document.getElementById("tres").classList.remove("anima2");
    document.getElementById("cuatro").classList.remove("anima2");
}}



function izq() {

    if (cuenta ==0){
      cuenta =1;
    }else{cuenta++;}
   
    if (cuenta ==4 ){cuenta=0;}
    if (cuenta ==1 ){
     img3.style.display = "none";
     img4.style.display = "none";
        
    }else{
      img3.style.display = "inline";
      img4.style.display = "inline";
  
    }
    img.src = imagenes1[cuenta];
    img2.src = imagenes2[cuenta];
    img3.src = imagenes3[cuenta];  
    img4.src = imagenes4[cuenta]; 


    if(cuenta == 0){
        document.getElementById("uno").classList.add("anima");
        document.getElementById("dos").classList.add("anima");
        document.getElementById("tres").classList.add("anima");
        document.getElementById("cuatro").classList.add("anima");
      
        document.getElementById("uno").classList.remove("anima4");
        document.getElementById("dos").classList.remove("anima4");
        document.getElementById("tres").classList.remove("anima4");
        document.getElementById("cuatro").classList.remove("anima4");
        
      }
      
        if(cuenta == 1){
          document.getElementById("uno").classList.add("anima2");
          document.getElementById("dos").classList.add("anima2");
          document.getElementById("tres").classList.add("anima2");
          document.getElementById("cuatro").classList.add("anima2");
      
          document.getElementById("uno").classList.remove("anima");
          document.getElementById("dos").classList.remove("anima");
          document.getElementById("tres").classList.remove("anima");
          document.getElementById("cuatro").classList.remove("anima");
      }
      
      if(cuenta == 2){
          document.getElementById("uno").classList.add("anima3");
          document.getElementById("dos").classList.add("anima3");
          document.getElementById("tres").classList.add("anima3");
          document.getElementById("cuatro").classList.add("anima3");
      
          document.getElementById("uno").classList.remove("anima2");
          document.getElementById("dos").classList.remove("anima2");
          document.getElementById("tres").classList.remove("anima2");
          document.getElementById("cuatro").classList.remove("anima2");
      }
      if(cuenta == 3){
          document.getElementById("uno").classList.add("anima4");
          document.getElementById("dos").classList.add("anima4");
          document.getElementById("tres").classList.add("anima4");
          document.getElementById("cuatro").classList.add("anima4");
      
          document.getElementById("uno").classList.remove("anima3");
          document.getElementById("dos").classList.remove("anima3");
          document.getElementById("tres").classList.remove("anima3");
          document.getElementById("cuatro").classList.remove("anima3");
      }
  }


  let cuenta2 = 0;

let imagenes1a = [" Img/Lidia.png"," Img/Marga.png"];
let imagenes2a = [" Img/Fran.png"," Img/Carlos.png"];
let imagenes3a = [" Img/Angeles.png"," Img/Sara.png"];
let imagenes4a = [" Img/Carlota.png"," Img/Carmen.png"];

let imga =document.getElementById("uno2");
let img2a =document.getElementById("dos2");
let img3a =document.getElementById("tres2");
let img4a =document.getElementById("cuatro2");




function dere2() {

  if (cuenta2 ==0){
    cuenta2 =1;
  }else{cuenta2--;}
 


  if(cuenta2 == 0){
  document.getElementById("uno2").classList.add("anima");
  document.getElementById("dos2").classList.add("anima");
  document.getElementById("tres2").classList.add("anima");
  document.getElementById("cuatro2").classList.add("anima");

  document.getElementById("uno2").classList.remove("anima4");
  document.getElementById("dos2").classList.remove("anima4");
  document.getElementById("tres2").classList.remove("anima4");
  document.getElementById("cuatro2").classList.remove("anima4");
}

if(cuenta2 == 1){
    document.getElementById("uno2").classList.add("anima4");
    document.getElementById("dos2").classList.add("anima4");
    document.getElementById("tres2").classList.add("anima4");
    document.getElementById("cuatro2").classList.add("anima4");

    document.getElementById("uno2").classList.remove("anima");
    document.getElementById("dos2").classList.remove("anima");
    document.getElementById("tres2").classList.remove("anima");
    document.getElementById("cuatro2").classList.remove("anima");
}

imga.src = imagenes1a[cuenta2];
img2a.src = imagenes2a[cuenta2];
img3a.src = imagenes3a[cuenta2];  
img4a.src = imagenes4a[cuenta2]; 




}

function izq2() {

    if (cuenta2 ==0){
      cuenta2 =1;
    }else{cuenta2++;}
    if (cuenta2 ==2 ){cuenta2=0;}
  
  
    if(cuenta2 == 0){
    document.getElementById("uno2").classList.add("anima");
    document.getElementById("dos2").classList.add("anima");
    document.getElementById("tres2").classList.add("anima");
    document.getElementById("cuatro2").classList.add("anima");
  
    document.getElementById("uno2").classList.remove("anima4");
    document.getElementById("dos2").classList.remove("anima4");
    document.getElementById("tres2").classList.remove("anima4");
    document.getElementById("cuatro2").classList.remove("anima4");
  }
  
  if(cuenta2 == 1){
      document.getElementById("uno2").classList.add("anima4");
      document.getElementById("dos2").classList.add("anima4");
      document.getElementById("tres2").classList.add("anima4");
      document.getElementById("cuatro2").classList.add("anima4");
  
      document.getElementById("uno2").classList.remove("anima");
      document.getElementById("dos2").classList.remove("anima");
      document.getElementById("tres2").classList.remove("anima");
      document.getElementById("cuatro2").classList.remove("anima");
  }
  
  imga.src = imagenes1a[cuenta2];
  img2a.src = imagenes2a[cuenta2];
  img3a.src = imagenes3a[cuenta2];  
  img4a.src = imagenes4a[cuenta2]; 
  
  
  
  
  }

  

let cuenta3 = 0;

let imagenes1b = [" Img/will.PNG"," Img/jon.PNG"," Img/eleven.PNG"];
let imagenes2b = [" Img/mike.PNG"," Img/nancy.PNG"," Img/max.PNG"];
let imagenes3b = [" Img/dustin.png"," Img/jim.PNG"," Img/jim.PNG"];
let imagenes4b = [" Img/lucas.PNG"," Img/joyce.PNG"," Img/joyce.PNG"];

let imgb =document.getElementById("uno3");
let img2b =document.getElementById("dos3");
let img3b =document.getElementById("tres3");
let img4b =document.getElementById("cuatro3");




function dere3() {

  if (cuenta3 ==0){
    cuenta3 =2;
  }else{cuenta3--;}
 
  if (cuenta3 ==1 ){
   img3b.style.display = "none";
   img4b.style.display = "none";

  }else{
    img3b.style.display = "inline";
    img4b.style.display = "inline";

  }
  imgb.src = imagenes1b[cuenta3];
  img2b.src = imagenes2b[cuenta3];
  img3b.src = imagenes3b[cuenta3];  
  img4b.src = imagenes4b[cuenta3]; 

  if(cuenta3 == 0){
  document.getElementById("uno3").classList.add("anima");
  document.getElementById("dos3").classList.add("anima");
  document.getElementById("tres3").classList.add("anima");
  document.getElementById("cuatro3").classList.add("anima");

  document.getElementById("uno3").classList.remove("anima3");
  document.getElementById("dos3").classList.remove("anima3");
  document.getElementById("tres3").classList.remove("anima3");
  document.getElementById("cuatro3").classList.remove("anima3");
}


if(cuenta3 == 2){
    document.getElementById("uno3").classList.add("anima2");
    document.getElementById("dos3").classList.add("anima2");
    document.getElementById("tres3").classList.add("anima2");
    document.getElementById("cuatro3").classList.add("anima2");

    document.getElementById("uno3").classList.remove("anima");
    document.getElementById("dos3").classList.remove("anima");
    document.getElementById("tres3").classList.remove("anima");
    document.getElementById("cuatro3").classList.remove("anima");
}
if(cuenta3 == 1){
    document.getElementById("uno3").classList.add("anima3");
    document.getElementById("dos3").classList.add("anima3");
    document.getElementById("tres3").classList.add("anima3");
    document.getElementById("cuatro3").classList.add("anima3");

    document.getElementById("uno3").classList.remove("anima2");
    document.getElementById("dos3").classList.remove("anima2");
    document.getElementById("tres3").classList.remove("anima2");
    document.getElementById("cuatro3").classList.remove("anima2");
}}


function izq3() {

    if (cuenta3 ==0){
      cuenta3 =1;
    }else{cuenta3++;}
    if (cuenta3 ==3 ){cuenta3=0;}
    if (cuenta3 ==1 ){
     img3b.style.display = "none";
     img4b.style.display = "none";
  
    }else{
      img3b.style.display = "inline";
      img4b.style.display = "inline";
  
    }
    imgb.src = imagenes1b[cuenta3];
    img2b.src = imagenes2b[cuenta3];
    img3b.src = imagenes3b[cuenta3];  
    img4b.src = imagenes4b[cuenta3]; 
  
    if(cuenta3 == 0){
    document.getElementById("uno3").classList.add("anima");
    document.getElementById("dos3").classList.add("anima");
    document.getElementById("tres3").classList.add("anima");
    document.getElementById("cuatro3").classList.add("anima");
  
    document.getElementById("uno3").classList.remove("anima3");
    document.getElementById("dos3").classList.remove("anima3");
    document.getElementById("tres3").classList.remove("anima3");
    document.getElementById("cuatro3").classList.remove("anima3");
  }
  
  

  if(cuenta3 == 1){
      document.getElementById("uno3").classList.add("anima2");
      document.getElementById("dos3").classList.add("anima2");
      document.getElementById("tres3").classList.add("anima2");
      document.getElementById("cuatro3").classList.add("anima2");
  
      document.getElementById("uno3").classList.remove("anima");
      document.getElementById("dos3").classList.remove("anima");
      document.getElementById("tres3").classList.remove("anima");
      document.getElementById("cuatro3").classList.remove("anima");
  }

  if(cuenta3 == 2){
    document.getElementById("uno3").classList.add("anima3");
    document.getElementById("dos3").classList.add("anima3");
    document.getElementById("tres3").classList.add("anima3");
    document.getElementById("cuatro3").classList.add("anima3");

    document.getElementById("uno3").classList.remove("anima2");
    document.getElementById("dos3").classList.remove("anima2");
    document.getElementById("tres3").classList.remove("anima2");
    document.getElementById("cuatro3").classList.remove("anima2");
}
}


let cuenta4 = 0;

let imagenes1c = [" Img/otis.PNG"," Img/ola.PNG"," Img/adam.PNG"];
let imagenes2c = [" Img/maeve.PNG"," Img/aimee.PNG"," Img/jackson.PNG"];
let imagenes3c = [" Img/jean.PNG"," Img/rahim.PNG"," Img/ruby.PNG"];
let imagenes4c = [" Img/eric.PNG"," Img/michael.PNG"," Img/lily.PNG"];

let imgc =document.getElementById("uno4");
let img2c =document.getElementById("dos4");
let img3c =document.getElementById("tres4");
let img4c =document.getElementById("cuatro4");




function dere4() {

  if (cuenta4 ==0){
    cuenta4 =2;
  }else{cuenta4--;}
 


  if(cuenta4 == 0){
  document.getElementById("uno4").classList.add("anima");
  document.getElementById("dos4").classList.add("anima");
  document.getElementById("tres4").classList.add("anima");
  document.getElementById("cuatro4").classList.add("anima");

  document.getElementById("uno4").classList.remove("anima3");
  document.getElementById("dos4").classList.remove("anima3");
  document.getElementById("tres4").classList.remove("anima3");
  document.getElementById("cuatro4").classList.remove("anima3");
}

if(cuenta4 == 2){
    document.getElementById("uno4").classList.add("anima2");
    document.getElementById("dos4").classList.add("anima2");
    document.getElementById("tres4").classList.add("anima2");
    document.getElementById("cuatro4").classList.add("anima2");

    document.getElementById("uno4").classList.remove("anima");
    document.getElementById("dos4").classList.remove("anima");
    document.getElementById("tres4").classList.remove("anima");
    document.getElementById("cuatro4").classList.remove("anima");
}
if(cuenta4 == 1){
    document.getElementById("uno4").classList.add("anima3");
    document.getElementById("dos4").classList.add("anima3");
    document.getElementById("tres4").classList.add("anima3");
    document.getElementById("cuatro4").classList.add("anima3");

    document.getElementById("uno4").classList.remove("anima2");
    document.getElementById("dos4").classList.remove("anima2");
    document.getElementById("tres4").classList.remove("anima2");
    document.getElementById("cuatro4").classList.remove("anima2");
}

imgc.src = imagenes1c[cuenta4];
img2c.src = imagenes2c[cuenta4];
img3c.src = imagenes3c[cuenta4];  
img4c.src = imagenes4c[cuenta4]; 




}
function izq4() {

    if (cuenta4 ==0){
      cuenta4 =1;
    }else{cuenta4++;}
    if (cuenta4 ==3 ){cuenta4=0;}
  
  
    if(cuenta4 == 0){
    document.getElementById("uno4").classList.add("anima");
    document.getElementById("dos4").classList.add("anima");
    document.getElementById("tres4").classList.add("anima");
    document.getElementById("cuatro4").classList.add("anima");
  
    document.getElementById("uno4").classList.remove("anima3");
    document.getElementById("dos4").classList.remove("anima3");
    document.getElementById("tres4").classList.remove("anima3");
    document.getElementById("cuatro4").classList.remove("anima3");
  }
  
  if(cuenta4 == 1){
      document.getElementById("uno4").classList.add("anima2");
      document.getElementById("dos4").classList.add("anima2");
      document.getElementById("tres4").classList.add("anima2");
      document.getElementById("cuatro4").classList.add("anima2");
  
      document.getElementById("uno4").classList.remove("anima");
      document.getElementById("dos4").classList.remove("anima");
      document.getElementById("tres4").classList.remove("anima");
      document.getElementById("cuatro4").classList.remove("anima");
  }
  if(cuenta4 == 2){
      document.getElementById("uno4").classList.add("anima3");
      document.getElementById("dos4").classList.add("anima3");
      document.getElementById("tres4").classList.add("anima3");
      document.getElementById("cuatro4").classList.add("anima3");
  
      document.getElementById("uno4").classList.remove("anima2");
      document.getElementById("dos4").classList.remove("anima2");
      document.getElementById("tres4").classList.remove("anima2");
      document.getElementById("cuatro4").classList.remove("anima2");
  }
  
  imgc.src = imagenes1c[cuenta4];
  img2c.src = imagenes2c[cuenta4];
  img3c.src = imagenes3c[cuenta4];  
  img4c.src = imagenes4c[cuenta4]; 
  
  
  
  
  }
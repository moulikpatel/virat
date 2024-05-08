let img=document.getElementById("img0");
let previous=document.getElementById("prev");
let next=document.getElementById("next");
let count=0;
previous.addEventListener('click',prev);
next.addEventListener('click',nex);

function prev(){
    count=count-1;
    if(count < 0){
        count=7;
    }
    if (count >7 ){
        count=0;
    }
    if(count==0){
        img.src="img/img0.webp";
    }
    else if(count==1){
        img.src="img/img1.jpg";
    }
    else if(count==2){
        img.src="img/img2.webp";
    }
    else if(count==3){
        img.src="img/img3.avif";
    }
    else if(count==4){
        img.src="img/img4.webp";
    }
    else if(count==5){
        img.src="img/img5.webp";
    }
    else if(count==6){
        img.src="img/img6.webp";
    }
    else if(count==7){
        img.src="img/img7.jpg";
    }
    if (count >8 ){
        count=0;
    }
}
function nex(){
    count=count+1;
    if (count >7 ){
        count=0;
    }
    if (count==0){
        img.src="img/img0.webp";
    }
    else if(count==1){
    
        img.src="img/img1.jpg";
    }
    else if(count==2){
        img.src="img/img2.webp";
    }
    else if(count==3){
        img.src="img/img3.avif";
    }
    else if(count==4){
        img.src="img/img4.webp";
    }
    else if(count==5){
        img.src="img/img5.webp";
    }
    else if(count==6){
        img.src="img/img6.webp";
    }
    else if(count==7){
        img.src="img/img7.jpg";
    }
}

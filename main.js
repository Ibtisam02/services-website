let typeWrite=document.getElementById("typeWrite");
let servicesArr=["Video Production & Editing   ","Graphic Design   ","Website & App Development   ","Content Writing   ","Branding & Design   ","Photography   ","Scocial Media Management   ","SEO   "]
let num=0;
let cIndex=0;
 let type=()=>{
    let now=servicesArr[num];
    typeWrite.innerText=now.slice(0,cIndex);
    cIndex++;
    if (cIndex>now.length) {
        
        cIndex=0;
        num++;
        if (num>=servicesArr.length) {
            num=0
        }
    }
}
setInterval(type,200)


let navi2=document.querySelector(".navi2");
let bars=document.getElementById("bars");
let cross=document.getElementById("Xmark");
bars.addEventListener("click",()=>{
    navi2.style.display="block";
    bars.style.display="none"
})
cross.addEventListener("click",()=>{
    navi2.style.display="none";
    bars.style.display="block"
})
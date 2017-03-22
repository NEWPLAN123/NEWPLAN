var xxk=document.querySelector(".xxk");
var gz=document.querySelectorAll(".xxk li");
var ka=document.querySelector(".ka")
var zp=document.querySelectorAll(".ka div");
for(i=0;i<gz.length;i++){
    gz[i].index=[i];
    gz[i].onclick=function(){
        for(y=0;y<zp.length;y++){
            zp[y].style.display="none";
        }
        this.className="active";
        zp[this.index].style.display="block";
    }
}

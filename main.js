



var scroll = window.pageYOffset;
window.addEventListener("scroll", function(){
var currentScroll = window.pageYOffset;
    var navbar  = this.document.querySelector("#navbar-bg");
        navbar.classList.toggle("sticky" , window.pageYOffset > 0);
    if(scroll > currentScroll || this.scroll < 200){
        this.document.querySelector("#navbar-bg").style.top = "0px"
    }else{
        this.document.querySelector("#navbar-bg").style.top = "-100px"
        
    }
    scroll = currentScroll
})  





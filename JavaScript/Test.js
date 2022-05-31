const link = document.getElementsByClassName("link");
function f1() {
    //   console.log(link.length);
    for (let i = 0; i < link.length; i++) {
        console.log(link[i]);
    }
}
f1();
/*    function markMenuLink() {
    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener('click', function () {
            let active = document.querySelectorAll('.clicked');
            active[0].className = active[0].className.replace("clicked", "");
            this.className += " clicked";
        })
    }
}
markMenuLink();
*/
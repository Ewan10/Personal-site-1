/* Marking the menu tab on click */
const link = document.querySelectorAll('.link');

function markMenuLink() {
    for (let i = 0; i < link.length; i++) {
        link[i].addEventListener('click', function () {
            let active = document.querySelectorAll('.clicked');
            active[0].className = active[0].className.replace("clicked", "");
            this.className += " clicked";
        })
    }
}
markMenuLink();

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnScroll").style.display = "block";

    } else {
        document.getElementById("btnScroll").style.display = "none";
    }
}

function toUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
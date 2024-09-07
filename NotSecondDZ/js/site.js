function togglePane() {
    var pane = document.getElementById("pane");
    if (pane.style.left === "0px") {
        pane.style.left = "-340px";
    } else {
        pane.style.left = "0px";
    }
}

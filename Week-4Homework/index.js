var links = document.getElementsByClassName("link");
for (const link of links) {
        link.addEventListener("click", () => console.log("Anchor was clicked."));
}

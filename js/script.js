if (localStorage.getItem("visitedBefore")) {
    document.documentElement.classList.add("skip");
} else {
    localStorage.setItem("visitedBefore", "true");
}

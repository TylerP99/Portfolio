let search = document.querySelector(".search-btn")
let form = document.querySelector(".search-form")
let text = document.querySelector(".search-text")
search.addEventListener("click",toggleSearch)


function toggleSearch() {
    if(search.classList.contains("search-off")) {
        search.classList.add("search-on")
        search.classList.remove("search-off")
        form.classList.toggle("hidden");
        text.classList.add("search-text-on")
        text.classList.remove("search-text-off")
        text.innerText = "Close Search X"
    }
    else
    {
        search.classList.add("search-off")
        search.classList.remove("search-on")
        form.classList.toggle("hidden");
        text.classList.add("search-text-off")
        text.classList.remove("search-text-on")
        text.innerText = "Search"
    }
}
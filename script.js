var d = document,
  tabs = d.querySelector(".tabs"),
  tab = d.querySelectorAll("li"),
  content = d.querySelectorAll(".content");

tabs.addEventListener("click", function (e) {
  if (e.target.nodeName === "LI") {
    for (let i = 0; i < tab.length; i++) {
      tab[i].classList.remove("active");
    }
    e.target.classList.add("active");

    for (let i = 0; i < content.length; i++) {
      content[i].classList.remove("active");
    }
    let tabId = "#" + e.target.dataset.tabname;
    d.querySelector(tabId).classList.add("active");
  }
});

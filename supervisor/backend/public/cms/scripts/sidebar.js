let navigationLinks = document.querySelectorAll(".navigation-link");
let websiteBaseURL =
  `/cms/` + document.querySelector("#websiteID").getAttribute("data-websiteID");

navigationLinks.forEach(link => {
  let pageLink = link.getAttribute("href");
  link.addEventListener("click", event => {
    event.preventDefault();
    let url = window.location.origin + `${websiteBaseURL}` + `/${pageLink}`;
    let parentDiv = getClosest(link, ".sidebar-item");
    document.querySelector(".active").classList.remove("active");
    parentDiv.classList.add("active");

    setTimeout(() => {
      window.location.href = url;
    }, 350);
  });
});

var getClosest = function(elem, selector) {
  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
  }

  // Get the closest matching element
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector)) return elem;
  }
  return null;
};

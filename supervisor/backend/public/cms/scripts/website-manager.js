window.onload = () => {
  // Animation for dropdown menu
  let dropdownIcon = document.querySelector(".dropdown-icon");
  let dropdownMenu = document.querySelector(".dropdown-menu");
  let profileContainer = document.querySelector(".profile-container");
  let navigationItems = document.querySelectorAll("li > a");
  profileContainer.addEventListener("click", () => {
    if (
      dropdownMenu.style.height === "0px" ||
      dropdownMenu.style.height === ""
    ) {
      dropdownIcon.style.transform = "rotate(180deg)";
      dropdownMenu.style.height = "90px";
      for (var i = 0; i < navigationItems.length; i++) {
        let listItem = navigationItems[i];
        listItem.style.display = "block";
        setTimeout(() => {
          listItem.style.opacity = "1";
        }, i * 150 + 200);
      }
    } else {
      dropdownIcon.style.transform = "rotate(0deg)";
      dropdownMenu.style.height = "0px";
      for (var i = 0; i < navigationItems.length; i++) {
        let listItem = navigationItems[i];
        listItem.style.opacity = "0";
        setTimeout(() => {
          listItem.style.display = "none";
        }, 500);
      }
    }
  });

  // Search animation
  let searchBar = document.querySelector(".website-input");
  let searchIcon = document.querySelector(".search-icon");
  searchBar.addEventListener("focus", () => {
    searchIcon.style.paddingTop = "5px";
    searchIcon.style.paddingBottom = "5px";
  });
  searchBar.addEventListener("focusout", () => {
    searchIcon.style.paddingTop = "10px";
    searchIcon.style.paddingBottom = "10px";
  });

  // Website card animation
  let websiteCards = document.querySelectorAll(".website-card");
  for (var i = 0; i < websiteCards.length; i++) {
    let card = websiteCards[i];
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.top = "0px";
      card.style.left = "0px";
    }, i * 100);
  }
  let newWebsiteCard = document.querySelector(".add-new-website");
  setTimeout(() => {
    newWebsiteCard.style.opacity = "1";
  }, i * websiteCards.length + 300);
};

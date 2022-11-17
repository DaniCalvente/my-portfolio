let visibleMenu = false;
//function that either show or hide the menu
function showOrHideMenu() {
  if (visibleMenu) {
    document.getElementById("nav").classList = "";
    visibleMenu = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    visibleMenu = true;
  }
}

// function that hides menu after selecting one option
function select() {
  document.getElementById("nav").classList = "";
  visibleMenu = false;
}

// function that swicht the language

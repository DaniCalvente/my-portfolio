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

// Multi-language feature
const flagsElement = document.getElementById("flags");

flagsElement.addEventListener("click", (e) => {
  console.log(e.target.parentElement.dataset.language);
  let selectedLanguage = e.target.parentElement.dataset.language;
  changeLanguage(selectedLanguage);
  if (selectedLanguage == "en") {
    document.getElementById("en-button").style.display = "block";
    document.getElementById("es-button").style.display = "none";
  } else {
    document.getElementById("es-button").style.display = "block";
    document.getElementById("en-button").style.display = "none";
  }
});

const textsToChange = document.querySelectorAll("[data-section]");

// function that swicht the language

const changeLanguage = async (language) => {
  const requestJson = await fetch(`./languages/${language}.json`);
  const texts = await requestJson.json();

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    //console.log(section, value);

    textToChange.innerHTML = texts[section][value];
  }
};

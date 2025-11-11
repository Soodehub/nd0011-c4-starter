//DO NOT CHANGE ANYTHING IN THIS FILE//
// This file renders the about page content

const renderAboutPage = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const aboutContainer = document.createElement("div");
  aboutContainer.className = "aboutContainer";

  // نشانهٔ سیپرس
  aboutContainer.setAttribute("data-cy", "about-page");

  const header = document.createElement("h2");
  header.textContent = "About Study Night";

  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Study Night is designed to help learners create and review digital flashcards easily.";

  aboutContainer.append(header, paragraph);
  main.append(aboutContainer);
};

export { renderAboutPage };

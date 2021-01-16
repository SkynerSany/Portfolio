(function createBtnsBox() {
  const div = document.createElement("div");
  div.className = "settings_button";
  document.querySelector("body").append(div);
})();

function createBtnMobile() {
  const div = document.createElement("div");
  const span = document.createElement("span");
  div.className = "settings_button__mobile btn";
  span.textContent = "Mobile";
  div.append(span);
  document.querySelector(".settings_button").append(div);
}

function createBtnBack() {
  const div = document.createElement("div");
  const span = document.createElement("span");
  div.className = "settings_button__back btn";
  span.textContent = "Back";
  div.append(span);
  document.querySelector(".settings_button").append(div);
}

function addEventsForBtns() {
  const btnMobile = document.querySelector(".settings_button__mobile");
  const back = document.querySelector(".settings_button__back");
  const settingsButton = document.querySelector(".settings_button");
  const windowSize = {
    Mobile: 1500,
    Desktop: 375,
  };

  if (!window.matchMedia("(min-width: 376px)").matches) {
    btnMobile.style.display = "none";
  }

  function switchSize(size) {
    Array.from(document.styleSheets[0].cssRules).forEach((el, i) => {
      if (el.media) {
        el.media.mediaText = `(max-width: ${size}px)`;
      }
    });
  }
  
  if (btnMobile) {
    btnMobile.addEventListener("click", () => {
      let type = btnMobile.firstChild.textContent;
      if (type === "Mobile") {
        switchSize(window.innerWidth);
        btnMobile.firstChild.textContent = "Desktop";
      } else {
        switchSize(windowSize[type]);
        btnMobile.firstChild.textContent = "Mobile";
      }
    });
  }

  back.addEventListener("click", () => {
    document.location = "/Portfolio/index.html";
  });
}

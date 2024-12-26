document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("openButton");
  const closeButton = document.getElementById("closeButton");
  const popupWindow = document.getElementById("popupWindow");

  const style = document.createElement("style");
  style.innerHTML = `
    #popupWindow {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 7;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    iframe {
      max-width: 80%;
      max-height: 80%;
    }

    #closeButton {
      margin-top: 20px;
      background-color: #1e1d1d;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }

    #closeButton:hover {
      background-color: #6a6a6a;
    }
  `;
  document.head.appendChild(style);

  openButton.addEventListener("click", function () {
    popupWindow.style.display = "flex";
  });

  closeButton.addEventListener("click", function () {
    popupWindow.style.display = "none";
  });
});

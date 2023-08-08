window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  let wOffset = window.innerWidth / 20;
  let hOffset = window.innerHeight / 15;
  let w = window.innerWidth - wOffset;
  let h = window.innerHeight - hOffset;
  let clickedOnce = false;
  let isFront = false;

  function onClickFolder(e) {
    if (!clickedOnce) {
      clickedOnce = true;
      return;
    }
    createFolder();
    e.target.onclick = null;
    if (e.target.parentElement) e.target.parentElement.onclick = null;
    clickedOnce = false;
  }

  function createFolder() {
    isFront = !isFront;
    const a = document.createElement("a");
    a.innerHTML = "📁";
    a.href = isFront ? "../" : "back";
    a.onclick = onClickFolder;
    a.style.top = `${getRandomInt(hOffset, h)}px`;
    a.style.left = `${getRandomInt(wOffset, w)}px`;
    document.body.appendChild(a);
  }

  createFolder();
});
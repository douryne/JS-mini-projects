const text = "Auto Write Script Works!!! <3"

let index = 0;

function autoWrite() {
  document.body.innerText = text.slice(0, index);

  index++

  if (index > text.length) index = 0;
}

setInterval(autoWrite, 150);
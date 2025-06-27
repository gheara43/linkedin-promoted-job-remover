let i = 0;
function removePromoted() {
  const list = document.querySelectorAll("li");
  list.forEach(e => {
    if (e.innerHTML.match(/Promoted/)) {
      e.remove();
    }
  });
  i++;
}
setInterval(removePromoted, 100);

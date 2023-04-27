var jqueryhtml = $("html").html();
html = `<!DoCtyPe HtML> ${jqueryhtml}`;
width = screen.width;
height = screen.height;
var gametitle = localStorage.getItem("tabname1234");

function aboutblank() {
  var aboutblank = window.open(
    "",
    "Sebastian-105",
    `width=${width} height=${height}`
  );
  aboutblank.document.write(html);
}
function aboutblank_window() {
  var aboutblank = window.open("", "Sebastian-105");
  aboutblank.document.write(html);
}

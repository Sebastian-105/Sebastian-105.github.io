var jqueryhtml = $("html").html();
html = `<!DoCtyPe HtML> ${jqueryhtml}`;
width = screen.width;
height = screen.height
var gametitle = localStorage.getItem("tabname1234");

function  aboutblank_home() {
  var aboutblank = window.open("", "Sebastian-105", `width=${width} height=${height}`);
  aboutblank.document.write(html)}
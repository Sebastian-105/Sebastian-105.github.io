function buttonCode()
{
      var textbox = document.getElementById("nameChange");
    document.title = (textbox.value);
    localStorage.setItem('tabname', textbox.value);
}
function reset()
{
			var reset = document.getElementById("reset");
			var name = "Sebastian-105";
			document.title = (name);
			localStroage.setItem('tabname', name);
}
function functiona()
{
		var name = "Sebastian-105"
		var title = document.title;
		if (title = null  || title === "" || title === "null") {
			title = name;
		}
}
function focus_email_input()
{
	document.querySelector("#contact_view > section > form > .mail > label").style.top = "0px";
}
function blur_email_input(elem)
{
	if (!elem.value)
		document.querySelector("#contact_view > section > form > .mail > label").style.top = "40px";
}

function focus_message_input()
{
	document.querySelector("#contact_view > section > form > .message > label").style.top = "0px";
}
function blur_message_input(elem)
{
	if (!elem.value)
		document.querySelector("#contact_view > section > form > .message > label").style.top = "40px";
}

function highlight_menu(elem)
{
	document.querySelector("#main_header > a.active").classList.remove("active");
	elem.classList.add("active");
}

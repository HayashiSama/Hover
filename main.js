$(document).ready()
{
$("img").hover( 
	function()
	{
		var text = ($(this).attr("src"))
		$(this).attr("src", $(this).attr("data-alt"));
		$(this).attr("data-alt", text);
	},
	function()
	{
		var text = ($(this).attr("src"))
		$(this).attr("src", $(this).attr("data-alt"));
		$(this).attr("data-alt", text);
	}


);
}
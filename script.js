
var dt = new Date();
function myCalendar()
{
	
dt.setDate(1);
var day = dt.getDay(); //4
var endDate = new Date(dt.getFullYear(), dt.getMonth()+1, 0).getDate();  // 30
var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();  //31
var today = new Date();
var months=[
		'January','February','March','April',
		'May','June','July','August',
		'September','October','November','December'
	];
  
var month = dt.getMonth();
document.getElementById('date_str').innerHTML = "Today : "+(new Date().toDateString());
document.getElementById("month").innerHTML=months[month] + ", "+dt.getFullYear();

var cells = "";
for(var x = day ; x > 0; x--)   // 4,3,2,1
{
	cells += "<div class='prev_date'>" + (prevDate-x+1) + "</div>";
}
for(var i=1; i <= endDate; i++)
{
	if (i==today.getDate() && dt.getMonth() == today.getMonth() && dt.getFullYear()== today.getFullYear()) 
	{
		cells+="<div class='today'>" + i + "</div>";
	}
	else
	{
		cells+="<div>" + i + "</div>";
	}
	
}
document.getElementsByClassName("days")[0].innerHTML = cells;
}
function moveDate(para)
{
	if (para=='prev') 
	{
		dt.setMonth(dt.getMonth()-1);
	}
	if (para=='next') 
	{
		dt.setMonth(dt.getMonth()+1);
	}
	myCalendar();
}
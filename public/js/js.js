const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const d = new Date();
const day = d.getDate()	;		
const day_name = week[d.getDay()];		
const month = months[d.getMonth()];	
const year = d.getFullYear()	

const today = " " + day_name + " " + day + " " + month + " " + year + " ";

$(".today_date").text(today);

$(window).ready(function () {

	$('.todo-new').fadeIn(1000); 
   
   
	$("input:checkbox").click(function(){

		$(this).addClass('newInput');

		$("strong:has(.newInput)").css("background-color", "yellow").fadeOut(1000);
		
		setTimeout(function () {
			$("#todolist").trigger( "submit" );
		}, 1500);

		
	});
	
	$('#form-list-done').fadeIn(2000);

	$("#clear_done_list").click(function () {

		$("#form-list-done").fadeOut(1500);

		setTimeout(function () {		
			$("#clearList").submit();
		}, 2000);
		
	});

});

	

$('a.burger').click(function(event) {
     $('a.burger').toggleClass('burger-cross');
});
$("a.burger").click(function() {
		$("ul.navi").slideToggle(300);
		$("ul.navi ul").slideToggle(300);
	}); 

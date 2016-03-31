
	
	$(document).ready(function(){
			
			var group1score = 0;
			var group2score = 0;
			var group3score = 0;
			var group4score = 0;
			var group5score = 0;
			var punto = 1;

	function goodAnswer(){
		swal("Good job!", "Your answer is correct!!!", "success");
	}

	$("#btn-start").click(function(){
			$("#header").addClass("hide");
			$(".container-form-formgroup").addClass("hide");
			$(".riddle-1").removeClass("hide");
			$(".score").removeClass("hide");
			var nameGroup1 = $("#group-name1").val();
			var nameGroup2 = $("#group-name2").val();
			var nameGroup3 = $("#group-name3").val();
			var nameGroup4 = $("#group-name4").val();
			var nameGroup5 = $("#group-name5").val();

			$(".score-1-span").text(nameGroup1);
			$(".score-2-span").text(nameGroup2);
			$(".score-3-span").text(nameGroup3);
			$(".score-4-span").text(nameGroup4);
			$(".score-5-span").text(nameGroup5);
		});	
	$("#btn-next-1").click(function(){
			$(".riddle-1").addClass("hide");
			$(".riddle-2").removeClass("hide");
		});

	$("#btn-next-2").click(function(){
			$(".riddle-2").addClass("hide");
			$(".riddle-3").removeClass("hide");
		});

	$("#btn-next-3").click(function(){
			$(".riddle-3").addClass("hide");
			$(".riddle-4").removeClass("hide");
		});

	$("#btn-next-4").click(function(){
			$(".riddle-4").addClass("hide");
			$(".riddle-5").removeClass("hide");
		});

	$("#btn-next-5").click(function(){
			$(".riddle-5").addClass("hide");
			$(".riddle-6").removeClass("hide");
		});

	$("#btn-next-6").click(function(){
			$(".riddle-6").addClass("hide");
			$(".riddle-7").removeClass("hide");
		});

	$("#btn-next-7").click(function(){
			$(".riddle-7").addClass("hide");
			$(".riddle-8").removeClass("hide");
		});

	$("#btn-next-8").click(function(){
			$(".riddle-8").addClass("hide");
			$(".riddle-9").removeClass("hide");
		});

	$("#btn-next-9").click(function(){
			$(".riddle-9").addClass("hide");
			$(".riddle-10").removeClass("hide");
		});

	$("#btn-next-10").click(function(){
			$(".riddle-10").addClass("hide");
			$(".riddle-11").removeClass("hide");
		});

	$("#btn-next-11").click(function(){
			$(".riddle-11").addClass("hide");
			$(".riddle-12").removeClass("hide");
		});

	$("#btn-next-12").click(function(){
			$(".riddle-12").addClass("hide");
			$(".riddle-13").removeClass("hide");
		});

	$("#btn-next-13").click(function(){
			$(".riddle-13").addClass("hide");
			$(".riddle-14").removeClass("hide");
		});

	$("#btn-next-14").click(function(){
			$(".riddle-14").addClass("hide");
			$(".riddle-15").removeClass("hide");
		});

	$("#btn-next-15").click(function(){
			$(".riddle-15").addClass("hide");
			$(".riddle-16").removeClass("hide");
		});

	$("#btn-next-16").click(function(){
			$(".riddle-16").addClass("hide");
			$(".riddle-17").removeClass("hide");
		});

	$("#btn-next-17").click(function(){
			$(".riddle-17").addClass("hide");
			$(".riddle-18").removeClass("hide");
		});

	$("#btn-next-18").click(function(){
			$(".riddle-18").addClass("hide");
			$(".riddle-19").removeClass("hide");
		});

	$("#btn-next-19").click(function(){
			$(".riddle-19").addClass("hide");
			$(".riddle-20").removeClass("hide");
		});

	$("#btn-next-20").click(function(){
			$(".riddle-20").addClass("hide");
			$(".riddle-21").removeClass("hide");
		});

	$("#btn-next-21").click(function(){
			$(".riddle-21").addClass("hide");
			$(".riddle-22").removeClass("hide");
		});

	$("#btn-next-22").click(function(){
			$(".riddle-22").addClass("hide");
			$(".riddle-23").removeClass("hide");
		});

	$("#btn-next-23").click(function(){
			$(".riddle-23").addClass("hide");
			$(".riddle-24").removeClass("hide");
		});

	$("#btn-next-24").click(function(){
			$(".riddle-24").addClass("hide");
			$(".riddle-25").removeClass("hide");
		});

	$("#btn-next-25").click(function(){
			$(".riddle-25").addClass("hide");
			$(".riddle-26").removeClass("hide");
		});

	$("#btn-next-26").click(function(){
			$(".riddle-26").addClass("hide");
			$(".riddle-27").removeClass("hide");
		});

	$("#btn-next-27").click(function(){
			$(".riddle-27").addClass("hide");
			$(".riddle-28").removeClass("hide");
		});

	$("#btn-next-28").click(function(){
			$(".riddle-28").addClass("hide");
			$(".riddle-29").removeClass("hide");
		});

	$("#btn-next-29").click(function(){
			$(".riddle-29").addClass("hide");
			$(".riddle-30").removeClass("hide");
		});

	$("#btn-next-30").click(function(){
		
			swal({   title: "The end...",   text: "Thanks for playing.",   type:"success" });
			$(".riddle-30").addClass("hide");
			$(".finish-scene").removeClass("hide");
		});


	$("#btn-check-1").click(function(){
		$(this).remove();
		if($("#input-1").val() == "CLOCK"){
			goodAnswer();
			group1score += 1;
			
		$(".scorecounter-group-1").text(group1score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is CLOCK", "error");
		}
	});

	$("#btn-check-2").click(function(){
		$(this).remove();
		if($("#input-2").val() == "GLOVE"){
			goodAnswer();
			group2score += 1;
			
		$(".scorecounter-group-2").text(group2score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is GLOVE", "error");
		}
	});

	$("#btn-check-3").click(function(){
		
		$(this).remove();
		if($("#input-3").val() == "EGG"){
			goodAnswer();
			group3score += 1;
			
		$(".scorecounter-group-3").text(group3score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is EGG", "error");
		}
	});

	$("#btn-check-4").click(function(){
		$(this).remove();
		if($("#input-4").val() == "BOTTLE"){
			goodAnswer();
			group4score += 1;
			
		$(".scorecounter-group-4").text(group4score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is BOTTLE", "error");
		}
	});

	$("#btn-check-5").click(function(){

		$(this).remove();
		if($("#input-5").val() == "TOWEL"){
			goodAnswer();
			group5score += 1;
			
		$(".scorecounter-group-5").text(group5score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is TOWEL", "error");
		}
	});

	$("#btn-check-6").click(function(){
	$(this).remove();
		if($("#input-6").val() == "AGE"){
			goodAnswer();
			group1score += 1;
			
		$(".scorecounter-group-1").text(group1score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is AGE", "error");
		}
	});

	$("#btn-check-7").click(function(){
			$(this).remove();
		if($("#input-7").val() == "NAME"){
			goodAnswer();
			group2score += 1;
			
		$(".scorecounter-group-2").text(group2score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is NAME", "error");
		}
	});

	$("#btn-check-8").click(function(){
		$(this).remove();
		if($("#input-8").val() == "SHADOW"){
			goodAnswer();
			group3score += 1;
			
		$(".scorecounter-group-3").text(group3score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is SHADOW", "error");
		}
	});

	$("#btn-check-9").click(function(){
		$(this).remove();
		if($("#input-9").val() == "TELEPHONE"){
			goodAnswer();
			group4score += 1;
			
		$(".scorecounter-group-4").text(group4score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is TELEPHONE", "error");
		}
	});

	$("#btn-check-10").click(function(){
		
		$(this).remove();
		if($("#input-10").val() == "EARTH"){
			goodAnswer();
			group5score += 1;
			
		$(".scorecounter-group-5").text(group5score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is EARTH", "error");
		}
	});

	$("#btn-check-11").click(function(){
		$(this).remove();
		if($("#input-11").val() == "POTATO"){
			goodAnswer();
			group1score += 1;
			
		$(".scorecounter-group-1").text(group1score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is POTATO", "error");
		}
	});

	$("#btn-check-12").click(function(){
			$(this).remove();
		if($("#input-12").val() == "WATER"){
			goodAnswer();
			group2score += 1;
			
		$(".scorecounter-group-2").text(group2score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is WATER", "error");
		}
	});

	$("#btn-check-13").click(function(){
		$(this).remove();
		if($("#input-13").val() == "BED"){
			goodAnswer();
			group3score += 1;
			
		$(".scorecounter-group-3").text(group3score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is BED", "error");
		}

	$("#btn-check-14").click(function(){
		$(this).remove();
		if($("#input-14").val() == "SPONGE"){
			goodAnswer();
			group4score += 1;
			
		$(".scorecounter-group-4").text(group4score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is SPONGE", "error");
		}
	});

	$("#btn-check-15").click(function(){
		
		$(this).remove();
		if($("#input-15").val() == "PIANO"){
			goodAnswer();
			group5score += 1;
			
		$(".scorecounter-group-5").text(group5score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is PIANO", "error");
		}
	});

	$("#btn-check-16").click(function(){
		$(this).remove();
		if($("#input-16").val() == "BREATH"){
			goodAnswer();
			group1score += 1;
			
		$(".scorecounter-group-1").text(group1score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is BREATH", "error");
		}
	});

	$("#btn-check-17").click(function(){
			$(this).remove();
		if($("#input-17").val() == "SECRET"){
			goodAnswer();
			group2score += 1;
			
		$(".scorecounter-group-2").text(group2score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is SECRET", "error");
		}
	});

	$("#btn-check-18").click(function(){
	$(this).remove();
		if($("#input-18").val() == "COLD"){
			goodAnswer();
			group3score += 1;
			
		$(".scorecounter-group-3").text(group3score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is COLD", "error");
		}
	});

	$("#btn-check-19").click(function(){
		$(this).remove();
		if($("#input-19").val() == "STARS"){
			goodAnswer();
			group4score += 1;
			
		$(".scorecounter-group-4").text(group4score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is STARS", "error");
		}
	});

	

	$("#btn-check-21").click(function(){
		$(this).remove();
		if($("#input-21").val() == "WINDOW"){
			goodAnswer();
			group1score += 1;
			
		$(".scorecounter-group-1").text(group1score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is WINDOW", "error");
		}
	});

	$("#btn-check-22").click(function(){
			$(this).remove();
		if($("#input-22").val() == "FOOTPRINTS"){
			goodAnswer();
			group2score += 1;
			
		$(".scorecounter-group-2").text(group2score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is FOOTPRINTS", "error");
		}
	});

	$("#btn-check-23").click(function(){
		$(this).remove();
		if($("#input-23").val() == "SNOWMAN"){
			goodAnswer();
			group3score += 1;
			
		$(".scorecounter-group-3").text(group3score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is SNOWMAN", "error");
		}
	});

	$("#btn-check-24").click(function(){
		$(this).remove();
		if($("#input-24").val() == "LUNCH"){
			goodAnswer();
			group4score += 1;
			
		$(".scorecounter-group-4").text(group4score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is LUNCH", "error");
		}
	});

	$("#btn-check-25").click(function(){
	
		$(this).remove();
		if($("#input-25").val() == "PILLOW"){
			goodAnswer();
			group5score += 1;
			
		$(".scorecounter-group-5").text(group5score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is PILLOW", "error");
		}
	});

	$("#btn-check-26").click(function(){
		$(this).remove();
		if($("#input-26").val() == "TROUBLE"){
			goodAnswer();
			group1score += 1;
			
		$(".scorecounter-group-1").text(group1score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is TROUBLE", "error");
		}
	});

	$("#btn-check-27").click(function(){
			$(this).remove();
		if($("#input-27").val() == "DENTIST"){
			goodAnswer();
			group2score += 1;
			
		$(".scorecounter-group-2").text(group2score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is DENTIST", "error");
		}
	});

	$("#btn-check-28").click(function(){
		$(this).remove();
		if($("#input-28").val() == "CARROT"){
			goodAnswer();
			group3score += 1;
			
		$(".scorecounter-group-3").text(group3score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is CARROT", "error");
		}
	});

	$("#btn-check-29").click(function(){
		$(this).remove();
		if($("#input-29").val() == "CHERRY"){
			goodAnswer();
			group4score += 1;
			
		$(".scorecounter-group-4").text(group4score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is CHERRY", "error");
		}
	});

	$("#btn-check-30").click(function(){
	
		$(this).remove();
		if($("#input-30").val() == "GRAVITY"){
			goodAnswer();
			group5score += 1;
			
		$(".scorecounter-group-5").text(group5score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is GRAVITY", "error");
		}
	});

	$("#btn-check-20").click(function(){
		$(this).remove();
		if($("#input-20").val() == "CANDLE"){
			goodAnswer();
			group5score += 1;
			
		$(".scorecounter-group-5").text(group5score);
		
		}
		
		else{
			swal("Sorry", "The correct answer is CANDLE", "error");
		}
		
	});

	

});
});


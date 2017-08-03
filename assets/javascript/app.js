$(document).ready(function() {
	

	var intervalId;
	var remain = 30;
	
	

    $("#GameEnd").hide();
//Make the Game start scene. and start counting when Start button clicked.

$("#Start").click(function() {
	

	$("#GameStart").hide();
  countdownTimer.start()  
  
 
});
// Make function for Done button.
$("#Done").click(function() {
 
 countdownTimer.stop();

 });
//Set the Timer function.
var countdownTimer = {
	remain : 30,

 
start: function(){
intervalId = setInterval(countdownTimer.count, 1000);
},
       
stop: function() {
			clearInterval(intervalId);
			showScore();
		}, 
count: function(){
				countdownTimer.remain--;

			if (countdownTimer.remain >= 0) {
				$('#remain').html(countdownTimer.remain);
			}
			else {
				countdownTimer.stop();
				
			
			}
	}


};
//show score at end of game
function showScore(){
    
    $("#GameEnd").show();
    $("#correct").text(correct);
  $("#wrong").text(wrong);
  $("#no").text(no);

 };         

//Make only one checkbox to be checked for every question.
$('[id="q1"]').change(function(){
  
    if(this.checked){
       $('[id="q1"]').not(this).prop('checked', false);
       no--;
    }    
  });
$('[id="q2"]').change(function(){
  
    if(this.checked){
       $('[id="q2"]').not(this).prop('checked', false);
       no--;
    }    
  });
$('[id="q3"]').change(function(){
  
    if(this.checked){
       $('[id="q3"]').not(this).prop('checked', false);
       no--;
    }    
  });
$('[id="q4"]').change(function(){
  
    if(this.checked){
       $('[id="q4"]').not(this).prop('checked', false);
       no--;
    }    
  });
$('[id="q5"]').change(function(){
  
    if(this.checked){
       $('[id="q5"]').not(this).prop('checked', false);
       no--;
    }    
  });
$('[id="q6"]').change(function(){
  
    if(this.checked){
       $('[id="q6"]').not(this).prop('checked', false);
       no--;
    }    
  });
$('[id="q7"]').change(function(){
  
    if(this.checked){
       $('[id="q7"]').not(this).prop('checked', false);
       no--;
    }    
  });
//All looping variables for the game.
     

     var correct = 0;
	 var wrong = 0;
	 var no = 7;
     var i;
     
//radiobuttonlists for all answers.

var a1 = document.getElementById("q1");
    for(i = 0; i < a1.length; i++){
    	if(a1[i].checked){
           if(a1[i].value == "option4"){
           	correct++;
           }
           else{
           	wrong++;
           }
    	}

    }
var a2 = document.getElementById("q2");
  for(i = 0; i < a2.length; i++){
    	if(a2[i].checked){
           if(a2[i].value == "option3"){
           	correct++;
           }
           else{
           	wrong++;
           }
    	}
    	
    }

 var a3 = document.getElementById("q3");
  for(i = 0; i < a3.length; i++){
    	if(a3[i].checked){
           if(a3[i].value == "option2"){
           	correct++;
           }
           else{
           	wrong++;
           }
    	}
    	
    }
var a4 = document.getElementById("q4");
  for(i = 0; i < a4.length; i++){
    	if(a4[i].checked){
           if(a4[i].value == "option1"){
           	correct++;
           }
           else{
           	wrong++;
           }
    	}
    	
    }
var a5 = document.getElementById("q5");
  for(i = 0; i < a5.length; i++){
    	if(a5[i].checked){
           if(a5[i].value == "option3"){
           	correct++;
           }
           else{
           	wrong++;
           }
    	}
    	
    }
var a6 = document.getElementById("q6");
  for(i = 0; i < a6.length; i++){
    	if(a6[i].checked){
           if(a6[i].value == "option1"){
           	correct++;
           }
           else{
           	wrong++;
           }
    	}
    	
    }
var a7 = document.getElementById("q7");
  for(i = 0; i < a7.length; i++){
    	if(a7[i].checked){
           if(a7[i].value == "option1"){
           	correct++;
           }
           else{
           	wrong++;
           }
    	}
    	
    }




               

});
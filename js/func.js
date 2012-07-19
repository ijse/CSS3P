/**
 * @author : ijse
 */

var stepFn = {
	ballSlide: function(self) {
		$(self).parents(".step").find(".ball-rail").toggleClass("active");
	}




	
}

var eng = impress();
$("#impress").bind("impress:stepenter", function() {
	var lastStep = $(this).find(".step.past");
    var currentStep = $(this).find(".step.active");
    var nextStep = $(this).find(".step.future");
    if(currentStep.is(".act")) {
    	eng.next();
    }
});

$("#impress").bind("impress:stepleave", function(event) {
	var lastStep = $(this).find(".step.past");
    var currentStep = $(this).find(".step.active");
    var nextStep = $(this).find(".step.future:first");

    console.log(lastStep);
    if(lastStep.is("#gradient")) {
    	console.log("is Gradient!!");
    	return false;
    } 
});
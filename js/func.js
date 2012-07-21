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

    if(currentStep.is("#animation2")) {
    	currentStep.find("iframe").attr("src", "animationDemo/index.htm").show();
        currentStep.find("img").hide();
    }
});

$("#impress").bind("impress:stepleave", function(event) {
	var lastStep = $(this).find(".step.past");
    var currentStep = $(this).find(".step.active");
    var nextStep = $(this).find(".step.future:first");

    var _el = $(eng.lastEntered());
    if(_el.attr("id") === "animation2") {
        _el.find("iframe").attr("src", "").hide();
        _el.find("img").show();
    } 
});

$("#transform2 .menu li").hover(function(e) {
    // console.log($(this).children("a:hover").css("webkitTransform"));
    //console.log(this.ownerDocument.defaultView.getComputedStyle(this,null)["-webkit-transform"]);
    var idx = $(this).index();
    $($("#transform2 .codearea pre").hide().get(idx)).fadeIn(500);
})
// Paula Akemi Hara - Final Project 

TweenMax.set($(".card-back"), {rotationY:-180});

$.each($(".card-skill"), function(i,element) {
	var frontCard = $(this).children(".card-front");
    var backCard = $(this).children(".card-back");
    var tl = new TimelineMax({paused:true});
	
	tl.to(frontCard, 1, {rotationY:180}).to(backCard, 1, {rotationY:0},0);
	
	element.animation = tl;
});

$(".card-skill").hover(elOver, elOut);

// When the mouse pass over -> turn the card
function elOver() {
    // Verify if the card is showing front or back
    // if is front -> do the animation
    // if is back -> do the reverse animation
    if($(this).children(".turned")[0].innerText == "front"){
        $(this).children(".turned")[0].innerText = "back";
        this.animation.play();
    }else{
        $(this).children(".turned")[0].innerText = "front";
        this.animation.reverse();
    }
}

function elOut() {
    // When mouse is out don't do anything
}
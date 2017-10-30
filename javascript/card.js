var cards = ['joker1','joker2','joker3','joker4','joker5'];
function shuffle(array){
	var currentIndex = array.length, temporaryValue, randomIndex;
	while(0!==currentIndex){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -=1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;

}
return arr;
}
cardArrayShuffle = shuffle(cardArray);

for (var i = 0; i < cardArrayShuffle.length; i++ ) {
	$('.card' + (i + 1) + '>.front > img').attr('src','img/' + cardArrayShuffle[i]);
}

cardArrayShuffle = shuffle(cardArray);
for (var i = 0; i < cardArrayShuffle.length; i++ ) {
    $('.card' + (i + 6) + '>.front > img').attr('src','img/' + cardArrayShuffle[i]);
}

$('.card').on('click', function () {
	$(this).addClass('flip');
	$(this).css('pointer-events', 'none');
}); 

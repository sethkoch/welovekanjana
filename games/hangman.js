
var pictures = [
"<img src='http://www.welovekanjana.com/images/hangman/hang1.png' class='img img-responsive'>", 
 "<img src='http://www.welovekanjana.com/images/hangman/hang2.png' class='img img-responsive'>", 
  "<img src='http://www.welovekanjana.com/images/hangman/hang3.png' class='img img-responsive'>", 
   "<img src='http://www.welovekanjana.com/images/hangman/hang4.png' class='img img-responsive'>", 
    "<img src='http://www.welovekanjana.com/images/hangman/hang5.png' class='img img-responsive'>", 
     "<img src='http://www.welovekanjana.com/images/hangman/hang6.png' class='img img-responsive'>", 
      "<img src='http://www.welovekanjana.com/images/hangman/hang7.png' class='img img-responsive'>", 
       "<img src='http://www.welovekanjana.com/images/hangman/hang8.png' class='img img-responsive'>", 
        "<img src='http://www.welovekanjana.com/images/hangman/hang9.png' class='img img-responsive'>", 
         "<img src='http://www.welovekanjana.com/images/hangman/hang10.png' class='img img-responsive'>"
];

var letter;

var miss = 0;
var placedLetters = 0;


var words = ["mother", "photography", "Thailand", "author", "Harry Potter", "cooking", "beautiful",
 "anniversary", "wife", "Quinn", "Chalesa", "Seth", "Daddy", "Mommy", "Kanjana", "State Hospital",
  "Walmart", "shopping", "Thai Food", "Mandolin", "Computer",
   "Face Book", "Line", "JC Penney", "cat", "kitten", "pink"];

var randomWord = function(){
	return words[Math.round(Math.random() * (words.length -1) )]; 
}

var placeLines = function(target, howMany){
	var count = howMany
	var num = 0;
	while(count > 0){
	$(target).append("<a id='placedLetters" + num + "'>___  </a>");
	count --;
	num ++;
    }
}

var strike = function(i){
	$('.hangImg').html(pictures[i]);
}

var youWon = function(){
	$('.hangImg').html("You are a winner!");
}



var placeLetters = function(target, wordToGuess, lett){
	var counter = 0;
	wordToGuess = wordToGuess.toLowerCase().split(" ").join("").split('');
	wordToGuess.forEach(function(item, index){
		
		if(item === lett){
		  $(target + index).html(item);
		  counter ++;
	    }
	});
	placedLetters += counter;

		if(placedLetters === wordToGuess.length){
			youWon();
		}

	    if(counter === 0){
	      strike(miss);
	      miss ++;
	    }
}










var wordToUse = randomWord();
var wordLength = wordToUse.length;

placeLines('#word', wordLength);



$('body').on('click', '#alphabet > a', function(){
	letter = $(this).text();
	letter = letter.toLowerCase();
	$(this).hide();
	placeLetters('#placedLetters', wordToUse, letter);

		
});

$('.refresh').click(function(){
	location.reload();
})


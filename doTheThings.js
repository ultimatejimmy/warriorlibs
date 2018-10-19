$('#button').click(function () {
	var story = $('select option:selected').val();
	fillInWord(story);
	$('#' + story).show();
	$('form').hide();
	$('button#reset').show();
});

$('button#reset').click(function () {
	location.reload(true);
});

$(document).ready(function () {
	$('input[type = "text"]').each(function () {
		var placeholder = $(this).attr("placeholder");
		$(this).addClass(placeholder);

	})
});

function fillInWord(story) {
	var words = new Map();
	$('form input').each(function () {
		var word = $(this).val();
		var wordList = [];
		wordList.push(word);
		var type = $(this).attr("class");

		if (words.has(type)) {
			var tempWordlist = words.get(type);
			tempWordlist.push(word);
			words.set(type, tempWordlist);
		} else {
			words.set(type, wordList)
		}

	})

	var nMap = new Map();
	$('#story #' + story + ' span').each(function () {
		var type = $(this).attr("class");
		if (nMap.has(type))
			n = nMap.get(type);
		else
			n = 0;
		$(this).text(words.get(type)[n]);

		n++;
		nMap.set(type, n);

	})
}

document.querySelector("form").addEventListener("keyup", event => {
	if (event.key !== "Enter") return; // Use `.key` instead.
	document.querySelector("#button").click(); // Things you want to do.
	//	event.preventDefault(); // No need to `return false;`.
});

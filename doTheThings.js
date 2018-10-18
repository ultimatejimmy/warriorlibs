$('#button').click(function () {
	fillInWord();
});

function fillInWord() {
	var nouns = $('form').children('input');
	var nounList = jQuery.makeArray(nouns);
	console.log(nouns);
	console.log(nounList);

	n = 0;
	$('#story p span.noun').each(function () {
		$(this).text(nounList[n]);
		n++;
	})
}

$(document).ready(function(){

loadCats();

  function loadCats() {
    $.ajax({
      type: 'GET',
      url: '/cats',
      success: function(response) {
        $("#cat-list").empty();
        response.forEach(function(cat) {
          appendDom(cat);
        });
      }
    })
  }

  function appendDom(cat) {
    $("#cat-list").append('<div class="cat"></div>');
    $el = $("#cat-list").children().last();
    $el.append('<h2>' + cat.name + '</h2>');
    $el.append('<p>' + cat.trait + '</p>');
  }

$('#calculation-form').on('submit', function(e) {
	e.preventDefault();

	$.each($("#calculation-form").serializeArray(), function(i, field) {
	var numbers ={};
      numbers[field.name] = field.value;
	}
    });
	console.log();

$ajax({
	type: "POST",
	url: "/calculator",
	data: cat,
	success: function(data) {
		console.log('This is an success');
	},
	error: function() {
		console.log('this is an error');
	}
});

});

function appendDom () {
	$('form').append('<div id="answer"> <p>' + answer + ' </p></div>');
}
	
});
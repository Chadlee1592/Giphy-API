var animals = ["Dog", "Cat", "Elephant", "Bird"]

function displayAnimalInfo() {
    $("#giphy-display").empty();
    var animal = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=G8S7sIaJMsxmM2uLH2lGIEJg5PgJOi4o&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var results = response.data
        console.log('results', results)
       // var rowStop = 0;
        
        for (var i = 0; i < results.length; i++) {
            var p = $("<p>");
            var animalImage = $("<img>");
            var animalDiv = $("<div class='col-4-sm float-left space'>")
            p.text("Rating: " + results[i].rating)
            animalImage.attr("src", results[i].images.fixed_height.url);
            animalDiv.append(p);
            animalDiv.append(animalImage);
            $("#giphy-display").prepend(animalDiv);
            console.log('results[i]', results[i].images["480w_still"].url)
            // if(rowStop === 0) {
            //     //create row div
            // }
            // if(rowStop === 2) {
            //     //create closing row div
            // }
            // if(rowStop < 3) {
            //     rowStop++
            //     // create animalDiv with col-r-sm
            // } else {
            //     rowStop = 0
            // }

            
        }
        
    })
}
function renderButtons() {
    $("#buttons-here").empty();
    for (var i = 0; i < animals.length; i++) {
        var a = $("<button class='btn btn-primary'>");
        a.addClass("animal");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $("#buttons-here").append(a);
    }
};

$("#submit").on("click", function(event) {
    event.preventDefault();
    var animalTyped = $("#animal-input").val().trim();
    animals.push(animalTyped);
    renderButtons();
});
$(document).on("click", ".animal", displayAnimalInfo);
renderButtons();


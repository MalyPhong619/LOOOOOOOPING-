



$(document).ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();


    var groceries = ["inputgrocery1", "inputgrocery2", "inputgrocery3", "inputgrocery4", "inputgrocery5", "inputgrocery6"];
    var alphabetizedGroceries = [];

      groceries.forEach(function(grocery) {
        var groceryList = $("#" + grocery).val();
        alphabetizedGroceries.push(groceryList);
            alphabetizedGroceries.sort();
      })
      alphabetizedGroceries.map(function(alpha) {

        $("#outputAnswer").append("<li>" + alpha + "</li>");
      })



  $(".form-group").hide();

  });
});

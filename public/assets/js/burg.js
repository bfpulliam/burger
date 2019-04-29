// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevour");

        var newDevouredState = {
            devoured: newdevoured
        };

        // Send the PUT request.
        $.ajax("/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log(newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#create-burger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#burg").val().trim()
        };

        // Send the POST request.
        $.ajax("/", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("added new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});

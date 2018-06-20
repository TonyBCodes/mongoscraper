// JavaScript source code

$(document).ready(function () {

    $.getScript("assets/js/apiCalls.js", function (data) {

        $("#start_scrape").on("click", function (event) {
            event.preventDefault();
            $("#cards_holder").empty();
            scrape_arts(create_cards);
        });
    });
});

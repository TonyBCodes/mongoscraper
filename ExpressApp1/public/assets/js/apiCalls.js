// makes an get API call to get products by type and their assoicated farms

function scrape_arts(cb) {
    console.log("before scrape");
    $.get("/scrape", function (data) {
        console.log(data);
        console.log("before cb");
        cb();
    });
}

function create_cards() {
    console.log("Create cards 1");
    $.get("/show_cards", function (data) { })
        .then(function (data) {
            console.log("**Show Cards** " + data);
            console.log(data.length);
            console.log(data[9].headline);
            for (var i = 0; i < data.length; i++) {
                console.log(i);
                $(data[i].headline + " " + data[i].summary + " " + data[i].url);
            }
        });
}
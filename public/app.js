// Animations initialization
new WOW().init();
$('#getNewsBtn').on('click', function () {
    // Grab the articles as a json
    $.getJSON("/articles", function (data) {
        // For each one
        for (var i = 0; i < data.length; i++) {
/*
           var title = data[i].title;
            var id = data[i]._id;
            var link = data[i].link

            var card = $('<div/>', {
                class: 'card'
            });

            card.append(`<div class = "card-header red white-text">Featured Article</div>
                            <div class = "card-body">
                                <ul>
                                <li data-id=" + data[i]._id + ">" + data[i].title + "<br />" + data[i].link + "</li>
                                </ul>
                            </div>`

            )
*/
            
            // Display the apropos information on the page
            $('#articles').append("<li data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</li>");
        }
    });
});
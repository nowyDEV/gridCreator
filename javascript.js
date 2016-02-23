$(document).ready(function () {
    $('body').append("<button class='btn-reset'>Clear</button>");
    $('button').css({
        "background-color": "blue",
        "position": "absolute",
        "height": "40px",
        "width": "200px",
        "color": "#ffffff",
        "top": "0",
        "left": "690px"
    });
    createGrid(16);
    $('body').on('click', 'button', function () {
        var gridSize = prompt("Enter grid size: ");
        clearGrid();
        createGrid(gridSize);
    });

    $('#wrapper').on('mouseenter', '.square', function () {
        $(this).css("background-color", "#ffffff");
    });

    $('#wrapper').add("<div class='clearfix'></div>")
        .css("clear", "both");


    function clearGrid() {
        $('#wrapper').empty();
    }

    function createGrid(size) {
        var square = "<div class='square'></div>";
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                $('#wrapper').append(square);

            }
        }
        var squareSide = 960 / size;
        $('.square').css({
            "background-color": "red",
            "float": "left",
            "height": squareSide + "px",
            "width": squareSide + "px",
            "outline": "black solid thin"
        });

    }
});
let names = ["Gergő", "Bogi", "Lili", "Vendel", "Tamás"];

names.forEach(element => {
    $("#myList").append("<li>" + element + "</li>");
});

$("#myList li").last().css("fontWeight", "bold");

//exercise 2

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$("body").append("<h1>" + additionalBlock.title + "</h1>");
$("body").append("<p>" + additionalBlock.text + "</p>");
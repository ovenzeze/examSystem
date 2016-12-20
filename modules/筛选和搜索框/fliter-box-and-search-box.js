// multiple select menu
$('#btn1').click(function() {
    $('#fliterBox').css("display") == "block" ? $('#fliterBox').hide('slow') : $('#fliterBox').show('slow');
});
// switch and show fliterList items
for (let i = 0; i < $('#fliterListNav ul li').length; i++) {
    $('#fliterListNav ul li:eq(' + i + ')').click(function(event) {
        $('#fliterListNav ul li').removeClass('nav-actived');
        $(this).addClass('nav-actived');
        var listTable = {
            "0": ["1801软师考试", "1602软师考试", "1601程序员考试", "1801软师考试", "1602软师考试"],
            "1": ["1702程序员考试", "1601前端考试", "1602前端考试", "1702程序员考试", "1601前端考试"],
            "2": ["1601软师考试", "1602软师考试", "1601程序员考试", "1702程序员考试", "1601前端考试"],
            "3": ["1502程序员考试", "1601前端考试", "1602前端考试", "1702程序员考试", "1601前端考试"],
            "4": ["1401软师考试", "1602软师考试", "1601程序员考试", "1702程序员考试", "1601前端考试"]
        };

        $('#fliterList ul li').html("");
        for (x in listTable[$(this).attr("name")]) {
            $('#fliterList ul li:eq(' + x + ')').html(listTable[$(this).attr("name")][x]);
        }
    });
}
// switch and show fliterList items end

// bind click event for list items
for (let j = 0; j < $('#fliterList ul li').length; j++) {
    $('#fliterList ul li:eq(' + j + ')').click(function(event) {
        $('#fliterBox').hide('slow');
        $('#span1').text(this.innerHTML);
}
// multiple menu end

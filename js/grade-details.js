//----grade-details------

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
	});
 }
// multiple menu end

//for grade-manager-->grade-table
var oTab = document.getElementById('table1');
var aTr = oTab.children[0].getElementsByTagName('tr');
var oBox = document.getElementById('box');
var oMask = document.getElementById('mask');

aTr[0].style.backgroundColor = '#fff';//set the th

makeTable();
//make the grade-details table by json
function  makeTable() {
    $.ajax({
        type: "get",
        dataType: "json",
        url: "http://123.206.204.163:2333/exam/gradeDetails",
        success: function (gradeDetails) {
            for(var i in gradeDetails){
				$('#table1').append('<tr><td>' + gradeDetails[i]['studentID'] 
									+ '</td><td>' + gradeDetails[i]['studentName']
									+ '</td><td>' + gradeDetails[i]['examName']
									+ '</td><td>' + gradeDetails[i]['grade']);
			}
			setTabClass();
			addTableAction();
        }
    });
}
//add actions to grade-details table
function addTableAction(){
	for(var i=1;i<aTr.length;i++){
		var oTd1 = document.createElement('td');
		var oA = document.createElement('a');
		var oOr =document.createElement('span');
		//setTabClass();
		oOr.innerHTML = '  /  ';  
		
		oA.href = 'javascript:;';
		oA.innerHTML = '<i class="fa fa-trash-o cur-p"></i>';
		oA.onclick = function(){
			var r=confirm("确定删除吗？")
			if(r != true){
				return;
			}
			else{
				oTab.children[0].removeChild(this.parentNode.parentNode);
				setTabClass()
			}
		}
			
		//modify
		var oA2 = document.createElement('a');
		oA2.href = 'javascript:;';
		
		oA2.innerHTML = '<i class="fa fa-edit cur-p"></i>';
		oA2.onclick = function modify(){
			var aBtn = oBox.getElementsByTagName('button');//修改框中的按钮
			var oInput = oBox.getElementsByTagName('input')[0];//修改框中的文本框
			var oTrNow = this.parentNode.parentNode;//当前行
			var aText = oTrNow.getElementsByTagName('td');//当前行中的信息单元格
			var aSpan = oBox.getElementsByTagName('span');//修改框box中的span显示获取的tr信息
	
			oBox.style.display = 'block';
			oMask.style.display = 'block';

			//box中的text获取当前行的信息内容
			var j;
			for(j=0;j<aSpan.length;j++){
				aSpan[j].innerHTML = aText[j].innerHTML;
			}
			oInput.value = aText[j].innerHTML;
			
			//取消按钮
			aBtn[0].onclick = function(){
				oBox.style.display = 'none';
				oMask.style.display = 'none';
			}
			//确定按钮 点击后每行前三个信息单元格内容变为box中text的内容
			aBtn[1].onclick = function(){
				aText[j].innerHTML = oInput.value;				
				oBox.style.display = 'none';
				oMask.style.display = 'none';
			}
		}
		
		oTd1.appendChild(oA);
		oTd1.appendChild(oOr);  
		oTd1.appendChild(oA2);
		
		aTr[i].appendChild(oTd1);
	}
}
//set the class
function setTabClass(){
	for(var i=1;i<aTr.length;i++){
		if(i%4 == 0){
			aTr[i].setAttribute('class','success');
		}
		else if(i%4 == 1){
			aTr[i].setAttribute('class','error');
		}
		else if(i%4 == 2){
			aTr[i].setAttribute('class','warning');
		}
		else{
			aTr[i].setAttribute('class','info');
		}
	}
}

//---search 搜索按钮
$('#search').onclick = function(){
//	for(var i=0;i<aTr.length;i++){
//		if($('#searchText').val() == $("table tr").find("td:eq(0)"))
//			
//	}
	$('#table1 tr').each(function(){
		if($('#searchText').val() == $(this).eq(0).html())
			$(this).css('display','block');
		else{
			$(this).css('display','none');
		}
	})
	$('#table1 tr').each(function(){
		if($('#searchText').val() == $(this).eq(1).html())
			$(this).css('display','block');
		else{
			$(this).css('display','none');
		}
	})
	$('#table1 tr').each(function(){
		if($('#searchText').val() == $(this).eq(2).html())
			$(this).css('display','block');
		else{
			$(this).css('display','none');
		}
	})
}

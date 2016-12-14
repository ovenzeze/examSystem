//for grade-manager-->grade-table
var oTab = document.getElementById('table1');
var aTr = oTab.children[0].getElementsByTagName('tr');
var oBox = document.getElementById('box');
var oMask = document.getElementById('mask');

aTr[0].style.backgroundColor = '#fff';

for(var i=1;i<aTr.length;i++){
	if(i%4 == 0){
		aTr[i].setAttribute('class','success');
	}
	else if(i%4 == 1){
		aTr[i].setAttribute('class','error');
	}
	else if(i%4 == 3){
		aTr[i].setAttribute('class','warning');
	}
	else{
		aTr[i].setAttribute('class','info');
	}
	
	var oTd1 = document.createElement('td');
	var oA = document.createElement('a');
	oA.href = 'javascript:;';
	oA.innerHTML = '删除';
	oA.onclick = function(){
		var r=confirm("确定删除吗？")
		if(r != true){
			this.parentNode.parentNode.display = 'none';
			return;
		}
		else{
			oTab.children[0].removeChild(this.parentNode.parentNode);
			for(var i=1;i<aTr.length;i++){
				if(i%4 == 0){
					aTr[i].setAttribute('class','success');
				}
				else if(i%4 == 1){
					aTr[i].setAttribute('class','error');
				}
				else if(i%4 == 3){
					aTr[i].setAttribute('class','warning');
				}
				else{
					aTr[i].setAttribute('class','info');
				}
			}
		}
	}
	oTd1.appendChild(oA);
	aTr[i].appendChild(oTd1);
	
	
	//modify
	var oTd2 = document.createElement('td');
	var oA2 = document.createElement('a');
	oA2.href = 'javascript:;';
	oA2.innerHTML = '编辑';
	oA2.onclick = function modify(){
		var oBtn = oBox.getElementsByTagName('button');//修改框中的按钮
		var aInput = oBox.getElementsByTagName('input');//修改框中的文本框
		var oTrNow = this.parentNode.parentNode;//当前行
		var aText = oTrNow.getElementsByTagName('td');//当前行中的信息单元格
		var oSelect = document.getElementById('selectExam-2');
		
		oBox.style.display = 'block';
		oMask.style.display = 'block';
		
		//box中的三个text获取当前行的信息内容
		var j;
		for(j=0;j<aInput.length;j++){
			aInput[j].value = aText[j+1].innerHTML;
		}
		
         var ops = oSelect.options;
         for(var i=0;i<ops.length;i++) {
         	//alert(aText[j+1].innerHTML)
            if(aText[j+1].innerHTML==ops[i].text) {
               oSelect.options[i].selected = "true";
            }
         }
		//取消按钮
		oBtn[0].onclick = function(){
			oBox.style.display = 'none';
			oMask.style.display = 'none';
		}
		//确定按钮 点击后每行前三个信息单元格内容变为box中text的内容
		oBtn[1].onclick = function(){
			var k;
			for(k=0;k<aInput.length;k++){
				aText[k+1].innerHTML = aInput[k].value;
			}	
			aText[k+1].innerHTML = $('#selectExam-2').find('option:selected').text();
			oBox.style.display = 'none';
			oMask.style.display = 'none';
		}//oBtn[1]
	}
	
	oTd2.appendChild(oA2);
	aTr[i].appendChild(oTd2);
}

//---search 搜索按钮
//var oSearch = document.getElementById('search');
//
//oSearch.onclick = function(){
//	var oName = document.getElementById('name');
//	var oId = document.getElementById('Id');
//	var oSelect = document.getElementById('selectExam');
//	if(oName.innerHTML != null){
//		for(var i=1;i<oTab.rows.length;i++){
////			alert(oTab.tBodies[0].rows.length)
////			alert(oTab.rows.length)
//
//			if(oName.value == oTab.tBodies[0].rows[i].cells[1].innerHTML){	
//				
//			}
//			else{
//				oTab.rows[i].style.display = 'none';
//			}
//		}
//	}
//	for(var i=1;i<oTab.rows.length;i++){
//		oTab.rows[i].style.backgroundColor = 'red' 
//	}
////	if(oId.innerHTML != null){
////		for(var i=1;i<oTab.rows.length;i++){
////			if(oId.value == oTab.tBodies[0].rows[i].cells[0].innerHTML){
////				oTab.tBodies[0].rows[i].style.display = 'block';
////			}
////			else{
////				oTab.tBodies[0].rows[i].style.display = 'none';
////			}
////		}
////	}
////	else if($('.selectExam').eq(1).find('option:selected').text() != ''){
////		for(var i=0;i<oTab.tBodies[0].rows.length;i++){
////			if($('.selectExam').eq(1).find('option:selected').text() == oTab.tBodies[0].rows[i].cells[3].innerHTML){
////				oTab.tBodies[0].rows[i].style.display = 'block';
////			}
////			else{
////				oTab.tBodies[0].rows[i].style.display = 'none';
////			}
////		}
////	}
//}

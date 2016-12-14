// for exchanging the second nav
// var oNav=document.getElementById("nav");
// var aDiv=oNav.getElementsByTagName("div");
// aDiv[aDiv.length-1].style.left="15px";
// aDiv[aDiv.length-1].style.top="90px";
// for(var i=0;i<aDiv.length-1;i++){
// 	aDiv[i].index=i;
// 	aDiv[i].onclick=function(){
// 		aDiv[aDiv.length-1].style.left=aDiv[this.index].offsetLeft+"px";
// 	}
// }


var oTable;
var oTbody;
var aTr;
var oCover=document.getElementById("cover");
var opT=document.getElementById("wranning-text");
var oBtnCancel=document.getElementById("btn-cancel");
var oBtnConfirm=document.getElementById("btn-confirm");
var arr=[];
var index;
var CourseNum;


function getElements() {
	oTable = '';
	oTbody = '';
	aTr = [];
	arr = [];
	CourseNum = 0;
	oTable=document.getElementsByTagName("table")[0];
	oTbody=oTable.getElementsByTagName("tbody")[0];
	aTr=oTbody.getElementsByTagName("tr");
	for(var i=1;i<aTr.length;i++){
		if(i%2){
			aTr[i].style.backgroundColor="#f9f9f9";
		}else{
			aTr[i].style.backgroundColor="#fff";
		}
	}
	for(var i=1;i<aTr.length;i++){
		arr.push(aTr[i].getElementsByTagName("td"));
	}
	CourseNum = arr[arr.length-1][0].innerHTML;
}
getElements();

//for the reaction of delete
for(var i=0;i<arr.length;i++){
	arr[i][arr[i].length-1].index=i;
	arr[i][arr[i].length-1].onclick=function(){
		index=this.index;
		oCover.style.display='block';
		opT.innerHTML='您确定要删除'+arr[this.index][1].innerHTML+'这门课程？';
		oBtnCancel.onclick=function(){
			oCover.style.display='none';
		}	
		oBtnConfirm.onclick=function(){
			oCover.style.display='none';
			oTbody.removeChild(arr[index][0].parentNode);
			aTr.length--;
			getElements();
		}
	}
}

//for the function of batch delete
var oBtnBatchDelete=document.getElementById("batch-delete");
var arr1=[];
var oTd;
var judge1 = true;
var judge2 = true;

function judgeArr1(){
	for(var m=0;m<arr1.length;m++){
		if(arr[arr1[m]][arr[0].length-1].firstChild.checked==false){
			arr1.splice(m,1);//如果碰到arr1中存的索引值对应的所在行复选框未被选中，则从数组arr1中删除该元素
		}
	}
}
oBtnBatchDelete.onclick=function(){
	if(judge1){
		for(var i=0;i<aTr.length;i++){
			oTd=document.createElement("td");
			oTd.innerHTML='<input type="checkbox" name="delete"/>';
			aTr[i].appendChild(oTd);
		}
		//全选---start
		aTr[0].lastChild.firstChild.onclick=function(){
			if(judge2){
				oBtnBatchDelete.className='btn btn-danger t-c';
				oBtnBatchDelete.innerHTML='点击批量删除';
				judge2=false;
				for(var n =0; n<arr.length; n++){
					arr1.push(n);
					arr[n][arr[n].length-1].firstChild.checked=true;
					arr[n][arr[n].length-1].firstChild.onclick=function(){
						judgeArr1();
					}
				}
			}else{
				for(var m=0;m<arr.length;m++){
					arr[m][arr[0].length-1].firstChild.checked=false;
				}
				arr1 =[];
				oBtnBatchDelete.className='btn btn-info';
				oBtnBatchDelete.innerHTML='<i class="fa fa-trash-o cur-p"></i>批量删除';
				judge2=true;
			}
		}
		//全选---end
		for(var j=0;j<arr.length;j++){
			arr[j][arr[j].length-1].firstChild.index=j;
			arr[j][arr[j].length-1].firstChild.onclick=function(){
				oBtnBatchDelete.className='btn btn-danger t-c';
				oBtnBatchDelete.innerHTML='点击批量删除';
				if(arr1.length==0){
					arr1.push(this.index);//存入第一个数据时不会发生重复，所以无需判断
				}else{
					for(var k=0;k<arr1.length&&this.index!=arr1[k];k++);
					if(k==arr1.length){
						arr1.push(this.index);
					}
				}
			}
		}
		judge1=false;
	}else{
		judgeArr1();
		oCover.style.display='block';
		if(arr1.length == aTr.length-1){
			opT.innerHTML='您确定要批量删除所选的所有课程？';
		}else if(arr1.length == 0) {
			opT.innerHTML='请选中所要删除的课程';
		}else{
			opT.innerHTML='您确定要批量删除所选的 '+arr1.length+' 门课程？';
		}
		oBtnCancel.onclick=function(){
			oCover.style.display='none';
			for(var i=0;i<arr1.length;i++){
				arr[arr1[i]][arr[0].length-1].firstChild.checked=false;//注意：checked的值不是tr元素最后一列td的属性，而是td子元素input元素的属性
			}
			for(var m=0;m<aTr.length;m++){
				aTr[m].removeChild(aTr[m].lastChild);
			}
			arr1=[];//进行一次操作后清空数组里的值，避免重复
			//alert('取消：'+arr1);
		}
		oBtnConfirm.onclick=function(){
			oCover.style.display='none';
			for(var i=0;i<arr1.length;i++){
				oTbody.removeChild(arr[arr1[i]][0].parentNode);
			}
			for(var m=0;m<aTr.length;m++){
				aTr[m].removeChild(aTr[m].lastChild);
			}
			arr1=[];
			aTr.length--;
			getElements();
		}
		oBtnBatchDelete.className='btn btn-info';
		oBtnBatchDelete.innerHTML='<i class="fa fa-trash-o cur-p"></i>批量删除';
		judge1=true;
	}
}

/*for add course*/
var oBtnAddCourse = document.getElementById('add');
var oAddCourse = document.getElementById('addCourse');
var oInformation = document.getElementById('information');
var aBtnAddCourse = oAddCourse.getElementsByTagName('button');
var aBtnAddCancel = document.getElementById('add-btn-cancel');
var aBtnAddConfirm = document.getElementById('add-btn-confirm');
var oAddCover=document.getElementById("cover-add");
//var num = 1;

oBtnAddCourse.onclick = function(){
	oInformation.style.display = 'none';
	oAddCourse.style.display = 'block';
}
for(var i = 0; i<aBtnAddCourse.length; i++){
	aBtnAddCourse[i].index = i;
	aBtnAddCourse[i].onclick = function(){
		var index1 = this.index;
		oAddCover.style.display = 'block';
		aBtnAddCancel.onclick = function(){
			oAddCover.style.display = 'none';
		}
		aBtnAddConfirm.onclick = function(){
			oAddCourse.style.display = 'none';
			oInformation.style.display = 'block';
			oAddCover.style.display = 'none';
			/*add the course into the course form*/
			var oTr = document.createElement('tr');
			oTr.innerHTML = '<td>'+CourseNum.substring(0,1)+(Number(CourseNum.substring(1,CourseNum.length))+1)+'</td><td>'+aBtnAddCourse[index1].parentNode.firstChild.lastChild.innerHTML+'</td><td>300学时</td><td>2016.9.1</td><td>2016.11.1</td><td>张大宝</td><td>234</td><td><i class="fa fa-trash-o cur-p"></i></td>';
			oTbody.appendChild(oTr);
			aTr.length++;
			getElements();
			judge2 = true;
		}
	}
}


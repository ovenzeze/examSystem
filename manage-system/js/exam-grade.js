//exam-manage
/*
* @Author: Administrator
* @Date:   2016-11-27 16:37:13
* @Last Modified by:   Administrator
* @Last Modified time: 2016-11-28 00:40:10
*/
var oExamList = document.getElementById('examList');
var aExamNodes = oExamList.getElementsByTagName("li");
// alert(aExamNodes.length);
//指定图表的配置项和数据

var option1 = {
    title : {
        text: '2015年11月程序员考试成绩',
        subtext: '1511级程序员班',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['80分以下','80-90分','90-100分','100-110分','110分以上']
    },
    series : [
        {
            name: '成绩统计',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:30, name:'80分以下'},
                {value:20, name:'80-90分'},
                {value:20, name:'90-100分'},
                {value:10, name:'100-110分'},
                {value:10, name:'110分以上'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
var option2 = {
    title : {
        text: '2015年11月软件设计师考试成绩',
        subtext: '1511级软师班',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['80分以下','80-90分','90-100分','100-110分','110分以上']
    },
    series : [
        {
            name: '成绩统计',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:30, name:'80分以下'},
                {value:10, name:'80-90分'},
                {value:30, name:'90-100分'},
                {value:20, name:'100-110分'},
                {value:10, name:'110分以上'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
var option3 = {
    title : {
        text: '2016年5月程序员考试成绩',
        subtext: '1605级程序员班',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['80分以下','80-90分','90-100分','100-110分','110分以上']
    },
    series : [
        {
            name: '成绩统计',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:20, name:'80分以下'},
                {value:10, name:'80-90分'},
                {value:50, name:'90-100分'},
                {value:10, name:'100-110分'},
                {value:10, name:'110分以上'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
var option4 = {
    title : {
        text: '2016年5月软件设计师考试成绩',
        subtext: '1605级软师班',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
       data: ['80分以下','80-90分','90-100分','100-110分','110分以上']
    },
    series : [
        {
            name: '成绩统计',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:20, name:'80分以下'},
                {value:20, name:'80-90分'},
                {value:40, name:'90-100分'},
                {value:10, name:'100-110分'},
                {value:10, name:'110分以上'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
var aOption=[option1,option2,option3,option4];
for(var i=0;i<aExamNodes.length;i++)
{
    //初始化echarts实例
        var mychart1 = echarts.init(aExamNodes[i]);

//使用指定的配置和数据显示图表
        mychart1.setOption(aOption[i]);
}

/*//for grade-manager-->grade-table
var oTab = document.getElementById('table1');
var aTr = oTab.children[0].getElementsByTagName('tr');
var oBox = document.getElementById('box');
var oMask = document.getElementById('mask');

aTr[0].style.backgroundColor = '#fff';

for(var i=1;i<aTr.length;i++){
	if(i%2!=0){
		aTr[i].style.backgroundColor = '#ccc';
	}
	else{
		aTr[i].style.backgroundColor = '#fff';
	}

	var oTd1 = documtent.createElement('td');
    var oA = document.createElement('a');
	oA.href = 'javascript:;';
	oA.innerHTML = '删除';
	oA.onclick = function(){
		var r=confirm("确定删除吗？")
		if(r != true){
			return;
		}
		else{
			oTab.children[0].removeChild(this.parentNode.parentNode);
			for(var i=1;i<aTr.length;i++){
				if(i%2!=0){
					aTr[i].style.backgroundColor = '#ccc';
				}else{
					aTr[i].style.backgroundColor = '#fff';
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

		oBox.style.display = 'block';
		oMask.style.display = 'block';

		//box中的三个text获取当前行的信息内容
		for(var j=0;j<aInput.length;j++){
			aInput[j].value = aText[j].innerHTML;
		}
		//取消按钮
		oBtn[0].onclick = function(){
			oBox.style.display = 'none';
			oMask.style.display = 'none';
		}
		//确定按钮 点击后每行前三个信息单元格内容变为box中text的内容
		oBtn[1].onclick = function(){
			for(var k=0;k<3;k++){
				aText[k].innerHTML = aInput[k].value;
			}
			oBox.style.display = 'none';
			oMask.style.display = 'none';
		}//oBtn[1]
	}

	oTd2.appendChild(oA2);
	aTr[i].appendChild(oTd2);
}*/

// multiple select menu
$('#btn1').click(function() {
    $('#fliterBox').css("display") == "block" ? $('#fliterBox').hide('slow') : $('#fliterBox').show('slow');
});
// switch and show fliterList items
for (var i1 = 0; i1 < $('#fliterListNav ul li').length; i1++) {
    $('#fliterListNav ul li:eq(' + i1 + ')').click(function(event) {
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
for (var j1 = 0; j1 < $('#fliterList ul li').length; j1++) {
    $('#fliterList ul li:eq(' + j1 + ')').click(function(event) {
        $('#fliterBox').hide('slow');
        $('#span1').text(this.innerHTML);
});
}

// multiple menu end

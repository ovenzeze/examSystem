
for(var j=0;j<$('.main-content li').length;j++){
	//alert($('.main-content li a').length);
    $('.main-content li')[j].index=j;
	$('.main-content li').eq(j).on('click',function(){
		//alert(this.index);
	for(var i=0;i<$('.main-content li').length;i++){
		$('.main-content li').eq(i).css('display','none');	
	}
	$('.this-pie').eq(this.index).css('display','block');
	//alert(123);
})}

var aPie=document.getElementsByClassName("this-pie");
//alert(aPie.length);
//指定图表的配置项和数据

var option1 = {
    title : {
        text: '1501期程序员结业考试',
        //subtext: '1511级程序员班',
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
        text: '1502期程序员结业考试',
        //subtext: '1511级软师班',
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
        text: '1501期软件工程师业考试',
        //subtext: '1605级程序员班',
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
        text: '1502期软件工程师结业考试',
        //subtext: '1605级软师班',
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
var option5 = {
    title : {
        text: '1601期程序员结业考试',
        //subtext: '1511级程序员班',
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
var option6 = {
    title : {
        text: '1601期软件工程师结业考试',
        //subtext: '1511级程序员班',
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
var aOption=[option1,option2,option3,option4,option5,option6];
for(var i=0;i<aPie.length;i++)
{
    //初始化echarts实例
        var mychart1 = echarts.init(aPie[i]);

//使用指定的配置和数据显示图表
        mychart1.setOption(aOption[i]);
}

// multiple select menu
$('#btn1').click(function() {
    $('#fliterBox').css("display") == "block" ? $('#fliterBox').hide('slow') : $('#fliterBox').show('slow');
});
// switch and show fliterList items
for (var i = 0; i < $('#fliterListNav ul li').length; i++) {
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
for (var j = 0; j < $('#fliterList ul li').length; j++) {
    $('#fliterList ul li:eq(' + j + ')').click(function(event) {
        $('#fliterBox').hide('slow');
        $('#span1').text(this.innerHTML);
    });
}

// multiple menu end

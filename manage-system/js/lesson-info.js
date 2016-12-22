/*the background-color of form*/
PrintBackColor();
function PrintBackColor(){
    console.log('fun 1');
    $('table tr:nth-child(4n)').css('background','#d9edf7');
    $('table tr:nth-child(4n+1)').css('background','#dff0d8');
    $('table tr:nth-child(4n+2)').css('background','#fcf8e3');
    $('table tr:nth-child(4n+3)').css('background','#f5f5f5');
}
/*bench delete*/
//$(function() {
//    $("#benchdelete").click(function() {
//        $("input[name='part']").prop("checked", this.checked);
//    });
//
//    $("input[name='part']").click(function() {
//        var subs = $("input[name='part']");
//        $("#benchdelete").prop("checked" , subs.length == subs.filter(":checked").length ? true :false);
//    });
//});
benchdelete();
function benchdelete(){
    $("#benchdelete").click(function() {
        $("input[name='part']").prop("checked", this.checked);
    });

    $("input[name='part']").click(function() {
        var subs = $("input[name='part']");
        $("#benchdelete").prop("checked" , subs.length == subs.filter(":checked").length ? true :false);
    });
}

/*delete one line*/
deleteoneElement();
function deleteoneElement(){
    $('.delete').on('click',function(){
        var Cname = $(this).parent().parent().children().eq(2).html();
        if(confirm("确定删除“"+Cname+"”这门课程吗？")){
            $(this).parent().parent().remove();
            PrintBackColor();
        }
    })
}

//选中删除
$('#batch-delete').on('click',function(){
    var Clength = $("input[name='part']").filter(":checked").length;
    if($("input[name='part']").filter(":checked").length == 0){
        alert('请选中所要删除的课程！');
    }else  if(confirm("确定删除选中的"+Clength+"门课程吗？")){
        $("input[name='all']").prop("checked", false);
        $("tbody input:checked").each(function () {
            $(this).parent().parent().remove();
            PrintBackColor();
        });
    }
});

//add course
$('#add').on('click',function(){
    $('.addcourse').css('display','block');
    $('#information').css('display','none');
})
$('.add-btn').on('click',function(){
    var Cname = $(this).prev().find('p').html();
    if(confirm("您确定要添加‘"+Cname+"’这门课程？")==true){
        var Cnum = $('tbody').children().last().children().eq(1).html();
        if($("input[name='part']").length){
            var num = Cnum.substring(0,1)+(Number(Cnum.substring(1,Cnum.length))+1);
        }else{
            var num = 'c1';
        }
        $('tbody').append('<tr><td><input type="checkbox" name="part"></td><td>'+num+'</td><td>'+Cname+'</td><td>300学时</td><td>2016.9.1</td><td>2016.12.1</td><td>张大宝</td><td>350</td><td><i class="fa fa-trash-o cur-p delete"></td></tr>');
        $('.addcourse').css('display','none');
        $('#information').css('display','block');
        PrintBackColor();
        deleteoneElement();
        benchdelete();
    }
})

/*the function of search*/
function addElement(arr1,index1){
    if(arr1.length==0){
        arr1.push(index1);//存入第一个数据时不会发生重复，所以无需判断
    }else{
        for(var k=0;k<arr1.length&&index1!=arr1[k];k++);
        if(k==arr1.length){
            arr1.push(index1);
        }
    }
}
$('#searchBtn').on('click',function(){
    var str = $('#search').val();
    var arr = [];
    for(var i = 0; i<$('table.table-information tr').length; i++){
        $('table.table-information tr').each(function(){
            //用课程号匹配
            if($(this).children().eq(1).html() == str){
                addElement(arr,$(this).index());
            }
            //用课程名匹配
            else if($(this).children().eq(2).html() == str){
                addElement(arr,$(this).index());
            }
            //用学时匹配
            else if($(this).children().eq(3).html() == str){
                addElement(arr,$(this).index());
            }
            //用老师匹配
            else if($(this).children().eq(6).html() == str){
                addElement(arr,$(this).index());
            }
        })
    }
    $('.filterform').html = '';
    if(arr.length){
        html = '<tr>'+$('table.table-information tr').first().html()+'</tr>';
        $('.content').css('display','none');
        $('.filterform').css('display','block');
        for(var i = 0; i<arr.length; i++){
            html +='<tr>'+$('table.table-information tr').eq(arr[i]).html()+'</tr>';
        }
        $('#table-filterform').append(html);
        $('#table-filterform').addClass('filtertable');
        $('#table-filterform tr').children().addClass('filtertableTd');
        $('#table-filterform tr').first().addClass('filtertabletitle');
        deleteoneElement();
        alert(1);
        PrintBackColor();
        alert(2);
        $('.back').on('click',function(){
            $('.content').css('display','block');
            $('.filterform').css('display','none');
        })
    }else{
        alert('搜索条件不匹配！');
    }
})

/*for ajax request*/

//get the form of course
window.onload = function() {
    ajax('http://123.206.204.163:2333/exam/courseInfo/', function (res) {
        var json = JSON.parse(res);
        for (var attr in json) {
            var html = '<tr><td><input type="checkbox" name="part"></td>';
            for (var attr1 in json[attr]) {
                html += '<td>' + json[attr][attr1] + '</td>';
                //console.log(json[attr][attr1]);
            }
            html += '<td><i class="fa fa-trash-o cur-p delete"></i></td></tr>';
            $('.table-information').children().eq(0).append(html);
        }
        PrintBackColor();
        deleteoneElement();
        benchdelete();
    })
}

/*for ajax request end*/


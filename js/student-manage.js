//全选和多选
$(function() {  
$("#btn").click(function() {  
    $("input[name='a']").prop("checked", this.checked);  
  });  
    
  $("input[name='a']").click(function() {  
    var $subs = $("input[name='a']");  
    $("#btn").prop("checked" , $subs.length == $subs.filter(":checked").length ? true :false);  
  });  
}); 
//选中删除
$('#deleteAll').on('click',function(){
		if(confirm("确定删除吗？")==true){
	  	$("tbody input:checked").each(function () {
                    $(this).parent().parent().parent().remove();
                    //$("#btn :checkbox").attr("checked", false); 未生效
                });
              }
       
});
//删除单个
for( var i=0;i<$('.deleteOne').length;i++){
	

	$('.deleteOne').eq(i).on('click',function (){
	if(confirm("确定删除吗？")==true){
    $(this).parent().parent().remove();
      }    
});
}

//添加
$('#addUser1').click(function (){
	//弹窗弹出
	$('#zz').css('display','block');
	$('#addUser').css('display','block');
	//验证
	$('form :input').blur(function(){
             var $parent = $(this).parent();
             $parent.find(".formtips").remove();
             //验证学号
             if( $(this).is('#inputNum') ){
                    if( this.value=="" || this.value.length !== 8 ){
                    	//判断是否全为数字
                    	//var re=/\D/;
//                  	if(!re.test(this.value)){
//                  		var errorMsg = '请输入8位数字.';
//                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
//                  	}
                        var errorMsg = '请输入8位的学号.';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                    }else{
                        var okMsg = '输入正确.';
                        $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                    }
             }
             //验证用户名
             if( $(this).is('#inputName') ){
                if( this.value=="" || this.value.length > 4 ){
                      var errorMsg = '请输入正确的用户名.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
                      var okMsg = '输入正确.';
                      $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                }
             }
             //验证专业
             if( $(this).is('#inputClass') ){
                if( this.value=="" ){
                      var errorMsg = '请输入正确的用户名.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
                      var okMsg = '输入正确.';
                      $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                }
             }
        }).keyup(function(){
           $(this).triggerHandler("blur");
        }).focus(function(){
             $(this).triggerHandler("blur");
        });//end blur
		//点击确认
		$('#addUserInform').click(function () {
			//匹配学号和用户名
				
			 	//添加至下一行
                $('table tr:last').after($('<tr><td class="checkbox m-0"><label><input type="checkbox" name="a"></label></td><td></td><td></td><td></td><td></td><td></td> <td><a href="#" id="">修改</a>/<a href="#" class="deleteOne">删除</a></td></tr>'));
                $('table tr:last td:eq(1)').text($('#inputNum').val());
                $('table tr:last td:eq(2)').text($('#inputName').val());
            	$('table tr:last td:eq(4)').text($('#inputCourse').val());
                $('table tr:last td:eq(3)').text($('#inputClass').val());
            	$('table tr:last td:eq(5)').text($('#classState').val());
            	//每一个添加的行添加删除事件
            	for( var i=0;i<$('.deleteOne').length;i++){
					$('.deleteOne').eq(i).on('click',function (){
    					$(this).parent().parent().remove();
					});
				}
            	$('#zz').css('display','none');
		    $('#addUser').css('display','none');
        })
});
//修改
for (var number = 0;number < $('#userTbody tr').length;number++) {
	$('#userTbody tr').eq(number).attr("index",number);
	//console.log($('#userTbody tr').eq(number).attr("index"));
}
$('.changeInfrom').on("click",changeInfo);
function changeInfo(){
	    $('#zz').css('display','block');
		$('#addUser').css('display','block');
		var number = $(this).parent().parent().attr("index");
		//验证
	$('form :input').blur(function(){
             var $parent = $(this).parent();
             $parent.find(".formtips").remove();
             //验证学号
             if( $(this).is('#inputNum') ){
                    if( this.value=="" || this.value.length !== 8 ){
                        var errorMsg = '请输入8位的学号.';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                    }else{
                        var okMsg = '输入正确.';
                        $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                    }
             }
             //验证用户名
             if( $(this).is('#inputName') ){
                if( this.value=="" ){
                      var errorMsg = '请输入用户名.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
                      var okMsg = '输入正确.';
                      $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                }
             }
             //验证专业
             if( $(this).is('#inputClass') ){
                if( this.value=="" ){
                      var errorMsg = '请输入正确的用户名.';
                      $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
                }else{
                      var okMsg = '输入正确.';
                      $parent.append('<span class="formtips onSuccess">'+okMsg+'</span>');
                }
             }
        }).keyup(function(){
           $(this).triggerHandler("blur");
        }).focus(function(){
             $(this).triggerHandler("blur");
        });//end blur
		$('#addUserInform').click(number,function(event){
			$('#userTbody tr:eq('+event.data+') td:eq(1)').text($('#inputNum').val());
			$('#userTbody tr:eq('+event.data+') td:eq(2)').text($('#inputName').val());
			$('#userTbody tr:eq('+event.data+') td:eq(3)').text($('#inputClass').val());
			$('#userTbody tr:eq('+event.data+') td:eq(4)').text($('#inputCourse').val());
			$('#userTbody tr:eq('+event.data+') td:eq(5)').text($('#classState').val());
			$('#zz').css('display','none');
		    $('#addUser').css('display','none');
		});
		$('#cancelChange').click(function(){	    
			$('#zz').css('display','none');
		    $('#addUser').css('display','none');
		});
}


$('#cancelChange').click(function (){
$('#zz').css('display','none');
$('#addUser').css('display','none');
});
$('#addClose').click(function (){
$('#zz').css('display','none');
$('#addUser').css('display','none');
});



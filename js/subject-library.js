/*显示日历插件*/
;$('.form_datetime').datetimepicker({
        //language:  'fr',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        showMeridian: 1
    });
$('.form_date').datetimepicker({
    language:  'fr',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0
});
$('.form_time').datetimepicker({
    language:  'fr',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 1,
    minView: 0,
    maxView: 1,
    forceParse: 0
});

var deleteSubject = [],
    subject = [],
    index,
    _this,
    whichDelete = 0;

/*更新题目*/

function updateSubject(){
    $('#subject > tbody').children().remove('*');
    $.ajax({
        method: 'post',
        url: 'http://localhost:2332/',
        data: null,
        contentType: 'plain',
        success: function(rel){
            subject = [];
            for(var i = 0;i < rel.length;i ++){
                var s = new sub();
                s.id = rel[i]._id;
                s.content = rel[i].content;
                s.time = rel[i].time;
                s.type = rel[i].type;
                subject.push(s);
            }
            insert();
        },
        error: function(rel){
            console.log(rel);
        }
    });
}

function insert(){
    $('#subject>tbody').html("");
    for(var i = 0;i < subject.length;i ++){
        var oTr = $('#subject>tbody').append('<tr></tr>');
        oTr.children(':last-child').append('<td><div class = "checkbox f-l col-md-12 top-m-0"><label for="checkbox'+i+'"><input type="checkbox" id="checkbox'+i+'">'+(i+1)+'</label></div></td><td>'+subject[i].content+'</td><td>'+subject[i].type+'</td><td>'+subject[i].time+'</td><td class="color-primary"><a href="javascript:void(0);">delete</a>/<a href="javascript:void(0);">lead</a></td>');
    }
}
/*显示块*/
function display(obj){
    obj.addClass('top-display-b');        //显示弹出框
    obj.addClass('fade');
    obj.addClass('in');
}
/*隐藏块*/
function hidden(obj){
    obj.removeClass('top-display-b');        //显示弹出框
    obj.removeClass('fade');
    obj.removeClass('in');
}
/*题目信息*/
function sub(){
    this.id = "";
    this.content = "";
    this.time = "";
    this.type = "";
}
/*格式化日期*/
Date.prototype.Format=function() {
    var year = this.getFullYear();
    var month = this.getMonth()+1; //月份
    var day = this.getDate(); //日
    return year + "-" + month + "-" + day;
}

window.onload = function () {

    updateSubject();         //更新题目个数

    $('.select-subject').find('input').val($('.select-subject ul').find('li > a').eq(0).html());
    /*弹出框的选择课程下拉框*/
    $('.select-subject').find('button').click(function (event) {
        event.stopPropagation();
        $(this).siblings('ul').toggleClass('top-display-b');
    });
    $('body').click(function () {
        $('.select-subject').find('ul').removeClass('top-display-b');
    });
    $('.select-subject').find('ul > li').click(function () {
        $(this).parent().parent().siblings('input').val($(this).find('a').html());

    });

    $('.select-subject').eq(0).find('ul > li').click(function(){
        var typeValue = $('#type').val();
        $.ajax({
            method: 'post',
            url: 'http://localhost:2332/type',
            contentType: 'text/plain',
            data: typeValue,
            success: function (rel) {
                subject = [];
                for(var i = 0;i < rel.length;i ++){
                    var s = new sub();
                    s.content = rel[i].content;
                    s.time = rel[i].time;
                    s.type = rel[i].type;
                    subject.push(s);
                }
                insert();
            },
            error: function () {
                console.log('error');
            }
        });
    });

    /*添加题目按钮生效*/
    $('#topic-add-btn').click(function () {
        $('#topic-add-subject').find('textarea').val("");
        display($('#topic-add-subject'));
    });

    /*关闭按钮生效*/
    $('button.close').click(function () {
        $(this).parent().parent().parent().parent().removeClass('top-display-b');
    });

    /*批量添加*/
    $('#topic-adda-btn').click(function () {
        display($('#topic-adda-subject'));
    });

    /*导入课程*/
    $('#topic-lead-btn').click(function () {
        deleteSubject = [];
        for (var i = 0; i < $('input[type="checkbox"]').not($('#check-all')).size(); i++) {
            if ($('input[type="checkbox"]').not($('#check-all')).eq(i).is(':checked')) {
                deleteSubject.push(subject[i]);
            }
        }
        if (deleteSubject.length != 0){
            display($('#topic-lead-subject'));
            console.log(deleteSubject.length);
        }

        else
            display($('#topic-error'));
    });

    /*删除课程*/
    $('#topic-delete-btn').click(function () {
        deleteSubject = [];
        for (var i = 0; i < $('input[type="checkbox"]').not($('#check-all')).size(); i++) {
            if ($('input[type="checkbox"]').not($('#check-all')).eq(i).is(':checked')) {
                deleteSubject.push(subject[i]);
            }
        }
        if (deleteSubject.length != 0)
            display($('#topic-delete-subject'));
        else
            display($('#topic-error'));
    });

    /*全选/反选功能*/
    $('#check-all').click(function () {
        $('input[type = "checkbox"]').not($('#check-all').find('input')[0]).prop('checked', $(this).is(':checked'));
    });

    /*单个删除功能生效*/
    $('#subject').on('click', 'a:even', function () {
        deleteSubject = [];
        var deleteS = subject[$(this).parent().parent().index()]
        deleteSubject.push(deleteS);
        display($('#topic-delete-subject'));
        whichDelete = 1;
    });

    /*单个导入功能生效*/
    $('#subject').on('click', 'a:odd', function () {
        display($('#topic-lead-subject'));
        deleteSubject = [];
        var deleteS = subject[$(this).parent().parent().index()]
        deleteSubject.push(deleteS);
        whichDelete = 1;
        //如果点击确定，则将deleteEle中的删除
    });

    /*点击取消*/
    $('.modal-footer').find('button:odd').click(function () {
        hidden($(this).parent().parent().parent().parent());
        deleteSubject = [];
    });

    /*添加题目操作，点击保存*/
    $('#topic-add-subject .modal-footer').find('button').eq(0).click(function () {
        if ($(this).parent().parent().find('textarea').val() != "") {
            var s = new sub();
            s.content = $(this).parent().parent().find('textarea').val();
            s.time = new Date().Format();
            s.type = $(this).parent().parent().find('input').val();
        //    subject.push(s);
        //    updateSubject();
        }
        hidden($(this).parent().parent().parent().parent());

        $.ajax({
            method: 'post',
            url: 'http://localhost:2332/add',
            contentType: 'application/json',
            data: JSON.stringify({
                content: s.content,
                time: s.time,
                type: s.type
            }),
            success: function () {
                updateSubject();
            },
            error: function () {
                console.log('error');
            }
        });
    });

    /*批量添加操作，点击确定*/
    $('#topic-adda-subject .modal-footer').find('button').eq(0).click(function () {
        hidden($(this).parent().parent().parent().parent());
    });

    /*导入操作，点击确定*/
    $('#topic-lead-subject .modal-footer').find('button').eq(0).click(function () {
        if(!whichDelete){
            deleteSubject = [];
            var checkbox = $('#subject').find('input[type=checkbox]');
            for(var i = 0;i < checkbox.length;i ++){
                if(checkbox.eq(i).is(':checked')){
                    deleteSubject.push(subject[checkbox.eq(i).parent().parent().parent().parent().index()]);
                }
            }
        }
        var typeChange = $('#topic-lead-subject').find('input').val();
        console.log(deleteSubject);
        hidden($(this).parent().parent().parent().parent());
        $.ajax({
            method: 'post',
            url: 'http://localhost:2332/lead',
            data:JSON.stringify({
                leadSubject: deleteSubject,
                typeChange: typeChange,
                timeChange: new Date().Format()
            }),
            contentType: 'application/json',
            success: function(rel){
                updateSubject();
            },
            error: function(){
                console.log('lead error');
            }
        });
    });

    /*删除操作,点击确定*/
    $('#topic-delete-subject .modal-footer').find('button').eq(0).click(function () {
        if(!whichDelete){
            deleteSubject = [];
            var checkbox = $('#subject').find('input[type=checkbox]');
            for(var i = 0;i < checkbox.length;i ++){
                if(checkbox.eq(i).is(':checked')){
                    deleteSubject.push(subject[checkbox.eq(i).parent().parent().parent().parent().index()]);
                }
            }
        }
        hidden($(this).parent().parent().parent().parent());
        $.ajax({
            method: 'post',
            url: 'http://localhost:2332/delete',
            data: JSON.stringify({
                delete: deleteSubject,
            }),
            contentType: 'application/json',
            success: function(rel){
                updateSubject();
            },
            error: function(){
                console.log('delete error');
            }
        });
        whichDelete = 0;
    });

    /*错误提示框，点击确定操作*/
    $('#topic-error .modal-footer').find('button').click(function () {
        hidden($('#topic-error'));
    });

    /*单击题目弹出修改框*/
    $('#subject').on('click','tr td:nth-child(2)',function(){
        $('#topic-modify-subject').find('textarea').val($(this).html());
        display($('#topic-modify-subject'));

        index = $(this).parent().index();
        _this = this;
    });

    /*点击确定,修改题目*/
    $('#topic-modify-subject .modal-footer').find('button').eq(0).click(function () {
        _this.innerHTML = $('#topic-modify-subject').find('textarea').val();
        subject[index].content = $(this).parent().parent().find('textarea').html();
        hidden($(this).parent().parent().parent().parent());
    });

    $('#topic-page').find('li:eq(0)').addClass('disabled');
    $('#topic-page').find('li:eq(1)').addClass('active');

};





kefu233Utils={getCookie:function(name){var cookieValue="";var search=name+"=";if(document.cookie.length>0){offset=document.cookie.indexOf(search);if(offset!=-1){offset+=search.length;end=document.cookie.indexOf(";",offset);if(end==-1){end=document.cookie.length}cookieValue=document.cookie.substring(offset,end)}}return cookieValue},getSubCookie:function(name,subname){var allcookie=this.getCookie(name);var cookieValue="";var search=subname+"=";if(allcookie.length>0){offset=allcookie.indexOf(search);if(offset!=-1){offset+=search.length;end=allcookie.indexOf("&",offset);if(end==-1){end=allcookie.length}cookieValue=allcookie.substring(offset,end)}}return cookieValue},user:function(){var uname=this.getSubCookie("wxuserinforset","username"),uid=this.getSubCookie("wxuserinforset","userID");if(uname!=null&&uname!=""){return{"uid":uid,"uname":unescape(uname)}}else{return""}},param:function(){var user=this.user();if(typeof user=="object"){NTKF_PARAM.uid=user.uid;NTKF_PARAM.uname=user.uname}else{NTKF_PARAM.uid="";NTKF_PARAM.uname=""}},paramstr:function(){var user=this.user();if(typeof user=="object"){return"&uid="+user.uid+"&uname="+user.uname}return""}};
if((/AppleWebKit.*Mobile/i.test(navigator.userAgent)||/Android|Windows Phone|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)||/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))&&!/iPad/i.test(navigator.userAgent)&&location.hash!="#m"){NTKF_PARAM={siteid:"kf_9278",settingid:"kf_9278_1464743622579",uid:"",uname:"",isvip:"0",userlevel:"1",erpparam:""},kefu233={presale:function(){kefu233Utils.param(),NTKF.im_openInPageChat("kf_9278_1464743622579")},aftersale:function(){kefu233Utils.param(),NTKF.im_openInPageChat("kf_9278_1464680771480")}},!function(a,b,c){var d={scriptReady:function(a,b){var c="object"==typeof a?a:window.document.getElementById(a);c.readyState?c.onreadystatechange=function(){(c.attachEvent?"complete"===c.readyState:"loading"!==c.readyState)&&(c.onreadystatechange=null,b&&b())}:c.onload=function(){b&&b()}},getScript:function(a,b,c){var d,e=window.document.createElement("script");if(e.type="text/javascript",e.charset="utf-8",e.defer="defer",e.async="async",e.src=a,b){for(d in b){e[d]=b[d]}}window.document.getElementsByTagName("head")[0].appendChild(e),c&&this.scriptReady(e,c)}};d.getScript(a,b,c)}("http://dl.ntalker.com/js/xn6/ntkfstat.js?siteid=kf_9278")}else{kefu233={presale:function(){window.open("http://downt.ntalker.com/t2d/chat.php?siteid=kf_9278&settingid=kf_9278_1464743622579&baseuri=http%3A%2F%2Fdl.ntalker.com%2Fjs%2Fxn6%2F"+kefu233Utils.paramstr(),"_blank","height=660,width=625,fullscreen=3,top="+(screen.availHeight-660)/2+",left="+(screen.availWidth-625)/2+",status=no,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no,fullscreen=no")},aftersale:function(){window.open("http://downt.ntalker.com/t2d/chat.php?siteid=kf_9278&settingid=kf_9278_1464680771480&baseuri=http%3A%2F%2Fdl.ntalker.com%2Fjs%2Fxn6%2F"+kefu233Utils.paramstr(),"_blank","height=660,width=625,fullscreen=3,top="+(screen.availHeight-660)/2+",left="+(screen.availWidth-625)/2+",status=no,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no,fullscreen=no")}}};
/*kefu233={presale:function(){window.open("http://www.53kf.com/company.php?arg=examda123&style=1&kflist=off&kf=&zdkf_type=2&language=zh-cn&charset=gbk&lytype=0&referer={hz6d_referer}&keyword=http%3A//wx.233.com/account/home/&tfrom=1&tpl=crystal_blue","_blank","height=473,width=703,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no")},aftersale:function(){window.open("http://www.53kf.com/company.php?arg=examda123&style=1&kflist=off&kf=&zdkf_type=2&language=zh-cn&charset=gbk&lytype=0&referer={hz6d_referer}&keyword=http%3A//wx.233.com/account/home/&tfrom=1&tpl=crystal_blue","_blank","height=473,width=703,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no")}};*/
$(document).ready(function(){t();function t(){var t=".post-toc";var a=$(t);var e=".active-current";a.on("activate.bs.scrollspy",function(){var e=$(t+" .active").last();s();e.addClass("active-current");a.scrollTop(e.offset().top-a.offset().top+a.scrollTop()-a.height()/2)}).on("clear.bs.scrollspy",s);$("body").scrollspy({target:t});function s(){$(t+" "+e).removeClass(e.substring(1))}}});$(document).ready(function(){var t=$("html");var a=200;var e=$.isFunction(t.velocity);$(".sidebar-nav li").on("click",function(){var t=$(this);var s="sidebar-nav-active";var i="sidebar-panel-active";if(t.hasClass(s)){return}var o=$("."+i);var l=$("."+t.data("target"));e?o.velocity("transition.slideUpOut",a,function(){l.velocity("stop").velocity("transition.slideDownIn",a).addClass(i)}):o.animate({opacity:0},a,function(){o.hide();l.stop().css({opacity:0,display:"block"}).animate({opacity:1},a,function(){o.removeClass(i);l.addClass(i)})});t.siblings().removeClass(s);t.addClass(s)});$(".post-toc a").on("click",function(a){a.preventDefault();var s=NexT.utils.escapeSelector(this.getAttribute("href"));s=decodeURI(this.getAttribute("href"));var i=$(s).offset().top;e?t.velocity("stop").velocity("scroll",{offset:i+"px",mobileHA:false}):$("html, body").stop().animate({scrollTop:i},500)});var s=$(".post-toc-content");var i=CONFIG.sidebar.display==="post"||CONFIG.sidebar.display==="always";var o=s.length>0&&s.html().trim().length>0;if(i&&o){CONFIG.motion.enable?NexT.motion.middleWares.sidebar=function(){NexT.utils.displaySidebar()}:NexT.utils.displaySidebar()}});
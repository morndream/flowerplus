//index.js
//头部下拉菜单JS
$(".hoverhj").mousemove(
    function () {
        $(".down_menu", this).css("visibility", "visible");
        $(".header").addClass("white_bg");
        $("ul.menu>li>a").css("color", "#666");
        if($(".menu>li>a").css("border-bottom")=="2px solid #fff"){
            $(".menu>li>a").css("border-bottom", "1px solid #000");
        }
        $(".logo-black").css("opacity", "1").siblings("img").css("opacity", "0")
    })
    .mouseout(function () {
        $(".down_menu", this).css("visibility", "hidden");
        $(".header").removeClass("white_bg");
        $("ul.menu>li>a").css("color", "#fff");
        if(  $(".menu>li>a").css("border-bottom")=="1px solid #000"){
            $(".menu>li>a").css("border-bottom", "2px solid #fff");
        }
        $(".logo-black").css("opacity", "0").siblings("img").css("opacity", "1")
    });
$(".hover1").hover(function () {
    $(this).children("span").html("<s>即将到来</s>")
}, function () {
    $(this).children("span").html("花加艺术");
});
$(".hover2").hover(function () {
    $(this).children("span").html("<s>即将到来</s>")
}, function () {
    $(this).children("span").html("商业合作");
});
//点击查看详情时，显示二维码图片
$('.btn').click(function(event){
    event.stopPropagation();
      var name = $(this).attr('id');
    $('.popup').addClass('popshow');
});
//点击背景位置时移除
$('.mask').click(function(){
    $('.popup').removeClass('popshow');
});

//common.js
// (function mouseWheel() {
//     if (document.addEventListener) {
//         document.addEventListener('mousewheel', function(event) {
//             Detail(event);
//         });
//         document.addEventListener('DOMMouseScroll', function(event) {
//             Detail(event);
//         });
//     } else if(document.addEventListener&&!document.attachEvent){
//         document.attachEvent('onmousewheel', function(event) {
//             Detail(event);
//         });
//     }
// })();

function animate(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;//放在这儿只要有一个返回false那就是false
            for (var k in json) {
                //var flag = true;//如果放在这儿变成查看最后一个执行的情况，执行好了返回true，未完成返回false
                if(k === "opacity"){
                    var target = json[k]*100;
                    var leader = parseInt(getStyle(obj, k))*100;
                    var step = (target - leader) /12;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader/100;
                }else if(k === "zIndex"){
                    obj.style.zIndex = json[k];
                }else{
                    var target = json[k];
                    var leader = parseInt(getStyle(obj, k));
                    var step = (target - leader) /12;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                  // console.log("test");
                    obj.style[k] = leader + "px";
                }
                if (leader !== target) {
                    flag = false;
                }
//              console.log(flag);
            }

            if(flag){
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                    alert("hhh");
                }
            }
        },12);
    }

    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }


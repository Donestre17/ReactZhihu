export default function mobile() {
    var pixelRatio=1/window.devicePixelRatio;
    document.write('<meta charset="utf-8" name="viewport" content="width=device-width,user-scalable=no,initial-scale='+pixelRatio+',minimum-scale='+pixelRatio+',maximum-scale='+pixelRatio+'">');
    //获取html节点
    var html=document.getElementsByTagName("html")[0];
    //获取html屏幕宽度
    var pageWidth=html.getBoundingClientRect().width;
    //屏幕宽度/数值=结果
    var rem = pageWidth/10;
    html.style.fontSize=rem+"px";
}
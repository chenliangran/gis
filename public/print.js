/**
 * 默认画笔线宽
 * @type {number}
 */
var defaultStrokeWidth = 1; //画矩形选取框的线宽

/**
 * 选取划线的canvasExt
 * @type {{drawRect: canvasExt.drawRect}}
 */
var canvasExt = {
    /**
     *  画矩形
     * @param canvasId canvasId
     * @param penColor 画笔颜色
     * @param strokeWidth 线宽
     */
    drawRect: function (canvasId, penColor, strokeWidth,width,height) {
        var that = this;
        that.penColor = penColor;
        that.penWidth = 0;
        var canvas = document.getElementById(canvasId);
        //canvas 的矩形框
        var canvasRect = canvas.getBoundingClientRect();
        //canvas 矩形框的左上角坐标
        var canvasLeft = canvasRect.left;
        var canvasTop = canvasRect.top;
        var x = $('#dv').css('left').slice(0,-2);
        var y = $('#dv').css('top').slice(0,-2);
        html2canvas(document.body, {
            scale: 1,
            useCORS: true,        
            allowTaint: false,    
            foreignObjectRendering: true,
            taintTest: true,
        }).then(canvas => {
            printClip(canvas,  Number(x),  Number(y),width,height)
        });
        // 移除画的选取框
        $("#"+canvasId).removeLayer('areaLayer');
        // 隐藏用于华画取框的canvas
        $("#"+canvasId).hide()
    }
};

/**
 * 选取截屏
 * @param canvasId
 */
function clipScreenshots(canvasId,width,height){
    canvasExt.drawRect(canvasId, "red", defaultStrokeWidth,width,height);
}

/**
 * 打印截取区域
 * @param canvas 截取的canvas
 * @param capture_x 截取的起点x
 * @param capture_y 截取的起点y
 * @param capture_width 截取的起点宽
 * @param capture_height 截取的起点高
 */
function printClip(canvas, capture_x, capture_y, capture_width, capture_height) {
    // 创建一个用于截取的canvas
    var clipCanvas = document.createElement('canvas')
    clipCanvas.width = capture_width
    clipCanvas.height = capture_height
    // 截取
    clipCanvas.getContext('2d').drawImage(canvas, capture_x, capture_y, capture_width, capture_height, 0, 0, capture_width, capture_height)
    var clipImgBase64 = clipCanvas.toDataURL()
    // 生成图片
    var clipImg = new Image()
    clipImg.src = clipImgBase64;
    downloadIamge(clipImgBase64)
}

/**
 * 下载保存图片
 * @param imgUrl 图片地址
 */
function downloadIamge(imgUrl) {
    // 图片保存有很多方式，这里使用了一种投机的简单方法。
    // 生成一个a元素
    var a = document.createElement('a')
    // 创建一个单击事件
    var event = new MouseEvent('click')
    // 生成文件名称
    var timestamp = new Date().getTime();
    var name = imgUrl.substring(22, 30) + timestamp + '.png';
    a.download = name
    // 将生成的URL设置为a.href属性
    a.href = imgUrl;
    // 触发a的单击事件 开始下载
    a.dispatchEvent(event);
}
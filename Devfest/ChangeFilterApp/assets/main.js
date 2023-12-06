var image;
var defaultImg;

function upload() {
    var canvas = document.getElementById("canvas1");
    var imgFile = document.getElementById("fileInput");
    image = new SimpleImage(imgFile);
    defaultImg = new SimpleImage(imgFile);
    image.drawTo(canvas);
}

function convertPurple() {
    var canvas = document.getElementById("canvas2");
    var tempImage = new SimpleImage(defaultImg); 
    for (var pixel of tempImage.values()) {
        pixel.setGreen(0); 
    }
    tempImage.drawTo(canvas);
}

function convertGrey() {
    var canvas = document.getElementById("canvas2");
    var tempImage = new SimpleImage(defaultImg); 
    for (var pixel of tempImage.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    tempImage.drawTo(canvas);
}

function convertRed() {
    var canvas = document.getElementById("canvas2");
    var tempImage = new SimpleImage(defaultImg);
    for (var pixel of tempImage.values()) {
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
    tempImage.drawTo(canvas);
}

function convertGreen() {
    var canvas = document.getElementById("canvas2");
    var tempImage = new SimpleImage(defaultImg);
    for (var pixel of tempImage.values()) {
        pixel.setRed(0);
        pixel.setBlue(0);
    }
    tempImage.drawTo(canvas);
}

function convertBlue() {
    var canvas = document.getElementById("canvas2");
    var tempImage = new SimpleImage(defaultImg);
    for (var pixel of tempImage.values()) {
        pixel.setRed(0);
        pixel.setGreen(0);
    }
    tempImage.drawTo(canvas);
}

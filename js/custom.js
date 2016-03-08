var images = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5', 'pic6', 'pic7'];
var currentPic = null;
var oneY = 50;
var twoY = 100;
var threeY = 330;
var fourY = 380;

function selectPicture(id) {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById(id);
    currentPic = img.id;
    ctx.drawImage(img, 0, 0, 300, 400);
}

function createScrollbar() {
    for (var i = 0; i < images.length; i++) {
        $('#scrollbar').append("<img src='img/" + images[i] + ".jpg' id='" + images[i] + "' onclick='selectPicture(\"" + images[i] + "\")'>");
    }
}

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

/** 
 * The event handler for the link's onclick event. We give THIS as a
 * parameter (=the link element), ID of the canvas and a filename.
*/
document.getElementById('download').addEventListener('click', function() {
    downloadCanvas(this, 'canvas', 'meme.png');
}, false);


$("#text-input-1").on("keyup", function() {
    if (currentPic != null) {
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        var text = $("#text-input-1").val();
        ctx.font = '36pt Impact';
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'white';
        var textWidth = ctx.measureText(text);
        var x = (c.width / 2) - (textWidth.width / 2);
        ctx.clearRect(0, 0, 300, 400);
        var img = document.getElementById(currentPic);
        ctx.drawImage(img, 0, 0, 300, 400);
        if (textWidth.width > 280) {
            ctx.strokeText(text, 10, oneY, 280);
            ctx.fillText(text, 10, oneY, 280);
        }
        else {
            ctx.strokeText(text, x, oneY, 280);
            ctx.fillText(text, x, oneY, 280);
        }
        var two = $("#text-input-2").val();
        var three = $("#text-input-3").val();
        var four = $("#text-input-4").val();
        var twoWidth = ctx.measureText(two);
        var threeWidth = ctx.measureText(three);
        var fourWidth = ctx.measureText(four);
        if (twoWidth.width > 280) {
            ctx.strokeText(two, 10, twoY, 280);
            ctx.fillText(two, 10, twoY, 280);
        }
        else {
            x = (c.width / 2) - (twoWidth.width / 2);
            ctx.strokeText(two, x, twoY, 280);
            ctx.fillText(two, x, twoY, 280);
        }
        if (threeWidth.width > 280) {
            ctx.strokeText(three, 10, threeY, 280);
            ctx.fillText(three, 10, threeY, 280);
        }
        else {
            x = (c.width / 2) - (threeWidth.width / 2);
            ctx.strokeText(three, x, threeY, 280);
            ctx.fillText(three, x, threeY, 280);
        }
        if (fourWidth.width > 280) {
            ctx.strokeText(four, 10, fourY, 280);
            ctx.fillText(four, 10, fourY, 280);
        }
        else {
            x = (c.width / 2) - (fourWidth.width / 2);
            ctx.strokeText(four, x, fourY, 280);
            ctx.fillText(four, x, fourY, 280);
        }
    }
});

$("#text-input-2").on("keyup", function() {
    if (currentPic != null) {
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        var text = $("#text-input-2").val();
        ctx.font = '36pt Impact';
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'white';
        var textWidth = ctx.measureText(text);
        var x = (c.width / 2) - (textWidth.width / 2);
        ctx.clearRect(0, 0, 300, 400);
        var img = document.getElementById(currentPic);
        ctx.drawImage(img, 0, 0, 300, 400);
        if (textWidth.width > 280) {
            ctx.strokeText(text, 10, twoY, 280);
            ctx.fillText(text, 10, twoY, 280);
        }
        else {
            ctx.strokeText(text, x, twoY, 280);
            ctx.fillText(text, x, twoY, 280);
        }
        var one = $("#text-input-1").val();
        var three = $("#text-input-3").val();
        var four = $("#text-input-4").val();
        var oneWidth = ctx.measureText(one);
        var threeWidth = ctx.measureText(three);
        var fourWidth = ctx.measureText(four);
        if (oneWidth.width > 280) {
            ctx.strokeText(one, 10, oneY, 280);
            ctx.fillText(one, 10, oneY, 280);
        }
        else {
            x = (c.width / 2) - (oneWidth.width / 2);
            ctx.strokeText(one, x, oneY, 280);
            ctx.fillText(one, x, oneY, 280);
        }
        if (threeWidth.width > 280) {
            ctx.strokeText(three, 10, threeY, 280);
            ctx.fillText(three, 10, threeY, 280);
        }
        else {
            x = (c.width / 2) - (threeWidth.width / 2);
            ctx.strokeText(three, x, threeY, 280);
            ctx.fillText(three, x, threeY, 280);
        }
        if (fourWidth.width > 280) {
            ctx.strokeText(four, 10, fourY, 280);
            ctx.fillText(four, 10, fourY, 280);
        }
        else {
            x = (c.width / 2) - (fourWidth.width / 2);
            ctx.strokeText(four, x, fourY, 280);
            ctx.fillText(four, x, fourY, 280);
        }
    }
});

$("#text-input-3").on("keyup", function() {
    if (currentPic != null) {
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        var text = $("#text-input-3").val();
        ctx.font = '36pt Impact';
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'white';
        var textWidth = ctx.measureText(text);
        var x = (c.width / 2) - (textWidth.width / 2);
        ctx.clearRect(0, 0, 300, 400);
        var img = document.getElementById(currentPic);
        ctx.drawImage(img, 0, 0, 300, 400);
        if (textWidth.width > 280) {
            ctx.strokeText(text, 10, threeY, 280);
            ctx.fillText(text, 10, threeY, 280);
        }
        else {
            ctx.strokeText(text, x, threeY, 280);
            ctx.fillText(text, x, threeY, 280);
        }
        var two = $("#text-input-2").val();
        var one = $("#text-input-1").val();
        var four = $("#text-input-4").val();
        var twoWidth = ctx.measureText(two);
        var oneWidth = ctx.measureText(one);
        var fourWidth = ctx.measureText(four);
        if (twoWidth.width > 280) {
            ctx.strokeText(two, 10, twoY, 280);
            ctx.fillText(two, 10, twoY, 280);
        }
        else {
            x = (c.width / 2) - (twoWidth.width / 2);
            ctx.strokeText(two, x, twoY, 280);
            ctx.fillText(two, x, twoY, 280);
        }
        if (oneWidth.width > 280) {
            ctx.strokeText(one, 10, oneY, 280);
            ctx.fillText(one, 10, oneY, 280);
        }
        else {
            x = (c.width / 2) - (oneWidth.width / 2);
            ctx.strokeText(one, x, oneY, 280);
            ctx.fillText(one, x, oneY, 280);
        }
        if (fourWidth.width > 280) {
            ctx.strokeText(four, 10, fourY, 280);
            ctx.fillText(four, 10, fourY, 280);
        }
        else {
            x = (c.width / 2) - (fourWidth.width / 2);
            ctx.strokeText(four, x, fourY, 280);
            ctx.fillText(four, x, fourY, 280);
        }
    }
});

$("#text-input-4").on("keyup", function() {
    if (currentPic != null) {
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        var text = $("#text-input-4").val();
        ctx.font = '36pt Impact';
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'white';
        var textWidth = ctx.measureText(text);
        var x = (c.width / 2) - (textWidth.width / 2);
        ctx.clearRect(0, 0, 300, 400);
        var img = document.getElementById(currentPic);
        ctx.drawImage(img, 0, 0, 300, 400);
        if (textWidth.width > 280) {
            ctx.strokeText(text, 10, fourY, 280);
            ctx.fillText(text, 10, fourY, 280);
        }
        else {
            ctx.strokeText(text, x, fourY, 280);
            ctx.fillText(text, x, fourY, 280);
        }
        var two = $("#text-input-2").val();
        var three = $("#text-input-3").val();
        var one = $("#text-input-1").val();
        var twoWidth = ctx.measureText(two);
        var threeWidth = ctx.measureText(three);
        var oneWidth = ctx.measureText(one);
        if (twoWidth.width > 280) {
            ctx.strokeText(two, 10, twoY, 280);
            ctx.fillText(two, 10, twoY, 280);
        }
        else {
            x = (c.width / 2) - (twoWidth.width / 2);
            ctx.strokeText(two, x, twoY, 280);
            ctx.fillText(two, x, twoY, 280);
        }
        if (threeWidth.width > 280) {
            ctx.strokeText(three, 10, threeY, 280);
            ctx.fillText(three, 10, threeY, 280);
        }
        else {
            x = (c.width / 2) - (threeWidth.width / 2);
            ctx.strokeText(three, x, threeY, 280);
            ctx.fillText(three, x, threeY, 280);
        }
        if (oneWidth.width > 280) {
            ctx.strokeText(one, 10, oneY, 280);
            ctx.fillText(one, 10, oneY, 280);
        }
        else {
            x = (c.width / 2) - (oneWidth.width / 2);
            ctx.strokeText(one, x, oneY, 280);
            ctx.fillText(one, x, oneY, 280);
        }
    }
});
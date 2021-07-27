var canvas = new fabric.Canvas('myCanvas');
block_img_width = 300;
block_img_height = 300;
player_x = 10;
player_y = 10;
function new_image(get_image){
    fabric.Image.fromURL(get_image, function (Img){
        block_img_object = Img;

        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top: player_y, 
            left: player_x
        });
        canvas.add(block_img_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '66'){
        new_image('blue.png');
    }
    if(keyPressed == '71'){
        new_image('green.png');
    }
    if(keyPressed == '80'){
        new_image('pink.png');
    }
    if(keyPressed == '82'){
        new_image('red.png');
    }
    if(keyPressed == '89'){
        new_image('yellow.png');
    }
}
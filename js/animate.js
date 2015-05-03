//Which frame number we are in (3 frames total)
var frame = 0

//Tracks which set of sprites to animate
var offsetX = 0
var offsetY = 0

//Track the offset for which way the character is facing
var dirOffset;

//Will track a reference to the character's DOM
var character;

//Tracks which character we're displaying
var characterIndex = 0;

/**
 * Animates the character, making it appear to walk
 */
function animateCharacter(){

    //Loop the frame count
    frame++
    if(frame >= 3){
        frame = 0
    }

    //Redraw the character
    redraw();

}

/**
 * Redraws the character frame
 */
function redraw(){

    character.style.backgroundPositionX = -(offsetX + frame * 32) + "px"
    character.style.backgroundPositionY = -(offsetY + dirOffset) + "px"

}

/**
 * Causes the character to change direction on keydown
 */
function changeDirection(keyEvent) {

    var dir;

    //Left
    if(keyEvent.keyCode == 37) {
        dirOffset = 32;
        dir = "left"
    }
    //Up
    if(keyEvent.keyCode == 38) {
        dirOffset = 96;
        dir = "up"
    }
    //Right
    if(keyEvent.keyCode == 39) {
        dirOffset = 64;
        dir = "right"
    }
    //Down
    if(keyEvent.keyCode == 40) {
        dirOffset = 0;
        dir = "down"
    }

    if(dir) {
        console.log("Facing", dir)
    }

    redraw();

}
//keycode- represents the number assigned to the key that was clicked. therefore there is keyEvent.keyCOde == number


/**
 * Moves the character on keydown
 */
function moveCharacter(keyEvent){

    var dir;

    //How many pixels to travel?
    var distance = 16;

    //Where is the character currently?
    var left = parseInt(character.style.left) || 0
    var top = parseInt(character.style.top) || 0

    //Left
    if(keyEvent.keyCode == 37) {
        left -= distance
        dir = "left"
    }
    //Up
    if(keyEvent.keyCode == 38) {
        top -= distance
        dir = "up"
    }
    //Right
    if(keyEvent.keyCode == 39) {
        left += distance
        dir = "right"
    }
    //Down
    if(keyEvent.keyCode == 40) {
        top += distance
        dir = "down"
    }

    //Move the character
    character.style.left = left + "px"
    character.style.top = top + "px"

    if(dir) {
        console.log("Moving", dir)
    }

}

/**
 * Swaps to a new character by adjusting the main offsets
 */
function changeCharacter(keyEvent){

    //Only accept the ENTER key
    if(keyEvent && keyEvent.keyCode != 13){
        return;
    }

    //Loop the character index
    characterIndex++
    if(characterIndex >= 8){
        characterIndex = 0
    }

    //Change to the next character
    offsetX = (characterIndex % 4) * 96
    offsetY = Math.floor(characterIndex / 4) * 128

    redraw();

}

/**
 * Moves the character back to its starting position
 */
function resetCharacterPosition(){

    character.style.left = "0px"
    character.style.top = "0px"

}

window.addEventListener('load', function(){

    //Grab a reference to our character sprite
    character = document.getElementById("sprite")

})

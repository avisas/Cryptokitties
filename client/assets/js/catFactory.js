
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    $('.cat__head, .cat__chest').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function mouthBellyAndTailColor(color, code){
    $('.cat__mouth-contour, .cat__chest_inner, .cat__tail').css('background', '#' + color)
    $('#mouthcode').html('code: '+code);
    $('#dnamouth').html(code)
}

function eyesColor(color, code){
    $('.cat__eye').find('span').css('background', '#' + color)
    $('#eyecode').html('code: '+code);
    $('#dnaeyes').html(code)

}

function earsAndPawColor(color, code){
    $('.cat__ear--left, .cat__ear--right, .cat__paw-left, .cat__paw-right, .cat__paw-left_inner, .cat__paw-right_inner').css('background', '#' + color)
    $('#earscode').html('code: '+code);
    $('#dnaears').html(code)
}


//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
        case 2:
            normalEyes()
            $('#eyeName').html('Chiller')
            eyesType1();
            break
        case 3:
            normalEyes()
            $('#eyeName').html('Welling Up')
            eyesType2();
            break  
        case 4:
            normalEyes()
            $('#eyeName').html('watcher')
            eyesType3();
            break
        case 5:
            normalEyes()
            $('#eyeName').html('Looking Down left')
            eyesType4();
            break
        case 6:
            normalEyes()
            $('#eyeName').html('Looking Down right')
            eyesType5();
            break
        case 7:
            normalEyes()
            $('#eyeName').html('cross-eyed')
            eyesType6();
            break

    }
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
        case 2:
            normaldecoration()
            $('#decorationName').html('Long')
            decorationType1()
            break
        case 3:
            normaldecoration()
            $('#decorationName').html('Short')
            decorationType2()
            break
        case 4:
            normaldecoration()
            $('#decorationName').html('Thin')
            decorationType3()
            break
        case 5:
            normaldecoration()
            $('#decorationName').html('Narrow angle')
            decorationType4()
            break
        case 6:
            normaldecoration()
            $('#decorationName').html('Thick')
            decorationType5()
            break
        case 7:
            normaldecoration()
            $('#decorationName').html('Inverted')
            decorationType6()
            break
    }
}

async function normalEyes() {
    await $('.cat__eye').find('span').css('border', 'none')
}
async function eyesType1() {
    await $('.cat__eye').find('span').css('border-top', '15px solid')
}

async function eyesType2() {
    await $('.cat__eye').find('span').css('border-bottom', '15px solid')
}

async function eyesType3() {
    await $('.cat__eye').find('span').css('border-bottom', '15px solid')
    await $('.cat__eye').find('span').css('border-top', '15px solid')
}

async function eyesType4() { //looking down left
    await $('.cat__eye').find('span').css('border-top', '12px solid')
    await $('.cat__eye').find('span').css('border-right', '12px solid')

}

async function eyesType5() { //looking down right
    await $('.cat__eye').find('span').css('border-top', '12px solid')
    await $('.cat__eye').find('span').css( 'border-left', '12px solid')
}

async function eyesType6() { //cross-eyed
    await $('.cat__eye').find('span').css('border-left', '11px solid')
    await $('.cat__eye').find('span').css('border-right', '12px solid')
    await $('.cat__eye').find('span::after').css('top', '17px')
    await $('.cat__eye').find('span::after').css('left', '5px')
    await $('.cat__eye').find('.cat__eye span::after').css('width', '4px')
    await $('.cat__eye').find('.cat__eye span::after').css('height', '11px')
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType1(){
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "45px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "58px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "45px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType2() {
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "33px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "20px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "20px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType3() {
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "7px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "7px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "7px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType4() {
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(-25deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(25deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType5() {
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "18px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "18px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "18px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}

async function decorationType6() {
    $('.cat__head-dots').css({ "transform": "rotate(182deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(-11deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(11deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}



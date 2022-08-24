
var colors = Object.values(allColors())

var defaultDNA = {
    "headcolor" : 10,
    "mouthColor" : 13,
    "eyesColor" : 96,
    "earsColor" : 10,
    //Cattributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnamouth').html(defaultDNA.mouthColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnaears').html(defaultDNA.earsColor);
    
  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.decorationPattern)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnamouth').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headcolor],dna.headcolor)
    $('#bodycolor').val(dna.headcolor)
    mouthBellyAndTailColor(colors[dna.mouthColor],dna.mouthColor)
    $('#mouth-tail-color').val(dna.mouthColor)
    eyesColor(colors[dna.eyesColor],dna.eyesColor)
    $('#eyecolor').val(dna.eyesColor)
    earsAndPawColor(colors[dna.earsColor],dna.earsColor)
    $('#ear-paw-color').val(dna.earsColor)
    eyeVariation(dna.eyesShape)
    $('#eyeshape').val(dna.eyesShape)
    decorationVariation(dna.decorationPattern)
    $('#decorationshape').val(dna.decorationPattern)
    decorationMidColor(colors[dna.decorationMidcolor],dna.decorationMidcolor)
    $('#middleColordeco').val(dna.decorationMidcolor)
    decorationSideColor(colors[dna.decorationSidescolor],dna.decorationSidescolor)
    $('#sideColordeco').val(dna.decorationSidescolor)
    animationVariation(dna.animation)
    $('#animation').val(dna.animation)
}

// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()
    headColor(colors[colorVal],colorVal);
})

$('#mouth-tail-color').change(() => {
    var colorVal = $('#mouth-tail-color').val();
    mouthBellyAndTailColor(colors[colorVal],colorVal);
})

$('#eyecolor').change(() => {
    var colorVal = $('#eyecolor').val();
    eyesColor(colors[colorVal],colorVal);
})

$('#ear-paw-color').change(() => {
    var colorVal = $('#ear-paw-color').val();
    earsAndPawColor(colors[colorVal],colorVal);
})

$('#eyeshape').change(() => {
  var shape = parseInt($('#eyeshape').val());
  eyeVariation(shape);
})

$('#decorationshape').change(() => {
    var decoshape = parseInt($('#decorationshape').val());
    decorationVariation(decoshape);
})

$('#middleColordeco').change(() => {
    var middlecolor = $('#middleColordeco').val();
    decorationMidColor(colors[middlecolor],middlecolor);
})

$('#sideColordeco').change(() => {
    var sidecolor = $('#sideColordeco').val();
    decorationSideColor(colors[sidecolor],sidecolor);
})

$('#animation').change(() => {
    var animationVal = parseInt( $('#animation').val() );
    animationVariation(animationVal);
    
})
  


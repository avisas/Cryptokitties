
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

    //When page load !!
$( document ).ready(function() {
    DefaultCat()
});

$(".kittycolors").click(()=>{
    $(".tab.kittycolors").css('display', 'block');
    $(".tab.attribute").css('display', 'none');
})
  
$(".attribute").click(()=>{
    $(".tab.kittycolors").css('display', 'none');
    $(".tab.attribute").css('display', 'block');
})
  
$(".random").click(()=>{
    var randomDNA = {
      "headcolor" : Math.floor(Math.random()*89)+10,
      "mouthColor" : Math.floor(Math.random()*89)+10,
      "eyesColor" : Math.floor(Math.random()*89)+10,
      "earsColor" : Math.floor(Math.random()*89)+10,
      "eyesShape" : Math.floor(Math.random()*7)+1,
      "decorationPattern" : Math.floor(Math.random()*7)+1,
      "decorationMidcolor" : Math.floor(Math.random()*89)+10,
      "decorationSidescolor" : Math.floor(Math.random()*89)+10,
      "animation" : Math.floor(Math.random()*7)+1,
      "lastNum" :  1,
      }
  
    $('#dnabody').html(randomDNA.headcolor);
    $('#dnamouth').html(randomDNA.mouthColor);
    $('#dnaeyes').html(randomDNA.eyesColor);
    $('#dnaears').html(randomDNA.earsColor);
    $('#dnashape').html(randomDNA.eyesShape);
    $('#dnadecoration').html(randomDNA.decorationPattern);
    $('#dnadecorationMid').html(randomDNA.decorationMidcolor);
    $('#dnadecorationSides').html(randomDNA.decorationSidescolor);
    $('#dnaanimation').html(randomDNA.animation);
    $('#dnaspecial').html(randomDNA.lastNum);
  
    renderCat(randomDNA)
  });

  /*
// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headcolor);
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

*/
$(".btn.default").click(()=>{
    DefaultCat()
 });

function DefaultCat(){
    $('#dnabody').html(defaultDNA.headcolor);
    $('#dnamouth').html(defaultDNA.mouthColor);
    $('#dnaeyes').html(defaultDNA.eyesColor);
    $('#dnaears').html(defaultDNA.earsColor);
    $('#dnashape').html(defaultDNA.eyesShape);
    $('#dnadecoration').html(defaultDNA.decorationPattern);
    $('#dnadecorationMid').html(defaultDNA.decorationMidcolor);
    $('#dnadecorationSides').html(defaultDNA.decorationSidescolor);
    $('#dnaanimation').html(defaultDNA.Animation);
    $('#dnaspecial').html(defaultDNA.lastNum);
  
   renderCat(defaultDNA)
}

$(".btn.mint").click(()=>{
    console.log("Create cat");
})

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
  


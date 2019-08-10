$(document).ready(function(){
  var audio = [new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
               new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
               new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
               new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')], 
  isOn = false,
  colors1 = ["#009933", "#ff0000", "#cccc00", "#0052cc"], 
  colors2 = ["#1aff66", "#ff4d4d", "#ffff66", "#4d94ff"], 
  strict = false, started = false, count = 0, id, num, num1, arr = [], clickable = false, counter;
  var i = 0;
function f() {
  console.log(arr);
    id = "#d" + arr[i];
    $(id).css("background-color", colors2[arr[i] - 1]);
    audio[arr[i] - 1].play();
    setTimeout(myTimer, 1000);
    i++;
  console.log(count);
    console.log(i);
    if( i < count ){
        setTimeout(f, 1000);
    }    
}
  function myTimer() {
        $(id).css("background-color", colors1[arr[i - 1] - 1]);           clickable = false;
        if (i === count){clickable = true;}
      };
  $(".onoff").click(function(){
    arr = [];
    if (isOn === true) {
      $("#off").css("background-color","grey");
      $("#on").css("background-color","black");
      $("#count").text("");
      $("#strict").css("background-color","white");
      isOn = false;
      started = false;
      clickable = false;
    } else {
      $("#off").css("background-color","black");
      $("#on").css("background-color","grey");
      $("#count").text("--");
      isOn = true;
    }
  });
  $("#strict").click(function(){
    if (isOn === true && strict === false) {
      $(this).css("background-color","red");
      strict = true;
    } else if (isOn === true && strict === true) {
      $(this).css("background-color","white");
      strict = false;
    }
  });
  $("#start").click(function(){
    if (isOn === true) {
      count = 0;
      started = true;
      arr = [];
      num = Math.floor((Math.random() * 4) + 1);
      arr.push(num);
      id = "#d" + num;
      $(id).css("background-color", colors2[num - 1]);
      audio[num - 1].play();      
      setTimeout(function () {
        $(id).css("background-color", colors1[num - 1]); clickable = true;}, 1000);    
      i = 0;
      count++;
      counter = 0;
      if (count < 10)
          $("#count").text("0" + count.toString());
          else $("#count").text(count);
    }    
    });
  $(".press").click(function(){
    if (clickable === true){
      num = parseInt($(this).attr('id')[1]); 
      id = "#d" + num;
      num1 = num;
      $(id).css("background-color", colors2[num1 - 1]);
      clickable = false;
      audio[num - 1].pause();
      audio[num - 1].currentTime = 0;
      audio[num - 1].play();      
      setTimeout(function () {
        $(id).css("background-color", colors1[num1 - 1]); clickable = true}, 1000);
      if (num !== arr[counter]){
        $("#d1").css("background-color", colors2[0]);
        $("#d2").css("background-color", colors2[1]);
        $("#d3").css("background-color", colors2[2]);
        $("#d4").css("background-color", colors2[3]);
        audio[0].play();
        audio[1].play();
        audio[2].play();
        audio[3].play();
        setTimeout(function () {
        $("#d1").css("background-color", colors1[0]);}, 1000);
        setTimeout(function () {
        $("#d2").css("background-color", colors1[1]);}, 1000);
        setTimeout(function () {
        $("#d3").css("background-color", colors1[2]);}, 1000);
        setTimeout(function () {
        $("#d4").css("background-color", colors1[3]);}, 1000);
        if (strict === true){          
          count = 0;
          started = true;
          arr = [];
          num = Math.floor((Math.random() * 4) + 1);
          arr.push(num);
          id = "#d" + num;
          $(id).css("background-color", colors2[num - 1]);
          audio[num - 1].play();      
          setTimeout(function () {
            $(id).css("background-color", colors1[num - 1]); clickable = true;}, 1000);    
          i = 0;
          count++;
          counter = 0;
          if (count < 10)
          $("#count").text("0" + count.toString());
          else $("#count").text(count);
        }
          i = 0;
          counter = 0
          setTimeout(f, 2000);
        
      } else {
        counter++;
      };
      if (counter === 20){
        setTimeout(function () {
        alert("Congratulations!");
        $("#start").trigger("click");}, 1000); 
      }
      if (count === counter) {
        num = Math.floor((Math.random() * 4) + 1);
        arr.push(num);
        count++;
        counter = 0;
        clickable = false;
        if (count < 10)
          $("#count").text("0" + count.toString());
          else $("#count").text(count); 
        i = 0;
        setTimeout(f, 2000);
      }
    }
  });
});
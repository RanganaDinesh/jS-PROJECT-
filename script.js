function startTime() {
    var today = new Date();
    var day = today.getDay();
   
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
 //   let s = today.getSeconds();
    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);
    if (hour < 08) {
        var greet ="GOOD MORNING!! WAKE UP !!";
    }
    if(hour > 13 ){
        var greet ="GOOD AFTERNOON !! TAKE SOME SLEEP";
    }  if (hour >= 16 && hour < 20 ) {
        var greet ="GOOD EVENING !!";
    } if(hour >= 20){
        var greet ="GOOD NIGHT !!"
    }
    document.getElementById("greet").innerHTML = greet;
  
if(hour >= 13 ){
        var greet1 = "LET'S HAVE SOME LUNCH !!";
        box22.src = "./Assessts/Component 31 – 1.jpg";
    }  if (hour >= 16 ) {
        var greet1 = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        box22.src = "./Assessts/lunch_image.jpg";
    }  if(hour >= 20 ){
        var greet1 = "CLOSE YOUR EYES AND GO TO SLEEP";
        box22.src = "./Assessts/Component 32 – 1.jpg";
    }
    document.getElementById("greet1").innerHTML = greet1;
    document.getElementById("box22").innerHTML = box22;
    var prepand = (hour >= 12) ? " PM " : " AM ";
    hour = (hour >= 12) ? hour - 12 : hour;
    if (hour === 0 && prepand === ' PM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = ' Noon';
        }
        else {
            hour = 12;
            prepand = ' PM';
        }
    }
    if (hour === 0 && prepand === ' AM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = ' Midnight';
        }
        else {
            hour = 12;
            prepand = ' AM';
        }
    };
    
    document.getElementById("hrs").innerHTML = hour;
    document.getElementById("mint").innerHTML = minute;
    document.getElementById("sec").innerHTML = second;
    document.getElementById("ten").innerHTML = prepand;

 
    
   

   
};
  
function checkTime(i){
    if (i < 10) {
        i = "0" + i;
    } // for add a "0 before 10 ".
    return i;
}


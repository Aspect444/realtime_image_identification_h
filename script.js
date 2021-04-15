function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/YvG7lch8D/model.json", modelLoaded);
   }
 
   function modelLoaded(){
       console.log("it has loaded yes. you did it. right good job!!!!!")
   }
 
   function draw(){
       image(video, 0, 0, 300, 300);
       classifier.classify(video, gotResult);
   }
 
   function gotResult(error, results){
       if(error){
           console.error(error);
       }
       else{
           console.log(results);
           document.getElementById("o_name").innerHTML = results[0].label;
           document.getElementById("o_accuracy").innerHTML = results[0].confidence.toFixed(3);
           document.getElementById("percentage").innerHTML = (results[0].confidence.toFixed(3))*100 + " %";
       }
   }
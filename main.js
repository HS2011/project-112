Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });


//camera = document.getElementById("Hashtag_picture");


Webcam.attach('#Hashtag_picture');


function Yo(){
    Webcam.snap(
        function(metermeter){
            document.getElementById("Hastag-you").innerHTML = '<img id = "me" src ="'+metermeter+'">'
        }
    )
}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/PN8E6NVru/model.json",Good)
function Good(){
    console.log("Yo. Lets Go. Im cracked. Im broken. I just too good for your minds to even comprehend how I did this. Thank you for cheering. By the Best, Hiroki Soeda. Oh and BTW tell alll your friends that if I was going to be voted for something choose me. I think you know why. well because Im too good. No one can be better than me. Im Number 1. Bam. Period. Thats a fact. Not even a opinion. In a few decades Im porbably going to be the worlds most famous man. So this is my autograph. In a few centuries that would be approximately $300,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000. So giuve this to your decsendants. Im probably going to make them the second richest person in the world. From the man the myth the legend Hiroki Soeda. P.S I have $100,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000 in my bank account")
}

function HOOMAN(){
    meImg = document.getElementById("me")
    classifier.classify(meImg, gotIt)
}

function gotIt(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
     
      document.getElementById("EMOTION_UNO").innerHTML = results[0].label;
      document.getElementById("EMOTION_DOS").innerHTML = results[1].label;
      prediction_1 = results[0].label;
      prediction_2 = results[1].label;
      speaking();
      if(results[0].label == "Thumbs Up")
      {
        document.getElementById("GESTURE_UNO").innerHTML = "&#128532;";
      }
      if(results[0].label == "Peace")
      {
        document.getElementById("GESTURE_UNO").innerHTML = "&#128548;";
      }
  
  
      if(results[1].label == "Thumbs Up")          
      {
        document.getElementById("GESTURE_DOS").innerHTML = "&#128522;";
      }
      if(results[1].label == "Thumbs Down")
      {
        document.getElementById("GESTURE_DOS").innerHTML = "&#128532;";
      }
      if(results[1].label == "Peace")
      {
        document.getElementById("GESTURE_DOS").innerHTML = "&#128548;";
      }
    }
  }
  
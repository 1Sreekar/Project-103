Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});

live = document.getElementById("live");

Webcam.attach("#live");

function capture(){

Webcam.snap(function (data_uri){
document.getElementById("img").innerHTML = "<img id='captured_img' src=" + data_uri + ">"
});
}

console.log("ml5 version",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nRiGvNdC-/model.json",modelLoaded);
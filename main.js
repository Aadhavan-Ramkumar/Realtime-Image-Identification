function setup() {
    canvas = createCanvas(300, 200);
    canvas.position(500, 250);
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/s35Qz6_tI/model.json", ModelLoaded);
}

function ModelLoaded() {
    console.log("Model Loaded");
}

function draw() {
    image(video, 0, 0, 300, 200);
    classifier.classify(video, GetResult);
}

function GetResult(Error, Results) {
    if (Error) {
        console.error(Error);
    } else {
        console.log(Results);
        document.getElementById("ObjectName").innerHTML = Results[0].label;
        document.getElementById("ObjectAccuracy").innerHTML = Results[0].confidence.toFixed(3)*100 + "%";
    }
}
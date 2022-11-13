Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
 });

 camera = document.getElementById("camera")
 Webcam.attach( '#camera' );
console.log("ml5,version:", ml5.version)

function take_picture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 Version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-6yMHUO5f/model.json',modelLoaded)

function modelLoaded()
{
    console.log("yay it worked")
}

function check()
{
    myimage= document.getElementById("capture_image");
    classifier.classify(myimage,gotresult);
}

function gotresult(error,result)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        document.getElementById("resultname").innerHTML = result[0].label;
        document.getElementById("resultaccuracy").innerHTML = result[0].confidence.toFixed(3);
        console.log(result)
    }
}
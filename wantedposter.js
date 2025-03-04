var imagecontainer = document.querySelector(".img-container")
var captureBtn = document.querySelector("#captureBtn");
function togglecapture(){
	imagecontainer.classList.toggle("capture");
}
captureBtn.addEventListener("click",togglecapture);

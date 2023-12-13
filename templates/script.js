document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("fileInput");
    const cameraButton = document.getElementById("cameraButton");
    const captureButton = document.getElementById("captureButton");
    const uploadForm = document.getElementById("uploadForm");
    let videoElement;
    let capturedPhotoDataURL;

    cameraButton.addEventListener("click", function () {
        // Check if the browser supports getUserMedia
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    // Stop any existing video tracks
                    stopCamera();

                    // Hide the file input
                    fileInput.disabled = true;
                    captureButton.style.display = "block";

                    // Create a video element to show the camera stream
                    videoElement = document.createElement("video");
                    videoElement.style.width = "50%";
                    videoElement.style.height = "auto";
                    videoElement.srcObject = stream;
                    videoElement.autoplay = true;
                    document.body.appendChild(videoElement);

                    // Save the video track for stopping later
                    window.videoTrack = stream.getVideoTracks()[0];
                })
                .catch(function (error) {
                    console.error("Error accessing webcam:", error);
                    alert("Error accessing webcam. Please upload a file instead.");
                });
        } else {
            alert("Your browser does not support webcam access. Please upload a file instead.");
        }
    });

    captureButton.addEventListener("click", function () {
        // Capture a photo from the webcam
        let capturedPhoto = capturePhoto();
        capturedPhotoDataURL = capturedPhoto.toDataURL("image/png");
        // Set the value of the hidden input
        const capturedPhotoInput = document.getElementById("capturedPhotoInput");
        capturedPhotoInput.value = capturedPhotoDataURL;
        // Display the captured photo
        displayCapturedPhoto();
    });
    
    uploadForm.addEventListener("submit", function (event) {
        // Stop the camera when the form is submitted
        stopCamera();
    
        // Check if a photo has been captured
        if (capturedPhotoDataURL) {
            // Add a hidden input field to the form with the captured photo data URL
            const hiddenInput = document.createElement("input");
            hiddenInput.type = "hidden";
            // Set the name attribute based on the scenario
            hiddenInput.name = capturedPhotoInput.name;
            hiddenInput.value = capturedPhotoDataURL;
            uploadForm.appendChild(hiddenInput);
        }
    });

    // Additional event listener to stop the camera when navigating away from the page
    window.addEventListener("beforeunload", function () {
        stopCamera();
    });

    function stopCamera() {
        if (videoElement) {
            videoElement.pause();
            videoElement.srcObject = null;
            document.body.removeChild(videoElement);
            videoElement = null;
        }

        // Stop any existing video tracks
        if (window.videoTrack) {
            window.videoTrack.stop();
            window.videoTrack = null;
        }
    }

    function capturePhoto() {
        const canvas = document.createElement("canvas");
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

        // Convert the canvas content to a data URL
        return canvas;
    }

    function displayCapturedPhoto() {
        const capturedPhotoElement = document.createElement("img");
        capturedPhotoElement.src = capturedPhotoDataURL;
        document.body.appendChild(capturedPhotoElement);
    }
});
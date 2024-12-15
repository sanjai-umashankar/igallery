// Reference to the image container
const imageDiv = document.getElementById('image');
const originalImageUrl = ''; // Set this to the URL of your original image
const originalText = "Hover over an image below to display here."; // Original text

function upDate(previewPic) {
    // Change the background image to the source of the hovered image
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    
    // Update the text to the alt text of the hovered image
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    // Reset the background image to the original URL
    imageDiv.style.backgroundImage = `url('${originalImageUrl}')`; // Use the original image URL here
    
    // Change the text back to the original text
    imageDiv.innerHTML = originalText;
}
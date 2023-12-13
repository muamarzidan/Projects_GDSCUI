function showGreenImage() {
    const inputImage = document.getElementById('inputImage').files[0];
    const inputPreview = document.getElementById('inputPreview');

    if (inputImage) {
        const inputImg = new Image();
        inputImg.onload = function () {
            inputPreview.style.backgroundImage = `url(${URL.createObjectURL(inputImage)})`;
        };
        inputImg.src = URL.createObjectURL(inputImage);
    }
}

function showBackgroundImage() {
    const backgroundImage = document.getElementById('backgroundImage').files[0];
    const backgroundPreview = document.getElementById('backgroundPreview');

    if (backgroundImage) {
        const newImageBackground = new Image();
        newImageBackground.onload = function () {
            backgroundPreview.style.backgroundImage = `url(${URL.createObjectURL(backgroundImage)})`;
        };
        newImageBackground.src = URL.createObjectURL(backgroundImage);
    }
}

function gabungGambar() {
    const inputImage = document.getElementById('inputImage').files[0];
    const backgroundImage = document.getElementById('backgroundImage').files[0];

    if (inputImage && backgroundImage) {
        const canvas = document.getElementById('outputCanvas');
        const ctx = canvas.getContext('2d');

        const inputPreview = document.getElementById('inputPreview');
        const backgroundPreview = document.getElementById('backgroundPreview');

        const inputImg = new Image();
        const newImageBackground = new Image();

        inputImg.onload = function () {
            inputPreview.style.backgroundImage = `url(${URL.createObjectURL(inputImage)})`;

            newImageBackground.onload = function () {
                backgroundPreview.style.backgroundImage = `url(${URL.createObjectURL(backgroundImage)})`;

                canvas.width = inputImg.width;
                canvas.height = inputImg.height;

                ctx.drawImage(inputImg, 0, 0);
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const inputPixels = imageData.data;

                ctx.drawImage(newImageBackground, 0, 0, canvas.width, canvas.height);
                const backgroundPixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

                for (let i = 0; i < inputPixels.length; i += 4) {
                    const red = inputPixels[i];
                    const green = inputPixels[i + 1];
                    const blue = inputPixels[i + 2];

                    if (green > red + blue) {
                        inputPixels[i] = backgroundPixels[i];
                        inputPixels[i + 1] = backgroundPixels[i + 1];
                        inputPixels[i + 2] = backgroundPixels[i + 2];
                        inputPixels[i + 3] = backgroundPixels[i + 3];
                    }
                }
                ctx.putImageData(imageData, 0, 0);
            };
            newImageBackground.src = URL.createObjectURL(backgroundImage);
        };
        inputImg.src = URL.createObjectURL(inputImage);
    } else {
        alert('Please select image files');
    }
}

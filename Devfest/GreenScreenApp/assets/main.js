function mergeImages() {
    const inputImage = document.getElementById('inputImage').files[0];
    const backgroundImage = document.getElementById('backgroundImage').files[0];

    if (inputImage && backgroundImage) {
        const canvas = document.getElementById('outputCanvas');
        const ctx = canvas.getContext('2d');

        const img = new Image();
        const bg = new Image();

        img.onload = function () {
            bg.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;

                ctx.drawImage(img, 0, 0);
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const inputPixels = imageData.data;

                ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
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

            bg.src = URL.createObjectURL(backgroundImage);
        };

        img.src = URL.createObjectURL(inputImage);
    } else {
        alert('Please select both input and background images.');
    }
}

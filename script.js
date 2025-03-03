document.getElementById("remove-bg-btn").addEventListener("click", async function () {
    const fileInput = document.getElementById("upload");
    const originalImg = document.getElementById("original-img");
    const processedImg = document.getElementById("processed-img");
    const downloadBtn = document.getElementById("download-btn");

    if (!fileInput.files.length) {
        alert("Please select an image first!");
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("image_file", file);
    formData.append("size", "auto");

    originalImg.src = URL.createObjectURL(file);

    try {
        const response = await fetch("https://api.remove.bg/v1.0/removebg", {
            method: "POST",
            headers: { "X-Api-Key": "dC297TUxJErRNNLzKZopnj32" },
            body: formData
        });

        if (!response.ok) {
            throw new Error("Failed to remove background.");
        }

        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        processedImg.src = imageUrl;
        downloadBtn.href = imageUrl;
        downloadBtn.classList.remove("hidden");

    } catch (error) {
        alert("Error: " + error.message);
    }
});

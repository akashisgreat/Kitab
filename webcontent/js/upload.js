fileInput.addEventListener('input', () => {
    fileNameArray = fileInput.value.split("\\");
    fileName = fileNameArray[fileNameArray.length - 1];
    document.getElementById("fileName").innerHTML = fileName;
 });
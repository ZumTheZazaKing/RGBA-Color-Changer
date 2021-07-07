const showRGBA = document.querySelector('.showrgba');
const color = document.querySelector('.color');



setInterval(()=>{
    const redValue = document.querySelector('.redValue').value;
    const greenValue = document.querySelector('.greenValue').value;
    const blueValue = document.querySelector('.blueValue').value;
    const alphaValue = document.querySelector('.alphaValue').value; 

    let newRGBAValue = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;

    color.style.backgroundColor = newRGBAValue;
    showRGBA.innerHTML = newRGBAValue;


},100);

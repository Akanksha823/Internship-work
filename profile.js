const input = document.querySelector('input[type="file"]')
const profilImg = document.getElementById('profile_image');

input.addEventListener('change',function(){
    const reader = new FileReader()
    reader.readAsDataURL(input.files[0])  
    reader.onload = () =>{
        console.log(reader.result)
        profilImg.setAttribute("src",`${reader.result}`)
        }
}) 
const image = document.getElementById('image')
const loveBtn = document.getElementById('love')
const squareBtn = document.getElementById('square')
const circleBtn = document.getElementById('circle')
const reactBtn = document.getElementById('rectangle')
const uploadBtn = document.querySelector('.upload')
const hiddenUpload = document.querySelector('.hidden-upload')
const framedImg =  document.getElementById('output')
const framebtns = document.querySelector('.frames')


uploadBtn.onclick = () => {hiddenUpload.click()
framebtns.style.display = 'flex'}
hiddenUpload.onchange = () => {
    var image_workspace = document.querySelector('.image-workspace img')
    var file = hiddenUpload.files[0]
    var url = window.URL.createObjectURL(new Blob([file], { type : 'image/jpg' }))
      console.log(url)
   

   

    image_workspace.src = url
    let cropper = new Cropper(image,{
        aspectRatio:0,
        viewMode: 0
    })
    document.getElementById('crop').addEventListener('click', ()=>{
         let croppedImg = cropper.getCroppedCanvas().toDataURL('image/png')
         document.getElementById('output').src = croppedImg;
         document.querySelector('.image-workspace').style.display = 'none'
         document.querySelector('.hero > h1').style.display = 'none'
        })
        

}





loveBtn.addEventListener('click', ()=>{
    framedImg.className = ''
    framedImg.classList.add('loveFrame')
})

squareBtn.addEventListener('click', ()=>{
    framedImg.className = ''
    framedImg.classList.add('squareFrame')
})
circleBtn.addEventListener('click', ()=>{
    framedImg.className = ''
    framedImg.classList.add('circleFrame')
})
reactBtn.addEventListener('click', ()=>{
    framedImg.className = ''
    framedImg.classList.add('reactangleFrame')
})


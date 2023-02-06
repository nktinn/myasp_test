
var actionButton = document.getElementsByClassName('upload');
//var hiddenUpload = document.getElementsById('hidden-upload');


// upload image
document.onclick=function(clicker){
    console.log(clicker.target);
    console.log(actionButton);
    var eventer = document.getElementsByClassName(clicker.target.className);
    console.log(eventer);
if (eventer == actionButton)
    {
        console.log("clicked");
        {
            console.log("clicked x2");
            var side_controls_shifter = document.querySelectorAll('.side-controls-shifter svg');
            var hiddenUpload = document.getElementById('hidden-upload');
            var downloadButton = document.getElementsByClassName('download');
            console.log(hiddenUpload);
            var image_workspaceSpan = document.querySelector('.image-workspace span');
            var preview_containerSpan = document.querySelector('.preview-container span');
            hiddenUpload.click();
            // apdate on new file selected issue removed here
            hiddenUpload.onchange = function(){
            document.querySelector('.image-workspace').innerHTML = `<img src="" alt="">`
            var image_workspace = document.querySelector('.image-workspace img');
            console.log(image_workspace);

            var file = hiddenUpload.files[0]
            var url = window.URL.createObjectURL(new Blob([file], { type : 'image/jpg' }))
            image_workspace.src = url
            image_workspaceSpan.style.display = 'none'
            preview_containerSpan.style.display = 'none'
        
            var options = {
                dragMode: 'move',
                preview: '.img-preview',
                viewMode: 2,
                modal: false,
                background: false,
                ready: function(){
                    // download cropped image
                    downloadButton.onclick = () => {
                        downloadButton.innerText = '...'
                        cropper.getCroppedCanvas().toBlob((blob) => {
                            var downloadUrl = window.URL.createObjectURL(blob)
                            var a = document.createElement('a')
                            a.href = downloadUrl
                            a.download = 'cropped-image.jpg' // output image name
                            a.click()
                            downloadButton.innerText = 'Download'
                        })
                    }
                }
            }
        
            var cropper = new Cropper(image_workspace, options)
        }
        }
    }
}
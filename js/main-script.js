var actionButton = document.getElementsByClassName('upload');



// upload image
document.onclick=function(cl){
    
	var f = document.querySelector("details");
	var element = document.getElementById("caret");
    if (!cl.target.classList.contains("detail__body") && !cl.target.classList.contains("detail__summary") && !cl.target.classList.contains("detail__summary_img") && !cl.target.classList.contains("caret")) {
			if (f.open == true) {
				f.open = false;
 				element.classList.toggle("caret-up");
        	}
    	}
    else element.classList.toggle("caret-up");	
    var eventer = document.getElementsByClassName(cl.target.className);
    if (eventer == actionButton)
    {
        {
            var hiddenUpload = document.getElementById('hidden-upload');
            hiddenUpload.click();
            // apdate on new file selected issue removed here
            hiddenUpload.onchange = function(){
            var side_controls_shifter = document.querySelectorAll('.side-controls-shifter svg');
            var downloadButton = document.getElementsByClassName('delete');
            var image_workspaceSpan = document.querySelector('.image-workspace span');
            var preview_containerSpan = document.querySelector('.preview-container span');
            document.querySelector('.image-workspace').innerHTML = `<img src="" alt="">`
            var image_workspace = document.querySelector('.image-workspace img');

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
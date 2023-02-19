//Drop area

const dropArea = document.querySelector(".drop_area");
let dragText = dropArea.querySelector("header");
let button = dropArea.querySelector("button");
let input = dropArea.querySelector("input");
let file;

button.onclick = ()=>{
  input.click();
}
//If user Drop File via button
input.addEventListener("change", function(){
  file = this.files[0];
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png", "application/pdf", "application/msword", "application/excel", "application/vnd.ms-excel", "application/x-excel", "application/x-msexcel"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){
    dropArea.classList.add("active");
    //Create datatransfer to assign file to input
    var dT = new DataTransfer();
    dT.items.add(file);
    input.files = dT.files;
    dragText.textContent = "Файл "+input.files[0].name+" загружен";
    button.textContent = "Выбрать другой файл";
  }else{
    alert("Тип файла не поддерживается!");
    dropArea.classList.remove("active");
    if(input.files[0] == undefined)
      dragText.textContent = "Перетащите файл";
  }
});
//If user Drop File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  if(input.files[0] == undefined)
    {dragText.textContent = "Отпустите для загрузки";
    button.textContent = "Выбрать файл";}
});
//If user leave DropArea while holding file
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  if(input.files[0] == undefined)
    {dragText.textContent = "Перетащите файл";
    button.textContent = "Выбрать файл";}
});
//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  file = event.dataTransfer.files[0];
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png", "application/pdf", "application/msword", "application/excel", "application/vnd.ms-excel", "application/x-excel", "application/x-msexcel"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){
    dropArea.classList.add("active");
    //Create datatransfer to assign file to input
    var dT = new DataTransfer();
    dT.items.add(file);
    input.files = dT.files;
    dragText.textContent = "Файл "+input.files[0].name+" загружен";
    button.textContent = "Выбрать другой файл";
  }else{
    alert("Тип файла не поддерживается!");
    dropArea.classList.remove("active");
    if(input.files[0] == undefined)
      dragText.textContent = "Перетащите файл";
  }
});

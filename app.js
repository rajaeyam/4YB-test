const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

function show(){
    hover.classList.add('active');
    modal.classList.add('show');
}

function hide(){
    hover.classList.remove('active');
    modal.classList.remove('show');
}
function downloadVCard() {
    var vcard = "BEGIN:VCARD\nVERSION:3.0\nFN:Mr. Mrs..\nTEL:0699999999\nEMAIL:yourmail@gmail.com\nEND:VCARD";
    var blob = new Blob([vcard], { type: "text/vcard;charset=utf-8;" });
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "contact.vcf";
    link.click();
}

image.addEventListener('click', show);
close.addEventListener('click', hide);
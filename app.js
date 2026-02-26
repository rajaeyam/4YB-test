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

document.addEventListener('DOMContentLoaded', function() {
    var saveBtn = document.getElementById("save-btn");
    saveBtn.addEventListener("click", function (e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien

        // Informations de contact (à personnaliser)
        var contact = {
            name:" Mr Lahcen ZOUHAYRE",
            phone: "0670971552",
            email: "amkoy.technology@gmail.com"
        };

        // Création du vCard
        var vcard = "BEGIN:VCARD\nVERSION:3.0\n";
        vcard += "FN:" + contact.name + "\n";
        vcard += "TEL;TYPE=WORK,VOICE:" + contact.phone + "\n";
        vcard += "EMAIL:" + contact.email + "\n";
        vcard += "END:VCARD";

        // Création du blob et de l'URL
        var blob = new Blob([vcard], { type: "text/vcard;charset=utf-8;" });
        var url = URL.createObjectURL(blob);

        // Création et clic sur le lien de téléchargement
        var downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = contact.name + ".vcf";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });
});
image.addEventListener('click', show);
close.addEventListener('click', hide);
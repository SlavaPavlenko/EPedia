function showModal(sourceId){
    var modal = document.getElementById('myModal');
    var img = document.getElementById(sourceId);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = "../Content/images/" + img.alt + ".jpg";
    modalImg.alt = img.alt;
    captionText.innerHTML = img.alt;
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

/////////////////////////////////////////

function goToImagePage(){
    var modalImg = document.getElementById("img01");
    document.location.href = getPageByName(modalImg.alt);
}

function goToImagePage(sender){
    document.location.href = getPageByName(sender.alt);
}

function getPageByName(name){
    var associations =[["попугай", "кошка"],
                        ["parrot", "cat"]];
    var index = 0;
    while (index < associations[0].length && associations[0][index] != name)
        index++;
    if (index < associations[0].length)
        var path = associations[1][index]
    else
        path = "error"
    return path;
}

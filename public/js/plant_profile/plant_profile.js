function $(e) {
  return document.getElementById(e);
}

window.onload = function () {
  $("pdfButton").onclick = printPDF;
  tabs();
  imageDisplays();
};

function printPDF() {
  var toPrint = $("pdfTxt");
  
  if (toPrint.getElementsByTagName("h4").length < 1){ // first time printing pdf
    //plant name
    let title = document.createElement("h4");
    title.innerHTML = $("plant-name").innerHTML;
    title.style.color = "green";
    toPrint.appendChild(title);
    //scientific name
    let sname = document.createElement("h4");
    sname.innerHTML = $("plant-sc-name").innerHTML;
    toPrint.appendChild(sname);
    //description
    let pdesc = document.createElement("p");
    pdesc.innerHTML = $("plant-description").innerHTML;
    toPrint.appendChild(pdesc);

    toPrint.appendChild(document.createElement("br"));
    //landscape information
    let landscapeTitle = document.createElement("h2");
    landscapeTitle.innerHTML = "Landscape Information:";
    toPrint.appendChild(landscapeTitle);
    let originalLandscape = $("plant-tab-landscape").getElementsByClassName("label");
    for (let i=0; i< originalLandscape.length; i++){
      let newLabel = document.createElement("p");
      newLabel.innerHTML = originalLandscape[i].innerHTML;

      toPrint.appendChild(newLabel);
      if (i==7) {
        let temp = document.createElement("h5");
        temp.innerHTML = "Size/Shape:";
        toPrint.appendChild(temp);
      }
    }

    toPrint.appendChild(document.createElement("br"));
    //botanical description
    let botanicalTitle = document.createElement("h2");
    botanicalTitle.innerHTML = "Botanical Description:";
    toPrint.appendChild(botanicalTitle);
    let originalBotanical = $("plant-tab-botanical").getElementsByClassName("label");
    for (let i=0; i< originalBotanical.length; i++){
      if (i==0) {
        let temp = document.createElement("h5");
        temp.innerHTML = "Foliage:";
        toPrint.appendChild(temp);
      }
      else if (i==11) {
        let temp = document.createElement("h5");
        temp.innerHTML = "Flower:";
        toPrint.appendChild(temp);
      }
      else if (i==17) {
        let temp = document.createElement("h5");
        temp.innerHTML = "Fruit:";
        toPrint.appendChild(temp);
      }
      let newLabel = document.createElement("p");
      newLabel.innerHTML = originalBotanical[i].innerHTML;

      toPrint.appendChild(newLabel);
    }

    toPrint.appendChild(document.createElement("br"));
    //horticulture management
    let horticultureTitle = document.createElement("h2");
    horticultureTitle.innerHTML = "Horticulture Management:";
    toPrint.appendChild(horticultureTitle);
    let originalHorticulture = $("plant-tab-horticulture").getElementsByClassName("label");
    for (let i=0; i< originalHorticulture.length; i++){
      if (i==0) {
        let temp = document.createElement("h5");
        temp.innerHTML = "Tolerance:";
        toPrint.appendChild(temp);
      }
      else if (i==3) {
        let temp = document.createElement("h5");
        temp.innerHTML = "Requirement:";
        toPrint.appendChild(temp);
      }
      else if (i==7) {
        let temp = document.createElement("h5");
        temp.innerHTML = "Management:";
        toPrint.appendChild(temp);
      }
      let newLabel = document.createElement("p");
      newLabel.innerHTML = originalHorticulture[i].innerHTML;

      toPrint.appendChild(newLabel);
    }

    //images
    var pdfImgs = $("pdfImgs");
    let images = document.getElementsByClassName("side-image");
    for (let i=0; i<images.length; i++){
      let img0 = document.createElement("img");
      img0.src = images[i].src;
      img0.classList.add("pdfImg");
      pdfImgs.appendChild(img0);
    }
    
    $("forPDF").appendChild(toPrint);
    $("forPDF").appendChild(pdfImgs);
  }

  //print
  $("forPDF").style.display = "block";
  printJS({
    printable: "forPDF",
    type: "html",
    honorColor: true,
    targetStyles: ['*']
  });
  $("forPDF").style.display = "none";
}

function tabs() {
  const plant_tab_landscape = $("plant-tab-landscape");
  const plant_tab_botanical = $("plant-tab-botanical");
  const plant_tab_horticulture = $("plant-tab-horticulture");
  var listOfTabButtons = document.getElementsByClassName("tab");
  for (let i = 0; i < listOfTabButtons.length; i++) {
    const TabButton = listOfTabButtons[i];
    TabButton.addEventListener("click", () => {
      switch (parseInt(TabButton.value)) {
        case 1:
          plant_tab_landscape.style.display = "block";
          plant_tab_botanical.style.display = "none";
          plant_tab_horticulture.style.display = "none";

          listOfTabButtons[0].className = "selected-tab tab";
          listOfTabButtons[1].className = "tab";
          listOfTabButtons[2].className = "tab";
          break;
        case 2:
          plant_tab_landscape.style.display = "none";
          plant_tab_botanical.style.display = "block";
          plant_tab_horticulture.style.display = "none";

          listOfTabButtons[0].className = "tab";
          listOfTabButtons[1].className = "selected-tab tab";
          listOfTabButtons[2].className = "tab";
          break;
        case 3:
          plant_tab_landscape.style.display = "none";
          plant_tab_botanical.style.display = "none";
          plant_tab_horticulture.style.display = "block";

          listOfTabButtons[0].className = "tab";
          listOfTabButtons[1].className = "tab";
          listOfTabButtons[2].className = "selected-tab tab";
          break;
        default:
          plant_tab_landscape.style.display = "none";
          plant_tab_botanical.style.display = "none";
          plant_tab_horticulture.style.display = "none";

          listOfTabButtons[0].className = "tab";
          listOfTabButtons[1].className = "tab";
          listOfTabButtons[2].className = "tab";
          break;
      }
    });
  }
}

function imageDisplays() {
  var sideImages = document.getElementsByClassName("side-image");
  for (let i = 0; i < sideImages.length; i++) {
    sideImages[i].onmouseover = function () {
      $("zoomedImage").src = this.src;
    };
  }
}

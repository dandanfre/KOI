function toggleTreatments(){
    var arrowButton = document.getElementById("expansionArrow")
    var expandDiv = document.getElementById("expandedTreatments")
    if(expandDiv.style.display === "block"){    //if expanded, hide div
        expandDiv.style.display = "none"
        arrowButton.style.transform = "rotate(0deg)" //rotate collapsbutton
        
    }
    else{
        expandDiv.style.display = "block"
        arrowButton.style.transform ="rotate(180deg)" //rotate collapsbutton
        expandDiv.style.maxHeight = (expandDiv.scrollHeight) + "px";
    }
}


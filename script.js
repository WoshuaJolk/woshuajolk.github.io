const svg = document.getElementById('Oakley');
svg.onclick = (e) => {
    const lightcolors = ['#FF9AA2', '#FFB7B2','#FFDAC1','#E2F0CB','#B5EAD7','#C7EEA1'];
    const darkcolors = ['#A3B5DD', '#D09291','#BF94CB','#A1D0C0','#C37791'];
    const lightrando = () => lightcolors[Math.floor(Math.random()*lightcolors.length)];
    const darkrando = () => darkcolors[Math.floor(Math.random()*darkcolors.length)];
    document.documentElement.style.cssText = `
    --dark-color: ${darkrando()};
    --light-color: ${lightrando()};
    `
}
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('click', () => {
document.body.classList.toggle('light', checkbox.checked);
});

chessesicon.addEventListener('click', function handleClick() {
    console.log('element clicked');
    chesses.style.display = "block";
    chesses.style.left = "0px";
    chesses.style.top = "0px";
    chesses2.style.display = "block";
    chesses2.style.left = "50px";
    chesses2.style.top = "50px";
    chesses3.style.display = "block";
    chesses3.style.left = "100px";
    chesses3.style.top = "100px";
});

sackicon.addEventListener('click', function handleClick() {
    console.log('element clicked');
    sack.style.display = "block";
    sack.style.left = "0px";
    sack.style.top = "0px";
    sack2.style.display = "block";
    sack2.style.left = "50px";
    sack2.style.top = "50px";
    sack3.style.display = "block";
    sack3.style.left = "100px";
    sack3.style.top = "100px";
});

suspicon.addEventListener('click', function handleClick() {
    console.log('element clicked');
    susp.style.display = "block";
    susp.style.left = "0px";
    susp.style.top = "0px";
    susp2.style.display = "block";
    susp2.style.left = "50px";
    susp2.style.top = "50px";
    susp3.style.display = "block";
    susp3.style.left = "100px";
    susp3.style.top = "100px";
});

ippficon.addEventListener('click', function handleClick() {
    console.log('element clicked');
    ippf.style.display = "block";
    ippf.style.left = "0px";
    ippf.style.top = "0px";
    ippf2.style.display = "block";
    ippf2.style.left = "50px";
    ippf2.style.top = "50px";
});

troylabsicon.addEventListener('click', function handleClick() {
    troylabs.style.left = "0px";
    troylabs.style.top = "0px";
    console.log('element clicked');
    troylabs.style.display = "block";
});

resumeicon.addEventListener('click', function handleClick() {
    resume.style.left = "0px";
    resume.style.top = "0px";
    console.log('element clicked');
    resume.style.display = "block";
});


r1.addEventListener('click', function handleClick() {
    console.log('element clicked');
    ippf.style.display = "none";
});
y1.addEventListener('click', function handleClick() {
    console.log('element clicked');
    if (ippfcontent.style.display !== "none") {
        ippfcontent.style.display = "none";
    } else {
        ippfcontent.style.display = "block";
    }
});

r2.addEventListener('click', function handleClick() {
    console.log('element clicked');
    ippf2.style.display = "none";
});
y2.addEventListener('click', function handleClick() {
    console.log('element clicked');
    if (ippf2content.style.display !== "none") {
        ippf2content.style.display = "none";
    } else {
        ippf2content.style.display = "block";
    }
});

r3.addEventListener('click', function handleClick() {
    console.log('element clicked');
    susp.style.display = "none";
});
y3.addEventListener('click', function handleClick() {
    console.log('element clicked');
    if (suspcontent.style.display !== "none") {
        suspcontent.style.display = "none";
    } else {
        suspcontent.style.display = "block";
    }
});

r4.addEventListener('click', function handleClick() {
    console.log('element clicked');
    susp2.style.display = "none";
});
y4.addEventListener('click', function handleClick() {
    console.log('element clicked');
    if (susp2content.style.display !== "none") {
        susp2content.style.display = "none";
    } else {
        susp2content.style.display = "block";
    }
});

r5.addEventListener('click', function handleClick() {
    console.log('element clicked');
    susp3.style.display = "none";
});
y5.addEventListener('click', function handleClick() {
    console.log('element clicked');
    if (susp3content.style.display !== "none") {
        susp3content.style.display = "none";
    } else {
        susp3content.style.display = "block";
    }
});

r6.addEventListener('click', function handleClick() {
    console.log('element clicked');
    chesses.style.display = "none";
});
y6.addEventListener('click', function handleClick() {
    console.log('element clicked');
    if (chessescontent.style.display !== "none") {
        chessescontent.style.display = "none";
    } else {
        chessescontent.style.display = "block";
    }
});

r7.addEventListener('click', function handleClick() {
    console.log('element clicked');
    chesses2.style.display = "none";
});
y7.addEventListener('click', function handleClick() {
    console.log('element clicked');
    if (chesses2content.style.display !== "none") {
        chesses2content.style.display = "none";
    } else {
        chesses2content.style.display = "block";
    }
});

r8.addEventListener('click', function handleClick() {
    console.log('element clicked');
    chesses3.style.display = "none";
});
y8.addEventListener('click', function handleClick() {
    console.log('element clicked');
    if (chesses3content.style.display !== "none") {
        chesses3content.style.display = "none";
    } else {
        chesses3content.style.display = "block";
    }
});

r9.addEventListener('click', function handleClick() {
    console.log('element clicked');
    sack.style.display = "none";
});
y9.addEventListener('click', function handleClick() {
    console.log('element clicked');
    if (sackcontent.style.display !== "none") {
        sackcontent.style.display = "none";
    } else {
        sackcontent.style.display = "block";
    }
});

r10.addEventListener('click', function handleClick() {
    console.log('element clicked');
    sack2.style.display = "none";
});
y10.addEventListener('click', function handleClick() {
    console.log('element clicked');
    if (sack2content.style.display !== "none") {
        sack2content.style.display = "none";
    } else {
        sack2content.style.display = "block";
    }
});

r11.addEventListener('click', function handleClick() {
    console.log('element clicked');
    troylabs.style.display = "none";
});
y11.addEventListener('click', function handleClick() {
    console.log('element clicked');
    if (troylabscontent.style.display !== "none") {
        troylabscontent.style.display = "none";
    } else {
        troylabscontent.style.display = "block";
    }
});

r12.addEventListener('click', function handleClick() {
    console.log('element clicked');
    resume.style.display = "none";
});
y12.addEventListener('click', function handleClick() {
    console.log('element clicked');
    if (resumecontent.style.display !== "none") {
        resumecontent.style.display = "none";
    } else {
        resumecontent.style.display = "block";
    }
});

    
    // Make the DIV element draggable:
    dragElement(document.getElementById("ippf"));
    dragElement(document.getElementById("ippf2"));
    dragElement(document.getElementById("susp"));
    dragElement(document.getElementById("susp2"));
    dragElement(document.getElementById("susp3"));
    dragElement(document.getElementById("chesses"));
    dragElement(document.getElementById("chesses2"));
    dragElement(document.getElementById("chesses3"));
    dragElement(document.getElementById("sack"));
    dragElement(document.getElementById("sack2"));
    dragElement(document.getElementById("troylabs"));
    dragElement(document.getElementById("resume"));

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
        }
    
        function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
        }
    
        function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
    
        function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        }
    }
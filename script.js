//Ta utgangspunkt i koden fra videoen ovenfor, så legg til et parameter til, f.eks:
//text-farge, border eller noe annet. Lag en funksjon til som returnerer den endringen,
//uten å endre det som står fra før, bare legge til.

function changeLook(text, color, fontSize){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div ${changeStyle(color, fontSize)}>${text}</div>
    `;
}

function changeStyle(color, fontSize){
    return `style="${changeBackground(color)} ${changeSize(fontSize)}"`;
}

function changeBackground(color){
    return `background-color: ${color}`;
}

function changeSize(fontSize){
    return `font-size: ${fontSize}px`;
}

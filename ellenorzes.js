document.getElementById("kviz").addEventListener("click", kviz);

function kviz() {

    // 1.
    const cel = document.getElementById("urkutatas");
    if (cel.checked) {
        document.getElementById("label-urkutatas").style.color = "green";
    } 
    else {
        document.getElementById("label-urkutatas").style.color = "orange";
        const nevek = document.getElementsByName("cel");
        for (const nev of nevek) {
            if (nev.checked) { 
                console.log(JSON.stringify(nev))
                document.getElementById(`label-${nev.id}`).style.color = "red";
            }
        }
    }

    // 2.
    const ev = document.getElementsByName("ev")[0];
    if (ev.value === "1969") {
        ev.style.backgroundColor = "green";
    }
    else {
        ev.style.backgroundColor = "red";
    }

    // 3.
    const szam = document.getElementById("szam");
    if (szam.value === "6") {
        szam.style.backgroundColor = "green";
    }
    else {
        szam.style.backgroundColor = "red";
    }

    // 4.
    const bolygo = document.getElementById("jupiter");
    if (bolygo.checked) {
        document.getElementById("label-jupiter").style.color = "green";
    } else {
        document.getElementById("label-jupiter").style.color = "orange";
        const nevek = document.getElementsByName("bolygo");
        for (const nev of nevek) {
            if (nev.checked) { 
                document.getElementById(`label-${nev.id}`).style.color = "red";
            }
        }
    }
    
    // 5.
    const bkozi = document.getElementsByName("bkozi")[0];
    if (bkozi.value === "Voyager 1") {
        bkozi.style.backgroundColor = "green";
    }
    else {
        bkozi.style.backgroundColor = "red";
    }

    // 6.
    const jok = ["neil", "john", "farkas"];
    const pilota = document.getElementsByName("pilota");
    for (const p of pilota) {
        if (p.checked) {
            if (jok.includes(p.value)) {
                document.getElementById(`label-${p.value}`).style.color = "green";
            }
            else {
                document.getElementById(`label-${p.value}`).style.color = "red";
            }
        }
        else {
            if (jok.includes(p.value)) {
                document.getElementById(`label-${p.value}`).style.color = "orange";
            }
            else {
                document.getElementById(`label-${p.value}`).style.color = "green";
            }
        }
    }

   
}
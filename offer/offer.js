var token = Math.random().toString(36).substr(2, 8) + "-" + Math.random().toString(36).substr(2, 4) + "-" + Math.random().toString(36).substr(2, 4) + "-" + Math.random().toString(36).substr(2, 4) + "-" + Math.random().toString(36).substr(2, 12)
var formProg = document.querySelector('#btProgOffer');
var editProg = document.querySelector('#btEditOffer');
var consultProg = document.querySelector('#btConsult');
var container = document.querySelector('.container');
var datHorIni
var datHorFim
var golbalJsonDesMob = {}

formProg.addEventListener('click', () => {
    load();
});

const load = () => {
    container.innerHTML = teste.prog;
    const stores = document.querySelector('#storeso');
    const devices = document.querySelector('#deviceso');
    const datinicio = document.querySelector('#datainicio');
    const horinicio = document.querySelector('#horainicio');
    const skuspai = document.querySelector('#skuspai');
    const datfim = document.querySelector('#datafim');
    const horfim = document.querySelector('#horafim');
    const enviar = document.querySelector('#buttPreProg');
    skuspai.addEventListener('change', () => {
        habilitaCampoDevice();
    });
    enviar.addEventListener('click', () => {
        postOferta();
    });
    stores.addEventListener('change', () => {
        habilitaCampoDevice();
    });
    devices.addEventListener('change', () => {
        habilitaCampoDevice();
    });
    horinicio.addEventListener('change', () => {
        if (deviceso.value === 'APP_DAILY_OFFER'){
            const datloc = new Date(String(datinicio.value) + "T" + String(horinicio.value) + ":01")
            const datutc = new Date(datloc.toUTCString())
            datHorIni = datutc.toISOString().slice(0, 19)
        } else { datHorIni = String(datinicio.value) + "T" + String(horinicio.value) + ":01" }
        console.log(datHorIni)
    })
    horfim.addEventListener('change', () => {
        if (deviceso.value === 'APP_DAILY_OFFER'){
            const datloc = new Date(String(datfim.value) + "T" + String(horfim.value) + ":01")
            const datutc = new Date(datloc.toUTCString())
            datHorFim = datutc.toISOString().slice(0, 19)
        }  else { datHorFim = String(datfim.value) + "T" + String(horfim.value) + ":01" }
        console.log(datHorFim)
    })
}

const habilitaCampoDevice = () => {
    if (storeso.value !== "SELECIONELOJA" && deviceso.value === "SELECIONEDEVICE") {
        deviceso.disabled = false;
        storeso.disabled = true;
    }
    if (storeso.value !== "SELECIONELOJA" && deviceso.value !== "SELECIONEDEVICE") {
        deviceso.disabled = true;
    }
    if (skuspai.value !== "") {
        buttPreProg.disabled = false;
    }
}

const montaJson = () => {
    const appChange = () => { if (deviceso.value === 'APP_DAILY_OFFER') { return 'APP_DAILY_OFFER' } return 'SKU_LIST_BANNER_CAROUSEL' }
    const arr = []
    const skuspai = document.querySelector('#skuspai');
    const achaSkus = skuspai.value.match(/(\w\w\w)-(\w*)-(\w\w\w)/gi);
    achaSkus.map((i) => { arr.push(i) })
    golbalJsonDesMob = {
        "id": appChange(),
        "storeId": storeso.value,
        "data": {
            "type": "SKU_LIST",
            "skus": arr,
            "headline": titulo.value,
            "subtitle": subtitulo.value
        },
        "criteria": {
            "platform": deviceso.value,
            "startDate": datHorIni,
            "endDate": datHorFim
        }
    }
    console.log(JSON.stringify(golbalJsonDesMob))
}

const postOferta = () => {
    montaJson()
    var data = JSON.stringify(golbalJsonDesMob);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            const retorno = JSON.parse(this.responseText);
            document.querySelector('#retid').innerHTML = `<p>Guarde este ID:</p><strong><p>${retorno.uuid}</p></strong>`
        }
    });

    xhr.open("POST", "https://prd-ingress.netshoes.io/banner/admin");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("storeId", storeso.value);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", token);

    xhr.send(data);
}
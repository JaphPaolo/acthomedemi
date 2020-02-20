var token = Math.random().toString(36).substr(2, 8) + "-" + Math.random().toString(36).substr(2, 4) + "-" + Math.random().toString(36).substr(2, 4) + "-" + Math.random().toString(36).substr(2, 4) + "-" + Math.random().toString(36).substr(2, 12);
var objJson;
var jsonPut;
var jsonWarnin;
var campoLoja = document.querySelector('#selLojas');
var campoCombo = document.querySelector('#drlCombo');

document.querySelector('#selLojas').addEventListener('change', function () {
    if (selLojas.value == "L_ZATTINI") {
        campoCombo.innerHTML = '<option value="combsele">Selecione o Combo</option><option value="59cd885c3004c378242b707c">2 por 129</option><option value="5a5df7cfe0ebd203d0419943">3 por 99</option><option value="5a7225523004c3cd75294a18">2 por 189</option><option value="5b2c27d33004c3b5cb32ea3d">2 por 99</option><option value="5bb525e03004c30f5e599a78">2 por 299</option><option value="combo2por399">2 por 399</option><option value="combo2por39">2 por 39</option><option value="combocanais2por119">2 por 119</option><option value="59cc52573004c329c86a1ff2">combo teste</option>'
    } else if (selLojas.value == "L_NETSHOES") {
        campoCombo.innerHTML = '<option value="combsele">Selecione o Combo</option><option value="combo2por12990">2 por 129</option><option value="5a70b3233004c3cd75294923">2 por 99</option><option value="5a70dab03004c3cd75294938">3 por 99</option><option value="combo4por9990">4 por 99</option><option value="5aa69ffa3004c304f55ea093">3 por 2</option>'
    }
    campoCombo.disabled = false;
    campoLoja.disabled = true;
})

document.querySelector('#drlCombo').addEventListener("change", function () {
    fazOGet();
    fazGetDosSelos();
    inpArquivo.disabled = false;
    campoCombo.disabled = true;
})



var skusDoSelo = [];
var sellerDoSelo = [];

function fazOGet() {
    var data = JSON.stringify(false);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
            objJson = JSON.parse(this.responseText);

        }
    });
    xhr.open("GET", "http://az-br-prd-free-campaign-1.netshoes.io:8080/api/secure/store/" + selLojas.value + "/promotions/" + drlCombo.value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", token);
    xhr.send(data);
}

function fazOPut() {
    var data = JSON.stringify(objJson);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 207) {
            jsonPut = JSON.parse(this.responseText);
            jsonWarnin = JSON.stringify(jsonPut.warnings);
            var tratado = jsonWarnin.replace(/{"sku":"/gm, "").replace(/","sellerId":"/gm, " - ").replace(/","message":"/gm, " - ").replace(/"},/gm, "\n").replace(/"}]/gm, "").replace(/\[/gm, "\n");
            function download(filename, tratado) {
                var element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(tratado));
                element.setAttribute('download', filename);
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
            }
            // Start file download.
            download("MultiStatus.txt", tratado);


            for (var i = 0; i < Object.values(jsonPut.promotion.criteria.sellerParents).length; i++) {
                Object.values(jsonPut.promotion.criteria.sellerParents)[i].forEach((e) => {
                    skusDoSelo.push(e)
                })
            };

            for (var i = 0; i < Object.values(jsonPut.promotion.criteria.sellerParents).length; i++) {
                sellerDoSelo.push(Object.keys(jsonPut.promotion.criteria.sellerParents)[i])
            };
            console.log("PROMOÇÃO ATUALIZADA");
            fazPutDosSelos();
        } else if (this.readyState === 4 && this.status === 200) {
            
            jsonPut = JSON.parse(this.responseText);
            jsonWarnin = JSON.stringify(jsonPut.warnings);
            
            for (var i = 0; i < Object.values(jsonPut.promotion.criteria.sellerParents).length; i++) {
                Object.values(jsonPut.promotion.criteria.sellerParents)[i].forEach((e) => {
                    skusDoSelo.push(e)
                })
            }
            for (var i = 0; i < Object.values(jsonPut.promotion.criteria.sellerParents).length; i++) {
                sellerDoSelo.push(Object.keys(jsonPut.promotion.criteria.sellerParents)[i])
            };
            console.log("PROMOÇÃO ATUALIZADA");
            fazPutDosSelos()
        }

    });

    xhr.open("PUT", "http://az-br-prd-free-campaign-1.netshoes.io:8080/api/secure/store/" + selLojas.value + "/promotions/" + drlCombo.value);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", token);

    xhr.send(data);
}


var texto;
const openFile = (event) => {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = () => {
        texto = reader.result;
        console.log(texto);
    };
    reader.readAsText(input.files[0]);

};
var objieto;
var textArray;
var grupoSeller = [];
var grupoSellUniq = [];
var objSelosJson;


function fazObjetosDeArrays() {
    objJson.criteria.sellerParents = {};
    objieto = objJson.criteria.sellerParents;
    objJson.campaigns = [];
    textArray = texto.match(/(\w\w\w)-(\w\w\w\w)-(\w\w\w).*/gm);
    textArray.forEach((e) => {
        grupoSeller.push(e.split(",")[1]);
    });
    grupoSellUniq = [...new Set(grupoSeller)];
    grupoSellUniq.forEach((e) => {
        objieto[e] = [];
    });
    textArray.forEach((e) => {
        var skuSolo = e.split(",")[0];
        for (var i = 0; i < Object.values(objieto).length; i++) {
            if (e.split(",")[1] == Object.keys(objieto)[i]) {
                Object.values(objieto)[i].push(skuSolo);
            }
        }
    }
    );
}

document.querySelector("#botaoGet").addEventListener("click", function () {
    fazObjetosDeArrays();
    inpArquivo.disabled = true;
});
document.querySelector("#botaoPut").addEventListener("click", function () {
    fazOPut();
})




var objetoSelos = {
    "netshoes": {
        "2por129": "a17997fe-efd3-4840-ab01-c04048acbdd5",
        "2por99": "a25ab87c-f7d6-4032-9065-1ec1c50cce93",
        "3por99": "51ae8fdd-b77f-4d14-b5fa-107d8bd37a70",
        "4por99": "8786bfb4-c166-4863-8d97-5acd401d90f8",
        "3por2": "3d086591-3004-48d0-96ed-6e322a8209a7"
    },
    "zattini": {
        "2por129": "f156d8ba-d9f5-4556-8ecc-8a0ded7390df",
        "3por99": "3f32243e-3241-401b-a873-c1081693c3a7",
        "2por189": "c93c690e-d6c0-4da5-a766-c13ce8d39950",
        "2por99": "032bfd3d-c977-429d-9175-7637a95adddb",
        "2por299": "049f9311-439d-4517-9edb-24b8ae7fcf05",
        "2por399": "49acdb70-bf11-4808-88dc-92246ead1428",
        "2por39": "1b7366f1-8ba3-4edb-8a7e-0b153e20fd2a"
    }
}


var objSelosJson;
var skusDoSelo = [];
var sellerDoSelo = [];

function retornaSelos() {
    if (drlCombo.value == "combo2por12990") {
        return objetoSelos.netshoes["2por129"]
    } else if (drlCombo.value == "5a70b3233004c3cd75294923") { return objetoSelos.netshoes["2por99"] } else if (drlCombo.value == "5a70dab03004c3cd75294938") { return objetoSelos.netshoes["3por99"] } else if (drlCombo.value == "combo4por9990") { return objetoSelos.netshoes["4por99"] } else if (drlCombo.value == "5aa69ffa3004c304f55ea093") { return objetoSelos.netshoes["3por2"] } else if (drlCombo.value == "59cd885c3004c378242b707c") { return objetoSelos.zattini["2por129"] } else if (drlCombo.value == "5a5df7cfe0ebd203d0419943") { return objetoSelos.zattini["3por99"] } else if (drlCombo.value == "5a7225523004c3cd75294a18") { return objetoSelos.zattini["2por189"] } else if (drlCombo.value == "5b2c27d33004c3b5cb32ea3d") { return objetoSelos.zattini["2por99"] } else if (drlCombo.value == "5bb525e03004c30f5e599a78") { return objetoSelos.zattini["2por299"] } else if (drlCombo.value == "combo2por399") { return objetoSelos.zattini["2por399"] } else if (drlCombo.value == "combo2por39") { return objetoSelos.zattini["2por39"] }
}

function fazGetDosSelos() {


    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
            objSelosJson = JSON.parse(this.responseText);
        }
    });

    xhr.open("GET", "http://az-br-prd-free-campaign-1.netshoes.io:8080/admin/stamp/" + retornaSelos());
    xhr.setRequestHeader("storeId", selLojas.value);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", token);

    xhr.send(data);
}


function fazPutDosSelos() {
    objSelosJson.criterias[0].values = skusDoSelo;
    objSelosJson.sellers = sellerDoSelo;


    var data = JSON.stringify(objSelosJson);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log("SELO ATUALIZADO");
            alert("Selo e Promo atualizados!")
        }
    });

    xhr.open("PUT", "http://az-br-prd-free-campaign-1.netshoes.io:8080/admin/stamp/" + retornaSelos());
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("storeId", selLojas.value);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", token);

    xhr.send(data);
}

function reloads(){
    location.reload();
}
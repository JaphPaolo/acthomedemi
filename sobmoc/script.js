var objJson;
var jsonPut;
var jsonWarnin;

function fazOGet() {
    var data = JSON.stringify(false);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
            objJson = JSON.parse(this.responseText);

        }
    });
    xhr.open("GET", "http://az-br-prd-free-campaign-1.netshoes.io:8080/api/secure/store/L_ZATTINI/promotions/59cc52573004c329c86a1ff2");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "3a90739f-08c5-4373-91bc-ac1333c4fe1b");
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
        } else if(this.readyState === 4 && this.status === 200){alert("Combo atualizado")}
    });

    xhr.open("PUT", "http://az-br-prd-free-campaign-1.netshoes.io:8080/api/secure/store/L_ZATTINI/promotions/59cc52573004c329c86a1ff2");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "96df34e7-1985-4317-a632-be602def3fe5");

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
        var skuSolo = e.split(",")[0]
        for (var i = 0; i < Object.values(objieto).length; i++) {
            if (e.split(",")[1] == Object.keys(objieto)[i]) {
                Object.values(objieto)[i].push(skuSolo);
            }
        }
    }
    );
}

document.querySelector("#botaoGet").addEventListener("click", function () {
    fazOGet();
});
document.querySelector("#botaoPut").addEventListener("click", function () {
    fazOPut();
})




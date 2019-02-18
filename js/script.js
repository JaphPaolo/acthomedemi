
/* Variables */
var loJa = "";
var deVice = "";
const atuBu = document.querySelector("#butAtua");
const reaPr = document.querySelector("#butProg");
const ediPr = document.querySelector("#butEditp");
const mainDiv = document.querySelector(".row");
const headBann = document.querySelector("#HagaUm");

/* Events */
atuBu.addEventListener("click", function () {
    loadAtuOld();
});
reaPr.addEventListener("click", function () {
    loadProgBann();
});
ediPr.addEventListener("click", function () {
    loadEditProg();
});
headBann.addEventListener("click", function () {
    goHome();
});


/* Functions to load prp pages */
function loadAtuOld() {
    mainDiv.innerHTML = infoStores.atuForma;
    var storEso = document.querySelector("#storeso");
    var deviCeso = document.querySelector("#deviceso");
    var bannereSo = document.querySelector("#bannereseso");
    storEso.addEventListener("change", function () { enabFie() });
    deviCeso.addEventListener("change", function () { enabFie() });
    bannereSo.addEventListener("change", function () { fazGetModDesk() });
}
function loadProgBann() {
    alert("tst"); //ainda será feito.
}
function loadEditProg() {
    alert("tst"); //ainda será feito
}
function goHome() {
    location.reload();
}

function enabFie() {
    if (storeso.value !== "SELECIONELOJA" && deviceso.value === "SELECIONEDEVICE") {
        deviceso.disabled = false;
        storeso.disabled = true;
    }
    if (deviceso.value !== "SELECIONEDEVICE") {
        deviceso.disabled = true;
        bannereseso.disabled = false;
        defineFormato();
    }
}

function defineFormato() {
    if (storeso.value === "netshoes" && deviceso.value === "desktop") { bannereseso.innerHTML = infoStores.netshoes.banners.desktop.bnForm }
    if (storeso.value === "netshoes" && deviceso.value === "mobile") { bannereseso.innerHTML = infoStores.netshoes.banners.mobile.bnForm }
    if (storeso.value === "netshoes" && deviceso.value === "app") { bannereseso.innerHTML = infoStores.netshoes.banners.app.bnForm }
    if (storeso.value === "netshoes" && deviceso.value === "promoapp") { bannereseso.innerHTML = infoStores.netshoes.banners.promoapp.bnForm }
    if (storeso.value === "netshoesar" && deviceso.value === "desktop") { bannereseso.innerHTML = infoStores.netshoesar.banners.desktop.bnForm }
    if (storeso.value === "netshoesar" && deviceso.value === "mobile") { bannereseso.innerHTML = infoStores.netshoesar.banners.mobile.bnForm }
    if (storeso.value === "netshoesar" && deviceso.value === "app") { bannereseso.innerHTML = infoStores.netshoesar.banners.app.bnForm }
    if (storeso.value === "netshoesar" && deviceso.value === "promoapp") { bannereseso.innerHTML = infoStores.netshoesar.banners.promoapp.bnForm }
    if (storeso.value === "netshoesmx" && deviceso.value === "desktop") { bannereseso.innerHTML = infoStores.netshoesmx.banners.desktop.bnForm }
    if (storeso.value === "netshoesmx" && deviceso.value === "mobile") { bannereseso.innerHTML = infoStores.netshoesmx.banners.mobile.bnForm }
    if (storeso.value === "netshoesmx" && deviceso.value === "app") { bannereseso.innerHTML = infoStores.netshoesmx.banners.app.bnForm }
    if (storeso.value === "netshoesmx" && deviceso.value === "promoapp") { bannereseso.innerHTML = infoStores.netshoesmx.banners.promoapp.bnForm }
    if (storeso.value === "zattini" && deviceso.value === "desktop") { bannereseso.innerHTML = infoStores.zattini.banners.desktop.bnForm }
    if (storeso.value === "zattini" && deviceso.value === "mobile") { bannereseso.innerHTML = infoStores.zattini.banners.mobile.bnForm }
    if (storeso.value === "zattini" && deviceso.value === "app") { bannereseso.innerHTML = infoStores.zattini.banners.app.bnForm }
    if (storeso.value === "zattini" && deviceso.value === "promoapp") { bannereseso.innerHTML = infoStores.zattini.banners.promoapp.bnForm }
    if (storeso.value === "shoestock" && deviceso.value === "desktop") { bannereseso.innerHTML = infoStores.shoestock.banners.desktop.bnForm }
    if (storeso.value === "shoestock" && deviceso.value === "mobile") { bannereseso.innerHTML = infoStores.shoestock.banners.mobile.bnForm }
    if (storeso.value === "shoestock" && deviceso.value === "app") { bannereseso.innerHTML = infoStores.shoestock.banners.app.bnForm }
    if (storeso.value === "shoestock" && deviceso.value === "promoapp") { bannereseso.innerHTML = infoStores.shoestock.banners.promoapp.bnForm }
}

function fazGetModDesk() {
    geraCampos();
    window.objJson = '';
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
            objJson = JSON.parse(this.responseText);
            preencheCampos();
        }
    });
    xhr.open("GET", "https://prd-ingress.netshoes.io/banner/admin/" + defineTudoNessaPorra());
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "306b5293-cab9-42c5-a3b6-593d9b07e081");
    xhr.send(data);
}

function geraCampos() {     
    var dJossa = document.querySelector(".jossa");
    dJossa.classList.remove("escondida");
    dJossa.innerHTML = infoStores.netshoes.banners.desktop.deskImgList
}

function estaticoLojas() {
    if (storeso.value === "netshoes"){return "https://static.netshoes.com.br"}
    if (storeso.value === "netshoesar"){return "https://static.netshoes.com.ar"}
    if (storeso.value === "netshoesmx"){return "https://static.netshoes.com.mx"}
    if (storeso.value === "zattini"){return "https://static.zattini.com.br"}
    if (storeso.value === "shoestock"){return "https://static.shoestock.com.br"}
}

function preencheCampos() {
    var imagem = document.querySelector(".ibagem a img")
    var link = document.querySelector(".ibagem a")
    
    if (deviceso.value === "app" || deviceso.value === "promoapp"){
    imagem.setAttribute("src", estaticoLojas() + objJson.data.urlImage)
    link.setAttribute("href", objJson.data.urlTarget)
    ibagemImg.value = objJson.data.urlImage
    ibagemUrl.value = objJson.data.urlTarget
    }else
    if (objJson.data.type === "IMAGE_LIST") {
    imagem.setAttribute("src", objJson.data.images[defNume()].urlImage)
    link.setAttribute("href", objJson.data.images[defNume()].urlTarget)
    ibagemImg.value = objJson.data.images[defNume()].urlImage
    ibagemUrl.value = objJson.data.images[defNume()].urlTarget}
    else {
        imagem.setAttribute("src", objJson.data.urlImage)
    link.setAttribute("href", objJson.data.urlTarget)
    ibagemImg.value = objJson.data.urlImage
    ibagemUrl.value = objJson.data.urlTarget
    }
}

function defNume(){
    if (bannereseso.value === "full1" || bannereseso.value === "deal1"  || bannereseso.value === "full1a" || bannereseso.value === "botao1" || bannereseso.value === "full2a" || bannereseso.value === "full3a" || bannereseso.value === "deal1" || bannereseso.value === "triplo1" || bannereseso.value === "triplo4") {
        return 0
    } else
    if (bannereseso.value === "full2" || bannereseso.value === "deal2"  || bannereseso.value === "full1b" || bannereseso.value === "botao2" || bannereseso.value === "full2b" || bannereseso.value === "full3b" || bannereseso.value === "deal2" || bannereseso.value === "triplo2" || bannereseso.value === "triplo5") {
        return 1
    } else 
    if (bannereseso.value === "full3" || bannereseso.value === "deal3"  || bannereseso.value === "full1c" || bannereseso.value === "botao3" || bannereseso.value === "full2c" || bannereseso.value === "full3c" || bannereseso.value === "deal3" || bannereseso.value === "triplo3" || bannereseso.value === "triplo6") {
        return 2
    } else
    if (bannereseso.value === "full4" || bannereseso.value === "deal4"  || bannereseso.value === "full1d" || bannereseso.value === "botao4" || bannereseso.value === "full2d" || bannereseso.value === "full3d" || bannereseso.value === "deal4" || bannereseso.value === "triplo7" || bannereseso.value === "triplo7") {
        return 3
    }
}
//netshoes
function defBannerNetshoesDesk() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1":
            return "8f88b61c-d6e9-425b-a83e-8d22ae4faf37"
            break;
            case "full2":
            return "8f88b61c-d6e9-425b-a83e-8d22ae4faf37"
            break;
            case "full3":
            return "8f88b61c-d6e9-425b-a83e-8d22ae4faf37"
            break;
            case "deal1":
            return "64d46597-132f-43aa-b778-9bf4430dd6fa"
            break;
            case "deal2":
            return "64d46597-132f-43aa-b778-9bf4430dd6fa"
            break;
            case "deal3":
            return "64d46597-132f-43aa-b778-9bf4430dd6fa"
            break;
            case "deal4":
            return "64d46597-132f-43aa-b778-9bf4430dd6fa"
            break;
            case "trio1":
            return "1f43fe30-7fc9-4cda-a8e0-96e32874b9e7"
            break;
            case "trio2":
            return "1f7d95a4-773b-4d22-b815-2bb2986d407c"
            break;
            case "trio3":
            return "3d324bca-18e1-42b9-987c-bf723f4caa32"
            break;
            case "trio4":
            return "37b32386-8bfe-461c-a359-a13f576f4491"
            break;
            case "trio5":
            return "de7ef3cb-6bd5-4912-88aa-3a44a53d92f5"
            break;
            case "trio6":
            return "5af282d2-0e34-4afe-b502-8a64be45cecc"
            break;
            case "trio7":
            return "574d5ee1-74ce-4b3f-98dc-111bc4aa0e03"
            break;
            case "trio8":
            return "0af885bb-4048-4e6a-b42a-0f5bf8b69ea7"
            break;
            case "trio9":
            return "542b5938-ec5c-414d-8f49-db09407b6605"
            break;
            case "horizontal":
            return "e3e466a0-9b6a-4f47-947e-3ed1958addb1"
            break;
            case "trjhome":
            return "abfa70a3-76cb-4b0d-909d-206fd66dfcfc"
            break;
            case "trjlista":
            return "dbc57c50-f6c1-4e4e-a635-70cb70a0fc3f"
            break;
            case "trjpdp":
            return 
            break;
            case "headerb":
            return "f837531c-e8a2-4e68-8c50-4e29d2d341a8"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}
function defBannerNetshoesMob() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1a":
            return "a8f963cd-918e-4cf2-bb71-7b5cdac0cd08"
            break;
            case "full1b":
            return "a8f963cd-918e-4cf2-bb71-7b5cdac0cd08"
            break;
            case "full1c":
            return "a8f963cd-918e-4cf2-bb71-7b5cdac0cd08"
            break;
            case "botao1":
            return "85bee154-a99f-4944-9d39-99c24e0f02cf"
            break;
            case "botao2":
            return "85bee154-a99f-4944-9d39-99c24e0f02cf"
            break;
            case "botao3":
            return "85bee154-a99f-4944-9d39-99c24e0f02cf"
            break;
            case "full2a":
            return "c47bdf0d-9518-4f11-a822-145d93520283"
            break;
            case "full2b":
            return "c47bdf0d-9518-4f11-a822-145d93520283"
            break;
            case "full2c":
            return "c47bdf0d-9518-4f11-a822-145d93520283"
            break;
            case "full3a":
            return "450a0625-e7fb-470c-9db2-1c1373f2b18e"
            break;
            case "full3b":
            return "450a0625-e7fb-470c-9db2-1c1373f2b18e"
            break;
            case "full3c":
            return "450a0625-e7fb-470c-9db2-1c1373f2b18e"
            break;
            case "deal1":
            return "5eadecb4-055c-4c95-9bf0-db656df09903"
            break;
            case "deal2":
            return "5eadecb4-055c-4c95-9bf0-db656df09903"
            break;
            case "deal3":
            return "5eadecb4-055c-4c95-9bf0-db656df09903"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}
function defBannerNetshoesApp() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1":
            return "469f2311-eb29-4f8a-b919-26bea13e435f"
            break;
            case "full2":
            return "9211d8d9-5b25-4091-b473-a4e5d792fc47"
            break;
            case "full3":
            return "1b21e66d-7bb7-4f89-9369-17d50a4dcc3e"
            break;
            case "full4":
            return "108ffc67-8c9c-403f-b8fd-df3b70738297"
            break;
            case "full5":
            return "cebfd436-4e93-49f0-a54a-0a37907976f9"
            break;
            case "full6":
            return "40fddc52-e084-40e2-96c7-55bae320b48a"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}
function defBannerNetshoesPromoapp() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1":
            return "4956c7b9-643e-42a4-acdd-77841f9190d2"
            break;
            case "full2":
            return "abcd5d4a-1f8c-4cc5-9361-9f8bdea9195b"
            break;
            case "full3":
            return "64f7124f-585f-4e4f-9c2d-c5076484fb1c"
            break;
            case "full4":
            return "4cbd917d-1b24-415d-86bc-195b03f243a4"
            break;
            case "full5":
            return "5656d992-ebbc-49f3-b1d4-71148ebbb43a"
            break;
            case "full6":
            return "49395f49-7f68-4ff5-b082-1b354a9419b6"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}

//zattini
function defBannerZattiniDesk() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1a":
            return "be6d0a71-51c1-4282-be12-d235c38929d8"
            break;
            case "full1b":
            return "be6d0a71-51c1-4282-be12-d235c38929d8"
            break;
            case "full1c":
            return "be6d0a71-51c1-4282-be12-d235c38929d8"
            break;
            case "deal1":
            return "0e238c57-1087-46af-8468-f6b45329b775"
            break;
            case "deal2":
            return "0e238c57-1087-46af-8468-f6b45329b775"
            break;
            case "deal3":
            return "0e238c57-1087-46af-8468-f6b45329b775"
            break;
            case "deal4":
            return "0e238c57-1087-46af-8468-f6b45329b775"
            break;
            case "trio1":
            return "e039ee5b-a6f7-4d7a-9ce4-24b4812bd761"
            break;
            case "trio2":
            return "4892ba1d-ad4c-40a8-88c3-a67cdb6a6a53"
            break;
            case "trio3":
            return "f442915b-92c5-450e-9d00-8e2f2ddca26c"
            break;
            case "trio4":
            return "e323b6c0-e38a-413c-bda1-ae979365da5b"
            break;
            case "trio5":
            return "d2441de4-ac3c-4d68-a3fb-f86b77da849e"
            break;
            case "trio6":
            return "e7d9f0a2-2b3f-4b7a-8ca7-74b78c71387c"
            break;
            case "trio7":
            return "4b39e451-2726-4642-963e-235339ad9219"
            break;
            case "trio8":
            return "2270dec8-18a4-4b87-bc71-2788345f8832"
            break;
            case "trio9":
            return "cd8a5403-7ca3-48ad-a9b9-8b30c40d95a5"
            break;
            case "full2":
            return "d20b45ca-38a3-46aa-aaf5-1ac8c621bd43"
            break;
            case "full3":
            return "61a19302-872d-48dd-ad23-3411c95a61d6"
            break;
            case "trjhome":
            return "59321a69-d620-4af6-bbfd-a49b2a7f9614"
            break;
            case "trjlista":
            return "8b4ac61d-58af-41db-8df0-e24982282c36"
            break;
            
            case "headerb":
            return "07a5216c-b67e-4e56-99e4-0068aa9d4ace"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}
function defBannerZattiniMob() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1":
            return "372b2995-24f6-4bfa-a763-de5d21e19231"
            break;
            case "deal1":
            return "120eabcf-04f4-4d5a-9b27-4b6ee7443a34"
            break;
            case "deal2":
            return "120eabcf-04f4-4d5a-9b27-4b6ee7443a34"
            break;
            case "deal3":
            return "120eabcf-04f4-4d5a-9b27-4b6ee7443a34"
            break;
            case "deal4":
            return "120eabcf-04f4-4d5a-9b27-4b6ee7443a34"
            break;
            case "triplo1":
            return "729858e7-5341-4f73-8639-bad315db8266"
            break;
            case "triplo2":
            return "729858e7-5341-4f73-8639-bad315db8266"
            break;
            case "triplo3":
            return "729858e7-5341-4f73-8639-bad315db8266"
            break;
            case "triplo4":
            return "ec6a0dda-cdec-4b2a-8e6f-aa558466a679"
            break;
            case "triplo5":
            return "ec6a0dda-cdec-4b2a-8e6f-aa558466a679"
            break;
            case "triplo6":
            return "ec6a0dda-cdec-4b2a-8e6f-aa558466a679"
            break;
            case "full2":
            return "6e344ad8-9fae-47d6-8a5c-5fe2bc236a3c"
            break;
            case "full3":
            return "258ec733-2edf-43dd-84dd-b442e04d3365"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}
function defBannerZattiniApp() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1":
            return "ba5a6e1c-e14e-46c4-ba61-daf6ca676a6a"
            break;
            case "full2":
            return "dec9d9ed-7747-4f2e-8359-c0d6343a7b32"
            break;
            case "full3":
            return "99ea27fa-547c-4fba-9685-62565a356f8a"
            break;
            case "full4":
            return "935febf2-f58b-4b36-a7ca-ddd2b067e3cb"
            break;
            case "full5":
            return "2eecfcb2-7941-4a9f-9481-9278988dcd98"
            break;
            case "full6":
            return "8f0f7b21-bb3c-4f7f-baa9-79a8f0934a43"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}
function defBannerZattiniPromoapp() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1":
            return "ebfa53bf-7658-4023-913d-01bea7952cfd"
            break;
            case "full2":
            return "a65a9fc9-d1f5-48c5-ad8e-290eb3f8a8b7"
            break;
            case "full3":
            return "62a3eb2b-b4ac-443c-b0be-ea3bc2af25c9"
            break;
            case "full4":
            return "5f74a39d-ea38-4b16-bf46-7116ba093ab6"
            break;
            case "full5":
            return "baadfd0b-1212-4758-a068-1fbf0f89f088"
            break;
            case "full6":
            return "ba3b9503-4856-42b0-ab12-b21f931985f0"
            break;
            case "full7":
            return "29b080e2-887f-46ad-9e0e-7829588f21a7"
            break;

        default: alert("Erro! Contate a Opec!")
            break;
    }
}

//netshoesar
function defBannerNetshoesarDesk() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1":
            return "8f88b61c-d6e9-425b-a83e-8d22ae4faf37"
            break;
            case "full2":
            return "8f88b61c-d6e9-425b-a83e-8d22ae4faf37"
            break;
            case "full3":
            return "8f88b61c-d6e9-425b-a83e-8d22ae4faf37"
            break;
            case "deal1":
            return "64d46597-132f-43aa-b778-9bf4430dd6fa"
            break;
            case "deal2":
            return "64d46597-132f-43aa-b778-9bf4430dd6fa"
            break;
            case "deal3":
            return "64d46597-132f-43aa-b778-9bf4430dd6fa"
            break;
            case "deal4":
            return "64d46597-132f-43aa-b778-9bf4430dd6fa"
            break;
            case "trio1":
            return "1f43fe30-7fc9-4cda-a8e0-96e32874b9e7"
            break;
            case "trio2":
            return "1f7d95a4-773b-4d22-b815-2bb2986d407c"
            break;
            case "trio3":
            return "3d324bca-18e1-42b9-987c-bf723f4caa32"
            break;
            case "trio4":
            return "37b32386-8bfe-461c-a359-a13f576f4491"
            break;
            case "trio5":
            return "de7ef3cb-6bd5-4912-88aa-3a44a53d92f5"
            break;
            case "trio6":
            return "5af282d2-0e34-4afe-b502-8a64be45cecc"
            break;
            case "trio7":
            return "574d5ee1-74ce-4b3f-98dc-111bc4aa0e03"
            break;
            case "trio8":
            return "0af885bb-4048-4e6a-b42a-0f5bf8b69ea7"
            break;
            case "trio9":
            return "542b5938-ec5c-414d-8f49-db09407b6605"
            break;
            case "horizontal":
            return "e3e466a0-9b6a-4f47-947e-3ed1958addb1"
            break;
            case "trjhome":
            return "abfa70a3-76cb-4b0d-909d-206fd66dfcfc"
            break;
            case "trjlista":
            return "dbc57c50-f6c1-4e4e-a635-70cb70a0fc3f"
            break;
            case "trjpdp":
            return 
            break;
            case "headerb":
            return "f837531c-e8a2-4e68-8c50-4e29d2d341a8"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}
function defBannerNetshoesarMob() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1a":
            return "a8f963cd-918e-4cf2-bb71-7b5cdac0cd08"
            break;
            case "full1b":
            return "a8f963cd-918e-4cf2-bb71-7b5cdac0cd08"
            break;
            case "full1c":
            return "a8f963cd-918e-4cf2-bb71-7b5cdac0cd08"
            break;
            case "botao1":
            return "85bee154-a99f-4944-9d39-99c24e0f02cf"
            break;
            case "botao2":
            return "85bee154-a99f-4944-9d39-99c24e0f02cf"
            break;
            case "botao3":
            return "85bee154-a99f-4944-9d39-99c24e0f02cf"
            break;
            case "full2a":
            return "c47bdf0d-9518-4f11-a822-145d93520283"
            break;
            case "full2b":
            return "c47bdf0d-9518-4f11-a822-145d93520283"
            break;
            case "full2c":
            return "c47bdf0d-9518-4f11-a822-145d93520283"
            break;
            case "full3a":
            return "450a0625-e7fb-470c-9db2-1c1373f2b18e"
            break;
            case "full3b":
            return "450a0625-e7fb-470c-9db2-1c1373f2b18e"
            break;
            case "full3c":
            return "450a0625-e7fb-470c-9db2-1c1373f2b18e"
            break;
            case "deal1":
            return "5eadecb4-055c-4c95-9bf0-db656df09903"
            break;
            case "deal2":
            return "5eadecb4-055c-4c95-9bf0-db656df09903"
            break;
            case "deal3":
            return "5eadecb4-055c-4c95-9bf0-db656df09903"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}
function defBannerNetshoesarApp() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1":
            return "469f2311-eb29-4f8a-b919-26bea13e435f"
            break;
            case "full2":
            return "9211d8d9-5b25-4091-b473-a4e5d792fc47"
            break;
            case "full3":
            return "1b21e66d-7bb7-4f89-9369-17d50a4dcc3e"
            break;
            case "full4":
            return "108ffc67-8c9c-403f-b8fd-df3b70738297"
            break;
            case "full5":
            return "cebfd436-4e93-49f0-a54a-0a37907976f9"
            break;
            case "full6":
            return "40fddc52-e084-40e2-96c7-55bae320b48a"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}
function defBannerNetshoesarPromoapp() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1":
            return "4956c7b9-643e-42a4-acdd-77841f9190d2"
            break;
            case "full2":
            return "abcd5d4a-1f8c-4cc5-9361-9f8bdea9195b"
            break;
            case "full3":
            return "64f7124f-585f-4e4f-9c2d-c5076484fb1c"
            break;
            case "full4":
            return "4cbd917d-1b24-415d-86bc-195b03f243a4"
            break;
            case "full5":
            return "5656d992-ebbc-49f3-b1d4-71148ebbb43a"
            break;
            case "full6":
            return "49395f49-7f68-4ff5-b082-1b354a9419b6"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}

//netshoesmx
function defBannerNetshoesmxDesk() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1a":
            return "d3d9ca55-bb53-4fe1-924a-9bad3e0419f4"
            break;
            case "full1b":
            return "d3d9ca55-bb53-4fe1-924a-9bad3e0419f4"
            break;
            case "deal1":
            return "68174ef6-e4e4-408b-b44a-3085d067f44e"
            break;
            case "deal2":
            return "68174ef6-e4e4-408b-b44a-3085d067f44e"
            break;
            case "deal3":
            return "68174ef6-e4e4-408b-b44a-3085d067f44e"
            break;
            case "deal4":
            return "68174ef6-e4e4-408b-b44a-3085d067f44e"
            break;
            case "trio1":
            return "02f6324f-35a5-423b-99e9-f3baff333d1a"
            break;
            case "trio2":
            return "63538f8f-b40b-4493-bf7d-66b417886fe2"
            break;
            case "trio3":
            return "06f13222-8807-4f99-8cb6-a57bd8cee6b2"
            break;
            case "trio4":
            return "00df00ef-f3a4-49a5-b2c2-ecdbd9e25786"
            break;
            case "trio5":
            return "55cf0e03-cb81-4e3d-9ae3-3461bf675e44"
            break;
            case "trio6":
            return "a88d16c0-eece-4c62-9528-5ee25a3fcbd7"
            break;
            case "trio7":
            return "4546c723-12b7-45f3-874e-adc66a5c7e6e"
            break;
            case "trio8":
            return "9ba7b4f8-c9b8-4a22-9d67-2c81c0be15a3"
            break;
            case "trio9":
            return "89ec57fb-6ba7-4d28-b27f-cffceda34b3d"
            break;
            case "horizontal":
            return "010e03b9-575e-4faf-b8db-c009d08b8ece"
            break;
            case "headerb":
            return "341096ac-1976-4b60-9484-e3c8cfcf3b19"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}
function defBannerNetshoesmxMob() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1a":
            return "6d0fdc60-8cea-480b-a47f-8798688d13a2"
            break;
            case "botao1":
            return "68174ef6-e4e4-408b-b44a-3085d067f44e"
            break;
            case "botao2":
            return "68174ef6-e4e4-408b-b44a-3085d067f44e"
            break;
            case "botao3":
            return "68174ef6-e4e4-408b-b44a-3085d067f44e"
            break;
            case "botao4":
            return "68174ef6-e4e4-408b-b44a-3085d067f44e"
            break;
            case "full2a":
            return "a6b22c0a-4cd1-4dac-841f-ef6e56b8ed65"
            break;
            case "full2b":
            return "a6b22c0a-4cd1-4dac-841f-ef6e56b8ed65"
            break;
            case "full2c":
            return "a6b22c0a-4cd1-4dac-841f-ef6e56b8ed65"
            break;
            case "full3a":
            return "6a700527-08e6-466c-be2c-6790f4eb0c68"
            break;
            case "full3b":
            return "6a700527-08e6-466c-be2c-6790f4eb0c68"
            break;
            case "full3c":
            return "6a700527-08e6-466c-be2c-6790f4eb0c68"
            break;
            case "deal1":
            return "15ece4ef-29fa-447d-b08b-8a425992d157"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}
function defBannerNetshoesmxApp() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1":
            return "703102b3-4a73-44c5-8797-828d2d2d5346"
            break;
            case "full2":
            return "8ef69f3e-0b54-48b9-a104-e471f0f7373b"
            break;
            case "full3":
            return "07111fad-d66a-4494-b6c2-92e04fe9a440"
            break;
            case "full4":
            return "01acb4a0-b523-4e33-8fce-c8cc50ec33ea"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}
function defBannerNetshoesmxPromoapp() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1":
            return "a5c1a202-3b2f-47d6-92dd-3abd5df5b0bf"
            break;
            case "full2":
            return "15884f6d-5701-40d7-8b18-4a33dceab64b"
            break;
            case "full3":
            return "e3dbba47-6450-45d5-a4f3-c8e81cd5dfee"
            break;
            case "full4":
            return "3624e4ab-1be5-41ab-9cd2-edff6f92bae9"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}

//shoestock
function defBannerShoestockDesk() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1a":
            return "55b22957-515d-4336-a12a-70c934353d11"
            break;
            case "full1b":
            return "55b22957-515d-4336-a12a-70c934353d11"
            break;
            case "full1c":
            return "55b22957-515d-4336-a12a-70c934353d11"
            break;
            case "trio1":
            return "c44e0c77-0e37-4fe1-a01d-95ea6432a9e3"
            break;
            case "trio2":
            return "e5e7ef54-c3e1-4c77-a1c8-d3c5504b6ffa"
            break;
            case "trio3":
            return "53004ab7-26bf-4d0e-8bde-8abe7af01506"
            break;
            case "trio4":
            return "b9330280-b935-49ba-b5f0-63369d60e5db"
            break;
            case "trio5":
            return "3ca08a3a-3f38-43b9-bdcc-3ed5b681f3b2"
            break;
            case "trio6":
            return "cd3b0e6d-9847-464a-a2c4-efeda72fcb52"
            break;
            case "trio7":
            return "b36bf812-df14-439c-89c9-038da1e25555"
            break;
            case "trio8":
            return "5ac9b6f3-70ca-428d-845c-d313e8688286"
            break;
            case "trio9":
            return "b80d992f-8c0a-4f6e-82b9-fbd45ed5256c"
            break;
            case "full2":
            return "9b8da594-c55c-427e-b328-abeb15d934b7"
            break;
            case "full3":
            return "f0541e92-108d-481f-9924-592fa770b2ba"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}
function defBannerShoestockMob() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1":
            return "9ecea6d6-0208-4b3f-ba6d-8c786838c12e"
            break;
            case "full2":
            return "3d1afa3d-43e2-42f0-9aa8-d698ad1dad7b"
            break;
            case "full3":
            return "ee877c30-84af-4787-88cf-4ceaa3832404"
            break;
            case "triplo1":
            return "cbf2f5f0-6111-4d0c-849c-cf35f5f23e9f"
            break;
            case "triplo2":
            return "cbf2f5f0-6111-4d0c-849c-cf35f5f23e9f"
            break;
            case "triplo3":
            return "cbf2f5f0-6111-4d0c-849c-cf35f5f23e9f"
            break;
            case "triplo4":
            return "ba2512c4-8aac-42d4-a1ce-b93753fc94a2"
            break;
            case "triplo5":
            return "ba2512c4-8aac-42d4-a1ce-b93753fc94a2"
            break;
            case "triplo6":
            return "ba2512c4-8aac-42d4-a1ce-b93753fc94a2"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}
function defBannerShoestockApp() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1":
            return "9b4ce84d-67a7-4c1e-8633-89124271419e"
            break;
            case "full2":
            return "8bc5cc4d-6586-43f6-af2d-f732ebf244e5"
            break;
            case "full3":
            return "d1b7457b-8dfe-4be5-b464-d0ce0e0d8307"
            break;
            case "full4":
            return "1104fd82-8a32-4bba-8a4b-0f6b62e8de92"
            break;
            case "full5":
            return "93e21142-6550-4fc6-b6be-7609122b7bbf"
            break;
            case "full6":
            return "195387cd-3a9e-4f4c-9524-81175f58890e"
            break;
            case "full7":
            return "480dd20d-8e39-449d-811a-7a360ec70ab5"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}
function defBannerShoestockPromoapp() {
    var bann = document.querySelector("#bannereseso");
    
    switch (bann.value) {        
            case "full1":
            return "c01e3c74-f157-4010-bade-81700a657056"
            break;
            case "full2":
            return "d44dd525-1290-4b66-99a5-fcf64de80507"
            break;
            case "full3":
            return "08bd1867-5e8c-4565-accc-dc283910dba7"
            break;
            case "full4":
            return "8a9c71d0-a175-483c-962f-3344bd2a28e0"
            break;
            case "full5":
            return "4b435385-302e-4188-8d54-11529b34476d"
            break;
            case "full6":
            return "99297059-5fb2-4ec1-9d70-1739560ef701"
            break;
            case "full7":
            return "2a67bea6-6468-4bf1-ac2b-f348b0a4637e"
            break;
    
        default: alert("Erro! Contate a Opec!")
            break;
    }
}




function defineTudoNessaPorra() {
    if (storeso.value === "netshoes" && deviceso.value === "desktop") {
       return defBannerNetshoesDesk();
    } else
    if (storeso.value === "netshoes" && deviceso.value === "mobile") {
        return defBannerNetshoesMob();
     }else
     if (storeso.value === "netshoes" && deviceso.value === "app") {
        return defBannerNetshoesApp();
     }else
     if (storeso.value === "netshoes" && deviceso.value === "promoapp") {
        return defBannerNetshoesPromoapp();
     }else
     if (storeso.value === "zattini" && deviceso.value === "desktop") {
        return defBannerZattiniDesk();
     }else
     if (storeso.value === "zattini" && deviceso.value === "mobile") {
         return defBannerZattiniMob();
      }else
      if (storeso.value === "zattini" && deviceso.value === "app") {
         return defBannerZattiniApp();
      }else
      if (storeso.value === "zattini" && deviceso.value === "promoapp") {
         return defBannerZattiniPromoapp();
      }else if (storeso.value === "netshoesar" && deviceso.value === "desktop") {
        return defBannerNetshoesDesk();
     }else
     if (storeso.value === "netshoesar" && deviceso.value === "mobile") {
         return defBannerNetshoesMob();
      }else
      if (storeso.value === "netshoesar" && deviceso.value === "app") {
         return defBannerNetshoesApp();
      }else
      if (storeso.value === "netshoesar" && deviceso.value === "promoapp") {
         return defBannerNetshoesPromoapp();
      }else if (storeso.value === "netshoesmx" && deviceso.value === "desktop") {
        return defBannerNetshoesmxDesk();
     }else
     if (storeso.value === "netshoesmx" && deviceso.value === "mobile") {
         return defBannerNetshoesmxMob();
      }else
      if (storeso.value === "netshoesmx" && deviceso.value === "app") {
         return defBannerNetshoesmxApp();
      }else
      if (storeso.value === "netshoesmx" && deviceso.value === "promoapp") {
         return defBannerNetshoesmxPromoapp();
      }else if (storeso.value === "shoestock" && deviceso.value === "desktop") {
        return defBannerShoestockDesk();
     }else
     if (storeso.value === "shoestock" && deviceso.value === "mobile") {
         return defBannerShoestockMob();
      }else
      if (storeso.value === "shoestock" && deviceso.value === "app") {
         return defBannerShoestockApp();
      }else
      if (storeso.value === "shoestock" && deviceso.value === "promoapp") {
         return defBannerShoestockPromoapp();
      }
}

   /* Variables */ 
    var loJa = "";
    var deVice = "";
    const atuBu = document.querySelector("#butAtua");
    const reaPr = document.querySelector("#butProg");
    const ediPr = document.querySelector("#butEditp");
    const mainDiv = document.querySelector(".row");
    const headBann = document.querySelector("#HagaUm");

    /* Events */ 
    atuBu.addEventListener("click", function(){
        loadAtuOld();
    });
    reaPr.addEventListener("click", function(){
        loadProgBann();
    });
    ediPr.addEventListener("click", function(){
        loadEditProg();
    });
    headBann.addEventListener("click", function(){
        goHome();
    });   
    

    /* Functions to load prp pages */
    function loadAtuOld(){
        mainDiv.innerHTML = infoStores.atuForma;
        var storEso = document.querySelector("#storeso");
        var deviCeso = document.querySelector("#deviceso");
        var bannereSo = document.querySelector("#bannereseso");
        storEso.addEventListener("change", function(){ enabFie() });
        deviCeso.addEventListener("change", function(){ enabFie() });        
    }
    function loadProgBann(){
        alert("tst"); //ainda será feito.
    }
    function loadEditProg(){
        alert("tst"); //ainda será feito
    }
    function goHome(){
        location.reload();
    }

    function enabFie(){
        if (storeso.value !== "SELECIONELOJA" && deviceso.value === "SELECIONEDEVICE") {
            deviceso.disabled = false;
            storeso.disabled = true;
        }
        if (deviceso.value !== "SELECIONEDEVICE"){
            deviceso.disabled = true;
            bannereseso.disabled = false;
            defineFormato();
        }        
    }    

    function defineFormato() {
        if (storeso.value === "netshoes" && deviceso.value === "desktop") {bannereseso.innerHTML = infoStores.netshoes.banners.desktop.bnForm}
        if (storeso.value === "netshoes" && deviceso.value === "mobile") {bannereseso.innerHTML = infoStores.netshoes.banners.mobile.bnForm}
        if (storeso.value === "netshoes" && deviceso.value === "app") {bannereseso.innerHTML = infoStores.netshoes.banners.app.bnForm}
        if (storeso.value === "netshoes" && deviceso.value === "promoapp") {bannereseso.innerHTML = infoStores.netshoes.banners.promoapp.bnForm}
        if (storeso.value === "netshoesar" && deviceso.value === "desktop") {bannereseso.innerHTML = infoStores.netshoesar.banners.desktop.bnForm}
        if (storeso.value === "netshoesar" && deviceso.value === "mobile") {bannereseso.innerHTML = infoStores.netshoesar.banners.mobile.bnForm}
        if (storeso.value === "netshoesar" && deviceso.value === "app") {bannereseso.innerHTML = infoStores.netshoesar.banners.app.bnForm}
        if (storeso.value === "netshoes" && deviceso.value === "promoapp") {bannereseso.innerHTML = infoStores.netshoes.banners.promoapp.bnForm}
        if (storeso.value === "netshoesmx" && deviceso.value === "desktop") {bannereseso.innerHTML = infoStores.netshoesmx.banners.desktop.bnForm}
        if (storeso.value === "netshoesmx" && deviceso.value === "mobile") {bannereseso.innerHTML = infoStores.netshoesmx.banners.mobile.bnForm}
        if (storeso.value === "netshoesmx" && deviceso.value === "app") {bannereseso.innerHTML = infoStores.netshoesmx.banners.app.bnForm}
        if (storeso.value === "netshoes" && deviceso.value === "promoapp") {bannereseso.innerHTML = infoStores.netshoes.banners.promoapp.bnForm}
        if (storeso.value === "zattini" && deviceso.value === "desktop") {bannereseso.innerHTML = infoStores.zattini.banners.desktop.bnForm}
        if (storeso.value === "zattini" && deviceso.value === "mobile") {bannereseso.innerHTML = infoStores.zattini.banners.mobile.bnForm}
        if (storeso.value === "zattini" && deviceso.value === "app") {bannereseso.innerHTML = infoStores.zattini.banners.app.bnForm}
        if (storeso.value === "netshoes" && deviceso.value === "promoapp") {bannereseso.innerHTML = infoStores.netshoes.banners.promoapp.bnForm}
        if (storeso.value === "shoestock" && deviceso.value === "desktop") {bannereseso.innerHTML = infoStores.shoestock.banners.desktop.bnForm}
        if (storeso.value === "shoestock" && deviceso.value === "mobile") {bannereseso.innerHTML = infoStores.shoestock.banners.demobilesktop.bnForm}
        if (storeso.value === "shoestock" && deviceso.value === "app") {bannereseso.innerHTML = infoStores.shoestock.banners.app.bnForm}
        if (storeso.value === "netshoes" && deviceso.value === "promoapp") {bannereseso.innerHTML = infoStores.netshoes.banners.promoapp.bnForm}
    }
    


(function (win) {
    /* Variables */
    var loJa = "";
    var deVice = "";
    var tipRqu = "";
    var dieizaumDeProg = {};
    window.objJson = '';
    const atuBu = document.querySelector("#butAtua");
    const reaPr = document.querySelector("#butProg");
    const ediPr = document.querySelector("#butEditp");
    const mainDiv = document.querySelector(".row");
    const headBann = document.querySelector("#HagaUm");
    var token = Math.random().toString(36).substr(2, 8) + "-" + Math.random().toString(36).substr(2, 4) + "-" + Math.random().toString(36).substr(2, 4) + "-" + Math.random().toString(36).substr(2, 4) + "-" + Math.random().toString(36).substr(2, 12)


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
        tipRqu = "Atualizar"
        mainDiv.innerHTML = infoStores.atuForma;
        var storEso = document.querySelector("#storeso");
        var deviCeso = document.querySelector("#deviceso");
        var bannereSo = document.querySelector("#bannereseso");
        storEso.addEventListener("change", function () { enabFie() });
        deviCeso.addEventListener("change", function () { enabFie() });
        bannereSo.addEventListener("change", function () { fazGetModDesk() });
    }
    function loadProgBann() {
        tipRqu = "Programar"
        mainDiv.innerHTML = infoStores.atuForma;
        var storEso = document.querySelector("#storeso");
        var deviCeso = document.querySelector("#deviceso");
        var bannereSo = document.querySelector("#bannereseso");
        storEso.addEventListener("change", function () { enabFie() });
        deviCeso.addEventListener("change", function () { enabFie() });
        bannereSo.addEventListener("change", function () { geraCamposProg() });
    }
    function loadEditProg() {
        tipRqu = "EditProg"
        mainDiv.innerHTML = infoStores.editForma;
        var idBann = document.querySelector("#idDoBanner");
        var butCons = document.querySelector("#buttEditCons");
        idBann.addEventListener("change", function(){ consultaBanner()});
        butCons.addEventListener("click", function(){ defineType() });
    }

    function consultaBanner() {
        var idBann = document.querySelector("#idDoBanner");
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log("DEU CERTO o get PORRA!");
                objJson = JSON.parse(this.responseText);

            }
        });
        xhr.open("GET", "https://prd-ingress.netshoes.io/banner/admin/" + idBann.value);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("Postman-Token", token);
        xhr.send(data);        

    }

    function defineType() {
        if (objJson.data.type === "IMAGE_LIST") {
            definePreencheFormularioComMaisCampos();
        } else {
            definePreencheFormularioComMenosCampos();
        }
    }

    function definePreencheFormularioComMaisCampos() {
        var noodess = document.querySelector('#outraJossa');
        noodess.innerHTML = infoStores.deskProgFormaComList;
        leOJayZon();
    }

    function leOJayZon() {
        document.querySelector("#datainicio").value = objJson.criteria.startDate.split("T")[0];
        document.querySelector("#horainicio").value = objJson.criteria.startDate.split("T")[1].split(":")[0] + ":" + objJson.criteria.startDate.split("T")[1].split(":")[1];
        document.querySelector("#datafim").value = objJson.criteria.endDate.split("T")[0];
        document.querySelector("#horafim").value = objJson.criteria.endDate.split("T")[1].split(":")[0] + ":" + objJson.criteria.endDate.split("T")[1].split(":")[1];
        document.querySelector("#ibagemProgImg1").value = objJson.data.images[0].urlImage;
        document.querySelector("#ibagemProgUrl1").value = objJson.data.images[0].urlTarget;
        if (objJson.data.images[1] != undefined){
        document.querySelector("#ibagemProgImg2").value = objJson.data.images[1].urlImage;
        document.querySelector("#ibagemProgUrl2").value = objJson.data.images[1].urlTarget;
        }
        if (objJson.data.images[2] != undefined){
        document.querySelector("#ibagemProgImg3").value = objJson.data.images[2].urlImage;
        document.querySelector("#ibagemProgUrl3").value = objJson.data.images[2].urlTarget;
        }

        buttPreProg.addEventListener("click", function () {
            fazPutEditProg();     
        })
    }





    function fazPutEditProg() {
        atualizaJsonDeEdicaoIn();
        atualizaJsonDeEdicaoFi();
        atualizaJsonEdicaoImg();
        var data = JSON.stringify(objJson);
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log("Deu certo a PUTA.. digo o PUT Porra!")
                alert("BANNER ATUALIZADO COM SUCESSO!");
            }
        });

        xhr.open("PUT", "https://prd-ingress.netshoes.io/banner/admin/" + objJson.uuid);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("Postman-Token", token);
        xhr.send(data);
    }







    function atualizaJsonDeEdicaoIn(){
        console.log("inicio")
        if (document.querySelector("#horainicio").value.split(":")[0] == 23) {
            var horaCertaHaHaHA = "02";
            var datinicio = document.getElementById('datainicio').value;
            var date = new Date(datinicio);
            var newdate = new Date(date); 
            newdate.setDate(newdate.getUTCDate())
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            objJson.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
        } else
        if (document.querySelector("#horainicio").value.split(":")[0] == 22) {
            var horaCertaHaHaHA = "01";
            var datinicio = document.getElementById('datainicio').value;
            var date = new Date(datinicio);
            var newdate = new Date(date); 
            newdate.setDate(newdate.getUTCDate())
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            objJson.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
        } else
        if (document.querySelector("#horainicio").value.split(":")[0] == 21) {
            var horaCertaHaHaHA = "00";
            var datinicio = document.getElementById('datainicio').value;
            var date = new Date(datinicio);
            var newdate = new Date(date); 
            newdate.setDate(newdate.getUTCDate())
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            objJson.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
        } else  {
            var horaCertaHaHaHA =  ("0" + (Number(document.querySelector("#horainicio").value.split(":")[0]) + 3)).slice(-2);
            var datinicio = document.getElementById('datainicio').value;
            var date = new Date(datinicio);
            var newdate = new Date(date); 
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            objJson.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
        }
        console.log(objJson.criteria.startDate);
    }

    function atualizaJsonDeEdicaoFi(){
        console.log("fim")
        if (document.querySelector("#horafim").value.split(":")[0] == 23) {
            var horaCertaHaHaHA = "02";
            var datfim = document.getElementById('datafim').value;
            var date = new Date(datfim);
            var newdate = new Date(date); 
            newdate.setDate(newdate.getUTCDate())
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            objJson.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
        } else
        if (document.querySelector("#horafim").value.split(":")[0] == 22) {
            var horaCertaHaHaHA = "01";
            var datfim = document.getElementById('datafim').value;
            var date = new Date(datfim);
            var newdate = new Date(date); 
            newdate.setDate(newdate.getUTCDate())
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            objJson.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
        } else
        if (document.querySelector("#horafim").value.split(":")[0] == 21) {
            var horaCertaHaHaHA = "00";
            var datfim = document.getElementById('datafim').value;
            var date = new Date(datfim);
            var newdate = new Date(date); 
            newdate.setDate(newdate.getUTCDate())
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            objJson.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
        } else  {
            var datfim = document.getElementById('datafim').value;
            var date = new Date(datfim);
            var newdate = new Date(date); 
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            objJson.criteria.endDate = y + '-' + mm + '-' + dd + "T" + document.querySelector("#horafim").value + ":01";
        }
        console.log(objJson.criteria.endDate);
    }

    function atualizaJsonEdicaoImg() {
        if (objJson.data.type === "IMAGE_LIST") {
            objJson.data.images[0].urlImage = document.querySelector("#ibagemProgImg1").value;
            objJson.data.images[0].urlTarget = document.querySelector("#ibagemProgUrl1").value;
            if (document.querySelector("#ibagemProgImg2").value != ""){
            objJson.data.images[1].urlImage = document.querySelector("#ibagemProgImg2").value;
            objJson.data.images[1].urlTarget = document.querySelector("#ibagemProgUrl2").value;
            } else if (document.querySelector("#ibagemProgImg2").value != ""){
            objJson.data.images[2].urlImage = document.querySelector("#ibagemProgImg3").value;
            objJson.data.images[2].urlTarget = document.querySelector("#ibagemProgUrl3").value;
            }
        } else {
            objJson.data.urlImage = document.querySelector("#ibagemProgImg").value;
            objJson.data.urlTarget = document.querySelector("#ibagemProgUrl").value;
        }
    }

    function definePreencheFormularioComMenosCampos() {
        var noodess = document.querySelector('#outraJossa');
        noodess.innerHTML = infoStores.deskProgFormaSemList;
        leJaZon();
    }

    function leJaZon() {
        document.querySelector("#datainicio").value = objJson.criteria.startDate.split("T")[0];
        document.querySelector("#horainicio").value = objJson.criteria.startDate.split("T")[1].split(":")[0] + ":" + objJson.criteria.startDate.split("T")[1].split(":")[1];
        document.querySelector("#datafim").value = objJson.criteria.endDate.split("T")[0];
        document.querySelector("#horafim").value = objJson.criteria.endDate.split("T")[1].split(":")[0] + ":" + objJson.criteria.endDate.split("T")[1].split(":")[1];
        document.querySelector("#ibagemProgImg").value = objJson.data.urlImage;
        document.querySelector("#ibagemProgUrl").value = objJson.data.urlTarget;
        buttPreProg.addEventListener("click", function () {
            fazPutEditProg();     
        })
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
        if (tipRqu === "Atualizar") {
            return fazFormAtu();
        }
        if (tipRqu === "Programar") {
            return fazFormProg();
        }
        if (tipRqu === "EditProg") {
            return "Tá curioso né? hehehehe, Aguarde, este aind está sendo desenvolvido"
        }

    }

    function geraCamposProg() {
        bannereseso.disabled = true;
        var dJossa = document.querySelector(".jossa");
        dJossa.classList.remove("escondida");
        if (bannereseso.value === "fulls123" || bannereseso.value === "full1abc" || bannereseso.value === "full2abc" || bannereseso.value === "full3abc" || bannereseso.value === "deals123") {
            dJossa.innerHTML = infoStores.deskProgFormaComList
        } else { dJossa.innerHTML = infoStores.deskProgFormaSemList }

        buttPreProg.addEventListener("click", function () {
            fazPostProg();     
        })
    }


    function fazFormProg() {
        if (storeso.value === "netshoes" && deviceso.value === "desktop") { bannereseso.innerHTML = infoStores.netshoes.progFormato.desktop }
        if (storeso.value === "netshoes" && deviceso.value === "mobile") { bannereseso.innerHTML = infoStores.netshoes.progFormato.mobile }
        if (storeso.value === "netshoes" && deviceso.value === "app") { bannereseso.innerHTML = infoStores.netshoes.progFormato.app }
        if (storeso.value === "netshoes" && deviceso.value === "promoapp") { bannereseso.innerHTML = infoStores.netshoes.progFormato.promoapp }
    }

    function constroiJsontDeskNetshoes() {
        console.log("Desktop");
        var botaoPre = document.getElementById("buttPreProg");
        if (datainicio.value === "" || horainicio.value === "" || datafim.value === "" || horafim.value === "") { alert("Por favor verificar as datas e a hora dos banners!") } else {
            //data inicio
            var dataIni = document.getElementById("datainicio").value
            var horaIni = document.getElementById("horainicio").value
            var dataTrat = dataIni.split("/", 3)[0] + "T";
            var horaTrat = horaIni + ":01";
            var dataEhoraIni = dataTrat + horaTrat;
            var dataInicial = dataEhoraIni.toString();

            //datafim
            var dataFim = document.getElementById("datafim").value
            var horaFim = document.getElementById("horafim").value
            var dataTratFim = dataFim.split("/", 3)[0] + "T";
            var horaTratFim = horaFim + ":01";
            var dataEhoraFim = dataTratFim + horaTratFim;
            var dataFinal = dataEhoraFim.toString();

            //define o JSON
            if (bannereseso.value === "fulls123") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.desktop.fulls123;
                var storageBanner1 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "Netshoes"
                };
                var storageBanner2 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "Netshoes"
                };
                var storageBanner3 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "Netshoes"
                };
                if (ibagemProgImg1.value === "") {
                    alert("Preencha ao menos a imagem do Banner 1");
                } else {
                    storageBanner1.urlImage = ibagemProgImg1.value;
                    storageBanner1.urlTarget = ibagemProgUrl1.value;
                    dieizaumDeProg.data.images.push(storageBanner1);
                    if (ibagemProgImg2.value !== "") {
                        storageBanner2.urlImage = ibagemProgImg2.value;
                        storageBanner2.urlTarget = ibagemProgUrl2.value;
                        dieizaumDeProg.data.images.push(storageBanner2);
                        if (ibagemProgImg3.value !== "") {
                            storageBanner3.urlImage = ibagemProgImg3.value;
                            storageBanner3.urlTarget = ibagemProgUrl3.value;
                            dieizaumDeProg.data.images.push(storageBanner3);
                        }
                    }
                }
                
            } else if (bannereseso.value === "trio1" || bannereseso.value === "trio2" || bannereseso.value === "trio3" || bannereseso.value === "trio4" || bannereseso.value === "trio5" || bannereseso.value === "trio6" || bannereseso.value === "trio7" || bannereseso.value === "trio8" || bannereseso.value === "trio9") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.desktop.trios;
                if (bannereseso.value === "trio1") { dieizaumDeProg.id = "home-gamma-triple-line1-rectangle-0" }
                if (bannereseso.value === "trio2") { dieizaumDeProg.id = "home-gamma-triple-line1-rectangle-1" }
                if (bannereseso.value === "trio3") { dieizaumDeProg.id = "home-gamma-triple-line1-rectangle-2" }
                if (bannereseso.value === "trio4") { dieizaumDeProg.id = "home-gamma-triple-line2-rectangle-0" }
                if (bannereseso.value === "trio5") { dieizaumDeProg.id = "home-gamma-triple-line2-rectangle-1" }
                if (bannereseso.value === "trio6") { dieizaumDeProg.id = "home-gamma-triple-line2-rectangle-2" }
                if (bannereseso.value === "trio7") { dieizaumDeProg.id = "home-gamma-triple-line3-rectangle-0" }
                if (bannereseso.value === "trio8") { dieizaumDeProg.id = "home-gamma-triple-line3-rectangle-1" }
                if (bannereseso.value === "trio9") { dieizaumDeProg.id = "home-gamma-triple-line3-rectangle-2" }
                dieizaumDeProg.data.urlImage = ibagemProgImg.value
                dieizaumDeProg.data.urlTarget = ibagemProgUrl.value
            } else {
                dieizaumDeProg = infoStores.netshoes.bannersProg.desktop.horizontal;
                dieizaumDeProg.data.urlImage = ibagemProgImg.value
                dieizaumDeProg.data.urlTarget = ibagemProgUrl.value
            }

            console.log(dieizaumDeProg);

            //data inicio
            if (document.querySelector("#horainicio").value.split(":")[0] == 23) {
                var horaCertaHaHaHA = "02";
                var datinicio = document.getElementById('datainicio').value;
                var date = new Date(datinicio);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
            } else
            if (document.querySelector("#horainicio").value.split(":")[0] == 22) {
                var horaCertaHaHaHA = "01";
                var datinicio = document.getElementById('datainicio').value;
                var date = new Date(datinicio);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
            } else
            if (document.querySelector("#horainicio").value.split(":")[0] == 21) {
                var horaCertaHaHaHA = "00";
                var datinicio = document.getElementById('datainicio').value;
                var date = new Date(datinicio);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
            } else  {
                var horaCertaHaHaHA =  ("0" + (Number(document.querySelector("#horainicio").value.split(":")[0]) + 3)).slice(-2);
                var datinicio = document.getElementById('datainicio').value;
                var date = new Date(datinicio);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate() - 1);
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
            }

            //data Fim
            if (document.querySelector("#horafim").value.split(":")[0] == 23) {
                var horaCertaHaHaHA = "02";
                var datfim = document.getElementById('datafim').value;
                var date = new Date(datfim);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
            } else
            if (document.querySelector("#horafim").value.split(":")[0] == 22) {
                var horaCertaHaHaHA = "01";
                var datfim = document.getElementById('datafim').value;
                var date = new Date(datfim);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
            } else
            if (document.querySelector("#horafim").value.split(":")[0] == 21) {
                var horaCertaHaHaHA = "00";
                var datfim = document.getElementById('datafim').value;
                var date = new Date(datfim);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
            } else  {
                var datfim = document.getElementById('datafim').value;
                var date = new Date(datfim);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate() - 1);
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + document.querySelector("#horafim").value + ":01";
            }






            console.log(dieizaumDeProg.criteria.startDate);
            window.progjson = JSON.stringify(dieizaumDeProg);
            console.log(progjson);
            botaoPre.disabled = true;
        }

    }

    function constroiJsontMobNetshoes() {
        console.log("Mobile");
        var botaoPre = document.getElementById("buttPreProg");
        if (datainicio.value === "" || horainicio.value === "" || datafim.value === "" || horafim.value === "") { alert("Por favor verificar as datas e a hora dos banners!") } else {
            //data inicio
            var dataIni = document.getElementById("datainicio").value
            var horaIni = document.getElementById("horainicio").value
            var dataTrat = dataIni.split("/", 3)[0] + "T";
            var horaTrat = horaIni + ":01";
            var dataEhoraIni = dataTrat + horaTrat;
            var dataInicial = dataEhoraIni.toString();

            //datafim
            var dataFim = document.getElementById("datafim").value
            var horaFim = document.getElementById("horafim").value
            var dataTratFim = dataFim.split("/", 3)[0] + "T";
            var horaTratFim = horaFim + ":01";
            var dataEhoraFim = dataTratFim + horaTratFim;
            var dataFinal = dataEhoraFim.toString();

            //define o JSON
            if (bannereseso.value === "full1abc") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.mobile.full1abc;
                var storageBanner1 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "Netshoes"
                };
                var storageBanner2 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "Netshoes"
                };
                var storageBanner3 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "Netshoes"
                };
                if (ibagemProgImg1.value === "") {
                    alert("Preencha ao menos a imagem do Banner 1");
                } else {
                    storageBanner1.urlImage = ibagemProgImg1.value;
                    storageBanner1.urlTarget = ibagemProgUrl1.value;
                    dieizaumDeProg.data.images.push(storageBanner1);
                    if (ibagemProgImg2.value !== "") {
                        storageBanner2.urlImage = ibagemProgImg2.value;
                        storageBanner2.urlTarget = ibagemProgUrl2.value;
                        dieizaumDeProg.data.images.push(storageBanner2);
                        if (ibagemProgImg3.value !== "") {
                            storageBanner3.urlImage = ibagemProgImg3.value;
                            storageBanner3.urlTarget = ibagemProgUrl3.value;
                            dieizaumDeProg.data.images.push(storageBanner3);
                        }
                    }
                }

            } else if (bannereseso.value === "full2abc") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.mobile.full2abc;
                var storageBanner1 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "Netshoes"
                };
                var storageBanner2 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "Netshoes"
                };
                var storageBanner3 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "Netshoes"
                };
                if (ibagemProgImg1.value === "") {
                    alert("Preencha ao menos a imagem do Banner 1");
                } else {
                    storageBanner1.urlImage = ibagemProgImg1.value;
                    storageBanner1.urlTarget = ibagemProgUrl1.value;
                    dieizaumDeProg.data.images.push(storageBanner1);
                    if (ibagemProgImg2.value !== "") {
                        storageBanner2.urlImage = ibagemProgImg2.value;
                        storageBanner2.urlTarget = ibagemProgUrl2.value;
                        dieizaumDeProg.data.images.push(storageBanner2);
                        if (ibagemProgImg3.value !== "") {
                            storageBanner3.urlImage = ibagemProgImg3.value;
                            storageBanner3.urlTarget = ibagemProgUrl3.value;
                            dieizaumDeProg.data.images.push(storageBanner3);
                        }
                    }
                }

            } else if (bannereseso.value === "full3abc") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.mobile.full3abc;
                var storageBanner1 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "Netshoes"
                };
                var storageBanner2 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "Netshoes"
                };
                var storageBanner3 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "Netshoes"
                };
                if (ibagemProgImg1.value === "") {
                    alert("Preencha ao menos a imagem do Banner 1");
                } else {
                    storageBanner1.urlImage = ibagemProgImg1.value;
                    storageBanner1.urlTarget = ibagemProgUrl1.value;
                    dieizaumDeProg.data.images.push(storageBanner1);
                    if (ibagemProgImg2.value !== "") {
                        storageBanner2.urlImage = ibagemProgImg2.value;
                        storageBanner2.urlTarget = ibagemProgUrl2.value;
                        dieizaumDeProg.data.images.push(storageBanner2);
                        if (ibagemProgImg3.value !== "") {
                            storageBanner3.urlImage = ibagemProgImg3.value;
                            storageBanner3.urlTarget = ibagemProgUrl3.value;
                            dieizaumDeProg.data.images.push(storageBanner3);
                        }
                    }
                }

            } else if (bannereseso.value === "deals123") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.mobile.deals123;
                var storageBanner1 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "Netshoes"
                };
                var storageBanner2 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "Netshoes"
                };
                var storageBanner3 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "Netshoes"
                };
                if (ibagemProgImg1.value === "") {
                    alert("Preencha ao menos a imagem do Banner 1");
                } else {
                    storageBanner1.urlImage = ibagemProgImg1.value;
                    storageBanner1.urlTarget = ibagemProgUrl1.value;
                    dieizaumDeProg.data.images.push(storageBanner1);
                    if (ibagemProgImg2.value !== "") {
                        storageBanner2.urlImage = ibagemProgImg2.value;
                        storageBanner2.urlTarget = ibagemProgUrl2.value;
                        dieizaumDeProg.data.images.push(storageBanner2);
                        if (ibagemProgImg3.value !== "") {
                            storageBanner3.urlImage = ibagemProgImg3.value;
                            storageBanner3.urlTarget = ibagemProgUrl3.value;
                            dieizaumDeProg.data.images.push(storageBanner3);
                        }
                    }
                }

            }

            console.log(dieizaumDeProg);
            //data inicio
            if (document.querySelector("#horainicio").value.split(":")[0] == 23) {
                var horaCertaHaHaHA = "02";
                var datinicio = document.getElementById('datainicio').value;
                var date = new Date(datinicio);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
            } else
            if (document.querySelector("#horainicio").value.split(":")[0] == 22) {
                var horaCertaHaHaHA = "01";
                var datinicio = document.getElementById('datainicio').value;
                var date = new Date(datinicio);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
            } else
            if (document.querySelector("#horainicio").value.split(":")[0] == 21) {
                var horaCertaHaHaHA = "00";
                var datinicio = document.getElementById('datainicio').value;
                var date = new Date(datinicio);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
            } else  {
                var horaCertaHaHaHA =  ("0" + (Number(document.querySelector("#horainicio").value.split(":")[0]) + 3)).slice(-2);
                var datinicio = document.getElementById('datainicio').value;
                var date = new Date(datinicio);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate() - 1);
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
            }

            //data Fim
            if (document.querySelector("#horafim").value.split(":")[0] == 23) {
                var horaCertaHaHaHA = "02";
                var datfim = document.getElementById('datafim').value;
                var date = new Date(datfim);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
            } else
            if (document.querySelector("#horafim").value.split(":")[0] == 22) {
                var horaCertaHaHaHA = "01";
                var datfim = document.getElementById('datafim').value;
                var date = new Date(datfim);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
            } else
            if (document.querySelector("#horafim").value.split(":")[0] == 21) {
                var horaCertaHaHaHA = "00";
                var datfim = document.getElementById('datafim').value;
                var date = new Date(datfim);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
            } else  {
                var datfim = document.getElementById('datafim').value;
                var date = new Date(datfim);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate() - 1);
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + document.querySelector("#horafim").value + ":01";
            }
            console.log(dieizaumDeProg.criteria.startDate);
            window.progjson = JSON.stringify(dieizaumDeProg);
            console.log(progjson);
            botaoPre.disabled = true;
        }
    }

    function constroiJsontAppNetshoes() {
        console.log("APP");
        var botaoPre = document.getElementById("buttPreProg");
        if (datainicio.value === "" || horainicio.value === "" || datafim.value === "" || horafim.value === "") { alert("Por favor verificar as datas e a hora dos banners!") } else {
            //data inicio
            var dataIni = document.getElementById("datainicio").value
            var horaIni = document.getElementById("horainicio").value
            var dataTrat = dataIni.split("/", 3)[0] + "T";
            var horaTrat = horaIni + ":01";
            var dataEhoraIni = dataTrat + horaTrat;
            var dataInicial = dataEhoraIni.toString();

            //datafim
            var dataFim = document.getElementById("datafim").value
            var horaFim = document.getElementById("horafim").value
            var dataTratFim = dataFim.split("/", 3)[0] + "T";
            var horaTratFim = horaFim + ":01";
            var dataEhoraFim = dataTratFim + horaTratFim;
            var dataFinal = dataEhoraFim.toString();

            if (bannereseso.value === "full1" || bannereseso.value === "full2" || bannereseso.value === "full3" || bannereseso.value === "full4" || bannereseso.value === "full5" || bannereseso.value === "full6") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.app.full;
                if (bannereseso.value === "full1") { dieizaumDeProg.id = "FullBannerApp1" }
                if (bannereseso.value === "full2") { dieizaumDeProg.id = "FullBannerApp2" }
                if (bannereseso.value === "full3") { dieizaumDeProg.id = "FullBannerApp3" }
                if (bannereseso.value === "full4") { dieizaumDeProg.id = "FullBannerApp4" }
                if (bannereseso.value === "full5") { dieizaumDeProg.id = "FullBannerApp5" }
                if (bannereseso.value === "full6") { dieizaumDeProg.id = "FullBannerApp6" }

                dieizaumDeProg.data.urlImage = ibagemProgImg.value
                dieizaumDeProg.data.urlTarget = ibagemProgUrl.value
            }
            console.log(dieizaumDeProg);
            //data inicio
            if (document.querySelector("#horainicio").value.split(":")[0] == 23) {
                var horaCertaHaHaHA = "02";
                var datinicio = document.getElementById('datainicio').value;
                var date = new Date(datinicio);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
            } else
            if (document.querySelector("#horainicio").value.split(":")[0] == 22) {
                var horaCertaHaHaHA = "01";
                var datinicio = document.getElementById('datainicio').value;
                var date = new Date(datinicio);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
            } else
            if (document.querySelector("#horainicio").value.split(":")[0] == 21) {
                var horaCertaHaHaHA = "00";
                var datinicio = document.getElementById('datainicio').value;
                var date = new Date(datinicio);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
            } else  {
                var horaCertaHaHaHA =  ("0" + (Number(document.querySelector("#horainicio").value.split(":")[0]) + 3)).slice(-2);
                var datinicio = document.getElementById('datainicio').value;
                var date = new Date(datinicio);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate() - 1);
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
            }

            //data Fim
            if (document.querySelector("#horafim").value.split(":")[0] == 23) {
                var horaCertaHaHaHA = "02";
                var datfim = document.getElementById('datafim').value;
                var date = new Date(datfim);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
            } else
            if (document.querySelector("#horafim").value.split(":")[0] == 22) {
                var horaCertaHaHaHA = "01";
                var datfim = document.getElementById('datafim').value;
                var date = new Date(datfim);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
            } else
            if (document.querySelector("#horafim").value.split(":")[0] == 21) {
                var horaCertaHaHaHA = "00";
                var datfim = document.getElementById('datafim').value;
                var date = new Date(datfim);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
            } else  {
                var datfim = document.getElementById('datafim').value;
                var date = new Date(datfim);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate() - 1);
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + document.querySelector("#horafim").value + ":01";
            }
            console.log(dieizaumDeProg.criteria.startDate);
            window.progjson = JSON.stringify(dieizaumDeProg);
            console.log(progjson);
            botaoPre.disabled = true;
        }
    }

    function constroiJsontPromoappNetshoes() {
        console.log("PROMOAPP");
        var botaoPre = document.getElementById("buttPreProg");
        if (datainicio.value === "" || horainicio.value === "" || datafim.value === "" || horafim.value === "") { alert("Por favor verificar as datas e a hora dos banners!") } else {
            //data inicio
            var dataIni = document.getElementById("datainicio").value
            var horaIni = document.getElementById("horainicio").value
            var dataTrat = dataIni.split("/", 3)[0] + "T";
            var horaTrat = horaIni + ":01";
            var dataEhoraIni = dataTrat + horaTrat;
            var dataInicial = dataEhoraIni.toString();

            //datafim
            var dataFim = document.getElementById("datafim").value
            var horaFim = document.getElementById("horafim").value
            var dataTratFim = dataFim.split("/", 3)[0] + "T";
            var horaTratFim = horaFim + ":01";
            var dataEhoraFim = dataTratFim + horaTratFim;
            var dataFinal = dataEhoraFim.toString();

            if (bannereseso.value === "full1" || bannereseso.value === "full2" || bannereseso.value === "full3" || bannereseso.value === "full4" || bannereseso.value === "full5" || bannereseso.value === "full6") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.promoapp.full;
                if (bannereseso.value === "full1") { dieizaumDeProg.id = "FullBannerApp1" }
                if (bannereseso.value === "full2") { dieizaumDeProg.id = "FullBannerApp2" }
                if (bannereseso.value === "full3") { dieizaumDeProg.id = "FullBannerApp3" }
                if (bannereseso.value === "full4") { dieizaumDeProg.id = "FullBannerApp4" }
                if (bannereseso.value === "full5") { dieizaumDeProg.id = "FullBannerApp5" }
                if (bannereseso.value === "full6") { dieizaumDeProg.id = "FullBannerApp6" }

                dieizaumDeProg.data.urlImage = ibagemProgImg.value
                dieizaumDeProg.data.urlTarget = ibagemProgUrl.value
            }
            console.log(dieizaumDeProg);
            //data inicio
            if (document.querySelector("#horainicio").value.split(":")[0] == 23) {
                var horaCertaHaHaHA = "02";
                var datinicio = document.getElementById('datainicio').value;
                var date = new Date(datinicio);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
            } else
            if (document.querySelector("#horainicio").value.split(":")[0] == 22) {
                var horaCertaHaHaHA = "01";
                var datinicio = document.getElementById('datainicio').value;
                var date = new Date(datinicio);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
            } else
            if (document.querySelector("#horainicio").value.split(":")[0] == 21) {
                var horaCertaHaHaHA = "00";
                var datinicio = document.getElementById('datainicio').value;
                var date = new Date(datinicio);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
            } else  {
                var horaCertaHaHaHA =  ("0" + (Number(document.querySelector("#horainicio").value.split(":")[0]) + 3)).slice(-2);
                var datinicio = document.getElementById('datainicio').value;
                var date = new Date(datinicio);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate() - 1);
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";
            }

            //data Fim
            if (document.querySelector("#horafim").value.split(":")[0] == 23) {
                var horaCertaHaHaHA = "02";
                var datfim = document.getElementById('datafim').value;
                var date = new Date(datfim);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
            } else
            if (document.querySelector("#horafim").value.split(":")[0] == 22) {
                var horaCertaHaHaHA = "01";
                var datfim = document.getElementById('datafim').value;
                var date = new Date(datfim);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
            } else
            if (document.querySelector("#horafim").value.split(":")[0] == 21) {
                var horaCertaHaHaHA = "00";
                var datfim = document.getElementById('datafim').value;
                var date = new Date(datfim);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate())
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
            } else  {
                var datfim = document.getElementById('datafim').value;
                var date = new Date(datfim);
                var newdate = new Date(date); 
                newdate.setDate(newdate.getUTCDate() - 1);
                var dd = ("0" + newdate.getUTCDate()).slice(-2);
                var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
                var y = newdate.getUTCFullYear();
                dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + document.querySelector("#horafim").value + ":01";
            }
            console.log(dieizaumDeProg.criteria.startDate);
            window.progjson = JSON.stringify(dieizaumDeProg);
            console.log(progjson);
            botaoPre.disabled = true;
        }
    }


    function fazPostProg() {
        if (deviceso.value === "desktop") { constroiJsontDeskNetshoes(); }
        if (deviceso.value === "mobile") { constroiJsontMobNetshoes(); }
        if (deviceso.value === "app") { constroiJsontAppNetshoes(); }
        if (deviceso.value === "promoapp") { constroiJsontPromoappNetshoes(); }
        var datlokoa = progjson;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4 && this.status === 201) {
                console.log(this.responseText);
                var logues = JSON.parse(this.responseText)
                var retorno = document.querySelector(".buttonsss");
                retorno.innerHTML = "<p class='pAntesDoUuid'>Banner Programado! Por favor guarde este id para a manutenção dos banners: </p><br><p class='uuidProg'>" + logues.uuid + "</p>"
            }
        });
        xhr.open("POST", "https://prd-ingress.netshoes.io/banner/admin");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("Postman-Token", token);
        xhr.send(datlokoa);
    }









    /* ************************ Inicio da parte "Atualização" **************************     
    ┏━┓┈┈╭━━━━╮┏━┓┈┈
    ┃╱┃┈┈┃╱╭╮╱┃┃╱┃┈┈
    ┃╱┗━┓┃╱┃┃╱┃┃╱┗━┓
    ┃╱╱╱┃┃╱╰╯╱┃┃╱╱╱┃
    ┗━━━┛╰━━━━╯┗━━━┛  
    ************************************************************************************** */

    function fazFormAtu() {
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
        const botaoPre = document.querySelector("#buttPre");
        const botaoAtu = document.querySelector("#buttAtu");
        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log("DEU CERTO o get PORRA!");
                objJson = JSON.parse(this.responseText);
                preencheCampos();
            }
        });
        xhr.open("GET", "https://prd-ingress.netshoes.io/banner/admin/" + defineTudoNessaPorra());
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("Postman-Token", token);
        xhr.send(data);
        botaoPre.addEventListener("click", function () {
            habilitaAtualiza();
        })
    }

    function geraCampos() {
        var dJossa = document.querySelector(".jossa");
        dJossa.classList.remove("escondida");
        dJossa.innerHTML = infoStores.netshoes.banners.desktop.deskImgList
    }

    function estaticoLojas() {
        if (storeso.value === "netshoes") { return "https://static.netshoes.com.br" }
        if (storeso.value === "netshoesar") { return "https://static.netshoes.com.ar" }
        if (storeso.value === "netshoesmx") { return "https://static.netshoes.com.mx" }
        if (storeso.value === "zattini") { return "https://static.zattini.com.br" }
        if (storeso.value === "shoestock") { return "https://static.shoestock.com.br" }
    }

    function preencheCampos() {
        var imagem = document.querySelector(".ibagem a img")
        var link = document.querySelector(".ibagem a")

        if (deviceso.value === "app" || deviceso.value === "promoapp") {
            if (storeso.value === "netshoesar" || storeso.value === "netshoesmx") {
                imagem.setAttribute("src", objJson.data.urlImage)
                link.setAttribute("href", objJson.data.urlTarget)
                ibagemImg.value = objJson.data.urlImage
                ibagemUrl.value = objJson.data.urlTarget
            } else {
                imagem.setAttribute("src", estaticoLojas() + objJson.data.urlImage)
                link.setAttribute("href", objJson.data.urlTarget)
                ibagemImg.value = objJson.data.urlImage
                ibagemUrl.value = objJson.data.urlTarget
            }
        } else
            if (objJson.data.type === "IMAGE_LIST") {
                imagem.setAttribute("src", objJson.data.images[defNume()].urlImage)
                link.setAttribute("href", objJson.data.images[defNume()].urlTarget)
                ibagemImg.value = objJson.data.images[defNume()].urlImage
                ibagemUrl.value = objJson.data.images[defNume()].urlTarget
            }
            else {
                imagem.setAttribute("src", objJson.data.urlImage)
                link.setAttribute("href", objJson.data.urlTarget)
                ibagemImg.value = objJson.data.urlImage
                ibagemUrl.value = objJson.data.urlTarget
            }
    }

    function defNume() {
        if (bannereseso.value === "full1" || bannereseso.value === "deal1" || bannereseso.value === "full1a" || bannereseso.value === "botao1" || bannereseso.value === "full2a" || bannereseso.value === "full3a" || bannereseso.value === "deal1" || bannereseso.value === "triplo1" || bannereseso.value === "triplo4" || bannereseso.value === "horizontal") {
            return 0
        } else
            if (bannereseso.value === "full2" || bannereseso.value === "deal2" || bannereseso.value === "full1b" || bannereseso.value === "botao2" || bannereseso.value === "full2b" || bannereseso.value === "full3b" || bannereseso.value === "deal2" || bannereseso.value === "triplo2" || bannereseso.value === "triplo5") {
                return 1
            } else
                if (bannereseso.value === "full3" || bannereseso.value === "deal3" || bannereseso.value === "full1c" || bannereseso.value === "botao3" || bannereseso.value === "full2c" || bannereseso.value === "full3c" || bannereseso.value === "deal3" || bannereseso.value === "triplo3" || bannereseso.value === "triplo6") {
                    return 2
                } else
                    if (bannereseso.value === "full4" || bannereseso.value === "deal4" || bannereseso.value === "full1d" || bannereseso.value === "botao4" || bannereseso.value === "full2d" || bannereseso.value === "full3d" || bannereseso.value === "deal4" || bannereseso.value === "triplo7" || bannereseso.value === "triplo7") {
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
                return "1a1c0a76-bdee-40d9-aed2-1396a9d44a22"
                break;
            case "full2":
                return "8cc0b6b2-4494-47aa-8a36-3ef3ad0fc4e7"
                break;
            case "full3":
                return "18dd95ed-54b0-4716-87c9-28c6214b4eba"
                break;
            case "full4":
                return "b8e06c01-e4e9-47cd-a774-84f394a5f66b"
                break;
            case "full5":
                return "486d1eab-f0eb-40b7-96b7-3a5b5cbe044b"
                break;
            case "full6":
                return "e46f639b-92db-40f4-9c76-1fffbc9343cb"
                break;

            default: alert("Erro! Contate a Opec!")
                break;
        }
    }
    function defBannerNetshoesPromoapp() {
        var bann = document.querySelector("#bannereseso");

        switch (bann.value) {
            case "full1":
                return "632fc42a-a49b-467b-9889-01ca1c2b3be5"
                break;
            case "full2":
                return "44b3ab5f-e9c0-4880-92be-a2a10e7f7512"
                break;
            case "full3":
                return "ffeb1f08-31ea-4e3b-92e8-13e4dc183496"
                break;
            case "full4":
                return "92cb06cf-0c3e-4a2c-8979-91b2dcd199f2"
                break;
            case "full5":
                return "8c6bbddb-28a2-4ee2-ae03-494683211e04"
                break;
            case "full6":
                return "6ee89a5e-4944-49d1-a657-78fdfc5b7c99"
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
                return "cb22edb0-b0ed-420e-b7c8-852270df52de"
                break;
            case "full2":
                return "a729642f-0791-447e-beb8-93ebda06c64b"
                break;
            case "full3":
                return "effc8c73-9273-46f0-8c1f-13d8f5c47cc7"
                break;
            case "full4":
                return "cc0072c7-8e8b-43d3-af3d-e104fabeca74"
                break;
            case "full5":
                return "4c4af435-92d7-43d8-a930-849b2b22a17d"
                break;
            case "full6":
                return "20aff126-ee05-473e-8ed2-eea56def0fdf"
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
                return "6667017c-679e-4142-99b0-38deedddef63"
                break;
            case "full2":
                return "6667017c-679e-4142-99b0-38deedddef63"
                break;
            case "full3":
                return "6667017c-679e-4142-99b0-38deedddef63"
                break;
            case "deal1":
                return "cf60ccce-0acc-4e8c-9062-0984a940dfc1"
                break;
            case "deal2":
                return "cf60ccce-0acc-4e8c-9062-0984a940dfc1"
                break;
            case "deal3":
                return "cf60ccce-0acc-4e8c-9062-0984a940dfc1"
                break;
            case "deal4":
                return "cf60ccce-0acc-4e8c-9062-0984a940dfc1"
                break;
            case "trio1":
                return "3d6283de-149e-4c2c-95f6-421d99c3acd1"
                break;
            case "trio2":
                return "1fd83ed5-fef7-47be-9a7c-cdafd7083e72"
                break;
            case "trio3":
                return "b3aaedb1-319f-4944-ad57-623adb8e173b"
                break;
            case "trio4":
                return "139b2934-a8e2-4de1-8456-1a0d1dbe48c4"
                break;
            case "trio5":
                return "f6a2e9a3-7de6-4a30-8eff-8197e5f95ec1"
                break;
            case "trio6":
                return "a546a221-d474-44b4-9748-c3124776c1dd"
                break;
            case "trio7":
                return "184c360b-76d1-4ceb-a18c-a62ea67c6489"
                break;
            case "trio8":
                return "8a42f607-b081-4dd8-8de3-c040c92259e9"
                break;
            case "trio9":
                return "d0256fb0-75f2-4a93-bc1f-fcc0c7e22a9d"
                break;
            case "horizontal":
                return "ea1be71c-80bd-4b91-a574-0956e0f2b48e"
                break;
            case "trjhome":
                return "a506bb8c-bdb0-497c-a7a3-2cd5b8d8ce8d"
                break;
            case "trjlista":
                return "11177004-e711-4e5b-b001-b33eea009cf9"
                break;
            case "trjpdp":
                return "5ae016bd-ad0c-46aa-93ba-26de51111c75"
                break;
            case "headerb":
                return "15ab87f5-4452-42d9-8d39-e8fa42928db9"
                break;

            default: alert("Erro! Contate a Opec!")
                break;
        }
    }
    function defBannerNetshoesarMob() {
        var bann = document.querySelector("#bannereseso");

        switch (bann.value) {
            case "full1":
                return "60ac5403-2dff-4a8a-887b-3079e6c81e6c"
                break;
            case "triplo1":
                return "9d1c5f7d-338c-43b0-81f5-b10fb461b1eb"
                break;
            case "triplo2":
                return "9d1c5f7d-338c-43b0-81f5-b10fb461b1eb"
                break;
            case "triplo3":
                return "9d1c5f7d-338c-43b0-81f5-b10fb461b1eb"
                break;
            case "triplo4":
                return "8441874a-aa73-447c-abbf-1a0bc21b6b46"
                break;
            case "triplo5":
                return "8441874a-aa73-447c-abbf-1a0bc21b6b46"
                break;
            case "triplo6":
                return "8441874a-aa73-447c-abbf-1a0bc21b6b46"
                break;
            case "horizontal":
                return "60194af1-71ee-447c-b576-9e3419a32a0e"
                break;

            default: alert("Erro! Contate a Opec!")
                break;
        }
    }
    function defBannerNetshoesarApp() {
        var bann = document.querySelector("#bannereseso");

        switch (bann.value) {
            case "full1":
                return "2ffdb2bc-7cb8-4bb1-9bb2-1ba90a7fd156"
                break;
            case "full2":
                return "48f0574f-9977-4d09-a368-2e240e9648a2"
                break;
            case "full3":
                return "b65d9db2-ecf5-4bc3-948d-077107690afc"
                break;
            case "full4":
                return "cd06f0c5-c7ba-424f-9bb7-7c47d8f71eff"
                break;

            default: alert("Erro! Contate a Opec!")
                break;
        }
    }
    function defBannerNetshoesarPromoapp() {
        var bann = document.querySelector("#bannereseso");

        switch (bann.value) {
            case "full1":
                return "b5b4f754-e3a9-47ec-afa2-4ded908c7cc3"
                break;
            case "full2":
                return "3c743ef9-f396-4dfa-b4c2-e3e2a3c7240a"
                break;
            case "full3":
                return "95398f56-b929-4515-9ce1-bbd0d3377841"
                break;
            case "full4":
                return "7c975cf7-dd5a-46f2-bd5c-723ab7730ed0"
                break;
            case "full5":
                return "55bcb81e-5b52-48ff-8617-8db891f64847"
                break;
            case "full6":
                return "8a30aafe-7e4c-4765-96cc-164d3af2127e"
                break;
            case "full7":
                return "d41e30cf-72a9-467f-a1e4-7c60d99e3fdf"
                break;
            case "full8":
                return "a92bf8df-33b0-45b0-b3c8-a0d2a8b2b33e"
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
                return "4b46ebaf-7e75-47ff-a1b5-ec48e6c7ad17"
                break;
            case "deal2":
                return "4b46ebaf-7e75-47ff-a1b5-ec48e6c7ad17"
                break;
            case "deal3":
                return "4b46ebaf-7e75-47ff-a1b5-ec48e6c7ad17"
                break;
            case "deal4":
                return "4b46ebaf-7e75-47ff-a1b5-ec48e6c7ad17"
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
                return "2dc74752-030e-4a53-8c38-64e39bea3cea"
                break;
            case "full2":
                return "755ab950-7327-4843-88ba-451bb325fef8"
                break;
            case "full3":
                return "881a7a74-b9de-436e-a167-954c87e1c5d2"
                break;
            case "full4":
                return "662a6985-2584-4243-985d-08fac8b83c34"
                break;
            case "full5":
                return "c60d773c-92b7-44ba-a502-16e891f95fdd"
                break;
            case "full6":
                return "cf8f9a90-05d5-4909-8899-221f0e5a5425"
                break;
            case "full7":
                return "27fbc1c7-8790-48ce-b0d6-0dc6ba1c1f5e"
                break;

            default: alert("Erro! Contate a Opec!")
                break;
        }
    }
    function defBannerShoestockPromoapp() {
        var bann = document.querySelector("#bannereseso");

        switch (bann.value) {
            case "full1":
                return "d52bcca5-9813-4cd4-bd5c-a172d2e34b5c"
                break;
            case "full2":
                return "4356e654-8512-4fc9-a41a-198c80c9cbf9"
                break;
            case "full3":
                return "c2d71e0d-8ae4-45e3-ae16-fdfa145b4005"
                break;
            case "full4":
                return "c2759e23-6734-453c-b222-dff8b8be4f01"
                break;
            case "full5":
                return "9f2d9191-94f2-49d4-be86-220eaffa3ee6"
                break;
            case "full6":
                return "ca2a2a5b-c3df-4a1e-bdfa-87f376bf0a26"
                break;
            case "full7":
                return "30dc3139-9edc-4d00-ab44-957d3f2d0201"
                break;

            default: alert("Erro! Contate a Opec!")
                break;
        }
    }



    //Define lojas, banners e devices.
    function defineTudoNessaPorra() {
        if (storeso.value === "netshoes" && deviceso.value === "desktop") {
            return defBannerNetshoesDesk();
        } else
            if (storeso.value === "netshoes" && deviceso.value === "mobile") {
                return defBannerNetshoesMob();
            } else
                if (storeso.value === "netshoes" && deviceso.value === "app") {
                    return defBannerNetshoesApp();
                } else
                    if (storeso.value === "netshoes" && deviceso.value === "promoapp") {
                        return defBannerNetshoesPromoapp();
                    } else
                        if (storeso.value === "zattini" && deviceso.value === "desktop") {
                            return defBannerZattiniDesk();
                        } else
                            if (storeso.value === "zattini" && deviceso.value === "mobile") {
                                return defBannerZattiniMob();
                            } else
                                if (storeso.value === "zattini" && deviceso.value === "app") {
                                    return defBannerZattiniApp();
                                } else
                                    if (storeso.value === "zattini" && deviceso.value === "promoapp") {
                                        return defBannerZattiniPromoapp();
                                    } else if (storeso.value === "netshoesar" && deviceso.value === "desktop") {
                                        return defBannerNetshoesarDesk();
                                    } else
                                        if (storeso.value === "netshoesar" && deviceso.value === "mobile") {
                                            return defBannerNetshoesarMob();
                                        } else
                                            if (storeso.value === "netshoesar" && deviceso.value === "app") {
                                                return defBannerNetshoesarApp();
                                            } else
                                                if (storeso.value === "netshoesar" && deviceso.value === "promoapp") {
                                                    return defBannerNetshoesarPromoapp();
                                                } else if (storeso.value === "netshoesmx" && deviceso.value === "desktop") {
                                                    return defBannerNetshoesmxDesk();
                                                } else
                                                    if (storeso.value === "netshoesmx" && deviceso.value === "mobile") {
                                                        return defBannerNetshoesmxMob();
                                                    } else
                                                        if (storeso.value === "netshoesmx" && deviceso.value === "app") {
                                                            return defBannerNetshoesmxApp();
                                                        } else
                                                            if (storeso.value === "netshoesmx" && deviceso.value === "promoapp") {
                                                                return defBannerNetshoesmxPromoapp();
                                                            } else if (storeso.value === "shoestock" && deviceso.value === "desktop") {
                                                                return defBannerShoestockDesk();
                                                            } else
                                                                if (storeso.value === "shoestock" && deviceso.value === "mobile") {
                                                                    return defBannerShoestockMob();
                                                                } else
                                                                    if (storeso.value === "shoestock" && deviceso.value === "app") {
                                                                        return defBannerShoestockApp();
                                                                    } else
                                                                        if (storeso.value === "shoestock" && deviceso.value === "promoapp") {
                                                                            return defBannerShoestockPromoapp();
                                                                        }
    }

    function habilitaAtualiza() {
        atualizaImagem();
        buttAtu.disabled = false;
        buttAtu.addEventListener("click", function () {
            fazPut();
        })
    }
    function atualizaImagem() {
        var imagem = document.querySelector(".ibagem a img")
        var link = document.querySelector(".ibagem a")

        if (deviceso.value === "app" || deviceso.value === "promoapp") {
            if (storeso.value === "netshoesar" || storeso.value === "netshoesar") {
                imagem.setAttribute("src", ibagemImg.value)
                link.setAttribute("href", ibagemUrl.value)
            } else {
                imagem.setAttribute("src", estaticoLojas() + ibagemImg.value)
                link.setAttribute("href", objJson.data.urlTarget)
            }
        } else
            if (objJson.data.type === "IMAGE_LIST") {
                imagem.setAttribute("src", ibagemImg.value)
                link.setAttribute("href", ibagemUrl.value)
            }
            else {
                imagem.setAttribute("src", ibagemImg.value)
                link.setAttribute("href", ibagemUrl.value)
            }
        atualizaJson();
    }

    function atualizaJson() {
        if (objJson.data.type === "IMAGE_LIST") {
            objJson.data.images[defNume()].urlImage = ibagemImg.value
            objJson.data.images[defNume()].urlTarget = ibagemUrl.value
        }
        else {
            objJson.data.urlImage = ibagemImg.value
            objJson.data.urlTarget = ibagemUrl.value
        }
    }

    function fazPut() {
        var data = JSON.stringify(objJson);
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log("Deu certo a PUTA.. digo o PUT Porra!")
                alert("BANNER ATUALIZADO COM SUCESSO!");
            }
        });

        xhr.open("PUT", "https://prd-ingress.netshoes.io/banner/admin/" + objJson.uuid);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("Postman-Token", token);
        xhr.send(data);
        buttAtu.disabled = true;
    }

    /* ************************ Final da parte "Atualização" ************************** 
    
    ░░░░░░░░░░░░░░░░░░░░
    ░█▀▀ ░█▀█ ░█ ░█▀▀ ░░
    ░█▀▀ ░█▀▀ ░█ ░█ ░░░░
    ░▀▀▀ ░▀ ░░░▀ ░▀▀▀ ░░
    ░░░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░▄▄
    ░░░░░░░░░░░█░░█
    ░░░░░░░░░░░█░░█
    ░░░░░░░░░░█░░░█
    ░░░░░░░░░█░░░░█
    ███████▄▄█░░░░░██████▄
    ▓▓▓▓▓▓█░░░░░░░░░░░░░░█
    ▓▓▓▓▓▓█░░░░░░░░░░░░░░█
    ▓▓▓▓▓▓█░░░░░░░░░░░░░░█
    ▓▓▓▓▓▓█░░░░░░░░░░░░░░█
    ▓▓▓▓▓▓█░░░░░░░░░░░░░░█
    ▓▓▓▓▓▓█████░░░░░░░░░█
    ██████▀░░░░▀▀██████▀
    
    */
})(window);
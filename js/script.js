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
        idBann.addEventListener("change", function () { consultaBanner() });
        butCons.addEventListener("click", function () { defineType() });
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
        if (objJson.data.images[1] != undefined) {
            document.querySelector("#ibagemProgImg2").value = objJson.data.images[1].urlImage;
            document.querySelector("#ibagemProgUrl2").value = objJson.data.images[1].urlTarget;
        }
        if (objJson.data.images[2] != undefined) {
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







    function atualizaJsonDeEdicaoIn() {
        console.log("inicio")

        var horaCertaHaHaHA = ("0" + document.querySelector("#horainicio").value.split(":")[0]).slice(-2);
        var datinicio = document.getElementById('datainicio').value;
        var date = new Date(datinicio);
        var newdate = new Date(date);
        newdate.setDate(newdate.getUTCDate() - 1);
        var dd = ("0" + newdate.getUTCDate()).slice(-2);
        var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
        var y = newdate.getUTCFullYear();
        console.log("PASSOU POR AQUI ESSA PORRA!!!!!");
        objJson.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";

        console.log(objJson.criteria.startDate);
    }

    function atualizaJsonDeEdicaoFi() {
        console.log("fim")

        var horaCertaHaHaHA = ("0" + document.querySelector("#horafim").value.split(":")[0]).slice(-2);
        var datfim = document.getElementById('datafim').value;
        var date = new Date(datfim);
        var newdate = new Date(date);
        newdate.setDate(newdate.getUTCDate() - 1);
        var dd = ("0" + newdate.getUTCDate()).slice(-2);
        var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
        var y = newdate.getUTCFullYear();
        objJson.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";

        console.log(objJson.criteria.endDate);
    }

    function atualizaJsonEdicaoImg() {
        if (objJson.data.type === "IMAGE_LIST") {
            objJson.data.images[0].urlImage = document.querySelector("#ibagemProgImg1").value;
            objJson.data.images[0].urlTarget = document.querySelector("#ibagemProgUrl1").value;
            if (document.querySelector("#ibagemProgImg2").value != "") {
                objJson.data.images[1].urlImage = document.querySelector("#ibagemProgImg2").value;
                objJson.data.images[1].urlTarget = document.querySelector("#ibagemProgUrl2").value;
            } else if (document.querySelector("#ibagemProgImg2").value != "") {
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
        const testesss = document.querySelector("#horainicio").value

        console.log(testesss)

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
            console.log('Passou aqui - programar');
            return fazFormProg();
        }
        if (tipRqu === "EditProg") {
            return "Tá curioso né? hehehehe, Aguarde, este aind está sendo desenvolvido"
        }

    }

    function geraCamposProg() {
        bannereseso.disabled = true;
        var dJossa = document.querySelector(".jossa");
        console.log('qualquer cois so pra ver se passou')
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
        if (storeso.value === "netshoes" && deviceso.value === "appblack") { bannereseso.innerHTML = infoStores.netshoes.progFormato.appblack }
        if (storeso.value === "zattini" && deviceso.value === "desktop") { bannereseso.innerHTML = infoStores.zattini.progFormato.desktop }
        if (storeso.value === "zattini" && deviceso.value === "mobile") { bannereseso.innerHTML = infoStores.zattini.progFormato.mobile }
        if (storeso.value === "zattini" && deviceso.value === "app") { bannereseso.innerHTML = infoStores.zattini.progFormato.app }
        if (storeso.value === "zattini" && deviceso.value === "promoapp") { bannereseso.innerHTML = infoStores.zattini.progFormato.promoapp }
        if (storeso.value === "zattini" && deviceso.value === "appblack") { bannereseso.innerHTML = infoStores.zattini.progFormato.appblack }
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

            var horaCertaHaHaHA = ("0" + document.querySelector("#horainicio").value.split(":")[0]).slice(-2);
            var datinicio = document.getElementById('datainicio').value;
            var date = new Date(datinicio);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";


            //data Fim

            console.log('teste')
            var horaCertaHaHaHA = ("0" + document.querySelector("#horafim").value.split(":")[0]).slice(-2);
            var datfim = document.getElementById('datafim').value;
            var date = new Date(datfim);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";







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
            var horaCertaHaHaHA = ("0" + document.querySelector("#horainicio").value.split(":")[0]).slice(-2);
            var datinicio = document.getElementById('datainicio').value;
            var date = new Date(datinicio);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";

            //data Fim
            var horaCertaHaHaHA = ("0" + document.querySelector("#horafim").value.split(":")[0]).slice(-2);
            var datfim = document.getElementById('datafim').value;
            var date = new Date(datfim);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
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
            var horaCertaHaHaHA = ("0" + document.querySelector("#horainicio").value.split(":")[0]).slice(-2);
            var datinicio = document.getElementById('datainicio').value;
            var date = new Date(datinicio);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";

            //data Fim
            var horaCertaHaHaHA = ("0" + document.querySelector("#horafim").value.split(":")[0]).slice(-2);
            var datfim = document.getElementById('datafim').value;
            var date = new Date(datfim);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
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
            var horaCertaHaHaHA = ("0" + document.querySelector("#horainicio").value.split(":")[0]).slice(-2);
            var datinicio = document.getElementById('datainicio').value;
            var date = new Date(datinicio);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";

            //data Fim
            var horaCertaHaHaHA = ("0" + document.querySelector("#horafim").value.split(":")[0]).slice(-2);
            var datfim = document.getElementById('datafim').value;
            var date = new Date(datfim);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
            console.log(dieizaumDeProg.criteria.startDate);
            window.progjson = JSON.stringify(dieizaumDeProg);
            console.log(progjson);
            botaoPre.disabled = true;
        }
    }

    function constroiJsontAppblackNetshoes() {
        console.log("APPBLACK");
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

            if (bannereseso.value === "tarja") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.tarja;
                if (bannereseso.value === "tarja") { dieizaumDeProg.id = "banner-stripe-home"; }
            } else if (bannereseso.value === "full1") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.full1;
                if (bannereseso.value === "full1") { dieizaumDeProg.id = "APP_FULL"; }
            } else if (bannereseso.value === "horizontal1") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.horizontal1;
                if (bannereseso.value === "horizontal1") { dieizaumDeProg.id = "APP_HORIZONTAL_1" }
            } else if (bannereseso.value === "horizontal2") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.horizontal2;
                if (bannereseso.value === "horizontal2") { dieizaumDeProg.id = "APP_HORIZONTAL_2" }
            } else if (bannereseso.value === "horizontal3") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.horizontal3;
                if (bannereseso.value === "horizontal3") { dieizaumDeProg.id = "APP_HORIZONTAL_3" }
            } else if (bannereseso.value === "horizontal4") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.horizontal4;
                if (bannereseso.value === "horizontal4") { dieizaumDeProg.id = "APP_HORIZONTAL_4" }
            } else if (bannereseso.value === "trio1") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.trio1;
                if (bannereseso.value === "trio1") { dieizaumDeProg.id = "APP_TRIO_1" }
            } else if (bannereseso.value === "trio2") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.trio2;
                if (bannereseso.value === "trio2") { dieizaumDeProg.id = "APP_TRIO_2" }
            } else if (bannereseso.value === "trio3") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.trio3;
                if (bannereseso.value === "trio3") { dieizaumDeProg.id = "APP_TRIO_3" }
            } else if (bannereseso.value === "trio4") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.trio4;
                if (bannereseso.value === "trio4") { dieizaumDeProg.id = "APP_TRIO_4" }
            } else if (bannereseso.value === "deal1") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.deal1;
                if (bannereseso.value === "deal1") { dieizaumDeProg.id = "APP_DEAL_1" }
            } else if (bannereseso.value === "deal2") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.deal2;
                if (bannereseso.value === "deal2") { dieizaumDeProg.id = "APP_DEAL_2" }
            } else if (bannereseso.value === "deal3") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.deal3;
                if (bannereseso.value === "deal3") { dieizaumDeProg.id = "APP_DEAL_3" }
            } else if (bannereseso.value === "deal4") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.deal4;
                if (bannereseso.value === "deal4") { dieizaumDeProg.id = "APP_DEAL_4" }
            } else if (bannereseso.value === "trioinferior") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.trioinferior;
                if (bannereseso.value === "trioinferior") { dieizaumDeProg.id = "APP_TRIO_INFERIOR" }
            } else if (bannereseso.value === "trioinferior2") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.trioinferior2;
                if (bannereseso.value === "trioinferior2") { dieizaumDeProg.id = "APP_TRIO_INFERIOR_2" }
            } else if (bannereseso.value === "marca1") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.marca1;
                if (bannereseso.value === "marca1") { dieizaumDeProg.id = "APP_MARCAS_1" }
            } else if (bannereseso.value === "marca2") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.marcas2;
                if (bannereseso.value === "marca2") { dieizaumDeProg.id = "APP_MARCAS_2" }
            } else if (bannereseso.value === "marca3") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.marcas3;
                if (bannereseso.value === "marca3") { dieizaumDeProg.id = "APP_MARCAS_3" }
            } else if (bannereseso.value === "marca4") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.marcas4;
                if (bannereseso.value === "marca4") { dieizaumDeProg.id = "APP_MARCAS_4" }
            } else if (bannereseso.value === "marca5") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.marcas5;
                if (bannereseso.value === "marca5") { dieizaumDeProg.id = "APP_MARCAS_5" }
            } else if (bannereseso.value === "marca6") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.marca6;
                if (bannereseso.value === "marca6") { dieizaumDeProg.id = "APP_MARCAS_6" }
            } else if (bannereseso.value === "marca7") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.marca7;
                if (bannereseso.value === "marca7") { dieizaumDeProg.id = "APP_MARCAS_7" }
            } else if (bannereseso.value === "marca8") {
                dieizaumDeProg = infoStores.netshoes.bannersProg.appblack.marca8;
                if (bannereseso.value === "marca8") { dieizaumDeProg.id = "APP_MARCAS_8" }
            }

            dieizaumDeProg.data.urlImage = ibagemProgImg.value
            dieizaumDeProg.data.urlTarget = ibagemProgUrl.value
        }
        console.log(dieizaumDeProg);
        //data inicio
        var horaCertaHaHaHA = ("0" + document.querySelector("#horainicio").value.split(":")[0]).slice(-2);
        var datinicio = document.getElementById('datainicio').value;
        var date = new Date(datinicio);
        var newdate = new Date(date);
        newdate.setDate(newdate.getUTCDate() - 1);
        var dd = ("0" + newdate.getUTCDate()).slice(-2);
        var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
        var y = newdate.getUTCFullYear();
        dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";

        //data Fim
        var horaCertaHaHaHA = ("0" + document.querySelector("#horafim").value.split(":")[0]).slice(-2);
        var datfim = document.getElementById('datafim').value;
        var date = new Date(datfim);
        var newdate = new Date(date);
        newdate.setDate(newdate.getUTCDate() - 1);
        var dd = ("0" + newdate.getUTCDate()).slice(-2);
        var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
        var y = newdate.getUTCFullYear();
        dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
        console.log(dieizaumDeProg.criteria.startDate);
        window.progjson = JSON.stringify(dieizaumDeProg);
        console.log(progjson);
        botaoPre.disabled = true;
    }



    function constroiJsontDeskZattini() {
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
                dieizaumDeProg = infoStores.zattini.bannersProg.desktop.fulls123;
                var storageBanner1 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "zattini"
                };
                var storageBanner2 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "zattini"
                };
                var storageBanner3 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "zattini"
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
                dieizaumDeProg = infoStores.zattini.bannersProg.desktop.trios;
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
                dieizaumDeProg = infoStores.zattini.bannersProg.desktop.horizontal;
                dieizaumDeProg.data.urlImage = ibagemProgImg.value
                dieizaumDeProg.data.urlTarget = ibagemProgUrl.value
            }

            console.log(dieizaumDeProg);

            //data inicio
            var horaCertaHaHaHA = ("0" + document.querySelector("#horainicio").value.split(":")[0]).slice(-2);
            var datinicio = document.getElementById('datainicio').value;
            var date = new Date(datinicio);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";

            //data Fim
            var horaCertaHaHaHA = ("0" + document.querySelector("#horafim").value.split(":")[0]).slice(-2);
            var datfim = document.getElementById('datafim').value;
            var date = new Date(datfim);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";






            console.log(dieizaumDeProg.criteria.startDate);
            window.progjson = JSON.stringify(dieizaumDeProg);
            console.log(progjson);
            botaoPre.disabled = true;
        }

    }

    function constroiJsontMobZattini() {
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
                dieizaumDeProg = infoStores.zattini.bannersProg.mobile.full1abc;
                var storageBanner1 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "zattini"
                };
                var storageBanner2 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "zattini"
                };
                var storageBanner3 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "zattini"
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
                dieizaumDeProg = infoStores.zattini.bannersProg.mobile.full2abc;
                var storageBanner1 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "zattini"
                };
                var storageBanner2 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "zattini"
                };
                var storageBanner3 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "zattini"
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
                dieizaumDeProg = infoStores.zattini.bannersProg.mobile.full3abc;
                var storageBanner1 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "zattini"
                };
                var storageBanner2 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "zattini"
                };
                var storageBanner3 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "zattini"
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
                dieizaumDeProg = infoStores.zattini.bannersProg.mobile.deals123;
                var storageBanner1 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "zattini"
                };
                var storageBanner2 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "zattini"
                };
                var storageBanner3 = {
                    "urlImage": "",
                    "urlTarget": "",
                    "title": "zattini"
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
            var horaCertaHaHaHA = ("0" + document.querySelector("#horainicio").value.split(":")[0]).slice(-2);
            var datinicio = document.getElementById('datainicio').value;
            var date = new Date(datinicio);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";

            //data Fim
            var horaCertaHaHaHA = ("0" + document.querySelector("#horafim").value.split(":")[0]).slice(-2);
            var datfim = document.getElementById('datafim').value;
            var date = new Date(datfim);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
            console.log(dieizaumDeProg.criteria.startDate);
            window.progjson = JSON.stringify(dieizaumDeProg);
            console.log(progjson);
            botaoPre.disabled = true;
        }
    }

    function constroiJsontAppZattini() {
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
                dieizaumDeProg = infoStores.zattini.bannersProg.app.full;
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
            var horaCertaHaHaHA = ("0" + document.querySelector("#horainicio").value.split(":")[0]).slice(-2);
            var datinicio = document.getElementById('datainicio').value;
            var date = new Date(datinicio);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";

            //data Fim
            var horaCertaHaHaHA = ("0" + document.querySelector("#horafim").value.split(":")[0]).slice(-2);
            var datfim = document.getElementById('datafim').value;
            var date = new Date(datfim);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
            console.log(dieizaumDeProg.criteria.startDate);
            window.progjson = JSON.stringify(dieizaumDeProg);
            console.log(progjson);
            botaoPre.disabled = true;
        }
    }

    function constroiJsontPromoappZattini() {
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
                dieizaumDeProg = infoStores.zattini.bannersProg.promoapp.full;
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
            var horaCertaHaHaHA = ("0" + document.querySelector("#horainicio").value.split(":")[0]).slice(-2);
            var datinicio = document.getElementById('datainicio').value;
            var date = new Date(datinicio);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";

            //data Fim
            var horaCertaHaHaHA = ("0" + document.querySelector("#horafim").value.split(":")[0]).slice(-2);
            var datfim = document.getElementById('datafim').value;
            var date = new Date(datfim);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
            console.log(dieizaumDeProg.criteria.startDate);
            window.progjson = JSON.stringify(dieizaumDeProg);
            console.log(progjson);
            botaoPre.disabled = true;
        }
    }

    function constroiJsontAppblackZattini() {
        console.log("APPBLACK");
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


            if (bannereseso.value === "tarja") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.tarja;
                if (bannereseso.value === "tarja") { dieizaumDeProg.id = "banner-stripe-home"; }
            } else if (bannereseso.value === "full1") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.full1;
                if (bannereseso.value === "full1") { dieizaumDeProg.id = "APP_FULL"; }
            } else if (bannereseso.value === "horizontal1") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.horizontal1;
                if (bannereseso.value === "horizontal1") { dieizaumDeProg.id = "APP_HORIZONTAL_1" }
            } else if (bannereseso.value === "horizontal2") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.horizontal2;
                if (bannereseso.value === "horizontal2") { dieizaumDeProg.id = "APP_HORIZONTAL_2" }
            } else if (bannereseso.value === "horizontal3") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.horizontal3;
                if (bannereseso.value === "horizontal3") { dieizaumDeProg.id = "APP_HORIZONTAL_3" }
            } else if (bannereseso.value === "horizontal4") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.horizontal4;
                if (bannereseso.value === "horizontal4") { dieizaumDeProg.id = "APP_HORIZONTAL_4" }
            } else if (bannereseso.value === "trio1") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.trio1;
                if (bannereseso.value === "trio1") { dieizaumDeProg.id = "APP_TRIO_1" }
            } else if (bannereseso.value === "trio2") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.trio2;
                if (bannereseso.value === "trio2") { dieizaumDeProg.id = "APP_TRIO_2" }
            } else if (bannereseso.value === "trio3") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.trio3;
                if (bannereseso.value === "trio3") { dieizaumDeProg.id = "APP_TRIO_3" }
            } else if (bannereseso.value === "trio4") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.trio4;
                if (bannereseso.value === "trio4") { dieizaumDeProg.id = "APP_TRIO_4" }
            } else if (bannereseso.value === "deal1") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.deal1;
                if (bannereseso.value === "deal1") { dieizaumDeProg.id = "APP_DEAL_1" }
            } else if (bannereseso.value === "deal2") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.deal2;
                if (bannereseso.value === "deal2") { dieizaumDeProg.id = "APP_DEAL_2" }
            } else if (bannereseso.value === "deal3") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.deal3;
                if (bannereseso.value === "deal3") { dieizaumDeProg.id = "APP_DEAL_3" }
            } else if (bannereseso.value === "deal4") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.deal4;
                if (bannereseso.value === "deal4") { dieizaumDeProg.id = "APP_DEAL_4" }
            } else if (bannereseso.value === "trioinferior") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.trioinferior;
                if (bannereseso.value === "trioinferior") { dieizaumDeProg.id = "APP_TRIO_INFERIOR" }
            } else if (bannereseso.value === "trioinferior2") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.trioinferior2;
                if (bannereseso.value === "trioinferior2") { dieizaumDeProg.id = "APP_TRIO_INFERIOR_2" }
            } else if (bannereseso.value === "marca1") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.marca1;
                if (bannereseso.value === "marca1") { dieizaumDeProg.id = "APP_MARCAS_1" }
            } else if (bannereseso.value === "marca2") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.marcas2;
                if (bannereseso.value === "marca2") { dieizaumDeProg.id = "APP_MARCAS_2" }
            } else if (bannereseso.value === "marca3") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.marcas3;
                if (bannereseso.value === "marca3") { dieizaumDeProg.id = "APP_MARCAS_3" }
            } else if (bannereseso.value === "marca4") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.marcas4;
                if (bannereseso.value === "marca4") { dieizaumDeProg.id = "APP_MARCAS_4" }
            } else if (bannereseso.value === "marca5") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.marcas5;
                if (bannereseso.value === "marca5") { dieizaumDeProg.id = "APP_MARCAS_5" }
            } else if (bannereseso.value === "marca6") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.marca6;
                if (bannereseso.value === "marca6") { dieizaumDeProg.id = "APP_MARCAS_6" }
            } else if (bannereseso.value === "marca7") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.marca7;
                if (bannereseso.value === "marca7") { dieizaumDeProg.id = "APP_MARCAS_7" }
            } else if (bannereseso.value === "marca8") {
                dieizaumDeProg = infoStores.zattini.bannersProg.appblack.marca8;
                if (bannereseso.value === "marca8") { dieizaumDeProg.id = "APP_MARCAS_8" }
            }

            dieizaumDeProg.data.urlImage = ibagemProgImg.value
            dieizaumDeProg.data.urlTarget = ibagemProgUrl.value
        }
        console.log(dieizaumDeProg);
        //data inicio
        var horaCertaHaHaHA = ("0" + document.querySelector("#horainicio").value.split(":")[0]).slice(-2);
        var datinicio = document.getElementById('datainicio').value;
        var date = new Date(datinicio);
        var newdate = new Date(date);
        newdate.setDate(newdate.getUTCDate() - 1);
        var dd = ("0" + newdate.getUTCDate()).slice(-2);
        var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
        var y = newdate.getUTCFullYear();
        dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";

        //data Fim
        var horaCertaHaHaHA = ("0" + document.querySelector("#horafim").value.split(":")[0]).slice(-2);
        var datfim = document.getElementById('datafim').value;
        var date = new Date(datfim);
        var newdate = new Date(date);
        newdate.setDate(newdate.getUTCDate() - 1);
        var dd = ("0" + newdate.getUTCDate()).slice(-2);
        var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
        var y = newdate.getUTCFullYear();
        dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
        console.log(dieizaumDeProg.criteria.startDate);
        window.progjson = JSON.stringify(dieizaumDeProg);
        console.log(progjson);
        botaoPre.disabled = true;
    }





    function constroiJsontDeskClubeNS() {
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
            var horaCertaHaHaHA = ("0" + document.querySelector("#horainicio").value.split(":")[0]).slice(-2);
            var datinicio = document.getElementById('datainicio').value;
            var date = new Date(datinicio);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";

            //data Fim
            var horaCertaHaHaHA = ("0" + document.querySelector("#horafim").value.split(":")[0]).slice(-2);
            var datfim = document.getElementById('datafim').value;
            var date = new Date(datfim);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";






            console.log(dieizaumDeProg.criteria.startDate);
            window.progjson = JSON.stringify(dieizaumDeProg);
            console.log(progjson);
            botaoPre.disabled = true;
        }

    }

    function constroiJsontMobClubeNS() {
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
            var horaCertaHaHaHA = ("0" + document.querySelector("#horainicio").value.split(":")[0]).slice(-2);
            var datinicio = document.getElementById('datainicio').value;
            var date = new Date(datinicio);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.startDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horainicio").value.split(":")[1] + ":01";

            //data Fim
            var horaCertaHaHaHA = ("0" + document.querySelector("#horafim").value.split(":")[0]).slice(-2);
            var datfim = document.getElementById('datafim').value;
            var date = new Date(datfim);
            var newdate = new Date(date);
            newdate.setDate(newdate.getUTCDate() - 1);
            var dd = ("0" + newdate.getUTCDate()).slice(-2);
            var mm = ("0" + (newdate.getUTCMonth() + 1)).slice(-2);
            var y = newdate.getUTCFullYear();
            dieizaumDeProg.criteria.endDate = y + '-' + mm + '-' + dd + "T" + horaCertaHaHaHA + ":" + document.querySelector("#horafim").value.split(":")[1] + ":01";
            console.log(dieizaumDeProg.criteria.startDate);
            window.progjson = JSON.stringify(dieizaumDeProg);
            console.log(progjson);
            botaoPre.disabled = true;
        }
    }


    function fazPostProg() {
        if (storeso.value === "zattini") {
            if (deviceso.value === "desktop") { constroiJsontDeskZattini(); }
            if (deviceso.value === "mobile") { constroiJsontMobZattini(); }
            if (deviceso.value === "app") { constroiJsontAppZattini(); }
            if (deviceso.value === "promoapp") { constroiJsontPromoappZattini(); }
            if (deviceso.value === "appblack") { constroiJsontAppblackZattini(); }
        } else if (storeso.value === "netshoes") {
            if (deviceso.value === "desktop") { constroiJsontDeskNetshoes(); }
            if (deviceso.value === "mobile") { constroiJsontMobNetshoes(); }
            if (deviceso.value === "app") { constroiJsontAppNetshoes(); }
            if (deviceso.value === "promoapp") { constroiJsontPromoappNetshoes(); }
            if (deviceso.value === "appblack") { constroiJsontAppblackNetshoes(); }
        } else if (storeso.value === "clubenetshoes") {
            if (deviceso.value === "desktop") { constroiJsontDeskClubeNS(); }
            if (deviceso.value === "mobile") { constroiJsontMobClubeNS(); }
        }
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
        if (storeso.value === "netshoes" && deviceso.value === "appblack") { bannereseso.innerHTML = infoStores.netshoes.banners.appblack.bnForm }
        if (storeso.value === "netshoes" && deviceso.value === "topmenu") { bannereseso.innerHTML = infoStores.netshoes.banners.topmenu.bnForm }
        if (storeso.value === "clubenetshoes" && deviceso.value === "desktop") { bannereseso.innerHTML = infoStores.clubenetshoes.banners.desktop.bnForm }
        if (storeso.value === "clubenetshoes" && deviceso.value === "mobile") { bannereseso.innerHTML = infoStores.clubenetshoes.banners.mobile.bnForm }
        if (storeso.value === "netshoesar" && deviceso.value === "desktop") { bannereseso.innerHTML = infoStores.netshoesar.banners.desktop.bnForm }
        if (storeso.value === "netshoesar" && deviceso.value === "mobile") { bannereseso.innerHTML = infoStores.netshoesar.banners.mobile.bnForm }
        if (storeso.value === "netshoesar" && deviceso.value === "app") { bannereseso.innerHTML = infoStores.netshoesar.banners.app.bnForm }
        if (storeso.value === "netshoesar" && deviceso.value === "promoapp") { bannereseso.innerHTML = infoStores.netshoesar.banners.promoapp.bnForm }
        if (storeso.value === "netshoesar" && deviceso.value === "appblack") { bannereseso.innerHTML = infoStores.netshoesar.banners.appblack.bnForm }
        if (storeso.value === "netshoesmx" && deviceso.value === "desktop") { bannereseso.innerHTML = infoStores.netshoesmx.banners.desktop.bnForm }
        if (storeso.value === "netshoesmx" && deviceso.value === "mobile") { bannereseso.innerHTML = infoStores.netshoesmx.banners.mobile.bnForm }
        if (storeso.value === "netshoesmx" && deviceso.value === "app") { bannereseso.innerHTML = infoStores.netshoesmx.banners.app.bnForm }
        if (storeso.value === "netshoesmx" && deviceso.value === "promoapp") { bannereseso.innerHTML = infoStores.netshoesmx.banners.promoapp.bnForm }
        if (storeso.value === "zattini" && deviceso.value === "desktop") { bannereseso.innerHTML = infoStores.zattini.banners.desktop.bnForm }
        if (storeso.value === "zattini" && deviceso.value === "mobile") { bannereseso.innerHTML = infoStores.zattini.banners.mobile.bnForm }
        if (storeso.value === "zattini" && deviceso.value === "app") { bannereseso.innerHTML = infoStores.zattini.banners.app.bnForm }
        if (storeso.value === "zattini" && deviceso.value === "promoapp") { bannereseso.innerHTML = infoStores.zattini.banners.promoapp.bnForm }
        if (storeso.value === "zattini" && deviceso.value === "appblack") { bannereseso.innerHTML = infoStores.zattini.banners.appblack.bnForm }
        if (storeso.value === "zattini" && deviceso.value === "topmenu") { bannereseso.innerHTML = infoStores.zattini.banners.topmenu.bnForm }
        if (storeso.value === "shoestock" && deviceso.value === "desktop") { bannereseso.innerHTML = infoStores.shoestock.banners.desktop.bnForm }
        if (storeso.value === "shoestock" && deviceso.value === "mobile") { bannereseso.innerHTML = infoStores.shoestock.banners.mobile.bnForm }
        if (storeso.value === "shoestock" && deviceso.value === "app") { bannereseso.innerHTML = infoStores.shoestock.banners.app.bnForm }
        if (storeso.value === "shoestock" && deviceso.value === "promoapp") { bannereseso.innerHTML = infoStores.shoestock.banners.promoapp.bnForm }
        if (storeso.value === "shoestock" && deviceso.value === "appblack") { bannereseso.innerHTML = infoStores.shoestock.banners.appblack.bnForm }
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
        if (storeso.value === "clubenetshoes") { return "https://static.netshoes.com.br" }
        if (storeso.value === "netshoesar") { return "https://static.netshoes.com.ar" }
        if (storeso.value === "netshoesmx") { return "https://static.netshoes.com.mx" }
        if (storeso.value === "zattini") { return "https://static.zattini.com.br" }
        if (storeso.value === "shoestock") { return "https://static.shoestock.com.br" }
    }

    function preencheCampos() {
        var imagem = document.querySelector(".ibagem a img")
        var link = document.querySelector(".ibagem a")

        if (deviceso.value === "app" || deviceso.value === "promoapp" || deviceso.value === "appblack") {
            if (storeso.value === "netshoesar" || storeso.value === "netshoesmx") {
                if (deviceso.value === "appblack" && storeso.value === "netshoesar") {
                    imagem.setAttribute("src", estaticoLojas() + objJson.data.urlImage)
                    link.setAttribute("href", objJson.data.urlTarget)
                    ibagemImg.value = objJson.data.urlImage
                    ibagemUrl.value = objJson.data.urlTarget
                } else {
                    imagem.setAttribute("src", objJson.data.urlImage)
                    link.setAttribute("href", objJson.data.urlTarget)
                    ibagemImg.value = objJson.data.urlImage
                    ibagemUrl.value = objJson.data.urlTarget
                }
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
        const retornaZero = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "full1", "deal1", "full1a", "botao1", "full2a", "full3a", "deal1", "triplo1", "triplo4", "horizontal"]
        const retornaUm = ["full2", "deal2", "full1b", "botao2", "full2b", "full3b", "deal2", "triplo2", "triplo5"]
        const retornaDois = ["full3", "deal3", "full1c", "botao3", "full2c", "full3c", "deal3", "triplo3", "triplo6"]
        const retornaTres = ["full4", "deal4", "full1d", "botao4", "full2d", "full3d", "deal4", "triplo7"]

        if (retornaZero.includes(bannereseso.value)) {
            return 0
        } else
            if (retornaUm.includes(bannereseso.value)) {
                return 1
            } else
                if (retornaDois.includes(bannereseso.value)) {
                    return 2
                } else
                    if (retornaTres.includes(bannereseso.value)) {
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
    function defBannerNetshoesAppblack() {
        var bann = document.querySelector("#bannereseso");

        switch (bann.value) {
            case "tarja":
                return "6166d03e-80c0-4724-acec-caf8b8863d6d"
                break;
            case "full1":
                return "352fc1f5-7eda-406c-befc-5816f5ad06f5"
                break;
            case "horizontal1":
                return "b8508a60-d8a0-4755-b071-17dc47f04d5c"
                break;
            case "horizontal2":
                return "630b25db-a401-44be-b455-1822eea49f97"
                break;
            case "trio1":
                return "4499e6bd-5cd2-4de0-9eb9-4fb4a5489311"
                break;
            case "trio2":
                return "83df9d29-c6ce-490d-abb1-cef9a0058a11"
                break;
            case "trio3":
                return "b8ac4cec-2b6b-4821-93ff-5017a639fbe5"
                break;
            case "trio4":
                return "a56639e0-2088-4b27-b3d3-7dd3ac718ec9"
                break;
            case "deal1":
                return "2fdef0fa-b219-4691-8065-77f49199ac3c"
                break;
            case "deal2":
                return "b74888fd-0d60-4ba4-9439-8a4dd4554a0c"
                break;
            case "deal3":
                return "2bb9c3c9-d4e3-4e94-aa5b-48f908a06aba"
                break;
            case "deal4":
                return "3af02071-fb5d-4e9b-86ab-991a435e3339"
                break;
            case "horizontal3":
                return "a93f1585-b062-4b89-a510-d4bf59688595"
                break;
            case "trioinferior":
                return "9738f238-4ee0-496c-9e63-0f8002fcb55d"
                break;
            case "trioinferior2":
                return "404435e3-a154-4714-8b22-3942ca8596f3"
                break;
            case "horizontal4":
                return "34075327-f90a-46c1-b867-d6499ff3e521"
                break;
            case "marca1":
                return "f94efbf8-b40d-4677-b0a2-acb3b5940f30"
                break;
            case "marca2":
                return "d177d39c-0153-46ab-abfb-04652000092e"
                break;
            case "marca3":
                return "3fdaf3aa-1a3f-4369-881a-481e660ce79a"
                break;
            case "marca4":
                return "133d354f-609b-4f1d-980a-cbfc3a1cdafc"
                break;
            case "marca5":
                return "ef17f679-bae8-48f7-913e-a28080fada84"
                break;
            case "marca6":
                return "2e0c893f-5e06-4209-b5b5-c2ed7910485f"
                break;
            case "marca7":
                return "5fd22e88-f5f7-4dc1-861c-76f957c3fb01"
                break;
            case "marca8":
                return "945bc664-5f47-4d78-841e-cb5b25df2134"
                break;


            default: alert("Erro! Contate a Opec!")
                break;
        }
    }

    function defBannerNetshoesTopMenu() {
        var bann = document.querySelector("#bannereseso");

        switch (bann.value) {
            case "1":
                return "67e4fdf4-41f6-4f3f-9e5e-4f814601ccc5" //ok
                break;
            case "2":
                return "46d54a32-c7a9-4942-8b51-5d485b7e58fd"
                break;
            case "3":
                return "1daa2b17-6b68-423c-9142-7bd1f85d15fd"
                break;
            case "4":
                return "07331431-38f3-4f52-935c-4234a980ee2e"
                break;
            case "5":
                return "c9004ed1-fca2-44d5-811d-1582d2dbc350"
                break;
            case "6":
                return "edf66aee-2b17-42a6-9536-0a912472bd71"
                break;
            case "7":
                return "6dd6deb3-d67e-4dda-9064-0df7d4b9061a"
                break;
            case "8":
                return "2e6ce1a6-3545-4db0-92a5-4ba3934cfcc5"
                break;
            case "9":
                return "7c52c131-a4ec-4ecb-945c-c95820ca1836"
                break;
            // case "10":
            //     return ""
            //     break;

            default: alert("Erro! Contate a Opec!")
                break;
        }
    }

    //clubens
    function defBannerClubeNetshoesDesk() {
        var bann = document.querySelector("#bannereseso");

        switch (bann.value) {
            case "full1a":
                return "5d5d9e615e7f921dba6e40c7"
                break;
            case "full1b":
                return "5d5d9e615e7f921dba6e40c7"
                break;
            case "full1c":
                return "5d5d9e615e7f921dba6e40c7"
                break;
            case "deal1":
                return "5d5d9e615e7f921dba6e40db"
                break;
            case "deal2":
                return "5d5d9e615e7f921dba6e40db"
                break;
            case "deal3":
                return "5d5d9e615e7f921dba6e40db"
                break;
            case "deal4":
                return "5d5d9e615e7f921dba6e40db"
                break;
            case "trio1":
                return "5d5d9e615e7f921dba6e40d5"
                break;
            case "trio2":
                return "5d5d9e615e7f921dba6e40d6"
                break;
            case "trio3":
                return "5d5d9e615e7f921dba6e40d7"
                break;
            case "trio4":
                return "5d5d9e615e7f921dba6e40d8"
                break;
            case "trio5":
                return "5d5d9e615e7f921dba6e40d9"
                break;
            case "trio6":
                return "5d5d9e615e7f921dba6e40da"
                break;
            case "trio7":
                return "5d5d9e615e7f921dba6e40d2"
                break;
            case "trio8":
                return "5d5d9e615e7f921dba6e40d3"
                break;
            case "trio9":
                return "5d5d9e615e7f921dba6e40d4"
                break;
            case "horizontal":
                return "5d5d9e615e7f921dba6e40cf"
                break;
            case "trjhome":
                return
                break;
            case "trjlista":
                return
                break;
            case "trjpdp":
                return
                break;
            case "headerb":
                return
                break;

            default: alert("Erro! Contate a Opec!")
                break;
        }
    }
    function defBannerClubeNetshoesMob() {
        var bann = document.querySelector("#bannereseso");

        switch (bann.value) {
            case "full1a":
                return "5d5d9e615e7f921dba6e40e3"
                break;
            case "full1b":
                return "5d5d9e615e7f921dba6e40e3"
                break;
            case "full1c":
                return "5d5d9e615e7f921dba6e40e3"
                break;
            case "botao1":
                return "5d5d9e615e7f921dba6e40cb"
                break;
            case "botao2":
                return "5d5d9e615e7f921dba6e40cb"
                break;
            case "botao3":
                return "5d5d9e615e7f921dba6e40cb"
                break;
            case "full2a":
                return "5d5d9e625e7f921dba6e40e4"
                break;
            case "full2b":
                return "5d5d9e625e7f921dba6e40e4"
                break;
            case "full2c":
                return "5d5d9e625e7f921dba6e40e4"
                break;
            case "full3a":
                return "5d5d9e625e7f921dba6e40e5"
                break;
            case "full3b":
                return "5d5d9e625e7f921dba6e40e5"
                break;
            case "full3c":
                return "5d5d9e625e7f921dba6e40e5"
                break;
            case "deal1":
                return "5d5d9e625e7f921dba6e40e6"
                break;
            case "deal2":
                return "5d5d9e625e7f921dba6e40e6"
                break;
            case "deal3":
                return "5d5d9e625e7f921dba6e40e6"
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
    function defBannerZattiniAppblack() {
        var bann = document.querySelector("#bannereseso");

        switch (bann.value) {
            case "tarja":
                return "a244b0cf-d59c-43f0-a011-00861a77dc6d"
                break;
            case "full1":
                return "1aa5b5fe-656e-4033-8c6d-0c75f9d1f1b0"
                break;
            case "horizontal1":
                return "d1c8ce11-c3a3-4d3d-85ad-a2203ef0dc3d"
                break;
            case "horizontal2":
                return "26f36b1a-3e13-4a63-9048-d5386f455fe2"
                break;
            case "horizontal3":
                return "eb2af8fa-6ec7-4b7d-8cee-a41c0ef0fb9d"
                break;
            case "horizontal4":
                return "9c7093e8-1033-4c15-9716-ffd17e5018c5"
                break;
            case "trio1":
                return "fd4afe33-7b64-4c04-be46-c2b8b66b010d"
                break;
            case "trio2":
                return "06b1677a-a5b3-437b-bfbb-db908dbaa708"
                break;
            case "trio3":
                return "7f012225-4b14-4235-ab8c-8f0e0f32fe83"
                break;
            case "trio4":
                return "d601a6d3-71e8-474d-b7ee-9dfecca596dd"
                break;
            case "deal1":
                return "bb713115-143f-4c46-ae9f-d7f4381ec474"
                break;
            case "deal2":
                return "03303976-06ce-4727-acb2-ccb80e87627b"
                break;
            case "deal3":
                return "7930929c-8bc2-4c8e-8570-689abc3128c0"
                break;
            case "deal4":
                return "74f00a45-8a3c-43f7-b7bf-aa4563287abc"
                break;
            case "trioinferior":
                return "b8d7bb84-40b1-4093-9916-21918504207e"
                break;
            case "trioinferior2":
                return "4179c9cb-6140-41cc-a31b-96a06e58befe"
                break;
            case "marca1":
                return "61959052-2410-493b-aeeb-77bee3fca28f"
                break;
            case "marca2":
                return "e2167e03-1d99-4d44-acef-49aa3c96ab68"
                break;
            case "marca3":
                return "1789b3eb-a36f-4aa0-8b31-7142bd8a8d97"
                break;
            case "marca4":
                return "59168bbf-1f35-4b51-96bd-038d00a912fa"
                break;
            case "marca5":
                return "f443045a-c0ab-48e7-8f52-9bd86e9753ce"
                break;
            case "marca6":
                return "408ab2ee-2379-48a7-9379-d3a500558a06"
                break;
            case "marca7":
                return "301b61c4-b8f3-4a45-8c5d-18f63bf68129"
                break;
            case "marca8":
                return "a62d687c-b137-4b26-bd93-ff0ce394eb5b"
                break;


            default: alert("Erro! Contate a Opec!")
                break;
        }
    }

    function defBannerZattiniTopMenu() {
        var bann = document.querySelector("#bannereseso");

        switch (bann.value) {
            case "1":
                return "34672425-fe76-4ed7-a5ef-1d3ca82d284b"
                break;
            case "2":
                return "d1e42542-085d-4cb6-ad1b-e64b809ce21f"
                break;
            case "3":
                return "7d77ffd1-bb86-48e5-81a1-02e6fc63d7c1"
                break;
            case "4":
                return "0782add9-860f-4823-aab2-0c5edcc80327"
                break;
            case "5":
                return "0a801329-e2cc-4403-8b3e-4be5d86be598"
                break;
            case "6":
                return "8bada97f-4a76-406e-a200-1e55cf677cb5"
                break;
            case "7":
                return "ce344922-8b8a-4bb2-8be7-10084d30bcec"
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
    function defBannerNetshoesarAppblack() {
        var bann = document.querySelector("#bannereseso");

        switch (bann.value) {
            case "full1":
                return "f695f887-8b65-4104-8fbd-dd313cc7a2cd"
                break;
            case "horizontal1":
                return "dac72ef7-12bb-47af-aafb-0c1295f78d7c"
                break;
            case "horizontal2":
                return "2b7e864c-b666-4fa4-beae-9606f0994087"
                break;
            case "horizontal3":
                return "a1f646b1-cf71-48c8-8c4f-5096d0f4bdd3"
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
    function defBannerShoestockAppblack() {
        var bann = document.querySelector("#bannereseso");

        switch (bann.value) {
            case "full1":
                return "6193889f-1c1c-4415-a61e-87cec6567965"
                break;
            case "horizontal1":
                return "2b704fc5-d004-482a-9163-36a16522e396"
                break;
            case "horizontal2":
                return "4c419748-b4cc-48fe-b172-36a39edda9f3"
                break;
            case "horizontal3":
                return "12ffb9c1-fbc4-424d-992f-b7e8a76eaec5"
                break;
            case "horizontal4":
                return "d061b162-f337-4fc6-882e-2c0fe4145fae"
                break;
            case "trio1":
                return "6e05b941-ea20-4cfd-8385-5956046c80d7"
                break;
            case "trio2":
                return "393a374a-97b7-4a28-b16c-df6a513f25d9"
                break;
            case "trio3":
                return "886e71db-9de5-480b-8688-40fe5e9a73bb"
                break;
            case "trio4":
                return "cc227148-e5ec-4087-a260-d0afd0146db6"
                break;
            case "trioinferior":
                return "565339a5-5d8d-41ef-88cf-cf71f483a1d5"
                break;
            case "trioinferior2":
                return "3c0fcb4d-e257-4eb3-b7ed-aec3f7e5ccc4"
                break;
            case "deal1":
                return "b93b241a-a2b2-4c28-9fc6-fb43e3346322"
                break;
            case "deal2":
                return "474eb06c-acb9-4197-92a2-a51153c2e7a8"
                break;
            case "deal3":
                return "f8d6be46-9119-4d85-a555-4874c14afc14"
                break;
            case "deal4":
                return "5d0ab71e-6f88-4aee-bdc6-2af60fb7e6d4"
                break;
            case "marca1":
                return "5499b45f-cb69-425d-9dda-0ea77b757b25"
                break;
            case "marca2":
                return "df7e1a96-61bc-46ca-bbef-e0bd0bba58b1"
                break;
            case "marca3":
                return "a41898fd-3380-4d99-ab9c-0cd8f134bb4e"
                break;
            case "marca4":
                return "82676f7b-cf97-44be-a507-48057f00e445"
                break;
            case "marca5":
                return "b7245246-c3c8-4e58-ad4b-89641fb3ebda"
                break;
            case "marca6":
                return "e322469e-251d-44c7-a023-d1ac1524b0d1"
                break;
            case "marca7":
                return "bb099500-ff55-4a4f-ae6c-062c4bcd54a7"
                break;
            case "marca8":
                return "7f864bef-5e0f-4426-9c00-9d395f2d5cb4"
                break;


            default: alert("Erro! Contate a Opec!")
                break;
        }
    }



    //Define lojas, banners e devices.
    function defineTudoNessaPorra() {//defBannerNetshoesTopMenu
        if (storeso.value === "netshoes" && deviceso.value === "desktop") {
            return defBannerNetshoesDesk();
        } else if (storeso.value === "netshoes" && deviceso.value === "mobile") {
            return defBannerNetshoesMob();
        } else if (storeso.value === "netshoes" && deviceso.value === "app") {
            return defBannerNetshoesApp();
        } else if (storeso.value === "netshoes" && deviceso.value === "promoapp") {
            return defBannerNetshoesPromoapp();
        } else if (storeso.value === "netshoes" && deviceso.value === "appblack") {
            return defBannerNetshoesAppblack();
        } else if (storeso.value === "netshoes" && deviceso.value === "topmenu") {
            return defBannerNetshoesTopMenu();
        } else if (storeso.value === "clubenetshoes" && deviceso.value === "desktop") {
            return defBannerClubeNetshoesDesk();
        } else if (storeso.value === "clubenetshoes" && deviceso.value === "mobile") {
            return defBannerClubeNetshoesMob();
        } else if (storeso.value === "zattini" && deviceso.value === "desktop") {
            return defBannerZattiniDesk();
        } else if (storeso.value === "zattini" && deviceso.value === "mobile") {
            return defBannerZattiniMob();
        } else if (storeso.value === "zattini" && deviceso.value === "app") {
            return defBannerZattiniApp();
        } else if (storeso.value === "zattini" && deviceso.value === "promoapp") {
            return defBannerZattiniPromoapp();
        } else if (storeso.value === "zattini" && deviceso.value === "appblack") {
            return defBannerZattiniAppblack();
        } else if (storeso.value === "zattini" && deviceso.value === "topmenu") {
            return defBannerZattiniTopMenu();
        } else if (storeso.value === "netshoesar" && deviceso.value === "desktop") {
            return defBannerNetshoesarDesk();
        } else if (storeso.value === "netshoesar" && deviceso.value === "mobile") {
            return defBannerNetshoesarMob();
        } else if (storeso.value === "netshoesar" && deviceso.value === "app") {
            return defBannerNetshoesarApp();
        } else if (storeso.value === "netshoesar" && deviceso.value === "promoapp") {
            return defBannerNetshoesarPromoapp();
        } else if (storeso.value === "netshoesar" && deviceso.value === "appblack") {
            return defBannerNetshoesarAppblack();
        } else if (storeso.value === "netshoesmx" && deviceso.value === "desktop") {
            return defBannerNetshoesmxDesk();
        } else if (storeso.value === "netshoesmx" && deviceso.value === "mobile") {
            return defBannerNetshoesmxMob();
        } else if (storeso.value === "netshoesmx" && deviceso.value === "app") {
            return defBannerNetshoesmxApp();
        } else if (storeso.value === "netshoesmx" && deviceso.value === "promoapp") {
            return defBannerNetshoesmxPromoapp();
        } else if (storeso.value === "shoestock" && deviceso.value === "desktop") {
            return defBannerShoestockDesk();
        } else if (storeso.value === "shoestock" && deviceso.value === "mobile") {
            return defBannerShoestockMob();
        } else if (storeso.value === "shoestock" && deviceso.value === "app") {
            return defBannerShoestockApp();
        } else if (storeso.value === "shoestock" && deviceso.value === "promoapp") {
            return defBannerShoestockPromoapp();
        } else if (storeso.value === "shoestock" && deviceso.value === "appblack") {
            return defBannerShoestockAppblack();
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

        if (deviceso.value === "app" || deviceso.value === "promoapp" || deviceso.value === "appblack") {
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
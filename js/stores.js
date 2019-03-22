(function () {
    infoStores = {
        "atuForma": "<div class='col-sm'> <div class='item'> <div class='selectdiv'> <select class='selecitem' name='stores' id='storeso'> <option value='SELECIONELOJA'>LOJA</option> <option value='netshoes'>NETSHOES</option> <option value='netshoesar'>NETSHOES AR</option> <option value='netshoesmx'>NETSHOES MX</option> <option value='zattini'>ZATTINI</option> <option value='shoestock'>SHOESTOCK</option> </select> </div></div></div><div class='col-sm'> <div class='item'> <div class='selectdiv'> <select class='selecitem' name='devices' id='deviceso' disabled> <option value='SELECIONEDEVICE'>DEVICE</option> <option value='desktop'>DESKTOP</option> <option value='mobile'>MOBILE</option> <option value='app'>APP</option><option value='promoapp'>PROMOAPP</option> </select> </div></div></div><div class='col-sm'> <div class='item'> <div class='selectdiv'> <select class='selecitem' name='bannereses' id='bannereseso' disabled> <option value='FORMATO'>FORMATO</option> </select> </div></div></div></div><div class='jossa escondida'>",
        "progForma": "<div class='col-sm'> <div class='item'> <div class='selectdiv'> <select class='selecitem' name='stores' id='storeso'> <option value='SELECIONELOJA'>LOJA</option> <option value='netshoes'>NETSHOES</option> <option value='netshoesar'>NETSHOES AR</option> <option value='netshoesmx'>NETSHOES MX</option> <option value='zattini'>ZATTINI</option> <option value='shoestock'>SHOESTOCK</option> </select> </div></div></div><div class='col-sm'> <div class='item'> <div class='selectdiv'> <select class='selecitem' name='devices' id='deviceso' disabled> <option value='SELECIONEDEVICE'>DEVICE</option> <option value='desktop'>DESKTOP</option> <option value='mobile'>MOBILE</option> <option value='app'>APP</option><option value='promoapp'>PROMOAPP</option> </select> </div></div></div><div class='col-sm'> <div class='item'> <div class='selectdiv'> <select class='selecitem' name='bannereses' id='bannereseso' disabled> <option value='FORMATO'>FORMATO</option> </select> </div></div></div></div><div class='jossa escondida'>",
        "deskProgFormaSemList": "<div class='ibagem escondida'> <center><a href='#' target='_blank'> <img src='' alt=''></a></center> </div><center> <div class='row espaco'> <div class='divideAsHoras'> <div class='dataHoras'> <div class='col'> <label for='comment' class='ttl'>Data Inicial:</label> <input class='form-control datasPo' type='date' id='datainicio' rows='1'> </div><div class='col'> <label for='comment' class='ttl'>Hora Inicial:</label> <input class='form-control datasPo' type='time' id='horainicio' rows='1'> </div></div><div class='dataHoras'> <div class='col'> <label for='comment' class='ttl'>Data Final:</label> <input class='form-control datasPo' type='date' id='datafim' rows='1'> </div><div class='col'> <label for='comment' class='ttl'>Hora Final:</label> <input class='form-control datasPo' type='time' id='horafim' rows='1'> </div></div></div></div></center> <div class='acampBut'> <div class='inputsss'> <div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Img:</span> </div><input class='form-control inputP' id='ibagemProgImg' type='text' placeholder='Imagem'> </div><div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Link:</span> </div><input class='form-control inputP' id='ibagemProgUrl' placeholder='Link' type='text'> </div></div><div class='buttonsss'><input type='button' id='buttPreProg' value='Programar'></div></div>",
        "deskProgFormaComList": "<div class='ibagem escondida'> <center><a href='#' target='_blank'> <img src='' alt=''></a></center> </div><center> <div class='row espaco'> <div class='divideAsHoras'> <div class='dataHoras'> <div class='col'> <label for='comment' class='ttl'>Data Inicial:</label> <input class='form-control datasPo' type='date' id='datainicio' rows='1'> </div><div class='col'> <label for='comment' class='ttl'>Hora Inicial:</label> <input class='form-control datasPo' type='time' id='horainicio' rows='1'> </div></div><div class='dataHoras'> <div class='col'> <label for='comment' class='ttl'>Data Final:</label> <input class='form-control datasPo' type='date' id='datafim' rows='1'> </div><div class='col'> <label for='comment' class='ttl'>Hora Final:</label> <input class='form-control datasPo' type='time' id='horafim' rows='1'> </div></div></div></div></center> <div class='acampBut'> <div class='inputsss'> <label for='comment'>Banner 1:</label> <div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Img:</span> </div><input class='form-control inputP' id='ibagemProgImg1' type='text' placeholder='Imagem'> </div><div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Link:</span> </div><input class='form-control inputP' id='ibagemProgUrl1' placeholder='Link' type='text'> </div></div><div class='inputsss'> <label for='comment'>Banner 2:</label> <div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Img:</span> </div><input class='form-control inputP' id='ibagemProgImg2' type='text' placeholder='Imagem'> </div><div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Link:</span> </div><input class='form-control inputP' id='ibagemProgUrl2' placeholder='Link' type='text'> </div></div><div class='inputsss'> <label for='comment'>Banner 3:</label> <div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Img:</span> </div><input class='form-control inputP' id='ibagemProgImg3' type='text' placeholder='Imagem'> </div><div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Link:</span> </div><input class='form-control inputP' id='ibagemProgUrl3' placeholder='Link' type='text'> </div></div><div class='buttonsss'><input type='button' id='buttPreProg' value='Programar'></div></div>",
        "editForma": "<div class='inputsss'> <label for='comment'>ID do Banner:</label> <div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>ID:</span> </div><input class='form-control inputP' id='idDoBanner' type='text' placeholder=''> </div></div><div class='buttonsss'><input type='button' id='buttEditCons' value='Consultar'></div><div id='outraJossa'></div>",
        "netshoes": {
            "storeid": "L_NETSHOES",
            "banners": {
                "desktop": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option> <option value='full1'>FULL1</option> <option value='full2'>FULL2</option> <option value='full3'>FULL3</option> <option value='deal1'>DEAL1</option> <option value='deal2'>DEAL2</option> <option value='deal3'>DEAL3</option> <option value='deal4'>DEAL4</option> <option value='trio1'>TRIO1</option> <option value='trio2'>TRIO2</option> <option value='trio3'>TRIO3</option>  <option value='trio4'>TRIO4</option> <option value='trio5'>TRIO5</option> <option value='trio6'>TRIO6</option>  <option value='horizontal'>HORIZONTAL</option> <option value='trio7'>TRIO7</option> <option value='trio8'>TRIO8</option> <option value='trio9'>TRIO9</option> <option value='trjhome'>TARJA TOP HOME</option> <option value='trjlista'>TARJA TOP LISTA</option> <option value='trjpdp'>TARJA TOP PDP</option> <option value='headerb'>HEADER BANNER</option>",
                    "deskImgList": "<div class='ibagem'> <center><a href='#' target='_blank'> <img src='' alt=''></a></center></div><div class='acampBut'> <div class='inputsss'> <div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Img:</span> </div><input class='form-control inputP' id='ibagemImg' type='text' placeholder='Imagem:'> </div><div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Link:</span> </div><input class='form-control inputP' id='ibagemUrl' placeholder='Link:' type='text'> </div></div><div class='buttonsss'><input type='button' id='buttPre' value='Pré-Visualizar'><input type='button' id='buttAtu' value='Atualizar' disabled></div></div>"
                },
                "mobile": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1a'>FULL1A</option><option value='full1b'>FULL1B</option><option value='full1c'>FULL1C</option><option value='botao1'>BOTÃO1</option><option value='botao2'>BOTÃO2</option><option value='botao3'>BOTÃO3</option><option value='full2a'>FULL2A</option><option value='full2b'>FULL2B</option><option value='full2c'>FULL2C</option><option value='full3a'>FULL3A</option><option value='full3b'>FULL3B</option><option value='full3c'>FULL3C</option><option value='deal1'>DEAL1</option><option value='deal2'>DEAL2</option><option value='deal3'>DEAL3</option>"
                },
                "app": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option>"
                },
                "promoapp": { "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option>" }
            },
            "progFormato": {
                "desktop": "<option value='FORMATO'>FORMATO</option><option value='fulls123'>FULL1, 2 e 3</option><option value='trio1'>TRIO1</option><option value='trio2'>TRIO2</option><option value='trio3'>TRIO3</option><option value='trio4'>TRIO4</option><option value='trio5'>TRIO5</option><option value='trio6'>TRIO6</option><option value='trio7'>TRIO7</option><option value='trio8'>TRIO8</option><option value='trio9'>TRIO9</option><option value='horizontal'>HORIZONTAL</option>",
                "mobile": "<option value='FORMATO'>FORMATO</option><option value='full1abc'>FULL1A, B e C</option><option value='full2abc'>FULL2A, B e C</option><option value='full3abc'>FULL3A, B e C</option><option value='deals123'>DEAL1, 2 E 3</option>",
                "app": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option>",
                "promoapp": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option>"
            },
            "bannersProg": {
                "desktop": {
                    "fulls123": {
                        "id": "home-gamma-full-top-0",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE_LIST",
                            "headline": "home-full-top",
                            "subtitle": "home-full-top",
                            "images": []
                        },
                        "criteria": {
                            "platform": "DESKTOP",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "trios": {
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "Netshoes"
                        },
                        "criteria": {
                            "platform": "DESKTOP",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "horizontal": {
                        "id": "home-gamma-full-buttons-line1",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "Netshoes"
                        },
                        "criteria": {
                            "platform": "DESKTOP"
                        }
                    }
                },
                "mobile": {
                    "full1abc": {
                        "id": "home-gamma-banners-carousel-top",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE_LIST",
                            "headline": " ",
                            "subtitle": " ",
                            "images": []
                        },
                        "criteria": {
                            "platform": "MOBILE",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "full2abc": {
                        "id": "home-gamma-banners-carousel-middle",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE_LIST",
                            "headline": " ",
                            "subtitle": " ",
                            "images": []
                        },
                        "criteria": {
                            "platform": "MOBILE",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "full3abc": {
                        "id": "home-gamma-banners-carousel-middle-2",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE_LIST",
                            "headline": " ",
                            "subtitle": " ",
                            "images": []
                        },
                        "criteria": {
                            "platform": "MOBILE",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "deals123": {
                        "id": "home-gamma-banners-carousel-bottom",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE_LIST",
                            "headline": " ",
                            "subtitle": " ",
                            "images": []
                        },
                        "criteria": {
                            "platform": "MOBILE",
                            "startDate": "",
                            "endDate": ""
                        }
                    }
                },
                "app": {
                    "full":{
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "ImageAPP"
                        },
                        "criteria": {
                            "platform": "APP",
                            "startDate": "",
                            "endDate": ""
                        }
                    }
                },
                "promoapp": {
                    "full":{
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "ImageAPP"
                        },
                        "criteria": {
                            "platform": "PROMOAPP",
                            "startDate": "",
                            "endDate": ""
                        }
                    }
                }

            },
            "maisBann" :"<center> <div class='row espaco'> <div class='divideAsHoras'> <div class='dataHoras'> <div class='col'> <label for='comment' class='ttl'>Data Inicial:</label> <input class='form-control datasPo' type='date' id='datainicio' rows='1'> </div><div class='col'> <label for='comment' class='ttl'>Hora Inicial:</label> <input class='form-control datasPo' type='time' id='datainicio' rows='1'> </div></div><div class='dataHoras'> <div class='col'> <label for='comment' class='ttl'>Data Final:</label> <input class='form-control datasPo' type='date' id='datainicio' rows='1'> </div><div class='col'> <label for='comment' class='ttl'>Hora Final:</label> <input class='form-control datasPo' type='time' id='datafim' rows='1'> </div></div></div></div></center> <div class='acampBut'> <div class='inputsss'> <label for='comment'>Banner 1:</label> <div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Img:</span> </div><input class='form-control inputP' id='ibagemProgImg' type='text' placeholder='Imagem'> </div><div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Link:</span> </div><input class='form-control inputP' id='ibagemProgUrl' placeholder='Link' type='text'> </div></div><div class='inputsss'> <label for='comment'>Banner 2:</label> <div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Img:</span> </div><input class='form-control inputP' id='ibagemProgImg' type='text' placeholder='Imagem'> </div><div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Link:</span> </div><input class='form-control inputP' id='ibagemProgUrl' placeholder='Link' type='text'> </div></div><div class='inputsss'> <label for='comment'>Banner 3:</label> <div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Img:</span> </div><input class='form-control inputP' id='ibagemProgImg' type='text' placeholder='Imagem'> </div><div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Link:</span> </div><input class='form-control inputP' id='ibagemProgUrl' placeholder='Link' type='text'> </div></div><div class='buttonsss'><input type='button' id='buttPreProg' value='Pré-Visualizar'><input type='button' id='buttProg' value='Programar' disabled></div></div>"


        },
        "zattini": {
            "storeid": "L_ZATTINI",
            "bnForm": {},
            "banners": {
                "desktop": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1a'>FULL1A</option><option value='full1b'>FULL1B</option><option value='full1c'>FULL1C</option><option value='deal1'>DEAL1</option><option value='deal2'>DEAL2</option><option value='deal3'>DEAL3</option><option value='deal4'>DEAL4</option><option value='trio1'>TRIO1</option><option value='trio2'>TRIO2</option><option value='trio3'>TRIO3</option><option value='trio4'>TRIO4</option><option value='trio5'>TRIO5</option><option value='trio6'>TRIO6</option><option value='full2'>FULL2</option><option value='trio7'>TRIO7</option><option value='trio8'>TRIO8</option><option value='trio9'>TRIO9</option><option value='full3'>FULL3</option><option value='trjlista'>TARJA TOP LISTA</option><option value='trjpdp'>TARJA TOP PDP</option><option value='headerb'>HEADER BANNER</option>"
                },
                "mobile": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='deal1'>DEAL1</option><option value='deal2'>DEAL2</option><option value='deal3'>DEAL3</option><option value='deal4'>DEAL4</option><option value='triplo1'>TRIPLO1</option><option value='triplo2'>TRIPLO2</option><option value='triplo3'>TRIPLO3</option><option value='triplo4'>TRIPLO4</option><option value='triplo5'>TRIPLO5</option><option value='triplo6'>TRIPLO6</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option>"
                },
                "app": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option>"
                },
                "promoapp": { "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option><option value='full7'>FULL7</option>" }
            }
        },
        "netshoesar": {
            "storeid": "L_NETSHOESAR",
            "bnForm": {},
            "banners": {
                "desktop": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='deal1'>DEAL1</option><option value='deal2'>DEAL2</option><option value='deal3'>DEAL3</option><option value='deal4'>DEAL4</option><option value='trio1'>TRIO1</option><option value='trio2'>TRIO2</option><option value='trio3'>TRIO3</option><option value='trio4'>TRIO4</option><option value='trio5'>TRIO5</option><option value='trio6'>TRIO6</option><option value='horizontal'>HORIZONTAL</option><option value='trio7'>TRIO7</option><option value='trio8'>TRIO8</option><option value='trio9'>TRIO9</option><option value='trjhome'>TARJA TOP HOME</option><option value='trjlista'>TARJA TOP LISTA</option><option value='trjpdp'>TARJA TOP PDP</option><option value='headerb'>HEADER BANNER</option>"
                },
                "mobile": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='triplo1'>TRIPLO1</option><option value='triplo2'>TRIPLO2</option><option value='triplo3'>TRIPLO3</option><option value='triplo4'>TRIPLO4</option><option value='triplo5'>TRIPLO5</option><option value='triplo6'>TRIPLO6</option><option value='horizontal'>HORIZONTAL</option>"
                },
                "app": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option>"
                },
                "promoapp": { "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option><option value='full7'>FULL7</option><option value='full8'>FULL8</option>" }
            }
        },
        "netshoesmx": {
            "storeid": "L_NETSHOESMX",
            "bnForm": {},
            "banners": {
                "desktop": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1a'>FULL1A</option><option value='full1b'>FULL2B</option><option value='deal1'>DEAL1</option><option value='deal2'>DEAL2</option><option value='deal3'>DEAL3</option><option value='deal4'>DEAL4</option><option value='trio1'>TRIO1</option><option value='trio2'>TRIO2</option><option value='trio3'>TRIO3</option><option value='trio4'>TRIO4</option><option value='trio5'>TRIO5</option><option value='trio6'>TRIO6</option><option value='horizontal'>HORIZONTAL</option><option value='trio7'>TRIO7</option><option value='trio8'>TRIO8</option><option value='trio9'>TRIO9</option><option value='headerb'>HEADER BANNER</option>"
                },
                "mobile": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1a'>FULL1A</option><option value='botao1'>BOTÃO1</option><option value='botao2'>BOTÃO2</option><option value='botao3'>BOTÃO3</option><option value='botao4'>BOTÃO4</option><option value='full2a'>FULL2A</option><option value='full2b'>FULL2B</option><option value='full2c'>FULL2C</option><option value='full3a'>FULL3A</option><option value='full3b'>FULL3B</option><option value='full3c'>FULL3C</option><option value='deal1'>DEAL1</option><option value='deal2'>DEAL2</option><option value='deal3'>DEAL3</option>"
                },
                "app": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option>"
                },
                "promoapp": { "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option>" }
            }
        },
        "shoestock": {
            "storeid": "L_SHOESTOCK",
            "bnForm": {},
            "banners": {
                "desktop": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1a'>FULL1A</option><option value='full1b'>FULL1B</option><option value='full1c'>FULL1C</option><option value='trio1'>TRIO1</option><option value='trio2'>TRIO2</option><option value='trio3'>TRIO3</option><option value='trio4'>TRIO4</option><option value='trio5'>TRIO5</option><option value='trio6'>TRIO6</option><option value='full2'>FULL2</option><option value='trio7'>TRIO7</option><option value='trio8'>TRIO8</option><option value='trio9'>TRIO9</option><option value='full3'>FULL3</option>"
                },
                "mobile": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='triplo1'>TRIPLO1</option><option value='triplo2'>TRIPLO2</option><option value='triplo3'>TRIPLO3</option><option value='triplo4'>TRIPLO4</option><option value='triplo5'>TRIPLO5</option><option value='triplo6'>TRIPLO6</option>"
                },
                "app": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option><option value='full7'>FULL7</option>"
                },
                "promoapp": { "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option><option value='full7'>FULL7</option>" }
            }
        }
    }
})();
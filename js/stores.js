(function () {
    infoStores = {
        "atuForma": "<div class='col-sm'> <div class='item'> <div class='selectdiv'> <select class='selecitem' name='stores' id='storeso'> <option value='SELECIONELOJA'>LOJA</option> <option value='netshoes'>NETSHOES</option> <option value='netshoesar'>NETSHOES AR</option> <option value='netshoesmx'>NETSHOES MX</option> <option value='zattini'>ZATTINI</option> <option value='shoestock'>SHOESTOCK</option> <option value='clubenetshoes'>CLUBE NETSHOES</option><option value='freelace'>FREELACE</option> </select> </div></div></div><div class='col-sm'> <div class='item'> <div class='selectdiv'> <select class='selecitem' name='devices' id='deviceso' disabled> <option value='SELECIONEDEVICE'>DEVICE</option> <option value='desktop'>DESKTOP</option> <option value='mobile'>MOBILE</option> <option value='app'>APP</option><option value='promoapp'>PROMOAPP</option><option value='appblack'>APPBLACK</option><option value='topmenu'>TOP MENU</option> </select> </div></div></div><div class='col-sm'> <div class='item'> <div class='selectdiv'> <select class='selecitem' name='bannereses' id='bannereseso' disabled> <option value='FORMATO'>FORMATO</option> </select> </div></div></div></div><div class='jossa escondida'>",
        "progForma": "<div class='col-sm'> <div class='item'> <div class='selectdiv'> <select class='selecitem' name='stores' id='storeso'> <option value='SELECIONELOJA'>LOJA</option> <option value='netshoes'>NETSHOES</option> <option value='netshoesar'>NETSHOES AR</option> <option value='netshoesmx'>NETSHOES MX</option> <option value='zattini'>ZATTINI</option> <option value='shoestock'>SHOESTOCK</option> </select> </div></div></div><div class='col-sm'> <div class='item'> <div class='selectdiv'> <select class='selecitem' name='devices' id='deviceso' disabled> <option value='SELECIONEDEVICE'>DEVICE</option> <option value='desktop'>DESKTOP</option> <option value='mobile'>MOBILE</option> <option value='app'>APP</option><option value='promoapp'>PROMOAPP</option><option value='appblack'>APPBLACK</option> </select> </div></div></div><div class='col-sm'> <div class='item'> <div class='selectdiv'> <select class='selecitem' name='bannereses' id='bannereseso' disabled> <option value='FORMATO'>FORMATO</option> </select> </div></div></div></div><div class='jossa escondida'>",
        "deskProgFormaSemList": "<div class='ibagem escondida'> <center><a href='#' target='_blank'> <img src='' alt=''></a></center> </div><center> <div class='row espaco'> <div class='divideAsHoras'> <div class='dataHoras'> <div class='col'> <label for='comment' class='ttl'>Data Inicial:</label> <input class='form-control datasPo' type='date' id='datainicio' rows='1'> </div><div class='col'> <label for='comment' class='ttl'>Hora Inicial:</label> <input class='form-control datasPo' type='time' id='horainicio' rows='1'> </div></div><div class='dataHoras'> <div class='col'> <label for='comment' class='ttl'>Data Final:</label> <input class='form-control datasPo' type='date' id='datafim' rows='1'> </div><div class='col'> <label for='comment' class='ttl'>Hora Final:</label> <input class='form-control datasPo' type='time' id='horafim' rows='1'> </div></div></div></div></center> <div class='acampBut'> <div class='inputsss'> <div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Img:</span> </div><input class='form-control inputP' id='ibagemProgImg' type='text' placeholder='Imagem'> </div><div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Link:</span> </div><input class='form-control inputP' id='ibagemProgUrl' placeholder='Link' type='text'> </div></div><div class='buttonsss'><input type='button' id='buttPreProg' value='Programar'></div></div>",
        "deskProgFormaComList": "<div class='ibagem escondida'> <center><a href='#' target='_blank'> <img src='' alt=''></a></center> </div><center> <div class='row espaco'> <div class='divideAsHoras'> <div class='dataHoras'> <div class='col'> <label for='comment' class='ttl'>Data Inicial:</label> <input class='form-control datasPo' type='date' id='datainicio' rows='1'> </div><div class='col'> <label for='comment' class='ttl'>Hora Inicial:</label> <input class='form-control datasPo' type='time' id='horainicio' rows='1'> </div></div><div class='dataHoras'> <div class='col'> <label for='comment' class='ttl'>Data Final:</label> <input class='form-control datasPo' type='date' id='datafim' rows='1'> </div><div class='col'> <label for='comment' class='ttl'>Hora Final:</label> <input class='form-control datasPo' type='time' id='horafim' rows='1'> </div></div></div></div></center> <div class='acampBut'> <div class='inputsss'> <label for='comment'>Banner 1:</label> <div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Img:</span> </div><input class='form-control inputP' id='ibagemProgImg1' type='text' placeholder='Imagem'> </div><div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Link:</span> </div><input class='form-control inputP' id='ibagemProgUrl1' placeholder='Link' type='text'> </div></div><div class='inputsss'> <label for='comment'>Banner 2:</label> <div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Img:</span> </div><input class='form-control inputP' id='ibagemProgImg2' type='text' placeholder='Imagem'> </div><div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Link:</span> </div><input class='form-control inputP' id='ibagemProgUrl2' placeholder='Link' type='text'> </div></div><div class='inputsss'> <label for='comment'>Banner 3:</label> <div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Img:</span> </div><input class='form-control inputP' id='ibagemProgImg3' type='text' placeholder='Imagem'> </div><div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Link:</span> </div><input class='form-control inputP' id='ibagemProgUrl3' placeholder='Link' type='text'> </div></div><div class='buttonsss'><input type='button' id='buttPreProg' value='Programar'></div></div>",
        "editForma": "<div class='inputsss'> <label for='comment'>ID do Banner:</label> <div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>ID:</span> </div><input class='form-control inputP' id='idDoBanner' type='text' placeholder=''> </div></div><div class='buttonsss'><input type='button' id='buttEditCons' value='Consultar'></div><div id='outraJossa'></div>",
        "netshoes": {
            "storeid": "L_NETSHOES",
            "banners": {
                "desktop": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option> <option value='full1'>FULL1</option> <option value='full2'>FULL2</option> <option value='full3'>FULL3</option> <option value='deal1'>DEAL1</option> <option value='deal2'>DEAL2</option> <option value='deal3'>DEAL3</option> <option value='deal4'>DEAL4</option> <option value='trio1'>TRIO1</option> <option value='trio2'>TRIO2</option> <option value='trio3'>TRIO3</option>  <option value='trio4'>TRIO4</option> <option value='mktp1'>VITRINE MKTP 1</option> <option value='mktp2'>VITRINE MKTP 2</option> <option value='mktp3'>VITRINE MKTP 3</option> <option value='mktp4'>VITRINE MKTP 4</option> <option value='mktp5'>VITRINE MKTP 5</option> <option value='mktp6'>VITRINE MKTP 6</option> <option value='mktp7'>VITRINE MKTP 7</option> <option value='mktp8'>VITRINE MKTP 8</option> <option value='trio5'>TRIO5</option> <option value='trio6'>TRIO6</option>  <option value='horizontal'>HORIZONTAL</option> <option value='trio7'>TRIO7</option> <option value='trio8'>TRIO8</option> <option value='trio9'>TRIO9</option> <option value='trjhome'>TARJA TOP HOME</option> <option value='trjlista'>TARJA TOP LISTA</option> <option value='trjpdp'>TARJA TOP PDP</option> <option value='headerb'>HEADER BANNER</option>",
                    "deskImgList": "<div class='ibagem'> <center><a href='#' target='_blank'> <img src='' alt=''></a></center></div><div class='acampBut'> <div class='inputsss'> <div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Img:</span> </div><input class='form-control inputP' id='ibagemImg' type='text' placeholder='Imagem:'> </div><div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Link:</span> </div><input class='form-control inputP' id='ibagemUrl' placeholder='Link:' type='text'> </div></div><div class='buttonsss'><input type='button' id='buttPre' value='Pré-Visualizar'><input type='button' id='buttAtu' value='Atualizar' disabled></div></div>"
                },
                "mobile": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1a'>FULL1A</option><option value='full1b'>FULL1B</option><option value='full1c'>FULL1C</option><option value='botao1'>BOTÃO1</option><option value='botao2'>BOTÃO2</option><option value='botao3'>BOTÃO3</option><option value='full2a'>FULL2A</option><option value='full2b'>FULL2B</option><option value='full2c'>FULL2C</option><option value='full3a'>FULL3A</option><option value='full3b'>FULL3B</option><option value='full3c'>FULL3C</option><option value='mktp1'>VITRINE MKTP 1</option> <option value='mktp2'>VITRINE MKTP 2</option> <option value='mktp3'>VITRINE MKTP 3</option> <option value='mktp4'>VITRINE MKTP 4</option> <option value='mktp5'>VITRINE MKTP 5</option> <option value='mktp6'>VITRINE MKTP 6</option> <option value='mktp7'>VITRINE MKTP 7</option> <option value='mktp8'>VITRINE MKTP 8</option><option value='deal1'>DEAL1</option><option value='deal2'>DEAL2</option><option value='deal3'>DEAL3</option>"
                },
                "app": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option>"
                },
                "promoapp": { "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option>" 
                },
                "appblack": { "bnForm": "<option value='FORMATO'>FORMATO</option><option value='tarja'>TARJA</option><option value='full1'>FULL1</option><option value='horizontal1'>HORIZONTAL1</option><option value='horizontal2'>HORIZONTAL2</option><option value='trio1'>TRIO1</option><option value='trio2'>TRIO2</option><option value='trio3'>TRIO3</option><option value='trio4'>TRIO4</option><option value='deal1'>DEAL1</option><option value='deal2'>DEAL2</option><option value='deal3'>DEAL3</option><option value='deal4'>DEAL4</option><option value='horizontal3'>HORIZONTAL3</option><option value='trioinferior'>TRIO INFERIOR1</option><option value='trioinferior2'>TRIO INFERIOR2</option><option value='horizontal4'>HORIZONTAL4</option><option value='marca1'>MARCA1</option><option value='marca2'>MARCA2</option><option value='marca3'>MARCA3</option><option value='marca4'>MARCA4</option><option value='marca5'>MARCA5</option><option value='marca6'>MARCA6</option><option value='marca7'>MARCA7</option><option value='marca8'>MARCA8</option>"
                },
                "topmenu": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='1a'>MENU 1A</option><option value='1b'>MENU 1B</option><option value='2a'>MENU 2A</option><option value='2b'>MENU 2B</option><option value='3a'>MENU 3A</option><option value='3b'>MENU 3B</option><option value='4a'>MENU 4A</option><option value='4b'>MENU 4B</option><option value='5a'>MENU 5A</option><option value='5b'>MENU 5B</option><option value='6a'>MENU 6A</option><option value='6b'>MENU 6B</option><option value='7a'>MENU 7A</option><option value='7b'>MENU 7B</option><option value='8a'>MENU 8A</option><option value='8b'>MENU 8B</option><option value='9a'>MENU 9A</option><option value='9b'>MENU 9B</option>"
                }
            },
            "progFormato": {
                "desktop": "<option value='FORMATO'>FORMATO</option><option value='fulls123'>FULL1, 2 e 3</option><option value='trio1'>TRIO1</option><option value='trio2'>TRIO2</option><option value='trio3'>TRIO3</option><option value='trio4'>TRIO4</option><option value='trio5'>TRIO5</option><option value='trio6'>TRIO6</option><option value='trio7'>TRIO7</option><option value='trio8'>TRIO8</option><option value='trio9'>TRIO9</option><option value='horizontal'>HORIZONTAL</option><option value='countdown'>OFERTA DO DIA</option>",
                "mobile": "<option value='FORMATO'>FORMATO</option><option value='full1abc'>FULL1A, B e C</option><option value='full2abc'>FULL2A, B e C</option><option value='full3abc'>FULL3A, B e C</option><option value='countdown'>OFERTA DO DIA</option>",
                "app": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option>",
                "promoapp": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option>",
                "appblack": "<option value='FORMATO'>FORMATO</option><option value='tarja'>TARJA</option><option value='full1'>FULL1</option><option value='horizontal1'>HORIZONTAL1</option><option value='horizontal2'>HORIZONTAL2</option><option value='trio1'>TRIO1</option><option value='trio2'>TRIO2</option><option value='trio3'>TRIO3</option><option value='trio4'>TRIO4</option><option value='deal1'>DEAL1</option><option value='deal2'>DEAL2</option><option value='deal3'>DEAL3</option><option value='deal4'>DEAL4</option><option value='horizontal3'>HORIZONTAL3</option><option value='trioinferior'>TRIO INFERIOR1</option><option value='trioinferior2'>TRIO INFERIOR2</option><option value='horizontal4'>HORIZONTAL4</option><option value='marca1'>MARCA1</option><option value='marca2'>MARCA2</option><option value='marca3'>MARCA3</option><option value='marca4'>MARCA4</option><option value='marca5'>MARCA5</option><option value='marca6'>MARCA6</option><option value='marca7'>MARCA7</option><option value='marca8'>MARCA8</option>"
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
                },
                "appblack": {
                    "tarja":{
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_TARJA",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "full1":{
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_FULL",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "horizontal1": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_HORIZONTAL_1",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "horizontal2": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_HORIZONTAL_2",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "trio1": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_TRIO_1",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "trio2": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_TRIO_1",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "trio3": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_TRIO_1",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "trio4": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_TRIO_1",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "deal1": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_DEAL",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "deal2": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_DEAL",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "deal3": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_DEAL",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "deal4": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_DEAL",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "horizontal3": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_HORIZONTAL_3",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "trioinferior": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_TRIO_2",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "trioinferior2": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_TRIO_2",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "horizontal4": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_HORIZONTAL_4",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "marca1": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_MARCAS",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "marca2": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_MARCAS",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "marca3": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_MARCAS",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "marca4": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_MARCAS",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "marca5": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_MARCAS",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "marca6": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_MARCAS",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "marca7": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_MARCAS",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "marca8": {
                        "uuid": "",
                        "id": "",
                        "storeId": "L_NETSHOES",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_MARCAS",
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
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1a'>FULL1A</option><option value='full1b'>FULL1B</option><option value='full1c'>FULL1C</option><option value='full1d'>FULL1D</option><option value='deal1'>DEAL1</option><option value='deal2'>DEAL2</option><option value='deal3'>DEAL3</option><option value='deal4'>DEAL4</option><option value='trio1'>TRIO1</option><option value='trio2'>TRIO2</option><option value='trio3'>TRIO3</option><option value='trio4'>TRIO4</option><option value='trio5'>TRIO5</option><option value='trio6'>TRIO6</option><option value='full2'>FULL2</option><option value='trio7'>TRIO7</option><option value='trio8'>TRIO8</option><option value='trio9'>TRIO9</option><option value='full3'>FULL3</option><option value='trjlista'>TARJA TOP LISTA</option><option value='trjpdp'>TARJA TOP PDP</option><option value='headerb'>HEADER BANNER</option>"
                },
                "mobile": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='deal1'>DEAL1</option><option value='deal2'>DEAL2</option><option value='deal3'>DEAL3</option><option value='deal4'>DEAL4</option><option value='triplo1'>TRIPLO1</option><option value='triplo2'>TRIPLO2</option><option value='triplo3'>TRIPLO3</option><option value='triplo4'>TRIPLO4</option><option value='triplo5'>TRIPLO5</option><option value='triplo6'>TRIPLO6</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option>"
                },
                "app": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option>"
                },
                "promoapp": { "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option><option value='full7'>FULL7</option>" 
                },
                "appblack": { "bnForm": "<option value='FORMATO'>FORMATO</option><option value='tarja'>TARJA</option><option value='full1'>FULL1</option><option value='horizontal1'>HORIZONTAL1</option><option value='horizontal2'>HORIZONTAL2</option><option value='trio1'>TRIO1</option><option value='trio2'>TRIO2</option><option value='trio3'>TRIO3</option><option value='trio4'>TRIO4</option><option value='deal1'>DEAL1</option><option value='deal2'>DEAL2</option><option value='deal3'>DEAL3</option><option value='deal4'>DEAL4</option><option value='horizontal3'>HORIZONTAL3</option><option value='trioinferior'>TRIO INFERIOR1</option><option value='trioinferior2'>TRIO INFERIOR2</option><option value='horizontal4'>HORIZONTAL4</option><option value='marca1'>MARCA1</option><option value='marca2'>MARCA2</option><option value='marca3'>MARCA3</option><option value='marca4'>MARCA4</option><option value='marca5'>MARCA5</option><option value='marca6'>MARCA6</option><option value='marca7'>MARCA7</option><option value='marca8'>MARCA8</option>"
                },
                "topmenu": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='1'>MENU1</option><option value='2'>MENU2</option><option value='3'>MENU3</option><option value='4'>MENU4</option><option value='5'>MENU5</option><option value='6'>MENU6</option><option value='7'>MENU7</option><option value='8'>MENU8</option><!--<option value='9'>MENU9</option><option value='10'>MENU10</option> -->"
                }
            },
            "progFormato": {
                "desktop": "<option value='FORMATO'>FORMATO</option><option value='fulls123'>FULL1, 2, 3 e 4</option><option value='trio1'>TRIO1</option><option value='trio2'>TRIO2</option><option value='trio3'>TRIO3</option><option value='trio4'>TRIO4</option><option value='trio5'>TRIO5</option><option value='trio6'>TRIO6</option><option value='horizontal'>HORIZONTAL</option><option value='trio7'>TRIO7</option><option value='trio8'>TRIO8</option><option value='trio9'>TRIO9</option><option value='horizontal2'>HORIZONTAL2</option>",
                "mobile": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='trio123'>TRIO 1, 2 e 3</option><option value='trio456'>TRIO 4, 5 e 6</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option>",
                "app": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option>",
                "promoapp": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option>",
                "appblack": "<option value='FORMATO'>FORMATO</option><option value='tarja'>TARJA</option><option value='full1'>FULL1</option><option value='horizontal1'>HORIZONTAL1</option><option value='horizontal2'>HORIZONTAL2</option><option value='trio1'>TRIO1</option><option value='trio2'>TRIO2</option><option value='trio3'>TRIO3</option><option value='trio4'>TRIO4</option><option value='deal1'>DEAL1</option><option value='deal2'>DEAL2</option><option value='deal3'>DEAL3</option><option value='deal4'>DEAL4</option><option value='horizontal3'>HORIZONTAL3</option><option value='trioinferior'>TRIO INFERIOR1</option><option value='trioinferior2'>TRIO INFERIOR2</option><option value='horizontal4'>HORIZONTAL4</option><option value='marca1'>MARCA1</option><option value='marca2'>MARCA2</option><option value='marca3'>MARCA3</option><option value='marca4'>MARCA4</option><option value='marca5'>MARCA5</option><option value='marca6'>MARCA6</option><option value='marca7'>MARCA7</option><option value='marca8'>MARCA8</option>"
            },
            "bannersProg": {
                "desktop": {
                    "fulls123": {
                        "id": "zt-home-full-top-0",
                        "storeId": "L_ZATTINI",
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
                        "storeId": "L_ZATTINI",
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
                        "id": "zt-home-full-buttons-line1",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "Netshoes"
                        },
                        "criteria": {
                            "platform": "DESKTOP"
                        }
                    },
                    "horizontal2": {
                        "id": "zt-home-full-buttons-line2",
                        "storeId": "L_ZATTINI",
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
                    "full1": {
                        "id": "zt-home-full-top",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "zattini"
                        },
                        "criteria": {
                            "platform": "MOBILE",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "trio123": {
                        "id": "zt-home-full-middle",
                        "storeId": "L_ZATTINI",
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
                    "trio456": {
                        "id": "zt-home-full-bottom",
                        "storeId": "L_ZATTINI",
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
                    "full2": {
                        "id": "zt-home-banner-fixe1",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": ""
                        },
                        "criteria": {
                            "platform": "MOBILE",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "full3": {
                        "id": "zt-home-banner-fixe2",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": ""
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
                        "storeId": "L_ZATTINI",
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
                        "storeId": "L_ZATTINI",
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
                },
                "appblack": {
                    "tarja":{
                        "uuid": "",
                        "id": "",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_TARJA",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "full1":{
                        "uuid": "",
                        "id": "APP_FULL",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_FULL",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "horizontal1": {
                        "uuid": "",
                        "id": "APP_HORIZONTAL_1",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_HORIZONTAL_1",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "horizontal2": {
                        "uuid": "",
                        "id": "APP_HORIZONTAL_2",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_HORIZONTAL_2",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "trio1": {
                        "uuid": "",
                        "id": "APP_TRIO_1",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_TRIO_1",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "trio2": {
                        "uuid": "",
                        "id": "APP_TRIO_2",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_TRIO_1",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "trio3": {
                        "uuid": "",
                        "id": "APP_TRIO_3",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_TRIO_1",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "trio4": {
                        "uuid": "",
                        "id": "APP_TRIO_4",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_TRIO_1",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "deal1": {
                        "uuid": "",
                        "id": "APP_DEAL_1",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_DEAL",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "deal2": {
                        "uuid": "",
                        "id": "APP_DEAL_2",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_DEAL",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "deal3": {
                        "uuid": "",
                        "id": "APP_DEAL_3",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_DEAL",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "deal4": {
                        "uuid": "",
                        "id": "APP_DEAL_4",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_DEAL",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "horizontal3": {
                        "uuid": "",
                        "id": "APP_HORIZONTAL_3",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_HORIZONTAL_3",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "trioinferior": {
                        "uuid": "",
                        "id": "APP_TRIO_INFERIOR",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_TRIO_2",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "trioinferior2": {
                        "uuid": "",
                        "id": "APP_TRIO_INFERIOR_2",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_TRIO_2",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "horizontal4": {
                        "uuid": "",
                        "id": "APP_HORIZONTAL_4",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_HORIZONTAL_4",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "marca1": {
                        "uuid": "",
                        "id": "APP_MARCAS_1",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_MARCAS",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "marca2": {
                        "uuid": "",
                        "id": "APP_MARCAS_2",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_MARCAS",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "marca3": {
                        "uuid": "",
                        "id": "APP_MARCAS_3",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_MARCAS",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "marca4": {
                        "uuid": "",
                        "id": "APP_MARCAS_4",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_MARCAS",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "marca5": {
                        "uuid": "",
                        "id": "APP_MARCAS_5",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_MARCAS",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "marca6": {
                        "uuid": "",
                        "id": "APP_MARCAS_6",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_MARCAS",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "marca7": {
                        "uuid": "",
                        "id": "APP_MARCAS_7",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_MARCAS",
                            "startDate": "",
                            "endDate": ""
                        }
                    },
                    "marca8": {
                        "uuid": "",
                        "id": "APP_MARCAS_8",
                        "storeId": "L_ZATTINI",
                        "data": {
                            "type": "IMAGE",
                            "urlImage": "",
                            "urlTarget": "",
                            "alt": "BlackApp"
                        },
                        "criteria": {
                            "platform": "APP_MARCAS",
                            "startDate": "",
                            "endDate": ""
                        }
                    }
                }
            },
            "maisBann" :"<center> <div class='row espaco'> <div class='divideAsHoras'> <div class='dataHoras'> <div class='col'> <label for='comment' class='ttl'>Data Inicial:</label> <input class='form-control datasPo' type='date' id='datainicio' rows='1'> </div><div class='col'> <label for='comment' class='ttl'>Hora Inicial:</label> <input class='form-control datasPo' type='time' id='datainicio' rows='1'> </div></div><div class='dataHoras'> <div class='col'> <label for='comment' class='ttl'>Data Final:</label> <input class='form-control datasPo' type='date' id='datainicio' rows='1'> </div><div class='col'> <label for='comment' class='ttl'>Hora Final:</label> <input class='form-control datasPo' type='time' id='datafim' rows='1'> </div></div></div></div></center> <div class='acampBut'> <div class='inputsss'> <label for='comment'>Banner 1:</label> <div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Img:</span> </div><input class='form-control inputP' id='ibagemProgImg' type='text' placeholder='Imagem'> </div><div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Link:</span> </div><input class='form-control inputP' id='ibagemProgUrl' placeholder='Link' type='text'> </div></div><div class='inputsss'> <label for='comment'>Banner 2:</label> <div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Img:</span> </div><input class='form-control inputP' id='ibagemProgImg' type='text' placeholder='Imagem'> </div><div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Link:</span> </div><input class='form-control inputP' id='ibagemProgUrl' placeholder='Link' type='text'> </div></div><div class='inputsss'> <label for='comment'>Banner 3:</label> <div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Img:</span> </div><input class='form-control inputP' id='ibagemProgImg' type='text' placeholder='Imagem'> </div><div class='input-group mb-3'> <div class='input-group-prepend'> <span class='input-group-text preInpur' id='basic-addon1'>Link:</span> </div><input class='form-control inputP' id='ibagemProgUrl' placeholder='Link' type='text'> </div></div><div class='buttonsss'><input type='button' id='buttPreProg' value='Pré-Visualizar'><input type='button' id='buttProg' value='Programar' disabled></div></div>"

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
                "promoapp": { "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option><option value='full7'>FULL7</option><option value='full8'>FULL8</option>" 
                },
                "appblack": { "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='horizontal1'>HORIZONTAL1</option><option value='horizontal2'>HORIZONTAL2</option><option value='horizontal3'>HORIZONTAL3</option>" 
                }
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
                "promoapp": { "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option>"}, 
                "appblack": { "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='horizontal1'>HORIZONTAL1</option><option value='horizontal2'>HORIZONTAL2</option><option value='horizontal3'>HORIZONTAL3</option>" 
                }
            },
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
                "promoapp": { 
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option><option value='full6'>FULL6</option><option value='full7'>FULL7</option>" 
                },
                "appblack": { 
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='tarja'>TARJA</option><option value='full1'>FULL1</option><option value='horizontal1'>HORIZONTAL1</option><option value='horizontal2'>HORIZONTAL2</option><option value='trio1'>TRIO1</option><option value='trio2'>TRIO2</option><option value='trio3'>TRIO3</option><option value='trio4'>TRIO4</option><option value='deal1'>DEAL1</option><option value='deal2'>DEAL2</option><option value='deal3'>DEAL3</option><option value='deal4'>DEAL4</option><option value='horizontal3'>HORIZONTAL3</option><option value='trioinferior'>TRIO INFERIOR1</option><option value='trioinferior2'>TRIO INFERIOR2</option><option value='horizontal4'>HORIZONTAL4</option><option value='marca1'>MARCA1</option><option value='marca2'>MARCA2</option><option value='marca3'>MARCA3</option><option value='marca4'>MARCA4</option><option value='marca5'>MARCA5</option><option value='marca6'>MARCA6</option><option value='marca7'>MARCA7</option><option value='marca8'>MARCA8</option>" }
            }
        },
        "freelace": {
            "storeid": "L_FREELACE",
            "bnForm": {},
            "banners": {
                "desktop": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='trio1'>TRIO1</option><option value='trio2'>TRIO2</option><option value='trio3'>TRIO3</option><option value='horizontal1'>HORIZONTAL1</option>"
                },
                "mobile": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1'>FULL1</option><option value='full2'>FULL2</option><option value='full3'>FULL3</option><option value='full4'>FULL4</option><option value='full5'>FULL5</option>"
                } 
            }
        },
        "clubenetshoes": {
            "storeid": "L_CLUBENETSHOES",
            "bnForm": {},
            "banners": {
                "desktop": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1a'>FULL1A</option><option value='full1b'>FULL1B</option><option value='full1c'>FULL1C</option><option value='deal1'>DEAL1</option><option value='deal2'>DEAL2</option><option value='deal3'>DEAL3</option><option value='deal4'>DEAL4</option><option value='trio1'>TRIO1</option><option value='trio2'>TRIO2</option><option value='trio3'>TRIO3</option><option value='trio4'>TRIO4</option><option value='trio5'>TRIO5</option><option value='trio6'>TRIO6</option><option value='horizontal'>HORIZONTAL</option><option value='trio7'>TRIO7</option><option value='trio8'>TRIO8</option><option value='trio9'>TRIO9</option><option value='full3'>FULL3</option><option value='trjlista'>TARJA TOP LISTA</option><option value='trjpdp'>TARJA TOP PDP</option><option value='headerb'>HEADER BANNER</option>"
                },
                "mobile": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='full1a'>FULL1A</option><option value='full1b'>FULL1B</option><option value='full1c'>FULL1C</option><option value='botao1'>BOTÃO1</option><option value='botao2'>BOTÃO2</option><option value='botao3'>BOTÃO3</option><option value='full2a'>FULL2A</option><option value='full2b'>FULL2B</option><option value='full2c'>FULL2C</option><option value='full3a'>FULL3A</option><option value='full3b'>FULL3B</option><option value='full3c'>FULL3C</option><option value='deal1'>DEAL1</option><option value='deal2'>DEAL2</option><option value='deal3'>DEAL3</option>"
                },
                "topmenu": {
                    "bnForm": "<option value='FORMATO'>FORMATO</option><option value='1a'>MENU 1A</option><option value='1b'>MENU 1B</option><option value='2a'>MENU 2A</option><option value='2b'>MENU 2B</option><option value='3a'>MENU 3A</option><option value='3b'>MENU 3B</option><option value='4a'>MENU 4A</option><option value='4b'>MENU 4B</option><option value='5a'>MENU 5A</option><option value='5b'>MENU 5B</option><option value='6a'>MENU 6A</option><option value='6b'>MENU 6B</option><option value='7a'>MENU 7A</option><option value='7b'>MENU 7B</option><option value='8a'>MENU 8A</option><option value='8b'>MENU 8B</option>"
                }
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
                        "storeId": "L_CLUBENETSHOES",
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
                        "storeId": "L_CLUBENETSHOES",
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
                        "storeId": "L_CLUBENETSHOES",
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
                        "storeId": "L_CLUBENETSHOES",
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
                        "storeId": "L_CLUBENETSHOES",
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
                        "storeId": "L_CLUBENETSHOES",
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
                        "storeId": "L_CLUBENETSHOES",
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
                        "storeId": "L_CLUBENETSHOES",
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
                        "storeId": "L_CLUBENETSHOES",
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

        }
    }
})();
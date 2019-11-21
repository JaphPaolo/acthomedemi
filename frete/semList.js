var token = Math.random().toString(36).substr(2, 8) + "-" + Math.random().toString(36).substr(2, 4) + "-" + Math.random().toString(36).substr(2, 4) + "-" + Math.random().toString(36).substr(2, 4) + "-" + Math.random().toString(36).substr(2, 12)
var iLoja = ''
var iSellers = []
var iName = ''
var iDateFrom = ''
var iDateTo = ''
var cZipCodes = []
var iCampaign = []
var eModalities = []
var resposta = {}
var semList = {}

//seletores sem list
const nomePromo = document.querySelector('#nomePromo')
const idSellers = document.querySelector('#idSellers')
const sdatainicio = document.querySelector('#sdatainicio')
const shorainicio = document.querySelector('#shorainicio')
const sdatafim = document.querySelector('#sdatafim')
const shorafim = document.querySelector('#shorafim')
const rangeCeps = document.querySelector('#rangeCeps')
const campaignsCode = document.querySelector('#campaignsCode')
const entNormal = document.querySelector('#entNormal')
const entExpressa = document.querySelector('#entExpressa')
const entAgendada = document.querySelector('#entAgendada')
const buttPreProg = document.querySelector('#buttPreProg')

//eventos sem list
entNormal.addEventListener('click', () => {
  modNorm()
  validaForm()
  console.log(eModalities)
})
entExpressa.addEventListener('click', () => {
  modExpress()
  validaForm()
  console.log(eModalities)
})
entAgendada.addEventListener('click', () => {
  modAgend()
  validaForm()
  console.log(eModalities)
})
buttPreProg.addEventListener('click', () => {
  postSemList()
})

const validaForm = () => {
  const consts = [nomePromo, idSellers, sdatainicio, shorainicio, sdatafim, shorafim, rangeCeps]
  
  consts.map((i) => {
    if (!i.value){
      buttPreProg.disabled = true
    } else { buttPreProg.disabled = false }
  })
  jsonSem()
}

const jsonSem = () => {
  iLoja = butLoja.value
  iName = nomePromo.value
  iDateFrom = `${sdatainicio.value}T${shorainicio.value}:00`
  iDateTo = `${sdatafim.value}T${shorafim.value}:00`
  //Sellers in
  arrSellers = []
  idSellers.value.split(',').map((i) => {
    if(i.slice(0, 1) === ' '){
      arrSellers.push(i.slice(1))
    } else { arrSellers.push(i) }
  })
  iSellers = arrSellers
  //Sellers fm
  //Ceps in
  const filterRange = []
  rangeCeps.value.split(',').map((i) => {
    if(i.slice(0, 1) === ' '){
      filterRange.push(i.slice(1))
    } else { filterRange.push(i) }
  })
  
  filterRange.map((i) => {
    const objCep = {
      start: '',
      end: ''
    }
    const separaCep = i.split('-')
    objCep.start = separaCep[0]
    objCep.end = separaCep[1]
    cZipCodes.push(objCep)
  })
  //Ceps fm
  //Campaigns in
  if (!!campaignsCode.value) {
    campaignsCode.value.split(',').map((i) => {
      if(i.slice(0, 1) === ' '){
        iCampaign.push(i.slice(1))
      } else { iCampaign.push(i) }
    })
  } else { iCampaign = [] }
  //campaigns fm
  geraJson()
}

const geraJson = () => {
  semList = {
    'storeId': iLoja,
    'sellers': iSellers,
    'name': iName,
    'effectiveDate': {
      'from': iDateFrom,
      'to': iDateTo
    },
    'status': 'ACTIVE',
    'criteria': {
      'zipCodes': cZipCodes,
      'expression': 'SP(STORE())'
    },
    'cumulative': true,
    'cumulativeWithNcard': true,
    'hasCoupon': false,
    'hasStamp': false,
    'useBlacklist': false,
    'campaigns': iCampaign,
    'effect': {
      'amount': 100,
      'type': 'CART_SET_FREIGHT_DISCOUNT',
      'unit': 'PERCENT',
      'modalities': eModalities,
      'useAverageAmount': false
    },
    'clusters': [],
    'emails': []
  }
}

const arrayRemove = (arr, val) => {
  return arr.filter((ele) => {
      return ele != val;
  });
}

const modNorm = () => {
  if (entNormal.checked){
    eModalities.push(String(entNormal.value))
  } else { eModalities = arrayRemove(eModalities, entNormal.value) }
}

const modExpress = () => {
  if (entExpressa.checked){
    eModalities.push(String(entExpressa.value))
  } else { eModalities = arrayRemove(eModalities, entExpressa.value) }
}

const modAgend = () => {
  if (entAgendada.checked){
    eModalities.push(String(entAgendada.value))
  } else { eModalities = arrayRemove(eModalities, entAgendada.value) }
}

const postSemList = () => {
  var data = JSON.stringify(semList);
  
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  
  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === 4) {
      console.log(this.responseText)
      resposta = JSON.parse(this.responseText)
      const d = document.querySelector('.jossa')
      d.innerHTML = `<p>Por favor, guarde este ID:</p><strong><p>${resposta.promotion.uid}</p></strong>`
      buttPreProg.disabled = true
    }
  });
  
  xhr.open('POST', `http://az-br-prd-free-campaign-01.netshoes.io:8080/api/secure/store/${butLoja.value}/promotions/`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', '*/*');
  xhr.setRequestHeader('Cache-Control', 'no-cache');
  xhr.setRequestHeader('Postman-Token', token);
  xhr.setRequestHeader('cache-control', 'no-cache');
  
  xhr.send(data);
}
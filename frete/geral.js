//seletores menu
const butLoja = document.querySelector('#stodreso')
const butDesc = document.querySelector('#tipDesconto')

butLoja,addEventListener('change', () => {
    butDesc.disabled = false
    butLoja.disabled = true
    butLoja.addEventListener('change', doForm())
  })
  
  const doForm = () => {
  
    const formSemList = document.querySelector('.divSemList')
    const formComList = document.querySelector('.divComList')
    const tipoDesconto = document.querySelector('#tipDesconto')
  
    if (tipoDesconto.value === "semList") {
      formSemList.setAttribute('style', 'display: block')
      formComList.setAttribute('style', 'display: none')
    } else if (tipoDesconto.value === "comList") {
      formSemList.setAttribute('style', 'display: none')
      formComList.setAttribute('style', 'display: block')
    } else {
      formSemList.setAttribute('style', 'display: none')
      formComList.setAttribute('style', 'display: none')
    }
  }
  
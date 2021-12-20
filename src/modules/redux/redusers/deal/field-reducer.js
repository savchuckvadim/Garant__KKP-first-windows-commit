const CHANGE_CURRENT_INFOBLOCKS = 'CHANGE_CURRENT_INFOBLOCKS'
const CREATE_COMPLECT = 'CREATE_COMPLECT'
const CHANGE_CURRENT_ER = 'CHANGE_CURRENT_ER'
const CHANGE_CURRENT_LT = 'CHANGE_CURRENT_LT'
const CHANGE_CURRENT_PAKETS_ER = 'CHANGE_CURRENT_PAKETS_ER'
const DEAL_FIELD = 'DEAL_FIELD'

let initialState = {
    infoblocks: '',
    er: '',
    lt: '',
    freeBlocks: '',
    current: ''
}

let infoblocks = (array) => {
    let result = []

    array.forEach((elem, idx) => {
        let resultArray = ``
        let type = array[idx].nameOfType
        elem.value.forEach((element) => {

            if (element.checked) {
                resultArray += `
${element.name} </br>`
            }
        })
        if (resultArray) {
            result.push(type)
            result.push(resultArray)
        }
    })
    let stringResult = ``
    result.forEach(element => {
        stringResult += `
${element}`


    })
    // stringResult += `</pre>`
    console.log
    return (
        stringResult

    )
}
let legalTech = (array) => {
    let resultArray = `<pre>`
    array.value.forEach((elem) => {
        if (elem.checked === true) {
            resultArray += `
            ${elem.name}
            `
        }
    })
    resultArray += `
    </pre>
    `
    let title
    if (resultArray.length > 0) {
        title = `${array.nameOfType}`
    }

    return (
        <div key='infoTypeWrapper-0' className="infoTypeWrapper">
            {title}
            {resultArray}
        </div>

    )
}
const enciclopedias = (currentComplect, arrayOfPakets, arrayOfEr) => {
let result = ``
let indexesOfIncludedErs = []
let paketsEr = (currentComplect, arrayOfPakets, arrayOfEr) => {
    let paketsNames = ``
    let includedOfPakets = ``
    let paketsAndFilling = ``
    if (currentComplect) {
        if (currentComplect.fillingPaketsERIndexes) {
            // if(currentComplect.fillingPaketsERIndexes.length < 2){ //если в текущем комплекте меньше двух пакетов ЭР - т.е. не Офис
                currentComplect.fillingPaketsERIndexes.forEach(paketIndex => {
                    paketsNames += `${arrayOfPakets.value[paketIndex].name}</br> `


                    arrayOfPakets.value[paketIndex].including.forEach(indexOfEr => {
//                         if(!includedOfPakets.includes(indexOfEr)){
                            
//                             includedOfPakets += `
// ${arrayOfEr.value[indexOfEr].name}</br>`
//                         }
                        if(!indexesOfIncludedErs.includes(indexOfEr)){
                            
                            indexesOfIncludedErs.push(indexOfEr)
                        }
                        
                    })
                    indexesOfIncludedErs.forEach(indexOfEr => {
includedOfPakets += `
${arrayOfEr.value[indexOfEr].name}</br>`
                    })

                })
                paketsAndFilling = `
${paketsNames}`
                //подготавливаем массив из уникальных входящих в два пакетаЭР блоков ЭР
            
                paketsAndFilling += `${includedOfPakets}`
                
            // }else{
            //     currentComplect.fillingPaketsERIndexes.forEach(paketIndex => {
            //         paketsNames += `${arrayOfPakets[0].value[paketIndex].name} `
            //     })
            // }
            
        }
    }
    
    return paketsAndFilling
}

let er = (currentComplect, arrayOfEr, indexesOfIncludedErs) => {
    
    let result = ``
   
if(currentComplect.fillingEncyclopediasIndexes.length > 0){
    result = `

${arrayOfEr.nameOfType} </br>`

        arrayOfEr.value.forEach((element, index) => {
            if(element.checked === true){
                
    if(!indexesOfIncludedErs.includes(index)){
        result +=`
${element.name} </br>`
    }
    
            }
        })
    
        
}

return result
}
let paketsString = paketsEr(currentComplect, arrayOfPakets, arrayOfEr)
let erString = er(currentComplect, arrayOfEr, indexesOfIncludedErs)
console.log(erString)

result += paketsString
result += erString
// result += `/<pre>`

console.log(result)
return result
}


export const dealFieldActionCreator = (currentComplect, infoblocks = 0, er = 0, lt = 0, freeBlocks = 0) => {


    return {
        type: DEAL_FIELD,
        infoblocks,
        er,
        lt,
        freeBlocks,
        currentComplect
    }
}

const changeField = (stateCome, action) => {

    let infoblocksString = ''
    let erString = ''
    let ltString = ''

    let state = {
        ...stateCome
    }
    if (action.infoblocks) {
        infoblocksString = infoblocks(action.infoblocks)
        
    }
    if (action.er) {
        erString = enciclopedias(action.currentComplect, action.er[0], action.er[1])
    }
    // if (action.lt) {
    //     ltString = legalTech(action.lt)
    // }



    state.infoblocks = infoblocksString
    state.er = erString
   
    state.current = `
    ${infoblocksString}
    ${erString}

    
    `
  
    return state
}

export const dealFieldReducer = (state = initialState, action) => {

    if (action.type === DEAL_FIELD) {
        return changeField(state, action)
    }
    return state
}
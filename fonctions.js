let p="paul"
let j="jean"
let result= ''
function checkName(nom1,nom2){
    if (nom1==nom2) {
        result = 'oui'
    } else {
        result = 'non'
    }
    console.log(result)
    }
    checkName(j,p)
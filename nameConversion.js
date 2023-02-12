const text = document.getElementById('text')
const caseP = document.querySelectorAll('p')
const btn = document.getElementById('convert-btn')

btn.addEventListener('click',generateCase)

function generateCase(){
    const words = text.value.split(' ')
    caseP.forEach(element => {
        let caseName = element.id
        switch(caseName){
            case 'camel-case':
                                let str = '';
                                words.map((item,index) => {
                                    if(index !== 0){
                                        item = item.charAt(0).toUpperCase() + item.slice(1)
                                    }
                                    str += item
                                })
                                element.innerText = str
                                break;
            case 'pascal-case': 
                                let pascalCase = '';
                                words.map((item,index) => {                                    
                                    item = item.charAt(0).toUpperCase() + item.slice(1)                                    
                                    pascalCase += item
                                })
                                element.innerText = pascalCase
                                break;
            case 'snake-case':  
                                let snakeCase = '';
                                words.map((item,index) => {  
                                    if(index !== (words.length - 1)){                                  
                                        item = item + '_'
                                    }                                   
                                    snakeCase += item
                                })
                                element.innerText = snakeCase
                                break;
            case 'screaming-snake-case':
                                 let screamingSnakeCase = '';
                                words.map((item,index) => {  
                                    if(index !== (words.length - 1)){                                  
                                        item = item + '_'
                                    }                                   
                                    screamingSnakeCase += item
                                })
                                element.innerText = screamingSnakeCase.toUpperCase()
                                break;
            case 'screaming-kebab-case':                                
                                let screamingKebabCase = '';
                                words.map((item,index) => {  
                                    if(index !== (words.length - 1)){                                  
                                        item = item + '-'
                                    }                                   
                                    screamingKebabCase += item
                                })
                                element.innerText = screamingKebabCase.toUpperCase()
                                break;
            case 'kebab-case':
                                let kebabCase = '';
                                words.map((item,index) => {  
                                    if(index !== (words.length - 1)){                                  
                                        item = item + '-'
                                    }                                   
                                    kebabCase += item
                                })
                                element.innerText = kebabCase
                                break;
        }
        //words.forEach(word => {});
        //console.log(caseName)
        
    });
}

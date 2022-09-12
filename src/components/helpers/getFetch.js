import data from '../ItemListContainer/mock-data'

const getFetch = new Promise ((resolve, reject) => {
    
    
    let condition = true
    if (condition) {
        setTimeout(()=> {
            resolve(data)
        },3000)
    } else {
        reject('400 - not found')
    }
  
    
})

export default getFetch
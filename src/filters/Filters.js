export const filterTime=(a)=>{
    var data = new Date(a)
    var year = data.getFullYear()
    var month = data.getMonth
    var day = data.getDate()
   return `${year}-${month}-${day}`
}
export const filterPrice=(a)=>{
   return a.toFixed(2)
}
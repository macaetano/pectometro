
const req = require('request')

// for(let i = 0; i <= 640; i++){
// req.get(`https://dadosabertos.camara.leg.br/api/v2/proposicoes?siglaTipo=PEC&numero=${i}`, (error ,response, body)=>{
//   console.log(a)
//   console.log(b)  
// })
  
// }

req.get(`https://dadosabertos.camara.leg.br/api/v2/proposicoes/${i}`, (error ,response, body)=>{
  console.log(body)

})
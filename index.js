const url = "https://open.er-api.com/v6/latest/USD"

async function getRates(){
await fetch(url).then((res)=>{
res.json().then(function(data){
console.log(data);
})
    })
}

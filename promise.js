
axios.get('http://numbersapi.com/12/trivia?json')
   .then(res => {
    const pEl = document.querySelector('p');
    pEl.append(res.data.text)})
   .catch(err =>$('p').text(err));

axios.get('http://numbersapi.com/2..6/trivia?json')
   .then(res => {
    const entries = Object.entries(res.data);

    for (let [key, value] of entries) {

        const li = document.createElement('li');
        li.append(value);
        const ulEl = document.querySelector('ul');
        ulEl.append(li)
    }})
   .catch(err =>console.log(err));

let fourFactsOfFavNum = [];
for(let i = 1; i<5; i++){
    fourFactsOfFavNum.push(
        axios.get(`http://numbersapi.com/12/trivia?json`)
    );
}

Promise.all(fourFactsOfFavNum)
    .then(res => {
        const olEl = document.querySelector('ol');      
        for(let i =0; i < res.length; i++){
            const li= document.createElement('li');
            li.append(res[i].data.text)
            olEl.append(li);
        }       
    })
    .catch(err => console.log(err))

    axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    .then(res => {
        console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
    })
    .catch(err => console.log(err));
    

    drawnCards=[];
    axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    .then(res => {
        drawnCards.push(res)
        return axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=1`)
    }).then(res =>{
        drawnCards.push(res)
        for(let i =0; i < drawnCards.length; i++){
            console.log(`${drawnCards[i].data.cards[0].value} of ${drawnCards[i].data.cards[0].suit}`)            
        }
    }).catch(err => console.log(err));
    

    
    
       
   




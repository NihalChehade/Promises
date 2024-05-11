
let newDeckResp;

window.onload = (event) => {
  
    axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => {
        newDeckResp = res;
        });
        const drawCardBtn = document.createElement("button");
        drawCardBtn.className="btn btn-lg btn-success mt-3";
        drawCardBtn.innerText="Draw A Card";
        drawCardBtn.addEventListener('click', onClickHandler);
        const topDiv = document.querySelector('#top');
        topDiv.append(drawCardBtn);
};



function onClickHandler(){
    axios.get(`https://deckofcardsapi.com/api/deck/${newDeckResp.data.deck_id}/draw/?count=1`)
    .then(res => {
        if(res.data.remaining ===0){
            const btn =document.querySelector('.btn');
            btn.removeEventListener('click',onClickHandler);
        }
        let zIndexCounter = 1;
        const mainDiv =document.querySelector('#main');
        const cardDiv = document.createElement('div');
        cardDiv.style.zIndex =zIndexCounter++;
        cardDiv.style.transform = `translateY(-${20 * (zIndexCounter - 1)}px) rotate(${Math.random() * 50 - 25}deg)`;
        cardDiv.classList.add('cardDiv');
        const img = document.createElement('img');
        img.src =res.data.cards[0].image;
        cardDiv.append(img);
        mainDiv.append(cardDiv);            
    });

}


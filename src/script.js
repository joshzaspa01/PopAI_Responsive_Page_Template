// For Sidebar
function show() {
    document.querySelector('.hamburger').classList.toggle('open');
    document.querySelector('.sidebar').classList.toggle('active');
}


function displayCards() {

    fetch('json/data.json')
        .then(res => res.text())
        .then(data => {
            const cardsData = JSON.parse(data);
            
            let createTemplatesCard = '';
            let aiPresentationCard = '';

            cardsData.createTemplates.map(val => {
                createTemplatesCard += `
                    <div class="card_item_2">
                        <div class="card_img_cont">
                            <img class="card_img" src="${val.coverImg}" alt="" srcset="">
                        </div>
                        <h1 class="card_title">${val.title}</h1>
                        <p class="card_subtitle">${val.subTitle}</p>
                    </div>
                `;
            });

            cardsData.AIPresentations.map(val => {
                aiPresentationCard += `
                    <div id="card_item_bg_img" class="card_item" style="background-image: url(${val.coverImg});">
                        <h1 class="card_title">${val.title}</h1>
                        <input class="card_cta" type="button" value="${val.cardCTA}">
                    </div>
                `;
            })

            document.querySelector('.content_holder_2').innerHTML = createTemplatesCard;
            document.querySelector('.content_block_1 .content_holder').innerHTML = aiPresentationCard;
        });

};

displayCards();
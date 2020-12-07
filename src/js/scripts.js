function renderCards(data) {
    const goodsWrapper = document.querySelector('.goods__list');
    console.log(goodsWrapper.parentElement)
    data.goods.forEach((good) => {
        const card = document.createElement('div');
        card.className = 'goods__list-item';
        card.setAttribute('data-id', good.id);



        if (goodsWrapper) {
            card.innerHTML = `
            <figure class="goods__list-item-img">
                <img src="${good.image}" alt="" style="display: inline">
                <div 
                    style="${good.sale ? 'display: flex' : 'display: none'}" 
                    class="sale">
                    Акция
                </div>
                <div 
                    style="${good.hit ? 'display: flex;' : 'display: none'}
                    ${good.sale === false ? 'left: 10px;' : ''}" 
                    class="hit">
                    Хит
                </div>
                <div 
                    style="${good.bestPrice ? 'display: flex' : 'display: none'}" 
                    class="best-price">
                    Лучшая цена
                </div>
            </figure>
                             
            <div class="goods__list-item-description">
                
                    <h5 class="goods__list-item-description-title">${good.title}</h5>
                    <h5 class="goods__list-item-description-text">${good.description}</h5>
                
            
                
                <div class="goods__list-item-description-price ">
                    
                    <div>
                        <span 
                        style="${good.oldPrice === '' ? 'display:none' : ''}" 
                        class="goods__list-item-description-price-old">
                            ${good.oldPrice} ₽ 
                        </span>
                        <span 
                        style="${good.sale ? '' : ''}" class="goods__list-item-description-price-new">
                            ${good.new ? good.newPrice = good.oldPrice : good.newPrice} ₽ 
                        </span>
                    
                    </div>
                    
                    <a class="goods__list-item-btn">
                        <img src="./images/.basket.svg" alt="">
                    </a>
                    
                </div>
                
                </div>
                
            </div>
        `;
        } else {
            card.style.display = 'none'
        }

        goodsWrapper.appendChild(card);
    });
}

renderCards(newDB)



// popup

const join = document.querySelector('.header__login-auth-btn');
const joinMobile = document.querySelector('.header__login-auth-img');

const callback = document.querySelector('.footer__calback-btn');

const joinClose = document.querySelector('.join-btn-close');
const callbackClose = document.querySelector('.callback-btn-close');


const accountModal = document.querySelector('.join-wrapper');
const callbackModal = document.querySelector('.callback-wrapper');



function openJoin() {
    accountModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function openCallback() {
    callbackModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeJoin() {
    accountModal.style.display = 'none';
    document.body.style.overflow = '';
}

function closeCallback() {
    callbackModal.style.display = 'none';
    document.body.style.overflow = '';
}

join.addEventListener('click', openJoin);
joinMobile.addEventListener('click', openJoin);
callback.addEventListener('click', openCallback);
joinClose.addEventListener('click', closeJoin);
callbackClose.addEventListener('click', closeCallback);

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const rankPaginations = document.querySelectorAll('.rank-pagination__item')
console.log(rankPaginations)
rankPaginations.forEach(pagination => {
    pagination.onclick = (e) => {
        pagination.classList.add('active')
    }
})

const heartIcons = $$('.rank-item__icon');
const heartClassActive = 'rank-item__icon fas fa-heart active'
const heartClassInactive = 'rank-item__icon far fa-heart'

heartIcons.forEach(heart => {
    heart.onclick = () => {
        if (heart.className === heartClassInactive) {
            heart.className = heartClassActive
        } else {
            heart.className = heartClassInactive
        }
    }
})


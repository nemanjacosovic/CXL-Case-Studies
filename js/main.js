// Thumbnail
const thumbMachine = (thumbArr) => {
    thumbArr.forEach( thumb => {
        thumb.addEventListener('click', () => {
            const thumbChilds = thumb.childNodes
            const redirectUrl = thumbChilds[7].getAttribute('href')

            return window.location.href = redirectUrl
        })
    })
}

// Mobile menu
const btnMenu = document.querySelector('#menu-button')
const container = document.querySelector('#container')

btnMenu.addEventListener('click', () => {
    const ccl = container.classList

    if (ccl.contains('header-visible')) {
        ccl.remove('header-visible')
    } else {
        ccl.add('header-visible')
    }
})

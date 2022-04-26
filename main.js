const tabItems = document.querySelectorAll('.tab-item')
const tabContent = document.querySelectorAll('.tab-content-item')

function selectItem(event) {
    removeItem()
    this.classList.toggle('tab-border')
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    tabContentItem.classList.add('show')
}

function removeItem() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
    tabContent.forEach(item => item.classList.remove('show'))
}


tabItems.forEach(item => item.addEventListener('click', selectItem))
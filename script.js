// 監控頁面滾動事件
window.onscroll = function() {
    let header = document.querySelector('header'); // 獲取 header 元素
    if (window.scrollY > 50) { // 滾動超過 50px 時
        header.classList.add('scrolled'); // 增加 'scrolled' 類別
    } else {
        header.classList.remove('scrolled'); // 滾動未超過 50px 時，移除 'scrolled' 類別
    }
};

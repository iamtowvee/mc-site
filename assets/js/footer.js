(function() {
    const footer = document.querySelector('.footer');
    if (!footer) return;
    
    function checkFooterVisibility() {
        const scrollBottom = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;
        
        // Когда до конца страницы осталось 50px
        if (scrollBottom + 50 >= pageHeight) {
            footer.classList.add('visible');
        } else {
            footer.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', checkFooterVisibility);
    window.addEventListener('resize', checkFooterVisibility);
    checkFooterVisibility();
})();
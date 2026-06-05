(function() {
    const loader = document.getElementById('loader');
    const progressBar = document.getElementById('loaderProgress');
    
    let progress = 0;
    let interval;
    
    function updateProgress(value) {
        progress = Math.min(95, Math.max(0, value));
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
    }
    
    // Быстро доходим до 95%
    interval = setInterval(() => {
        if (progress < 95) {
            progress += Math.random() * 8;
            updateProgress(progress);
        } else {
            clearInterval(interval);
        }
    }, 100);
    
    // Ждём реальную загрузку
    function finishLoading() {
        if (interval) clearInterval(interval);
        
        // Добиваем до 100%
        let finalProgress = 95;
        const finalInterval = setInterval(() => {
            if (finalProgress < 100) {
                finalProgress += 2;
                if (progressBar) progressBar.style.width = finalProgress + '%';
            } else {
                clearInterval(finalInterval);
                // Падаем вниз
                if (loader) loader.classList.add('hide');
                // Удаляем лоадер после анимации
                setTimeout(() => {
                    if (loader && loader.parentNode) loader.remove();
                }, 800);
            }
        }, 15);
    }
    
    // Когда всё загрузилось
    if (document.readyState === 'complete') {
        finishLoading();
    } else {
        window.addEventListener('load', finishLoading);
    }
})();
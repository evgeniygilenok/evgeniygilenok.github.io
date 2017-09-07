var imgs = document.querySelectorAll('img');
var callback = false;

function slide(x) {
    if (!callback) {
        switch (x) {
            case 1:
                imgs[0].style.zIndex = 3;
                imgs[0].style.left = 'calc('+50+'% - '+100+'px)';
                imgs[2].style.left = 0 + 'px';
                imgs[0].style.animationPlayState = 'running';
                imgs[2].style.animationPlayState = 'running';
                setTimeout(function() {
                        imgs[0].style.width = '100%';
                        imgs[0].style.left = 0 + 'px';
                        imgs[0].style.animationPlayState = 'paused';
                        imgs[2].style.animationPlayState = 'paused';
                    }, 1000);
                callback = true;
                break;
            case 2:
                imgs[1].style.zIndex = 3;
                imgs[1].style.left = 'calc('+50+'% - '+100+'px)';
                imgs[2].style.left = 200 + 'px';
                imgs[1].style.animationPlayState = 'running';
                imgs[2].style.animationPlayState = 'running';
                setTimeout(function() {
                        imgs[1].style.width = '100%';
                        imgs[1].style.left = 0 + 'px';
                        imgs[1].style.animationPlayState = 'paused';
                        imgs[2].style.animationPlayState = 'paused';
                    }, 1000);
                callback = true;
                break;
            case 3:
                imgs[2].style.zIndex = 3;
                // imgs[2].style.left = 'calc('+50+'% - '+100+'px)';
                setTimeout(function() {
                        imgs[2].style.width = '100%';
                        imgs[2].style.left = 0 + 'px';
                    }, 100);
                callback = true;
                break;
            case 4:
                imgs[3].style.zIndex = 3;
                imgs[3].style.left = 'calc('+50+'% - '+100+'px)';
                imgs[2].style.left = 600 + 'px';
                imgs[3].style.animationPlayState = 'running';
                imgs[2].style.animationPlayState = 'running';
                setTimeout(function() {
                        imgs[3].style.width = '100%';
                        imgs[3].style.left = 0 + 'px';
                        imgs[3].style.animationPlayState = 'paused';
                        imgs[2].style.animationPlayState = 'paused';
                    }, 1000);
                callback = true;
                break;
            case 5:
                imgs[4].style.zIndex = 3;
                imgs[4].style.left = 'calc('+50+'% - '+100+'px)';
                imgs[2].style.left = 800 + 'px';
                imgs[4].style.animationPlayState = 'running';
                imgs[2].style.animationPlayState = 'running';
                setTimeout(function() {
                        imgs[4].style.width = '100%';
                        imgs[4].style.left = 0 + 'px';
                        imgs[4].style.animationPlayState = 'paused';
                        imgs[2].style.animationPlayState = 'paused';
                    }, 1000);
                callback = true;
                break;
        
            default:
                break;
        }
    } else if (callback) {
        switch (x) {
            case 1:
                imgs[0].style.zIndex = 2;
                imgs[0].style.width = 200 + 'px';
                imgs[0].style.left = 'calc('+50+'% - '+100+'px)';
                setTimeout(function() {
                        imgs[0].style.left = 0 + 'px';
                        imgs[2].style.left = 400 + 'px';
                        imgs[0].style.animationPlayState = 'running';
                        imgs[2].style.animationPlayState = 'running';
                    }, 1000);
                imgs[0].style.animationPlayState = 'paused';
                imgs[2].style.animationPlayState = 'paused';
                imgs[0].style.zIndex = 1;
                callback = false;
                break;
            case 2:
                imgs[1].style.zIndex = 2;
                imgs[1].style.width = 200 + 'px';
                imgs[1].style.left = 'calc('+50+'% - '+100+'px)';
                setTimeout(function() {
                        imgs[1].style.left = 200 + 'px';
                        imgs[2].style.left = 400 + 'px';
                        imgs[1].style.animationPlayState = 'running';
                        imgs[2].style.animationPlayState = 'running';
                    }, 1000);
                imgs[1].style.animationPlayState = 'paused';
                imgs[2].style.animationPlayState = 'paused';
                imgs[1].style.zIndex = 1;
                callback = false;
                break;
            case 3:
                imgs[2].style.zIndex = 2;
                imgs[2].style.width = 200 + 'px';
                imgs[2].style.left = 'calc('+50+'% - '+100+'px)';
                setTimeout(function() {
                        imgs[2].style.left = 400 + 'px';
                    }, 1000);
                imgs[2].style.zIndex = 1;
                callback = false;
                break;
            case 4:
                imgs[3].style.zIndex = 2;
                imgs[3].style.width = 200 + 'px';
                imgs[3].style.left = 'calc('+50+'% - '+100+'px)';
                setTimeout(function() {
                        imgs[3].style.left = 600 + 'px';
                        imgs[2].style.left = 400 + 'px';
                        imgs[3].style.animationPlayState = 'running';
                        imgs[2].style.animationPlayState = 'running';
                    }, 1000);
                imgs[3].style.animationPlayState = 'paused';
                imgs[2].style.animationPlayState = 'paused';
                imgs[3].style.zIndex = 1;
                callback = false;
                break;
            case 5:
                imgs[4].style.zIndex = 2;
                imgs[4].style.width = 200 + 'px';
                imgs[4].style.left = 'calc('+50+'% - '+100+'px)';
                setTimeout(function() {
                        imgs[4].style.left = 800 + 'px';
                        imgs[2].style.left = 400 + 'px';
                        imgs[4].style.animationPlayState = 'running';
                        imgs[2].style.animationPlayState = 'running';
                    }, 1000);
                imgs[4].style.animationPlayState = 'paused';
                imgs[2].style.animationPlayState = 'paused';
                imgs[4].style.zIndex = 1;
                callback = false;
                break;
        
            default:
                break;
        }
    }
}
function checkAdBlock(callbackAdBlockDetected, callbackAdBlockNotDetected) {
        var ad_div = document.createElement('div');
        ad_div.innerHTML = '&nbsp;';
        ad_div.className = 'adsbox';
        document.body.appendChild(ad_div);

        window.setTimeout(function() {
                if (ad_div.offsetHeight === 0) {
                        if(typeof(callbackAdBlockDetected) == "function") {
                                callbackAdBlockDetected();
                        }
                } else {
                        if(typeof(callbackAdBlockNotDetected) == "function") {
                                callbackAdBlockNotDetected();
                        }
                }

                ad_div.remove();
        }, 100);
}

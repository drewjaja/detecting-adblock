# Detecting AdBlock

This is a very simple example how to detect if AdBlock is installed. It does not detect if AdBlock has been disabled or if the current site has been whitelisted, so use this carefully not to blame people that might actually have been OK with your site.

# Usage

Include adblock-detect.js and call checkAdBlock just before </body>

<code>
checkAdBlock(adBlockDetected, adBlockNotDetected);

function adBlockDetected() {
    // Ad Blocker Detected, do stuff here
}

function adBlockNotDetected() {
    // Ad Blocker Not Detected, do stuff here
}
</code>

// START *******************************************************************************************
// *************************************************************************************************

window.onresize = UpdateDisplay;

Translate('English', false);

function JumpToTopPlease() {
    divOverlayLoading.scrollTo(0, 0);
    divOverlayForeword.scrollTo(0, 0);
    divGameWindow.scrollTo(0, 0);
    window.scrollTo(0, 0);
}
window.onbeforeunload = function(){ JumpToTopPlease(); };
window.onpagehide =  function(){ JumpToTopPlease(); };

setTimeout(() => {
    divOverlayLoading.classList.add('removeLoadingOverlay');
    setTimeout(() => {
        divOverlayLoading.style.display = 'none';
    }, 500);
}, 23);



// ╔════════════════════╗
// ║ PRAEDIUM v1.7.03   ║
// ╟────────────────────╢
// ║                    ║
// ║                    ║
// ║                    ║
// ║                    ║
// ║   by Michael Davis ║
// ║         12/02/2024 ║
// ╚════════════════════╝



// End of Document
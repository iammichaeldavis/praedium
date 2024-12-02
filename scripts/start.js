// START *******************************************************************************************
// *************************************************************************************************

window.onresize = UpdateDisplay;

Translate('English', false);

window.onbeforeunload = function(){ JumpToTopPlease(); };
window.onpagehide =  function(){ JumpToTopPlease(); };

setTimeout(() => {
    divOverlayLoading.classList.add('removeLoadingOverlay');
    setTimeout(() => {
        divOverlayLoading.style.display = 'none';
    }, 500);
}, 23);



// ╔════════════════════╗
// ║ PRAEDIUM v1.7.04   ║
// ╟────────────────────╢
// ║                    ║
// ║                    ║
// ║                    ║
// ║                    ║
// ║   by Michael Davis ║
// ║         12/02/2024 ║
// ╚════════════════════╝



// End of Document
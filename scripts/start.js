// START *******************************************************************************************
// *************************************************************************************************

window.onresize = UpdateDisplay;

Translate('English', false);

window.onbeforeunload = function () { JumpToTopPlease(); };
window.onpagehide = function () { JumpToTopPlease(); };

setTimeout(() => {
    divOverlayLoading.classList.add('removeLoadingOverlay');
    CheckForPreviousGame();
    setTimeout(() => {
        divOverlayLoading.style.display = 'none';
    }, 500);
}, 23);




// ╔════════════════════╗
// ║ PRAEDIUM v1.9.0    ║
// ╟────────────────────╢
// ║                    ║
// ║                    ║
// ║                    ║
// ║                    ║
// ║   by Michael Davis ║
// ║         12/06/2024 ║
// ╚════════════════════╝



// End of Document
// START *******************************************************************************************
// *************************************************************************************************

window.onresize = UpdateDisplay;

window.onbeforeunload = function () { JumpToTopPlease(); };
window.onpagehide = function () { JumpToTopPlease(); };

Translate('English', false);

CheckForPreviousGame();

PreloadImages();

setTimeout(() => {
    setTimeout(() => {
        divOverlayLoading.style.display = 'none';
    }, 500);
    divOverlayLoading.classList.add('removeLoadingOverlay');
}, 23); // 𝕭𝖊 𝖘𝖚𝖗𝖊 𝖞𝖔𝖚𝖗 𝖘𝖎𝖓 𝖜𝖎𝖑𝖑 𝖋𝖎𝖓𝖉 𝖞𝖔𝖚 𝖔𝖚𝖙




// ╔════════════════════╗
// ║ PRAEDIUM v1.10.4   ║
// ╟────────────────────╢
// ║                    ║
// ║                    ║
// ║                    ║
// ║                    ║
// ║   by Michael Davis ║
// ║         12/15/2024 ║
// ╚════════════════════╝



// End of Document
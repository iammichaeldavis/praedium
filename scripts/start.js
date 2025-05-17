// ۞ START *****************************************************************************************
// *************************************************************************************************

window.onresize = UpdateDisplay;

window.onbeforeunload = function () { JumpToTopPlease(); };
window.onpagehide = function () { JumpToTopPlease(); };

Translate('English', false);

CheckForPreviousGame();

PreloadImages();

RebuildFacesArray();

setTimeout(() => {
    setTimeout(() => {
        divOverlayLoading.style.display = 'none';
    }, 500);
    divOverlayLoading.classList.add('removeLoadingOverlay');
}, 23); // 𝕭𝖊 𝖘𝖚𝖗𝖊 𝖞𝖔𝖚𝖗 𝖘𝖎𝖓 𝖜𝖎𝖑𝖑 𝖋𝖎𝖓𝖉 𝖞𝖔𝖚 𝖔𝖚𝖙



// ╔══════════════════╗
// ║     PRAEDIUM     ║
// ╟──────────────────╢
// ║    v1.15.09-F    ║
// ╟──────────────────╢
// ║                  ║
// ║                  ║
// ║                  ║
// ║                  ║
// ║ by Michael Davis ║
// ║        5/17/2025 ║
// ╚══════════════════╝

// “The humble semicolon is why spacing and line-ends do not matter
// to C and C-like languages.  It means we as programmers can focus
// all of our white space and lines on  communicating our intent to
// humans.  This freedom is not an excuse  to write obtuse or dense
// code but instead freedom to describe what we mean or use spacing
// to help us understand our code.  ...  When I write JavaScript, I
// meticulously include  semicolons at  the end  of all  statements
// because "any good C programmer can write C in any language".”
//                            -Dr. Charles “Doctor Chuck” Severance

// ۝

// End of Document
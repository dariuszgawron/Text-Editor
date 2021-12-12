const fontFamilyBtn = document.querySelector('.toolbar__btn');
const sizeBtn = document.querySelector('.toolbar__btn');
const boldBtn = document.querySelector('.toolbar__btn[name=bold]');
const italicBtn = document.querySelector('.toolbar__btn[name=italic]');
const underlineBtn = document.querySelector('.toolbar__btn[name=underline]');
const colorBtn = document.querySelector('.toolbar__btn');
const alignLeftBtn = document.querySelector('.toolbar__btn[name=align-left]');
const alignCenterBtn = document.querySelector('.toolbar__btn[name=align-center]');
const alignRightBtn = document.querySelector('.toolbar__btn[name=align-right]');
const orderedListBtn = document.querySelector('.toolbar__btn[name=ordered-list]');
const unorderedListBtn = document.querySelector('.toolbar__btn[name=unordered-list]');

function changeText(commandName, defaultUI = false, valueArgument = null) {
    document.execCommand(commandName, defaultUI, valueArgument);
}

fontFamilyBtn.addEventListener('click', () => changeText('italic'));
sizeBtn.addEventListener('click', () => changeText('italic'));
boldBtn.addEventListener('click', () => changeText('bold'));
italicBtn.addEventListener('click', () => changeText('italic'));
underlineBtn.addEventListener('click', () => changeText('underline'));
colorBtn.addEventListener('click', () => changeText('italic'));
alignLeftBtn.addEventListener('click', () => changeText('justifyLeft'));
alignCenterBtn.addEventListener('click', () => changeText('justifyCenter'));
alignRightBtn.addEventListener('click', () => changeText('justifyRight'));
orderedListBtn.addEventListener('click', () => changeText('insertOrderedList'));
unorderedListBtn.addEventListener('click', () => changeText('insertUnorderedList'));
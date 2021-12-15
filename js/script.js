const textArea = document.querySelector('.content__editor');

const undoBtn = document.querySelector('.toolbar-button[name=undo]');
const redoBtn = document.querySelector('.toolbar-button[name=redo]');

const copyBtn = document.querySelector('.toolbar-button[name=copy]');
const pasteBtn = document.querySelector('.toolbar-button[name=paste]');
const cutBtn = document.querySelector('.toolbar-button[name=cut]');

const nameBtn = document.querySelector('.toolbar-select[name=name]');
const sizeBtn = document.querySelector('.toolbar-select[name=size]');
const boldBtn = document.querySelector('.toolbar-button[name=bold]');
const italicBtn = document.querySelector('.toolbar-button[name=italic]');
const underlineBtn = document.querySelector('.toolbar-button[name=underline]');
const strikeBtn = document.querySelector('.toolbar-button[name=strike]');
const subscriptBtn = document.querySelector('.toolbar-button[name=subscript]');
const superscriptBtn = document.querySelector('.toolbar-button[name=superscript]');
const colorBtn = document.querySelector('.toolbar-input[name=color]');
const removeFormatBtn = document.querySelector('.toolbar-button[name=remove-format]');

const outdentBtn = document.querySelector('.toolbar-button[name=outdent]');
const indentBtn = document.querySelector('.toolbar-button[name=indent]');
const alignLeftBtn = document.querySelector('.toolbar-button[name=align-left]');
const alignCenterBtn = document.querySelector('.toolbar-button[name=align-center]');
const alignRightBtn = document.querySelector('.toolbar-button[name=align-right]');
const alignJustifyBtn = document.querySelector('.toolbar-button[name=align-justify]');
const orderedListBtn = document.querySelector('.toolbar-button[name=ordered-list]');
const unorderedListBtn = document.querySelector('.toolbar-button[name=unordered-list]');

const listOfFonts = ["Times New Roman","Arial","Georgia","Palatino","Calibri"];

function changeText(commandName, defaultUI = false, valueArgument = null) {
    document.execCommand(commandName, defaultUI, valueArgument);
    textArea.focus();
}

function getStyleValue(element, propertyName) {
    return window.getComputedStyle(element, null).getPropertyValue(propertyName);
}

function sortStringItems(a, b) {
    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

function addItemsToList(list, items, selectedItem) {
    items.sort(sortStringItems).forEach(item => list.innerHTML += `<option class="toolbar-select__option" value="${item}" ${('"'+item+'"'===selectedItem) ? "selected" : ""}>${item}</option>`);
}

window.onload = () => {
    // const detective = new Detector();
    // detective.detect('font name');
    const fontName = getStyleValue(textArea,'font-family');
    addItemsToList(nameBtn,listOfFonts, fontName);
    textArea.focus();
} 

undoBtn.addEventListener('click', () => changeText('undo'));
redoBtn.addEventListener('click', () => changeText('redo'));

copyBtn.addEventListener('click', () => changeText('copy'));
pasteBtn.addEventListener('click', () => changeText('Paste'));
cutBtn.addEventListener('click', () => changeText('cut'));

nameBtn.addEventListener('change', (e) => changeText('fontName',false,e.target.value));
sizeBtn.addEventListener('change', (e) => changeText('fontSize',false,e.target.value));
boldBtn.addEventListener('click', () => changeText('bold'));
italicBtn.addEventListener('click', () => changeText('italic'));
underlineBtn.addEventListener('click', () => changeText('underline'));
strikeBtn.addEventListener('click', () => changeText('strikeThrough'));
subscriptBtn.addEventListener('click', () => changeText('subscript'));
superscriptBtn.addEventListener('click', () => changeText('superscript'));
colorBtn.addEventListener('change', (e) => {console.log(e.target.value);changeText('foreColor',false,e.target.value)});

outdentBtn.addEventListener('click', () => changeText('outdent'));
indentBtn.addEventListener('click', () => changeText('indent'));
alignLeftBtn.addEventListener('click', () => changeText('justifyLeft'));
alignCenterBtn.addEventListener('click', () => changeText('justifyCenter'));
alignRightBtn.addEventListener('click', () => changeText('justifyRight'));
alignJustifyBtn.addEventListener('click', () => changeText('justifyFull'));
orderedListBtn.addEventListener('click', () => changeText('insertOrderedList'));
unorderedListBtn.addEventListener('click', () => changeText('insertUnorderedList'));

removeFormatBtn.addEventListener('click', () => changeText('removeFormat'));
const textArea = document.querySelector('.content__editor');

const copyBtn = document.querySelector('.toolbar__btn[name=copy]');
const pasteBtn = document.querySelector('.toolbar__btn[name=paste]');
const cutBtn = document.querySelector('.toolbar__btn[name=cut]');

const nameBtn = document.querySelector('.toolbar__select[name=name]');
const sizeBtn = document.querySelector('.toolbar__select[name=size]');
const boldBtn = document.querySelector('.toolbar__btn[name=bold]');
const italicBtn = document.querySelector('.toolbar__btn[name=italic]');
const underlineBtn = document.querySelector('.toolbar__btn[name=underline]');
const strikeBtn = document.querySelector('.toolbar__btn[name=strike]');
const subscriptBtn = document.querySelector('.toolbar__btn[name=subscript]');
const superscriptBtn = document.querySelector('.toolbar__btn[name=superscript]');
const colorBtn = document.querySelector('.toolbar__btn[name=color]');

const outdentBtn = document.querySelector('.toolbar__btn[name=outdent]');
const indentBtn = document.querySelector('.toolbar__btn[name=indent]');
const alignLeftBtn = document.querySelector('.toolbar__btn[name=align-left]');
const alignCenterBtn = document.querySelector('.toolbar__btn[name=align-center]');
const alignRightBtn = document.querySelector('.toolbar__btn[name=align-right]');
const alignJustifyBtn = document.querySelector('.toolbar__btn[name=align-justify]');
const orderedListBtn = document.querySelector('.toolbar__btn[name=ordered-list]');
const unorderedListBtn = document.querySelector('.toolbar__btn[name=unordered-list]');

const removeFormatBtn = document.querySelector('.toolbar__btn[name=remove-format]');

function changeText(commandName, defaultUI = false, valueArgument = null) {
    document.execCommand(commandName, defaultUI, valueArgument);
    textArea.focus();
}

window.onload = () => textArea.focus(); 

copyBtn.addEventListener('click', () => changeText('copy'));
pasteBtn.addEventListener('click', () => changeText('paste'));
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
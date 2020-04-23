const codeActionButtons = [
  {
    icon: 'copy', 
    id: 'copy',
    title: 'Copy Code'
  },
  {
    icon: 'order',
    id: 'lines',
    title: 'Toggle Line Numbers' 
  },
  {
    icon: 'carly',
    id: 'wrap',
    title: 'Toggle Line Wrap' 
  }
];

function actionPanel() {
  const panel = createEl();
  panel.className = 'panel_box';
  
  codeActionButtons.forEach(function(button) {
    // create button
    const btn = createEl('a');
    btn.href = '#';
    btn.title = button.title;
    btn.className = `icon panel_icon panel_${button.id}`;
    // load icon inside button
    loadSvg(button.icon, btn);
    // append button on panel
    panel.appendChild(btn);
  });

  return panel;
}

function toggleLineNumbers(elems) {
  elems.forEach(elem => modifyClass(elem, 'pre_nolines'))
}

function toggleLineWrap(elem) {
  modifyClass(elem, 'pre_wrap');
}

function copyCode(codeElement) {
  lineNumbers = elems('.ln', codeElement);
  
  // remove line numbers before copying
  if(lineNumbers.length) {
    lineNumbers.forEach(function(line){
      line.remove();
    });
  }
  
  const codeToCopy = codeElement.textContent;
  // copy code

  copyToClipboard(codeToCopy);
}

(function codeActions(){
  const markedCodeBlocks = elems('code');
  const blocks = Array.from(markedCodeBlocks).filter(function(block){
    return hasClasses(block) && !Array.from(block.classList).includes('noClass');
  }).map(function(block){
    return block
  });
  
  const highlightWrapId = 'highlight_wrap';
  blocks.forEach(function(block){
    const highlightElement = block.parentNode.parentNode;
    // wrap code block in a div
    const highlightWrapper = createEl();
    highlightWrapper.className = highlightWrapId;
    wrapEl(highlightElement, highlightWrapper);

    const panel = actionPanel();
    // append buttons 
    highlightWrapper.appendChild(panel);
  });
  
  const copyId = 'panel_copy';
  const wrapId = 'panel_wrap';
  const linesId = 'panel_lines';

  function isItem(target, id) {
    // if is item or within item
    return target.matches(`.${id}`) || target.closest(`.${id}`);
  }

  function showActive(target, targetClass,activeClass = 'active') {
    const active = activeClass;
    const targetElement = target.matches(`.${targetClass}`) ? target : target.closest(`.${targetClass}`);
    const siblings = Array.from(targetElement.parentNode.children).filter(function(child){
      return child !== targetElement
    });
    siblings.forEach(function(sibling){
      // containsClass(sibling, active) ? deleteClass(sibling, active) : false;
    });
    modifyClass(targetElement, active);
  }

  doc.addEventListener('click', function(event){
    // copy code block
    const target = event.target;
    const isCopyIcon = isItem(target, copyId);
    const isWrapIcon = isItem(target, wrapId);
    const isLinesIcon = isItem(target, linesId);
    const isActionable = isCopyIcon || isWrapIcon || isLinesIcon;
    
    if(isActionable) {
      event.preventDefault();
      showActive(target, 'icon');
      const codeElement = target.closest(`.${highlightWrapId}`).firstElementChild.firstElementChild;
      let lineNumbers = elems('.ln', codeElement);

      isWrapIcon ? toggleLineWrap(codeElement) : false; 

      isLinesIcon ? toggleLineNumbers(lineNumbers) : false;

      if(isCopyIcon) {
        // clone code element
        const codeElementClone = codeElement.cloneNode(true);
        copyCode(codeElementClone);
      }
    }
  
  })
})();  

const codeActionButtons = [
  {
    icon: 'copy', 
    id: 'copy',
    title: 'Copy Code',
    show: true
  },
  {
    icon: 'order',
    id: 'lines',
    title: 'Toggle Line Numbers',
    show: true 
  },
  {
    icon: 'carly',
    id: 'wrap',
    title: 'Toggle Line Wrap',
    show: false
  },
  {
    icon: 'expand',
    id: 'expand',
    title: 'Expand code block',
    show: false 
  },
  // {
  //   icon: 'light',
  //   id: 'light',
  //   title: 'Change code block theme',
  //   show: false 
  // }
];

function codeBlocks() {
  const markedCodeBlocks = elems('code');
  const blocks = Array.from(markedCodeBlocks).filter(function(block){
    return hasClasses(block) && !Array.from(block.classList).includes('noClass');
  }).map(function(block){
    return block
  });
  return blocks;
}

function codeBlockFits(block) {
  // return false if codeblock overflows
  const blockWidth = block.offsetWidth;
  const highlightBlockWidth = block.parentNode.parentNode.offsetWidth;
  return blockWidth <= highlightBlockWidth ? true : false;
}

function maxHeightIsSet(elem) {
  let maxHeight = elem.style.maxHeight;
  return maxHeight.includes('px')
}

function collapseCodeBlock() {
  const blocks = codeBlocks();
  const body = elem('body');
  const maxLines = parseInt(body.dataset.code);

  const tallBlocks = [];
  
  Array.from(blocks).map(function(block){
    const lines = elems('.ln', block);
    const codeLines = lines.length;
    if (codeLines > maxLines) {
      tallBlocks.push(lines);
    }
  });
  
  tallBlocks.forEach(function(lines){

    const lastLine = lines[maxLines-1];

    const maxCodeBlockHeight = `${lastLine.offsetTop}px`;

    const codeBlock = lines[0].parentNode;
    
    codeBlock.dataset.height = maxCodeBlockHeight;
    codeBlock.style.maxHeight = maxCodeBlockHeight;

    const highlightElement = codeBlock.parentNode.parentNode;
    
    // wait for a second before quering the expand button
    setTimeout(function(){
      const expandIcon = elem('.panel_expand', highlightElement.nextElementSibling);
      deleteClass(expandIcon, 'panel_hide');
    }, 1000)

  });
}

collapseCodeBlock();

window.addEventListener('resize', function(event) {
  collapseCodeBlock();
});

function actionPanel() {
  const panel = createEl();
  panel.className = 'panel_box';
  
  codeActionButtons.forEach(function(button) {
    // create button
    const btn = createEl('a');
    btn.href = '#';
    btn.title = button.title;
    btn.className = `icon panel_icon panel_${button.id}`;
    button.show ? false : pushClass(btn, 'panel_hide');
    // load icon inside button
    loadSvg(button.icon, btn);
    // append button on panel
    panel.appendChild(btn);
  });
  
  return panel;
}

function toggleLineNumbers() {
  const body = elem('body');
  let state = body.dataset.lines;
  const show = 'true';
  const hide = 'false';
  body.dataset.lines = state === show ? hide : show;
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
  const blocks = codeBlocks();
  
  const highlightWrapId = 'highlight_wrap';
  blocks.forEach(function(block){
    const highlightElement = block.parentNode.parentNode;
    // wrap code block in a div
    const highlightWrapper = createEl();
    highlightWrapper.className = highlightWrapId;
    wrapEl(highlightElement, highlightWrapper);
    
    const panel = actionPanel();
    // show wrap icon only if the code block needs wrapping
    const wrapIcon = elem('.panel_wrap', panel);
    codeBlockFits(block) ? false : deleteClass(wrapIcon, 'panel_hide');

    // append buttons 
    highlightWrapper.appendChild(panel);
  });
  
  const copyId = 'panel_copy';
  const wrapId = 'panel_wrap';
  const linesId = 'panel_lines';
  const expandId = 'panel_expand';
  
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
    const isExpandIcon = isItem(target, expandId);
    const isActionable = isCopyIcon || isWrapIcon || isLinesIcon || isExpandIcon;
    
    if(isActionable) {
      event.preventDefault();
      showActive(target, 'icon');
      const codeElement = target.closest(`.${highlightWrapId}`).firstElementChild.firstElementChild;
      let lineNumbers = elems('.ln', codeElement);
      
      isWrapIcon ? toggleLineWrap(codeElement) : false; 
      
      isLinesIcon ? toggleLineNumbers(lineNumbers) : false;

      if (isExpandIcon) {
        let thisCodeBlock = codeElement.firstElementChild;
        thisCodeBlock.style.maxHeight = maxHeightIsSet(thisCodeBlock) ? `100vh` : thisCodeBlock.dataset.height;
      }

      if(isCopyIcon) {
        // clone code element
        const codeElementClone = codeElement.cloneNode(true);
        copyCode(codeElementClone);
      }
    }
  });
  
})();  

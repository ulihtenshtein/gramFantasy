// event listener for glossary
var idGlossary = 'glos';
var ul;
var glossary = document.getElementById(idGlossary);

function onClickWord(event) {
			openGlossary(event);
			var curElem = this;
			var spell, trans;
			one: while(curElem = curElem.nextSibling) {
				if( curElem.nodeType == 1 && curElem.tagName == 'SPAN' ) {
					switch(curElem.className){
						case 'spell': spell = curElem.cloneNode();
								spell.innerHTML = curElem.innerHTML;
								spell.style.display = 'inline';
								break;
						case 'translation': trans = curElem.cloneNode();
									trans.innerHTML = deleteParentheses(curElem.innerHTML);
									trans.style.display = 'inline';
								    break one;
						
					};
				};
			};
			if( !ul ) {
				ul = document.createElement('ul');
				glossary.appendChild(ul);	
			}
			var li = document.createElement('li');
			curElem = this.cloneNode();
			curElem.innerHTML = this.innerHTML;
			li.appendChild(curElem);
			if( spell ) li.appendChild(spell);
			if( trans ) li.appendChild(trans);
			li.style.marginTop = '2px';
			li.style.marginBottom = '2px';
			ul.appendChild(li);
		};
function setEvent () {
	var elems = document.getElementsByClassName('word');
	for (var i = 0; i < elems.length; i++) {
		elems[i].onclick = onClickWord;
        };
        
};
setEvent(); 
function openGlossary(event) {
	glossary.onclick = closeGlossary;
	glossary.style.display = 'block';
}
function closeGlossary(event) {
	var pp = glossary.getElementsByTagName('ul');

	if(pp.length > 0 ) {pp[0].parentNode.removeChild(pp[0]);};  
	ul = undefined;
	glossary.style.display = 'none';
}
function deleteParentheses(text) {
 var result = text.replace(/\(/, '   - ').replace(/\)/,'');
 return result;
}

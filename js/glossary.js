// event listener for glossary
var idGlossary = 'glos';
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
			var p = document.createElement('P');
			curElem = this.cloneNode();
			curElem.innerHTML = this.innerHTML;
			p.appendChild(curElem);
			if( spell ) p.appendChild(spell);
			if( trans ) p.appendChild(trans);
			p.style.marginTop = '2px';
			p.style.marginBottom = '2px';
			document.getElementById(idGlossary).appendChild(p);
		};
function setEvent () {
	var elems = document.getElementsByClassName('word');
	for (var i = 0; i < elems.length; i++) {
		elems[i].onclick = onClickWord;
        };
        
};
setEvent();
var glzIndex, glWidth, glHeight; 
function openGlossary(event) {
	var glossary = document.getElementById(idGlossary);
        glzIndex = glossary.style.zIndex;
	glossary.style.zIndex = '20';
        glWidth = glossary.style.width;
	glossary.style.width = '280px';
	glHeight = glossary.style.height;
	glossary.style.height = '400px';
	glossary.style.backgroundColor = '#ffc';
	glossary.style.opacity = 0.9;
	glossary.onclick = closeGlossary;
	document.getElementsByClassName('prompt')[0].style.display = 'block';
}
function closeGlossary(event) {
var glossary = document.getElementById(idGlossary);
	var pp = glossary.getElementsByTagName('P');
	while(pp.length > 0 ) {pp[0].parentNode.removeChild(pp[0]);};
        	document.getElementsByClassName('prompt')[0].style.display = 'none';
	glossary.style.zIndex = '';
	glossary.style.width = '';
	glossary.style.height = '';
	glossary.style.backgroundColor = '';
}
function deleteParentheses(text) {
 var result = text.replace(/\(/, '   - ').replace(/\)/,'');
 return result;
}

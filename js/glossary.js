// event listener for glossary
var idGlossary = 'glos';
function setEvent () {
	var elems = document.getElementsByClassName('word');
	for (var i = 0; i < elems.length; i++) {
		elems[i].onclick = function(event) {
			openGlossary(event);
			var curElem = this;
			var spell, trans;
			one: while(curElem = curElem.nextSibling) {
				if( curElem.nodeType == 1 && curElem.tagName == 'SPAN' ) {
					switch(curElem.className){
						case 'spell': spell = curElem.cloneNode();
								spell.innerText = curElem.innerText;
								spell.style.display = 'inline';
								break;
						case 'translation': trans = curElem.cloneNode();
									trans.innerText = deleteParentheses(curElem.innerText);
									trans.style.display = 'inline';
								    break one;
						
					};
				};
			};
			var p = document.createElement('P');
			curElem = this.cloneNode();
			curElem.innerText = this.innerText;
			p.appendChild(curElem);
			if( spell ) p.appendChild(spell);
			if( trans ) p.appendChild(trans);
			p.style.marginTop = '2px';
			p.style.marginBottom = '2px';
			document.getElementById(idGlossary).appendChild(p);
		};
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

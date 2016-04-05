walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bOU\b/g, "OU SUCKS");
	v = v.replace(/\bou\b/g, "ou sucks");
	v = v.replace(/\bOu\b/g, "Ou Sucks");
	v = v.replace(/\bWhat time is it?\b/ig, "What time is it...OU still SUCKS");
	v = v.replace(/\bWhat time is it!\b/ig, "What time is it...OU still SUCKS");
	v = v.replace(/\bWhat time is it.\b/ig, "What time is it...OU still SUCKS");
	var textCheck = v;
	v = v.replace(/\bIt's ([0-9])?[0-9](:[0-9][0-9])?( )?(((a|A)|(p|P))(.)?(m|M))?\b/ig, "$& and OU still SUCKS");
	if(textCheck === v){
		v = v.replace(/\bIt is ([0-9])?[0-9](:[0-9][0-9])?( )?(((a|A)|(p|P))(.)?(m|M))?\b/ig, "$& and OU still SUCKS");
		textCheck = v;
	}
	if(textCheck === v)
		v = v.replace(/\b([0-9])?[0-9](:[0-9][0-9])( )?(((a|A)|(p|P))(.)?(m|M))?\b/ig, "$& (and OU still SUCKS)");

	textNode.nodeValue = v;
}
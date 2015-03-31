'use strict';

(function($){
	var $textarea, $test, $saveBtn;
	var startHeader = '<h1>';
	var endHeader = '</h1>';
	var fileNameToSaveAs = "myNewFile.txt";
	var cleshe = '<script type="application/ld+json">|BODY|</script>';

	var getArticle = function(lang, keywords, author){
		return {
			"@context": "http://schema.org",
			"@type": "Article",
			"inLanguage": lang,
			"keywords": keywords,
			"author": author,
			"editor": "",
			"name": "",
			"about": "",
			"articleBody": [],
			"hasPart": [],
			"mentions": []
		};
	};
	var getMentionsItem = function(){
		var item = {
			"@type": "Article",
			"name": "First url title",
			"about": "Text inside the ticket popup.",
			"url": "http://webrunes.com/blog.htm?'dolor sit amet':1,104"
		};
		return item;
	};
	var getPart = function(name){
		return {
			"@type": "Article",
			"name": name,
			"articleBody": []
		};
	};
	var destroyClickedLink = function(event){
		document.body.removeChild(event.target);
	};
	var normalizeText = function(text){
		text = text.replace(/<p>/gi, '').replace(/<\/p>/gi, '<br>');
		text = text.replace(/<div>/gi, '').replace(/<\/div>/gi, '<br>');
		text = text.replace(/<br><br>/gi, '<br>');
		text = text.replace(/<br><\/li>/gi, '</li>');

		return text;
	};
	var normalizeOUL = function(arr){
		var regOl = /<ol>/gi;
		var regUl = /<ul>/gi;
		var list = [];
		for(var i = 0; i < arr.length; i++){
			if(regOl.test(arr[i])){
				convertOUlToList(list, arr[i], 0);
			}else if(regUl.test(arr[i])){
				convertOUlToList(list, arr[i], 1);
			}else {
				list.push(arr[i]);
			}
		}
		return list;
	};
	var convertOUlToList = function(list, txt, isOu){
		txt = txt.replace(/<ol>/gi, '<br>').replace(/<ul>/gi, '<br>')
			.replace(/<\/ol>/gi, '<br>').replace(/<\/ul>/gi, '<br>')
			.replace(/<\/li>/gi, '<br>');
		var arr = txt.split('<br>');

		var ind = 1;
		for(var i = 0; i < arr.length; i++){
			var text = arr[i];
			if(text){
				if(arr[i].indexOf('<li>') == 0){
					var num = ind + '. ';
					if(!!isOu) num = '* ';
					text = text.replace('<li>', num);
					ind +=1;
				}
				list.push(text);
			}
		}
	};
	var calculateJson = function(text){
		if(!text) return '';

		text = normalizeText(text);

		var blocks = text.split(startHeader);
		if(blocks.length < 2) return '';

		var article = getArticle("en-US", "keyword1, keyword2, keyword3", "http://alexey-anshakov.webrunes.com");
		var num = 1;
		for(var i = 1; i < blocks.length; i++){
			if(i == 1) num = addCoreBlock(article, blocks[1], num);
			else num = addParagraph(article, blocks[i], num);
		}

		return article;
	};
	var checkMention = function(arr, txt, num){
		return txt;
	};
	var addCoreBlock = function(json, txt, num){
		if(!txt) return num;
		var blocks = txt.split(endHeader);
		json.name = blocks[0];

		var ps = blocks[1].split('<br>');
		ps = normalizeOUL(ps);
		for(var i = 0; i < ps.length; i++){
			ps[i] = ps[i].replace(/&nbsp;/gi, ' ');
			var p = checkMention(json.mentions, ps[i], num);
			json.articleBody.push(p);
			num +=1;
		}

		return num;
	};
	var addParagraph = function(json, txt, num){
		if(!txt) return num;

		var blocks = txt.split(endHeader);
		var part = getPart(blocks[0]);

		var ps = blocks[1].split('<br>');
		ps = normalizeOUL(ps);
		for(var i = 0; i < ps.length; i++){
			ps[i] = ps[i].replace(/&nbsp;/gi, ' ');
			var p = checkMention(json.mentions, ps[i], num);
			part.articleBody.push(p);
			num +=1;
		}

		json.hasPart.push(part);

		return num;
	};
	var onClickSave = function(){
		var txt = $($textarea).val();
		var json = calculateJson(txt);
		if(!json) return;

		var textToWrite = cleshe.replace('|BODY|', JSON.stringify(json));

		//ToDo: test
		$($test).val(textToWrite);
		return;

		var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});

		var downloadLink = document.createElement("a");
		downloadLink.download = fileNameToSaveAs;
		downloadLink.innerHTML = "My Hidden Link";

		window.URL = window.URL || window.webkitURL;

		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedLink;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);

		downloadLink.click();
	};
	var init = function(){
		$saveBtn = $('#save-button-id').on('click', onClickSave);
		$textarea = $('#textarea-core-id');
		$test = $('#textarea-test');
	};
	init();
})(jQuery);



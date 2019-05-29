"use strict";

function loadTypo(rootPath, done) {
    function removeLastDirectoryPartOf(the_url)
    {
        var the_arr = the_url.split('/');
        // To remove empty last value
        if(!the_arr[the_arr.length-1]) {
            the_arr.pop();
        }
        the_arr.pop();
        return( the_arr.join('/') );
    }
    rootPath = removeLastDirectoryPartOf(rootPath);
	var xhr_aff = new XMLHttpRequest();
	xhr_aff.open("GET", rootPath + "/Typo.js/typo/dictionaries/en_US/en_US.aff", true);
	xhr_aff.onload = function() {
		if (xhr_aff.readyState === 4 && xhr_aff.status === 200) {
  		var xhr_dic = new XMLHttpRequest();
  		xhr_dic.open("GET", rootPath + "/Typo.js/typo/dictionaries/en_US/en_US.dic", true);
  		xhr_dic.onload = function() {
  			if (xhr_dic.readyState === 4 && xhr_dic.status === 200) {
    			done(new Typo("en_US", xhr_aff.responseText, xhr_dic.responseText, { platform: "any" }));
  			} else {
  			  done(false);
  			}
  		};
  		xhr_dic.send(null);
		} else {
		  done(false);
		}
	};
	xhr_aff.send(null);
}

function startSpellCheck(cm, typo) {
  if (!cm || !typo) return;
  
	// Define what separates a word
	var rx_word = "!\"#$%&()*+,-./:;<=>?@[\\]^_`{|}~ ";

  cm.addOverlay({
		token: function(stream) {
			var ch = stream.peek();
			var word = "";

			if (rx_word.includes(ch)) {
				stream.next();
				return null;
			}

			while ((ch = stream.peek()) && !rx_word.includes(ch)) {
				word += ch;
				stream.next();
			}

			if (!typo.check(word)) return "spell-error"; // CSS class: cm-spell-error
		}
	});
}

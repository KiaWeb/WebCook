const {exec} = require("openssl-wrapper");
const openssl = exec;
const password = '';
const http = require("http");
const https = require("https");
function generate(logBuffer) {
  if (logBuffer) {
    return openssl('genrsa', {des3: true, passout: `pass:${password}`, '2048': false}, function(err, buffer) {
	    if (err) {
		    console.log("[WebCook] Error");
	    };
	    if (!err) {
		    console.log(buffer.toString());
	    };
    });
  };
  if (!logBuffer) {
    return openssl('genrsa', {des3: true, passout: `pass:${password}`, '2048': false}, function(err, buffer) {
	    if (err) {
		    console.log("[WebCook] Error");
	    }
	    if (!err) {
		    console.log("[WebCook] NB-REG")
	    }
    });
  };
    
};
exports.generate = generate;

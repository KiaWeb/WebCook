"use strict";

var _opensslWrapper = require("openssl-wrapper");

var password = '';

var http = require("http");

var https = require("https");

function generate(logBuffer) {
  if (logBuffer) {
    return _opensslWrapper.exec('genrsa', {
      des3: true,
      passout: "pass:".concat(password),
      '2048': false
    }, function (err, buffer) {
      if (err) {
        console.log("[WebCook] Error");
      }

      ;

      if (!err) {
        console.log(buffer.toString());
      }

      ;
    });
  }

  ;

  if (!logBuffer) {
    return _opensslWrapper.exec('genrsa', {
      des3: true,
      passout: "pass:".concat(password),
      '2048': false
    }, function (err, buffer) {
      if (err) {
        console.log("[WebCook] Error");
      }

      if (!err) {
        console.log("[WebCook] NB-REG");
      }
    });
  }

  ;
}

;
exports.generate = generate;

function transformText(inputText) {
    const wordsArray = inputText.split("-");
    const transformedText = wordsArray.join(" ");
    return transformedText;
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(
        /[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        }
    );
    return vars;
}

function getUrlParam(param, defaultVal) {
    var urlParam = defaultVal;

    if (window.location.href.indexOf(param) > -1) {
        urlParam = getUrlVars()[param];
    }
    return urlParam;
}


function displayStep() {
    document.getElementById("step").innerHTML =
        "Step: " + decodeURI(getUrlParam("nextinstruction", ""));
}

function raiseEvent(name, value) {
    QiSession(function (session) {
      session.service("ALMemory").then(
        function (mem) {
          mem.raiseEvent(name, value);
        },
        function (error) {
          console.log("An error occurred:", error);
        }
      );
    });
  }
  
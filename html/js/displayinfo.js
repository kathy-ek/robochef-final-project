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

function displayPageInformation() {
  document.getElementById("cuisine").innerHTML =
    "Cuisine: " + decodeURI(getUrlParam("cuisine", ""));
  document.getElementById("mealtype").innerHTML = decodeURI(
    "Meal Type: " + getUrlParam("mealtype", "")
  );

  imageName1 = getUrlParam("option1", "");
  if (imageName1) {
    document.getElementById("optionOneLabel").innerHTML =
      transformText(imageName1);
    document.getElementById("option1").src = "../pics/" + imageName1 + ".png";
    document.getElementById("option1").onclick = function () {
      raiseEvent("chosenOption", imageName1);
    };
  }
  imageName2 = getUrlParam("option2", "");
  if (imageName2) {
    document.getElementById("optionTwoLabel").innerHTML =
      transformText(imageName2);
    document.getElementById("option2").src = "../pics/" + imageName2 + ".png";
    document.getElementById("option2").onclick = function () {
      raiseEvent("chosenOption", imageName2);
    };
  }
}

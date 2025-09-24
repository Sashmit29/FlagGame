/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var countries = ["Australia", "Brazil", "Canada", "Ecuador", "Fiji", "India", "Jamaica", "Kiribati", "Micronesia", "Nauru", "New Zealand", "Palau", "Peru", "Samoa", "Tonga", "Tuvalu", "USA", "Vanuatu", "Venezuela", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Botswana", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "CAR", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "DRC", "Egypt", "El Salvador", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Netherlands", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Panama", "Paraguay", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Lucia", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tunisia", "Turkey", "Turkmenistan", "UAE", "Uganda", "UK", "Ukraine", "Uruguay", "Uzbekistan", "Vatican City", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
var images = ["img/Australia.jpg", "img/Brazil.jpg", "img/Canada.jpg", "img/Ecuador.jpg", "img/Fiji.jpg", "img/India.jpg", "img/Jamaica.jpg", "img/Kiribati.jpg", "img/Micronesia.jpg", "img/Nauru.jpg", "img/New Zealand.jpg", "img/Palau.jpg", "img/Peru.jpg", "img/Samoa.jpg", "img/Tonga.jpg", "img/Tuvalu.jpg", "img/USA.jpg", "img/Vanuatu.jpg", "img/Venezuela.jpg", "img/Afghanistan.jpg", "img/Albania.jpg", "img/Algeria.jpg", "img/Andorra.jpg", "img/Angola.jpg", "img/Argentina.jpg", "img/Armenia.jpg", "img/Austria.jpg", "img/Azerbaijan.jpg", "img/Bahamas.jpg", "img/Bahrain.jpg", "img/Bangladesh.jpg", "img/Barbados.jpg", "img/Belarus.jpg", "img/Belgium.jpg", "img/Belize.jpg", "img/Benin.jpg", "img/Bhutan.jpg", "img/Bolivia.jpg", "img/Botswana.jpg", "img/Brunei.jpg", "img/Bulgaria.jpg", "img/Burkina Faso.jpg", "img/Burundi.jpg", "img/Cabo Verde.jpg", "img/Cambodia.jpg", "img/Cameroon.jpg", "img/CAR.jpg", "img/Chad.jpg", "img/Chile.jpg", "img/China.jpg", "img/Colombia.jpg", "img/Comoros.jpg", "img/Congo.jpg", "img/Costa Rica.jpg", "img/Croatia.jpg", "img/Cuba.jpg", "img/Cyprus.jpg", "img/Czechia.jpg", "img/Denmark.jpg", "img/Djibouti.jpg", "img/Dominica.jpg", "img/DRC.jpg", "img/Egypt.jpg", "img/El Salvador.jpg", "img/Eritrea.jpg", "img/Estonia.jpg", "img/Eswatini.jpg", "img/Ethiopia.jpg", "img/Finland.jpg", "img/France.jpg", "img/Gabon.jpg", "img/Gambia.jpg", "img/Georgia.jpg", "img/Germany.jpg", "img/Ghana.jpg", "img/Greece.jpg", "img/Grenada.jpg", "img/Guatemala.jpg", "img/Guinea.jpg", "img/Guyana.jpg", "img/Haiti.jpg", "img/Honduras.jpg", "img/Hungary.jpg", "img/Iceland.jpg", "img/Indonesia.jpg", "img/Iran.jpg", "img/Iraq.jpg", "img/Ireland.jpg", "img/Israel.jpg", "img/Italy.jpg", "img/Japan.jpg", "img/Jordan.jpg", "img/Kazakhstan.jpg", "img/Kenya.jpg", "img/Kuwait.jpg", "img/Kyrgyzstan.jpg", "img/Laos.jpg", "img/Latvia.jpg", "img/Lebanon.jpg", "img/Lesotho.jpg", "img/Liberia.jpg", "img/Libya.jpg", "img/Liechtenstein.jpg", "img/Lithuania.jpg", "img/Luxembourg.jpg", "img/Macedonia.jpg", "img/Madagascar.jpg", "img/Malawi.jpg", "img/Malaysia.jpg", "img/Maldives.jpg", "img/Mali.jpg", "img/Malta.jpg", "img/Mauritania.jpg", "img/Mauritius.jpg", "img/Mexico.jpg", "img/Moldova.jpg", "img/Monaco.jpg", "img/Mongolia.jpg", "img/Montenegro.jpg", "img/Morocco.jpg", "img/Mozambique.jpg", "img/Myanmar.jpg", "img/Namibia.jpg", "img/Netherlands.jpg", "img/Nicaragua.jpg", "img/Niger.jpg", "img/Nigeria.jpg", "img/North Korea.jpg", "img/Norway.jpg", "img/Oman.jpg", "img/Pakistan.jpg", "img/Panama.jpg", "img/Paraguay.jpg", "img/Philippines.jpg", "img/Poland.jpg", "img/Portugal.jpg", "img/Qatar.jpg", "img/Romania.jpg", "img/Russia.jpg", "img/Rwanda.jpg", "img/Saint Lucia.jpg", "img/San Marino.jpg", "img/Saudi Arabia.jpg", "img/Senegal.jpg", "img/Serbia.jpg", "img/Seychelles.jpg", "img/Sierra Leone.jpg", "img/Singapore.jpg", "img/Slovakia.jpg", "img/Slovenia.jpg", "img/Somalia.jpg", "img/South Africa.jpg", "img/South Korea.jpg", "img/South Sudan.jpg", "img/Spain.jpg", "img/Sri Lanka.jpg", "img/Sudan.jpg", "img/Suriname.jpg", "img/Sweden.jpg", "img/Switzerland.jpg", "img/Syria.jpg", "img/Tajikistan.jpg", "img/Tanzania.jpg", "img/Thailand.jpg", "img/Togo.jpg", "img/Tunisia.jpg", "img/Turkey.jpg", "img/Turkmenistan.jpg", "img/UAE.jpg", "img/Uganda.jpg", "img/UK.jpg", "img/Ukraine.jpg", "img/Uruguay.jpg", "img/Uzbekistan.jpg", "img/Vatican City.jpg", "img/Vietnam.jpg", "img/Yemen.jpg", "img/Zambia.jpg", "img/Zimbabwe.jpg"]
var tempCountries = [], selectedImages = [], originCoords = [], destBoxCoords = [], destCoords = [], switchIndexes = [], boxesOccupied = [];
var imageWidth = 200, largestHeight = 0;
var svg, timerIntervalID, failMessage, level, audio, flag, submit;
var startEvent = new Event("startGame"), failEvent = new Event("fail");
var gameEndCalled = false, currFlagMatched = false;

function createOriginBox(indices, body) {
    for (var index in indices) {
        var selectedImage = document.createElement("img");
        selectedImage.setAttribute("src", images[indices[index]]);
        selectedImage.setAttribute("class", "flag");
        selectedImage.style.left = 20 + index * imageWidth + (parseInt(index) + 1) * 20 + "px";
        selectedImage.style.top = "20px";
        originCoords.push([20 + index * imageWidth + (parseInt(index) + 1) * 20, 20]);
        selectedImage.setAttribute("alt", "Flag Image");
        body.appendChild(selectedImage);
        selectedImages.push(selectedImage);
    }

    var imageLoadCallback = function () {
        for (var image of selectedImages) {
            if (image.height > largestHeight) {
                largestHeight = image.height;
            }
        }
        svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", window.innerWidth);
        svg.setAttribute("height", window.innerHeight);
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("width", imageWidth * indices.length + (indices.length + 1) * 20);
        rect.setAttribute("height", 20 + largestHeight);
        rect.setAttribute("x", 20);
        rect.setAttribute("y", 10);
        rect.style.fill = "rgb(173, 216, 230)";
        rect.setAttribute("rx", 10);
        rect.setAttribute("ry", 10);
        svg.appendChild(rect);
        body.appendChild(svg);
        createDestBoxes(indices, body);
    };
    var loadedCount = 0;
    selectedImages.forEach(function (img) {
        if (img.complete) {
            loadedCount++;
            if (loadedCount === selectedImages.length) {
                imageLoadCallback();
            }
        } else {
            img.onload = function () {
                loadedCount++;
                if (loadedCount === selectedImages.length) {
                    imageLoadCallback();
                }
            };
        }
    });
}

function createDestBoxes(indices, body) {
    for (var index in indices) {
        var rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect2.setAttribute("width", imageWidth + 20);
        rect2.setAttribute("height", 45 + largestHeight);
        rect2.setAttribute("x", 10 + index * (imageWidth + 30));
        rect2.setAttribute("y", window.innerHeight - 60 - largestHeight);
        destBoxCoords.push([10 + index * (imageWidth + 30), window.innerHeight - 60 - largestHeight, 10 + index * (imageWidth + 30) + imageWidth + 20, window.innerHeight - 60 - largestHeight + 45 + largestHeight]);
        destCoords.push([20 + index * (imageWidth + 30), window.innerHeight - 25 - largestHeight]);
        rect2.style.fill = "rgb(173, 216, 230)";
        rect2.setAttribute("rx", 10);
        rect2.setAttribute("ry", 10);
        svg.appendChild(rect2);
        body.appendChild(svg);
        boxesOccupied.push(false);
    }
    var indicesCopy = Array.from(indices);
    indicesCopy.sort(function () {
        return Math.random() - 0.5;
    });
    indices.forEach(function (index) {
        switchIndexes.push(indicesCopy.indexOf(index));
    });
    for (var indexCopy in indicesCopy) {
        var countryNameDiv = document.createElement("div");
        countryNameDiv.setAttribute("class", "boxName");
        countryNameDiv.style.top = window.innerHeight - 60 - largestHeight + "px";
        countryNameDiv.style.left = 10 + indexCopy * (imageWidth + 30) + "px";
        countryNameDiv.style.width = imageWidth + 20 + "px";
        var countryNameSpan = document.createElement("span");
        countryNameSpan.innerHTML = countries[indicesCopy[indexCopy]];
        countryNameDiv.appendChild(countryNameSpan);
        body.appendChild(countryNameDiv);
    }
    document.dispatchEvent(new Event("destBoxCreated"));
}

function updateBoxesOccupied() {
    boxesOccupied.forEach(function(element) {
        if (element) {
            boxesOccupied[boxesOccupied.indexOf(element)] = false;
        }
    });
    for (var destCoord in destCoords) {
        for (var selectedImage of selectedImages) {
            if (parseInt(window.getComputedStyle(selectedImage).getPropertyValue("left")) === destCoords[destCoord][0]
                    && parseInt(window.getComputedStyle(selectedImage).getPropertyValue("top")) === destCoords[destCoord][1]) {
                boxesOccupied[destCoord] = true;
                break;
            }
        }
    }
    var allBoxesOccupied = true;
    boxesOccupied.forEach(function (element) {
        if (!element) {
            allBoxesOccupied = false;
        }
    });
    submit.disabled = !allBoxesOccupied;
}

function makeDraggable(image, boxCoords) {
    image.ondragstart = function (e) {
        e.preventDefault();
    };

    image.onmousedown = function (event) {
        flag = this;
        var self = this;

        var imgTop = parseInt(window.getComputedStyle(self).getPropertyValue("top"));
        var imgLeft = parseInt(window.getComputedStyle(self).getPropertyValue("left"));

        var topDiff = imgTop - event.clientY;
        var leftDiff = imgLeft - event.clientX;

        document.onmousemove = function (e) {
            currFlagMatched = false;
            
            self.style.zIndex = 61;
            
            if (e.clientY + topDiff < 0) {
                self.style.top = "1px";
                return;
            } else if (e.clientY + topDiff + image.height > window.innerHeight) {
                self.style.top = window.innerHeight - 1 - image.height + "px";
                return;
            }
            if (e.clientX + leftDiff < 0) {
                self.style.left = "1px";
                return;
            } else if (e.clientX + leftDiff + image.width > window.innerWidth) {
                self.style.left = window.innerWidth - 1 - image.width + "px";
                return;
            }
            self.style.top = e.clientY + topDiff + "px";
            self.style.left = e.clientX + leftDiff + "px";
        };
    };

    document.onmouseup = function () {
        if (!currFlagMatched) {
            updateBoxesOccupied();
            var imageMatched = false;
            for (var boxCoord in boxCoords) {
                if (boxesOccupied[boxCoord] === false) {
                    if (calculateOverlapArea(
                            [parseInt(window.getComputedStyle(flag).getPropertyValue("left")),
                                parseInt(window.getComputedStyle(flag).getPropertyValue("top")), 
                                parseInt(window.getComputedStyle(flag).getPropertyValue("left")) + flag.width, 
                                parseInt(window.getComputedStyle(flag).getPropertyValue("top")) + flag.height], 
                            boxCoords[boxCoord])
                        >= (0.5 * flag.width * flag.height)) {
                        flag.style.left = destCoords[boxCoord][0] + "px";
                        flag.style.top = destCoords[boxCoord][1] + "px";
                        imageMatched = true;
                        currFlagMatched = true;
                        break;
                    }
                }
            }
            if (!imageMatched) {
                flag.style.left = originCoords[selectedImages.indexOf(flag)][0] + "px";
                flag.style.top = originCoords[selectedImages.indexOf(flag)][1] + "px";
            }
            flag.style.zIndex = 60;
            document.onmousemove = null;
        }
        updateBoxesOccupied();
    };
}

function makeImageUndraggable(image, originCoord) {
    image.onmousedown = null;
    image.onmousemove = null;
    image.onmouseup = function () {
        image.style.left = originCoord[0] + "px";
        image.style.top = originCoord[1] + "px";
    };
}

function formatSeconds(seconds) {
    var minutes = Math.floor(seconds / 60);
    if (minutes.toString().length === 1) {
        minutes = "0" + minutes;
    }
    seconds %= 60;

    if (seconds.toString().length === 1) {
        seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
}

function executeTimer(timeDiv, seconds) {
    if (timerIntervalID) {
        clearInterval(timerIntervalID);
    }

    timeDiv.innerHTML = formatSeconds(seconds);

    timerIntervalID = setInterval(function () {
        if (seconds === 0) {
            gameEndCalled = false;
            failMessage = "Time's up! Click Try Again to re-attempt.";
            document.dispatchEvent(failEvent);
            clearInterval(timerIntervalID);
            return;
        }
        seconds--;
        timeDiv.innerHTML = formatSeconds(seconds);
    }, 1000);
}

function calculateOverlapArea(imageCoords, boxCoords) {
    const [imgLeft, imgTop, imgRight, imgBottom] = imageCoords;
    const [boxLeft, boxTop, boxRight, boxBottom] = boxCoords;

    const overlapLeft = Math.max(imgLeft, boxLeft);
    const overlapTop = Math.max(imgTop, boxTop);
    const overlapRight = Math.min(imgRight, boxRight);
    const overlapBottom = Math.min(imgBottom, boxBottom);

    if (overlapLeft < overlapRight && overlapTop < overlapBottom) {
        const overlapWidth = overlapRight - overlapLeft;
        const overlapHeight = overlapBottom - overlapTop;
        return overlapWidth * overlapHeight;
    } else {
        return 0;
    }
}

function checkFlags(body) {
    var flagsCorrect = 0;
    var resultImgSrc;
    for (var selectedImage of selectedImages) {
        if (parseInt(window.getComputedStyle(selectedImage).getPropertyValue("left")) === destCoords[switchIndexes[selectedImages.indexOf(selectedImage)]][0]
                && parseInt(window.getComputedStyle(selectedImage).getPropertyValue("top")) === destCoords[switchIndexes[selectedImages.indexOf(selectedImage)]][1]) {
            flagsCorrect++;
            selectedImage.classList.add("correct");
            resultImgSrc = "backgroundImg/check.png";
        } else {
            selectedImage.classList.add("wrong");
            resultImgSrc = "backgroundImg/cross.jpg";
        }
        var resultImg = document.createElement("img");
        resultImg.setAttribute("src", resultImgSrc);
        resultImg.setAttribute("alt", "Check or Cross");
        resultImg.style.width = "16px";
        resultImg.style.position = "absolute";
        resultImg.style.left = parseInt(window.getComputedStyle(selectedImage).getPropertyValue("left")) + selectedImage.width - 2 + "px";
        resultImg.style.top = parseInt(window.getComputedStyle(selectedImage).getPropertyValue("top")) - 8 + "px";
        resultImg.style.zIndex = 100;
        body.appendChild(resultImg);
    }
    return flagsCorrect;
}

window.onload = function () {
    var body = document.querySelector("body");

    var tempDiv = document.getElementById("temp");
    imageWidth = parseInt(window.getComputedStyle(tempDiv).getPropertyValue("width"));
    
    var successes = [undefined, undefined, undefined, undefined, undefined];

    var startButton = document.getElementById("start");
    startButton.onclick = function () {
        audio = document.querySelector("audio");
        audio.loop = true;
        audio.volume = 0.2;
        audio.load();
        audio.play();
        document.dispatchEvent(startEvent);
    };
    document.addEventListener("startGame", function () {        
        var childNodes = Array.from(body.childNodes);
        for (var node of childNodes) {
            if (node.id !== "background" && node.id !== "audio") {
                body.removeChild(node);
            }
        }
        
        var muteSound = document.createElement("button");
        muteSound.innerHTML = "Music On/Off";
        muteSound.style.top = "2%";
        muteSound.style.left = "93%";
        muteSound.style.fontSize = "12.5px";
        muteSound.style.position = "absolute";
        muteSound.style.textAlign = "center";
        muteSound.style.height = "36px";
        muteSound.style.width = "62.27px";
        muteSound.style.fontWeight = "bold";
        muteSound.style.zIndex = 100;
        body.appendChild(muteSound);
        
        muteSound.onclick = function() {
            if (audio.paused) {
               audio.play();
            } else {
               audio.pause();
            }
        };
        
        var levelSelect = document.createElement("select");
        levelSelect.style.width = "150px";
        levelSelect.style.height = "30px";
        levelSelect.style.fontSize = "15px";
        for (var i = 1; i < 6; i++) {
            var option = document.createElement("option");
            if (successes[i - 1] === undefined) {
                option.text = "Level " + i;
            } else if (successes[i - 1] === true) {
                option.text = "Level " + i + " - Completed";
                option.style.color = "#32CD32";
            } else {
                option.text = "Level " + i + " - Failed";
                option.style.color = "red";
            }
            option.setAttribute("value", i.toString());
            levelSelect.add(option);
        }
        body.appendChild(levelSelect);
        var br = document.createElement("br");
        body.appendChild(br);
        var startGame = document.createElement("button");
        startGame.innerHTML = "Start Game";
        startGame.style.width = "150px";
        startGame.style.height = "30px";
        startGame.style.fontSize = "15px";
        body.appendChild(startGame);
        startGame.onclick = function () {
            muteSound.style.top = "13%";
            submit = document.createElement("button");
            submit.innerHTML = "Submit";
            submit.style.height = "30px";
            submit.style.fontSize = "12.5px";
            submit.style.position = "absolute";
            submit.style.top = "7%";
            submit.style.left = "93%";
            submit.style.fontWeight = "bold";
            submit.style.textAlign = "center";
            submit.style.zIndex = 100;
            submit.disabled = true;
            body.appendChild(submit);
            var numFlags = 4;
            level = levelSelect.options[levelSelect.selectedIndex].value;
            var time = document.createElement("div");
            time.setAttribute("class", "timer");
            body.appendChild(time);
            if (level === "1") {
                executeTimer(time, 100);
            } else if (level === "2") {
                numFlags = 5;
                executeTimer(time, 100);
            } else if (level === "3") {
                numFlags = 6;
                executeTimer(time, 90);
            } else if (level === "4") {
                numFlags = 7;
                executeTimer(time, 70);
            } else if (level === "5") {
                numFlags = 8;
                executeTimer(time, 40);
            }
            body.removeChild(levelSelect);
            body.removeChild(br);
            body.removeChild(startGame);
            var randomCountries = [];
            var tempCountries = Array.from(countries);
            for (var i = 0; i < numFlags; i++) {
                var randomIndex = Math.floor(Math.random() * tempCountries.length);
                randomCountries.push(tempCountries[randomIndex]);
                if (randomIndex === 0) {
                    tempCountries.splice(0, 1);
                } else {
                    tempCountries.splice(randomIndex, randomIndex);
                }
            }

            var randomIndices = [];
            for (var tempCountry of randomCountries) {
                randomIndices.push(countries.indexOf(tempCountry));
            }
            createOriginBox(randomIndices, body);
            document.addEventListener("destBoxCreated", function () {
                for (var flagImg of selectedImages) {
                    makeDraggable(flagImg, destBoxCoords);
                }
            });
            document.addEventListener("fail", function () {
                if (!gameEndCalled) {
                    for (var selectedImage of selectedImages) {
                        makeImageUndraggable(selectedImage, originCoords[selectedImages.indexOf(selectedImage)]);
                    }
                    var timeMessage = document.createElement("h2");
                    timeMessage.innerHTML = failMessage;
                    timeMessage.setAttribute("class", "finishMessage");
                    timeMessage.style.color = "red";
                    body.appendChild(timeMessage);
                    var tryAgain = document.createElement("button");
                    tryAgain.innerHTML = "Try Again";
                    tryAgain.style.width = "150px";
                    tryAgain.style.height = "30px";
                    tryAgain.style.fontSize = "15px";
                    tryAgain.style.position = "absolute";
                    tryAgain.style.top = "50%";
                    tryAgain.style.left = window.innerWidth / 2 - 75 + "px";
                    body.appendChild(tryAgain);
                    tryAgain.onclick = function () {
                        largestHeight = 0;
                        selectedImages = [];
                        originCoords = [];
                        destBoxCoords = [];
                        destCoords = [];
                        switchIndexes = [];
                        boxesOccupied = [];
                        successes[parseInt(level) - 1] = false;
                        document.dispatchEvent(startEvent);
                    };
                    gameEndCalled = true;
                    submit.disabled = true;
                }
            });
            document.addEventListener("success", function () {
                if (!gameEndCalled) {
                    for (var selectedImage of selectedImages) {
                        makeImageUndraggable(selectedImage, originCoords[selectedImages.indexOf(selectedImage)]);
                    }
                    successes[parseInt(level) - 1] = true;
                    var allLevelsPassed = true;
                    successes.forEach(function (element) {
                        if (!element) {
                            allLevelsPassed = false;
                        }
                    });
                    var successMessage = document.createElement("h2");
                    if (allLevelsPassed) {
                        successMessage.innerHTML = "You have completed every level! Congratulations!";
                        var confetti = document.createElement("img");
                        confetti.setAttribute("src", "backgroundImg/confetti.gif");
                        confetti.setAttribute("alt", "Confetti Falling");
                        confetti.style.position = "absolute";
                        confetti.style.width = "100%";
                        confetti.style.height = "100%";
                        confetti.style.objectFit = "cover";
                        confetti.style.left = "0px";
                        confetti.style.top = "0px";
                        confetti.style.zIndex = 200;
                        setTimeout(function() {
                            if (audio.paused) {
                                audio.play();
                            }
                            muteSound.onclick = null;
                            body.appendChild(confetti);
                        }, 1000);
                    } else {
                        successMessage.innerHTML = "You matched all of the flags correctly! Click Play Again to try your skills at a different level!";
                        var playAgain = document.createElement("button");
                        playAgain.innerHTML = "Play Again";
                        playAgain.style.width = "150px";
                        playAgain.style.height = "30px";
                        playAgain.style.fontSize = "15px";
                        playAgain.style.position = "absolute";
                        playAgain.style.top = "50%";
                        playAgain.style.left = window.innerWidth / 2 - 75 + "px";
                        body.appendChild(playAgain);
                        playAgain.onclick = function () {
                            largestHeight = 0;
                            selectedImages = [];
                            originCoords = [];
                            destBoxCoords = [];
                            destCoords = [];
                            switchIndexes = [];
                            boxesOccupied = [];
                            document.dispatchEvent(startEvent);
                        };
                    }
                    successMessage.setAttribute("class", "finishMessage");
                    successMessage.style.color = "#32CD32";
                    body.appendChild(successMessage);
                    gameEndCalled = true;
                    submit.disabled = true;
                }
            });
            submit.onclick = function () {
                gameEndCalled = false;
                clearInterval(timerIntervalID);
                var correctFlags = checkFlags(body);
                if (correctFlags !== numFlags) {
                    failMessage = "You got " + correctFlags + " out of " + numFlags + " flags correct. Click Try Again to re-attempt.";
                    document.dispatchEvent(failEvent);
                } else {
                    document.dispatchEvent(new Event("success"));
                }
            };
        };
    });
};

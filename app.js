var nums = 6;
        var colors = colorGenerator(nums);
        var square = document.querySelectorAll(".squares");
        var colorpicker = randomGenerator();
        var span = document.getElementById("sp");
        var message = document.querySelector("#message");
        var h1 = document.querySelector("h1");
        var button = document.querySelector("#button");
        var easy = document.querySelector("#easy");
        var hard = document.querySelector("#hard");
        span.textContent = colorpicker;

        easy.addEventListener("click", function () {
            easy.classList.add("selected");
            hard.classList.remove("selected");
            nums = 3;
            colors = colorGenerator(nums);
            colorpicker = randomGenerator();
            span.textContent = colorpicker;
            for (var i = 0; i < square.length; i++) {
                if (colors[i]) {
                    square[i].style.background = colors[i];
                }
                else {
                    square[i].style.display = "none";
                }
            }
        });

        hard.addEventListener("click", function () {
            hard.classList.add("selected");
            easy.classList.remove("selected");
            nums = 6;
            colors = colorGenerator(nums);
            colorpicker = randomGenerator();
            span.textContent = colorpicker;
            for (var i = 0; i < square.length; i++) {
                square[i].style.background = colors[i];
                square[i].style.display = "block";
            }
        });

        button.addEventListener("click", function () {
            colors = colorGenerator(nums);
            colorpicker = randomGenerator();
            span.textContent = colorpicker;
            button.textContent = "New colors";
            message.textContent = "";
            for (var i = 0; i < square.length; i++) {
                square[i].style.background = colors[i];
            }
            h1.style.background = "steelblue";
        });

        for (var i = 0; i < square.length; i++) {
            square[i].style.background = colors[i];

            square[i].addEventListener("click", function () {
                var clicked = this.style.background;
                if (clicked === colorpicker) {
                    message.textContent = "Correct!";
                    button.textContent = "Play Again?"
                    for (var i = 0; i < square.length; i++) {
                        square[i].style.background = clicked;
                    }
                    h1.style.background = clicked;
                }
                else {
                    message.textContent = "Try Again!";
                    this.style.background = "#232323";
                }
            });
        }
        function randomGenerator() {
            var num = Math.floor(Math.random() * colors.length);
            return colors[num];
        }
        function colorGenerator() {
            var arr = [];
            for (var i = 0; i < nums; i++) {
                arr.push(randomColor());
            }
            return arr;
        }
        function randomColor() {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var s = "rgb(" + r + ", " + g + ", " + b + ")";
            return s;
        }
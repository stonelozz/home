
$(
    $(window).scroll(function () {
        var h = $(this).scrollTop();
        console.log(h);
        var left =$(this).scrollLeft()
        if(left>0){window.scrollTo(0);}
        // 音频
        var audio1 = document.getElementById("audio1");
        var audio2 = document.getElementById("audio2");
        var audio3 = document.getElementById("audio3");
        var audio4 = document.getElementById("audio4");
        var audio5 = document.getElementById("audio5");
        var audio6 = document.getElementById("audio6");


        // audio.load();



        // audioEle.pause();
        // part1

        if (h >= 0 && h <= 1700) {
            audio1.play()


            $("#img3").css({ 'top': h * 0.8 - 100, 'opacity': h * 0.01 })

        }
        // part2
        if (h > 1900 && h < 4000) {
            audio1.pause()
            audio2.play()
            // $("#img3").fadeOut();
            $("#img5").css({ 'top': h * 1.05, 'opacity': (h - 1900) * 0.005 })
            $("#img6").css({ 'top': h, 'opacity': (h - 1900) * 0.005 })
            $("#img7").css({ 'top': h + (h - 2000) * 0.6, 'opacity': (h - 1900) * 0.005, 'width': 640 - (h - 2500) * 0.5, 'left': (h - 1900) * 0.15 })
            $("#img8").css({ 'top': (h - 400) * 1.05, 'opacity': (h - 1900) * 0.005, 'left': (h - 2900) * 0.02 })

        }

        // part 3
        if (h > 4400 && h < 8000) {
            // $("#img9").css({ 'top': h  })
            audio2.pause()
            audio3.play()
        }


        if (h > 4800 && h < 5460) {

            $("#img9a").css({ 'top': h })
        }
        if (h > 4400 && h < 4670) {
            $("#img11").css({ 'opacity': (h - 4400) * 0.005, 'left': (h - 4400) - 150 })
        }
        if (h > 4670 && h < 4940) {
            $("#img12").css({ 'opacity': (h - 4670) * 0.005, 'left': 110 - (h - 4670) })
        }
        if (h > 4940 && h < 5210) {
            $("#img13").css({ 'opacity': (h - 4940) * 0.005, 'left': (h - 4940) - 150 })
        }
        if (h > 5210 && h < 5480) {
            $("#img14").css({ 'opacity': (h - 5210) * 0.005, 'left': 140 - (h - 5210) })
        }
        if (h > 5310 && h < 5580) {
            $("#img15").css({ 'opacity': (h - 5310) * 0.005, 'left': (h - 5310) - 150 })
        }
        if (h > 5410 && h < 5680) {
            $("#img16").css({ 'opacity': (h - 5410) * 0.005, 'left': 140 - (h - 5410) })
        }
        if (h > 5510 && h < 5780) {
            $("#img17").css({ 'opacity': (h - 5510) * 0.005, 'left': (h - 5510) - 140 })
        }

        // part4

        if (h > 5800 && h < 9600) {
            audio3.pause()
            audio4.play()
        }
        if (h > 5800 && h < 8000) {
            $("#img18a").css({ 'top': (h + 1000) - (h - 5800) * 0.7 })

        }
        if (h > 6145 && h < 8000) {
            $("#img20").css({ 'top': (h + 1000) - (h - 5800) * 0.7 })

        }
        if (h > 6700 && h < 8000) {
            $("#img20").css({ 'top': h + 300 })

        }
        if (h > 7030 && h < 8000) {
            $("#img20").css({ 'opacity': 1 - (h - 7030) * 0.005 })
            $("#img21").css({ 'top': (h + 970) - (h - 7030) * 0.9 })
        }
        // part5

        if (h > 8500 && h < 9600) {
            audio4.pause()
            audio5.play()
            setTimeout(audio5.play(), 100)
            setTimeout(audio5.play(), 200)
            setTimeout(audio5.play(), 300)


            $("#img29").css({ 'top': h + 500 - 0.1 * (h - 9000) })

        }
        if (h > 9000 && h < 9600) {
            $("#img24").css({ 'top': (h + 1000) - 0.1 * (h - 9000) })
            $("#img25").css({ 'top': (h - 800) + 2.5 * (h - 9000) })
            $("#img26").css({ 'top': (h + 1000) - 0.1 * (h - 9000) })
            $("#img27").css({ 'top': (h - 800) + 2 * (h - 9000) })
            $("#img32").css({ 'top': (h - 800) + 2.75 * (h - 9000) })
            $("#img33").css({ 'top': h - 150 })

        }
        //    part6     
        if (h > 9800 && h < 10900) {
            $("#img36").css('opacity', (1 - 0.001 * (h - 9800)))
        }
        // 音频
        if (h < 12000) {
            audio6.pause()

        }
        // part7
        if (h > 12220 ) {
            $("#img41").css({'opacity':(1 + 1 * (h - 9800)),'top':h-400})
            audio5.pause()
            audio6.play()

        }




    })
)






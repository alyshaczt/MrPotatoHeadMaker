$(document).ready(function() {

    $("#unexpand").hide(); 

    $("#body").click(function() {
        $("#image1").toggle(); 
    });

    $("#eyes").click(function() {
        $("#image2").toggle();
    });

    $("#hat").click(function() {
        $("#image3").toggle(); 
    });

    $("#mouth").click(function() {
        $("#image4").toggle(); 
    });

    $("#nose").click(function() {
        $("#image5").toggle(); 
    });

    $("#save").click(function() {
        html2canvas(document.querySelector("#imageContainer"), { useCORS: true }).then((canvas) =>{
            var imgData = canvas.toDataURL("image/png");
            console.log(imgData)
            var a = document.createElement("a");
            a.href = imgData;
            a.download = "image.png";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    });

    let isExpanded = false;

    $("#cat").on("mouseenter", (function() {
        if (!isExpanded) {
            $("#cat").animate({
                width: "100%",
                height: "auto"
            },
            {
                duration: 2000,
                complete: function () {
                    $("#unexpand").show();
                    isExpanded = false;
                }
            }
            );
        
            isExpanded = true;
        }
    }));

    
    $("#unexpand").click(function() {
        if (!isExpanded) {
            $("#unexpand").hide();
            $("#cat").animate({
                width: "100px",
                height: "auto"
            },
            {
                duration: 2000,
                complete: function () {
                    isExpanded = false;
                }
            });
            isExpanded = true;
        }
    });

});
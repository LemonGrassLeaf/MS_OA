var sum = 0;
var q1_score = 0;
var q2_score = 0;

$(document).ready(function () {
    $("#q2").hide();

    $('#q1').click(function () {
        if ($("#q1a1").is(":checked")) {
            $("#q2").fadeIn(100);
        }
        else {
            $("#q2").hide();
        }
    })

    $('#submit').click(function () {

        if (!($("#q1a1").is(":checked") || $("#q1a2").is(":checked") || $("#q1a3").is(":checked"))) {
            console.log('err1')
            $("#e1").html("Please answer question 1");

        }
        //show error1
        else {
            if ($("#q1a1").is(":checked") && !($("#q2a1").is(":checked") || $("#q2a2").is(":checked") || $("#q2a3").is(":checked"))) {
                //show error 2
                console.log('err2')
                $("#e2").html("Please answer question 2");
            }
            else {
                if (sum < 0 || sum > 225) {
                    window.location.reload();
                    //show error 3 and skip 
                }
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({ sum }),
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            }

        }


            if ($("#q1a1").is(":checked")) { q1_score = 100; };
            if ($("#q1a2").is(":checked")) { q1_score = 50; };
            if ($("#q1a3").is(":checked")) { q1_score = 0; };
            if ($("#q2a1").is(":checked")) { q2_score += 50; };
            if ($("#q2a2").is(":checked")) { q2_score += 50; };
            if ($("#q2a3").is(":checked")) { q2_score += 25; };

            sum = q1_score + q2_score;
            console.log(sum)
            q1_score = 0
            q2_score = 0
            //console.log(q1_score);
            //console.log(q2_score);


        });
    
   
    
    //$('#skip').click(function () {
    //    window.location.reload();
    //})

 });

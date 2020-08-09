var id = 1, score = 0;
var selectedanswer = "";

var app = {
    questions: [
        {

            ques: 'What is the name of the river ?',
            options: ['Danube', 'Niger', 'Indus', 'Dutch'],
            answer: 'Indus'
        },
        {
            ques: 'What is the name of the food ?',
            options: ['Mango', 'Butter', 'Biryani', 'Limpopo'],
            answer: 'Biryani'
        },
        {
            ques: 'What is the name of the Deadly virus ?',
            options: ['Malaria', 'Typhoid', 'Corona', 'Flue'],
            answer: 'Corona'
        },

        {
            ques: 'What is the name of the country ?',
            options: ['Killvi', 'Toronto', 'Malaysia', 'Wuhan'],
            answer: 'Malaysia'
        },

        {
            ques: 'Which city is also city of lights ?',
            options: ['Karachi', 'Faisalabad', 'Sialkot', 'Lahore'],
            answer: 'Karachi'
        },
        {
            ques: 'What is the currency of Nigeria ?',
            options: ['Naira', 'PKR', 'USD', 'nigaro'],
            answer: 'Naira'
        }
    ]
}



function clickNext() {
    var qid = document.getElementById("questionactive");
    var para = document.getElementById("para");
    var next = document.getElementById("next");
    if (id < app.questions.length)
    {
    para.innerHTML = app.questions[id].ques;
    var answers = document.getElementsByClassName("alert alert-info");
    for (var i = 0; i < app.questions[id].options.length; i++) 
    {
        answers[i].innerHTML = app.questions[id].options[i];
    }
    if (selectedanswer == app.questions[id - 1].answer) {
        score += 10;
    }
    console.log(score);
    document.getElementById("score").innerHTML = score;
    id++;
}

else
{
    if (selectedanswer == app.questions[id - 1].answer) {
        score += 10;
    }
       console.log(score);
       document.getElementById("score").innerHTML = score;
       next.innerHTML = "Submit"
       next.setAttribute("onclick","submit()")
}

}

function checkselected(e) {

    selectedanswer = e.innerHTML;
    console.log(selectedanswer);
    var qid = document.getElementById("questionactive");

}

function submit()
{
   
    window.location.href = "submit.html"

}




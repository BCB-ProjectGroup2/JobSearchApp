//candidate/employer form logic

$(document).ready(function(){
  console.log("pageLoaded")
  $(".submitButton").click(function(){
    
    var form = $(this).attr("id")== "employerButton" ? "employer" : "candidate"
    var answers = [];
    var dropDowns = $(".chosen-select")
    
    
    
    for (var i = 0; i < dropDowns.length; i++) { 
      answers.push(dropDowns[i].value)
    }
      console.log(answers,form);


      $.ajax({
        method: "POST",
        url: "/formSubmit",
        data:{
          formAnswers: answers,
          formName: form,
          surveyName: "surveyName",
          
        }
      })
        .done(function( msg ) {
          console.log( "Data Saved: " + msg );
        });



    
  });
});





















//employer form logic
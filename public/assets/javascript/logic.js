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
           surveyName: $.trim($(".nameof").val()),
           about: $.trim($(".aboutme").val()),
          
          
        }
      })
        .done(function(data) {
          //console.log( "Data Saved: " + data.employerData.employer_name);
          var messageBox = $('<div>')
          messageBox.addClass("messagebox")
          
          if(form=="candidate"){
            messageBox.html(data.employerData.employer_name)
          }
          else {
            messageBox.html(data.candidateData.candidate_name)
          }
          $('.jumbotron').prepend(messageBox)

          
        });
  });
});





















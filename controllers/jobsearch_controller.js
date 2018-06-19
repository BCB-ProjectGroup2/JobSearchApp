var express = require("express")
var router = express.Router()
var db = require("../models/index.js")


router.get('/', function (req, res) {
  res.render('index')
  
})


router.get('/jobform', function (req, res) {
  res.render('jobform')
})

router.get('/employerform', function (req, res) {
  res.render('employerform')
})

router.get('/employerlist', function (req, res) {
   res.render('employerlist')
})

router.post('/formSubmit',function (req,res) {
  if(req.body.formName=="candidate"){
  

  
   db.Employer.findAll({}).then(results=>{
     var possibleEmployerMatches = []
     var matchScores = []


    for (var i = 0; i < results.length; i++) { 
    if (Number(req.body.formAnswers[0])==results[i].dataValues.department_name 
    && Number(req.body.formAnswers[4])>=results[i].dataValues.role_seniority){

      possibleEmployerMatches.push(results[i].dataValues) 
      
    }       
  }
     
    for (var i = 0; i < possibleEmployerMatches.length; i++) {
      var Score = 0;
      Score += possibleEmployerMatches[i].department_name - Number(req.body.formAnswers[1])
      Score += possibleEmployerMatches[i].company_size - Number(req.body.formAnswers[2])
      Score += possibleEmployerMatches[i].company_maturity - Number(req.body.formAnswers[3])
      Score += possibleEmployerMatches[i].office_culture - Number(req.body.formAnswers[4])
      Score += possibleEmployerMatches[i].role_seniority - Number(req.body.formAnswers[5])
      Score += possibleEmployerMatches[i].salary_range - Number(req.body.formAnswers[6])
      Score += possibleEmployerMatches[i].role_type - Number(req.body.formAnswers[7])
      Score += possibleEmployerMatches[i].start_time - Number(req.body.formAnswers[8])
      Score += possibleEmployerMatches[i].upward_mobility - Number(req.body.formAnswers[9])
      Score += possibleEmployerMatches[i].international_offices - Number(req.body.formAnswers[10])
      matchScores.push(Score)
  }
    var indexOfMinimum = matchScores.indexOf(Math.min.apply(null,matchScores))
    //console.log(possibleEmployerMatches[indexOfMinimum], matchScores[indexOfMinimum])
    res.json({
      employerData: possibleEmployerMatches[indexOfMinimum],
      winningScore: matchScores[indexOfMinimum]

    })
      })
    }
    else{
      db.Candidate.findAll({}).then(results=>{
        var possibleCandidateMatches = []
        var matchScores = []
        console.log(results)
   
   
       for (var i = 0; i < results.length; i++) { 
       if (Number(req.body.formAnswers[0])==results[i].dataValues.department_name 
       && Number(req.body.formAnswers[4])<=results[i].dataValues.role_seniority){
   
         possibleCandidateMatches.push(results[i].dataValues) 
         
       }       
     }
        
       for (var i = 0; i < possibleCandidateMatches.length; i++) {
         var Score = 0;
         Score += possibleCandidateMatches[i].department_name - Number(req.body.formAnswers[1])
         Score += possibleCandidateMatches[i].company_size - Number(req.body.formAnswers[2])
         Score += possibleCandidateMatches[i].company_maturity - Number(req.body.formAnswers[3])
         Score += possibleCandidateMatches[i].office_culture - Number(req.body.formAnswers[4])
         Score += possibleCandidateMatches[i].role_seniority - Number(req.body.formAnswers[5])
         Score += possibleCandidateMatches[i].salary_range - Number(req.body.formAnswers[6])
         Score += possibleCandidateMatches[i].role_type - Number(req.body.formAnswers[7])
         Score += possibleCandidateMatches[i].start_time - Number(req.body.formAnswers[8])
         Score += possibleCandidateMatches[i].upward_mobility - Number(req.body.formAnswers[9])
         Score += possibleCandidateMatches[i].international_offices - Number(req.body.formAnswers[10])
         matchScores.push(Score)
     }
       var indexOfMinimum = matchScores.indexOf(Math.min.apply(null,matchScores))
       console.log(possibleCandidateMatches[indexOfMinimum], matchScores[indexOfMinimum])
       res.json({
         candidateData: possibleCandidateMatches[indexOfMinimum],
         winningScore: matchScores[indexOfMinimum]
   
       })
      
      })
    }



  

})






module.exports = router;

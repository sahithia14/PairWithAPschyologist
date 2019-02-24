var instructions = "If you need help, you've come to the right place. Answer a few questions and we will pair you up with a qualified professional to cater to your needs."
var typeOfStudent = ""
var causeOfStress = "";
var gradesArray = [];
var extracurricularArray = [];
var personalLifeArray = [];
var socialLifeArray = [];
var jobArray = [];
var moneyArray = [];
var traumaticEventArray = [];
var psychologistArray = ["Eryn Weber-Shifrin: 3129457836","Maria Alejandra Ramirez: 8722313776","Howard Gelb LCSW: 7739380612","Michelle Montero: 7734928322","Stephanie Ennen:7739064022","Arryn Hawthorne:7738048809","Abby J. Taplin:8154187137","Ali Rybicki Barnum:8475503725","Sunitha Rachel Chandy:7738394606 ","Rushini Jayawardena:7735701595","Andrew D Castillo:8722405308","Elizabeth Lombardo:8473544131"];

// Code citation
// 		Author: Group 5
// 		Accessed: 02/23/19
// 		URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// 		Purpose: To return a random number within a certain range
function getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayInstructions(){
    document.getElementById("idDisplayInstructions").innerHTML = instructions;
    document.getElementById("idStudent").innerHTML = "Are you in high school or college? Please type in either 'High School' or 'College' exactly."
    document.getElementById("idTypeOfStudent").style.visibility = 'visible';
    document.getElementById("idMove").style.visibility = 'visible';
    document.getElementById("idShortTerm").style.visibility = 'hidden';
    document.getElementById("idLongTerm").style.visibility = 'hidden';
    document.getElementById("idActualCauseOfStress").style.visibility = 'hidden';
    document.getElementById("idHighSchoolShortMoveWithCause").style.visibility = 'hidden';
    document.getElementById("idNextQuestion").style.visibility = 'hidden';
    document.getElementById("idCollegeCauseOfStress").style.visibility = 'hidden';
    document.getElementById("idCollegeShortMoveWithCause").style.visibility = 'hidden';
    document.getElementById("idHighSchoolLongMoveWithCause").style.visibility = 'hidden';
    document.getElementById("idCollegeLongMoveWithCause").style.visibility = 'hidden';
    document.getElementById("idCollegeLongCauseOfStress").style.visibility = 'hidden';
    document.getElementById("idActualLongCauseOfStress").style.visibility = 'hidden';
    document.getElementById("idNextLongQuestion").style.visibility = 'hidden';
}

function student(){
    typeOfStudent = document.getElementById("idTypeOfStudent").value;
    document.getElementById("idStressLevel").innerHTML = "How often is your stress?";
    document.getElementById("idShortTerm").style.visibility = 'visible';
    document.getElementById("idLongTerm").style.visibility = 'visible';
}

function shortTermStress(){
    document.getElementById("idShortTerm").style.visibility = 'hidden';
    document.getElementById("idLongTerm").style.visibility = 'hidden';
    document.getElementById("idCauseOfStress").innerHTML = "What is closest to the thing that is causing your stress?"
    if(typeOfStudent == "High School"){
        document.getElementById("idActualCauseOfStress").style.visibility = 'visible';
        document.getElementById("idHighSchoolShortMoveWithCause").style.visibility = 'visible';
    }
    else if(typeOfStudent == "College"){
        document.getElementById("idCollegeCauseOfStress").style.visibility = 'visible';
        document.getElementById("idCollegeShortMoveWithCause").style.visibility = 'visible';
    }
}

function longTermStress(){
    document.getElementById("idShortTerm").style.visibility = 'hidden';
    document.getElementById("idLongTerm").style.visibility = 'hidden';
    document.getElementById("idCauseOfStress").innerHTML = "What is closest to the thing that is causing your stress?"
    if(typeOfStudent == "High School"){
        document.getElementById("idActualLongCauseOfStress").style.visibility = 'visible';
        document.getElementById("idHighSchoolLongMoveWithCause").style.visibility = 'visible';
    }
    else if(typeOfStudent == "College"){
        document.getElementById("idCollegeLongCauseOfStress").style.visibility = 'visible';
        document.getElementById("idCollegeLongMoveWithCause").style.visibility = 'visible';
    }
}

function shortTermStressQuestions(){
    if(typeOfStudent == "High School"){
        causeOfStress = document.getElementById("idActualCauseOfStress").value;
        document.getElementById("idActualCauseOfStress").style.visibility = 'hidden';
        if(causeOfStress == "Grades"){
            var gradeArrayLength = gradesArray.length;
            if(gradeArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Are you proud of your grades?"
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(gradeArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Is there a class that you have trouble with?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Extracurriculars"){
            var extracurricularArrayLength = extracurricularArray.length;
            if(extracurricularArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Are these activities important to you?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(extracurricularArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Do your parents pressure you to do good in activities?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Personal Life"){
            var personalLifeArrayLength = personalLifeArray.length;
            if(personalLifeArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Are you able to sleep at night?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "If you can't sleep at night, is it due to nightmares?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 2){
                document.getElementById("idQuestion").innerHTML = "Do you often have panic attacks?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 3){
                document.getElementById("idQuestion").innerHTML = "Are your parents the cause of your stress?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 4){
                document.getElementById("idQuestion").innerHTML = "Do you often feel anxious or worried?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 5){
                document.getElementById("idQuestion").innerHTML = "Do you have low energy daily?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Social Life"){
            var socialLifeArrayLength = socialLifeArray.length;
            if(socialLifeArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "How many friends can you trust?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Do you have a boyfriend/girlfriend?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 2){
                document.getElementById("idQuestion").innerHTML = "If you have a boyfriend/girlfriend?, does he/she respect you?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 3){
                document.getElementById("idQuestion").innerHTML = "Are you involved with drugs, alcohol, smoking/vaping?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 4){
                document.getElementById("idQuestion").innerHTML = "Are you sexually active?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 5){
                document.getElementById("idQuestion").innerHTML = "Are you a member of the LGBTQ community?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Job"){
            var jobArrayLength = jobArray.length;
            if(jobArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Do you like your job?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(jobArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Is your job very necessary?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
        }
    }
    else if(typeOfStudent == "College"){
        causeOfStress = document.getElementById("idCollegeCauseOfStress").value;
        document.getElementById("idCollegeCauseOfStress").style.visibility = 'hidden';
        if(causeOfStress == "Grades"){
            var gradeArrayLength = gradesArray.length;
            if(gradeArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Are you proud of your grades?"
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(gradeArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Is there a class that you have trouble with?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Extracurriculars"){
            var extracurricularArrayLength = extracurricularArray.length;
            if(extracurricularArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Are these activities important to you?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(extracurricularArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Do your parents pressure you to do good in activities?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Personal Life"){
            var personalLifeArrayLength = personalLifeArray.length;
            if(personalLifeArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Are you able to sleep at night?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "If you can't sleep at night, is it due to nightmares?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 2){
                document.getElementById("idQuestion").innerHTML = "Do you often have panic attacks?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 3){
                document.getElementById("idQuestion").innerHTML = "Are your parents the cause of your stress?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 4){
                document.getElementById("idQuestion").innerHTML = "Do you often feel anxious or worried?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 5){
                document.getElementById("idQuestion").innerHTML = "Do you have low energy daily?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Social Life"){
            var socialLifeArrayLength = socialLifeArray.length;
            if(socialLifeArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "How many friends can you trust?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Do you have a boyfriend/girlfriend?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 2){
                document.getElementById("idQuestion").innerHTML = "If you have a boyfriend/girlfriend?, does he/she respect you?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 3){
                document.getElementById("idQuestion").innerHTML = "Are you involved with drugs, alcohol, smoking/vaping?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 4){
                document.getElementById("idQuestion").innerHTML = "Are you sexually active?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 5){
                document.getElementById("idQuestion").innerHTML = "Are you a member of the LGBTQ community?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Job"){
            var jobArrayLength = jobArray.length;
            if(jobArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Do you like your job?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(jobArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Is your job very necessary?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Money"){
            var moneyArrayLength = moneyArray.length;
            if(moneyArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Do you have student loan debt?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(moneyArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Do you have problems with money?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
            else if(moneyArrayLength == 2){
                document.getElementById("idQuestion").innerHTML = "Do you have a lot of financial responsibility with your tuition?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextQuestion").style.visibility = 'visible';
            }
        }
    }
}

function goShortNextQuestion(){
    var questionAnswer = document.getElementById("idSpecificQuestion").value;
    if(causeOfStress == "Grades"){
        gradesArray.push(questionAnswer);
        var gradeArrayLength = gradesArray.length;
        if(gradeArrayLength < 2){
            document.getElementById("idQuestion").innerHTML = "";
            document.getElementById("idSpecificQuestion").value = "";
            shortTermStressQuestions();
        }
        else {
            for(var i = 0; i < 6; i++){
                psychologistArrayLength = psychologistArray.length;
                var psychologistList = psychologistArray[getRandomIntInclusive(0, psychologistArrayLength - 1)];
                document.getElementById("idPsychologists").innerHTML += psychologistList + '<br>';
                var index = psychologistArray.indexOf(psychologistList);
                psychologistArray.splice(index, 1);
            }
        }
    }
    else if(causeOfStress == "Extracurriculars"){
        extracurricularArray.push(questionAnswer);
        var extracurricularArrayLength = extracurricularArray.length;
        if(extracurricularArrayLength < 2){
            document.getElementById("idQuestion").innerHTML = "";
            document.getElementById("idSpecificQuestion").value = "";
            shortTermStressQuestions();
        }
        else {
            for(var i = 0; i < 6; i++){
                psychologistArrayLength = psychologistArray.length;
                var psychologistList = psychologistArray[getRandomIntInclusive(0, psychologistArrayLength - 1)];
                document.getElementById("idPsychologists").innerHTML += psychologistList + '<br>';
                var index = psychologistArray.indexOf(psychologistList);
                psychologistArray.splice(index, 1);
            }
        }
    }
    else if(causeOfStress == "Personal Life"){
        personalLifeArray.push(questionAnswer);
        var personalLifeArrayLength = personalLifeArray.length;
        if(personalLifeArrayLength < 6){
            document.getElementById("idQuestion").innerHTML = "";
            document.getElementById("idSpecificQuestion").value = "";
            shortTermStressQuestions();
        }
        else {
            for(var i = 0; i < 6; i++){
                psychologistArrayLength = psychologistArray.length;
                var psychologistList = psychologistArray[getRandomIntInclusive(0, psychologistArrayLength - 1)];
                document.getElementById("idPsychologists").innerHTML += psychologistList + '<br>';
                var index = psychologistArray.indexOf(psychologistList);
                psychologistArray.splice(index, 1);
            }
        }
    }
    else if(causeOfStress == "Social Life"){
        socialLifeArray.push(questionAnswer);
        var socialLifeArrayLength = socialLifeArray.length;
        if(socialLifeArrayLength < 6){
            document.getElementById("idQuestion").innerHTML = "";
            document.getElementById("idSpecificQuestion").value = "";
            shortTermStressQuestions();
        }
        else {
            for(var i = 0; i < 6; i++){
                psychologistArrayLength = psychologistArray.length;
                var psychologistList = psychologistArray[getRandomIntInclusive(0, psychologistArrayLength - 1)];
                document.getElementById("idPsychologists").innerHTML += psychologistList + '<br>';
                var index = psychologistArray.indexOf(psychologistList);
                psychologistArray.splice(index, 1);
            }
        }
    }
    else if(causeOfStress == "Job"){
        jobArray.push(questionAnswer);
        var jobArrayLength = jobArray.length;
        if(jobArrayLength < 2){
            document.getElementById("idQuestion").innerHTML = "";
            document.getElementById("idSpecificQuestion").value = "";
            shortTermStressQuestions();
        }
        else {
            for(var i = 0; i < 6; i++){
                psychologistArrayLength = psychologistArray.length;
                var psychologistList = psychologistArray[getRandomIntInclusive(0, psychologistArrayLength - 1)];
                document.getElementById("idPsychologists").innerHTML += psychologistList + '<br>';
                var index = psychologistArray.indexOf(psychologistList);
                psychologistArray.splice(index, 1);
            }
        }
    }
    else if(causeOfStress == "Money"){
        moneyArray.push(questionAnswer);
        var moneyArrayLength = moneyArray.length;
        if(moneyArrayLength < 2){
            document.getElementById("idQuestion").innerHTML = "";
            document.getElementById("idSpecificQuestion").value = "";
            shortTermStressQuestions();
        }
        else {
            for(var i = 0; i < 6; i++){
                psychologistArrayLength = psychologistArray.length;
                var psychologistList = psychologistArray[getRandomIntInclusive(0, psychologistArrayLength - 1)];
                document.getElementById("idPsychologists").innerHTML += psychologistList + '<br>';
                var index = psychologistArray.indexOf(psychologistList);
                psychologistArray.splice(index, 1);
            }
        }
    }
    else if(causeOfStress == "Traumatic Event"){
        traumaticEventArray.push(questionAnswer);
        var traumaticEventArrayLength = traumaticEventArray.length;
        if(traumaticEventArrayLength < 4){
            document.getElementById("idQuestion").innerHTML = "";
            document.getElementById("idSpecificQuestion").value = "";
            longTermStressQuestions();
        }
        else {
            for(var i = 0; i < 6; i++){
                psychologistArrayLength = psychologistArray.length;
                var psychologistList = psychologistArray[getRandomIntInclusive(0, psychologistArrayLength - 1)];
                document.getElementById("idPsychologists").innerHTML += psychologistList + '<br>';
                var index = psychologistArray.indexOf(psychologistList);
                psychologistArray.splice(index, 1);
            }
        }
    }
}

function longTermStressQuestions(){
    if(typeOfStudent == "High School"){
        causeOfStress = document.getElementById("idActualLongCauseOfStress").value;
        document.getElementById("idActualLongCauseOfStress").style.visibility = 'hidden';
        if(causeOfStress == "Grades"){
            var gradeArrayLength = gradesArray.length;
            if(gradeArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Are you proud of your grades?"
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(gradeArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Is there a class that you have trouble with?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Extracurriculars"){
            var extracurricularArrayLength = extracurricularArray.length;
            if(extracurricularArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Are these activities important to you?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(extracurricularArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Do your parents pressure you to do good in activities?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Personal Life"){
            var personalLifeArrayLength = personalLifeArray.length;
            if(personalLifeArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Are you able to sleep at night?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "If you can't sleep at night, is it due to nightmares?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 2){
                document.getElementById("idQuestion").innerHTML = "Do you often have panic attacks?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 3){
                document.getElementById("idQuestion").innerHTML = "Are your parents the cause of your stress?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 4){
                document.getElementById("idQuestion").innerHTML = "Do you often feel anxious or worried?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 5){
                document.getElementById("idQuestion").innerHTML = "Do you have low energy daily?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Social Life"){
            var socialLifeArrayLength = socialLifeArray.length;
            if(socialLifeArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "How many friends can you trust?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Do you have a boyfriend/girlfriend?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 2){
                document.getElementById("idQuestion").innerHTML = "If you have a boyfriend/girlfriend?, does he/she respect you?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 3){
                document.getElementById("idQuestion").innerHTML = "Are you involved with drugs, alcohol, smoking/vaping?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 4){
                document.getElementById("idQuestion").innerHTML = "Are you sexually active?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 5){
                document.getElementById("idQuestion").innerHTML = "Are you a member of the LGBTQ community?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Job"){
            var jobArrayLength = jobArray.length;
            if(jobArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Do you like your job?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(jobArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Is your job very necessary?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Traumatic Event"){
            var traumaticEventArrayLength = traumaticEventArray.length;
            if(traumaticEventArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Has a traumatic event happened in your life?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(traumaticEventArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Do you feel yourself reliving this traumatic event often?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(traumaticEventArrayLength == 2){
                document.getElementById("idQuestion").innerHTML = "Do you feel anxious or worried all the time?";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
        }
    }
    else if(typeOfStudent == "College"){
        causeOfStress = document.getElementById("idCollegeLongCauseOfStress").value;
        document.getElementById("idCollegeLongCauseOfStress").style.visibility = 'hidden';
        if(causeOfStress == "Grades"){
            var gradeArrayLength = gradesArray.length;
            if(gradeArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Are you proud of your grades?"
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(gradeArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Is there a class that you have trouble with?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Extracurriculars"){
            var extracurricularArrayLength = extracurricularArray.length;
            if(extracurricularArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Are these activities important to you?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(extracurricularArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Do your parents pressure you to do good in activities?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Personal Life"){
            var personalLifeArrayLength = personalLifeArray.length;
            if(personalLifeArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Are you able to sleep at night?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "If you can't sleep at night, is it due to nightmares?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 2){
                document.getElementById("idQuestion").innerHTML = "Do you often have panic attacks?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 3){
                document.getElementById("idQuestion").innerHTML = "Are your parents the cause of your stress?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 4){
                document.getElementById("idQuestion").innerHTML = "Do you often feel anxious or worried?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(personalLifeArrayLength == 5){
                document.getElementById("idQuestion").innerHTML = "Do you have low energy daily?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Social Life"){
            var socialLifeArrayLength = socialLifeArray.length;
            if(socialLifeArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "How many friends can you trust?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Do you have a boyfriend/girlfriend?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 2){
                document.getElementById("idQuestion").innerHTML = "If you have a boyfriend/girlfriend?, does he/she respect you?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 3){
                document.getElementById("idQuestion").innerHTML = "Are you involved with drugs, alcohol, smoking/vaping?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 4){
                document.getElementById("idQuestion").innerHTML = "Are you sexually active?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(socialLifeArrayLength == 5){
                document.getElementById("idQuestion").innerHTML = "Are you a member of the LGBTQ community?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Job"){
            var jobArrayLength = jobArray.length;
            if(jobArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Do you like your job?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(jobArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Is your job very necessary?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Money"){
            var moneyArrayLength = moneyArray.length;
            if(moneyArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Do you have student loan debt?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(moneyArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Do you have problems with money?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(moneyArrayLength == 2){
                document.getElementById("idQuestion").innerHTML = "Do you have a lot of financial responsibility with your tuition?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
        }
        else if(causeOfStress == "Traumatic Event"){
            var traumaticEventArrayLength = traumaticEventArray.length;
            if(traumaticEventArrayLength == 0){
                document.getElementById("idQuestion").innerHTML = "Has a traumatic event happened in your life?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(traumaticEventArrayLength == 1){
                document.getElementById("idQuestion").innerHTML = "Do you feel yourself reliving this traumatic event often?";
                document.getElementById("idSpecificQuestion").value = "";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
            else if(traumaticEventArrayLength == 2){
                document.getElementById("idQuestion").innerHTML = "Do you feel anxious or worried all the time?";
                document.getElementById("idNextLongQuestion").style.visibility = 'visible';
            }
        }
    }
}

function goLongNextQuestion(){
    var questionAnswer = document.getElementById("idSpecificQuestion").value;
    if(causeOfStress == "Grades"){
        gradesArray.push(questionAnswer);
        var gradeArrayLength = gradesArray.length;
        if(gradeArrayLength < 2){
            document.getElementById("idQuestion").innerHTML = "";
            document.getElementById("idSpecificQuestion").value = "";
            longTermStressQuestions();
        }
        else {
            for(var i = 0; i < 6; i++){
                psychologistArrayLength = psychologistArray.length;
                var psychologistList = psychologistArray[getRandomIntInclusive(0, psychologistArrayLength - 1)];
                document.getElementById("idPsychologists").innerHTML += psychologistList + '<br>';
                var index = psychologistArray.indexOf(psychologistList);
                psychologistArray.splice(index, 1);
            }
        }
    }
    else if(causeOfStress == "Extracurriculars"){
        extracurricularArray.push(questionAnswer);
        var extracurricularArrayLength = extracurricularArray.length;
        if(extracurricularArrayLength < 2){
            document.getElementById("idQuestion").innerHTML = "";
            document.getElementById("idSpecificQuestion").value = "";
            longTermStressQuestions();
        }
        else {
            for(var i = 0; i < 6; i++){
                psychologistArrayLength = psychologistArray.length;
                var psychologistList = psychologistArray[getRandomIntInclusive(0, psychologistArrayLength - 1)];
                document.getElementById("idPsychologists").innerHTML += psychologistList + '<br>';
                var index = psychologistArray.indexOf(psychologistList);
                psychologistArray.splice(index, 1);
            }
        }
    }
    else if(causeOfStress == "Personal Life"){
        personalLifeArray.push(questionAnswer);
        var personalLifeArrayLength = personalLifeArray.length;
        if(personalLifeArrayLength < 6){
            document.getElementById("idQuestion").innerHTML = "";
            document.getElementById("idSpecificQuestion").value = "";
            longTermStressQuestions();
        }
        else {
            for(var i = 0; i < 6; i++){
                psychologistArrayLength = psychologistArray.length;
                var psychologistList = psychologistArray[getRandomIntInclusive(0, psychologistArrayLength - 1)];
                document.getElementById("idPsychologists").innerHTML += psychologistList + '<br>';
                var index = psychologistArray.indexOf(psychologistList);
                psychologistArray.splice(index, 1);
            }
        }
    }
    else if(causeOfStress == "Social Life"){
        socialLifeArray.push(questionAnswer);
        var socialLifeArrayLength = socialLifeArray.length;
        if(socialLifeArrayLength < 6){
            document.getElementById("idQuestion").innerHTML = "";
            document.getElementById("idSpecificQuestion").value = "";
            longTermStressQuestions();
        }
        else {
            for(var i = 0; i < 6; i++){
                psychologistArrayLength = psychologistArray.length;
                var psychologistList = psychologistArray[getRandomIntInclusive(0, psychologistArrayLength - 1)];
                document.getElementById("idPsychologists").innerHTML += psychologistList + '<br>';
                var index = psychologistArray.indexOf(psychologistList);
                psychologistArray.splice(index, 1);
            }
        }
    }
    else if(causeOfStress == "Job"){
        jobArray.push(questionAnswer);
        var jobArrayLength = jobArray.length;
        if(jobArrayLength < 2){
            document.getElementById("idQuestion").innerHTML = "";
            document.getElementById("idSpecificQuestion").value = "";
            longTermStressQuestions();
        }
        else {
            for(var i = 0; i < 6; i++){
                psychologistArrayLength = psychologistArray.length;
                var psychologistList = psychologistArray[getRandomIntInclusive(0, psychologistArrayLength - 1)];
                document.getElementById("idPsychologists").innerHTML += psychologistList + '<br>';
                var index = psychologistArray.indexOf(psychologistList);
                psychologistArray.splice(index, 1);
            }
        }
    }
    else if(causeOfStress == "Money"){
        moneyArray.push(questionAnswer);
        var moneyArrayLength = moneyArray.length;
        if(moneyArrayLength < 3){
            document.getElementById("idQuestion").innerHTML = "";
            document.getElementById("idSpecificQuestion").value = "";
            longTermStressQuestions();
        }
        else {
            for(var i = 0; i < 6; i++){
                psychologistArrayLength = psychologistArray.length;
                var psychologistList = psychologistArray[getRandomIntInclusive(0, psychologistArrayLength - 1)];
                document.getElementById("idPsychologists").innerHTML += psychologistList + '<br>';
                var index = psychologistArray.indexOf(psychologistList);
                psychologistArray.splice(index, 1);
            }
        }
    }
    else if(causeOfStress == "Traumatic Event"){
        traumaticEventArray.push(questionAnswer);
        var traumaticEventArrayLength = traumaticEventArray.length;
        if(traumaticEventArrayLength < 3){
            document.getElementById("idQuestion").innerHTML = "";
            document.getElementById("idSpecificQuestion").value = "";
            longTermStressQuestions();
        }
        else {
            for(var i = 0; i < 6; i++){
                psychologistArrayLength = psychologistArray.length;
                var psychologistList = psychologistArray[getRandomIntInclusive(0, psychologistArrayLength - 1)];
                document.getElementById("idPsychologists").innerHTML += psychologistList + '<br>';
                var index = psychologistArray.indexOf(psychologistList);
                psychologistArray.splice(index, 1);
            }
        }
    }
}


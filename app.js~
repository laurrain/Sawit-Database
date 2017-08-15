'use strict';
var express = require("express"),
   exphbs = require("express-handlebars"),
   mysql = require('./public/js/testConnectionData'),
    mysql = require('mysql'), 
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    //learnersMethods = require('./routes/learnersMethods'),
    userMethods = require('./routes/userMethods'),
    parseurl = require('parseurl'),
    session = require('express-session');

  
//Statistics files objects
var connectionProvider = require('./routes/connectionProvider'),
    auth = require('./routes/Auth'),
    AuthDataService = require('./DataServices/authData'),
    learners = require('./routes/learner'),
    learnerDataService = require('./DataServices/learnerData'),
    facilitators = require('./routes/facilitator'),
    facilitatorDataService = require('./DataServices/facilitatorData')

    var app = express();

    var path = require('path');

path.join(__dirname, '/public/CSS/style.less');
    
    app.use(express.static('public'));



var serviceSetupCallback = function(connection){
  return {
    learnerDataServ: new learnerDataService(connection),
    authDataServ: new AuthDataService(connection),
    facilitatorDataServ: new facilitatorDataService(connection)
  }
};

var myConnectionProvider = new connectionProvider(dbOptions, serviceSetupCallback);
app.use(myConnectionProvider.setupProvider);



app.use(myConnection(mysql, dbOptions, 'pool'));

    
app.engine("handlebars", exphbs({defaultLayout:"main"}))
app.set("view engine", "handlebars")
app.use(express.static('public'));
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.set('trust proxy', 1) // trust first proxy 
app.use(session({
  secret: 'lau lo',
  resave: true,
  saveUninitialized: false,
  cookie : {maxAge : 5*60000}
}))


app.get("/", auth.checkUser, function(req, res){  

  res.render("home", {administrator : administrator})
})

app.get('/login',function(req, res){
  res.render('login')
})
app.post("/login", userMethods.authUser)

app.get("/logout", function(req, res, next){

  if (req.session.user){
    delete req.session.user;
    res.redirect("/login")
  }else {
    // the user is not logged in redirect him to the login page-
    res.redirect("/login")
  }
});

app.get('/signup',userMethods.checkUser, function(req,res){
  res.render("signup", {administrator : administrator})
});

app.post('/signup', userMethods.signup);

var learners = new learners();
app.get('/learner_add', function(req,res){
  res.render("learner_add", {data:learners, administrator :administrator})
})
app.post('/learner_add', auth.checkUser, learners.add);

app.get('/questionaireCapture',auth.checkUser, function(req,res){
  res.render("questionaireCapture", {data:learners})
})
app.post('/questionaireCapture', learners.QuestionaireCapture);

var facilitators = new facilitators();
app.get('/facilitator_add', auth.checkUser, function(req,res){
  res.render("facilitator_add", {data:facilitators})
})
app.post('/facilitator_add', facilitators.addFacilitator);

app.get('/exitPlan_add', auth.checkUser,function(req,res){
  res.render("exitPlan_add", {data:facilitators})
})
app.post('/exitPlan_add', facilitators.addExitPlan);

app.get('/placement_add/:Idnumber', auth.checkUser, facilitators.getplacement_add);

app.post('/placement_add',facilitators.addPlacement);


app.get('/date_add', function(req,res){
  res.render("date_add", {data:learners})
})
app.post('/attendance', auth.checkUser, learners.addDate);


app.get('/admin_panel',auth.checkUser, auth.showAdminPanel);
 
app.post('/user/admin_panel/:username', auth.promoteUser);

app.get('/programCurriculum_add', auth.checkUser, function(req,res){
  res.render("programCurriculum_add", {data:learners})
})
app.post('/programCurriculum_add', auth.checkUser, facilitators.addProgramCurriculum);

app.get('/learner', auth.checkUser, learners.showLearner);
app.get('/surname', auth.checkUser, learners.showSurname);
app.get('/course', auth.checkUser,learners.showCourse);
app.get('/location', auth.checkUser, learners.showLocation);
app.get('/lecturer', auth.checkUser, facilitators.showFacilitator);
app.get('/attendance', auth.checkUser, learners.showAttendance);
app.get('/graduate', auth.checkUser, learners.showGraduate);
app.get('/attendanceCaptureView', auth.checkUser, learners.showAttendanceCaptureView);
app.get('/attendanceRecord', auth.checkUser, learners.showAttendanceRecord);
app.get('/learnerProfile', auth.checkUser,  learners.showLearnerProfile);
app.get('/programCurriculum', auth.checkUser, facilitators.showCurriculum);
app.get('/placement', auth.checkUser, facilitators.showPlacement);
app.get('/exitPlan', auth.checkUser,  facilitators.showExitPlan);
app.get('/feedbackQuestionaire', auth.checkUser, learners.showFeedbackQuestionaire);

app.get('/learner/signed/:Idnumber',learners.captureAttendance);
app.get('/placement_add/{{Idnumber}}/:Idnumber',facilitators.addPlacement);

app.get('/learner/learnerProfile/:Idnumber',learners.getViewPersonalInfo);

app.get('/attendanceCaptureView/edit/:Idnumber', learners.getUpdateAttendanceCaptureView);
app.post('/attendanceCaptureView/update/:Idnumber', learners.updateAttendanceCaptureView);
app.get('/attendanceCaptureView/delete/:Idnumber',learners.deleteAttendanceCaptureView);


app.get('/learner/edit/:Idnumber', learners.getUpdate);
app.post('/learner/update/:Idnumber', learners.update);
app.get('/learner/delete/:Idnumber',learners.delete);
//app.get('/attendance/deleteDate/:id',learnersMethods.deleteDate);


app.get('/lecturer/editLecturer/:idNo', facilitators.getUpdateFacilitator);
app.post('/lecturer/updateFacilitator/:idNo', facilitators.updateFacilitator);
app.get('/lecturer/deleteFacilitator/:idNo',facilitators.deleteFacilitator);

app.get('/programCurriculum/editProgram/:module_name', facilitators.getUpdateProgram);
app.post('/programCurriculum/updateProgram/:module_name', facilitators.updateProgram);
app.get('/programCurriculum/deleteProgram/:module_name',facilitators.deleteProgram);

app.get('/placement/editPlacement/:Idnumber', facilitators.getUpdatePlacement);
app.post('/placement/updatePlacement/:Idnumber', facilitators.updatePlacement);
app.get('/placement/deletePlacement/:Idnumber', facilitators.deletePlacement);

app.get('/exitPlan/editExitPlan/:IDno', auth.checkUser, facilitators.getUpdateExitPlan);
app.post('/exitPlan/updateExitPlan/:IDno', auth.checkUser, facilitators.updateExitPlan);
app.get('/exitPlan/deleteExitPlan/:IDno', auth.checkUser, facilitators.deleteExitPlan);


app.get('/learner/view/:Idnumber', auth.checkUser, learners.getView);
app.get('/learner/viewAccountNo/:Idnumber', learners.getViewAccountNo);
app.get('/learner/viewFacilitator/:Idnumber', learners.getViewFacilitator);
app.get('/learner/viewLocation/:Idnumber', learners.getViewLocation);
app.get('/learner/viewPersonalInfo/:Idnumber', learners.getViewPersonalInfo);
app.get('/learner/viewAttendanceRecord/:Idnumber', learners.getViewAttendanceRecord);
app.get('/learner/viewWineIndustry/:Idnumber', learners.getViewWineIndustry);
app.get('/learner/viewFruitVeg/:Idnumber', learners.getViewFruitVeg);


app.get('/Name', learners.sortName);
app.get('/surname', learners.SortSurname);
app.get('/gender', learners.SortGender);
app.get('/course', learners.SortCourse);
app.get('/race', learners.SortRace);
app.get('/Language', learners.SortLanguage);
app.get('/address', learners.SortAddress);
app.get('/facilitator', facilitators.SortFacilitator);
app.get('/location', learners.SortLocation);


app.get('/learner/learnersList/:Name', learners.getSearchNames);
app.get('/Name/search/:searchValue', learners.getSearchNames);

app.get('/surname/surnamesList/:surname', learners.getSearchSurnames);
app.get('/surname/search/:searchValue', learners.getSearchSurnames);

app.get('/course/coursesList/:course', learners.getSearchCourses);
app.get('/course/search/:searchValue', learners.getSearchCourses);

app.get('/gender/gendersList/:gender', learners.getSearchGenders);
app.get('/gender/search/:searchValue', learners.getSearchGenders);

app.get('/race/racesList/:race', learners.getSearchRaces);
app.get('/race/search/:searchValue', learners.getSearchRaces);

app.get('/Language/learnersList/:Language', learners.getSearchLanguages);
app.get('/Language/search/:searchValue', learners.getSearchLanguages);

app.get('/address/addressesList/:address', learners.getSearchAddresses);
app.get('/address/search/:searchValue', learners.getSearchAddresses);

app.get('/facilitator/facilitatorsList/:facilitator', facilitators.getSearchFacilitators);
app.get('/facilitator/search/:searchValue', facilitators.getSearchFacilitators);

app.get('/locationsList/:location', learners.SearchLocation);
app.get('/search/:searchValue', learners.SearchLocation);

app.get('/location/locationssList/:location', learners.getSearchlocations);
app.get('/location/search/:searchValue', learners.getSearchlocations);

app.get('/graduate/graduatesList/:graduate', learners.getSearchGraduates);
app.get('/graduate/search/:searchValue', learners.getSearchGraduates);

//app.get('/attendanceCaptureView/attentendedsList/:surname', learnersMethods.getSearchAttended);
app.get('/accountNo/search/:searchValue', learners.getSearchAttended);

app.get('/profile/profilesList/:Name', learners.getSearchProfile);
app.get('/interest/search/:searchValue', learners.getSearchProfile);

app.get('/placement/work_locationsList/:work_location', facilitators.getSearchWork_location);
app.get('/work_location/search/:searchValue', facilitators.getSearchWork_location);

//app.get('excel', learnersMethods.showExcel);
    



app.get("/*", auth.checkUser,function(req, res){
  res.redirect("/login");
})

var port = process.env.PORT || 3000;

var server = app.listen(port, function(){

  console.log("server is running on " + server.address().address + ":" +server.address().port)

})

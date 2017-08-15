module.exports = function (connection) {
	
  var searchValue = function(req,res,next){
    if (err) return next(err);
    req.params.searchValue;
	}

  var id = function(req,res,next){
    if (err) return next(err);
    req.params.id;
  }
  
  var getData = function(query, cb){
      connection.query(query, null, cb);
  };

  var getSearchData = function(query, searchValue, cb){
    connection.query(query, searchValue, cb);
  }

	this.showLearner = function (cb) {
	        
	  var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, course_date, graduate, facilitator from learner';
          getData(sql,cb)      
      		
	};

	this.showCount = function (cb) {
	  var sql = 'SELECT gender, COUNT(*) AS sex FROM learner GROUP BY gender';
          getData(sql,cb)      
      		
	};

	this.showSurname = function (cb) {
	  var sql = 'SELECT * from learner';
          getData(sql,cb)      
      		
	};

	this.showCourse = function (cb) {
	        var sql = 'SELECT * from learner';
      		getData(sql,cb)
      		
	};

	this.showLocation = function (cb) {
	        var sql = 'SELECT * from learner';
      		getData(sql,cb)
      		
	};

	this.showGraduate = function (cb) {
	        var sql = 'SELECT * from learner';
      		getData(sql,cb)
      		
	};

	this.showEvent = function (cb) {
	        var sql = 'SELECT date FROM events';
      		getData(sql,cb)
      		
	};

	this.showAttendance = function (cb) {
	        var sql = 'SELECT surname, Name, Idnumber, phone from learner';
      		getData(sql,cb)
      		
	};

	this.showAttendanceCaptureView = function (cb) {
	        var sql = 'SELECT * from attended';
      		getData(sql,cb)
      		
	};

	this.showAttendanceRecord = function (cb) {
	        var sql = 'SELECT * FROM attendanceRecord';
      		getData(sql,cb)
      		
	};

	this.showFeedbackQuestionaire = function (cb) {
	        var sql = 'SELECT * FROM questionaire';
      		getData(sql,cb)
      		
	};

	this.showLearnerProfile = function (cb) {
	        var sql = 'SELECT * FROM profile';
      		getData(sql,cb)
      		
	};

	this.add = function (cb) {
	        var sql = 'INSERT INTO learner set ?';
      		getData(sql,cb)
      		
	};

	this.QuestionaireCapture = function (cb) {
	        var sql = 'INSERT INTO questionaire set ?';
      		getData(sql,cb)
      		
	};

	this.addDate = function (cb) {
	        var sql = 'INSERT INTO events set ?';
      		getData(sql,cb)
      		
	};

	this.captureAttendance = function (cb) {
	        var sql = 'SELECT * FROM questionaire';
      		getData(sql,cb)
      		
	};

	this.captureAttendance = function (cb) {
	        var sql = 'INSERT INTO attended SELECT Idnumber, surname, Name, accountNo, branch, course, location, facilitator FROM learner WHERE Idnumber';
      		getData(sql,cb)
      		
	};

	this.captureAttendanceRec = function (cb) {
	        var sql = 'INSERT INTO attendanceRecord SELECT Idnumber, surname, Name, course, location, facilitator, date FROM learner, events WHERE Idnumber = ?';
      		getData(sql,cb)
      		
	};

	this.getLearnerProfile = function (cb) {
	        var sql = 'INSERT INTO profile SELECT Idnumber, surname, Name, interest, education, dependancy FROM learner WHERE Idnumber = ?';
      		getData(sql,cb)
      		
	};

	this.sortName = function (cb) {
	        var sql = 'SELECT * FROM learner ORDER BY Name ASC';
      		getData(sql,cb)
      		
	};

	this.SortSurname = function (cb) {
	        var sql = 'SELECT * FROM learner ORDER BY surname ASC';
      		getData(sql,cb)
      		
	};

	this.SortGender = function (cb) {
	        var sql = 'SELECT * FROM learner ORDER BY gender ASC';
      		getData(sql,cb)
      		
	};

	this.SortCourse = function (cb) {
	        var sql = 'SELECT * FROM learner ORDER BY course ASC';
      		getData(sql,cb)
      		
	};

	this.SortRace = function (cb) {
	        var sql = 'SELECT * FROM learner ORDER BY race ASC';
      		getData(sql,cb)
      		
	};

	this.SortLanguage = function (cb) {
	        var sql = 'SELECT * FROM learner ORDER BY Language ASC';
      		getData(sql,cb)
      		
	};

	this.SortAddress = function (cb) {
	        var sql = 'SELECT * FROM learner ORDER BY address ASC';
      		getData(sql,cb)
      		
	};

	this.SortGraduate = function (cb) {
	        var sql = 'SELECT * FROM learner ORDER BY graduate ASC';
      		getData(sql,cb)
      		
	};

	this.SortLocation = function (cb) {
	        var sql = 'SELECT * FROM learner ORDER BY location ASC';
      		getData(sql,cb)
      		
	};

	this.getView = function (cb) {
	        var sql = 'SELECT address FROM learner WHERE Idnumber = ?';
      		getData(sql,cb)
      		
	};

	this.getViewAccountNo = function (cb) {
	        var sql = 'SELECT accountNo, branch from learner where Idnumber = ?';
      		getData(sql,cb)
      		
	};

	this.getViewFacilitator = function (cb) {
	        var sql = 'SELECT facilitator FROM learner where Idnumber = ?';
      		getData(sql,cb)
      		
	};

	this.getViewLocation = function (cb) {
	        var sql = 'SELECT location, EXTRACT(YEAR_MONTH FROM course_date) AS course_date, graduate, facilitator FROM learner where Idnumber = ?';
      		getData(sql,cb)
      		
	};

	this.getViewPersonalInfo = function (cb) {
	        var sql = 'SELECT * FROM learner where Idnumber = ?';
      		getData(sql,cb)
      		
	};

	this.getViewPersonalInfoInterest = function (cb) {
	        var sql = 'INSERT INTO profile SELECT Idnumber, surname, Name, interest, education, dependancy FROM learner WHERE Idnumber = ?';
      		getData(sql,cb)
      		
	};

	this.getViewAttendanceRecor = function (cb) {
	        var sql = 'SELECT fields, wine, cellar, marketing, receptionist, packaging, exports, tourism FROM questionaire where Idnumber = ?';
      		getData(sql,cb)
      		
	};

	this.getViewWineIndustry = function (cb) {
	        var sql = 'SELECT fields, wine, cellar, marketing, receptionist, packaging, exports, tourism FROM questionaire where Idnumber = ?';
      		getData(sql,cb)
      		
	};

	this.getViewFruitVeg = function (cb) {
	        var sql = 'SELECT fruit, dairy, vegetable, berry, deciduous FROM questionaire where Idnumber = ?';
      		getData(sql,cb)
      		
	};

	this.delete = function (cb) {
	        var sql = 'DELETE learner FROM learner  WHERE Idnumber = ?';
      		getData(sql,cb)
      		
	};

	this.deleteDate = function (cb) {
	        var sql = 'DELETE events FROM events WHERE id = ?';
      		getData(sql,cb)
      		
	};

	this.deleteAttendanceCaptureView = function (cb) {
	        var sql = 'DELETE attended FROM attended WHERE Idnumber = ?';
      		getData(sql,cb)
      		
	};

	this.getUpdate = function (cb) {
	        var sql = 'SELECT * FROM learner WHERE Idnumber = ?';
      		getData(sql,cb)
      		
	};

	this.update = function (cb) {
	        var sql = 'UPDATE learner SET ? WHERE Idnumber = ?';
      		getData(sql,cb)
      		
	};

	this.getUpdateAttendanceCaptureView = function (cb) {
	        var sql = 'SELECT * FROM attended WHERE Idnumber = ?';
      		getData(sql,cb)
      		
	};

	this.updateAttendanceCaptureView = function (cb) {
	        var sql = 'UPDATE attended SET ? WHERE Idnumber = ?';
      		getData(sql,cb)
      		
	};

	this.getSearchNames = function (cb) {
	        if(searchValue === "all"){
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner';
                getData(sql, cb)
        }
        else{
            var searchValue = "%" +searchValue + "%";
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE Name LIKE ?';
            getSearchData(sql,searchValue, cb)
        } 
      		
	};

	this.getSearchSurnames = function (cb) {
	        if(searchValue === "all"){
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner';
                getData(sql, cb)
        }
        else{
            var searchValue = "%" +searchValue + "%";
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE surname LIKE ?';
            getSearchData(sql,searchValue, cb)
        } 
      		
	};

	this.getSearchCourses = function (cb) {
	        if(searchValue === "all"){
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator  FROM learner';
                getData(sql, cb)
        }
        else{
            var searchValue = "%" +searchValue + "%";
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator  FROM learner WHERE course LIKE ?';
            getSearchData(sql,searchValue, cb)
        } 
      		
	};

	this.getSearchGenders = function (cb) {
	        if(searchValue === "all"){
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner';
                getData(sql, cb)
        }
        else{
            var searchValue = "%" +searchValue + "%";
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE gender LIKE ?';
            getSearchData(sql,searchValue, cb)
        } 
      		
	};

	this.getSearchRaces = function (cb) {
	        if(searchValue === "all"){
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner';
                getData(sql, cb)
        }
        else{
            var searchValue = "%" +searchValue + "%";
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE race LIKE ?';
            getSearchData(sql,searchValue, cb)
        } 
      		
	};

	this.getSearchLanguages = function (cb) {
	        if(searchValue === "all"){
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner';
                getData(sql, cb)
        }
        else{
            var searchValue = "%" +searchValue + "%";
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE Language LIKE ?';
            getSearchData(sql,searchValue, cb)
        } 
      		
	};

	this.getSearchAddresses = function (cb) {
	        if(searchValue === "all"){
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner';
                getData(sql, cb)
        }
        else{
            var searchValue = "%" +searchValue + "%";
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE address LIKE ?';
            getSearchData(sql,searchValue, cb)
        } 
      		
	};

	this.getSearchGraduates = function (cb) {
	        if(searchValue === "all"){
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner';
                getData(sql, cb)
        }
        else{
            var searchValue = "%" +searchValue + "%";
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location,graduate, facilitator FROM learner WHERE graduate LIKE ?';
            getSearchData(sql,searchValue, cb)
        } 
      		
	};

	this.SearchLocation = function (cb) {
	        if(searchValue === "all"){
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner';
                getData(sql, cb)
        }
        else{
            var searchValue = "%" +searchValue + "%";
            var sql = 'SELECT Idnumber,  surname, Name, phone FROM learner WHERE location LIKE ?';
            getSearchData(sql,searchValue, cb)
        } 
      		
	};

	this.getSearchlocations = function (cb) {
	        if(searchValue === "all"){
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner';
                getData(sql, cb)
        }
        else{
            var searchValue = "%" +searchValue + "%";
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE location LIKE ?';
            getSearchData(sql,searchValue, cb)
        } 
      		
	};

	this.getSearchAttended = function (cb) {
	        if(searchValue === "all"){
            var sql = 'SELECT Idnumber,  surname, Name, accountNo, branch, course, location, facilitator FROM attended';
                getData(sql, cb)
        }
        else{
            var searchValue = "%" +searchValue + "%";
            var sql = 'SELECT Idnumber,  surname, Name, acccountNo, branch, course, location, facilitator FROM attended WHERE acccountNo LIKE ?';
            getSearchData(sql,searchValue, cb)
        } 
      		
	};

	this.getSearchProfile = function (cb) {
	        if(searchValue === "all"){
            var sql = 'SELECT Idnumber,  surname, Name, interest, education, dependancy FROM learner';
                getData(sql, cb)
        }
        else{
            var searchValue = "%" +searchValue + "%";
            var sql = 'SELECT Idnumber,  surname, Name, interest, education, dependancy FROM learner WHERE interest LIKE ?';
            getSearchData(sql,searchValue, cb)
        } 
      		
	};

}
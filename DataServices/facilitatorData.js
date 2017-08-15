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
          
  this.showFacilitator = function(cb){
    var sql = 'SELECT * FROM facilitator';
    getData(sql,cb)
          
  };

  this.showCurriculum = function(cb){
    var sql = 'SELECT * FROM programCurriculum';
    getData(sql,cb)
          
  };

  this.showPlacement = function (cb) {
     var sql = 'SELECT *, EXTRACT(YEAR_MONTH FROM month) AS month FROM placement';
      getData(sql,cb)
         
  };

  this.showExitPlan = function (cb) {
    var sql = 'SELECT * FROM exitPlan';
      getData(sql,cb)
         
  };

  this.addFacilitator = function (cb) {
    var sql = 'INSERT INTO facilitator set ?';
      getData(sql,cb)
         
  };

  this.addProgramCurriculum = function (cb) {
          return queryExecutor.execute('INSERT INTO programCurriculum set ?');
         
  };

  this.addPlacement  = function (cb) {
    var sql = 'INSERT INTO placement set ?';
      getData(sql,cb)
         
  };

  this.addExitPlan  = function (cb) {
    var sql = 'INSERT INTO exitPlan set ?';
      getData(sql,cb)
         
  };

  this.SortFacilitator = function (cb) {
    var sql = 'SELECT * FROM learner ORDER BY facilitator ASC ';
      getData(sql,cb)
         
  };

  this.deleteFacilitator = function (cb) {
    var sql = 'DELETE facilitator FROM facilitator WHERE idNo = ?';
      getData(sql,cb)
         
  };

  this.deleteProgram = function (cb) {
    var sql = 'DELETE programCurriculum FROM programCurriculum WHERE module_name = ?';
      getData(sql,cb)
         
  };

  this.deletePlacement = function (cb) {
    var sql = 'DELETE placement FROM placement WHERE Idnumber = ?';
      getData(sql,cb)
         
  };

  this.deleteExitPlan = function (cb) {
    var sql = 'DELETE exitPlan FROM exitPlan WHERE IDno = ?';
      getData(sql,cb)
         
  };

  this.getplacement_add = function (cb) {
    var sql = 'SELECT Idnumber, Name, surname FROM learner WHERE Idnumber = ?';
      getData(sql,cb)
         
  };

  this.getUpdateFacilitator = function (cb) {
   var sql = 'SELECT * FROM facilitator WHERE idNo = ?';
      getData(sql,cb)
         
  };

  this.getUpdateProgram = function (cb) {
   var sql = 'SELECT * FROM programCurriculum WHERE module_name = ?';
      getData(sql,cb)
         
  };

  this.getUpdatePlacement = function (cb) {
    var sql = 'SELECT * FROM placement WHERE Idnumber = ?';
      getData(sql,cb)
         
  };

  this.getUpdateExitPlan = function (cb) {
    var sql = 'SELECT * FROM exitPlan WHERE IDno = ?';
      getData(sql,cb)
         
  };

  this.updateFacilitator = function (cb) {
    var sql = 'UPDATE facilitator SET ? WHERE idNo = ?';
      getData(sql,cb)
         
  };

  this.updateProgram  = function (cb) {
   var sql = 'UPDATE programCurriculum SET ? WHERE module_name = ?';
      getData(sql,cb)
         
  };

  this.updatePlacement = function (cb) {
    var sql = 'UPDATE placement SET ? WHERE Idnumber = ?';
      getData(sql,cb)
         
  };

  this.updateExitPlan = function (cb) {
   var sql = 'UPDATE exitPlan SET ? WHERE IDno = ?';
      getData(sql,cb)
         
  };


  this.getSearchFacilitators = function (cb) {
          if(searchValue === "all"){
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner';
                getData(sql, cb)
        }
        else{
            var searchValue = "%" +searchValue + "%";
            var sql = 'SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, graduate, location, facilitator FROM learner WHERE facilitator LIKE ?';
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

  
this.SearchLocation = function (cb) {
          if(searchValue === "all"){
            var sql = 'SELECT Idnumber, Name, surname, work_location, remuneration_amount, activities, month, sign_attendance FROM placement';
                getData(sql, cb)
        }
        else{
            var searchValue = "%" +searchValue + "%";
            var sql = 'SELECT Idnumber, Name, surname, work_location, remuneration_amount, activities, month, sign_attendance FROM placement WHERE work_location LIKE ?';
            getSearchData(sql,searchValue, cb)
        } 
          
  };



this.getSearchWork_location = function (cb) {
          if(searchValue === "all"){
            var sql = 'SELECT Idnumber, Name, surname, work_location, remuneration_amount, activities, month, sign_attendance FROM placement';
                getData(sql, cb)
        }
        else{
            var searchValue = "%" +searchValue + "%";
            var sql = 'SELECT Idnumber, Name, surname, work_location, remuneration_amount, activities, month, sign_attendance FROM placement WHERE work_location LIKE ?';
            getSearchData(sql,searchValue, cb)
        } 
          
  };

}
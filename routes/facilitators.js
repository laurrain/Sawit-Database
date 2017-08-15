past_pages = [],
administrator = false,
last_page = "",
counter = 0;

exports.showFacilitator = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM facilitator', [], function(err, results) {
            if (err) return next(err);
            res.render( 'lecturer', {
                facilitator : results
            });
            
      });
    });
};

exports.showCurriculum = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM programCurriculum', [], function(err, results) {
            if (err) return next(err);
            res.render( 'programCurriculum', {
                programCurriculum : results
            });
            
      });
    });
};

exports.showPlacement = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT *, EXTRACT(YEAR_MONTH FROM month) AS month FROM placement', [], function(err, results) {
            if (err) return next(err);
            res.render( 'placement', {
                placement : results
            });
            
      });
    });
};

exports.showExitPlan = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM exitPlan', [], function(err, results) {
            if (err) return next(err);
            res.render( 'exitPlan', {
                exitPlan : results
            });
            
      });
    });
};

exports.addFacilitator = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
                    idNo : input.idNo,
                    Name : input.Name,
                    Surname : input.surname,
                    Phone : input.phone,
                    Email : input.email,
                    Course : input.course,
                    Location: input.location
            };
            
        connection.query('INSERT INTO facilitator set ?', [data], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
         
                res.redirect('/lecturer');
        });
    
    });
};

exports.addProgramCurriculum = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
                    Module_name : input.module_name,
                    facilitator : input.facilitator,
                    Assess_test : input.assess_test,
                    Assignment  : input.assignment,
                    Practical : input.practical,
                    Group_work : input.group_work,
                    month : input.month,
                    Placement : input.placement
            };
            
        connection.query('INSERT INTO programCurriculum set ?', [data], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
         
                res.redirect('/programCurriculum');
        });
    
    });
};


exports.addPlacement = function (req, res, next) {
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
                    Idnumber : input.Idnumber,
                    Name : input.Name,
                    Surname : input.surname,
                    Work_location : input.work_location,
                    Remuneration_amount : input.remuneration_amount,
                    Activities : input.activities,
                    Month : input.month,
                    Sign_attendance : input.sign_attendance
            };
            
        connection.query('INSERT INTO placement set ?', [data], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
            console.log(results);
                res.redirect( '/placement')
        });
        
    });
};

exports.addExitPlan = function (req, res, next) {
    var id = req.params.IDno;
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
                    IDno : input.IDno,
                    Name : input.Name,
                    Surname : input.surname,
                    Education : input.education,
                    Employed : input.employed,
                    Sector : input.sector,
                    Entrepreneur : input.entrepreneur,
                    Sectors : input.sectors
            };
            
        connection.query('INSERT INTO exitPlan set ?', [data], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
            console.log(results);
                res.redirect( '/exitPlan')
        });
        
    });
};

exports.SortFacilitator = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY facilitator ASC ', [], function(err, results) {
            if (err) return next(err);

            res.render( 'lecturer', {
                learner : results
            });
      });
    });
};

exports.deleteFacilitator = function(req, res, next){
    var id = req.params.idNo;
    req.getConnection(function(err, connection){
        connection.query('DELETE facilitator FROM facilitator WHERE idNo = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/lecturer');
        });
    });
};

exports.deleteProgram = function(req, res, next){
    var id = req.params.module_name;
    req.getConnection(function(err, connection){
        connection.query('DELETE programCurriculum FROM programCurriculum WHERE module_name = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/programCurriculum');
        });
    });
};

exports.deletePlacement = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('DELETE placement FROM placement WHERE Idnumber = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/placement');
        });
    });
};

exports.deleteExitPlan = function(req, res, next){
    var id = req.params.IDno;
    req.getConnection(function(err, connection){
        connection.query('DELETE exitPlan FROM exitPlan WHERE IDno = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/exitPlan');
        });
    });
};


exports.getplacement_add = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('SELECT Idnumber, Name, surname FROM learner WHERE Idnumber = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.render('placement_add',{page_title:" add learner - Node.js", data : rows[0]});      
        }); 
    });
};

exports.getUpdateFacilitator = function(req, res, next){
    var id = req.params.idNo;
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM facilitator WHERE idNo = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.render('editLecturer',{page_title:" edit facilitator - Node.js", data : rows[0]});      
        }); 
    });
};

exports.getUpdateProgram = function(req, res, next){
    var id = req.params.module_name;
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM programCurriculum WHERE module_name = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.render('editProgram',{page_title:" edit programCurriculum - Node.js", data : rows[0]});      
        }); 
    });
};

exports.getUpdatePlacement = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM placement WHERE Idnumber = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.render('editPlacement',{page_title:" edit placement - Node.js", data : rows[0]});      
        }); 
    });
};

exports.getUpdateExitPlan = function(req, res, next){
    var id = req.params.IDno;
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM exitPlan WHERE IDno = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.render('editExitPlan',{page_title:" edit Exit Plan - Node.js", data : rows[0]});      
        }); 
    });
};

exports.updateFacilitator = function(req, res, next){

    var data = JSON.parse(JSON.stringify(req.body));
        var id = req.params.idNo;
        req.getConnection(function(err, connection){
            connection.query('UPDATE facilitator SET ? WHERE idNo = ?', [data, id], function(err, rows){
                if (err){
                        console.log("Error Updating : %s ",err );
                }
                res.redirect('/lecturer');
            });
    });
};

exports.updateProgram = function(req, res, next){

    var data = JSON.parse(JSON.stringify(req.body));
        var id = req.params.module_name;
        req.getConnection(function(err, connection){
            connection.query('UPDATE programCurriculum SET ? WHERE module_name = ?', [data, id], function(err, rows){
                if (err){
                        console.log("Error Updating : %s ",err );
                }
                res.redirect('/programCurriculum');
            });
    });
};

exports.updatePlacement = function(req, res, next){

    var data = JSON.parse(JSON.stringify(req.body));
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('UPDATE placement SET ? WHERE Idnumber = ?', [data, id], function(err, rows){
                if (err){
                        console.log("Error Updating : %s ",err );
                }
                res.redirect('/placement');
            });
    });
};

exports.updateExitPlan = function(req, res, next){

    var data = JSON.parse(JSON.stringify(req.body));
        var id = req.params.IDno;
        req.getConnection(function(err, connection){
            connection.query('UPDATE exitPlan SET ? WHERE IDno = ?', [data, id], function(err, rows){
                if (err){
                        console.log("Error Updating : %s ",err );
                }
                res.redirect('/exitPlan');
            });
    });
};

exports.getSearchFacilitators = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('facilitatorsList', {
                    //username: req.session.user,
                    learner : results,
                    //layout : false
                });
                
            };

        if(searchValue === "all"){
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, graduate, location, facilitator FROM learner WHERE facilitator LIKE ?", [searchValue], processResults);
        }
    });
};

exports.getSearchWork_location = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('work_locationsList', {
                    //username: req.session.user,
                    placement: results,
                    //layout : false
                });
                
            };
        if(searchValue === "all"){
            connection.query("SELECT Idnumber, Name, surname, work_location, remuneration_amount, activities, month, sign_attendance FROM placement", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber, Name, surname, work_location, remuneration_amount, activities, month, sign_attendance FROM placement WHERE work_location LIKE ?", [searchValue], processResults);
        }
    });
};
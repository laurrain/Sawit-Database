past_pages = [],
administrator = false,
last_page = "",
counter = 0;

/**exports.showExcel = function(results, res, next){
    console.log("aaaaaaaaaaaaaaaaa");
    var nodeExcel=require('excel-export');
    //var dateFormat = require('dateformat');
    var conf={}
    conf.cols=[{
            caption:'Id Number',
            type:'string',
            width:3
        },
        {
            caption:'Name',
            type:'string',
            width:5
        },
        {
            caption:'Surname',
            type:'string',
            width:5
        },
        {
            caption:'Gender',
            type:'string',
            width:5
        },
        {
            caption:'Race',
            type:'string',
            width:5
        },
        {
            caption:'Language',
            type:'string',
            width:5
        }
        ];
    req.getConnection(function(err,connection){
        connection.query("select * from learner ", [],function(err,rows){
            arr=[];
            for(i=0;i<rows.length;i++){
                Idnumber=rows[i].Idnumber;
                //a=[i+1,job,(dateFormat(rows[i].add_date*1000, "dd/mm/yyyy"))];
                arr.push(Idnumber);
                }
                conf.rows=arr;
    var result=nodeExcel.execute(conf);
    res.setHeader('Content-Type','application/vnd.openxmlformates');
    res.setHeader("Content-Disposition","attachment;filename="+"todo.xlsx");
    res.end(result,'binary');
    console.log(result, "ayeyeyeyeyeyeyeye");
            });
        });
    

}*/


exports.showLearner = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT gender, COUNT(*) AS sex FROM learner GROUP BY gender',[], function(err, gender) {
            console.log(gender);
           if (err) return next(err); 
        connection.query('SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, course_date, graduate, facilitator from learner', [], function(err, results) {
            if (err) return next(err); 
            res.render( 'learner', {
                data: gender,
                learner : results,
                administrator : administrator
            });
        });
      });
    });
};

exports.showSurname = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * from learner', [], function(err, results) {
            if (err) return next(err);
            res.render( 'surname', {
                learner : results
            });
            
      });
    });
};

exports.showCourse = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * from learner', [], function(err, results) {
            if (err) return next(err);
            res.render( 'course', {
                learner : results
            });
            
      });
    });
};

exports.showLocation = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * from learner', [], function(err, results) {
            if (err) return next(err);
            res.render( 'location', {
                learner : results
            });
            
      });
    });
};


exports.showGraduate = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * from learner', [], function(err, results) {
            if (err) return next(err);
            res.render( 'graduate', {
                learner : results
            });
            
      });
    });
};

exports.showAttendance = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT date FROM events', [], function(err, date) {
            if (err) return next(err);
        
        
        connection.query('SELECT surname, Name, Idnumber, phone from learner', [], function(err, results) {
            if (err) return next(err);
            res.render( 'attendance', {
                events: date,
                learner : results
            });
            console.log(date);
            });
      });
    });
};

exports.showAttendanceCaptureView = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * from attended', [], function(err, results) {
            if (err) return next(err);
            res.render( 'attendanceCaptureView', {
                learner : results
            });
            
      });
    });
};

exports.showAttendanceRecord = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM attendanceRecord', [], function(err, results) {
            if (err) return next(err);
            res.render( 'attendanceRecord', {
                learner : results
            });
            
      });
    });
};

exports.showFeedbackQuestionaire = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM questionaire', [], function(err, results) {
            if (err) return next(err);
            res.render( 'feedbackQuestionaire', {
                learner : results
            });
            
      });
    });
};

exports.showLearnerProfile = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM profile', [], function(err, results) {
            if (err) return next(err);
            res.render( 'learnerProfile', {
                learner : results
            });
            
      });
    });
};

exports.add = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
                    Idnumber : input.Idnumber,
                    Name : input.Name,
                    Surname : input.surname,
                    Gender  : input.gender,
                    Race : input.race,
                    Language : input.Language,
                    Phone : input.phone,
                    Address : input.address,
                    AccountNo : input.accountNo,
                    Branch : input.branch,
                    Race : input.race,
                    Course : input.course,
                    Location: input.location,
                    course_date: input.course_date,
                    Facilitator: input.facilitator,
                    Interest: input.interest,
                    Education: input.education,
                    Dependancy: input.dependancy
            };
            
        connection.query('INSERT INTO learner set ?', [data], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
         
                res.redirect('/learner');
        });
    
    });
};

exports.QuestionaireCapture = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
                    Idnumber : input.Idnumber,
                    Surname : input.surname,
                    Name : input.Name,
                    Fruit  : input.fruit,
                    Dairy : input.dairy,
                    Vegetable : input.vegetable,
                    Berry : input.berry,
                    Deciduous : input.deciduous,
                    Fields : input.fields,
                    Wine : input.wine,
                    Cellar : input.cellar,
                    Marketing : input.marketing,
                    Receptionist: input.receptionist,
                    Packaging: input.packaging,
                    Exports: input.exports,
                    Tourism : input.tourism
            };
            
        connection.query('INSERT INTO questionaire set ?', [data], function(err, results) {
            console.log(results);
            if (err)
                console.log("Error inserting : %s ", err );
         
                res.redirect('/feedbackQuestionaire');
        });
    
    });
};

exports.addDate = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
                    Date : input.end_date
            };
            
        connection.query('INSERT INTO events set ?', [data], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
         
                res.redirect('/attendance');
        });
    
    });
};

exports.captureAttendance = function (req, res, next) {
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        connection.query('INSERT INTO attended SELECT Idnumber, surname, Name, accountNo, branch, course, location, facilitator FROM learner WHERE Idnumber = ?', [id], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
        connection.query('INSERT INTO attendanceRecord SELECT Idnumber, surname, Name, course, location, facilitator, date FROM learner, events WHERE Idnumber = ?', [id], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
            console.log(results);
                res.redirect( '/attendanceCaptureView')
        });
        });
    });
};

exports.getLearnerProfile = function (req, res, next) {
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        connection.query('INSERT INTO profile SELECT Idnumber, surname, Name, interest, education, dependancy FROM learner WHERE Idnumber = ?', [id], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
                res.redirect( '/learnerProfile')
        });
       
    });
};



exports.sortName = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY Name ASC ', [], function(err, results) {
            if (err) return next(err);

            res.render( 'learner', {
                learner : results
            });
      });
    });
};

exports.SortSurname = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY surname ASC ', [], function(err, results) {
            console.log("sorted");
            if (err) return next(err);

            res.render( 'surname', {
                learner : results
            });
      });
    });
};

exports.SortGender = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY gender ASC ', [], function(err, results) {
            if (err) return next(err);

            res.render( 'gender', {
                learner : results
            });
      });
    });
};


exports.SortCourse = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY course ASC ', [], function(err, results) {
            console.log("sorted");
            if (err) return next(err);

            res.render( 'course', {
                learner : results
            });
      });
    });
};

exports.SortRace = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY race ASC ', [], function(err, results) {
            console.log("sorted");
            if (err) return next(err);

            res.render( 'race', {
                learner : results
            });
      });
    });
};

exports.SortLanguage = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY Language ASC ', [], function(err, results) {
            if (err) return next(err);

            res.render( 'Language', {
                learner : results
            });
      });
    });
};

exports.SortAddress = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY address ASC ', [], function(err, results) {
            if (err) return next(err);

            res.render( 'address', {
                learner : results
            });
      });
    });
};

exports.SortGraduate = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY graduate ASC ', [], function(err, results) {
            if (err) return next(err);

            res.render( 'graduate', {
                learner : results
            });
      });
    });
};

exports.SortLocation = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * FROM learner ORDER BY location ASC ', [], function(err, results) {
            if (err) return next(err);

            res.render( 'location', {
                learner : results
            });
      });
    });
};

exports.getView = function(req, res, next){
  var id = req.params.Idnumber;
  req.getConnection(function(err, connection){
    connection.query('SELECT address from learner where Idnumber = ?', [id], function(err,rows){
      if(err){
            console.log("Error Selecting : %s ",err );
      }
      res.render('view',{page_title:" view learner - Node.js", data : rows[0]});      
    }); 
  });
};
exports.getViewAccountNo = function(req, res, next){
  var id = req.params.Idnumber;
  req.getConnection(function(err, connection){
    connection.query('SELECT accountNo, branch from learner where Idnumber = ?', [id], function(err,rows){
      if(err){
            console.log("Error Selecting : %s ",err );
      }
      res.render('viewAccountNo',{page_title:" view learner - Node.js", data : rows[0]});      
    }); 
  });
};
exports.getViewFacilitator = function(req, res, next){
  var id = req.params.Idnumber;
  req.getConnection(function(err, connection){
    connection.query('SELECT facilitator FROM learner where Idnumber = ?', [id], function(err,rows){
      if(err){
            console.log("Error Selecting : %s ",err );
      }
      res.render('viewFacilitator',{page_title:" view learner - Node.js", data : rows[0]});      
    }); 
  });
};

exports.getViewLocation = function(req, res, next){
  var id = req.params.Idnumber;
  req.getConnection(function(err, connection){
    connection.query('SELECT location, EXTRACT(YEAR_MONTH FROM course_date) AS course_date, graduate, facilitator FROM learner where Idnumber = ?', [id], function(err,rows){
      if(err){
            console.log("Error Selecting : %s ",err );
      }
      res.render('viewLocation',{page_title:" view learner - Node.js", data : rows[0]});      
    }); 
  });
};

exports.getViewPersonalInfo = function(req, res, next){
  var id = req.params.Idnumber;
  req.getConnection(function(err, connection){
    connection.query('SELECT * FROM learner where Idnumber = ?', [id], function(err,rows){
      if(err){
            console.log("Error Selecting : %s ",err );
      }

  connection.query('INSERT INTO profile SELECT Idnumber, surname, Name, interest, education, dependancy FROM learner WHERE Idnumber = ?', [id], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
    });
      res.render('viewPersonalInfo',{page_title:" view learner - Node.js", data : rows[0]});      
    }); 
  });
};

exports.getViewAttendanceRecord = function(req, res, next){
  var id = req.params.Idnumber;
  req.getConnection(function(err, connection){
    connection.query('SELECT EXTRACT(WEEK FROM date) AS date FROM attendanceRecord where Idnumber = ?', [id], function(err,rows){
      if(err){
            console.log("Error Selecting : %s ",err );
      }
      res.render('viewAttendanceRecord',{page_title:" view attendance Date - Node.js", data : rows[0]});  
      console.log(rows);    
    }); 
  });
};

exports.getViewWineIndustry = function(req, res, next){
  var id = req.params.Idnumber;
  req.getConnection(function(err, connection){
    connection.query('SELECT fields, wine, cellar, marketing, receptionist, packaging, exports, tourism FROM questionaire where Idnumber = ?', [id], function(err,rows){
      if(err){
            console.log("Error Selecting : %s ",err );
      }
      res.render('viewWineIndustry',{page_title:" view wine Industry - Node.js", data : rows[0]});      
    }); 
  });
};

exports.getViewFruitVeg = function(req, res, next){
  var id = req.params.Idnumber;
  req.getConnection(function(err, connection){
    connection.query('SELECT fruit, dairy, vegetable, berry, deciduous FROM questionaire where Idnumber = ?', [id], function(err,rows){
      if(err){
            console.log("Error Selecting : %s ",err );
      }
      res.render('viewFruitVeg',{page_title:" view Fruit and Veg - Node.js", data : rows[0]});      
    }); 
  });
};

exports.delete = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('DELETE learner FROM learner  WHERE Idnumber = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/learner');
        });
    });
};

exports.deleteDate = function(req, res, next){
    var id = req.params.id;
    req.getConnection(function(err, connection){
        connection.query('DELETE events FROM events WHERE id = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/attendance');
        });
    });
};

exports.deleteAttendanceCaptureView = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('DELETE attended FROM attended WHERE Idnumber = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/attendanceCaptureView');
        });
    });
};


exports.getUpdate = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM learner WHERE Idnumber = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.render('edit',{page_title:" edit learner - Node.js", data : rows[0]});      
        }); 
    });
};

exports.update = function(req, res, next){

    var data = JSON.parse(JSON.stringify(req.body));
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('UPDATE learner SET ? WHERE Idnumber = ?', [data, id], function(err, rows){
                if (err){
                        console.log("Error Updating : %s ",err );
                }
                res.redirect('/learner');
            });
    });
};

exports.getUpdateAttendanceCaptureView = function(req, res, next){
    var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM attended WHERE Idnumber = ?', [id], function(err,rows){
            console.log("very");
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.render('editAttended',{page_title:" edit attended - Node.js", data : rows[0]});      
        }); 
    });
};


exports.updateAttendanceCaptureView = function(req, res, next){

    var data = JSON.parse(JSON.stringify(req.body));
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('UPDATE attended SET ? WHERE Idnumber = ?', [data, id], function(err, rows){
                if (err){
                        console.log("Error Updating : %s ",err );
                }
                res.redirect('/attendanceCaptureView');
            });
    });
};



exports.getSearchNames = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                res.render('learnersList', {
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
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE Name LIKE ?", [searchValue], processResults);
        }
        
    });
};

exports.getSearchSurnames = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('surnamesList', {
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
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE surname LIKE ?", [searchValue], processResults);
        }
    });
};

exports.getSearchCourses = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                
                res.render('coursesList', {
                    //username: req.session.user,
                    learner : results,
                    //layout : false
                });
                
            };

        if(searchValue === "all"){
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator  FROM learner", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator  FROM learner WHERE course LIKE ?", [searchValue], processResults);
        }
    });
};

exports.getSearchGenders = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);
        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('gendersList', {
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
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE gender LIKE ?", [searchValue], processResults);
        }
        console.log("ok.......")
    });
};

exports.getSearchRaces = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('racesList', {
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
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE race LIKE ?", [searchValue], processResults);
        }
    });
};
exports.getSearchLanguages = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('languagesList', {
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
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE Language LIKE ?", [searchValue], processResults);
        }
    });
};

exports.getSearchAddresses = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('addressesList', {
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
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE address LIKE ?", [searchValue], processResults);
        }
    });
};

exports.getSearchGraduates = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('graduatesList', {
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
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location,graduate, facilitator FROM learner WHERE graduate LIKE ?", [searchValue], processResults);
        }
    });
};


exports.SearchLocation = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('locationsList', {
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
            connection.query("SELECT Idnumber,  surname, Name, phone FROM learner WHERE location LIKE ?", [searchValue], processResults);
        }
    });
};

exports.getSearchlocations = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('locationssList', {
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
            connection.query("SELECT Idnumber, Name, surname, gender, race, Language, phone, address, accountNo, branch, course, location, facilitator FROM learner WHERE location LIKE ?", [searchValue], processResults);
        }
    });
};


exports.getSearchAttended = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('attendedsList', {
                    //username: req.session.user,
                    learner: results,
                    //layout : false
                });
                
            };

        if(searchValue === "all"){
            connection.query("SELECT Idnumber,  surname, Name, accountNo, branch, course, location, facilitator FROM attended", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber,  surname, Name, acccountNo, branch, course, location, facilitator FROM attended WHERE acccountNo LIKE ?", [searchValue], processResults);
        }
    });
};

exports.getSearchProfile = function(req, res, next){
    req.getConnection(function(err, connection){
        if(err)
            return next(err);

        var searchValue = req.params.searchValue;
        
        var processResults = function(err, results){
                if (err) return next(err);
                                

                res.render('profilesList', {
                    //username: req.session.user,
                    learner: results,
                    //layout : false
                });
                
            };
        if(searchValue === "all"){
            connection.query("SELECT Idnumber,  surname, Name, interest, education, dependancy FROM learner", processResults )
        }
        else{
            searchValue = "%" + searchValue + "%";
            connection.query("SELECT Idnumber,  surname, Name, interest, education, dependancy FROM learner WHERE interest LIKE ?", [searchValue], processResults);
        }
    });
};
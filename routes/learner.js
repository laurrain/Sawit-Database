module.exports = function(){ 

    this.showLearner = function (req, res, next){
        req.services(function(err, services){
            var learnersData = services.learnerDataServ;
            learnersData.showCount(function(err, gender) {
                if (err) return next(err);
            learnersData.showLearner(function(err, results) {
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


    this.showSurname = function (req, res, next) {
        req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        learnersData.showSurname(function(err, results) {
          if (err) return next(err);
            res.render( 'surname', {
                learner : results,
                administrator : administrator
            });
     
        });
    })
};


    this.showCourse = function (req, res, next) {
        req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        learnersData.showCourse(function(err, results) {
          if (err) return next(err);
            res.render( 'course', {
                learner : results,
                administrator : administrator
            });
     
        });
    })
};

    this.showLocation = function (req, res, next) {
        req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        learnersData.showLocation(function(err, results) {
          if (err) return next(err);
            res.render( 'location', {
                learner : results,
                administrator : administrator
            });
     
        });
    })
};

    this.showGraduate = function (req, res, next) {
        req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        learnersData.showGraduat(function(err, results) {
          if (err) return next(err);
            res.render( 'graduate', {
                learner : results,
                administrator : administrator
            });
     
        });
    })
};

    this.showAttendance = function (req, res, next) {
        req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        learnersData.showEvent(function(err, date) {
            if (err) return next(err);
        learnersData.showAttendance(function(err, results) {
          if (err) return next(err);
            res.render( 'attendance', {
                events: date,
                learner : results,
                administrator : administrator
            });
     
        });
    })
  })
};

    this.showAttendanceCaptureView = function (req, res, next) {
        req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        learnersData.showAttendanceCaptureView(function(err, results) {
          if (err) return next(err);
            res.render( 'attendanceCaptureView', {
                learner : results,
                administrator : administrator
            });
        });
    })
};

    this.showAttendanceRecord = function (req, res, next) {
        req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        learnersData.showAttendanceRecord(function(err, results) {
          if (err) return next(err);
            res.render('attendanceRecord',{
                learner : results,
                administrator : administrator
            });
     
        });
    })
};
    
    this.showFeedbackQuestionaire = function (req, res, next) {
        req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        learnersData.showFeedbackQuestionaire(function(err, results) {
          if (err) return next(err);
            res.render( 'feedbackQuestionaire', {
                learner : results,
                administrator : administrator
            });
     
        });
    })
};

    this.showLearnerProfile = function (req, res, next) {
        req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        learnersData.showLearnerProfile(function(err, results) {
          if (err) return next(err);
            res.render( 'learnerProfile', {
                learner : results,
                administrator : administrator
            });
     
        });
    })
};




this.add = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
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
        req.getConnection(function(err, connection){
            connection.query('INSERT INTO learner set ?', [data], function(err,results){
             if (err) return next(err);

            res.redirect( 'learner');
          })
        });
    });
};

    this.QuestionaireCapture = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
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
    req.getConnection(function(err, connection){
            connection.query('INSERT INTO questionaire set ?', [data], function(err,results){
             if (err) return next(err);

            res.redirect( 'feedbackQuestionaire')
            });
        });
    });
};


    this.addDate = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        var input = JSON.parse(JSON.stringify(req.body));
        var data = {
                    Date : input.end_date
            };
        req.getConnection(function(err, connection){
                connection.query('INSERT INTO events set ?', [data], function(err,results){
             if (err) return next(err);

            res.redirect( 'attendance')
            });
      
        });
    });
};

    this.captureAttendance = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
    learnersData.captureAttendance(id, function(err, results){
             if (err) return next(err);
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        connection.query('INSERT INTO attended SELECT Idnumber, surname, Name, accountNo, branch, course, location, facilitator FROM learner WHERE Idnumber = ?', [id], function(err, results) {
            if (err)
                console.log("Error inserting : %s ", err );
        connection.query('INSERT INTO attendanceRecord SELECT Idnumber, surname, Name, course, location, facilitator, date FROM learner, events WHERE Idnumber = ?', [id], function(err, results) {
             if (err) return next(err);

                     res.redirect('/attendanceCaptureView');
            
            });
          });
        });
      })
    })
};

    this.getLearnerProfile = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        var id = req.params.Idnumber;
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        connection.query('INSERT INTO profile SELECT Idnumber, surname, Name, interest, education, dependancy FROM learner WHERE Idnumber = ?', [id], function(err, results) {
             if (err) return next(err);

            res.redirect('/learnerProfile');
        });
    });
  });
};

    this.sortName = function (req, res, next) {
        req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        learnersData.sortName(function(err, results) {
          if (err) return next(err);
            res.render( 'learner', {
                learner : results,
                administrator : administrator
            });
     
        });
    })
};

    this.SortSurname = function (req, res, next) {
        req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        learnersData.SortSurname(function(err, results) {
          if (err) return next(err);
            res.render( 'surname', {
                learner : results,
                administrator : administrator
            });
     
        });
    })
};

    this.SortGender = function (req, res, next) {
        req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        learnersData.SortGender(function(err, results) {
          if (err) return next(err);
            res.render( 'gender', {
                learner : results,
                administrator : administrator
            });
     
        });
    })
};

    this.SortCourse = function (req, res, next) {
        req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        learnersData.SortCourse(function(err, results) {
          if (err) return next(err);
            res.render( 'courser', {
                learner : results,
                administrator : administrator
            });
     
        });
    })
};

    this.SortRace = function (req, res, next) {
        req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        learnersData.SortRace(function(err, results) {
          if (err) return next(err);
            res.render( 'race', {
                learner : results,
                administrator : administrator
            });
     
        });
    })
};

    this.SortLanguage = function (req, res, next) {
        req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        learnersData.SortLanguage(function(err, results) {
          if (err) return next(err);
            res.render( 'Language', {
                learner : results,
                administrator : administrator
            });
     
        });
    })
};

    this.SortAddress = function (req, res, next) {
        req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        learnersData.SortAddress(function(err, results) {
          if (err) return next(err);
            res.render( 'address', {
                learner : results,
                administrator : administrator
            });
     
        });
    })
};

    this.SortGraduate = function (req, res, next) {
        req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        learnersData.SortGraduate(function(err, results) {
          if (err) return next(err);
            res.render( 'graduate', {
                learner : results,
                administrator : administrator
            });
     
        });
    })
};

    this.SortLocation = function (req, res, next) {
        req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        learnersData.SortLocation(function(err, results) {
          if (err) return next(err);
            res.render( 'location', {
                learner : results,
                administrator : administrator
            });
     
        });
    })
};

    this.getView = function (req, res, next) {
    req.services(function(err, services){
        var id = req.params.Idnumber;
        var learnersData = services.learnerDataServ;
        req.getConnection(function(err, connection){
            connection.query('SELECT address from learner where Idnumber = ?', [id], function(err,rows){
            if(err) return next(err);
         console.log('----------------');
             if (err) return next(err);
             console.log(rows);
            res.render( 'view',{
                data : rows[0],
                administrator : administrator
            });
        });
    });
  });
};


    this.getViewAccountNo = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('SELECT accountNo, branch FROM learner WHERE Idnumber = ?', [id], function(err,rows){
             if (err) return next(err);

            res.render( 'viewAccountNo', {
                data : rows[0],
                administrator : administrator
            });
           })
        });
    });
};

    this.getViewFacilitator = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('SELECT facilitator FROM learner WHERE Idnumber = ?', [id], function(err,rows){
             if (err) return next(err);

            res.render( 'viewFacilitator', {
                data : rows[0],
                administrator : administrator
            });
           })
        });
    });
};

    this.getViewLocation = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('SELECT location, EXTRACT(YEAR_MONTH FROM course_date) AS course_date, graduate, facilitator FROM learner where Idnumber = ?', [id], function(err,rows){
             if (err) return next(err);

            res.render( 'viewLocation', {
                learner : rows[0],
                administrator : administrator
            });
           })
        });
    });
};

    this.getViewPersonalInfo = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('SELECT * FROM learner where Idnumber = ?', [id], function(err,rows){
             if (err) return next(err);
            connection.query('INSERT INTO profile SELECT Idnumber, surname, Name, interest, education, dependancy FROM learner WHERE Idnumber = ?', [id], function(err,rows){
             if (err) return next(err);

            res.render( 'viewPersonalInfo', {
                data : rows[0],
                administrator : administrator
            })
            });
           })
        });
    });
  
};

    this.getViewAttendanceRecord = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('SELECT fields, wine, cellar, marketing, receptionist, packaging, exports, tourism FROM questionaire where Idnumber = ?', [id], function(err,rows){
             if (err) return next(err);

            res.render( 'viewAttendanceRecord', {
                data : rows[0],
                administrator : administrator
            });
          });
        });
    });
};

    this.getViewWineIndustry = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('SELECT fields, wine, cellar, marketing, receptionist, packaging, exports, tourism FROM questionaire where Idnumber = ?', [id], function(err,rows){
             if (err) return next(err);

            res.render( 'viewWineIndustry', {
                data : rows[0],
                administrator : administrator
            });
           });
        });
    });
};

    this.getViewFruitVeg = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('SELECT fruit, dairy, vegetable, berry, deciduous FROM questionaire where Idnumber = ?', [id], function(err,rows){
             if (err) return next(err);

            res.render( 'viewFruitVeg', {
                data : rows[0],
                administrator : administrator
            });
          });
        });
    });
};

    this.delete = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('DELETE learner FROM learner  WHERE Idnumber = ?', [id], function(err,rows){
             if (err) return next(err);

            res.redirect('/learner');
        });
    });
  });
};

    this.deleteDate = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('DELETE events FROM events WHERE id = ?', [id], function(err,rows){
             if (err) return next(err);

            res.redirect('/attendance');
        });
    });
  });
};

    this.deleteAttendanceCaptureView = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('DELETE attended FROM attended WHERE Idnumber = ?', [id], function(err,rows){
             if (err) return next(err);

            res.redirect('/attendanceCaptureView');
        });
    });
  });
};

    this.getUpdate = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('SELECT * FROM learner WHERE Idnumber = ?', [id], function(err,rows){
             if (err) return next(err);

            res.render( 'edit', {
                data : rows[0],
                administrator : administrator
            });
          });
        });
    });
};

    this.update = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        var id = req.params.Idnumber;
        var data = JSON.parse(JSON.stringify(req.body));
        req.getConnection(function(err, connection){
            connection.query('UPDATE learner SET ? WHERE Idnumber = ?', [id], function(err,rows){
             if (err) return next(err);

            res.redirect('/learner');
        });
    });
  });
};

    this.getUpdateAttendanceCaptureView = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('SELECT * FROM attended WHERE Idnumber = ?', [id], function(err,rows){
             if (err) return next(err);

            res.render( 'editAttended', {
                data : rows[0],
                administrator : administrator
            });
          });
        });
    });
};

    this.updateAttendanceCaptureView = function (req, res, next) {
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
        var id = req.params.Idnumber;
        var data = JSON.parse(JSON.stringify(req.body));
        req.getConnection(function(err, connection){
            connection.query('UPDATE attended SET ? WHERE Idnumber = ?' [id], function(err,rows){
             if (err) return next(err);

            res.redirect('/attendanceCaptureView');
        });
    });
  });
};


this.getSearchNames = function(req, res, next){
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
    learnersData.getSearchNames(function(err, connection){
       if(err) return next(err);

       var searchValue = req.params.searchValue;

        learnersData.getSearchNames(searchValue, function(err, results){
            if (err) 
                return next(err)

            res.render('learnersList', {
                username: req.session.user,
                administrator: administrator,
                data: results
            })

        })
    })
})
};

    this.getSearchSurnames = function(req, res, next){
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
    learnersData.getSearchSurnames(function(err, connection){
       if(err) return next(err);

       var searchValue = req.params.searchValue;

        learnersData.getSearchSurnames(searchValue, function(err, results){
            if (err) 
                return next(err)

            res.render('surnamesList', {
                username: req.session.user,
                administrator: administrator,
                data: results
            })

        })
    })
})
};

    this.getSearchCourses = function(req, res, next){
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
    learnersData.getSearchCourses(function(err, connection){
       if(err) return next(err);

       var searchValue = req.params.searchValue;

        learnersData.getSearchCourses(searchValue, function(err, results){
            if (err) 
                return next(err)

            res.render('coursesList', {
                username: req.session.user,
                administrator: administrator,
                data: results
            })

        })
    })
})
};

    this.getSearchGenders = function(req, res, next){
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
    learnersData.getSearchGenders(function(err, connection){
       if(err) return next(err);

       var searchValue = req.params.searchValue;

        learnersData.getSearchGenders(searchValue, function(err, results){
            if (err) 
                return next(err)

            res.render('gendersList', {
                username: req.session.user,
                administrator: administrator,
                data: results
            })

        })
    })
})
};

    this.getSearchRaces = function(req, res, next){
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
    learnersData.getSearchRaces(function(err, connection){
       if(err) return next(err);

       var searchValue = req.params.searchValue;

        learnersData.getSearchRaces(searchValue, function(err, results){
            if (err) 
                return next(err)

            res.render('racesList', {
                username: req.session.user,
                administrator: administrator,
                data: results
            })

        })
    })
})
};

this.getSearchLanguages = function(req, res, next){
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
    learnersDataa.getSearchLanguages(function(err, connection){
       if(err) return next(err);

       var searchValue = req.params.searchValue;

        learnersData.getSearchLanguages(searchValue, function(err, results){
            if (err) 
                return next(err)

            res.render('languagesList', {
                username: req.session.user,
                administrator: administrator,
                data: results
            })

        })
    })
})
};

    this.getSearchAddresses = function(req, res, next){
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
    learnersData.getSearchAddresses(function(err, connection){
       if(err) return next(err);

       var searchValue = req.params.searchValue;

        learnersData.getSearchAddresses(searchValue, function(err, results){
            if (err) 
                return next(err)

            res.render('addressesList', {
                username: req.session.user,
                administrator: administrator,
                data: results
            })

        })
    })
})
};

    this.getSearchGraduates = function(req, res, next){
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
    learnersData.getSearchGraduates(function(err, connection){
       if(err) return next(err);

       var searchValue = req.params.searchValue;

        learnersData.getSearchGraduates(searchValue, function(err, results){
            if (err) 
                return next(err)

            res.render('graduatesList', {
                username: req.session.user,
                administrator: administrator,
                data: results
            })

        })
    })
})
};

    this.SearchLocation = function(req, res, next){
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
    learnersData.SearchLocation(function(err, connection){
       if(err) return next(err);

       var searchValue = req.params.searchValue;

        learnersData.SearchLocation(searchValue, function(err, results){
            if (err) 
                return next(err)

            res.render('locationsList', {
                username: req.session.user,
                administrator: administrator,
                data: results
            })

        })
    })
})
};

    this.getSearchlocations = function(req, res, next){
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
    learnersData.getSearchlocations(function(err, connection){
       if(err) return next(err);

       var searchValue = req.params.searchValue;

        learnersData.getSearchlocations(searchValue, function(err, results){
            if (err) 
                return next(err)

            res.render('locationssList', {
                username: req.session.user,
                administrator: administrator,
                data: results
            })

        })
    })
})
};

    this.getSearchAttended  = function(req, res, next){
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
    learnersData.getSearchAttended (function(err, connection){
       if(err) return next(err);

       var searchValue = req.params.searchValue;

        learnersData.getSearchAttended (searchValue, function(err, results){
            if (err) 
                return next(err)

            res.render('attendedsList', {
                username: req.session.user,
                administrator: administrator,
                data: results
            })

        })
    })
})
};

    this.getSearchProfile  = function(req, res, next){
    req.services(function(err, services){
        var learnersData = services.learnerDataServ;
    learnersData.getSearchProfile (function(err, connection){
       if(err) return next(err);

       var searchValue = req.params.searchValue;

        learnersData.getSearchProfile (searchValue, function(err, results){
            if (err) 
                return next(err)

            res.render('profilesList', {
                username: req.session.user,
                administrator: administrator,
                data: results
            })

        })
    })
})
};
    
}

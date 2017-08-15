module.exports = function(){ 

    this.showFacilitator = function (req, res, next) {
        req.services(function(err, services){
            var facilitatorData = services.facilitatorDataServ;
            facilitatorData.showFacilitator(function(err, results) {
                if (err) return next(err);
                    res.render( 'lecturer', {
                    facilitator : results,
                    administrator : administrator
                });
            });
        });
    };

    this.showCurriculum = function (req, res, next) {
        req.services(function(err, services){
            var facilitatorData = services.facilitatorDataServ;
            facilitatorData.showCurriculum(function(err, results) {
                if (err) return next(err);
                    res.render( 'programCurriculum', {
                    programCurriculum : results,
                    administrator : administrator
                });
            });
        });
    };

    this.showPlacement = function (req, res, next) {
        req.services(function(err, services){
            var facilitatorData = services.facilitatorDataServ;
            facilitatorData.showPlacement(function(err, results) {
                if (err) return next(err);
                    res.render( 'placement', {
                    placement : results,
                    administrator : administrator
                });
            });
        });
    };

    this.showExitPlan = function (req, res, next) {
        req.services(function(err, services){
            var facilitatorData = services.facilitatorDataServ;
            facilitatorData.showExitPlan(function(err, results) {
                if (err) return next(err);
                    res.render( 'exitPlan', {
                    exitPlan : results,
                    administrator : administrator
                });
            });
        });
    };

    this.addFacilitator = function (req, res, next) {
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
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
    req.getConnection(function(err, connection){
            connection.query('INSERT INTO facilitator set ?', [data], function(err,results){
             if (err) return next(err);

            res.redirect( 'lecturer')
            });
      
        });
    });
};

    this.addProgramCurriculum = function (req, res, next) {
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
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
        req.getConnection(function(err, connection){
            connection.query('INSERT INTO programCurriculum set ?', [data], function(err,results){
             if (err) return next(err);

            res.redirect( 'programCurriculum');
          })
      
        });
    });
};

    this.addPlacement = function (req, res, next) {
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
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
        req.getConnection(function(err, connection){
            connection.query('INSERT INTO placement set ?', [data], function(err,results){
             if (err) return next(err);

            res.redirect( 'placement')
            });
      
        });
    });
};

    this.addExitPlan = function (req, res, next) {
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
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
        req.getConnection(function(err, connection){
            connection.query('INSERT INTO exitPlan set ?', [data], function(err,results){
             if (err) return next(err);

            res.redirect( 'exitPlan')
           });
        });
    });
};


    this.SortFacilitator = function (req, res, next) {
        req.services(function(err, services){
            var facilitatorData = services.facilitatorDataServ;
            facilitatorData.SortFacilitator(function(err, results) {
                if (err) return next(err);
                    res.render( 'lecturer', {
                    data : results,
                    administrator : administrator
                });
            });
        });
    };


    this.deleteProgram = function (req, res, next) {
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
        var id = req.params.module_name;
        req.getConnection(function(err, connection){
                connection.query('DELETE programCurriculum FROM programCurriculum WHERE module_name = ?', [id], function(err,results){
                 if (err) return next(err);

            res.redirect('/programCurriculum');
        });
    });
  });
};

    this.deleteFacilitator = function (req, res, next) {
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
        var id = req.params.idNo;
        req.getConnection(function(err, connection){
            connection.query('DELETE facilitator FROM facilitator WHERE idNo = ?', [id], function(err,results){
             if (err) return next(err);

            res.redirect('/lecturer');
        });
    });
  });
};

    this.deletePlacement = function (req, res, next) {
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
                connection.query('DELETE placement FROM placement WHERE Idnumber = ?', [id], function(err,results){
             if (err) return next(err);

            res.redirect('/placement');
        });
    });
  });
};

    this.deleteExitPlan = function (req, res, next) {
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
        var id = req.params.IDno;
        req.getConnection(function(err, connection){
            connection.query('DELETE exitPlan FROM exitPlan WHERE IDno = ?', [id], function(err,results){
             if (err) return next(err);

            res.redirect('/exitPlan');
        });
    });
  });
};


    this.getplacement_add = function (req, res, next) {
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('SELECT Idnumber, Name, surname FROM learner WHERE Idnumber = ?', [id], function(err,results){
             if (err) return next(err);

            res.render( 'placement_add', {
                data : results[0],
                administrator : administrator
            });
            });
        });
    });
};

    this.getUpdateFacilitator = function (req, res, next) {
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
        var id = req.params.idNo;
        req.getConnection(function(err, connection){
            connection.query('SELECT * FROM facilitator WHERE idNo = ?', [id], function(err,results){
             if (err) return next(err);

            res.render( 'editLecturer', {
                data : results[0],
                administrator : administrator
            });
          });
        });
    });
};

    this.getUpdateProgram = function (req, res, next) {
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
        var id = req.params.module_name;
        req.getConnection(function(err, connection){
            connection.query('SELECT * FROM programCurriculum WHERE module_name = ?', [id], function(err,results){
             if (err) return next(err);

            res.render( 'editProgram', {
                data : results[0],
                administrator : administrator
            });
           });
        });
    });
};

    this.getUpdatePlacement = function (req, res, next) {
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
        var id = req.params.Idnumber;
        req.getConnection(function(err, connection){
            connection.query('SELECT * FROM placement WHERE Idnumber = ?', [id], function(err,results){

             if (err) return next(err);

            res.render( 'editPlacement', {
                data : results[0],
                administrator : administrator
            });
           });
        });
    });
};

    this.getUpdateExitPlan = function (req, res, next) {
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
        var id = req.params.IDno;
        req.getConnection(function(err, connection){
            connection.query('SELECT * FROM exitPlan WHERE IDno = ?', [id], function(err,results){
             if (err) return next(err);

            res.render( 'editExitPlan', {
                data : results[0],
                administrator : administrator
            });
           });
        });
    });
};

    this.updateFacilitator = function (req, res, next) {
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
        var id = req.params.idNo;
        var data = JSON.parse(JSON.stringify(req.body));
        req.getConnection(function(err, connection){
            connection.query('UPDATE facilitator SET ? WHERE idNo = ?', [data, id], function(err,results){
             if (err) return next(err);

            res.redirect('/lecturer');
        });
    });
  });
};


    this.updateProgram = function (req, res, next) {
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
        var id = req.params.module_name;
        var data = JSON.parse(JSON.stringify(req.body));
        req.getConnection(function(err, connection){
            connection.query('UPDATE programCurriculum SET ? WHERE module_name = ?', [data, id], function(err,results){
             if (err) return next(err);

            res.redirect('/programCurriculum');
        });
    });
  });
};

    this.updatePlacement = function (req, res, next) {
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
        var id = req.params.Idnumber;
        var data = JSON.parse(JSON.stringify(req.body));
        req.getConnection(function(err, connection){
            connection.query('UPDATE placement SET ? WHERE Idnumber = ?', [data, id], function(err,results){
             if (err) return next(err);

            res.redirect('/placement');
        });
    });
  });
};

    this.updateExitPlan = function (req, res, next) {
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
        var id = req.params.IDno;
        var data = JSON.parse(JSON.stringify(req.body));
        req.getConnection(function(err, connection){
            connection.query('UPDATE exitPlan SET ? WHERE IDno = ?', [data, id], function(err,results){
             if (err) return next(err);

            res.redirect('/exitPlan');
        });
    });
  });
};


this.getSearchFacilitators = function(req, res, next){
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
    facilitatorData.getSearchFacilitators(function(err, connection){
       if(err) return next(err);

       var searchValue = req.params.searchValue;

        facilitatorData.getSearchFacilitators(searchValue, function(err, results){
            if (err) 
                return next(err)

            res.render('facilitatorsList', {
                username: req.session.user,
                administrator: administrator,
                data: results
            })

        })
    })
})
};

this.getSearchWork_location = function(req, res, next){
    req.services(function(err, services){
        var facilitatorData = services.facilitatorDataServ;
    facilitatorData.getSearchWork_location(function(err, connection){
       if(err) return next(err);

       var searchValue = req.params.searchValue;

        facilitatorData.getSearchWork_location(searchValue, function(err, results){
            if (err) 
                return next(err)

            res.render('work_locationsList', {
                username: req.session.user,
                administrator: administrator,
                data: results
            })

        })
    })
})
};
    
}
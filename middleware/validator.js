const {check, validationResult} = require("express-validator");

exports.registerRules = () => 
    [check ('name', 'name is required').notEmpty(),
    check ('lastname', 'lastname is required').notEmpty(),
    check ('adress', 'lastname is required').notEmpty(),
    check ('phonenumber', 'lastname is required').notEmpty(),
    check ('email', 'email is required').notEmpty(),
    check ('email', 'check your email again').isEmail(),
    check ('password', 'password must be 6 to 20 characters').isLength(
        {
            min : 6 , 
            max : 20,
        }
    ), 
    check ('role', 'role is required').notEmpty(),
    ]
;

exports.loginRules = () => 
    [
        check ('email', 'email is required').notEmpty(),
        check ('email', 'check your email again').isEmail(),
        check ('password', 'password must be 6 to 20 characters').isLength(
            {
                min : 6 , 
                max : 20,
            }
    ), 
    ];

 exports.validation = (req,res,next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).send({errors: errors.array().map((el)=>({msg:el.msg}))});   
    };
    next();
}


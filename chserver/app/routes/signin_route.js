// Defining the Routes

module.exports = function (app, db) {

    app.post('/signin', (req, res) => {

        // Create User

        const user = {

            email: 'ajojohn555@gmail.com',
            mobNo: '',
            registered: 'No' 

        }

        // Inserting into User Collection

        db.collection('users').insert(user, (err, result) => {

            if (err) {

                res.send({

                    'error': 'An Error has Occurred'

                });
            }

            else {

                //console.log('Success');
                res.send(result.ops[0]);

            }
        });

    });
    
}
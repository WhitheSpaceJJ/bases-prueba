const bcrypt = require('bcrypt');

try {
    bcrypt.hash("defensoria3", 10).then((hash) => {
 console.log(hash);
    });

} catch (error) {
    console.log("Error:", error.message);
}
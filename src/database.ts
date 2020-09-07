const admin = require('firebase-admin');

var serviceAccount = require('../sistema-de-examenes.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://sistema-de-examenes.firebaseio.com/"
});

const db = admin.database();
export default db;

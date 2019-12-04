module.exports =  ({username, password, email, age}) => {

    if( !username) throw {message: "debe introducir USERNAME", ok: false};
    if( !password) throw {message: "debe introducir PASSWORD", ok: false};
    if( !age) throw {message: "debe introducir EDAD", ok: false};
    if( !email) throw{message: "debe introducir MAIL", ok: false};
} 


function isValidUserData(req,res,next){
    const{
        name,
        surname,
        email,
        pwd
    }=req.body;

    if(!name) throw new Error('не передали имя');
    if(!isNaN(name)) throw new Error('это число');

    if(!surname) throw new Error('не передали Surname');
    if(!isNaN(surname)) throw new Error('это число');//если не строка

    if(!email) throw new Error('не передали email');

    if(!pwd) throw new Error('не передали пароль');
    if(pwd.length<9) throw new Error('пароль меньше 9 символов');
    if(/^[a-zA-Z0-9\_\-\.]+@[a-zA-Z]+\.[a-z]{1,5}/gm.test(pwd))
    throw new Error('это не почта');
    next();
}

module.exports = isValidUserData;
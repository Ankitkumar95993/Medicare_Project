const mongoose = require('mongoose');

exports.dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedtopology:true,
    })
    .then(()=>{console.log('db connection successful')})
    .catch((error)=>{
        console.error(error);
        console.log('db connection issue');
        process.exit(1);
    })
}

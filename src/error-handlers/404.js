'use strict';

function handle404(req, res, next) {
  try{

    const errorObject = {
      status: 404,
      message: 'Sorry, we could not find what you were looking for'
    };
  
    res.status(404).json(errorObject);
  }catch(e){
    console.log('catch e',e)
    next()
  }
}

module.exports = handle404;

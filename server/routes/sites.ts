import { Request, Response, Router } from 'express';
import { sitesModel } from '../models/sites.model';

const siteRouter: Router = Router();

const axios = require('axios');

const tech_types = ["python", "java", "script", "haskell"];

function checkContent(_b){
  var _body = _b.toLowerCase();
  var counters = Array(tech_types.length);

  var maxIndex = -1;
  var maxCounter = 0

  for(var i=0; i < tech_types.length; i++){
    counters[i] =  _body.split(tech_types[i]).length - 1;
    console.log(tech_types[i]);
    console.log(counters[i]);
    if(counters[i] > maxCounter){
      maxIndex = i;
      maxCounter = counters[i];
    }
  }

  if(maxCounter < 0){
     return "None"
  }
  else{
    return tech_types[maxIndex];
  }

}

siteRouter.get('/', (req: Request, res: Response) => {
  sitesModel.find({}, function(err, sites) {
    if (err) { throw err; }
    res.json(sites);
  });
});

siteRouter.post('/', (req: Request, res: Response) => {
  var url = req.body.name;
  axios.get(url).then(_httpRes => {
    return checkContent(_httpRes.data);
  }).catch(error => {
    const {
      status,
      statusText
    } = error.response;
    console.log(`Error! HTTP Status: ${status} ${statusText}`);
    return "None"
  }).then(_t => {
    console.log(_t);
    var tmp = new sitesModel({
      id: req.body.id,
      name: req.body.name,
      title: req.body.title,
      type: _t
    });
  
    tmp.save(function(err) {
      if (err) { throw err; }
    });
    res.end();
  });
});

export { siteRouter };


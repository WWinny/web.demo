
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: ' Hello abc ! ' });
};

exports.demo = function(req, res){
  res.render(
      'demo', 
  { title: ' Demo page' ,
    Header  : 'demo,demo,.....'
  }
  );
};


exports.app = function(req, res){
  res.render(
      'bootstrap', 
  { titles: ' bootstrap page' ,
    content  : 'aaaabbbbcccc,.....'
  }
  );
};
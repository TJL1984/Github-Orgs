(function(){
  'use strict';
  console.log('ready?');
})();


    $.ajax({
      url: 'https://api.github.com/users/jisaacks/orgs'
      method: 'GET'
      dataType: 'json'
    })
      .done(function handleLoad(data) {
        console.log('good to go', data)
      }






})();

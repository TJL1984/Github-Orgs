(function(){
  'use strict';
  console.log('ready?');
)};




    $.ajax({
      url: 'https://api.github.com/users/jisaacks/orgs'
      method: 'GET'
      dataType: 'json'
    })

      .done(function handleLoad(data) { // I need a .done and a .fail
        console.log('good to go!', data)
      })

      .fail(function error() {

      })






})();

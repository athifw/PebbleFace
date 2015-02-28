Pebble.addEventListener('ready', function() {
  console.log("hi"); 
  getMoney();
});

var getMoney=function() {
  var request = new XMLHttpRequest();
  request.open( 'GET',
              'https://www.kimonolabs.com/api/b1e8r13k?apikey=ZIZ0u3hlmKgL3G9OSBa15NO8BvF3B2fy',
              true);
  request.onload=sendMoney;
  request.send();
};

var sendMoney = funcntion() {
  var response =JSON.parse(this.responseText);
  var money = response.results.collection1[0].property1;
  console.log(money);
  Pebble.sendAppMessage({
    'money': money
  })
}
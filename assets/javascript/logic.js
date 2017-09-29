
// Built by LucyBot. www.lucybot.com
console.log("apple");
var url = "https://api.nytimes.com/svc/archive/v1/2016/1.json";

url += '?' + $.param({
  'api-key': "1177bd64c80d4521ae3b2326640e9489"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {

  console.log("hello");
});


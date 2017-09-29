var searchTerm = "";
var numRecords = 0 ;
var startYear = 0 ;
var endYear = 0 ;


var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "1177bd64c80d4521ae3b2326640e9489"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});


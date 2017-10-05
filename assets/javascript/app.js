    $("body").on("click","#artist-search-btn", function() {
      event.preventDefault()
      $(".bs-example-modal-lg").modal("hide")
      $("#content").empty()


    });
var thisthing=""
//set the client id and api
// init function runs first on start up?
function init() {
  console.log("initting")
    gapi.client.setApiKey("AIzaSyAWtNryZAH0FZ2IGlCr1Z8DPdvQwfjztPw");
    gapi.client.load("youtube", "v3", function() {
      // q: "album|song -cover -mashup" + encodeURIComponent($("#artist-name-input").val()).replace(/%20/g, "+")
        // yt api is ready
    });
}
// WIKIPEDIA!!!!!
$("body").on("click","#artist-search-btn", wiki)
$("body").on("click","#bio-button", wiki)

var hasSearch = false
var wikiSearch=""
var toSearch = "";
function wiki() {
console.log(wikiSearch)
// $("nav").on("click","#bio-button", function() {
  event.preventDefault()

  
  console.log("wiki test")
  
  $("#content").empty()
  
  var articles = $("#content");
  var input = $("#artist-name-input");
  // var button = $("#bio-button");
  
  var searchUrl = 'https://en.wikipedia.org/w/api.php';

  var ajaxArticleData = function () {

    console.log(wikiSearch)
    console.log(toSearch)
    $.ajax({
        url: searchUrl,
        dataType: 'jsonp',
        data: {
            //main parameters
            action: 'query',
            format: 'json',
            incategory:"band",

            generator: 'search',
                //parameters for generator
                gsrsearch: toSearch + " band",
                gsrnamespace: 0,
                gsrlimit: 1,

            prop: 'extracts|pageimages',
                //parameters for extracts
                exwordcount: 10000,
                exlimit: 'max',
                explaintext: true,
                exintro: true,

                //parameters for pageimages
                piprop: 'thumbnail',
                pilimit: 'max',
                pithumbsize: 200
            },
            success: function (json) {
                var pages = json.query.pages;
                $.map(pages, function (page) {
                    var pageElement = $('<div>');

                    //get the article title
                    pageElement.append($('<h2>').append($('<a>').attr('href', 'http://en.wikipedia.org/wiki/' + page.title).text(page.title)));

                    //get the article image (if exists)
                    if (page.thumbnail) pageElement.append($('<img>').attr('width', 300).attr('src', page.thumbnail.source));

                    //get the article text
                    pageElement.append($('<p>').text(page.extract));

                    pageElement.append($('<hr>'));

                    articles.append(pageElement);
                });
            }
        });
    };

    input.autocomplete({
        source: function (request, response) {
            $.ajax({
                url: searchUrl,
                dataType: 'jsonp',
                data: {
                    'action': "opensearch",
                    'format': "json",
                    'search': request.term
                },
                success: function (data) {
                    response(data[1]);
                }
            });
        }
    });

    // button.click(function () {
        articles.empty();

          var thisButton = $(this).attr('id');
          console.log(thisButton)
          if(thisButton == "artist-search-btn") {
            console.log("123123")
            hasSearch = false;
          }
        if(hasSearch == false) {
          toSearch = input.val();
          wikiSearch = toSearch;
          hasSearch = true;
        }
        else if (hasSearch == true) {
          wikiSearch = toSearch;
        }


        
        wikiSearch = toSearch
        console.log("123")
        ajaxArticleData();
    // });
// })
}
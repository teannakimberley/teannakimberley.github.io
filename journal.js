

//const JournalTemp = new Entry($('#title').val(),$('#date').val(),$('#content').val(),$('#author').val())
  // console.log(JournalTemp) 


//  SIMPLE APPEND EXAMPLE

// wait until the document is ready before we start manipulating the DOM
$(document).ready(() => {
  
  //  Use jQuery to select the parent element that we want to insert a new child element into
  // var parent = $('ul#myList');

  //  create a string that expresses the html element we want to insert
  // var newElement = "<li> I am inserted at the end of the list </li>";

  //  Call the append() method of the parent element,
  //    supplying a string argument that describes
  //    the new html element we are adding
  // parent.append(newElement);
   function Entry (title,date,content,author){
    this.title = title;
    this.date = date;
    this.content = content;
    this.author = author;
  }

var name;
//this function is for the entrypage and it basically stores the login name that you submit.
$('#start').click(function(){
 localStorage.author = $('#author').val() 
});

//name will stay whatever the login name is
 $( "#author" ).attr("value", function( i, val ) {
  return localStorage.author;
});

//this function fills out template with post information and adds it to the bottom of the page.
$('#enterbutn').click(function(){

var title = $('#title').val()
var date = $('#date').val()
var content = $('#content').val()
var author = localStorage.author
var author2 = $('#author').val()
console.log(localStorage.author)

//this is my html style template
var template = '<div class="entrytemplate">'
   +'<h2 class="title">'+ title+'</h2>'+
    '<p class="date">'+date+'</p>'+
    '<p class="content">'+content+'</p>'+
    '<p class="author"><i>'+'- '+author2+'</i></p>'+
    '<a href="#" id="one" class="btn btn-info btn-lg"> <span class="glyphicon glyphicon-heart-empty"></span></a>'
'</div>' ;


//allows you to post multiple times
const JournalTemp = new Entry($('#title').val(),$('#date').val(),$('#content').val(),$('#author').val())
   console.log(JournalTemp) 

$('#journalpage').append(template)

//here i tried to change the background color of the post if you click the heart button
$("a#one").onclick(function(){
    $(".entrytemplate").css("background-color", "mediumpurple", "opacity","0.5");
    }, function(){
    $(".entrytemplate").css("background-color", "white");
});

})
//end of function. 

// change value 
//j query

});



 
//Business Logic

function add(movie, time, age) {
  return movie + time + age;
}












//User Interface
$(document).ready(function(){
  $("form").submit(function(event){
    var movie = parseInt($("#movie-select").val());
    console.log(movie);
    var time = parseInt($("#time-select").val());
    var age = parseInt($("#age-select").val());
    var total = add(movie, time, age);
    // alert(total)

    console.log(total);
    event.preventDefault();



  });
});

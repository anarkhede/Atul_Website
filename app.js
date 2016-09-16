// $ is variable call, like in bash
$(document).ready(function(){
//20) .ready means that browser has read
// all the code on the page.
    setBindings();
//21) Call another function setbindings
});

function setBindings() {
//22) Adds event-listner (click here)
// to all a element buttons
    //23) This will give click functionality to 'a' element
    // leading to function causing an event 'e'
    $("nav a").click(function(e){
    //26) Prevent default anchor tag behavior
        e.preventDefault();
    //24) Link 'e' event to nav 'a' id
    // Displays following alert message
    // 25) Now, link to corresponding div id using var
    // div id are nav id + Sect
        var sectID = e.currentTarget.id + "Sect";
    //   alert('button id ' + e.currentTarget.id);
    // Displays div id's
    //    alert('button id ' + sectID);
    //var o = $("#" + sectID).offset().top
    //alert('button id ' + sectID + ' ' + o);
    //27) Add scrolling Animation to anchor click response
        $("html, body").animate({
        //28) $(Link id's in div using #, same as href)
        //29) .offset.top finds where its at in div
        // and move it to the top of the page in 1000ms
        scrollTop:$("#" + sectID).offset().top
        }, 1000);
    })
}

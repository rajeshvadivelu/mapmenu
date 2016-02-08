var locations =  [
  {
    lat: 13.082680,
    lon: 80.270718,
    title: 'Chennai, India',
    html: '<h3>Chennai, India</h3>'
  },
  {
    lat: 9.9,
    lon: 78.1,
    title: 'Madurai, India',
    html: '<h3>Madurai, India</h3>',
    //visible: false
  },
  {
    lat: 11.0,
    lon: 76.9,
    title: 'Coimbatore, India',
    html: '<h3>Coimbatore, India</h3>',
    stopover: true
  },
  {
    lat: 11.6,
    lon: 78.1,
    title: 'Salem, India',
    html: '<h3>Salem, India</h3>'
  }
];


var html_checks = {
  //required: called by Maplace.js to activate the current voice on menu
  activateCurrent: function(index) {
    //alert(index);
    $("#tabs").tabs({active: index-1});
  },
  //required: called by Maplace.js to get the html of the menu
  getHtml: function() {
    var self = this,
    html = '';

    //if more than one location
    if(this.ln > 1) {
      //html += '<div id="tabs">';

      //check "view all" link
      //use ShowOnMenu(index) to know if a location has to appear on menu
      /*  if(this.ShowOnMenu(this.view_all_key)) {
      html += '<label><input type="radio" name="gmap" value="'
      + this.view_all_key + '"/>' + this.o.view_all_text + '</label>';
    }
    */
    //iterate the locations
    html += '<ul>';
    for (var a = 0; a < this.ln; a++) {
      if(this.ShowOnMenu(a))
      //      html += '<label><input type="radio" name="gmap" value="' + (a+1) + '"/>'
      //               + (this.o.locations[a].title || ('#' + (a+1))) + '</label>';
      html += '<li><a href="#tabs-' + a + '">' + (this.o.locations[a].title)+ '</a></li>';
    }
    html += '</ul>';
    for (var a = 0; a < this.ln; a++) {
      html += '<div id="tabs-' + a + '">';
      html += '  <p> this is content </p>';
      html += '<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">';
      html += '<circle cx="6" cy="6" r="5" stroke="black"';
      html += 'stroke-width="2" fill="green"/>';
      html += '</svg>';


      html += '</div>';
    }
    //html += '</div>';
  }

  this.html_element = $('<div id="tabs"></div>').append(html);

  return this.html_element;
}
};

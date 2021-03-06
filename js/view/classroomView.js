// Classroom Model View for the individual room
App.ClassroomView = Backbone.View.extend({
  tagName: "li",

  events: {
    "click": "joinClassroom"
  },

  joinClassroom: function(e) {
    
    if(! $('#studentName').val() ){
      alert('enter a name');
      return;
    } else {
      App.localStudentName = $('#studentName').val();      
    }


    var iconClick = $(e.target).closest("span").data("name");
    var liClick = $(e.target).children().data("name");
    var data;

    if (!liClick) {
      data = iconClick;
    } else {
      data = liClick;
    }

    var windowLocation = window.location.hash.slice(1);
    console.log("********Window Location Set to :");
    console.log(windowLocation);

    App.router.navigate(windowLocation + "/" + data, {
      trigger: true
    });
  },

  initialize: function() {
    this.render();
  },
  // events: {
  //  'click': 'joinClassroom'
  // },
  // joinClassroom: function(){
  //  socket.emit('studentJoinClassroom', this.model.get('name'), studentName);
  // },
  render: function() {

    var source = $("#classroomListItem").html();
    var template = Handlebars.compile(source);
    var html = template(this.model.toJSON());
    this.$el.html(html);

    // var template = Handlebars.compile(App.classroomTemplate);
    // this.$el.html(template(this.model.toJSON()));
  }
});
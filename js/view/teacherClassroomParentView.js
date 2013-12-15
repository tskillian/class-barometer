// Overall View for a teacher classroom
App.TeacherClassroomParentView = Backbone.View.extend({
  el: "#contentArea",
  events: {
    "hashchange": "removeFooter"
  },
  initialize: function() {
    console.log("TeacherClassroomParentView initialized");
    this.render();
  },

  startBootstrapTabs: function() {
    $('.teach-tabs a').click(function(e) {
      e.preventDefault();
      $(this).tab('show');
    });
  },

  addFooter: function() {
    // $(".footerContainer").attr('id', 'footer');
    $(".footerContainer").append("<div id='footer'></div>");
    var source = $("#teacherFooter").html();
    var template = Handlebars.compile(source);
    var html = template();
    $("#footer").html(html);
  },

  render: function() {
    $("#contentArea").empty();
    var source = $("#teacherClassroomView").html();
    var template = Handlebars.compile(source);
    // Probably will need the toJSON
    // var html = template(this.model.toJSON());
    var html = template();
    this.$el.html(html);

    //render each studentInClassroomView
    


    // Adds in the footer to update with metrics
    this.addFooter();
    // You need this to initalize the bootstrap tabs
    this.startBootstrapTabs();
  },

  //this event should be moved to sub-view when ready
  updateStatus: function() {
    //Assumes there is a resources object within App
    //The jqeury selector will need to be updated based on subview as well
    App.resources.status = $('#updateStatus').val();
    socket.emit('topicChange', App.resources.status);
  }
});
Template.postSubmit.events({
  "submit form": function(event, template) {
    event.preventDefault();

    var post = {
      url: $(event.target).find('[name=url]').val(),
      title: $(event.target).find('[name=title]').val(),
      message: $(event.target).find('[name=message]').val(),
    };

    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
});

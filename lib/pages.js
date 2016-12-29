orion.pages.addTemplate({
    layout: 'pagesLayout',
    template: 'pagesSimple',
    name: 'Simple',
    description: 'Simple template'
}, {
    content: orion.attribute('summernote', {
      label: 'Content'
    })
})
Meteor.startup(function(){
  Router.route('/pages/:url', function() {
    var subs = Meteor.subscribe('page', this.params.url);
    if (subs.ready()) {
      var page = orion.pages.collection.findOne({ url: this.params.url });
      if (page) {
        var template = orion.pages.templates[page.template];
        if (template.layout) {
          this.layout(template.layout);
        }
        this.render(page.template, {data: page});
      } else {
        this.render('notFound');
      }
    } else {
      this.render('');
    }
  }, { name: 'pages' });
});

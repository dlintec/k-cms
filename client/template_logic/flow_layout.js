Template.flow_layout.onCreated(function() {
  const handle=this.subscribe('pages');
  this.autorun(() => {
    const isReady = handle.ready();
    console.log(`Handle is ${isReady ? 'ready' : 'not ready'}`);
    document.title = orion.dictionary.get('site.title', 'Websitex');
  });
});
Template.flow_layout.helpers({

  pages:function(){
    return  pages.find({}, {sort: {order: 1}});
  }
});

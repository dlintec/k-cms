Template.dataTest.onCreated(function() {
  const handle=this.subscribe('pages');
  this.autorun(() => {
    const isReady = handle.ready();
    console.log(`Handle is ${isReady ? 'ready' : 'not ready'}`);
    document.title = orion.dictionary.get('site.title', 'Websitex');
  });
});
Template.dataTest.helpers({

  pages:function(){
    return  pages.find({}, {sort: {order: 1}});
  }
});

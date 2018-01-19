FlowRouter.route('/',{

    name:'home',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('homeLayout');
    }

});

FlowRouter.route('/recipe-book',{

    name:'recipe-book',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('mainLayout', {main: 'Recipes'});
    }

});

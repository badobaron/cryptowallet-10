import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
    console.log(Meteor.settings.hello)
});


//Meteor.startup(function() {
  // code to run on server at startup
//});

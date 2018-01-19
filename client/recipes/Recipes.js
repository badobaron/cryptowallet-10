Meteor.subscribe('recipes');

console.log(Meteor.settings.hello); //nao funciona -> undefined

console.log(Meteor.settings.public.ga.account); //funciona pq eh public

Template.Recipes.helpers({
    recipes: ()=> {
        return Recipes.find({});
    }
});

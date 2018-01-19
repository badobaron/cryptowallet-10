import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform'])//, 'denyInsert', 'denyUpdate'])

Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    insert: function(userId, doc){
        return !!userId;
    }
});


Ingredient = new SimpleSchema({
    name: {
        type: String,
        label: "Nome"
    },
    amount: {
        type: String,
        label: "qtd"
    },
});


RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Nome"
    },
    desc: {
        type: String,
        label: "Descricao"
    },
    ingredients: {
        type: Array,
        label: "Lista de Ingredientes"
    },
    'ingredients.$': {
        type: Ingredient,
        label: "Ingrediente"
    },
    inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    author: {
        type: String,
        label: "Autor",
        autoValue: function(){
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Data criacao",
        autoValue: function(){
            return new Date()
        },
        autoform: {
            type: "hidden"
        }
    },
});

Recipes.attachSchema( RecipeSchema );

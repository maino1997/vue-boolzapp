console.log('ok', Vue);

Vue.config.devtools = true;

var app = new Vue({
    el: '#root',
    data: {
        user: {
            name: 'Sasha Mainardi',
            avatar: '_io'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
            },
            {
                name: 'Fabio',
                avatar: '_2',
            },
            {
                name: 'Samuele',
                avatar: '_3',
            },
            {
                name: 'Luisa',
                avatar: '_4',
            },

        ]
    },
});
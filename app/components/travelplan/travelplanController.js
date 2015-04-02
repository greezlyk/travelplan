'use strict';

angular.module('travelPlaneApp.travelplan', ['ngRoute'])


.controller('TravelplanCtrl', [function() {

        this.days = [
            { sartdate:'02/04/2015', num:'1', plan: { title: 'Flight Oslo to Barcelona',
                activity : {
                    title: 'British Airways ',
                    description: 'Utreise Torsdag 2 april 2015	16:00 Oslo Lufthavn (OSL)	19:20 Barcelona Apt (BCN)',
                    image: '../assets/img/baLogoSm1.jpg'
                }}
                , wather: '+14, Sun'},
            { sartdate:'03/04/2015', num:'2', plan: { title: 'Check-in to hotel'}, wather: '+14, Sun'},
            { sartdate:'04/04/2015', num:'3', plan: { title: 'Visit Gaudi!' ,
                activity : {
                    title: 'Wiki description',
                    description: 'When the original Episcopal Palace was destroyed by a fire in the 19th century, Bishop Grau decided to assign the design of the new building to his friend Antoni Gaudí. The two had become friends when Grau was general vicar in the archdiocese of Tarragona and had inaugurated a church for which the architect had designed the high altar.',
                    image: '../assets/img/GaudiSm.jpg'
                }},
                wather: '+16, Sun'},
            { sartdate:'05/04/2015', num:'4', plan: { title: 'Museum Picasso',
                activity : {
                    title: 'The day of culture - museums and arts: Museum Picasso',
                    description: 'The exhibition examines, for the first time, the relationship between two key figures of twentieth-century art. It challenges conventional historical views of the two artists as isolated, mythical and politically opposed figures, who developed their styles independently.',
                    image: '../assets/img/Dali-Barcelona2015.jpg'
                }}
                , wather: '+15, Sun'},
            { sartdate:'06/04/2015', num:'5', plan: { title: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.'}, wather: '+14, Sun'},
            { sartdate:'07/04/2015', num:'6', plan: { title: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec '}, wather: '+14, Sun'},
            { sartdate:'08/04/2015', num:'7', plan: { title: 'Flight Back to Oslo' ,
                activity : {
                    title: 'Wiki description',
                    description: 'When the original Episcopal Palace was destroyed by a fire in the 19th century, Bishop Grau decided to assign the design of the new building to his friend Antoni Gaudí. The two had become friends when Grau was general vicar in the archdiocese of Tarragona and had inaugurated a church for which the architect had designed the high altar.',
                    image: '../assets/img/norwegianIcon.jpg'
                }},
                wather: '+16, Sun'}

        ];


        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };

}]);
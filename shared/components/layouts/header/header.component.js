angular.module('myApp').component('appHeader', {
    templateUrl: 'shared/components/layouts/header/header.template.html',
    controller: function HeaderController() {
        this.title = 'My Awesome App';
        this.navigation = [
            { label: 'Home', url: '#/' },
            { label: 'About', url: '#/about' },
            { label: 'Contact', url: '#/contact' },
        ];
    }
});

angular.module('myApp').component('appFooter', {
    templateUrl: 'shared/components/layouts/footer/footer.template.html',
    controller: function FooterController() {
        this.year = new Date().getFullYear();
    }
});

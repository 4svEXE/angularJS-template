angular.module('pages')
    .component('productsSection', {
        templateUrl: 'pages/home/components/products/products.template.html',
        controller: function ProductsController() {
            this.plans = [
                {
                    price: '$29',
                    title: 'Basic',
                    info: 'For individuals starting small projects.',
                    features: [
                        '5 team members',
                        'Basic support',
                        '1GB file sharing'
                    ]
                },
                {
                    price: '$49',
                    title: 'Professional',
                    info: 'For teams running medium projects.',
                    features: [
                        '20 team members',
                        'Priority support',
                        '10GB file sharing'
                    ]
                },
                {
                    price: '$99',
                    title: 'Enterprise',
                    info: 'For businesses managing large teams.',
                    features: [
                        '50 team members',
                        'Dedicated support',
                        '50GB file sharing'
                    ]
                },
                {
                    price: '$199',
                    title: 'Ultimate',
                    info: 'For enterprises requiring premium solutions.',
                    features: [
                        'Unlimited team members',
                        '24/7 support',
                        'Unlimited file sharing'
                    ]
                }
            ];
        }
    });

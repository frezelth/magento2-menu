var config = {
    paths: {
        'Vue': 'Snowdog_Menu/js/lib/vue',
        'vue': 'Snowdog_Menu/js/lib/require-vuejs',
        'Vddl': 'Snowdog_Menu/js/lib/vddl',
        'vue-select': 'Snowdog_Menu/js/lib/vue-select'
    },
    shim: {
        'Vue': { 'exports': 'Vue' }
    },
    config: {
        mixins: {
          "Magento_Ui/js/modal/modal-component": {
            "Snowdog_Menu/js/mixins/modal-mixin": true
          }
        }
    },
};

$(document).ready(function() {

    // Modal
    $('.modal-window').SlickModals({
        popup_animation: 'zoomIn',
        popup_css: {
            'width': '372px',
            'height': 'auto',
            'background': 'transparent',
            'padding': '0',
            'margin': 'auto'
        },
        overlay_css: {
            'background': 'rgba(0, 0, 0, .8)'
        },
        // Mobile
        mobile_breakpoint: '420px',
        mobile_position  : 'topCenter',
        mobile_css       : {
            'width'             : '100%',
            'height'            : 'auto',
            'background'        : '#fff',
            'margin'            : '0',
            'padding'           : '18px',
            'animation-duration': '0.4s'
        },
    });

});
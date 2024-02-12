$(document).ready(function() {

    // Modal
    $('.modal-window').SlickModals({
        popup_animation: 'swingTop',
        popup_position: 'topCenter',
        popup_closeButtonPlace: 'inside',
        popup_css: {
            'width': '372px',
            'height': 'auto',
            'background': '#000000',
            'padding': '0',
            'margin': 'auto',
            'animation-duration': '0.2s'
        },
        overlay_css: {
            'background': 'rgba(0, 0, 0, .8)'
        },
        // Mobile
        mobile_breakpoint: '400px',
        mobile_position: 'topCenter',
        mobile_css: {
            'width': '100%',
            'height': '100%',
            'padding': '0',
            'margin': '0',
            'background': '#ffffff'
        }
    });

});
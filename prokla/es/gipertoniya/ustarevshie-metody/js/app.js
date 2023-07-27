var getParameterByName = function(name, url) {
    if ( ! url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if ( ! results) return false;
    if ( ! results[2]) return false;
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


$(document).ready(function() {


    var tid = getParameterByName('tid');
    var xhr_order_now = false;
    var xhr_form_submit = false;


    $(document).on('click', '#order-now, #order-now-2, #order-now-3, #order-now-4, #order-now-modal', function() {

        var btn         = $(this);
        var self        = btn.closest('form');
        var post        = new Object();
    
        
        post.tid        = self.find('input[name="tid"]').val() || tid;
        post.name       = $.trim(self.find('input[name="name"]').val());
        post.phone      = $.trim(self.find('input[name="phone"]').val());
        post.address    = $.trim(self.find('input[name="address_delivery"]').val());


        if (self.find('select[name="api_county_code"]').length) {
            post.api_county_code = $.trim(self.find('select[name="api_county_code"]').val());
        }
        

        if (self.find('input[name="address_delivery"]').length) {
            if (post.address.length == 0) {
                self.find('input[name="address_delivery"]').addClass('has-error');
            } else {
                self.find('input[name="address_delivery"]').removeClass('has-error');
            }
        }


        if (post.name.length < 3) {
            self.find('[name="name"]').addClass('has-error');
        } else {
            self.find('[name="name"]').removeClass('has-error');
        }
    
    
        if (post.phone.length < 7) {
            self.find('[name="phone"]').addClass('has-error');
        } else {
            self.find('[name="phone"]').removeClass('has-error');
        }


        if (self.find('.has-error').length == 0) {


            if (xhr_order_now != null) {
                if (xhr_order_now.readyState > 0 && xhr_order_now.readyState < 4) {
                    xhr_order_now.abort();
                }
            }


            var xhr_order_now = $.ajax({
                url: '/welcome/create_order',
                type: 'POST',
                data: post,
                dataType: 'json',
                success: function(json) {
                    if (json.result) {
                        $(location).attr('href', json.redirect);
                    } else {
                        btn.prop('disabled', false);
                    }
                }
            });
        }
    
    
        return false;
    });


    $('form').submit(function() {

        var btn         = $(this);
        var self        = btn.closest('form');
        var post        = new Object();
    
        
        post.tid        = self.find('input[name="tid"]').val() || tid;
        post.name       = $.trim(self.find('input[name="name"]').val());
        post.phone      = $.trim(self.find('input[name="phone"]').val());
        post.address    = $.trim(self.find('input[name="address_delivery"]').val());


        if (self.find('select[name="api_county_code"]').length) {
            post.api_county_code = $.trim(self.find('select[name="api_county_code"]').val());
        }
        

        if (self.find('input[name="address_delivery"]').length) {
            if (post.address.length == 0) {
                self.find('input[name="address_delivery"]').addClass('has-error');
            } else {
                self.find('input[name="address_delivery"]').removeClass('has-error');
            }
        }


        if (post.name.length < 3) {
            self.find('[name="name"]').addClass('has-error');
        } else {
            self.find('[name="name"]').removeClass('has-error');
        }
    
    
        if (post.phone.length < 7) {
            self.find('[name="phone"]').addClass('has-error');
        } else {
            self.find('[name="phone"]').removeClass('has-error');
        }


        if (self.find('.has-error').length == 0) {

            if (xhr_form_submit != null) {
                if (xhr_form_submit.readyState > 0 && xhr_form_submit.readyState < 4) {
                    xhr_form_submit.abort();
                }
            }


            var xhr_form_submit = $.ajax({
                url: '/welcome/create_order',
                type: 'POST',
                data: post,
                dataType: 'json',
                success: function(json) {
                    if (json.result) {
                        $(location).attr('href', json.redirect);
                    } else {
                        btn.prop('disabled', false);
                    }
                }
            });
        }

        
        return false;
    });
});
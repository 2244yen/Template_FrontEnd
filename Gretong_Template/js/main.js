$(document).ready(function() {
    var maxHeight = -1;

    $('.offer-content').each(function() {
        maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });

    $('.offer-content').each(function() {
      $(this).height(maxHeight);
    });
});

function initDatePickers() {
    var datePickers = document.querySelectorAll('.em-js-datepicker');
    
    for (i = 0; i < datePickers.length; i++)
    {
        var picker = new Pikaday(
        {
            field: datePickers[i],
            format: 'D/M/YYYY'
        });
    }
}
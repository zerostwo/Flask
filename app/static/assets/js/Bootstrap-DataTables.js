var mSortingString = [];
var disableSortingColumn = 0;
mSortingString.push({ "bSortable": true, "aTargets": [disableSortingColumn] });

$(function() {
        var table = $('#example').dataTable({
            "paging": true,
            "ordering": true,
            "info": true,
            "aaSorting": [],
            "orderMulti": true,
            "aoColumnDefs": mSortingString

        });
});
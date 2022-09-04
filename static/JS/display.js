function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }    

// // #this is not working
// function tableSearch(){  
//     let input,filter,table,tr,td,txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("table");
//     tr = table.getElementsByTagName("tr");

//     for(let i=0; i<tr.length;i++){
//         td1 = tr[i].getElementsByTagName("td")[1];
//         td2 = tr[i].getElementsByTagName("td")[2];
//         td3 = tr[i].getElementsByTagName("td")[3];
//         td4 = tr[i].getElementsByTagName("td")[4];
//         td5 = tr[i].getElementsByTagName("td")[5];
//         td6 = tr[i].getElementsByTagName("td")[6];
//         td7 = tr[i].getElementsByTagName("td")[7];
//         td8 = tr[i].getElementsByTagName("td")[8];
//         if(td1||td2||td3||td4||td5||td6||td7||td8) {
//             txtValue1 = td1.textContent || td1.innerHTML;
//             txtValue2 = td2.textContent || td2.innerHTML;
//             txtValue3 = td3.textContent || td3.innerHTML;
//             txtValue4 = td4.textContent || td4.innerHTML;
//             txtValue5 = td5.textContent || td5.innerHTML;
//             txtValue6 = td6.textContent || td6.innerHTML;
//             txtValue7 = td7.textContent || td7.innerHTML;
//             txtValue8 = td8.textContent || td8.innerHTML;
//             if(txtValue1.toUpperCase().indexOf(filter) > -1||
//             txtValue2.toUpperCase().indexOf(filter) > -1||
//             txtValue3.toUpperCase().indexOf(filter) > -1||
//             txtValue4.toUpperCase().indexOf(filter) > -1||
//             txtValue5.toUpperCase().indexOf(filter) > -1||
//             txtValue6.toUpperCase().indexOf(filter) > -1||
//             txtValue7.toUpperCase().indexOf(filter) > -1||
//             txtValue8.toUpperCase().indexOf(filter) > -1){
//                 tr[i].style.display = "";
//             }
//             else{
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }

function searchTable() {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}
var selectedRow = null
    function onFormSubmit() {
        if (validate()) {
            var formData = readFormData();
            if (selectedRow == null)
                insertNewRecord(formData);
            else
                updateRecord(formData);
            resetForm();
        }
    }
    function readFormData() {
        var formData = {};
        formData["prodName"] = document.getElementById("prodName").value;
        formData["rating"] = document.getElementById("rating").value;
        formData["review"] = document.getElementById("review").value;
        return formData;
    }
    function insertNewRecord(data) {
        var table = document.getElementById("productList").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.prodName;
        cell1 = newRow.insertCell(1);
        cell1.innerHTML = data.rating;
        cell2 = newRow.insertCell(2);
        cell2.innerHTML = data.review;
        cell3 =newRow.insertCell(3);
        cell3.innerHTML=`<a onClick="onEdit(this)">EDIT</a>
        <a onClick="onDelete(this)">DELETE</a>`;
    }
    function resetForm() {
        document.getElementById("prodName").value = "";
        document.getElementById("rating").value = "";
        document.getElementById("review").value = "";
        selectedRow = null;
    }
    function onEdit(td) {
        selectedRow = td.parentElement.parentElement;
        document.getElementById("prodName").value = selectedRow.cells[0].innerHTML;
        document.getElementById("rating").value = selectedRow.cells[1].innerHTML;
        document.getElementById("review").value = selectedRow.cells[2].innerHTML;
    }
    function updateRecord(formData) {
        selectedRow.cells[0].innerHTML = formData.prodName;
        selectedRow.cells[1].innerHTML = formData.rating;
        selectedRow.cells[2].innerHTML = formData.review;
    }
    function onDelete(td) {
        if (confirm('Are you sure to delete this record ?')) {
            row = td.parentElement.parentElement;
            document.getElementById("productList").deleteRow(row.rowIndex);
            resetForm();
        }
    }
    function validate() {
        isValid = true;
        if (document.getElementById("prodName").value == "") {
            isValid = false;
            document.getElementById("prodNameValidationError").classList.remove("hide");
        } else {
            isValid = true;
            if (!document.getElementById("prodNameValidationError").classList.contains("hide"))
                document.getElementById("prodNameValidationError").classList.add("hide");
        }
        return isValid;
    }  

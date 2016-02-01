$(document).ready(function() {
	var empArray = [];
	var totalSalary = 0.00;		// globar variable to track our salary total

	$('#employeeForm').on('submit', function(event) {
		event.preventDefault();
		var values = {};

		$.each($('#employeeForm').serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});

		//$(values).data(empArray);

		// Add this employee to our list
		empArray.push(values);
		console.log(empArray);

		// update salary total with this employee's salary
		totalSalary += values.empYearlySalary / 12;
		
		// update DOM salary element		
		// Look up the jquery text() method to update the #salary DOM element
		$('#salary').text(totalSalary);

		// add this employee to the DOM
		appendDom(values);

		// wipe the form input fields
		$('#employeeForm').find('input[type=text]').val('');
		
	});

	$('#container').on('click', 'button', function() {
		$(this).closest('#container').children().last().remove();
    });


	function appendDom(empInfo) {
		$('#container').append('<div></div>');
		var $el = $('#container').children().last();

		$el.append('<p>' + empInfo.empFirstName + '</p>');
		$el.append('<p>' + empInfo.empLastName + '</p>');
		$el.append('<p>' + empInfo.empIdNumber + '</p>');
		$el.append('<p>' + empInfo.empJobTitle + '</p>');
		$el.append('<p>' + empInfo.empYearlySalary + '</p>');
		
	}

});
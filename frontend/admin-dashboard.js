document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            // Sample events
            {
                title: 'Appointment with John Doe',
                start: '2024-05-10T10:30:00',
                end: '2024-05-10T12:30:00',
                description: 'Routine check-up'
            },
            {
                title: 'Vaccination Drive',
                start: '2024-05-15',
                end: '2024-05-17'
            },
            {
                title: 'Appointment with Jane Smith',
                start: '2024-05-20T14:00:00',
                end: '2024-05-20T15:00:00',
                description: 'Dental consultation'
            }
        ],
        eventClick: function(info) {
            // Display event details on click
            alert('Event: ' + info.event.title + '\nDescription: ' + (info.event.extendedProps.description || 'No description.'));
        }
    });

    calendar.render();
});
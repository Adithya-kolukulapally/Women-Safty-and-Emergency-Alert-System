document.addEventListener("DOMContentLoaded", function () {

    const panicBtn = document.getElementById("panicBtn");

    if (panicBtn) {

        panicBtn.addEventListener("click", function () {

            if (navigator.geolocation) {

                navigator.geolocation.getCurrentPosition(function(position) {

                    document.getElementById("latitude").value = position.coords.latitude;
                    document.getElementById("longitude").value = position.coords.longitude;

                    document.getElementById("panicForm").submit();

                }, function(error) {

                    alert("Unable to get location. Please allow location access.");

                });

            } else {

                alert("Geolocation is not supported by this browser.");

            }

        });

    }

});
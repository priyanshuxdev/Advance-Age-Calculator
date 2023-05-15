function calAge() {

    const dayEl = document.getElementById("day").value;
    const monthEl = document.getElementById("month").value;
    const yearEl = document.getElementById("year").value;

    const showYear = document.getElementById("YY");
    const showMonth = document.getElementById("MM");
    const showDay = document.getElementById("DD");

    const dob = new Date(yearEl, monthEl, dayEl);

    const dobYear = dob.getFullYear();
    const dobMonth = dob.getMonth();
    const dobDay = dob.getDate();

    const currentDate = new Date();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    let ageYear = currentYear - dobYear;
    let ageMonth = currentMonth - dobMonth;
    let ageDay = currentDay - dobDay;

    if (ageMonth < 0 || ageMonth === 0 && currentDay < dobDay) {
        ageYear--;
        let newAgeMonth = currentMonth + 12;
        let newAgeDay = currentDay + 31;

        ageMonth = newAgeMonth - dobMonth;
        ageDay = newAgeDay - dobDay;
    }

    // function valid() {
    //     let inputs = document.querySelectorAll("input");

    //     inputs.forEach((i) => {
    //         if (!i.value) {
    //             i.style.borderColor = "red";
    //             let smallT = document.querySelectorAll("small");
    //             smallT.textContent = "This field is required"
    //             smallT.classList.add("smlp");
    //         }
    //     });
    // }

    showYear.textContent = ageYear;
    showMonth.textContent = ageMonth;
    showDay.textContent = ageDay




}
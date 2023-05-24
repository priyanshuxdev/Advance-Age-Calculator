function calAge() {

    const day_div = document.getElementById("day_div");
    const month_div = document.getElementById("month_div");
    const year_div = document.getElementById("year_div");

    const dayEl = document.getElementById("day").value;
    const monthEl = document.getElementById("month").value;
    const yearEl = document.getElementById("year").value;

    const showYear = document.getElementById("YY");
    const showMonth = document.getElementById("MM");
    const showDay = document.getElementById("DD");


    if (!dayEl || dayEl > 31) {
        day_div.classList.add("invalid");
        $("#day_div p").text("this field is required");

        if (dayEl > 31) {
            $("#day_div p").text("Must be a valid day");
        }

    } else {
        day_div.classList.remove("invalid");
    }

    if (!monthEl || monthEl > 12) {
        month_div.classList.add("invalid");
        $("#month_div p").text("this field is required");

        if (monthEl > 12) {
            $("#month_div p").text("Must be a valid month");
        }

    } else {
        month_div.classList.remove("invalid");
    }

    if (!yearEl || yearEl > 2100) {
        year_div.classList.add("invalid");
        $("#year_div p").text("this field is required");

        if (yearEl > 2100) {
            $("#year_div p").text("Must be in the past");
        }

    } else {
        month_div.classList.remove("invalid");
    }

    if (!dayEl || !monthEl || !yearEl) return;


    const dob = new Date(yearEl, monthEl, dayEl);

    const dobYear = dob.getFullYear();
    const dobMonth = dob.getMonth();
    const dobDay = dob.getDate();

    const currentDate = new Date();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let ageYear = currentYear - dobYear;
    let ageMonth = currentMonth - dobMonth;
    let ageDay = currentDay - dobDay;

    if (ageMonth < 0 || ageMonth === 0) {

        ageYear--;
        let newAgeMonth = currentMonth + 12;
        ageMonth = newAgeMonth - dobMonth;

        if (currentDay < dobDay) {
            let newAgeDay = currentDay + 31;
            ageDay = newAgeDay - dobDay;
        }

    } else {
        ageMonth = currentMonth - dobMonth;
        ageDay = currentDay - dobDay;
    }

    showYear.textContent = ageYear;
    showMonth.textContent = ageMonth;
    showDay.textContent = ageDay;
}


// document.querySelectorAll("input").forEach(el => {
//     el.addEventListener("input", () =>{
//         calAge();
//     })
// });

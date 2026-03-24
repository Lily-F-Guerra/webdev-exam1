// NOTE: You may use the sample user in the data/user.json file to test your code before your hit the API. 
// Write your code below.

//I WAS MISSING THE FLIPPIN HASHTAG
$("#next-btn").click(function(){
    
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then((user) => {
        var firstName = user.results.name.first;
        var lastName = user.results.name.last;
        console.log(user.results.name.first);
        $("#name").text(firstName + " " + lastName);

        var email = user.results.email;
        $("#email").text(email);

        const city = user.results.location.city;
        const state = user.results.location.state;
        const country = user.results.location.country;
        $("address").innerHTML = city + ", " + state + ", " + country;

        $(".image img").attr("src", user.results.picture.large);

        const gender = user.results.gender;
        if (gender === male){
            $(".body").color = steelblue;
        }
        else {
            $(".body").css("background-color", "rebeccapurple");
        }

        const age = user.results.dob.age;
        $("age").innerText = age;

        const mobile = user.results.cell;
        const cellNum = createElement(p);
        $("age").appendChild(cellNum);
        cellNum.innerText = mobile;
    })
})


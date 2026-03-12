// NOTE: You may use the sample user in the data/user.json file to test your code before your hit the API. 
// Write your code below.

$("next-btn").click(()=>{
    fetch("https://randomuser.me/api/")
    .then(response => response.json)
    .then((user) => {
    //$.get("https://randomuser.me/api/", function(response){
        const firstName = user.results.name.first;
        const lastName = user.results.name.last;
        console.log(firstName);
        $("name").innerText = firstName + " " + lastName;

        const email = user.results.email;
        $("email").innerText = email;

        const city = user.results.location.city;
        const state = user.results.location.state;
        const country = user.results.location.country;
        $("address").innerText = city + ", " + state + ", " + country;

        const pfp = user.results.picture.thumbnail;
        //TODO figure out how to change the picture link

        const gender = user.results.gender;
        if (gender === male){
            $(".body").color = steelblue;
        }
        else {
            $(".body").color = rebeccapurple;
        }

        const age = user.results.dob.age;
        $("age").innerText = age;

        const mobile = user.results.cell;
        const cellNum = createElement(p);
        $("age").appendChild(cellNum);
        cellNum.innerText = mobile;
    })
})


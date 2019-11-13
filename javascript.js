const users = [
    {
        id: 1111,
        name: "Nadine Schaefer",
        gender: "female",
        age: 30,
        height: 170,
        location: "Haifa",
        hobbies: ["Sing", "Guitar"],
        image: "images/1.jpg",
        premium: true
    },
    {
        id: 2222,
        name: "Tommie Hensley",
        gender: "female",
        age: 29,
        height: 168,
        location: "Tel Aviv",
        hobbies: ["Sing", "Guitar"],
        image: "images/2.jpg",
        premium: true
    },
    {
        id: 3333,
        name: "Karla Brock",
        gender: "female",
        age: 29,
        height: 154,
        location: "Tel Aviv",
        hobbies: ["Sing", "Dance"],
        image: "images/3.jpg",
        premium: true
    },
    {
        id: 4444,
        name: "Lilian Barajas",
        gender: "female",
        age: 19,
        height: 150,
        location: "Jaffa",
        hobbies: ["Piano", "Dance"],
        image: "images/4.jpg",
        premium: true
    },
    {
        id: 5555,
        name: "Allie Salazar",
        gender: "female",
        age: 22,
        height: 167,
        location: "HaYogev",
        hobbies: ["Piano", "Dance"],
        image: "images/5.jpg",
        premium: true
    },
    {
        id: 6666,
        name: "Ronda Church",
        gender: "female",
        age: 31,
        height: 163,
        location: "Hazorea",
        hobbies: ["Yoga", "Dance"],
        image: "images/6.jpg",
        premium: true
    },
    {
        id: 7777,
        name: "Imelda Sampson",
        gender: "female",
        age: 32,
        height: 170,
        location: "Haifa",
        hobbies: ["Sing", "Yoga"],
        image: "images/7.jpg",
        premium: true
    },
    {
        id: 8888,
        name: "Winnie Huffman",
        gender: "female",
        age: 40,
        height: 178,
        location: "Yokneam",
        hobbies: ["Sing", "Pilates"],
        image: "images/8.jpg",
        premium: true
    },
    {
        id: 9999,
        name: "Ginger Mccarthy",
        gender: "female",
        age: 26,
        height: 168,
        location: "Tel Aviv",
        hobbies: ["Sing", "Yoga"],
        image: "images/9.jpg",
        premium: true
    },
    {
        id: 1010,
        name: "Susanna Estrada",
        gender: "female",
        age: 25,
        height: 165,
        location: "Jaffa",
        hobbies: ["Read", "Dance"],
        image: "images/10.jpg",
        premium: true
    },
    {
        id: 1212,
        name: "Robby Galloway",
        gender: "male",
        age: 33,
        height: 178,
        location: "Tel Aviv",
        hobbies: ["Read", "Dance"],
        image: "images/11.jpg",
        premium: true
    },
    {
        id: 1313,
        name: "Grover Hahn",
        gender: "male",
        age: 33,
        height: 187,
        location: "Jaffa",
        hobbies: ["Read", "Dance"],
        image: "images/12.jpg",
        premium: true
    },
    {
        id: 1414,
        name: "Monroe Sexton",
        gender: "male",
        age: 32,
        height: 169,
        location: "Tel Aviv",
        hobbies: ["Read", "Dance"],
        image: "images/13.jpg",
        premium: true
    },
    {
        id: 1515,
        name: "Lynn Garrett",
        gender: "male",
        age: 29,
        height: 182,
        location: "Haifai",
        hobbies: ["Read", "Dance"],
        image: "images/14.jpg",
        premium: true
    },
    {
        id: 1616,
        name: "Delmar Lindsey",
        gender: "male",
        age: 24,
        height: 176,
        location: "Hadera",
        hobbies: ["Read", "Dance"],
        image: "images/15.jpg",
        premium: true
    },
    {
        id: 1717,
        name: "Milo Gonzales",
        gender: "male",
        age: 19,
        height: 190,
        location: "Afula",
        hobbies: ["Read", "Dance"],
        image: "images/16.jpg",
        premium: true
    },
    {
        id: 1818,
        name: "Hosea Koch",
        gender: "male",
        age: 25,
        height: 165,
        location: "Afula",
        hobbies: ["Read", "Dance"],
        image: "images/17.jpg",
        premium: true
    },
    {
        id: 1919,
        name: "Hayden Watts",
        gender: "male",
        age: 30,
        height: 180,
        location: "Haifa",
        hobbies: ["Read", "Dance"],
        image: "images/18.jpg",
        premium: false
    },
    {
        id: 2020,
        name: "Clyde Grant",
        gender: "male",
        age: 27,
        height: 178,
        location: "Haifa",
        hobbies: ["Surfing", "Dance"],
        image: "images/19.jpg",
        premium: false
    },
    {
        id: 2121,
        name: "Doyle Prince",
        gender: "male",
        age: 26,
        height: 175,
        location: "Jaffa",
        hobbies: ["Read", "Yoga"],
        image: "images/20.jpg",
        premium: false
    }
]

var buttons = `<div class="col-xs-6 centeredDiv">
                <a href="#" class="btn btn-info btn-lg">
                    <span class="glyphicon glyphicon-heart" onclick="heartBtn()"></span> 
                </a>
                </div>
                <div class="col-xs-6 centeredDiv">
                <a href="#" class="btn btn-info btn-lg">
                    <span class="glyphicon glyphicon-arrow-right" onclick="arrowBtn()"></span> 
                </a>
                </div>`;

usersArray = new MainApp(users);

var mainList;
var minAge;
var maxAge;
var gender;
var filterRules;

class Profile {
    constructor(id, name, gender, age, height, location, image, premium) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.height = height;
        this.location = location;
        this.image = image;
        this.premium = premium;
    }

    render() {
        let temp = "";
        temp += "<p>" + this.name + "</p>";
        temp += "<img src=" + this.image + " />";
        temp += "<p>Age: " + this.age + "</p>";
        temp += "<p>Height: " + this.height + "</p>";
        temp += "<p>Location: " + this.location + "</p>";
        return temp;
    }
}

class Premium extends Profile {
    constructor(id, name, gender, age, height, location, image, premium, hobbies) {
        super(id, name, gender, age, height, location, image, premium);
        this.hobbies = hobbies;
    }

    render() {
        let temp = super.render();
        temp += "<p>Hobbies: </p>";
        temp += "<p>";
        this.hobbies.forEach((element) => {
            temp += element + " ";
        })
        temp += "</p>";
        return temp;
    }
}

class MainApp {
    constructor(users) {
        this.mainAppUsers = [];
        users.forEach((element) => {
            if (element.premium == true) {
                let tempUser = new Premium(element.id, element.name, element.gender, element.age, element.height, element.location, element.image, element.premium, element.hobbies)
                this.mainAppUsers.push(tempUser);
            } else {
                let tempUser = new Profile(element.id, element.name, element.gender, element.age, element.height, element.location, element.image, element.premium)
                this.mainAppUsers.push(tempUser);
            }
        })
    }

    filter(filterRules) {
        let newList = this.mainAppUsers.filter((user) => {
            if (user.age >= filterRules.minAge && user.age <= filterRules.maxAge && user.gender == filterRules.gender) {
                return true;
            } else {
                return false;
            }
        })

        return newList;
    }

    static next(list) {
        if (list[0] == null) {
            $("#noMoreMatch").dialog({
                width: 600,
                height: 600,
                buttons: {
                    "OK": function () {
                        $(this).dialog("close");
                    }
                }
                });
            initMain();
            document.getElementById("buttonsDiv").innerHTML = "";
            return;
        } else {
            return list.pop();
        }
        
    }

    static render(list) {
        return list.slice(-1).pop()
    }
}

function generateList() {

    minAge = document.getElementById("minAge").value;
    maxAge = document.getElementById("maxAge").value;
    gender = document.getElementById("gender").value;
    filterRules = { minAge: minAge, maxAge: maxAge, gender: gender }
    mainList = usersArray.filter(filterRules);
    if (mainList == "") {
        $("#noMatch").dialog({
            width: 600,
            height: 600,
            buttons: {
                "OK": function () {
                    $(this).dialog("close");
                }
            }
        });
    } else {
        let next = MainApp.next(mainList).render();
        document.getElementById("mainDiv").innerHTML = next;
        document.getElementById("buttonsDiv").innerHTML = buttons;
    }
    
}

function initMain() {
    let mainForm = `<form>
                    Interested in:<br />
                    <select id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br /><br />
                    Minimum Age:<br />
                    <input type="number" id="minAge">
                    <br /><br />
                    Maximum Age:<br />
                    <input type="number" id="maxAge">
                    <br /><br />
                    <hr />
                    <div class="text-center">
                    <a href="#" class="btn btn-info btn-lg" onclick="generateList()">
                    <span class="glyphicon glyphicon-search" ></span> Find 
                    </a>
                    </div>
                    </form>`
    document.getElementById("mainDiv").innerHTML = mainForm;
}

function heartBtn() {
    let next = MainApp.next(mainList).render();
    document.getElementById("mainDiv").innerHTML = next;
}

function arrowBtn() {
    let next = MainApp.next(mainList).render();
    document.getElementById("mainDiv").innerHTML = next;
}

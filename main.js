let name_field = document.getElementById("fname")
let surname_field = document.getElementById("lname")
let fav_color_field = document.getElementById("fav_color")
let animal_name_field = document.getElementById("cat_name")
let button = document.getElementById("generate_pass")
let clear_button = document.getElementById("clear")
let new_pass = document.getElementById("newPass")
let fname
let surname
let fav_color
let animal_name
let special_character = ["!", "%", "$", "&", "#"]


clear_button.onclick = () => {
    new_pass.innerText = ""
}

button.onclick = () => {
    fname = name_field.value
    surname = surname_field.value
    animal_name = animal_name_field.value
    fav_color = fav_color_field.value
    let datalist = [fname, surname, animal_name, fav_color]
    let twoRandomValues = []
    let random_number = Math.floor(Math.random() * 100)
    let random_special_character = special_character[Math.floor(Math.random() * special_character.length)]
    for (i = 0; i < 2; i++) {
        let randomIndex = Math.floor(Math.random() * datalist.length)
        twoRandomValues.push(datalist[randomIndex])

    }

    console.log(twoRandomValues)
    if (twoRandomValues[0] != "") {
        new_pass.innerText = (twoRandomValues[0] + twoRandomValues[1] + random_number + random_special_character)
    }

    else {
        alert("Con cosa te la genero la password se non inserisci i dati?")
    }

}


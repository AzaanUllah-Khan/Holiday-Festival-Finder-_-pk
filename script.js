var festivalName = document.getElementById('festival');
var festivalImage = document.getElementById('festivalImg');
var date = document.getElementById('inp');


var today = new Date();
var year = today.getFullYear();
var month = String(today.getMonth() + 1).padStart(2, '0');
var day = String(today.getDate()).padStart(2, '0');
var formattedDate = year + '-' + month + '-' + day;

function passedOrUpcoming(){
    if(date.value<formattedDate){
        document.getElementById('staus').innerHTML = "Passed";
        document.getElementById('staus').style.color = "red";
    }
    else if(date.value>formattedDate){
        document.getElementById('staus').innerHTML = "Up-Coming";
        document.getElementById('staus').style.color = "Green";
    }
    else{
        document.getElementById('staus').innerHTML = "Today!";
        document.getElementById('staus').style.color = "orange";
        console.log(date.value);
        console.log(formattedDate);
    }
}


function find() {
    var value = date.value;
    if (value === '2023-01-01') {
        passedOrUpcoming()
        festivalName.innerHTML = "New Year";
        festivalImage.src = "https://static.toiimg.com/photo/msid-96536218/96536218.jpg"
    }
    else if (value === '2023-02-05') {
        passedOrUpcoming()
        festivalName.innerHTML = "Kashmir Day";
        festivalImage.src = "https://img.freepik.com/free-vector/hand-drawn-kashmir-day-illustration_23-2149231994.jpg?w=2000"
    }
    else if (value === '2023-02-19') {
        passedOrUpcoming()
        festivalName.innerHTML = "Shab-e-Meraaj";
        festivalImage.src = "https://islamkidunya.com/wp-content/uploads/2023/02/Islamic-Quotes-to-Comfort-Broken-Heart-Sadness-4.jpg"
    }
    else if (value === '2023-03-07') {
        passedOrUpcoming()
        festivalName.innerHTML = "Holi";
        festivalImage.src = "https://static.toiimg.com/photo/msid-98479338/98479338.jpg"
    }
    else if (value === '2023-03-08') {
        passedOrUpcoming()
        festivalName.innerHTML = "Shab-e-Baraat";
        festivalImage.src = "https://muslimaid-2022.storage.googleapis.com/upload/img_cache/file-27502-a2818f224f3d94e1c1a9ec5dc8faa0ba.jpg"
    }
    else if (value === '2023-03-23') {
        passedOrUpcoming()
        festivalName.innerHTML = "Ramadan / " + "<br>" + "Pakistan Day";
        festivalImage.src = "https://media.islamicity.org/wp-content/uploads/2023/01/ramadan-quran.jpg"
    }
    else if (value === '2023-04-22') {
        passedOrUpcoming()
        festivalName.innerHTML = "Eid-ul-Fitr";
        festivalImage.src = "https://img.freepik.com/free-vector/realistic-eid-al-fitr-illustration_52683-59773.jpg?w=2000"
    }
    else if (value === '2023-05-01') {
        passedOrUpcoming()
        festivalName.innerHTML = "Labour Day";
        festivalImage.src = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2680a079587389.5cc81072af739.jpg"
    }
    else if (value === '2023-05-09') {
        passedOrUpcoming()
        festivalName.innerHTML = "Teacher's Day";
        festivalImage.src = "https://media.istockphoto.com/id/1171427165/vector/world-teachers-day-lettering-greeting-card.jpg?s=612x612&w=0&k=20&c=4Mw0jnHURrO8OZob2nppVIiui3e11_pkf1-67J3hqnU="
    }
    else if (value === '2023-05-10') {
        passedOrUpcoming()
        festivalName.innerHTML = "My Birthday";
        festivalImage.src = "https://avatars.githubusercontent.com/u/121516991?v=4"
    }
    else if (value === '2023-05-14') {
        passedOrUpcoming()
        festivalName.innerHTML = "Mother's Day";
        festivalImage.src = "https://static.vecteezy.com/system/resources/previews/004/549/300/original/happy-mother-day-cute-background-with-flowers-illustration-free-vector.jpg"
    }
    else if (value === '2023-06-29') {
        passedOrUpcoming()
        festivalName.innerHTML = "Eid-ul-Adha";
        festivalImage.src = "https://static.toiimg.com/photo/msid-84555424/84555424.jpg"
    }
    else if (value === '2023-06-18') {
        passedOrUpcoming()
        festivalName.innerHTML = "Father's Day";
        festivalImage.src = "https://img.freepik.com/free-vector/fathers-day-greeting-card_1017-19231.jpg"
    }
    else if (value === '2023-07-27') {
        passedOrUpcoming()
        festivalName.innerHTML = "Ashura";
        festivalImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ashura_2016_mourning_in_Imam_Hossein_Square%2C_Tehran_02.jpg/640px-Ashura_2016_mourning_in_Imam_Hossein_Square%2C_Tehran_02.jpg"
    }
    else if (value === '2023-08-14') {
        passedOrUpcoming()
        festivalName.innerHTML = "Independence Day";
        festivalImage.src = "https://cdn.techjuice.pk/wp-content/uploads/2022/08/1-1.png"
    }
    else if (value === '2023-09-06') {
        passedOrUpcoming()
        festivalName.innerHTML = "Defence Day";
        festivalImage.src = "https://img.freepik.com/free-vector/6th-september-defence-day-background_1057-1651.jpg"
    }
    else if (value === '2023-09-27') {
        passedOrUpcoming()
        festivalName.innerHTML = "Eid - milad - un - Nabi";
        festivalImage.src = "https://static.toiimg.com/thumb/msid-94691477,width-400,resizemode-4/94691477.jpg"
    }
    else if (value === '2023-11-09') {
        passedOrUpcoming()
        festivalName.innerHTML = "Iqbal Day";
        festivalImage.src = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/634d11129518103.616d2eab9309e.jpg"
    }
    else if (value === '2023-11-12') {
        passedOrUpcoming()
        festivalName.innerHTML = "Diwali";
        festivalImage.src = "https://media.cnn.com/api/v1/images/stellar/prod/221021144246-diwali-lights-stock.jpg?c=3x2"
    }
    else if (value === '2023-12-25') {
        passedOrUpcoming()
        festivalName.innerHTML = "Quaid Day / " + "<br>" + "Christmas";
        festivalImage.src = "https://i.natgeofe.com/k/dfc7bec2-0657-4887-81a7-6d024a8c3f70/WH-XmasTree_2x1.jpg"
    }
    else {
        alert("festival you are looking for is not in the list")
        location.reload()
    }
}


// searching by name



function search(){
    var festivalAlert = prompt("Search for a Festival").toUpperCase()
    if (festivalAlert == "NEW YEAR") {
        passedOrUpcoming()
        date.value = '2023-01-01'
        festivalName.innerHTML = "New Year";
        festivalImage.src = "https://static.toiimg.com/photo/msid-96536218/96536218.jpg"
    }
    else if (festivalAlert == "KASHMIR DAY") {
        passedOrUpcoming()
        date.value = '2023-02-05'
        festivalName.innerHTML = "Kashmir Day";
        festivalImage.src = "https://img.freepik.com/free-vector/hand-drawn-kashmir-day-illustration_23-2149231994.jpg?w=2000"
    }
    else if (festivalAlert == "SHAB-E-MERAAJ") {
        passedOrUpcoming()
        date.value = '2023-02-19'
        festivalName.innerHTML = "Shab-e-Meraaj";
        festivalImage.src = "https://islamkidunya.com/wp-content/uploads/2023/02/Islamic-Quotes-to-Comfort-Broken-Heart-Sadness-4.jpg"
    }
    else if (festivalAlert == "HOLI") {
        passedOrUpcoming()
        date.value = '2023-03-07'
        festivalName.innerHTML = "Holi";
        festivalImage.src = "https://static.toiimg.com/photo/msid-98479338/98479338.jpg"
    }
    else if (festivalAlert == "SHAB-E-BARAAT") {
        passedOrUpcoming()
        date.value = '2023-03-08'
        festivalName.innerHTML = "Shab-e-Baraat";
        festivalImage.src = "https://muslimaid-2022.storage.googleapis.com/upload/img_cache/file-27502-a2818f224f3d94e1c1a9ec5dc8faa0ba.jpg"
    }
    else if (festivalAlert == "RAMADAN" || festivalAlert == "PAKISTAN DAY") {
        passedOrUpcoming()
        date.value = '2023-03-23'
        festivalName.innerHTML = "Ramadan / " + "<br>" + "Pakistan Day";
        festivalImage.src = "https://media.islamicity.org/wp-content/uploads/2023/01/ramadan-quran.jpg"
    }
    else if (festivalAlert == "EID-UL-FITR") {
        passedOrUpcoming()
        date.value = '2023-04-22'
        festivalName.innerHTML = "Eid-ul-Fitr";
        festivalImage.src = "https://img.freepik.com/free-vector/realistic-eid-al-fitr-illustration_52683-59773.jpg?w=2000"
    }
    else if (festivalAlert == "LABOUR DAY") {
        passedOrUpcoming()
        date.value = '2023-05-01'
        festivalName.innerHTML = "Labour Day";
        festivalImage.src = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2680a079587389.5cc81072af739.jpg"
    }
    else if (festivalAlert == "TEACHER'S DAY") {
        passedOrUpcoming()
        date.value = '2023-05-09'
        festivalName.innerHTML = "Teacher's Day";
        festivalImage.src = "https://media.istockphoto.com/id/1171427165/vector/world-teachers-day-lettering-greeting-card.jpg?s=612x612&w=0&k=20&c=4Mw0jnHURrO8OZob2nppVIiui3e11_pkf1-67J3hqnU="
    }
    else if (festivalAlert == "MY BIRTHDAY") {
        passedOrUpcoming()
        date.value = '2023-05-10'
        festivalName.innerHTML = "My Birthday";
        festivalImage.src = "https://avatars.githubusercontent.com/u/121516991?v=4"
    }
    else if (festivalAlert == "MOTHER'S DAY") {
        passedOrUpcoming()
        date.value = '2023-05-14'
        festivalName.innerHTML = "Mother's Day";
        festivalImage.src = "https://static.vecteezy.com/system/resources/previews/004/549/300/original/happy-mother-day-cute-background-with-flowers-illustration-free-vector.jpg"
    }
    else if (festivalAlert == "EID-UL-ADHA") {
        passedOrUpcoming()
        date.value = '2023-06-29'
        festivalName.innerHTML = "Eid-ul-Adha";
        festivalImage.src = "https://static.toiimg.com/photo/msid-84555424/84555424.jpg"
    }
    else if (festivalAlert == "FATHER'S DAY") {
        passedOrUpcoming()
        date.value = '2023-06-18'
        festivalName.innerHTML = "Father's Day";
        festivalImage.src = "https://img.freepik.com/free-vector/fathers-day-greeting-card_1017-19231.jpg"
    }
    else if (festivalAlert == "ASHURA") {
        passedOrUpcoming()
        date.value = '2023-07-27'
        festivalName.innerHTML = "Ashura";
        festivalImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ashura_2016_mourning_in_Imam_Hossein_Square%2C_Tehran_02.jpg/640px-Ashura_2016_mourning_in_Imam_Hossein_Square%2C_Tehran_02.jpg"
    }
    else if (festivalAlert == "INDEPENDENCE DAY") {
        passedOrUpcoming()
        date.value = '2023-08-14'
        festivalName.innerHTML = "Independence Day";
        festivalImage.src = "https://cdn.techjuice.pk/wp-content/uploads/2022/08/1-1.png"
    }
    else if (festivalAlert == "DEFENCE DAY") {
        passedOrUpcoming()
        date.value = '2023-09-06'
        festivalName.innerHTML = "Defence Day";
        festivalImage.src = "https://img.freepik.com/free-vector/6th-september-defence-day-background_1057-1651.jpg"
    }
    else if (festivalAlert == "EID-MILAD-UN-NABI") {
        passedOrUpcoming()
        date.value = '2023-09-27'
        festivalName.innerHTML = "Eid - milad - un - Nabi";
        festivalImage.src = "https://static.toiimg.com/thumb/msid-94691477,width-400,resizemode-4/94691477.jpg"
    }
    else if (festivalAlert == "IQBAL DAY") {
        passedOrUpcoming()
        date.value = '2023-11-09'
        festivalName.innerHTML = "Iqbal Day";
        festivalImage.src = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/634d11129518103.616d2eab9309e.jpg"
    }
    else if (festivalAlert == "DIWALI") {
        passedOrUpcoming()
        date.value = '2023-11-12'
        festivalName.innerHTML = "Diwali";
        festivalImage.src = "https://media.cnn.com/api/v1/images/stellar/prod/221021144246-diwali-lights-stock.jpg?c=3x2"
    }
    else if (festivalAlert == "CHRISTMAS" || festivalAlert == "QUAID-E-AZAM BIRTHDAY") {
        passedOrUpcoming()
        date.value = '2023-12-25'
        festivalName.innerHTML = "Quaid Day / " + "<br>" + "Christmas";
        festivalImage.src = "https://i.natgeofe.com/k/dfc7bec2-0657-4887-81a7-6d024a8c3f70/WH-XmasTree_2x1.jpg"
    }
    else {
        alert("festival you are looking for is not in the list")
        location.reload()
    }
}
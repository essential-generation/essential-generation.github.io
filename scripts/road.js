function gen(){
    var name = ["Wade","Dominic","Dominick","Derek","Alex","Alexander","Marcus","Markus","Arnold","Aaron","Abraham","Adam","Albert","Earl","Greg","Gregory","Alan","Allan","Allen","Andy","Oliver","Nolan","Joel","Noah","Nigel","Bryce","Dave","Darren","Daryl","David","Dean","Donald","Marshall","Doug","Douglas","Drew","Luke","Lucas","Paul","Dante","Donte","Elias","Franklin","Frank","Jack","Zach","Zack","Zachary","Zackary","Patrick","Pat","Owen","Peter","Pete","Will","Stuart","Steven","Steve","Vince","Vincent","Trevor","Trey","Trent","Trenton","Todd","John","Joe","Shawn","Sean","James","Jaymes","Kyle","Tom","Wyatt","Aldo","Fred","Alfred","Blaine","Benny","Bennie","Brad","Bradley","Bradly","Bryan","Brian","Brent","Brenton","Caleb","Kaleb","Kris","Cris","Chris","Carl","Karl","Claude","Clay","Clayton","Clement","Cliff","Clifford","Dale","Dallas","Dalton","Curt","Curtis","Danny","Dan","Daniel","Danial","Daron","Darron","Denny","Dennis","Derrick","Derick","Dominique","Dom","Dustin","Dusty","Gerald","Gilbert","Brett","Nate","Nathan","Bob","Anthony","Heath","Bruno","Bill","Aaliyah","Aliyah","Alyssa","Alissa","Abbi","Abby","Abbey","Abigail","Addison","Ally","Ali","Aileen","Megan","Meg","Bianca","Becky","Becca","Belle","Bella","Beverly","Alexa","Nia","Amy","Calia","Kalia","Katelyn","Kaitlyn","Caitlyn","Sam","Sammy","Rose","Rosie","Jasmin","Yasmin","Tara","Tina","Trinity","Kayla","Marley","Dakota","Marcie","Lois","Adrianna","Denise","Candace","Cherri","Cherrie","Chelsea","Lindsey","Lindsay","Lyndsey","Christina","Emily","Emmly","Sierra","Lorey","Lori","Cori","Corie","Eileen","Arielle","Ariell","April","Brooke","Brooklyn","Kate","Rebecca","Laura","Jadyn","Daisy","Dee","Ella","Elisa","Elyssa","Nikki","Haylie","Hailey","Hallie","Heather","Smith","Jones","Taylor","Williams","Brown","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Lewis","Walker","Thompson","Watson","Jackson","Cooper","Wright","Green","Greene","Harris","Harrison","Lee","Martin","Clarke","Clark","James","Morgan","Hughes","Edwards","Hill","Moore","Scott","Young","Morris","Turner","Carter","Phillips","Mitchell","Anderson","Adams","Campbell","Davis","Miller","Marshall","Bennett","Richardson","Richards","Robertson","Reynolds","Reid","Ellis","Palmer","Graham","Stewart","Holmes","Stevens","Stevenson","Andrews","Atkins","Adkins","Owens","Knight","Harvey","Berry","Harper","Brooks","Brooke","Lawson","Fletcher","Burns","Jordan","Hopkins","McMahon","McDonald","McMillan","Ambrose","Doyle","Cooke","Long","Lopez","Lynch","Hawkins","Tucker","Patterson","Howe","Daniels","Danielson","Howell","Finch","Bown","Browne","Jacobs","Bowen","Silva","Walsh","Walch","Griffin","Peak","Steele","Wyatt","Perkins","Osborn","Osburn","Osbourne","Vaughan","Gaughan","Johns","Connors","Rhodes","Lang","Laing","Lovell","Glenn","Melone","Malone","Gould","Townley","Bullock","Herbert","Britton","O'Donnell","O'Neil","O'Neal","Dowling","Maxon","Clifton","Cena","Ackerman","Knox","Gaynor","Ansley","Hernandez","Wise","Mann","Hoffman","Park","Center","Main","Westfare","Silverville","Fallsworth","Rainbow","Spring","Market","New","Lilac","Dogwood","Colonial","King","Queen","Kings","Queens","Queensworth","North","South","East","West","1st","First","2nd","Second","3rd","Third","4th","Fourth","5th","Fifth","6th","Sixth","7th","Seventh","8th","Eighth","9th","Ninth","10th","Tenth","11th","Eleventh","12th","Twelfth","13th","Thirteenth","14th","Fourteenth","15th","Fifteenth","Sycamore","Sheriff","Edgewood","Officer","Fulton","Fieldstone","Woodstone","Order","Bush","Tree","Silverville","Silver","Platinum","Bronzewell","Bronze","Flowerfield","Bury","Monument","Statue"];
    var suffix = ["Terrace","Street","Street North","Street South","Street East","Street West","Road","Place","Avenue","Avenue North","Avenue South","Avenue East","Avenue West","Highway","Parkway","Boulevard","Circle","Drive","Court","Freeway","Expressway","Lane"];
    var namea = Math.floor(Math.random() * name.length);
    var suffixa = Math.floor(Math.random() * suffix.length);
    var nameb = name[namea];
    var suffixb = suffix[suffixa];
    document.getElementById("road").innerHTML = nameb + " " + suffixb;
}

function malename(){
  var fnames = ["Wade","Dominic","Dominick","Derek","Alex","Alexander","Marcus","Markus","Arnold","Aaron","Abraham","Adam","Albert","Earl","Greg","Gregory","Alan","Allan","Allen","Andy","Oliver","Nolan","Joel","Noah","Nigel","Bryce","Dave","Darren","Daryl","David","Dean","Donald","Marshall","Doug","Douglas","Drew","Luke","Lucas","Paul","Dante","Donte","Elias","Franklin","Frank","Jack","Zach","Zack","Zachary","Zackary","Patrick","Pat","Owen","Peter","Pete","Will","Stuart","Steven","Steve","Vince","Vincent","Trevor","Trey","Trent","Trenton","Todd","Thomas","John","Joe","Shawn","Sean","James","Jaymes","Kyle","Tom","Wyatt","Aldo","Fred","Alfred","Blaine","Benny","Bennie","Brad","Bradley","Bradly","Bryan","Brian","Brent","Brenton","Caleb","Kaleb","Kris","Cris","Chris","Carl","Karl","Claude","Clay","Clayton","Clement","Cliff","Clifford","Dale","Dallas","Dalton","Curt","Curtis","Danny","Dan","Daniel","Danial","Daron","Darron","Denny","Dennis","Derrick","Derick","Dominique","Dom","Dustin","Dusty","Gerald","Gilbert","Brett","Nate","Nathan","Bob","Anthony","Heath","Bruno","Bill"];
  var lnames = ["Smith","Jones","Taylor","Williams","Brown","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Lewis","Walker","Thompson","Watson","Jackson","Cooper","Wright","Green","Greene","Harris","Harrison","Lee","Martin","Clarke","Clark","James","Morgan","Hughes","Edwards","Hill","Moore","Scott","Young","Morris","Turner","Carter","Phillips","Mitchell","Anderson","Adams","Campbell","Davis","Miller","Marshall","Bennett","Richardson","Richards","Robertson","Reynolds","Reid","Ellis","Palmer","Graham","Stewart","Holmes","Stevens","Stevenson","Andrews","Atkins","Adkins","Owens","Knight","Harvey","Berry","Harper","Brooks","Brooke","Lawson","Fletcher","Burns","Jordan","Hopkins","McMahon","McDonald","McMillan","Ambrose","Doyle","Cooke","Long","Lopez","Lynch","Hawkins","Tucker","Patterson","Howe","Daniels","Danielson","Howell","Finch","Bown","Browne","Jacobs","Bowen","Silva","Walsh","Walch","Griffin","Peak","Steele","Wyatt","Perkins","Osborn","Osburn","Osbourne","Vaughan","Gaughan","Johns","Connors","Rhodes","Lang","Laing","Lovell","Glenn","Melone","Malone","Gould","Townley","Bullock","Herbert","Britton","O'Neil","O'Neal","Dowling","Maxon","Clifton","Ackerman","Knox","Gaynor","Ansley","Hernandez","Wise","Mann","Hoffman","McIntyre"];
  var fnamesa = Math.floor(Math.random() * fnames.length);
  var lnamesa = Math.floor(Math.random() * lnames.length);
  var fnamesb = fnames[fnamesa];
  var lnamesb = lnames[lnamesa];
  document.getElementById("malename").innerHTML = fnamesb + " " + lnamesb;
}
function femalename(){
  var fnames = ["Aaliyah","Aliyah","Alyssa","Alissa","Abbi","Abby","Abbey","Abigail","Addison","Ally","Ali","Aileen","Megan","Meg","Bianca","Becky","Becca","Belle","Bella","Beverly","Alexa","Nia","Amy","Calia","Kalia","Katelyn","Kaitlyn","Caitlyn","Sam","Sammy","Rose","Rosie","Jasmin","Yasmin","Tara","Tina","Trinity","Kayla","Marley","Dakota","Marcie","Lois","Adrianna","Denise","Candace","Cherri","Cherrie","Chelsea","Lindsey","Lindsay","Lyndsey","Christina","Emily","Emmly","Sierra","Lorey","Lori","Cori","Corie","Eileen","Arielle","Ariell","April","Brooke","Brooklyn","Kate","Rebecca","Laura","Jadyn","Daisy","Dee","Ella","Elisa","Elyssa","Nikki","Haylie","Hailey","Hallie","Heather"];
  var lnames = ["Smith","Jones","Taylor","Williams","Brown","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Lewis","Walker","Thompson","Watson","Jackson","Cooper","Wright","Green","Greene","Harris","Harrison","Lee","Martin","Clarke","Clark","James","Morgan","Hughes","Edwards","Hill","Moore","Scott","Young","Morris","Turner","Carter","Phillips","Mitchell","Anderson","Adams","Campbell","Davis","Miller","Marshall","Bennett","Richardson","Richards","Robertson","Reynolds","Reid","Ellis","Palmer","Graham","Stewart","Holmes","Stevens","Stevenson","Andrews","Atkins","Adkins","Owens","Knight","Harvey","Berry","Harper","Brooks","Brooke","Lawson","Fletcher","Burns","Jordan","Hopkins","McMahon","McDonald","McMillan","Ambrose","Doyle","Cooke","Long","Lopez","Lynch","Hawkins","Tucker","Patterson","Howe","Daniels","Danielson","Howell","Finch","Bown","Browne","Jacobs","Bowen","Silva","Walsh","Walch","Griffin","Peak","Steele","Wyatt","Perkins","Osborn","Osburn","Osbourne","Vaughan","Gaughan","Johns","Connors","Rhodes","Lang","Laing","Lovell","Glenn","Melone","Malone","Gould","Townley","Bullock","Herbert","Britton","O'Neil","O'Neal","Dowling","Maxon","Clifton","Ackerman","Knox","Gaynor","Ansley","Hernandez","Wise","Mann","Hoffman","McIntyre"];
  var fnamesa = Math.floor(Math.random() * fnames.length);
  var lnamesa = Math.floor(Math.random() * lnames.length);
  var fnamesb = fnames[fnamesa];
  var lnamesb = lnames[lnamesa];
  document.getElementById("femalename").innerHTML = fnamesb + " " + lnamesb;
}
function town(){
  var name = ["Shadow","Maple","Sami","Green","Summer","Hurst","Queen","King","Queens","Kings","Crow","Reed","Reid","Pur","Mud","Monument","Oak","Birch","Spruce","Pine","Whisper","Middle","Universal","Thurman","Summer","Fall","Autumn","Winter","Spring","Danger","Dainger","Cricket","Temple","Tea","Stone","Iron","Gold","Diamond","Emerald","Tin","Platinum","Pyrite","Obsidian","Quartz","Hickory","Beech","Morning","Afternoon","Weak","Strong","Moon","Bronze"];
  var suffix = ["ville","town","brook","bury","bourne","burgh","burg","castle","chester","dale","down","field","ford","grove"," Grove","minster","water","wick"," City"," Hills"," Hill"," Row","beck","rigg","rig","ster","stead","port","pool","shaw","ness"," Oaks"," Creek"," Island"," Park"," Valley"," Plains"," Springs"," Meadows","ton"," Heights"," Center"," Glen"," Shores"," Village"," Beach","wood","bell","light","spire"];
  var namea = Math.floor(Math.random() * name.length);
  var suffixa = Math.floor(Math.random() * suffix.length);
  var nameb = name[namea];
  var suffixb = suffix[suffixa];
  document.getElementById("town").innerHTML = nameb + suffixb;
}
function place(){
  var name = ["New","Well","Marble","North","South","East","West","Wood","Stone","Iron","Gold","Diamond","Emerald","Tin","Platinum","Pyrite","Obsidian","Quartz","Lava","Water","Shore","Haven","Birch","Oak","Spruce","Pine","Summer","Falls","Autumn","Winter","Spring","Springs","Deer","Bird"];
  var suffix = ["light","spell","burn","burgh","burg","gate","wind","bush","port","maple","keep","marble","barrow","pond","view","castle","meadow","beach"];
  var namea = Math.floor(Math.random() * name.length);
  var suffixa = Math.floor(Math.random() * suffix.length);
  var nameb = name[namea];
  var suffixb = suffix[suffixa];
  document.getElementById("place").innerHTML = nameb + suffixb;
}
function road(){
  var name = ["Wade","Dominic","Dominick","Derek","Alex","Alexander","Marcus","Markus","Arnold","Aaron","Abraham","Adam","Albert","Earl","Greg","Gregory","Alan","Allan","Allen","Andy","Oliver","Nolan","Joel","Noah","Nigel","Bryce","Dave","Darren","Daryl","David","Dean","Donald","Marshall","Doug","Douglas","Drew","Luke","Lucas","Paul","Dante","Donte","Elias","Franklin","Frank","Jack","Zach","Zack","Zachary","Zackary","Patrick","Pat","Owen","Peter","Pete","Will","Stuart","Steven","Steve","Vince","Vincent","Trevor","Trey","Trent","Trenton","Todd","John","Joe","Shawn","Sean","James","Jaymes","Kyle","Tom","Wyatt","Aldo","Fred","Alfred","Blaine","Benny","Bennie","Brad","Bradley","Bradly","Bryan","Brian","Brent","Brenton","Caleb","Kaleb","Kris","Cris","Chris","Carl","Karl","Claude","Clay","Clayton","Clement","Cliff","Clifford","Dale","Dallas","Dalton","Curt","Curtis","Danny","Dan","Daniel","Danial","Daron","Darron","Denny","Dennis","Derrick","Derick","Dominique","Dom","Dustin","Dusty","Gerald","Gilbert","Brett","Nate","Nathan","Bob","Anthony","Heath","Bruno","Bill","Aaliyah","Aliyah","Alyssa","Alissa","Abbi","Abby","Abbey","Abigail","Addison","Ally","Ali","Aileen","Megan","Meg","Bianca","Becky","Becca","Belle","Bella","Beverly","Alexa","Nia","Amy","Calia","Kalia","Katelyn","Kaitlyn","Caitlyn","Sam","Sammy","Rose","Rosie","Jasmin","Yasmin","Tara","Tina","Trinity","Kayla","Marley","Dakota","Marcie","Lois","Adrianna","Denise","Candace","Cherri","Cherrie","Chelsea","Lindsey","Lindsay","Lyndsey","Christina","Emily","Emmly","Sierra","Lorey","Lori","Cori","Corie","Eileen","Arielle","Ariell","April","Brooke","Brooklyn","Kate","Rebecca","Laura","Jadyn","Daisy","Dee","Ella","Elisa","Elyssa","Nikki","Haylie","Hailey","Hallie","Heather","Smith","Jones","Taylor","Williams","Brown","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Lewis","Walker","Thompson","Watson","Jackson","Cooper","Wright","Green","Greene","Harris","Harrison","Lee","Martin","Clarke","Clark","James","Morgan","Hughes","Edwards","Hill","Moore","Scott","Young","Morris","Turner","Carter","Phillips","Mitchell","Anderson","Adams","Campbell","Davis","Miller","Marshall","Bennett","Richardson","Richards","Robertson","Reynolds","Reid","Ellis","Palmer","Graham","Stewart","Holmes","Stevens","Stevenson","Andrews","Atkins","Adkins","Owens","Knight","Harvey","Berry","Harper","Brooks","Lawson","Fletcher","Burns","Jordan","Hopkins","McMahon","McDonald","McMillan","Ambrose","Doyle","Cooke","Long","Lopez","Lynch","Hawkins","Tucker","Patterson","Howe","Daniels","Danielson","Howell","Finch","Bown","Browne","Jacobs","Bowen","Silva","Walsh","Walch","Griffin","Peak","Steele","Wyatt","Perkins","Osborn","Osburn","Osbourne","Vaughan","Gaughan","Johns","Connors","Rhodes","Lang","Laing","Lovell","Glenn","Melone","Malone","Gould","Townley","Bullock","Herbert","Britton","O'Donnell","O'Neil","O'Neal","Dowling","Maxon","Clifton","Ackerman","Knox","Gaynor","Ansley","Hernandez","Wise","Mann","Hoffman","Park","Center","Main","Westfare","Silverville","Fallsworth","Rainbow","Spring","Market","New","Lilac","Dogwood","Colonial","King","Queen","Kings","Queens","Queensworth","North","South","East","West","1st","First","2nd","Second","3rd","Third","4th","Fourth","5th","Fifth","6th","Sixth","7th","Seventh","8th","Eighth","9th","Ninth","10th","Tenth","11th","Eleventh","12th","Twelfth","13th","Thirteenth","14th","Fourteenth","15th","Fifteenth","Sycamore","Sheriff","Edgewood","Officer","Fulton","Fieldstone","Woodstone","Order","Bush","Tree","Silverville","Silver","Platinum","Bronzewell","Bronze","Flowerfield","Bury","Monument","Statue","Star","Moon","Sun","Sons","Patrol","Sandwich","Coach","Noble","Temple","Lower","Higher","Underwood","Underhill","Ash","Peace","Teal","Colbat"];
  var suffix = ["Terrace","Street","Street North","Street South","Street East","Street West","Road","Place","Avenue","Avenue North","Avenue South","Avenue East","Avenue West","Highway","Parkway","Boulevard","Circle","Drive","Court","Freeway","Expressway","Lane"];
  var namea = Math.floor(Math.random() * name.length);
  var suffixa = Math.floor(Math.random() * suffix.length);
  var nameb = name[namea];
  var suffixb = suffix[suffixa];
  document.getElementById("road").innerHTML = nameb + " " + suffixb;
}
function bank(){
  var name_aaaa = ["Shadow","Maple","Sami","Green","Summer","Hurst","Queen","King","Queens","Kings","Crow","Reed","Reid","Pur","Mud","Monument","Oak","Birch","Spruce","Pine","Whisper","Middle","Universal","Thurman","Summer","Fall","Autumn","Winter","Spring","Danger","Dainger","Cricket","Temple","Tea","Stone","Iron","Gold","Diamond","Emerald","Tin","Platinum","Pyrite","Obsidian","Quartz","Hickory","Beech","Morning","Afternoon","Weak","Strong","Moon","Bronze","Home"];
  var name_aaab = ["light","spell","burn","burgh","burg","gate","wind","bush","port","maple","keep","marble","barrow","pond","view","castle","meadow","beach","ville","town","brook","bury","bourne","burgh","burg","castle","chester","dale","down","field","ford","grove"," Grove","minster","water","wick"," City"," Hills"," Hill"," Row","beck","rigg","rig","ster","stead","port","pool","shaw","ness"," Oaks"," Creek"," Island"," Park"," Valley"," Plains"," Springs"," Meadows","ton"," Heights"," Center"," Glen"," Shores"," Village"," Beach","wood","bell","light","spire"];
  var suffix = ["Financial","Bank","Financial Bank","Savings","Bank and Trust","Holdings","Financial Institution","Banking Company","Trust Company","Loan and Savings","Federal Savings Bank","Savings and Loan Association","Trust and Investment Management Company","Institution for Savings","Community Bank","State Bank","National Bank"];
  var namea_aaaa = Math.floor(Math.random() * name_aaaa.length);
  var namea_aaab = Math.floor(Math.random() * name_aaab.length);
  var suffixa = Math.floor(Math.random() * suffix.length);
  var nameb_aaaa = name_aaaa[namea_aaaa];
  var nameb_aaab = name_aaab[namea_aaab];
  var suffixb = suffix[suffixa];
  document.getElementById("bank").innerHTML = nameb_aaaa + nameb_aaab + " " + suffixb;
}
function prison(){
  var nameo = ["Shadow","Maple","Sami","Green","Summer","Hurst","Queen","King","Queens","Kings","Crow","Reed","Reid","Pur","Mud","Monument","Oak","Birch","Spruce","Pine","Whisper","Middle","Universal","Thurman","Summer","Fall","Autumn","Winter","Spring","Danger","Dainger","Cricket","Temple","Tea","Stone","Iron","Gold","Diamond","Emerald","Tin","Platinum","Pyrite","Obsidian","Quartz","Hickory","Beech","Morning","Afternoon","Weak","Strong","Moon","Bronze","Black","White","Yellow","Green","Red","Blue","Orange","Lime","Gray","Grey","Crimson","Boar","Boulder","Broken","Burned","Hot","Cold","Dark"];
  var namet = ["light","spell","burn","burgh","burg","gate","wind","bush","port","maple","keep","marble","barrow","pond","view","castle","meadow","beach"," Creek"," Woods"," Spring"," Springs"," Castle"," Crow"," Forest"," Fortress"," Garden"," Mountain"," Valley"," Tower"," Bridge"," Gate"," Cove"," Heart"];
  var suffixo = ["Regional","Juvenile","State","National","Minimum Security","Low Security","Medium Security","High Security","Maximum Security","Federal"];
  var suffixt = ["Penitentiary","Prison","Detention Center","Holding Center","Correctional Facility","Correctional Center","Correctional Institute","Correctional Institution","Institution"];
  var nameoa = Math.floor(Math.random() * nameo.length);
  var nameta = Math.floor(Math.random() * namet.length);
  var suffixoa = Math.floor(Math.random() * suffixo.length);
  var suffixta = Math.floor(Math.random() * suffixt.length);
  var nameob = nameo[nameoa];
  var nametb = namet[nameta];
  var suffixob = suffixo[suffixoa];
  var suffixtb = suffixt[suffixta];
  document.getElementById("prison").innerHTML = nameob + nametb + " " + suffixob + " " + suffixtb;
}
function number_aaaa(){
  var array_aaaa = ["1","2","3","4","5","6","7","8","9","10"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  document.getElementById("number_aaaa").innerHTML = arrayb_aaaa;
}
function number_aaab(){
  var array_aaab = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arrayb_aaab = array_aaab[arraya_aaab];
  document.getElementById("number_aaab").innerHTML = arrayb_aaab;
}
function number_aaac(){
  var array_aaac = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arrayb_aaac = array_aaac[arraya_aaac];
  document.getElementById("number_aaac").innerHTML = arrayb_aaac;
}
function number_aaad(){
  var array_aaad = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40"];
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arrayb_aaad = array_aaad[arraya_aaad];
  document.getElementById("number_aaad").innerHTML = arrayb_aaad;
}
function number_aaae(){
  var array_aaae = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50"];
  var arraya_aaae = Math.floor(Math.random() * array_aaae.length);
  var arrayb_aaae = array_aaaea[arraya_aaae];
  document.getElementById("number_aaae").innerHTML = arrayb_aaae;
}

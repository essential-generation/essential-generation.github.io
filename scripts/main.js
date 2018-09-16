function ajaxGen(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET","/scripts/php/main.php",true);
  xmlhttp.send();
}
function malename(){
  var fnames = ["Wade","Dominic","Dominick","Derek","Alex","Alexander","Marcus","Markus","Arnold","Aaron","Abraham","Adam","Albert","Earl","Greg","Gregory","Alan","Allan","Allen","Andy","Oliver","Nolan","Joel","Noah","Nigel","Bryce","Dave","Darren","Daryl","David","Dean","Donald","Marshall","Doug","Douglas","Drew","Luke","Lucas","Paul","Dante","Donte","Elias","Franklin","Frank","Jack","Zach","Zack","Zachary","Zackary","Patrick","Pat","Owen","Peter","Pete","Will","Stuart","Steven","Steve","Vince","Vincent","Trevor","Trey","Trent","Trenton","Todd","Thomas","John","Joe","Shawn","Sean","James","Jaymes","Kyle","Tom","Wyatt","Aldo","Fred","Alfred","Blaine","Benny","Bennie","Brad","Bradley","Bradly","Bryan","Brian","Brent","Brenton","Caleb","Kaleb","Kris","Cris","Chris","Carl","Karl","Claude","Clay","Clayton","Clement","Cliff","Clifford","Dale","Dallas","Dalton","Curt","Curtis","Danny","Dan","Daniel","Danial","Daron","Darron","Denny","Dennis","Derrick","Derick","Dominique","Dom","Dustin","Dusty","Gerald","Gilbert","Brett","Nate","Nathan","Bob","Anthony","Heath","Bruno","Bill"];
  var lnames = ["Smith","Jones","Taylor","Williams","Brown","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Lewis","Walker","Thompson","Watson","Jackson","Cooper","Wright","Green","Greene","Harris","Harrison","Lee","Martin","Clarke","Clark","James","Morgan","Hughes","Edwards","Hill","Moore","Scott","Young","Morris","Turner","Carter","Phillips","Mitchell","Anderson","Adams","Campbell","Davis","Miller","Marshall","Bennett","Richardson","Richards","Robertson","Reynolds","Reid","Ellis","Palmer","Graham","Stewart","Holmes","Stevens","Stevenson","Andrews","Atkins","Adkins","Owens","Knight","Harvey","Berry","Harper","Brooks","Brooke","Lawson","Fletcher","Burns","Jordan","Hopkins","McMahon","McDonald","McMillan","Ambrose","Doyle","Cooke","Long","Lopez","Lynch","Hawkins","Tucker","Patterson","Howe","Daniels","Danielson","Howell","Finch","Bown","Browne","Jacobs","Bowen","Silva","Walsh","Walch","Griffin","Peak","Steele","Wyatt","Perkins","Osborn","Osburn","Osbourne","Vaughan","Gaughan","Johns","Connors","Rhodes","Lang","Laing","Lovell","Glenn","Melone","Malone","Gould","Townley","Bullock","Herbert","Britton","O'Neil","O'Neal","Dowling","Maxon","Clifton","Ackerman","Knox","Gaynor","Ansley","Hernandez","Wise","Mann","Hoffman","McIntyre","Aarons","Abney","Ables","Ableman","Abbitt","Abbot","Abbot","Abbey","Abbett","Abner","Minkel","Aborn","Abood","Abram","Abrams","Abrell","Ackermann","Ackers","Wycoff","Niedermann","Niederman","Anson"];
  var fnamesa = Math.floor(Math.random() * fnames.length);
  var lnamesa = Math.floor(Math.random() * lnames.length);
  var fnamesb = fnames[fnamesa];
  var lnamesb = lnames[lnamesa];
  document.getElementById("malename").innerHTML = fnamesb + " " + lnamesb;
}
function femalename(){
  var fnames = ["Aaliyah","Aliyah","Alyssa","Alissa","Abbi","Abby","Abbey","Abigail","Addison","Ally","Ali","Aileen","Megan","Meg","Bianca","Becky","Becca","Belle","Bella","Beverly","Alexa","Nia","Amy","Calia","Kalia","Katelyn","Kaitlyn","Caitlyn","Sam","Sammy","Rose","Rosie","Jasmin","Yasmin","Tara","Tina","Trinity","Kayla","Marley","Dakota","Marcie","Lois","Adrianna","Denise","Candace","Cherri","Cherrie","Chelsea","Lindsey","Lindsay","Lyndsey","Christina","Emily","Emmly","Sierra","Lorey","Lori","Cori","Corie","Eileen","Arielle","Ariell","April","Brooke","Brooklyn","Kate","Rebecca","Laura","Jadyn","Daisy","Dee","Ella","Elisa","Elyssa","Nikki","Haylie","Hailey","Hallie","Heather"];
  var lnames = ["Smith","Jones","Taylor","Williams","Brown","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Lewis","Walker","Thompson","Watson","Jackson","Cooper","Wright","Green","Greene","Harris","Harrison","Lee","Martin","Clarke","Clark","James","Morgan","Hughes","Edwards","Hill","Moore","Scott","Young","Morris","Turner","Carter","Phillips","Mitchell","Anderson","Adams","Campbell","Davis","Miller","Marshall","Bennett","Richardson","Richards","Robertson","Reynolds","Reid","Ellis","Palmer","Graham","Stewart","Holmes","Stevens","Stevenson","Andrews","Atkins","Adkins","Owens","Knight","Harvey","Berry","Harper","Brooks","Brooke","Lawson","Fletcher","Burns","Jordan","Hopkins","McMahon","McDonald","McMillan","Ambrose","Doyle","Cooke","Long","Lopez","Lynch","Hawkins","Tucker","Patterson","Howe","Daniels","Danielson","Howell","Finch","Bown","Browne","Jacobs","Bowen","Silva","Walsh","Walch","Griffin","Peak","Steele","Wyatt","Perkins","Osborn","Osburn","Osbourne","Vaughan","Gaughan","Johns","Connors","Rhodes","Lang","Laing","Lovell","Glenn","Melone","Malone","Gould","Townley","Bullock","Herbert","Britton","O'Neil","O'Neal","Dowling","Maxon","Clifton","Ackerman","Knox","Gaynor","Ansley","Hernandez","Wise","Mann","Hoffman","McIntyre","Aarons","Abney","Ables","Ableman","Abbitt","Abbot","Abbot","Abbey","Abbett","Abner","Minkel","Aborn","Abood","Abram","Abrams","Abrell","Ackermann","Ackers","Wycoff","Niedermann","Niederman","Anson"];
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
  var name = ["Wade","Dominic","Dominick","Derek","Alex","Alexander","Marcus","Markus","Arnold","Aaron","Abraham","Adam","Albert","Earl","Greg","Gregory","Alan","Allan","Allen","Andy","Oliver","Nolan","Joel","Noah","Nigel","Bryce","Dave","Darren","Daryl","David","Dean","Donald","Marshall","Doug","Douglas","Drew","Luke","Lucas","Paul","Dante","Donte","Elias","Franklin","Frank","Jack","Zach","Zack","Zachary","Zackary","Patrick","Pat","Owen","Peter","Pete","Will","Stuart","Steven","Steve","Vince","Vincent","Trevor","Trey","Trent","Trenton","Todd","John","Joe","Shawn","Sean","James","Jaymes","Kyle","Tom","Wyatt","Aldo","Fred","Alfred","Blaine","Benny","Bennie","Brad","Bradley","Bradly","Bryan","Brian","Brent","Brenton","Caleb","Kaleb","Kris","Cris","Chris","Carl","Karl","Claude","Clay","Clayton","Clement","Cliff","Clifford","Dale","Dallas","Dalton","Curt","Curtis","Danny","Dan","Daniel","Danial","Daron","Darron","Denny","Dennis","Derrick","Derick","Dominique","Dom","Dustin","Dusty","Gerald","Gilbert","Brett","Nate","Nathan","Bob","Anthony","Heath","Bruno","Bill","Aaliyah","Aliyah","Alyssa","Alissa","Abbi","Abby","Abbey","Abigail","Addison","Ally","Ali","Aileen","Megan","Meg","Bianca","Becky","Becca","Belle","Bella","Beverly","Alexa","Nia","Amy","Calia","Kalia","Katelyn","Kaitlyn","Caitlyn","Sam","Sammy","Rose","Rosie","Jasmin","Yasmin","Tara","Tina","Trinity","Kayla","Marley","Dakota","Marcie","Lois","Adrianna","Denise","Candace","Cherri","Cherrie","Chelsea","Lindsey","Lindsay","Lyndsey","Christina","Emily","Emmly","Sierra","Lorey","Lori","Cori","Corie","Eileen","Arielle","Ariell","April","Brooke","Brooklyn","Kate","Rebecca","Laura","Jadyn","Daisy","Dee","Ella","Elisa","Elyssa","Nikki","Haylie","Hailey","Hallie","Heather","Smith","Jones","Taylor","Williams","Brown","Davies","Evans","Wilson","Thomas","Roberts","Johnson","Lewis","Walker","Thompson","Watson","Jackson","Cooper","Wright","Green","Greene","Harris","Harrison","Lee","Martin","Clarke","Clark","James","Morgan","Hughes","Edwards","Hill","Moore","Scott","Young","Morris","Turner","Carter","Phillips","Mitchell","Anderson","Adams","Campbell","Davis","Miller","Marshall","Bennett","Richardson","Richards","Robertson","Reynolds","Reid","Ellis","Palmer","Graham","Stewart","Holmes","Stevens","Stevenson","Andrews","Atkins","Adkins","Owens","Knight","Harvey","Berry","Harper","Brooks","Lawson","Fletcher","Burns","Jordan","Hopkins","McMahon","McDonald","McMillan","Ambrose","Doyle","Cooke","Long","Lopez","Lynch","Hawkins","Tucker","Patterson","Howe","Daniels","Danielson","Howell","Finch","Bown","Browne","Jacobs","Bowen","Silva","Walsh","Walch","Griffin","Peak","Steele","Wyatt","Perkins","Osborn","Osburn","Osbourne","Vaughan","Gaughan","Johns","Connors","Rhodes","Lang","Laing","Lovell","Glenn","Melone","Malone","Gould","Townley","Bullock","Herbert","Britton","O'Neil","O'Neal","Dowling","Maxon","Clifton","Ackerman","Knox","Gaynor","Ansley","Hernandez","Wise","Mann","Hoffman",,"Aarons","Abney","Ables","Ableman","Abbitt","Abbot","Abbot","Abbey","Abbett","Abner","Minkel","Aborn","Abood","Abram","Abrams","Abrell","Ackermann","Ackers","Wycoff","Niedermann","Niederman","Anson","Park","Center","Main","Westfare","Silverville","Fallsworth","Rainbow","Spring","Market","New","Lilac","Dogwood","Colonial","King","Queen","Kings","Queens","Queensworth","North","South","East","West","1st","First","2nd","Second","3rd","Third","4th","Fourth","5th","Fifth","6th","Sixth","7th","Seventh","8th","Eighth","9th","Ninth","10th","Tenth","11th","Eleventh","12th","Twelfth","13th","Thirteenth","14th","Fourteenth","15th","Fifteenth","Sycamore","Sheriff","Edgewood","Officer","Fulton","Fieldstone","Woodstone","Order","Bush","Tree","Silverville","Silver","Platinum","Bronzewell","Bronze","Flowerfield","Bury","Monument","Statue","Star","Moon","Sun","Sons","Patrol","Sandwich","Coach","Noble","Temple","Lower","Higher","Underwood","Underhill","Ash","Peace","Teal","Colbat"];
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
function decision_aaaa(){
  var array_aaaa = ["Mintview","Fallsworth","Woodburg","Wellburg","Marblewind","Lavacastle","Pinewind","Birchbarrow","Winterkeep","Pinebarrow","Newspell","Lavapond","Northburgh","Springsburg","Woodlight","Tinpond","Stoneport","Pineport","Eastkeep","Pyriteburgh","Pinebush","Ironmarble","Lavakeep","Ironpond","Lavaview","Sprucecastle","Platinumburn","Ironport"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  document.getElementById("decision_aaaa").innerHTML = arrayb_aaaa;
}
function decision_aaab(){
  var array_aaab = ["Obsidianview","Emeraldport","Southlight","Newmaple","Springkeep","Woodburn","Westview","Summerkeep","Birchburn","Tinlight","Autumnview","Lavaport","Pyritepond","Northburn","Westgate","Oakmarble","Havenport","Marblebush","Oakbush","Springsbarrow"];
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arrayb_aaab = array_aaab[arraya_aaab];
  document.getElementById("decision_aaab").innerHTML = arrayb_aaab;
}
function decision_aaac(){
  var array_aaac = ["State","Country"];
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arrayb_aaac = array_aaac[arraya_aaac];
  document.getElementById("decision_aaac").innerHTML = arrayb_aaac;
}
function decision_aaad(){
  var array_aaad = ["City","Small Town"];
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arrayb_aaad = array_aaad[arraya_aaad];
  document.getElementById("decision_aaad").innerHTML = arrayb_aaad;
}
function decision_aaae(){
  var array_aaae = ["Westfare","Icewick","Danger City","Universal Grove","Spruceburg","Shadowgrove","Iron Center","Iron Center","Emerald Valley","Platinum Plains","Weakbourne","Tingrove","Weak Heights","Cricketford","Kingsford","Middle City","Emeraldbell","Fallbrook","Fallshaw","Quartz Park","Weakshaw","Hurst Springs","Summer Shores","Pinewick","Oakton","Diamond Grove","Obsidianspire","Dangerspire","Thurman Grove","Reed Row","Fall Glen","Springport","Cricket Center","Hickorypool","Hurstchester","Pyritedown","Kingsbourne","Cricket Row","Queen Hills","Middle Springs","Maple Plains"];
  var arraya_aaae = Math.floor(Math.random() * array_aaae.length);
  var arrayb_aaae = array_aaae[arraya_aaae];
  document.getElementById("decision_aaae").innerHTML = arrayb_aaae;
}
function decision_aaaf(){
  var array_aaaf = ["Silverville","Whisper Oaks","Spruceville","Summertown","Autumn Glen","Gold Hills","Queenport","Morningstead","Teaburgh","Cricketdale","Birch Oaks","Golddown","Spruceburgh","Tinbell","Oak Row","Oakport","Reedlight"];
  var arraya_aaaf = Math.floor(Math.random() * array_aaaf.length);
  var arrayb_aaaf = array_aaaf[arraya_aaaf];
  document.getElementById("decision_aaaf").innerHTML = arrayb_aaaf;
}
function decision_aaag(){
  var array_aaag = ["Springmeadow Financial","Kingsburg Bank","Stonemarble Bank","Weakmeadow Bank","Greenport Financial","Reidmarble Financial Institution","Autumnlight Bank","Hickorymarble Bank","Whisperspell Holdings","Pinebeach Financial","Quartzburg Financial Institution","Sprucelight Holdings","Crowmarble Financial","Obsidianspell Bank","Universalpond Financial Bank","Pinemaple Financial Bank","Reedspell Financial Bank","Queenmarble Financial Institution","Kingspell Savings","Moonlight Loan and Savings","Obsidian Glen Bank"];
  var arraya_aaag = Math.floor(Math.random() * array_aaag.length);
  var arrayb_aaag = array_aaag[arraya_aaag];
  document.getElementById("decision_aaag").innerHTML = arrayb_aaag;
}
function decision_aaah(){
  var array_aaah = ["Teamaple Regional Correctional Institution","Oakview Medium Security Detention Center","Birchwind Federal Correctional Facility","Reidwind Federal Correctional Institution","Pinecastle Juvenile Detention Center","Maplewind Minimum Security Holding Center","Autumnbush High Security Detention Center","Platinummarble State Detention Center","Tinport Federal Institution","Springburn Medium Security Institution","Blacklight State Correctional Facility"];
  var arraya_aaah = Math.floor(Math.random() * array_aaah.length);
  var arrayb_aaah = array_aaah[arraya_aaah];
  document.getElementById("decision_aaah").innerHTML = arrayb_aaah;
}
function decision_aaai(){
  var array_aaai = ["Darron Carter","Dean Daniels","Dale Roberts","Paul Thomas","Aaron Walch","Oliver Martin","Franklin Bown","Karl Patterson","Will Palmer","Shawn Cooke","Brett Hill","Brad Moore","Derek Abbett"];
  var arraya_aaai = Math.floor(Math.random() * array_aaai.length);
  var arrayb_aaai = array_aaai[arraya_aaai];
  document.getElementById("decision_aaai").innerHTML = arrayb_aaai;
}
function decision_aaaj(){
  var array_aaaj = ["Kaitlyn Knox","Haylie Harrison","Emily Finch","April Reid","Becca Adkins","Bella Browne","Laura Dowling","Lindsey Howell","Nikki Brown","Ella Wright","April Davis","Arielle Danielson","Amia Ackers"];
  var arraya_aaaj = Math.floor(Math.random() * array_aaaj.length);
  var arrayb_aaaj = array_aaaj[arraya_aaaj];
  document.getElementById("decision_aaaj").innerHTML = arrayb_aaaj;
}
function number_aaaa(){
  var array_aaaa = ["1","2"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  document.getElementById("num_aaaa").innerHTML = arrayb_aaaa + arrayb_aaab;
}
function number_aaab(){
  var array_aaaa = ["1","2","3"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  document.getElementById("num_aaab").innerHTML = arrayb_aaaa + arrayb_aaab;
}
function number_aaac(){
  var array_aaaa = ["1","2","3","4"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  document.getElementById("num_aaac").innerHTML = arrayb_aaaa + arrayb_aaab;
}
function number_aaad(){
  var array_aaaa = ["1","2","3","4","5"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  document.getElementById("num_aaad").innerHTML = arrayb_aaaa + arrayb_aaab;
}
function number_aaae(){
  var array_aaaa = ["1","2","3","4","5","6"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  document.getElementById("num_aaae").innerHTML = arrayb_aaaa + arrayb_aaab;
}
function number_aaaf(){
  var array_aaaa = ["1","2","3","4","5","6","7"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  document.getElementById("num_aaaf").innerHTML = arrayb_aaaa + arrayb_aaab;
}
function number_aaag(){
  var array_aaaa = ["1","2","3","4","5","6","7","8"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  document.getElementById("num_aaag").innerHTML = arrayb_aaaa + arrayb_aaab;
}
function number_aaah(){
  var array_aaaa = ["1","2","3","4","5","6","7","8","9"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  document.getElementById("num_aaah").innerHTML = arrayb_aaaa + arrayb_aaab;
}
function number_aaai(){
  var array_aaaa = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  document.getElementById("num_aaai").innerHTML = "1" + arrayb_aaaa + arrayb_aaab;
}
function number_aaaj(){
  var array_aaaa = ["1","2"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  document.getElementById("num_aaaj").innerHTML = arrayb_aaaa + arrayb_aaab + arrayb_aaac;
}
function number_aaak(){
  var array_aaaa = ["1","2","3"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  document.getElementById("num_aaak").innerHTML = arrayb_aaaa + arrayb_aaab + arrayb_aaac;
}
function number_aaal(){
  var array_aaaa = ["1","2","3","4"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  document.getElementById("num_aaal").innerHTML = arrayb_aaaa + arrayb_aaab + arrayb_aaac;
}
function number_aaam(){
  var array_aaaa = ["1","2","3","4","5"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  document.getElementById("num_aaam").innerHTML = arrayb_aaaa + arrayb_aaab + arrayb_aaac;
}
function number_aaan(){
  var array_aaaa = ["1","2","3","4","5","6"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  document.getElementById("num_aaan").innerHTML = arrayb_aaaa + arrayb_aaab + arrayb_aaac;
}
function number_aaao(){
  var array_aaaa = ["1","2","3","4","5","6","7"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  document.getElementById("num_aaao").innerHTML = arrayb_aaaa + arrayb_aaab + arrayb_aaac;
}
function number_aaap(){
  var array_aaaa = ["1","2","3","4","5","6","7","8"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  document.getElementById("num_aaap").innerHTML = arrayb_aaaa + arrayb_aaab + arrayb_aaac;
}
function number_aaaq(){
  var array_aaaa = ["1","2","3","4","5","6","7","8","9"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  document.getElementById("num_aaaq").innerHTML = arrayb_aaaa + arrayb_aaab + arrayb_aaac;
}
function number_aaar(){
  var array_aaaa = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  document.getElementById("num_aaar").innerHTML = "1," + arrayb_aaaa + arrayb_aaab + arrayb_aaac;
}
function number_aaas(){
  var array_aaaa = ["1","2"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaad = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  var arrayb_aaad = array_aaad[arraya_aaad];
  document.getElementById("num_aaas").innerHTML = arrayb_aaaa + "," + arrayb_aaab + arrayb_aaac + arrayb_aaad;
}
function number_aaat(){
  var array_aaaa = ["1","2","3"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaad = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  var arrayb_aaad = array_aaad[arraya_aaad];
  document.getElementById("num_aaat").innerHTML = arrayb_aaaa + "," + arrayb_aaab + arrayb_aaac + arrayb_aaad;
}
function number_aaau(){
  var array_aaaa = ["1","2","3","4"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaad = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  var arrayb_aaad = array_aaad[arraya_aaad];
  document.getElementById("num_aaau").innerHTML = arrayb_aaaa + "," + arrayb_aaab + arrayb_aaac + arrayb_aaad;
}
function number_aaav(){
  var array_aaaa = ["1","2","3","4","5"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaad = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  var arrayb_aaad = array_aaad[arraya_aaad];
  document.getElementById("num_aaav").innerHTML = arrayb_aaaa + "," + arrayb_aaab + arrayb_aaac + arrayb_aaad;
}
function number_aaaw(){
  var array_aaaa = ["1","2","3","4","5","6"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaad = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  var arrayb_aaad = array_aaad[arraya_aaad];
  document.getElementById("num_aaaw").innerHTML = arrayb_aaaa + "," + arrayb_aaab + arrayb_aaac + arrayb_aaad;
}
function number_aaax(){
  var array_aaaa = ["1","2","3","4","5","6","7"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaad = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  var arrayb_aaad = array_aaad[arraya_aaad];
  document.getElementById("num_aaax").innerHTML = arrayb_aaaa + "," + arrayb_aaab + arrayb_aaac + arrayb_aaad;
}
function number_aaay(){
  var array_aaaa = ["1","2","3","4","5","6","7","8"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaad = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  var arrayb_aaad = array_aaad[arraya_aaad];
  document.getElementById("num_aaay").innerHTML = arrayb_aaaa + "," + arrayb_aaab + arrayb_aaac + arrayb_aaad;
}
function number_aaaz(){
  var array_aaaa = ["1","2","3","4","5","6","7","8","9"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaad = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  var arrayb_aaad = array_aaad[arraya_aaad];
  document.getElementById("num_aaaz").innerHTML = arrayb_aaaa + "," + arrayb_aaab + arrayb_aaac + arrayb_aaad;
}
function number_aaba(){
  var array_aaaa = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaad = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  var arrayb_aaad = array_aaad[arraya_aaad];
  document.getElementById("num_aaba").innerHTML = "1" + arrayb_aaaa + "," + arrayb_aaab + arrayb_aaac + arrayb_aaad;
}
function number_aabb(){
  var array_aaaa = ["1","2"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaad = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaae = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arraya_aaae = Math.floor(Math.random() * array_aaae.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  var arrayb_aaad = array_aaad[arraya_aaad];
  var arrayb_aaae = array_aaae[arraya_aaae];
  document.getElementById("num_aabb").innerHTML = arrayb_aaaa + arrayb_aaab + "," + arrayb_aaac + arrayb_aaad + arrayb_aaae;
}
function number_aabc(){
  var array_aaaa = ["1","2","3"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaad = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaae = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arraya_aaae = Math.floor(Math.random() * array_aaae.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  var arrayb_aaad = array_aaad[arraya_aaad];
  var arrayb_aaae = array_aaae[arraya_aaae];
  document.getElementById("num_aabc").innerHTML = arrayb_aaaa + arrayb_aaab + "," + arrayb_aaac + arrayb_aaad + arrayb_aaae;
}
function number_aabd(){
  var array_aaaa = ["1","2","3","4"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaad = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaae = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arraya_aaae = Math.floor(Math.random() * array_aaae.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  var arrayb_aaad = array_aaad[arraya_aaad];
  var arrayb_aaae = array_aaae[arraya_aaae];
  document.getElementById("num_aabd").innerHTML = arrayb_aaaa + arrayb_aaab + "," + arrayb_aaac + arrayb_aaad + arrayb_aaae;
}
function number_aabe(){
  var array_aaaa = ["1","2","3","4","5"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaad = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaae = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arraya_aaae = Math.floor(Math.random() * array_aaae.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  var arrayb_aaad = array_aaad[arraya_aaad];
  var arrayb_aaae = array_aaae[arraya_aaae];
  document.getElementById("num_aabe").innerHTML = arrayb_aaaa + arrayb_aaab + "," + arrayb_aaac + arrayb_aaad + arrayb_aaae;
}
function number_aabf(){
  var array_aaaa = ["1","2","3","4","5","6"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaad = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaae = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arraya_aaae = Math.floor(Math.random() * array_aaae.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  var arrayb_aaad = array_aaad[arraya_aaad];
  var arrayb_aaae = array_aaae[arraya_aaae];
  document.getElementById("num_aabf").innerHTML = arrayb_aaaa + arrayb_aaab + "," + arrayb_aaac + arrayb_aaad + arrayb_aaae;
}
function number_aabg(){
  var array_aaaa = ["1","2","3","4","5","6","7"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaad = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaae = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arraya_aaae = Math.floor(Math.random() * array_aaae.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  var arrayb_aaad = array_aaad[arraya_aaad];
  var arrayb_aaae = array_aaae[arraya_aaae];
  document.getElementById("num_aabg").innerHTML = arrayb_aaaa + arrayb_aaab + "," + arrayb_aaac + arrayb_aaad + arrayb_aaae;
}
function number_aabh(){
  var array_aaaa = ["1","2","3","4","5","6","7","8"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaad = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaae = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arraya_aaae = Math.floor(Math.random() * array_aaae.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  var arrayb_aaad = array_aaad[arraya_aaad];
  var arrayb_aaae = array_aaae[arraya_aaae];
  document.getElementById("num_aabh").innerHTML = arrayb_aaaa + arrayb_aaab + "," + arrayb_aaac + arrayb_aaad + arrayb_aaae;
}
function number_aabi(){
  var array_aaaa = ["1","2","3","4","5","6","7","8","9"];
  var array_aaab = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaac = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaad = ["0","1","2","3","4","5","6","7","8","9"];
  var array_aaae = ["0","1","2","3","4","5","6","7","8","9"];
  var arraya_aaaa = Math.floor(Math.random() * array_aaaa.length);
  var arraya_aaab = Math.floor(Math.random() * array_aaab.length);
  var arraya_aaac = Math.floor(Math.random() * array_aaac.length);
  var arraya_aaad = Math.floor(Math.random() * array_aaad.length);
  var arraya_aaae = Math.floor(Math.random() * array_aaae.length);
  var arrayb_aaaa = array_aaaa[arraya_aaaa];
  var arrayb_aaab = array_aaab[arraya_aaab];
  var arrayb_aaac = array_aaac[arraya_aaac];
  var arrayb_aaad = array_aaad[arraya_aaad];
  var arrayb_aaae = array_aaae[arraya_aaae];
  document.getElementById("num_aabi").innerHTML = arrayb_aaaa + arrayb_aaab + "," + arrayb_aaac + arrayb_aaad + arrayb_aaae;
}

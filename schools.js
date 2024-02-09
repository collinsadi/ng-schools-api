const schools = [
    {
      "name": "Abubakar Tafawa Balewa University",
      "state": "bauchi",
      "nickname": "abubakar-tafawa-balewa-university36917"
    },
    {
      "name": "Ahmadu Bello University",
      "state": "kaduna",
      "nickname": "ahmadu-bello-university23235"
    },
    {
      "name": "Alex Ekwueme Federal University Ndufu Alike Ikwo",
      "state": "ebonyi",
      "nickname": "alex-ekwueme-federal-university-ndufu-alike-ikwo2576"
    },
    {
      "name": "Bayero University",
      "state": "kano",
      "nickname": "bayero-university5099"
    },
    {
      "name": "Federal University of Agriculture, Abeokuta",
      "state": "ogun",
      "nickname": "federal-university-of-agriculture--abeokuta23965"
    },
    {
      "name": "Federal University Birnin Kebbi",
      "state": "kebbi",
      "nickname": "federal-university-birnin-kebbi47990"
    },
    {
      "name": "Federal University Dutse",
      "state": "jigawa",
      "nickname": "federal-university-dutse25973"
    },
    {
      "name": "Federal University Dutsin-Ma",
      "state": "katsina",
      "nickname": "federal-university-dutsin-ma26634"
    },
    {
      "name": "Federal University Gashua",
      "state": "yobe",
      "nickname": "federal-university-gashua31919"
    },
    {
      "name": "Federal University Gusau",
      "state": "zamfara",
      "nickname": "federal-university-gusau1514"
    },
    {
      "name": "Federal University Kashere",
      "state": "gombe",
      "nickname": "federal-university-kashere30018"
    },
    {
      "name": "Federal University Lokoja",
      "state": "kogi",
      "nickname": "federal-university-lokoja14526"
    },
    {
      "name": "Federal University of Lafia",
      "state": "nasarawa",
      "nickname": "federal-university-of-lafia11786"
    },
    {
      "name": "Federal University of Petroleum Resources Effurun",
      "state": "delta",
      "nickname": "federal-university-of-petroleum-resources-effurun24026"
    },
    {
      "name": "Federal University of Technology Akure",
      "state": "ondo",
      "nickname": "federal-university-of-technology-akure38643"
    },
    {
      "name": "Federal University of Technology Minna",
      "state": "niger",
      "nickname": "federal-university-of-technology-minna15516"
    },
    {
      "name": "Federal University of Technology Owerri",
      "state": "imo",
      "nickname": "federal-university-of-technology-owerri5592"
    },
    {
      "name": "Federal University Otuoke",
      "state": "bayelsa",
      "nickname": "federal-university-otuoke33416"
    },
    {
      "name": "Federal University Oye-Ekiti",
      "state": "ekiti",
      "nickname": "federal-university-oye-ekiti14483"
    },
    {
      "name": "Federal University Wukari",
      "state": "taraba",
      "nickname": "federal-university-wukari47035"
    },
    {
      "name": "Michael Okpara University of Agriculture, Umudike",
      "state": "abia",
      "nickname": "michael-okpara-university-of-agriculture--umudike25566"
    },
    {
      "name": "Modibbo Adama University, Yola",
      "state": "adamawa",
      "nickname": "modibbo-adama-university--yola7782"
    },
    {
      "name": "National Open University of Nigeria",
      "state": "lagos",
      "nickname": "national-open-university-of-nigeria24887"
    },
    {
      "name": "Nnamdi Azikiwe University",
      "state": "anambra",
      "nickname": "nnamdi-azikiwe-university27712"
    },
    {
      "name": "Obafemi Awolowo University",
      "state": "osun",
      "nickname": "obafemi-awolowo-university2143"
    },
    {
      "name": "University of Abuja",
      "state": "federal capital territory",
      "nickname": "university-of-abuja12115"
    },
    {
      "name": "University of Agriculture, Makurdi",
      "state": "benue",
      "nickname": "university-of-agriculture--makurdi33434"
    },
    {
      "name": "University of Benin",
      "state": "edo",
      "nickname": "university-of-benin15705"
    },
    {
      "name": "University of Calabar",
      "state": "cross river",
      "nickname": "university-of-calabar21486"
    },
    {
      "name": "University of Ibadan",
      "state": "oyo",
      "nickname": "university-of-ibadan46903"
    },
    {
      "name": "University of Ilorin",
      "state": "kwara",
      "nickname": "university-of-ilorin20287"
    },
    {
      "name": "University of Jos",
      "state": "plateau",
      "nickname": "university-of-jos26528"
    },
    {
      "name": "University of Lagos",
      "state": "lagos",
      "nickname": "university-of-lagos33613"
    },
    {
      "name": "University of Maiduguri",
      "state": "borno",
      "nickname": "university-of-maiduguri1112"
    },
    {
      "name": "University of Nigeria, Nsukka",
      "state": "enugu",
      "nickname": "university-of-nigeria--nsukka12527"
    },
    {
      "name": "University of Port Harcourt",
      "state": "rivers",
      "nickname": "university-of-port-harcourt19949"
    },
    {
      "name": "University of Uyo",
      "state": "akwa ibom",
      "nickname": "university-of-uyo22154"
    },
    {
      "name": "Usmanu Danfodiyo University",
      "state": "sokoto",
      "nickname": "usmanu-danfodiyo-university31914"
    },
    {
      "name": "Abia State University",
      "state": "abia",
      "nickname": "abia-state-university35924"
    },
    {
      "name": "Adamawa State University",
      "state": "adamawa",
      "nickname": "adamawa-state-university25528"
    },
    {
      "name": "Adekunle Ajasin University",
      "state": "ondo",
      "nickname": "adekunle-ajasin-university8085"
    },
    {
      "name": "Akwa Ibom State University",
      "state": "akwa ibom",
      "nickname": "akwa-ibom-state-university42030"
    },
    {
      "name": "Aliko Dangote University of Science and Technology",
      "state": "kano",
      "nickname": "aliko-dangote-university-of-science-and-technology44212"
    },
    {
      "name": "Ambrose Alli University",
      "state": "edo",
      "nickname": "ambrose-alli-university37992"
    },
    {
      "name": "Bauchi State University",
      "state": "bauchi",
      "nickname": "bauchi-state-university38158"
    },
    {
      "name": "Bayelsa Medical University",
      "state": "bayelsa",
      "nickname": "bayelsa-medical-university642"
    },
    {
      "name": "Benue State University",
      "state": "benue",
      "nickname": "benue-state-university9875"
    },
    {
      "name": "Borno State University",
      "state": "borno",
      "nickname": "borno-state-university40201"
    },
    {
      "name": "Bukar Abba Ibrahim University",
      "state": "yobe",
      "nickname": "bukar-abba-ibrahim-university10333"
    },
    {
      "name": "Chukwuemeka Odumegwu Ojukwu University",
      "state": "anambra",
      "nickname": "chukwuemeka-odumegwu-ojukwu-university10071"
    },
    {
      "name": "University of Cross River State",
      "state": "cross river",
      "nickname": "university-of-cross-river-state16163"
    },
    {
      "name": "Delta State University, Abraka",
      "state": "delta",
      "nickname": "delta-state-university--abraka41545"
    },
    {
      "name": "Delta State University of Science and Technology, Ozoro",
      "state": "delta",
      "nickname": "delta-state-university-of-science-and-technology--ozoro49375"
    },
    {
      "name": "Dennis Osadebe University, Asaba",
      "state": "delta",
      "nickname": "dennis-osadebe-university--asaba25884"
    },
    {
      "name": "Ebonyi State University",
      "state": "ebonyi",
      "nickname": "ebonyi-state-university49024"
    },
    {
      "name": "Edo State University",
      "state": "edo",
      "nickname": "edo-state-university18511"
    },
    {
      "name": "Ekiti State University",
      "state": "ekiti",
      "nickname": "ekiti-state-university12915"
    },
    {
      "name": "Enugu State University of Science and Technology",
      "state": "enugu",
      "nickname": "enugu-state-university-of-science-and-technology42579"
    },
    {
      "name": "Gombe State University",
      "state": "gombe",
      "nickname": "gombe-state-university36711"
    },
    {
      "name": "Gombe State University of Science and Technology",
      "state": "gombe",
      "nickname": "gombe-state-university-of-science-and-technology38401"
    },
    {
      "name": "Ibrahim Badamasi Babangida University",
      "state": "niger",
      "nickname": "ibrahim-badamasi-babangida-university20890"
    },
    {
      "name": "Ignatius Ajuru University of Education",
      "state": "rivers",
      "nickname": "ignatius-ajuru-university-of-education7890"
    },
    {
      "name": "Imo State University",
      "state": "imo",
      "nickname": "imo-state-university22001"
    },
    {
      "name": "Kaduna State University",
      "state": "kaduna",
      "nickname": "kaduna-state-university30553"
    },
    {
      "name": "Kebbi State University of Science and Technology",
      "state": "kebbi",
      "nickname": "kebbi-state-university-of-science-and-technology40716"
    },
    {
      "name": "Prince Abubakar Audu University",
      "state": "kogi",
      "nickname": "prince-abubakar-audu-university48316"
    },
    {
      "name": "Kwara State University",
      "state": "kwara",
      "nickname": "kwara-state-university33420"
    },
    {
      "name": "Ladoke Akintola University of Technology",
      "state": "oyo",
      "nickname": "ladoke-akintola-university-of-technology21252"
    },
    {
      "name": "Lagos State University",
      "state": "lagos",
      "nickname": "lagos-state-university18880"
    },
    {
      "name": "Lagos State University of Education",
      "state": "lagos",
      "nickname": "lagos-state-university-of-education45880"
    },
    {
      "name": "Lagos State University of Science and Technology",
      "state": "lagos",
      "nickname": "lagos-state-university-of-science-and-technology35058"
    },
    {
      "name": "Nasarawa State University",
      "state": "nasarawa",
      "nickname": "nasarawa-state-university49104"
    },
    {
      "name": "Niger Delta University",
      "state": "bayelsa",
      "nickname": "niger-delta-university21829"
    },
    {
      "name": "Olabisi Onabanjo University",
      "state": "ogun",
      "nickname": "olabisi-onabanjo-university35272"
    },
    {
      "name": "Olusegun Agagu University of Science and Technology",
      "state": "ondo",
      "nickname": "olusegun-agagu-university-of-science-and-technology25842"
    },
    {
      "name": "Osun State University",
      "state": "osun",
      "nickname": "osun-state-university16684"
    },
    {
      "name": "Plateau State University",
      "state": "plateau",
      "nickname": "plateau-state-university22849"
    },
    {
      "name": "Rivers State University",
      "state": "rivers",
      "nickname": "rivers-state-university48724"
    },
    {
      "name": "Sule Lamido University",
      "state": "jigawa",
      "nickname": "sule-lamido-university8111"
    },
    {
      "name": "Tai Solarin University of Education",
      "state": "ogun",
      "nickname": "tai-solarin-university-of-education30870"
    },
    {
      "name": "Taraba State University",
      "state": "taraba",
      "nickname": "taraba-state-university36618"
    },
    {
      "name": "Umaru Musa Yar'adua University",
      "state": "katsina",
      "nickname": "umaru-musa-yar'adua-university19149"
    },
    {
      "name": "Sokoto State University",
      "state": "sokoto",
      "nickname": "sokoto-state-university13732"
    },
    {
      "name": "University of Delta, Agbor",
      "state": "delta",
      "nickname": "university-of-delta--agbor11066"
    },
    {
      "name": "Yusuf Maitama Sule University Kano",
      "state": "kano",
      "nickname": "yusuf-maitama-sule-university-kano3254"
    },
    {
      "name": "Zamfara State University",
      "state": "zamfara",
      "nickname": "zamfara-state-university18029"
    },
    {
      "name": "Nigeria Airforce University",
      "state": "kaduna",
      "nickname": "nigeria-airforce-university20977"
    },
    {
      "name": "Nigeria Maritime University",
      "state": "delta",
      "nickname": "nigeria-maritime-university14770"
    },
    {
      "name": "Nigeria Police Academy Wudil",
      "state": "kano",
      "nickname": "nigeria-police-academy-wudil8327"
    },
    {
      "name": "Nigerian Army University Biu",
      "state": "borno",
      "nickname": "nigerian-army-university-biu4439"
    },
    {
      "name": "Nigerian Defence Academy",
      "state": "kaduna",
      "nickname": "nigerian-defence-academy36389"
    },
    {
      "name": "Achievers University",
      "state": "ondo",
      "nickname": "achievers-university31046"
    },
    {
      "name": "Adeleke University",
      "state": "osun",
      "nickname": "adeleke-university28545"
    },
    {
      "name": "Afe Babalola University",
      "state": "ekiti",
      "nickname": "afe-babalola-university20033"
    },
    {
      "name": "African University of Science and Technology",
      "state": "federal capital territory",
      "nickname": "african-university-of-science-and-technology46258"
    },
    {
      "name": "Ahman Pategi University",
      "state": "kwara",
      "nickname": "ahman-pategi-university41443"
    },
    {
      "name": "Ajayi Crowther University",
      "state": "oyo",
      "nickname": "ajayi-crowther-university14216"
    },
    {
      "name": "Al-Ansar University",
      "state": "borno",
      "nickname": "al-ansar-university45353"
    },
    {
      "name": "Al-Hikmah University",
      "state": "kwara",
      "nickname": "al-hikmah-university4211"
    },
    {
      "name": "Al-Qalam University",
      "state": "katsina",
      "nickname": "al-qalam-university34511"
    },
    {
      "name": "Al-Istiqama University",
      "state": "kano",
      "nickname": "al-istiqama-university44011"
    },
    {
      "name": "American University of Nigeria",
      "state": "adamawa",
      "nickname": "american-university-of-nigeria31967"
    },
    {
      "name": "Association of National Accountants of Nigeria University",
      "state": "plateau",
      "nickname": "association-of-national-accountants-of-nigeria-university7259"
    },
    {
      "name": "Anchor University",
      "state": "lagos",
      "nickname": "anchor-university18864"
    },
    {
      "name": "Arthur Jarvis University",
      "state": "cross river",
      "nickname": "arthur-jarvis-university22337"
    },
    {
      "name": "Atiba University",
      "state": "oyo",
      "nickname": "atiba-university9973"
    },
    {
      "name": "Augustine University",
      "state": "lagos",
      "nickname": "augustine-university41891"
    },
    {
      "name": "Ave Maria University",
      "state": "nasarawa",
      "nickname": "ave-maria-university45586"
    },
    {
      "name": "Babcock University",
      "state": "ogun",
      "nickname": "babcock-university39432"
    },
    {
      "name": "Baze University",
      "state": "federal capital territory",
      "nickname": "baze-university16584"
    },
    {
      "name": "Bells University of Technology",
      "state": "ogun",
      "nickname": "bells-university-of-technology38109"
    },
    {
      "name": "Benson Idahosa University",
      "state": "edo",
      "nickname": "benson-idahosa-university13148"
    },
    {
      "name": "Bowen University",
      "state": "osun",
      "nickname": "bowen-university46447"
    },
    {
      "name": "Caleb University",
      "state": "lagos",
      "nickname": "caleb-university9152"
    },
    {
      "name": "Capital City University of Nigeria",
      "state": "kano",
      "nickname": "capital-city-university-of-nigeria48362"
    },
    {
      "name": "Caritas University",
      "state": "enugu",
      "nickname": "caritas-university15170"
    },
    {
      "name": "CETEP City University",
      "state": "lagos",
      "nickname": "cetep-city-university43098"
    },
    {
      "name": "Chrisland University",
      "state": "ogun",
      "nickname": "chrisland-university15133"
    },
    {
      "name": "Christopher University",
      "state": "ogun",
      "nickname": "christopher-university27277"
    },
    {
      "name": "Claretian University",
      "state": "imo",
      "nickname": "claretian-university12465"
    },
    {
      "name": "Clifford University",
      "state": "abia",
      "nickname": "clifford-university27353"
    },
    {
      "name": "Coal City University",
      "state": "enugu",
      "nickname": "coal-city-university46622"
    },
    {
      "name": "Covenant University",
      "state": "ogun",
      "nickname": "covenant-university32601"
    },
    {
      "name": "Crawford University",
      "state": "ogun",
      "nickname": "crawford-university30192"
    },
    {
      "name": "Crescent University",
      "state": "ogun",
      "nickname": "crescent-university48378"
    },
    {
      "name": "Dominican University",
      "state": "oyo",
      "nickname": "dominican-university12902"
    },
    {
      "name": "Dominion University",
      "state": "oyo",
      "nickname": "dominion-university32882"
    },
    {
      "name": "ECWA Bingham University",
      "state": "nasarawa",
      "nickname": "ecwa-bingham-university13799"
    },
    {
      "name": "Edwin Clark University",
      "state": "delta",
      "nickname": "edwin-clark-university8361"
    },
    {
      "name": "Edusoko University",
      "state": "niger",
      "nickname": "edusoko-university35507"
    },
    {
      "name": "Elizade University",
      "state": "ondo",
      "nickname": "elizade-university47631"
    },
    {
      "name": "Fountain University, Osogbo",
      "state": "osun",
      "nickname": "fountain-university--osogbo1569"
    },
    {
      "name": "Godfrey Okoye University",
      "state": "enugu",
      "nickname": "godfrey-okoye-university42500"
    },
    {
      "name": "Greenfield University",
      "state": "kaduna",
      "nickname": "greenfield-university2294"
    },
    {
      "name": "Gregory University",
      "state": "abia",
      "nickname": "gregory-university22970"
    },
    {
      "name": "Hallmark University",
      "state": "ogun",
      "nickname": "hallmark-university42474"
    },
    {
      "name": "Havilla University",
      "state": "cross river",
      "nickname": "havilla-university27168"
    },
    {
      "name": "Hezekiah University",
      "state": "imo",
      "nickname": "hezekiah-university22321"
    },
    {
      "name": "Igbinedion University",
      "state": "edo",
      "nickname": "igbinedion-university28105"
    },
    {
      "name": "James Hope University",
      "state": "lagos",
      "nickname": "james-hope-university6198"
    },
    {
      "name": "Joseph Ayo Babalola University",
      "state": "osun",
      "nickname": "joseph-ayo-babalola-university8046"
    },
    {
      "name": "Karl-Kumm University",
      "state": "plateau",
      "nickname": "karl-kumm-university4586"
    },
    {
      "name": "Khadija University",
      "state": "jigawa",
      "nickname": "khadija-university18247"
    },
    {
      "name": "Kings University",
      "state": "osun",
      "nickname": "kings-university33186"
    },
    {
      "name": "Koladaisi University",
      "state": "oyo",
      "nickname": "koladaisi-university47742"
    },
    {
      "name": "Kwararafa University",
      "state": "taraba",
      "nickname": "kwararafa-university9302"
    },
    {
      "name": "Landmark University",
      "state": "kwara",
      "nickname": "landmark-university32617"
    },
    {
      "name": "Lead City University",
      "state": "oyo",
      "nickname": "lead-city-university47962"
    },
    {
      "name": "Legacy University",
      "state": "anambra",
      "nickname": "legacy-university36382"
    },
    {
      "name": "Madonna University",
      "state": "rivers",
      "nickname": "madonna-university12902"
    },
    {
      "name": "Maranathan University",
      "state": "imo",
      "nickname": "maranathan-university45570"
    },
    {
      "name": "Maryam Abacha American University of Nigeria",
      "state": "kano",
      "nickname": "maryam-abacha-american-university-of-nigeria45275"
    },
    {
      "name": "McPherson University",
      "state": "ogun",
      "nickname": "mcpherson-university4290"
    },
    {
      "name": "Mewar University",
      "state": "nasarawa",
      "nickname": "mewar-university35627"
    },
    {
      "name": "Michael and Cecilia Ibru University",
      "state": "delta",
      "nickname": "michael-and-cecilia-ibru-university44871"
    },
    {
      "name": "Mountain Top University",
      "state": "ogun",
      "nickname": "mountain-top-university2013"
    },
    {
      "name": "Mudiame University",
      "state": "edo",
      "nickname": "mudiame-university32263"
    },
    {
      "name": "Nile University of Nigeria",
      "state": "federal capital territory",
      "nickname": "nile-university-of-nigeria5939"
    },
    {
      "name": "NOK University",
      "state": "kaduna",
      "nickname": "nok-university12705"
    },
    {
      "name": "Novena University",
      "state": "delta",
      "nickname": "novena-university14453"
    },
    {
      "name": "Obong University",
      "state": "akwa ibom",
      "nickname": "obong-university22342"
    },
    {
      "name": "Oduduwa University",
      "state": "osun",
      "nickname": "oduduwa-university7179"
    },
    {
      "name": "PAMO University of Medical Sciences",
      "state": "rivers",
      "nickname": "pamo-university-of-medical-sciences2811"
    },
    {
      "name": "Pan-Atlantic University",
      "state": "lagos",
      "nickname": "pan-atlantic-university4827"
    },
    {
      "name": "Paul University",
      "state": "anambra",
      "nickname": "paul-university28951"
    },
    {
      "name": "PEN Resource University",
      "state": "gombe",
      "nickname": "pen-resource-university38430"
    },
    {
      "name": "Philomath University",
      "state": "federal capital territory",
      "nickname": "philomath-university20137"
    },
    {
      "name": "Precious Cornerstone University",
      "state": "oyo",
      "nickname": "precious-cornerstone-university16252"
    },
    {
      "name": "Redeemer's University Nigeria",
      "state": "osun",
      "nickname": "redeemer's-university-nigeria48078"
    },
    {
      "name": "Renaissance University",
      "state": "enugu",
      "nickname": "renaissance-university22616"
    },
    {
      "name": "Rhema University",
      "state": "abia",
      "nickname": "rhema-university8916"
    },
    {
      "name": "Ritman University",
      "state": "akwa ibom",
      "nickname": "ritman-university42865"
    },
    {
      "name": "Salem University",
      "state": "kogi",
      "nickname": "salem-university36515"
    },
    {
      "name": "Samuel Adegboyega University",
      "state": "edo",
      "nickname": "samuel-adegboyega-university549"
    },
    {
      "name": "Skyline University Nigeria",
      "state": "kano",
      "nickname": "skyline-university-nigeria31366"
    },
    {
      "name": "Southwestern University, Nigeria",
      "state": "ogun",
      "nickname": "southwestern-university--nigeria35744"
    },
    {
      "name": "Spiritan University",
      "state": "abia",
      "nickname": "spiritan-university28135"
    },
    {
      "name": "Summit University",
      "state": "kwara",
      "nickname": "summit-university40717"
    },
    {
      "name": "Thomas Adewunmi University",
      "state": "kwara",
      "nickname": "thomas-adewunmi-university39794"
    },
    {
      "name": "Topfaith University",
      "state": "akwa ibom",
      "nickname": "topfaith-university49646"
    },
    {
      "name": "Trinity University, Nigeria",
      "state": "ogun",
      "nickname": "trinity-university--nigeria33469"
    },
    {
      "name": "Veritas University",
      "state": "federal capital territory",
      "nickname": "veritas-university22178"
    },
    {
      "name": "Wesley University",
      "state": "ondo",
      "nickname": "wesley-university7566"
    },
    {
      "name": "Western Delta University",
      "state": "delta",
      "nickname": "western-delta-university48924"
    },
    {
      "name": "Westland University",
      "state": "osun",
      "nickname": "westland-university35722"
    },
    {
      "name": "University of Offa",
      "state": "kwara",
      "nickname": "university-of-offa34728"
    },
    {
      "name": "University of Mkar",
      "state": "benue",
      "nickname": "university-of-mkar22986"
    }
  ];

  
  module.exports = schools;
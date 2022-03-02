// pos is position of where the user in the test or which question they're up to
var pos = 0, test, test_status, question, choice, choices, smash, pass, correct = 0, answerlist;
answerlist = ""
// stupid big array
var questions = [
  {
      question: "Abomasnow"
    },
  {
      question: "Abra"
    },
  {
      question: "Absol"
    },
  {
      question: "Accelgor"
    },
  {
      question: "Aegislash"
    },
  {
      question: "Aerodactyl"
    },
  {
      question: "Aggron"
    },
  {
      question: "Aipom"
    },
  {
      question: "Alakazam"
    },
  {
      question: "Alcremie"
    },
  {
      question: "Alomomola"
    },
  {
      question: "Altaria"
    },
  {
      question: "Amaura"
    },
  {
      question: "Ambipom"
    },
  {
      question: "Amoonguss"
    },
  {
      question: "Ampharos"
    },
  {
      question: "Anorith"
    },
  {
      question: "Appletun"
    },
  {
      question: "Applin"
    },
  {
      question: "Araquanid"
    },
  {
      question: "Arbok"
    },
  {
      question: "Arcanine"
    },
  {
      question: "Arceus"
    },
  {
      question: "Archen"
    },
  {
      question: "Archeops"
    },
  {
      question: "Arctovish"
    },
  {
      question: "Arctozolt"
    },
  {
      question: "Ariados"
    },
  {
      question: "Armaldo"
    },
  {
      question: "Aromatisse"
    },
  {
      question: "Aron"
    },
  {
      question: "Arrokuda"
    },
  {
      question: "Articuno"
    },
  {
      question: "Audino"
    },
  {
      question: "Aurorus"
    },
  {
      question: "Avalugg"
    },
  {
      question: "Axew"
    },
  {
      question: "Azelf"
    },
  {
      question: "Azumarill"
    },
  {
      question: "Azurill"
    },
  {
      question: "Bagon"
    },
  {
      question: "Baltoy"
    },
  {
      question: "Banette"
    },
  {
      question: "Barbaracle"
    },
  {
      question: "Barboach"
    },
  {
      question: "Barraskewda"
    },
  {
      question: "Basculegion"
    },
  {
      question: "Basculin"
    },
  {
      question: "Bastiodon"
    },
  {
      question: "Bayleef"
    },
  {
      question: "Beartic"
    },
  {
      question: "Beautifly"
    },
  {
      question: "Beedrill"
    },
  {
      question: "Beheeyem"
    },
  {
      question: "Beldum"
    },
  {
      question: "Bellossom"
    },
  {
      question: "Bellsprout"
    },
  {
      question: "Bergmite"
    },
  {
      question: "Bewear"
    },
  {
      question: "Bibarel"
    },
  {
      question: "Bidoof"
    },
  {
      question: "Binacle"
    },
  {
      question: "Bisharp"
    },
  {
      question: "Blacephalon"
    },
  {
      question: "Blastoise"
    },
  {
      question: "Blaziken"
    },
  {
      question: "Blipbug"
    },
  {
      question: "Blissey"
    },
  {
      question: "Blitzle"
    },
  {
      question: "Boldore"
    },
  {
      question: "Boltund"
    },
  {
      question: "Bonsly"
    },
  {
      question: "Bouffalant"
    },
  {
      question: "Bounsweet"
    },
  {
      question: "Braixen"
    },
  {
      question: "Braviary"
    },
  {
      question: "Breloom"
    },
  {
      question: "Brionne"
    },
  {
      question: "Bronzong"
    },
  {
      question: "Bronzor"
    },
  {
      question: "Bruxish"
    },
  {
      question: "Budew"
    },
  {
      question: "Buizel"
    },
  {
      question: "Buneary"
    },
  {
      question: "Bunnelby"
    },
  {
      question: "Burmy"
    },
  {
      question: "Butterfree"
    },
  {
      question: "Buzzwole"
    },
  {
      question: "Cacnea"
    },
  {
      question: "Cacturne"
    },
  {
      question: "Calyrex"
    },
  {
      question: "Camerupt"
    },
  {
      question: "Carbink"
    },
  {
      question: "Carkol"
    },
  {
      question: "Carnivine"
    },
  {
      question: "Carracosta"
    },
  {
      question: "Carvanha"
    },
  {
      question: "Cascoon"
    },
  {
      question: "Castform"
    },
  {
      question: "Caterpie"
    },
  {
      question: "Celebi"
    },
  {
      question: "Celesteela"
    },
  {
      question: "Centiskorch"
    },
  {
      question: "Chandelure"
    },
  {
      question: "Chansey"
    },
  {
      question: "Charizard"
    },
  {
      question: "Charjabug"
    },
  {
      question: "Charmander"
    },
  {
      question: "Charmeleon"
    },
  {
      question: "Chatot"
    },
  {
      question: "Cherrim"
    },
  {
      question: "Cherubi"
    },
  {
      question: "Chesnaught"
    },
  {
      question: "Chespin"
    },
  {
      question: "Chewtle"
    },
  {
      question: "Chikorita"
    },
  {
      question: "Chimchar"
    },
  {
      question: "Chimecho"
    },
  {
      question: "Chinchou"
    },
  {
      question: "Chingling"
    },
  {
      question: "Cinccino"
    },
  {
      question: "Cinderace"
    },
  {
      question: "Clamperl"
    },
  {
      question: "Clauncher"
    },
  {
      question: "Clawitzer"
    },
  {
      question: "Claydol"
    },
  {
      question: "Clefable"
    },
  {
      question: "Clefairy"
    },
  {
      question: "Cleffa"
    },
  {
      question: "Clobbopus"
    },
  {
      question: "Cloyster"
    },
  {
      question: "Coalossal"
    },
  {
      question: "Cobalion"
    },
  {
      question: "Cofagrigus"
    },
  {
      question: "Combee"
    },
  {
      question: "Combusken"
    },
  {
      question: "Comfey"
    },
  {
      question: "Conkeldurr"
    },
  {
      question: "Copperajah"
    },
  {
      question: "Corphish"
    },
  {
      question: "Corsola"
    },
  {
      question: "Corviknight"
    },
  {
      question: "Corvisquire"
    },
  {
      question: "Cosmoem"
    },
  {
      question: "Cosmog"
    },
  {
      question: "Cottonee"
    },
  {
      question: "Crabominable"
    },
  {
      question: "Crabrawler"
    },
  {
      question: "Cradily"
    },
  {
      question: "Cramorant"
    },
  {
      question: "Cranidos"
    },
  {
      question: "Crawdaunt"
    },
  {
      question: "Cresselia"
    },
  {
      question: "Croagunk"
    },
  {
      question: "Crobat"
    },
  {
      question: "Croconaw"
    },
  {
      question: "Crustle"
    },
  {
      question: "Cryogonal"
    },
  {
      question: "Cubchoo"
    },
  {
      question: "Cubone"
    },
  {
      question: "Cufant"
    },
  {
      question: "Cursola"
    },
  {
      question: "Cutiefly"
    },
  {
      question: "Cyndaquil"
    },
  {
      question: "Darkrai"
    },
  {
      question: "Darmanitan"
    },
  {
      question: "Dartrix"
    },
  {
      question: "Darumaka"
    },
  {
      question: "Decidueye"
    },
  {
      question: "Dedenne"
    },
  {
      question: "Deerling"
    },
  {
      question: "Deino"
    },
  {
      question: "Delcatty"
    },
  {
      question: "Delibird"
    },
  {
      question: "Delphox"
    },
  {
      question: "Deoxys"
    },
  {
      question: "Dewgong"
    },
  {
      question: "Dewott"
    },
  {
      question: "Dewpider"
    },
  {
      question: "Dhelmise"
    },
  {
      question: "Dialga"
    },
  {
      question: "Diancie"
    },
  {
      question: "Diggersby"
    },
  {
      question: "Diglett"
    },
  {
      question: "Ditto"
    },
  {
      question: "Dodrio"
    },
  {
      question: "Doduo"
    },
  {
      question: "Donphan"
    },
  {
      question: "Dottler"
    },
  {
      question: "Doublade"
    },
  {
      question: "Dracovish"
    },
  {
      question: "Dracozolt"
    },
  {
      question: "Dragalge"
    },
  {
      question: "Dragapult"
    },
  {
      question: "Dragonair"
    },
  {
      question: "Dragonite"
    },
  {
      question: "Drakloak"
    },
  {
      question: "Drampa"
    },
  {
      question: "Drapion"
    },
  {
      question: "Dratini"
    },
  {
      question: "Drednaw"
    },
  {
      question: "Dreepy"
    },
  {
      question: "Drifblim"
    },
  {
      question: "Drifloon"
    },
  {
      question: "Drilbur"
    },
  {
      question: "Drizzile"
    },
  {
      question: "Drowzee"
    },
  {
      question: "Druddigon"
    },
  {
      question: "Dubwool"
    },
  {
      question: "Ducklett"
    },
  {
      question: "Dugtrio"
    },
  {
      question: "Dunsparce"
    },
  {
      question: "Duosion"
    },
  {
      question: "Duraludon"
    },
  {
      question: "Durant"
    },
  {
      question: "Dusclops"
    },
  {
      question: "Dusknoir"
    },
  {
      question: "Duskull"
    },
  {
      question: "Dustox"
    },
  {
      question: "Dwebble"
    },
  {
      question: "Eelektrik"
    },
  {
      question: "Eelektross"
    },
  {
      question: "Eevee"
    },
  {
      question: "Eiscue"
    },
  {
      question: "Ekans"
    },
  {
      question: "Eldegoss"
    },
  {
      question: "Electabuzz"
    },
  {
      question: "Electivire"
    },
  {
      question: "Electrike"
    },
  {
      question: "Electrode"
    },
  {
      question: "Elekid"
    },
  {
      question: "Elgyem"
    },
  {
      question: "Emboar"
    },
  {
      question: "Emolga"
    },
  {
      question: "Empoleon"
    },
  {
      question: "Enamorus"
    },
  {
      question: "Entei"
    },
  {
      question: "Escavalier"
    },
  {
      question: "Espeon"
    },
  {
      question: "Espurr"
    },
  {
      question: "Eternatus"
    },
  {
      question: "Excadrill"
    },
  {
      question: "Exeggcute"
    },
  {
      question: "Exeggutor"
    },
  {
      question: "Exploud"
    },
  {
      question: "Falinks"
    },
  {
      question: "Farfetch'd"
    },
  {
      question: "Fearow"
    },
  {
      question: "Feebas"
    },
  {
      question: "Fennekin"
    },
  {
      question: "Feraligatr"
    },
  {
      question: "Ferroseed"
    },
  {
      question: "Ferrothorn"
    },
  {
      question: "Finneon"
    },
  {
      question: "Flaaffy"
    },
  {
      question: "Flabébé"
    },
  {
      question: "Flapple"
    },
  {
      question: "Flareon"
    },
  {
      question: "Fletchinder"
    },
  {
      question: "Fletchling"
    },
  {
      question: "Floatzel"
    },
  {
      question: "Floette"
    },
  {
      question: "Florges"
    },
  {
      question: "Flygon"
    },
  {
      question: "Fomantis"
    },
  {
      question: "Foongus"
    },
  {
      question: "Forretress"
    },
  {
      question: "Fraxure"
    },
  {
      question: "Frillish"
    },
  {
      question: "Froakie"
    },
  {
      question: "Frogadier"
    },
  {
      question: "Froslass"
    },
  {
      question: "Frosmoth"
    },
  {
      question: "Furfrou"
    },
  {
      question: "Furret"
    },
  {
      question: "Gabite"
    },
  {
      question: "Gallade"
    },
  {
      question: "Galvantula"
    },
  {
      question: "Garbodor"
    },
  {
      question: "Garchomp"
    },
  {
      question: "Gardevoir"
    },
  {
      question: "Gastly"
    },
  {
      question: "Gastrodon"
    },
  {
      question: "Genesect"
    },
  {
      question: "Gengar"
    },
  {
      question: "Geodude"
    },
  {
      question: "Gible"
    },
  {
      question: "Gigalith"
    },
  {
      question: "Girafarig"
    },
  {
      question: "Giratina"
    },
  {
      question: "Glaceon"
    },
  {
      question: "Glalie"
    },
  {
      question: "Glameow"
    },
  {
      question: "Glastrier"
    },
  {
      question: "Gligar"
    },
  {
      question: "Gliscor"
    },
  {
      question: "Gloom"
    },
  {
      question: "Gogoat"
    },
  {
      question: "Golbat"
    },
  {
      question: "Goldeen"
    },
  {
      question: "Golduck"
    },
  {
      question: "Golem"
    },
  {
      question: "Golett"
    },
  {
      question: "Golisopod"
    },
  {
      question: "Golurk"
    },
  {
      question: "Goodra"
    },
  {
      question: "Goomy"
    },
  {
      question: "Gorebyss"
    },
  {
      question: "Gossifleur"
    },
  {
      question: "Gothita"
    },
  {
      question: "Gothitelle"
    },
  {
      question: "Gothorita"
    },
  {
      question: "Gourgeist"
    },
  {
      question: "Granbull"
    },
  {
      question: "Grapploct"
    },
  {
      question: "Graveler"
    },
  {
      question: "Greedent"
    },
  {
      question: "Greninja"
    },
  {
      question: "Grimer"
    },
  {
      question: "Grimmsnarl"
    },
  {
      question: "Grookey"
    },
  {
      question: "Grotle"
    },
  {
      question: "Groudon"
    },
  {
      question: "Grovyle"
    },
  {
      question: "Growlithe"
    },
  {
      question: "Grubbin"
    },
  {
      question: "Grumpig"
    },
  {
      question: "Gulpin"
    },
  {
      question: "Gumshoos"
    },
  {
      question: "Gurdurr"
    },
  {
      question: "Guzzlord"
    },
  {
      question: "Gyarados"
    },
  {
      question: "Hakamo-o"
    },
  {
      question: "Happiny"
    },
  {
      question: "Hariyama"
    },
  {
      question: "Hatenna"
    },
  {
      question: "Hatterene"
    },
  {
      question: "Hattrem"
    },
  {
      question: "Haunter"
    },
  {
      question: "Hawlucha"
    },
  {
      question: "Haxorus"
    },
  {
      question: "Heatmor"
    },
  {
      question: "Heatran"
    },
  {
      question: "Heliolisk"
    },
  {
      question: "Helioptile"
    },
  {
      question: "Heracross"
    },
  {
      question: "Herdier"
    },
  {
      question: "Hippopotas"
    },
  {
      question: "Hippowdon"
    },
  {
      question: "Hitmonchan"
    },
  {
      question: "Hitmonlee"
    },
  {
      question: "Hitmontop"
    },
  {
      question: "Ho-oh"
    },
  {
      question: "Honchkrow"
    },
  {
      question: "Honedge"
    },
  {
      question: "Hoopa"
    },
  {
      question: "Hoothoot"
    },
  {
      question: "Hoppip"
    },
  {
      question: "Horsea"
    },
  {
      question: "Houndoom"
    },
  {
      question: "Houndour"
    },
  {
      question: "Huntail"
    },
  {
      question: "Hydreigon"
    },
  {
      question: "Hypno"
    },
  {
      question: "Igglybuff"
    },
  {
      question: "Illumise"
    },
  {
      question: "Impidimp"
    },
  {
      question: "Incineroar"
    },
  {
      question: "Indeedee"
    },
  {
      question: "Infernape"
    },
  {
      question: "Inkay"
    },
  {
      question: "Inteleon"
    },
  {
      question: "Ivysaur"
    },
  {
      question: "Jangmo-o"
    },
  {
      question: "Jellicent"
    },
  {
      question: "Jigglypuff"
    },
  {
      question: "Jirachi"
    },
  {
      question: "Jolteon"
    },
  {
      question: "Joltik"
    },
  {
      question: "Jumpluff"
    },
  {
      question: "Jynx"
    },
  {
      question: "Kabuto"
    },
  {
      question: "Kabutops"
    },
  {
      question: "Kadabra"
    },
  {
      question: "Kakuna"
    },
  {
      question: "Kangaskhan"
    },
  {
      question: "Karrablast"
    },
  {
      question: "Kartana"
    },
  {
      question: "Kecleon"
    },
  {
      question: "Keldeo"
    },
  {
      question: "Kingdra"
    },
  {
      question: "Kingler"
    },
  {
      question: "Kirlia"
    },
  {
      question: "Klang"
    },
  {
      question: "Kleavor"
    },
  {
      question: "Klefki"
    },
  {
      question: "Klink"
    },
  {
      question: "Klinklang"
    },
  {
      question: "Koffing"
    },
  {
      question: "Komala"
    },
  {
      question: "Kommo-o"
    },
  {
      question: "Krabby"
    },
  {
      question: "Kricketot"
    },
  {
      question: "Kricketune"
    },
  {
      question: "Krokorok"
    },
  {
      question: "Krookodile"
    },
  {
      question: "Kubfu"
    },
  {
      question: "Kyogre"
    },
  {
      question: "Kyurem"
    },
  {
      question: "Lairon"
    },
  {
      question: "Lampent"
    },
  {
      question: "Landorus"
    },
  {
      question: "Lanturn"
    },
  {
      question: "Lapras"
    },
  {
      question: "Larvesta"
    },
  {
      question: "Larvitar"
    },
  {
      question: "Latias"
    },
  {
      question: "Latios"
    },
  {
      question: "Leafeon"
    },
  {
      question: "Leavanny"
    },
  {
      question: "Ledian"
    },
  {
      question: "Ledyba"
    },
  {
      question: "Lickilicky"
    },
  {
      question: "Lickitung"
    },
  {
      question: "Liepard"
    },
  {
      question: "Lileep"
    },
  {
      question: "Lilligant"
    },
  {
      question: "Lillipup"
    },
  {
      question: "Linoone"
    },
  {
      question: "Litleo"
    },
  {
      question: "Litten"
    },
  {
      question: "Litwick"
    },
  {
      question: "Lombre"
    },
  {
      question: "Lopunny"
    },
  {
      question: "Lotad"
    },
  {
      question: "Loudred"
    },
  {
      question: "Lucario"
    },
  {
      question: "Ludicolo"
    },
  {
      question: "Lugia"
    },
  {
      question: "Lumineon"
    },
  {
      question: "Lunala"
    },
  {
      question: "Lunatone"
    },
  {
      question: "Lurantis"
    },
  {
      question: "Luvdisc"
    },
  {
      question: "Luxio"
    },
  {
      question: "Luxray"
    },
  {
      question: "Lycanroc"
    },
  {
      question: "Machamp"
    },
  {
      question: "Machoke"
    },
  {
      question: "Machop"
    },
  {
      question: "Magby"
    },
  {
      question: "Magcargo"
    },
  {
      question: "Magearna"
    },
  {
      question: "Magikarp"
    },
  {
      question: "Magmar"
    },
  {
      question: "Magmortar"
    },
  {
      question: "Magnemite"
    },
  {
      question: "Magneton"
    },
  {
      question: "Magnezone"
    },
  {
      question: "Makuhita"
    },
  {
      question: "Malamar"
    },
  {
      question: "Mamoswine"
    },
  {
      question: "Manaphy"
    },
  {
      question: "Mandibuzz"
    },
  {
      question: "Manectric"
    },
  {
      question: "Mankey"
    },
  {
      question: "Mantine"
    },
  {
      question: "Mantyke"
    },
  {
      question: "Maractus"
    },
  {
      question: "Mareanie"
    },
  {
      question: "Mareep"
    },
  {
      question: "Marill"
    },
  {
      question: "Marowak"
    },
  {
      question: "Marshadow"
    },
  {
      question: "Marshtomp"
    },
  {
      question: "Masquerain"
    },
  {
      question: "Mawile"
    },
  {
      question: "Medicham"
    },
  {
      question: "Meditite"
    },
  {
      question: "Meganium"
    },
  {
      question: "Melmetal"
    },
  {
      question: "Meloetta"
    },
  {
      question: "Meltan"
    },
  {
      question: "Meowstic"
    },
  {
      question: "Meowth"
    },
  {
      question: "Mesprit"
    },
  {
      question: "Metagross"
    },
  {
      question: "Metang"
    },
  {
      question: "Metapod"
    },
  {
      question: "Mew"
    },
  {
      question: "Mewtwo"
    },
  {
      question: "Mienfoo"
    },
  {
      question: "Mienshao"
    },
  {
      question: "Mightyena"
    },
  {
      question: "Milcery"
    },
  {
      question: "Milotic"
    },
  {
      question: "Miltank"
    },
  {
      question: "Mime Jr."
    },
  {
      question: "Mimikyu"
    },
  {
      question: "Minccino"
    },
  {
      question: "Minior"
    },
  {
      question: "Minun"
    },
  {
      question: "Misdreavus"
    },
  {
      question: "Mismagius"
    },
  {
      question: "Moltres"
    },
  {
      question: "Monferno"
    },
  {
      question: "Morelull"
    },
  {
      question: "Morgrem"
    },
  {
      question: "Morpeko"
    },
  {
      question: "Mothim"
    },
  {
      question: "Mr. Mime"
    },
  {
      question: "Mr. Rime"
    },
  {
      question: "Mudbray"
    },
  {
      question: "Mudkip"
    },
  {
      question: "Mudsdale"
    },
  {
      question: "Muk"
    },
  {
      question: "Munchlax"
    },
  {
      question: "Munna"
    },
  {
      question: "Murkrow"
    },
  {
      question: "Musharna"
    },
  {
      question: "Naganadel"
    },
  {
      question: "Natu"
    },
  {
      question: "Necrozma"
    },
  {
      question: "Nickit"
    },
  {
      question: "Nidoking"
    },
  {
      question: "Nidoqueen"
    },
  {
      question: "Nidoran♀"
    },
  {
      question: "Nidoran♂"
    },
  {
      question: "Nidorina"
    },
  {
      question: "Nidorino"
    },
  {
      question: "Nihilego"
    },
  {
      question: "Nincada"
    },
  {
      question: "Ninetales"
    },
  {
      question: "Ninjask"
    },
  {
      question: "Noctowl"
    },
  {
      question: "Noibat"
    },
  {
      question: "Noivern"
    },
  {
      question: "Nosepass"
    },
  {
      question: "Numel"
    },
  {
      question: "Nuzleaf"
    },
  {
      question: "Obstagoon"
    },
  {
      question: "Octillery"
    },
  {
      question: "Oddish"
    },
  {
      question: "Omanyte"
    },
  {
      question: "Omastar"
    },
  {
      question: "Onix"
    },
  {
      question: "Oranguru"
    },
  {
      question: "Orbeetle"
    },
  {
      question: "Oricorio"
    },
  {
      question: "Oshawott"
    },
  {
      question: "Overqwil"
    },
  {
      question: "Pachirisu"
    },
  {
      question: "Palkia"
    },
  {
      question: "Palossand"
    },
  {
      question: "Palpitoad"
    },
  {
      question: "Pancham"
    },
  {
      question: "Pangoro"
    },
  {
      question: "Panpour"
    },
  {
      question: "Pansage"
    },
  {
      question: "Pansear"
    },
  {
      question: "Paras"
    },
  {
      question: "Parasect"
    },
  {
      question: "Passimian"
    },
  {
      question: "Patrat"
    },
  {
      question: "Pawniard"
    },
  {
      question: "Pelipper"
    },
  {
      question: "Perrserker"
    },
  {
      question: "Persian"
    },
  {
      question: "Petilil"
    },
  {
      question: "Phanpy"
    },
  {
      question: "Phantump"
    },
  {
      question: "Pheromosa"
    },
  {
      question: "Phione"
    },
  {
      question: "Pichu"
    },
  {
      question: "Pidgeot"
    },
  {
      question: "Pidgeotto"
    },
  {
      question: "Pidgey"
    },
  {
      question: "Pidove"
    },
  {
      question: "Pignite"
    },
  {
      question: "Pikachu"
    },
  {
      question: "Pikipek"
    },
  {
      question: "Piloswine"
    },
  {
      question: "Pincurchin"
    },
  {
      question: "Pineco"
    },
  {
      question: "Pinsir"
    },
  {
      question: "Piplup"
    },
  {
      question: "Plusle"
    },
  {
      question: "Poipole"
    },
  {
      question: "Politoed"
    },
  {
      question: "Poliwag"
    },
  {
      question: "Poliwhirl"
    },
  {
      question: "Poliwrath"
    },
  {
      question: "Polteageist"
    },
  {
      question: "Ponyta"
    },
  {
      question: "Poochyena"
    },
  {
      question: "Popplio"
    },
  {
      question: "Porygon"
    },
  {
      question: "Porygon-Z"
    },
  {
      question: "Porygon2"
    },
  {
      question: "Primarina"
    },
  {
      question: "Primeape"
    },
  {
      question: "Prinplup"
    },
  {
      question: "Probopass"
    },
  {
      question: "Psyduck"
    },
  {
      question: "Pumpkaboo"
    },
  {
      question: "Pupitar"
    },
  {
      question: "Purrloin"
    },
  {
      question: "Purugly"
    },
  {
      question: "Pyroar"
    },
  {
      question: "Pyukumuku"
    },
  {
      question: "Quagsire"
    },
  {
      question: "Quilava"
    },
  {
      question: "Quilladin"
    },
  {
      question: "Qwilfish"
    },
  {
      question: "Raboot"
    },
  {
      question: "Raichu"
    },
  {
      question: "Raikou"
    },
  {
      question: "Ralts"
    },
  {
      question: "Rampardos"
    },
  {
      question: "Rapidash"
    },
  {
      question: "Raticate"
    },
  {
      question: "Rattata"
    },
  {
      question: "Rayquaza"
    },
  {
      question: "Regice"
    },
  {
      question: "Regidrago"
    },
  {
      question: "Regieleki"
    },
  {
      question: "Regigigas"
    },
  {
      question: "Regirock"
    },
  {
      question: "Registeel"
    },
  {
      question: "Relicanth"
    },
  {
      question: "Remoraid"
    },
  {
      question: "Reshiram"
    },
  {
      question: "Reuniclus"
    },
  {
      question: "Rhydon"
    },
  {
      question: "Rhyhorn"
    },
  {
      question: "Rhyperior"
    },
  {
      question: "Ribombee"
    },
  {
      question: "Rillaboom"
    },
  {
      question: "Riolu"
    },
  {
      question: "Rockruff"
    },
  {
      question: "Roggenrola"
    },
  {
      question: "Rolycoly"
    },
  {
      question: "Rookidee"
    },
  {
      question: "Roselia"
    },
  {
      question: "Roserade"
    },
  {
      question: "Rotom"
    },
  {
      question: "Rowlet"
    },
  {
      question: "Rufflet"
    },
  {
      question: "Runerigus"
    },
  {
      question: "Sableye"
    },
  {
      question: "Salamence"
    },
  {
      question: "Salandit"
    },
  {
      question: "Salazzle"
    },
  {
      question: "Samurott"
    },
  {
      question: "Sandaconda"
    },
  {
      question: "Sandile"
    },
  {
      question: "Sandshrew"
    },
  {
      question: "Sandslash"
    },
  {
      question: "Sandygast"
    },
  {
      question: "Sawk"
    },
  {
      question: "Sawsbuck"
    },
  {
      question: "Scatterbug"
    },
  {
      question: "Sceptile"
    },
  {
      question: "Scizor"
    },
  {
      question: "Scolipede"
    },
  {
      question: "Scorbunny"
    },
  {
      question: "Scrafty"
    },
  {
      question: "Scraggy"
    },
  {
      question: "Scyther"
    },
  {
      question: "Seadra"
    },
  {
      question: "Seaking"
    },
  {
      question: "Sealeo"
    },
  {
      question: "Seedot"
    },
  {
      question: "Seel"
    },
  {
      question: "Seismitoad"
    },
  {
      question: "Sentret"
    },
  {
      question: "Serperior"
    },
  {
      question: "Servine"
    },
  {
      question: "Seviper"
    },
  {
      question: "Sewaddle"
    },
  {
      question: "Sharpedo"
    },
  {
      question: "Shaymin"
    },
  {
      question: "Shedinja"
    },
  {
      question: "Shelgon"
    },
  {
      question: "Shellder"
    },
  {
      question: "Shellos"
    },
  {
      question: "Shelmet"
    },
  {
      question: "Shieldon"
    },
  {
      question: "Shiftry"
    },
  {
      question: "Shiinotic"
    },
  {
      question: "Shinx"
    },
  {
      question: "Shroomish"
    },
  {
      question: "Shuckle"
    },
  {
      question: "Shuppet"
    },
  {
      question: "Sigilyph"
    },
  {
      question: "Silcoon"
    },
  {
      question: "Silicobra"
    },
  {
      question: "Silvally"
    },
  {
      question: "Simipour"
    },
  {
      question: "Simisage"
    },
  {
      question: "Simisear"
    },
  {
      question: "Sinistea"
    },
  {
      question: "Sirfetch'd"
    },
  {
      question: "Sizzlipede"
    },
  {
      question: "Skarmory"
    },
  {
      question: "Skiddo"
    },
  {
      question: "Skiploom"
    },
  {
      question: "Skitty"
    },
  {
      question: "Skorupi"
    },
  {
      question: "Skrelp"
    },
  {
      question: "Skuntank"
    },
  {
      question: "Skwovet"
    },
  {
      question: "Slaking"
    },
  {
      question: "Slakoth"
    },
  {
      question: "Sliggoo"
    },
  {
      question: "Slowbro"
    },
  {
      question: "Slowking"
    },
  {
      question: "Slowpoke"
    },
  {
      question: "Slugma"
    },
  {
      question: "Slurpuff"
    },
  {
      question: "Smeargle"
    },
  {
      question: "Smoochum"
    },
  {
      question: "Sneasel"
    },
  {
      question: "Sneasler"
    },
  {
      question: "Snivy"
    },
  {
      question: "Snom"
    },
  {
      question: "Snorlax"
    },
  {
      question: "Snorunt"
    },
  {
      question: "Snover"
    },
  {
      question: "Snubbull"
    },
  {
      question: "Sobble"
    },
  {
      question: "Solgaleo"
    },
  {
      question: "Solosis"
    },
  {
      question: "Solrock"
    },
  {
      question: "Spearow"
    },
  {
      question: "Spectrier"
    },
  {
      question: "Spewpa"
    },
  {
      question: "Spheal"
    },
  {
      question: "Spinarak"
    },
  {
      question: "Spinda"
    },
  {
      question: "Spiritomb"
    },
  {
      question: "Spoink"
    },
  {
      question: "Spritzee"
    },
  {
      question: "Squirtle"
    },
  {
      question: "Stakataka"
    },
  {
      question: "Stantler"
    },
  {
      question: "Staraptor"
    },
  {
      question: "Staravia"
    },
  {
      question: "Starly"
    },
  {
      question: "Starmie"
    },
  {
      question: "Staryu"
    },
  {
      question: "Steelix"
    },
  {
      question: "Steenee"
    },
  {
      question: "Stonjourner"
    },
  {
      question: "Stoutland"
    },
  {
      question: "Stufful"
    },
  {
      question: "Stunfisk"
    },
  {
      question: "Stunky"
    },
  {
      question: "Sudowoodo"
    },
  {
      question: "Suicune"
    },
  {
      question: "Sunflora"
    },
  {
      question: "Sunkern"
    },
  {
      question: "Surskit"
    },
  {
      question: "Swablu"
    },
  {
      question: "Swadloon"
    },
  {
      question: "Swalot"
    },
  {
      question: "Swampert"
    },
  {
      question: "Swanna"
    },
  {
      question: "Swellow"
    },
  {
      question: "Swinub"
    },
  {
      question: "Swirlix"
    },
  {
      question: "Swoobat"
    },
  {
      question: "Sylveon"
    },
  {
      question: "Taillow"
    },
  {
      question: "Talonflame"
    },
  {
      question: "Tangela"
    },
  {
      question: "Tangrowth"
    },
  {
      question: "Tapu Bulu"
    },
  {
      question: "Tapu Fini"
    },
  {
      question: "Tapu Koko"
    },
  {
      question: "Tapu Lele"
    },
  {
      question: "Tauros"
    },
  {
      question: "Teddiursa"
    },
  {
      question: "Tentacool"
    },
  {
      question: "Tentacruel"
    },
  {
      question: "Tepig"
    },
  {
      question: "Terrakion"
    },
  {
      question: "Thievul"
    },
  {
      question: "Throh"
    },
  {
      question: "Thundurus"
    },
  {
      question: "Thwackey"
    },
  {
      question: "Timburr"
    },
  {
      question: "Tirtouga"
    },
  {
      question: "Togedemaru"
    },
  {
      question: "Togekiss"
    },
  {
      question: "Togepi"
    },
  {
      question: "Togetic"
    },
  {
      question: "Torchic"
    },
  {
      question: "Torkoal"
    },
  {
      question: "Tornadus"
    },
  {
      question: "Torracat"
    },
  {
      question: "Torterra"
    },
  {
      question: "Totodile"
    },
  {
      question: "Toucannon"
    },
  {
      question: "Toxapex"
    },
  {
      question: "Toxel"
    },
  {
      question: "Toxicroak"
    },
  {
      question: "Toxtricity"
    },
  {
      question: "Tranquill"
    },
  {
      question: "Trapinch"
    },
  {
      question: "Treecko"
    },
  {
      question: "Trevenant"
    },
  {
      question: "Tropius"
    },
  {
      question: "Trubbish"
    },
  {
      question: "Trumbeak"
    },
  {
      question: "Tsareena"
    },
  {
      question: "Turtonator"
    },
  {
      question: "Turtwig"
    },
  {
      question: "Tympole"
    },
  {
      question: "Tynamo"
    },
  {
      question: "Type: Null"
    },
  {
      question: "Typhlosion"
    },
  {
      question: "Tyranitar"
    },
  {
      question: "Tyrantrum"
    },
  {
      question: "Tyrogue"
    },
  {
      question: "Tyrunt"
    },
  {
      question: "Umbreon"
    },
  {
      question: "Unfezant"
    },
  {
      question: "Unown"
    },
  {
      question: "Ursaluna"
    },
  {
      question: "Ursaring"
    },
  {
      question: "Urshifu"
    },
  {
      question: "Uxie"
    },
  {
      question: "Vanillish"
    },
  {
      question: "Vanillite"
    },
  {
      question: "Vanilluxe"
    },
  {
      question: "Vaporeon"
    },
  {
      question: "Venipede"
    },
  {
      question: "Venomoth"
    },
  {
      question: "Venonat"
    },
  {
      question: "Venusaur"
    },
  {
      question: "Vespiquen"
    },
  {
      question: "Vibrava"
    },
  {
      question: "Victini"
    },
  {
      question: "Victreebel"
    },
  {
      question: "Vigoroth"
    },
  {
      question: "Vikavolt"
    },
  {
      question: "Vileplume"
    },
  {
      question: "Virizion"
    },
  {
      question: "Vivillon"
    },
  {
      question: "Volbeat"
    },
  {
      question: "Volcanion"
    },
  {
      question: "Volcarona"
    },
  {
      question: "Voltorb"
    },
  {
      question: "Vullaby"
    },
  {
      question: "Vulpix"
    },
  {
      question: "Wailmer"
    },
  {
      question: "Wailord"
    },
  {
      question: "Walrein"
    },
  {
      question: "Wartortle"
    },
  {
      question: "Watchog"
    },
  {
      question: "Weavile"
    },
  {
      question: "Weedle"
    },
  {
      question: "Weepinbell"
    },
  {
      question: "Weezing"
    },
  {
      question: "Whimsicott"
    },
  {
      question: "Whirlipede"
    },
  {
      question: "Whiscash"
    },
  {
      question: "Whismur"
    },
  {
      question: "Wigglytuff"
    },
  {
      question: "Wimpod"
    },
  {
      question: "Wingull"
    },
  {
      question: "Wishiwashi"
    },
  {
      question: "Wobbuffet"
    },
  {
      question: "Woobat"
    },
  {
      question: "Wooloo"
    },
  {
      question: "Wooper"
    },
  {
      question: "Wormadam"
    },
  {
      question: "Wurmple"
    },
  {
      question: "Wynaut"
    },
  {
      question: "Wyrdeer"
    },
  {
      question: "Xatu"
    },
  {
      question: "Xerneas"
    },
  {
      question: "Xurkitree"
    },
  {
      question: "Yamask"
    },
  {
      question: "Yamper"
    },
  {
      question: "Yanma"
    },
  {
      question: "Yanmega"
    },
  {
      question: "Yungoos"
    },
  {
      question: "Yveltal"
    },
  {
      question: "Zacian"
    },
  {
      question: "Zamazenta"
    },
  {
      question: "Zangoose"
    },
  {
      question: "Zapdos"
    },
  {
      question: "Zarude"
    },
  {
      question: "Zebstrika"
    },
  {
      question: "Zekrom"
    },
  {
      question: "Zeraora"
    },
  {
      question: "Zigzagoon"
    },
  {
      question: "Zoroark"
    },
  {
      question: "Zorua"
    },
  {
      question: "Zubat"
    },
  {
      question: "Zweilous"
    },
  {
      question: "Zygarde"
    }
  ];
// this get function is short for the getElementById function  
function get(x){
  return document.getElementById(x);
}
// this function renders a question for display on the page
function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>List of smashable</h2>";
//list all that were selected to smash
    const myArray = answerlist.split(",");
    for(var i = 0; i < myArray.length; i++){
        test.innerHTML += "<p>" + myArray[i] + "</p>";
    }
    get("test_status").innerHTML = "Test completed";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("test_status").innerHTML = "Pokemon "+(pos+1)+" of "+questions.length;
  question = questions[pos].question;
  // display the question
  test.innerHTML = "<h3>  "+question+"</h3>";
  test.innerHTML += "<img id='image' src=\"https://img.pokemondb.net/sprites/home/normal/"+question.toLowerCase()+".png\" ><br><br>";
  // display the answer options
  // the += appends to the data we started on the line above
  test.innerHTML += "<div class='btn-group btn-group-toggle' data-toggle='buttons'>";
  test.innerHTML += "<label class='btn btn-outline-dark'><input type='radio' name='choices' value='smash' class='btn btn-primary'> Smash</label>";
  test.innerHTML += "<label class='btn btn-outline-dark'><input type='radio' name='choices' value='pass' class='btn btn-primary'> Pass</label><br><br>";
  test.innerHTML += "</div><button class='btn btn-secondary' onclick='checkAnswer()'>Next</button>";
}
function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer is smash
  if(choice == "smash"){
    answerlist = question + "," + answerlist;
    console.log(answerlist)
  }
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}
// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);
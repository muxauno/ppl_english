const COMMUNICATION_QUESTIONS = [
  {
    question: "1. What does the phrase \"REPORT\" mean?",
    answers: [
      "Pass me the following information.",
      "Say again.",
      "Pass your message.",
      "Proceed with your message."
    ],
    correct: 0
  },
  {
    question: "2. If no ATIS is available, the pilot asks for departure information using the phrase.",
    answers: [
      "REQUEST DEPARTURE INFORMATION.",
      "REQUEST DEPARTURE INSTRUCTIONS.",
      "I WOULD LIKE DEPARTURE INFORMATION.",
      "REPORT DEPARTURE INFORMATION."
    ],
    correct: 0
  },
  {
    question: "3. What is the meaning of the term \"VMC\"?",
    answers: [
      "Visual meteorogical conditions.",
      "A flight accordingly to instrumental flight rules.",
      "Visual flight rules.",
      "Instrumental flight rules."
    ],
    correct: 0
  },
  {
    question: "4. What is the meaning of the term \"VFR flight\"?",
    answers: [
      "Flight according to visual flight rules.",
      "Flight according to instrumental flight rules.",
      "Training flight.",
      "Flight without passengers on board."
    ],
    correct: 0
  },
  {
    question: "5. What does the phrase \"WILCO\" mean?",
    answers: [
      "I understand your message and will comply with it.",
      "I have received all of your last transmission.",
      "My message is ended and I expect a response from you.",
      "Permission granted."
    ],
    correct: 0
  },
  {
    question: "6. What is the meaning of the phrase \"VERIFY\"?",
    answers: [
      "Check and confirm with the originator.",
      "No, or permission not granted or that is not correct.",
      "Repeat all or the following part of your last transmission.",
      "I hereby indicate the separation between two portions of the message."
    ],
    correct: 0
  },
  {
    question: "7. What is the meaning of the phrase \"ACKNOWLEDGE\"?",
    answers: [
      "Let me know that you have received and understood this message.",
      "I have received all of your last transmission.",
      "Repeat all or the following part of your last transmission.",
      "My transmission is ended and I expect a response from you."
    ],
    correct: 0
  },
  {
    question: "8. 'GO AROUND' means:",
    answers: [
      "Carry out a missed approach.",
      "Overtake the aircraft ahead.",
      "Make a 360 degree turn.",
      "Taxy past the aircraft at the holding point."
    ],
    correct: 0
  },
  {
    question: "9. The term \"SVFR flight\" stands for.",
    answers: [
      "Special VFR flight.",
      "Sector VFR flight.",
      "Schooling VFR flight.",
      "Search and rescue VFR flight."
    ],
    correct: 0
  },
  {
    question: "10. What does the phrase \"MONITOR\" mean?",
    answers: [
      "Listen out on (frequency).",
      "Establish radio contact with..",
      "I repeat for clarity or emphasis.",
      "Watch the instruments."
    ],
    correct: 0
  },
  {
    question: "11. What is the meaning of the phrase \"ROGER\"?",
    answers: [
      "I have received all of your last transmission.",
      "I understand your message and will comply with it.",
      "My transmission is ended and I expect a response from you.",
      "Permission for proposed action granted."
    ],
    correct: 0
  },
  {
    question: "12. What does the abbreviation \"SID\" mean?",
    answers: [
      "Standard instrument departure route.",
      "Standard instrument arrival route.",
      "Standard visual departure route.",
      "Standard visual arrival route."
    ],
    correct: 0
  },
  {
    question: "13. 'ORBIT RIGHT' means:",
    answers: [
      "Continue to make right hand turn until advised.",
      "Right hand circuits in use.",
      "Turn right to avoid other traffic.",
      "Make a 360 degrees turn to the right."
    ],
    correct: 0
  },
  {
    question: "14. A pilot receives the clearance to hold over an enroute reporting point until a specified time. This time is called.",
    answers: [
      "Expected approach time.",
      "Estimated over time.",
      "Estimated time of arrival.",
      "Holding time."
    ],
    correct: 0
  },
  {
    question: "15. What does the term \"ALTITUDE\" mean?",
    answers: [
      "Altitude above mean sea level.",
      "Height above an airfield.",
      "Flight level.",
      "Standard altitude."
    ],
    correct: 0
  },
  {
    question: "16. What is the meaning of the term \"FLIGHT LEVEL\"?",
    answers: [
      "A level in atmosphere for vertical separation which is determined by setting the altimeter to 1013.2 hpa.",
      "A level in atmosphere for vertical separation which is determined by setting the altimeter to local QNH.",
      "A level in atmosphere for vertical separation which is determined by setting the altimeter to local QFE.",
      "A pressure level based on regional QNH."
    ],
    correct: 0
  },
  {
    question: "17. Phase of flight: climb, take off, descent, start-up, approach, cruise, push back, final approach, taxi, take off roll, touch down i line-up were mixed. Their order is:",
    answers: [
      "Start up, push back, taxi, line-up, take off roll, take off, climb, cruise, descent, approach, final approach, touch down.",
      "Line-up, take off roll, take off, climb, cruise, descent, approach, start up, push back, taxi, final approach, touch down.",
      "Push back, taxi, line-up, take off roll, start up, take off, descent, climb, cruise, touch down, approach, final approach."
    ],
    correct: 0
  },
  {
    question: "18. Aerodrome traffic is:",
    answers: [
      "All traffic on the manoeuvring area of an aerodrome and all aircraft operating in the vicinity of an aerodrome.",
      "All vehicles on an aerodrome.",
      "All aircraft on an aerodrome.",
      "All traffic on the movement area of an aerodrome."
    ],
    correct: 0
  },
  {
    question: "19. 'STANDBY' means:",
    answers: [
      "Wait and I will call you again.",
      "Select STANDBY on the SSR Transponder.",
      "Hold your present position.",
      "Continue on present heading and listen out."
    ],
    correct: 0
  },
  {
    question: "20. An aircraft will be in the best range for VHF communications if it is:",
    answers: [
      "At high altitude in the vicinity of the airfield.",
      "At high altitude and long range.",
      "At low altitude and long range."
    ],
    correct: 0
  },
  {
    question: "21. The maximum VHF communications range that can be expected by an aircraft at FL 100 is:",
    answers: [
      "120nm.",
      "1200nm.",
      "150nm.",
      "100nm."
    ],
    correct: 0
  },
  {
    question: "22. VHF frequencies used for communication which is the range.",
    answers: [
      "From 118,0 to 135,975 mhz.",
      "From 108,0 to 135,975 khz.",
      "From 118,0 to 121,5 mhz."
    ],
    correct: 0
  },
  {
    question: "23. \"VACATE RIGHT\" means:",
    answers: [
      "Turn right to leave the runway.",
      "Clear the runway immediately.",
      "The next runway exit is on the right.",
      "Turn right after take off."
    ],
    correct: 0
  },
  {
    question: "24. What is the meaning of the term \"IMC\"?",
    answers: [
      "Instrumental meteorogical conditions.",
      "Flight according to instrumental flight rules.",
      "Flight according to visual flight rules.",
      "Visual meteorogical conditions."
    ],
    correct: 0
  },
  {
    question: "25. Using the readability scale, \"readability 5\" means:",
    answers: [
      "Perfectly readable.",
      "Readable but with difficulty.",
      "Unreadable.",
      "Readable."
    ],
    correct: 0
  },
  {
    question: "26. Using the readability scale, \"readability 1\" means:",
    answers: [
      "Unreadable.",
      "Readable but with difficulty.",
      "Perfectly readable.",
      "Readable with background."
    ],
    correct: 0
  },
  {
    question: "27. Using the readability scale, \"readability 2\" means:",
    answers: [
      "Readable now and then.",
      "Unreadable.",
      "Perfectly readable.",
      "Readable with background."
    ],
    correct: 0
  },
  {
    question: "28. Using the readability scale, \"readability 3\" means:",
    answers: [
      "Readable but with difficulty.",
      "Unreadable.",
      "Perfectly readable.",
      "Readable with background."
    ],
    correct: 0
  },
  {
    question: "29. Using the readability scale, \"readability 4\" means:",
    answers: [
      "Readable.",
      "Readable with difficulty.",
      "Readable with background.",
      "Unreadable."
    ],
    correct: 0
  },
  {
    question: "30. In order to make your communications more effective, you should:.",
    answers: [
      "Use a constant speaking volume.",
      "Use words twice.",
      "Modulate your voice.",
      "Call break between sentences."
    ],
    correct: 0
  },
  {
    question: "31. Radio test transmissions should take the following form:",
    answers: [
      "BEOGRAD TOWER YU-ABC Radio check 118.1.",
      "BEOGRAD TOWER YU-ABC 118.1 Do you read?",
      "BEOGRAD TOWER YU-ABC Hoe do you read?"
    ],
    correct: 0
  },
  {
    question: "32. The term \" CVFR flight\" stands for.",
    answers: [
      "Controlled VFR flight.",
      "VFR flight of civil aircraf.",
      "Schooling VFR flight.",
      "VFR flight visibility to the ground."
    ],
    correct: 0
  },
  {
    question: "33. The correct callsign of a station providing flight information service is the location followed by:",
    answers: [
      "INFORMATION.",
      "HOMER.",
      "CONTROL.",
      "RADIO."
    ],
    correct: 0
  },
  {
    question: "34. ATIS is to be found on:",
    answers: [
      "A discrete VHF or a VOR frequency.",
      "The Approach frequency.",
      "The Tower frequency.",
      ""
    ],
    correct: 0
  },
  {
    question: "35. A radar advisory service will:",
    answers: [
      "Give you standard separation from all traffic.",
      "Advise you of possible conflict.",
      "Give you an air traffic control service.",
      "Give you a radar approach."
    ],
    correct: 0
  },
  {
    question: "36. What are the three categories of aeronautical communication service?",
    answers: [
      "Air Ground Communication Service, Flight Information Service, Air traffic Control.",
      "Air, Land and Sea.",
      "Approach, Tower, Ground.",
      "IFR, VFR, SVFR."
    ],
    correct: 0
  },
  {
    question: "37. Which aeronautical communication service provides automated airfield and meteorological information for departing and arriving traffic?",
    answers: [
      "ATIS.",
      "LARS.",
      "AFIS.",
      "FIS."
    ],
    correct: 0
  },
  {
    question: "38. A Radar Information Service (RIS) is an ATC service:",
    answers: [
      "In which the controller will inform the pilot of the bearing, distance and, if known, the altitude of conflicting traffic.",
      "In which the controller will provide radar separation from all other traffic.",
      "In which the controller will direct the aircraft to avoid the other traffic.",
      "Which may only be used by aircraft flying in accordance with the instrument flight rules."
    ],
    correct: 0
  },
  {
    question: "39. The abbreviation ATIS stands for:",
    answers: [
      "Automatic Terminal Information Service.",
      "Aircraft Technical Information Service.",
      "Air Traffic Information Service.",
      "Aerodrome Traffic Information Service."
    ],
    correct: 0
  },
  {
    question: "40. What is the correct way of spelling out FRI-VOR in a radio message?",
    answers: [
      "FOXTROT ROMEO INDIA VOR.",
      "FOXTROT ROMEO INDIA VICTOR OSCAR ROMEO.",
      "FRIDAY VOR.",
      "FOX ROMEO INDIA VOR."
    ],
    correct: 0
  },
  {
    question: "41. The pilot may abbreviate the call sign of an aircraft.",
    answers: [
      "Only after the ground station has used the abbreviated call sign.",
      "Not at all.",
      "After radio contact with the ground station has been established.",
      "Any time at his discretion."
    ],
    correct: 0
  },
  {
    question: "42. A time of 1020 hours is transmitted as:",
    answers: [
      "'ONE ZERO TWO ZERO' or 'TWO ZERO'.",
      "TEN TWENTY HOURS.",
      "TEN TWO ZERO.",
      "ONE ZERO TWENTY."
    ],
    correct: 0
  },
  {
    question: "43. A time of 1020 hours is transmitted at 0910 hours as:",
    answers: [
      "'ONE ZERO TWO ZERO'.",
      "TEN TWENTY HOURS.",
      "TEN TWO ZERO.",
      "'TWO ZERO' ."
    ],
    correct: 0
  },
  {
    question: "44. Phonetic transcription for the label 70-VEL pronounced as:",
    answers: [
      "SEVEN, ZERO, VICTOR, ECHO, LIMA.",
      "SEVEN, ZERO, WHISKEY, ECHO, LMA.",
      "SEVENTY, VICTOR, ECHO, LIMA."
    ],
    correct: 0
  },
  {
    question: "45. Phonetic transcription for the label EXTRA pronounced as:",
    answers: [
      "ECHO, XRAY,TANGO,ROMEO,ALFA.",
      "EXTRA.",
      "ECHO,XRAY,TORONTO,ROMEO,ALFA.",
      "ECHO,IKS,TORONTO,ROMEO,ALFA."
    ],
    correct: 0
  },
  {
    question: "46. Phonetic transcription for the label C-MNXY pronounced as:",
    answers: [
      "CHARLIE, MIKE, NOVEMBER, XRAY, YANKEE.",
      "COCA, MIKE, NECTAR, XRAY, YANKEE.",
      "CHARLIE, METRO, NOVEMBER, EXTRA, YANKEE."
    ],
    correct: 0
  },
  {
    question: "47. A pilot shall ask for a QFE as follows:",
    answers: [
      "Request QUEBEC FOXTROT ECHO.",
      "Request QUEBEC FOX ECHO.",
      "Request QUEEN FOX EASY.",
      "Request QUEBEC FOX EASY."
    ],
    correct: 0
  },
  {
    question: "48. The abbreviation for a control zone is:",
    answers: [
      "CTR.",
      "MATZ.",
      "CTA.",
      "CTZ."
    ],
    correct: 0
  },
  {
    question: "49. Which of the following abbreviations must be broadcast to individual letters?",
    answers: [
      "Y-BC.",
      "ILS.",
      "RVR.",
      "CAVOK."
    ],
    correct: 0
  },
  {
    question: "50. An altitude of 4,500 ft QNH should be pronounced as.",
    answers: [
      "FOUR THOUSAND FIVE HUNDRED FEET.",
      "FORTY FIVE THOUSAND.",
      "FOUR POINT FIVE.",
      "FORTY FIVE HUNDRED FEET ABOVE SEA LEVEL."
    ],
    correct: 0
  },
  {
    question: "51. Frequency 121.725 mhz should be transmitted as:",
    answers: [
      "WUN TOO WUN DECIMAL SEVEN TOO FIFE, using 6/4 Digit Phraseology, and WUN TOO WUN DECIMAL SEVEN TOO, using 5/4 Digit Phraseology.",
      "WUN TWO WUN POINT SEVEN TWO.",
      "WUN TOO WUN POINT SEVEN TOO.",
      "WUN TWENTY WUN DECIMAL SEVEN TWENTY FIVE."
    ],
    correct: 0
  },
  {
    question: "52. Phonetic transcription for the label B9-DFF pronounced as:",
    answers: [
      "BRAVO, NINER, DELTA, FOXTROT, FOXTROT.",
      "BRAVO, NINE, DELTA, FOXTROT, FOXTROT.",
      "BRAVO, NINE, DELTA, TWO FOXTROT."
    ],
    correct: 0
  },
  {
    question: "53. COMM frequency 118.125 mhz should be transmitted by pronouncing.",
    answers: [
      "WUN WUN EIGHT DECIMEL WUN –TOO using 5/4 Digit Phraseology or WUN WUN EIGHT DECIMEL WUN TOO FIVE using 6/4 Digit Phraseology.",
      "WUN WUN EIGHT WUN TOO FIVE.",
      "WUN WUN EIGHT DECIMAL WUN TOO."
    ],
    correct: 0
  },
  {
    question: "54. In aviation broadcasting, how do we pronounce COMM frequency 118.150 mhz?",
    answers: [
      "WUN WUN EIGHT DECIMAL WUN FIVE.",
      "WUN WUN EIGHT DECIMAL WUN FIVE ZERO.",
      "WUN WUN EIGHT POINT WUN FIVE ZERO.",
      "WUN WUN EIGHT DASH WUN FIVE."
    ],
    correct: 0
  },
  {
    question: "55. When a pilot reports \"FIVE THOUSAND FEET\", the controller concludes.",
    answers: [
      "The altitude of the aircraft is 5,000 ft above mean sea level.",
      "The altimeter of the aircraft is set to the local QFE.",
      "The altitude of the aircraft is 5,000 ft above the airfield.",
      "The altimeter of the aircraft is set to the standard pressure 1013.2hpa."
    ],
    correct: 0
  },
  {
    question: "56. An altitude of 5,000 ft should be broadcasted as.",
    answers: [
      "FIVE THOUSAND FEET.",
      "FIVE NULL NULL NULL.",
      "FIVE ZERO ZERO ZERO FEET.",
      "FIFTY HUNDRED."
    ],
    correct: 0
  },
  {
    question: "57. An altitude of 11,000 ft should be broadcasted as.",
    answers: [
      "WUN WUN THOUSAND FEET.",
      "ELEVEN THOUSAND FEET.",
      "WUN WUN ZERO ZERO ZERO FEET.",
      "ELEVEN THOUSAND ZERO FEET."
    ],
    correct: 0
  },
  {
    question: "58. Altitude 10,500 ft should be broadcasted as.",
    answers: [
      "TEN THOUSAND FIVE HUNDRED FEET.",
      "TEN POINT FIVE.",
      "WUN ZERO THOUSAND FIVE HUNDRED FEET.",
      "WUN ZERO FIVE HUNDRED FEET ABOVE SEA LEVEL."
    ],
    correct: 0
  },
  {
    question: "59. When broadcasting numbers in radiotelephony communication, the number 583 is transmitted as.",
    answers: [
      "FIVE EIGHT THREE.",
      "FIVE HUNDRED EIGHTY THREE.",
      "FIFTY EIGHT THREE.",
      "FIVE HUNDRED EIGHT THREE."
    ],
    correct: 0
  },
  {
    question: "60. When broadcasting numbers in radiotelephony communication, the number 496 is transmitted as.",
    answers: [
      "FOUR NINER SIX.",
      "FOUR HUNDRED AND NINETY SIX.",
      "FOUR HUNDRED AND NINER SIX.",
      "FOUR NINETY SIX."
    ],
    correct: 0
  },
  {
    question: "61. When broadcasting numbers in radiotelephony communication, the number 4501 is transmitted as.",
    answers: [
      "FOUR FIVE ZERO WUN.",
      "FOUR THOUSAND FIVE HUNDRED WUN.",
      "FOUR FIVE ZERO POINT WUN.",
      "FORTY FIVE HUNDRED WUN."
    ],
    correct: 0
  },
  {
    question: "62. The number 600 should be broadcasted as.",
    answers: [
      "SIX HUNDRED.",
      "SIX ZERO ZERO.",
      "SIX NULL NULL.",
      "SIXTY ZERO."
    ],
    correct: 0
  },
  {
    question: "63. COMM frequency 118.0 mhz should be broadcasted by pronouncing.",
    answers: [
      "WUN WUN EIGHT DECIMAL ZERO.",
      "WUN HUNDRED EIGHTEEN POINT NULL.",
      "WUN WUN EIGHT.",
      "WUN WUN EIGHT POINT ZERO."
    ],
    correct: 0
  },
  {
    question: "64. In aviation broadcasting, how do we pronounce COMM frequency 118.1 mhz?",
    answers: [
      "WUN WUN EIGHT DECIMAL WUN.",
      "WUN WUN EIGHT POINT WUN.",
      "WUN HUNDRED ELEVEN POINT WUN.",
      "WUN WUN EIGHT WUN."
    ],
    correct: 0
  },
  {
    question: "65. Which altitude has been reported by a pilot using the phrase \"FIVE THOUSAND FEET QFE\"?",
    answers: [
      "Height above the airfield.",
      "Flight level.",
      "Altitude above mean sea level.",
      "Adequate altitude in International Standard Atmosphere (ICAO)."
    ],
    correct: 0
  },
  {
    question: "66. What is the Q code for the measurement of flight level ? .",
    answers: [
      "QNE.",
      "QFF.",
      "QNH.",
      "QFE."
    ],
    correct: 0
  },
  {
    question: "67. What does \"QNH\" mean?",
    answers: [
      "Altimeter sub-scale setting to obtain elevation when on ground.",
      "Atmospheric pressure at aerodrome elevation.",
      "True bearing from a station.",
      "Magnetic bearing from a station."
    ],
    correct: 0
  },
  {
    question: "68. What does the phrase \"QDM\" mean?",
    answers: [
      "Magnetic direction from an aircraft to the goniometric station.",
      "Atmospheric pressure at airfield elevation.",
      "Atmospheric pressure at airfield elevation, reduced to sea level.",
      "Actual weather at an airfield."
    ],
    correct: 0
  },
  {
    question: "69. What is the Q code for a true bearing from a station?",
    answers: [
      "QTE.",
      "QDR.",
      "QNH.",
      "QFE."
    ],
    correct: 0
  },
  {
    question: "70. What is the Q code for a magnetic bearing to a station?",
    answers: [
      "QDM.",
      "QDR.",
      "QGH.",
      "QNH."
    ],
    correct: 0
  },
  {
    question: "71. What is the Q code for the measurement of altitude ? .",
    answers: [
      "QNH.",
      "QFF.",
      "QNE.",
      "QFE."
    ],
    correct: 0
  },
  {
    question: "72. What is the Q code for the measurement of relative heights above an airfields?",
    answers: [
      "QFE.",
      "ELT.",
      "QNH.",
      "QBA."
    ],
    correct: 0
  },
  {
    question: "73. What is the Q code for a magnetic bearing from a station?",
    answers: [
      "QDR.",
      "QGH.",
      "QDM.",
      "QNH."
    ],
    correct: 0
  },
  {
    question: "74. If you want to request a service from a ground station:",
    answers: [
      "You must do so in your initial call.",
      "You must do so after you have established two way communications with the station.",
      "You must monitor the ground station frequency until you hear the ground station giving the service you require to another aircraft.",
      "As a private pilot you are not entitled to request a service."
    ],
    correct: 0
  },
  {
    question: "75. Which of the following lists are all ATC messages that must read back in full:.",
    answers: [
      "Clearance to enter, land on, take-off on, backtrack, cross or hold short of an active runway; SSR instructions.",
      "Level instructions, altimeter settings, surface wind, runway information.",
      "ATC route clearances, runway clearances, actual weather reports.",
      "VOR information, frequency changes, type of radar service."
    ],
    correct: 0
  },
  {
    question: "76. You are flying at FL50 in YU-ABC. When asked by the controller to report your level, what is the correct response?",
    answers: [
      "MAINTAINING FL50, Y-BC.",
      "FL50, Y-BC.",
      "AT FL50, Y-BC.",
      "Y-BC, FL50."
    ],
    correct: 0
  },
  {
    question: "77. A pilot is required to read back:",
    answers: [
      "SSR operating instructions, take-off clearances, altimeter settings, VDF information, frequency changes.",
      "ATC route clearances, runway clearances, conditional clearances, actual weather reports.",
      "Altimeter settings, taxi information, terminal weather, runway clearances, approach aid serviceability.",
      "Route clearances, speed instructions, weather reports, taxi clearances, runway state information."
    ],
    correct: 0
  },
  {
    question: "78. Which phrase is used by an ATC when advising the pilot that the position report over the compulsory reporting point is not required?",
    answers: [
      "OMIT POSITION REPORT OVER.. (fix).",
      "CANCEL POSITION REPORT OVER.. (fix).",
      "NO POSITION REPORT OVER.. (fix).",
      "DO NOT REPORT OVER.. (fix)."
    ],
    correct: 0
  },
  {
    question: "79. Which of the following statements is correct? \"In ground to air communications the controller will always\":",
    answers: [
      "Say your callsign first.",
      "Say your callsign last.",
      "Say your callsign first only on initial contact.",
      ""
    ],
    correct: 0
  },
  {
    question: "80. Callsign of ATC for control of aircraft and vehicles on manoeuvring area?",
    answers: [
      "GROUND.",
      "TOWER.",
      "DISPATCH.",
      "APRON."
    ],
    correct: 0
  },
  {
    question: "81. The prescribed phrase for obtaining a permission to taxi to the runway for departure is.",
    answers: [
      "REQUEST TAXI.",
      "WHAT IS MY TAXI CLEARANCE.",
      "REQUEST PERMISSION TO TAXI.",
      "REQUEST TAXI CLEARANCE."
    ],
    correct: 0
  },
  {
    question: "82. When a control tower transmits the phrase \"REPORT DOWNWIND\", the pilot is instructed to report.",
    answers: [
      "Aircraft position in traffic pattern between the second turn and the third turn, abeam of the halfway point of the runway.",
      "Estimated wind direction and velocity at the altitude of flying.",
      "Maximum allowed tail wind for landing.",
      "Aircraft position \"final\" in traffic pattern."
    ],
    correct: 0
  },
  {
    question: "83. The controller wants to obtain the information about the level at which an aircraft is flying,using the phrase.",
    answers: [
      "REPORT LEVEL.",
      "WHAT IS YOUR LEVEL.",
      "REQUEST LEVEL.",
      "TRANSMIT YOUR LEVEL."
    ],
    correct: 0
  },
  {
    question: "84. An aircraft had initially been cleared to climb to FL100. For separation purposes the aircraft has to be leveled of at FL 80 for a few minutes. ATC will give this instruction by using the phrase:",
    answers: [
      "STOP CLIMB AT FL80.",
      "LEVEL OFF AT FL80.",
      "MAINTAIN FL80.",
      "CLEARED FL80."
    ],
    correct: 0
  },
  {
    question: "85. You are at the holding point of the runway in use, have completed all your pre-flight vital checks and are ready to enter the runway and take off. What RT phraseology would you use to inform ATC of your readiness?",
    answers: [
      "(CALLSIGN) READY FOR DEPARTURE.",
      "(CALLSIGN) READY FOR TAKE OFF.",
      "(CALLSIGN) READY FOR LINE UP.",
      "(CALLSIGN) READY TO PROCEED."
    ],
    correct: 0
  },
  {
    question: "86. Correct phrase for final report is:",
    answers: [
      "Y-BC ON FINAL.",
      "WE ARE APPROACHING FINAL.",
      "VRŠAC TOWER, FINAL."
    ],
    correct: 0
  },
  {
    question: "87. Report position base leg is done.",
    answers: [
      "Only when required to control.",
      "Always.",
      "Only the pilot will."
    ],
    correct: 0
  },
  {
    question: "88. Which letter identifies that portion of the airport traffic circuit, called \"FINAL LEG\"? (See Fig. PPL Kom-1).",
    answers: [
      "G.",
      "E.",
      "F.",
      "C."
    ],
    correct: 0
  },
  {
    question: "89. Which designator denotes part of the aerodrome traffic circuit named \"Base Leg\"? (See Fig. PPL Kom-1).",
    answers: [
      "F.",
      "G.",
      "E.",
      "D."
    ],
    correct: 0
  },
  {
    question: "90. That portion of the airport traffic circuit identified by the letter E is called? (See Fig. PPL Kom-1).",
    answers: [
      "DOWNWIND POSITION.",
      "LINE-UP.",
      "CROSSWIND LEG.",
      "BASE LEG."
    ],
    correct: 0
  },
  {
    question: "91. How would you correctly reply to the ATC instruction \"Y-CD, Change to Belgrade Tower, 118.1\"?",
    answers: [
      "WUN WUN EIGHT DAYSEEMAL WUN , YANKEE CHARLIE DELTA.",
      "Y-CD, 118.1.",
      "CHANGE TO BELGRADE TOWER 118.1, Y-CD.",
      "WILCO, Y-CD."
    ],
    correct: 0
  },
  {
    question: "92. You are flying on a NE heading at 2500 ft. You would report your heading and level as:",
    answers: [
      "HEADING 045 AT TOO TOUSAND FIFE HUNDRED FEET.",
      "HEADING 045 AT TOO FIFE ZERO ZERO FEET.",
      "HEADING 045 AT 25 HUNDRED FEET.",
      "FLYING AT TOO TOUSAND FIFE HUNDRED FEET ON HEADING 045."
    ],
    correct: 0
  },
  {
    question: "93. On the final approach, the FINAL call should be made at a range of about:",
    answers: [
      "4 nm.",
      "2 nm.",
      "8nm.",
      "25 nm."
    ],
    correct: 0
  },
  {
    question: "94. On a long straight-in approach to land, the call 'Long Final' would be made at a range of about:",
    answers: [
      "8nm.",
      "2 nm.",
      "4 nm.",
      "25 nm."
    ],
    correct: 0
  },
  {
    question: "95. If the pilot cannot follow the instructions and orders, he should advise the air traffic control by transmitting the phrase.",
    answers: [
      "UNABLE TO COMPLY.",
      "UNABLE TO ACCEPT.",
      "REQUEST RECLEARANCE.",
      "I CANNOT COMPLY."
    ],
    correct: 0
  },
  {
    question: "96. When transmitting a message preceded by the phrase \"Transmitting blind due to receiver failure\" the aircraft station shall also:",
    answers: [
      "Advise the time of its next intended transmission.",
      "Proceed to the alternate airport.",
      "Hold for 5 minutes at its present position.",
      ""
    ],
    correct: 0
  },
  {
    question: "97. If the pilot is unable to make contact with a station on a designated frequency, then he should:",
    answers: [
      "Try transmitting on another related frequency.",
      "Make a blind transmission.",
      "Transmit on 121.5 mhz.",
      "Transmit using words twice."
    ],
    correct: 0
  },
  {
    question: "98. Which of the options below gives a correct order and content for a Position Report?",
    answers: [
      "Call Sign, Position, Time, Level or Altitude, Next Position with ETA.",
      "Call Sign, Route, Position, Level, ETA next Position, Heading , Request.",
      "Position, Level or Altitude, Time, ETA at Next Position, Call Sign.",
      "Route, Position, Time, Level or Altitude, ETA at Next Position, Call Sign."
    ],
    correct: 0
  },
  {
    question: "99. Which of the following messages has the highest priority?",
    answers: [
      "REQUEST QDM.",
      "TAXI TO THE REFUELLING PUMPS.",
      "CAUTION, WORK IN PROGRESS ON THE T AXIWAY.",
      "REPORT FINAL NUMBER 1."
    ],
    correct: 0
  },
  {
    question: "100. When requesting a special VFR clearance in flight, ATC must be given details of:",
    answers: [
      "Callsign, type, intentions and ETA at entry point.",
      "Callsign, type, T AS, ETA at entry point and destination.",
      "Callsign, type, position, heading, intentions and ETA at entry point.",
      "Callsign, altitude, heading and ETA at entry point."
    ],
    correct: 0
  },
  {
    question: "101. How do you ask for a message to be repeated?",
    answers: [
      "SAY AGAIN.",
      "PLEASE SAY THE MESSAGE AGAIN.",
      "REPEAT MESSAGE.",
      "SAY ALL AGAIN."
    ],
    correct: 0
  },
  {
    question: "102. If a controller passes an instruction and you understand it and will comply, the standard reply is:",
    answers: [
      "WILCO.",
      "VERIFY.",
      "ROGER.",
      "CONFIRM."
    ],
    correct: 0
  },
  {
    question: "103. ATC will give a descent instruction by using the phrase:",
    answers: [
      "DESCEND TO FL..",
      "MAINTAIN FL..",
      "LEAVE FL.. FOR FL..",
      "CLEARED FL.."
    ],
    correct: 0
  },
  {
    question: "104. ATC will give a climb instruction by using the phrase.",
    answers: [
      "CLIMB TO FL..",
      "MAINTAIN FL..",
      "LEAVE FL.. FOR FL..",
      "CLEARED FL.."
    ],
    correct: 0
  },
  {
    question: "105. When asked by ATC \"Are you able to maintain FL 40\" the correct reply contains the phrase:",
    answers: [
      "AFFIRM or NEGATIVE.",
      "ROGER.",
      "WILCO.",
      "NO SIR."
    ],
    correct: 0
  },
  {
    question: "106. When the aircraft pilot is not able to execute a command, control informs the flight phrase:",
    answers: [
      "UNABLE TO COMPLY.",
      "UNABLE TO ACCEPT.",
      "REQUEST RECLEARANCE.",
      "I CANNOT COMPLY."
    ],
    correct: 0
  },
  {
    question: "107. You have just landed at a towered airport and the tower tells you to contact ground when clear of the runway. You are considered clear of the runway when.",
    answers: [
      "All parts of the aircraft have crossed the hold line.",
      "The aircraft cockpit is clear of the hold line.",
      "The tail of the aircraft is of the runway edge.",
      ""
    ],
    correct: 0
  },
  {
    question: "108. If requested by the control tower to report having crossed the runway, the pilot has to use the phrase.",
    answers: [
      "RUNWAY VACATED.",
      "I HAVE LEFT THE RUNWAY.",
      "I AM CLEAR OF RUNWAY.",
      "I AM BEYOND THE RUNWAY."
    ],
    correct: 0
  },
  {
    question: "109. A \"downwind\" call is made:",
    answers: [
      "Any position on downwind leg.",
      "Abeam the upwind end of the runway.",
      "As soon as the aircraft is on the downwind leg.",
      "Just before turning on to base leg."
    ],
    correct: 0
  },
  {
    question: "110. That portion of the airport identified by the letter A is called? (See Fig. PPL Kom-1).",
    answers: [
      "APRON.",
      "RUNWAY.",
      "TAXIWAY.",
      "BASE LEG."
    ],
    correct: 0
  },
  {
    question: "111. Which frequency is intended for a conversation between the intercepting aircraft and the intercepted aircraft?",
    answers: [
      "International emergency frequency 121.5 mhz.",
      "Local air force frequency.",
      "Local emergency frequency.",
      "Frequency air-air."
    ],
    correct: 0
  },
  {
    question: "112. What is the meaning of the phrase \"YOU LAND\", passed by a radio from the pilot of an intercepting aircraft to the pilot of an intercepted aircraft?",
    answers: [
      "Land at this aerodrome.",
      "Report the name of your aerodrome of origin.",
      "Follow me.",
      "You may proceed."
    ],
    correct: 0
  },
  {
    question: "113. By which international phrase will the intercepting aircraft allows the intercepted aircraft to continue the flight?",
    answers: [
      "PROCEED.",
      "CALL SIGN.",
      "DESCEND.",
      "FOLLOW."
    ],
    correct: 0
  },
  {
    question: "114. The phrase \"CALL SIGN\", passed by a radio from a pilot of an intercepting aircraft to the pilot of an intercepted aircraft, means:",
    answers: [
      "What is your call sign?",
      "Call the air traffic control!",
      "Transmit an emergency call!",
      "Return to your airport of origin!"
    ],
    correct: 0
  },
  {
    question: "115. The pilot of an intercepted aircraft report to the pilot of an intercepting aircraft that he is lost and his position is uncertain to him by transmitting the following international radio phrase.",
    answers: [
      "AM LOST.",
      "WILCO.",
      "CAN NOT.",
      "MAYDAY."
    ],
    correct: 0
  },
  {
    question: "116. By which international phrase will the intercepting aircraft direct the intercepted aircraft tofollow him?",
    answers: [
      "FOLLOW.",
      "PROCEED.",
      "YOU LAND.",
      "CALL SIGN."
    ],
    correct: 0
  },
  {
    question: "117. Which is the correct phrase used by the pilot of an intercepted aircraft to convey to an intercepting aircraft his inability to comply with the received instructions?",
    answers: [
      "CAN NOT.",
      "AM LOST.",
      "MAYDAY.",
      "WILCO."
    ],
    correct: 0
  },
  {
    question: "118. In the event of a radio failure the SSR transponder should be set to:",
    answers: [
      "7600.",
      "7700.",
      "7500.",
      "7000."
    ],
    correct: 0
  },
  {
    question: "119. The phrase, which instructs the pilot to set transponder code A6620 again, is.",
    answers: [
      "RECYCLE ALPHA 6620.",
      "SQUAWK AGAIN ALPHA 6620.",
      "SWITCH ON ALPHA 6620.",
      "CONFIRM SQUAWKING ALPHA 6620."
    ],
    correct: 0
  },
  {
    question: "120. If a transponder does not transmit on mode C although it is expected, an ATC will instruct the pilot to switch on mode C by using the phrase.",
    answers: [
      "SQUAWK CHARLIE.",
      "SQUAWK ALTIMETER.",
      "SQUAWK PRESSURE ALTITUDE.",
      "TRANSMIT ON MODE CHARLIE."
    ],
    correct: 0
  },
  {
    question: "121. You receive the message \" YU-ABC Squawk Ident\". You should:",
    answers: [
      "Operate the special position identification on the SSR transponder.",
      "Select STANDBY on the SSR transponder.",
      "Select ALT - altitude reporting facility (Mode C) on the SSR transponder.",
      "Reply giving your callsign."
    ],
    correct: 0
  },
  {
    question: "122. The phrase \"Squawk Charlie\" means:",
    answers: [
      "Select 'ALT' on the transponder.",
      "Transponder.",
      "Confirm the transponder is selected ON.",
      "Select 7700 on the transponder."
    ],
    correct: 0
  },
  {
    question: "123. In a radar environment heading information given by the pilot and heading instructions given by controllers are in:",
    answers: [
      "Degrees magnetic.",
      "Degrees true.",
      "Degrees Celsius.",
      "Degrees Absolute."
    ],
    correct: 0
  },
  {
    question: "124. A pilot squawking A 7700 indicates to the ground station that.",
    answers: [
      "His aircraft is in an emergency situation.",
      "His radio is unserviceable.",
      "He has a sick person on board.",
      "His flight is being hijacked."
    ],
    correct: 0
  },
  {
    question: "125. Which transponder mode gives an altitude readout:",
    answers: [
      "Mod C.",
      "Mod A.",
      "Mod B.",
      "Mod D."
    ],
    correct: 0
  },
  {
    question: "126. If you are flying an aircraft without a transponder, what would you say if you were asked to SQUAWK?",
    answers: [
      "NEGATIVE TRANSPONDER.",
      "NEGATIVE SQUAWK.",
      "I DO NOT HAVE A TRANSPONDER.",
      "NO TRANSPONDER."
    ],
    correct: 0
  },
  {
    question: "127. If the pilot of an aircraft, equipped with the transponder, has been instructed \"SQUAWK 1200\" by an ATC, he should set the code 1200 on the transponder and.",
    answers: [
      "Move the switch to \"ON\" or \"ALT\", if not yet selected.",
      "Push the button \"IDENT\".",
      "Move the switch to \"STANDBY\".",
      "Move the switch to \"STANDBY\" and depress on button \"IDENT\"."
    ],
    correct: 0
  },
  {
    question: "128. With the SSR transponder selected ON, the ATC message 'YU-ABC verify your level' would be made to:",
    answers: [
      "Check and confirm the accuracy of the Mode C level information displayed to the controller.",
      "Identify aircraft position.",
      "Check your altimeter setting.",
      "Check with the pilot that Mode C is selected ON."
    ],
    correct: 0
  },
  {
    question: "129. Which phrase is used to annul the previously transmitted clearance?",
    answers: [
      "DISREGARD.",
      "RECLEARED.",
      "NEGATIVE.",
      "CANCEL."
    ],
    correct: 0
  },
  {
    question: "130. Which of the following is a conditional clearance?",
    answers: [
      "YU-ABC, AFTER THE JAT 737, TAXY TO HOLDING POINT D RUNWAY 26.",
      "JAT 345, LINE UP AND HOLD.",
      "REDWING 42, TAKE OFF AT YOUR DISCRETION.",
      "Y-CC, REPORT FINAL, TWO AHEAD."
    ],
    correct: 0
  },
  {
    question: "131. Taxy instructions issued by the controller will include a clearance limit which will normally be:",
    answers: [
      "The holding point of the runway in use.",
      "The threshold of the runway in use.",
      "The entrance to the parking area."
    ],
    correct: 0
  },
  {
    question: "132. The phrase \"CLEARANCE EXPIRES AT 02 35\" means that the pilot.",
    answers: [
      "Will be granted permission for takeoff by 02 35.",
      "May takeoff after 02 35.",
      "Shall wait until 02 35 asking for departure clearance.",
      "Shall start up engines at 02 35."
    ],
    correct: 0
  },
  {
    question: "133. A pilot receives the following message from ATC. \"YU-ABC, After departure cleared to zone boundary via Route Bravo, Climb to Altitude 2 500 feet, QNH 1005, Squawk 6521.\" What type of clearance is this?",
    answers: [
      "A Route Clearance.",
      "A Take-off Clearance.",
      "A Conditional Clearance.",
      "A Departure Clearance."
    ],
    correct: 0
  },
  {
    question: "134. The permission to taxi to the takeoff position will be phrased.",
    answers: [
      "LINE UP.",
      "TAXI TO THE TAKEOFF POSITION.",
      "CLEARED INTO POSITION AND HOLD.",
      "CONTINUE TO TAKEOFF POSITION AND HOLD."
    ],
    correct: 0
  },
  {
    question: "135. That portion of the runway identified by the letter C is called? (See Fig. PPL Kom-1).",
    answers: [
      "LINE-UP POSITION.",
      "START-UP POSITION.",
      "APRON.",
      "BASE LEG."
    ],
    correct: 0
  },
  {
    question: "136. During overflying a remote forest area you notice a hang glider on tree canopies and it seems to you that the pilot hangs on his harnesses. You decide to call the nearest airport and report the accident. The phrase with which you should begin your radiotelephony message is:",
    answers: [
      "PANPAN, PANPAN, PANPAN.",
      "EMERGENCY, EMERGENCY, EMERGENCY.",
      "MAYDAY, MAYDAY, MAYDAY.",
      "MEDICAL, MEDICAL, MEDICAL."
    ],
    correct: 0
  },
  {
    question: "137. That portion of the airport taxyway identified by the letter B is called? (See Fig. PPL Kom-1).",
    answers: [
      "HOLDING POINT.",
      "APRON.",
      "LINE-UP POSITION.",
      "CROSSWIND LEG."
    ],
    correct: 0
  }
];

// Total questions: 137

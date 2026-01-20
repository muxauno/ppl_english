const AIRLAW_QUESTIONS = [
  {
    question: "1. What is the basic presumption about VFR flight?",
    answers: [
      "That the flight will be flown in Visual Meteorological Conditions.",
      "That the pilot holds the correct rating to allow the aeroplane to be flown in VFR.",
      "That the flight will only take place in class G airspace."
    ],
    correct: 0
  },
  {
    question: "2. The pilot in command of an aircraft which enters the sovereign airspace of another contracting state for the purpose of landing must:",
    answers: [
      "Hold a licence issued by the authority of the state in which the aircraft is registered.",
      "Hold a licence issued by any ICAO contracting state.",
      "Hold a licence issued by any member state of the JAA."
    ],
    correct: 0
  },
  {
    question: "3. Which body is responsible for ensuring that an aircraft operating in a state's sovereign airspace complies with the rules and regulations which prevail in that airspace?",
    answers: [
      "The state in whose sovereign airspace the aircraft is operating.",
      "The state which issued the current Certificate of Airworthiness for the aircraft.",
      "The state in which the aircraft is registered."
    ],
    correct: 0
  },
  {
    question: "4. The Rules of the Air applicable to an aircraft registered in one state flying over another state shall be:",
    answers: [
      "Those of the state whose airspace is entered and transited.",
      "Those of the state of the visiting aircraft.",
      "Those agreed by ICAO contracting states to apply in all contracting states."
    ],
    correct: 0
  },
  {
    question: "5. While flying at night, as the pilot in command, you see an anti-collision light and a steady red light at the same altitude, at a constant relative bearing of 050 degrees, there a risk of collision? And who has right of way?",
    answers: [
      "Yes. The other aircraft does.",
      "Yes. You do.",
      "No. The other aircraft does."
    ],
    correct: 0
  },
  {
    question: "6. Two aircraft flying according to the Visual Flight Rules, one of which is receiving a Radar Information Service (RIS), are closing at an apparent constant relative bearing. There is, thus, a high risk of collision. The fact that one aircraft is receiving an RIS is immaterial to the situation. The Rules of the Air apply. Therefore, the aircraft which has the other on its left has right of way and should maintain:",
    answers: [
      "Course and speed.",
      "Height and speed.",
      "Altitude and course."
    ],
    correct: 0
  },
  {
    question: "7. When an aircraft is flying, under which flight rules must the flight be conducted?",
    answers: [
      "Either IFR or VFR.",
      "IFR in IMC and VFR in VMC.",
      "At the commander's discretion."
    ],
    correct: 0
  },
  {
    question: "8. When are navigation lights required to be shown?",
    answers: [
      "From sunset to sunrise or when specified by the Authority.",
      "When moving on the manoeuvring area of an aerodrome.",
      "Whenever the pilot in command thinks it is sensible to switch them on."
    ],
    correct: 0
  },
  {
    question: "9. What word is used to describe the vertical position of an aircraft measured above mean sea level, when QNH is set on the altimeter subscale?",
    answers: [
      "Altitude.",
      "Elevation.",
      "Height"
    ],
    correct: 0
  },
  {
    question: "10. What action should a pilot take if he suffers radio communications failure during a VFR flight in VMC?",
    answers: [
      "Continue to fly in VMC, land at the nearest suitable aerodrome and report his arrival to his destination airfield.",
      "Continue to his destination, transmitting blind and attempting to avoid IMC.",
      "Fly to the nearest aerodrome, orbit on the dead side of the circuit and await a steady green from the control tower."
    ],
    correct: 0
  },
  {
    question: "11. Which of the following flight levels would be suitable for an aircraft flying in accordance with the quadrantal rule and maintaining a magnetic track of 146 degrees? ДЦВ-PEL-ОБ-1001 издање 01 Датум примене: 25.08.2018. Страна 4 / 10 CAD-PEL-OB-1001 Issue 01 Еffective date: 25.08.2018. Page 4 / 10 Скадарска 23, 11000 Београд, Србија, тел. 011 292 70 60 факс 011 311 75 79 e mail:dgca@cad.gov. rs www.cad.gov.rs Skadarska 23, 11000 Belgrade, Serbia, tel.011 292 70 00 fax. 011 311 75 79 e-mail: dgca@cad.gov.rs, www.cad.gov.rs",
    answers: [
      "FL75.",
      "FL50.",
      "FL85."
    ],
    correct: 0
  },
  {
    question: "12. A pilot intending to land at a civil aerodrome should initiate his descent to below transition level with the altimeter subscale set to:",
    answers: [
      "QNH.",
      "QFE.",
      "QNE."
    ],
    correct: 0
  },
  {
    question: "13. You are on final approach and you see a steady red light from ATC. This means:",
    answers: [
      "Do not land. Continue circling.",
      "Continue approach and await a green light",
      "Do not land. Airfield closed."
    ],
    correct: 0
  },
  {
    question: "14. What color are runway markings?",
    answers: [
      "White.",
      "Red.",
      "Green."
    ],
    correct: 0
  },
  {
    question: "15. What colour are paved taxiway markings?",
    answers: [
      "Yellow.",
      "Red.",
      "Green."
    ],
    correct: 0
  },
  {
    question: "16. What is the meaning of a steady green light from ATC to an aircraft in the air?",
    answers: [
      "Clear to land.",
      "Return to this airfield and await landing clearance.",
      "Land immediately."
    ],
    correct: 0
  },
  {
    question: "17. If an aircraft marshaller holds his right arm down and repeatedly moves his left arm upward and backward it means:",
    answers: [
      "Turn left.",
      "Turn right.",
      "Keep moving ahead."
    ],
    correct: 0
  },
  {
    question: "18. A light aircraft is taking off behind a Heavy or Medium category aircraft. What period of separation is required?",
    answers: [
      "2 minutes.",
      "4 minutes.",
      "3 minutes."
    ],
    correct: 0
  },
  {
    question: "19. How often are Aeronautical Information Circulars published?",
    answers: [
      "Monthly",
      "Weekly",
      "Yearly."
    ],
    correct: 0
  },
  {
    question: "20. What is the international Aeronautical VHF Distress Frequency?",
    answers: [
      "121.50 MHz",
      "123.45 MHz",
      "243.00 MHz"
    ],
    correct: 0
  },
  {
    question: "21. What SSR squawk should be set in an emergency?",
    answers: [
      "7700",
      "7600",
      "7500"
    ],
    correct: 0
  },
  {
    question: "22. What is the definition of \"transition level\"?",
    answers: [
      "The lowest available Flight Level above the transition altitude.",
      "The Flight Level below which the vertical position of an aircraft is expressed as \"height\".",
      "The transition altitude expressed as a Flight Level."
    ],
    correct: 0
  },
  {
    question: "23. What word is used to describe the vertical position of an aircraft measured above an airfield datum level, when QFE is set on the altimeter subscale?",
    answers: [
      "Height",
      "Elevation.",
      "Altitude."
    ],
    correct: 0
  },
  {
    question: "24. Who is responsible for the issue of a Certificate of Airworthiness?",
    answers: [
      "The authority of the state of registration.",
      "The EASA.",
      "ICAO."
    ],
    correct: 0
  },
  {
    question: "25. Which of the following normally defines 'runway in use' on an uncontrolled airfield?",
    answers: [
      "A runway into wind.",
      "A part of the maneuvering area defined for take off and landing.",
      "The most convenient runway to use for the aircraft operating from the aerodrome."
    ],
    correct: 0
  },
  {
    question: "26. If the holder of a pilot's licence learns that he is to undergo surgery, what are his obligations in terms of informing the aviation medical authority?",
    answers: [
      "He should contact his aviation medical authority without delay and seek their advice on his circumstances.",
      "There is no requirement to do so provided the pilot does not fly again as pilot in command until after the surgical operation.",
      "He should advise the medical authority of the circumstances only if he is due to receive a general anesthetic."
    ],
    correct: 0
  },
  {
    question: "27. The successful completion of the theoretical knowledge examinations will be valid for the issue of a light aircraft pilot licence (LAPL), a private pilot licence (PPL), a sailplane pilot licence (SPL) or a balloon pilot licence (BPL), for a period of",
    answers: [
      "24 months",
      "12 months",
      "36 months",
      "48 months"
    ],
    correct: 0
  },
  {
    question: "28. Pilots are required to keep their safety belts and shoulder harnesses fastened during",
    answers: [
      "Takeoffs and landings.",
      "All flight conditions.",
      "Flight in turbulent air."
    ],
    correct: 0
  },
  {
    question: "29. Which best describes the flight conditions under which pilots are specifically required to keep their safety harness fastened?",
    answers: [
      "Safety belts during take off and landing and while en route; shoulder harnesses during takeoff and landing.",
      "Safety belts during take off and landing; shoulder harnesses during takeoff and landing.",
      "Safety belts during take off and landing; shoulder harnesses during takeoff and landing and while en route."
    ],
    correct: 0
  },
  {
    question: "30. With respect to passengers, what obligation, if any, does a pilot in command have concerning the use of seat belts?",
    answers: [
      "The pilot in command must brief the passengers with the location and the use of seat belts.",
      "The pilot in command must instruct the passengers to keep their seat belts fastened for the entire flight.",
      "The pilot in command has no obligation in regard to passengers' use of seat belts."
    ],
    correct: 0
  },
  {
    question: "31. The person directly responsible for the briefing of passengers for a flight is",
    answers: [
      "Pilot in command.",
      "Safety officer.",
      "Ground crew member."
    ],
    correct: 0
  },
  {
    question: "32. What should be entered into the \"LEVEL\" block of an ICAO VFR Flight Plan?",
    answers: [
      "Either the word \"VFR\" or the proposed cruising altitude.",
      "It is left blank for VFR flights.",
      "The proposed cruising altitudes."
    ],
    correct: 0
  },
  {
    question: "33. What is the meaning of \"WIP\"?",
    answers: [
      "Work in progress.",
      "With permission.",
      "With effect from."
    ],
    correct: 0
  },
  {
    question: "34. Who is responsible for the adequate safe separation between VFR flights in the air?",
    answers: [
      "Pilots themselves exclusively.",
      "The Air Traffic Control exclusively. ДЦВ-PEL-ОБ-1001 издање 01 Датум примене: 25.08.2018. Страна 6 / 10 CAD-PEL-OB-1001 Issue 01 Еffective date: 25.08.2018. Page 6 / 10 Скадарска 23, 11000 Београд, Србија, тел. 011 292 70 60 факс 011 311 75 79 e mail:dgca@cad.gov. rs www.cad.gov.rs Skadarska 23, 11000 Belgrade, Serbia, tel.011 292 70 00 fax. 011 311 75 79 e-mail: dgca@cad.gov.rs, www.cad.gov.rs",
      "The Air Traffic Control and the Surveillance Radar."
    ],
    correct: 0
  },
  {
    question: "35. Which rules of the air apply to an aircraft registered in the Republic of Slovenia while flying outside the native aerospace?",
    answers: [
      "Rules of the air of the state being overflown.",
      "Rules of the air of the Republic of Serbia.",
      "Rules of the air of the state producer of the aircraft."
    ],
    correct: 0
  },
  {
    question: "36. What is the lateral dimension of the airspace at the inner side of the state border, where all aircraft need to obtain special permission for flying within it?",
    answers: [
      "5 nm.",
      "7 nm.",
      "9 nm."
    ],
    correct: 0
  },
  {
    question: "37. Which of the cruising flight level listed is appropriate for a VFR flight over 3,000 ft MSL, while maintaining true course 170° and if the local variation value is 20°W?",
    answers: [
      "FL 65.",
      "FL 55.",
      "FL 40."
    ],
    correct: 0
  },
  {
    question: "38. What action should the pilots of an airplane and a glider take if on a head-on collision course?",
    answers: [
      "The airplane pilot should give way.",
      "The airplane pilot should give way, because his aircraft is more controllable.",
      "Both pilots should give way to the right."
    ],
    correct: 0
  },
  {
    question: "39. How often is a glider or an aeroplane state of airworthiness inspected by the authorized person?",
    answers: [
      "Regularly each year and in case if changing ownership or after repairs.",
      "Regularly every two years and after a hard landing.",
      "One year after the last regular inspection and in case of changing ownership."
    ],
    correct: 0
  },
  {
    question: "40. Which minimum life-saving equipment is recommended to be on board of a non-commercial flight of a single-engined landplane when flying en route over water beyond gliding distance from the shore?",
    answers: [
      "Life saving rafts in sufficient numbers to carry all persons on board.",
      "Life saving rafts in sufficient numbers to carry all persons on board and one life jacket for each person on board.",
      "One life jacket or equivalent individual floatation device for each person on board."
    ],
    correct: 0
  },
  {
    question: "41. A night flying inside the territory of Republic Serbia is defined by the state regulations as a flying between",
    answers: [
      "30 minutes after sunset and 30 minutes before sunrise.",
      "Sunset and sunrise.",
      "60 minutes before sunset and 60 minutes after sunrise."
    ],
    correct: 0
  },
  {
    question: "42. Which of the following statements, concerning heavier-than-air aircraft right-of-way during landing, is correct?",
    answers: [
      "Aircraft at higher level shall give way to aircraft at lower level, but the latter shall not take advantage of this rule to cut in front of another which is in the final stage of an approach to land, or to overtake that aircraft.",
      "Aircraft in final stage of an approach to land or which is first in an airport traffic circuit, has the right-of-way over all other aircraft.",
      "Aircraft which is the highest has the right-of-way over all other aircraft with the exception of turbojet aircraft, which has the right-of-way over propeller aircraft."
    ],
    correct: 0
  },
  {
    question: "43. When approaching to land at an airport, without an operating control tower, in Class G airspace, the pilot should",
    answers: [
      "Make all turns to the left, unless otherwise indicated.",
      "Enter and fly a traffic pattern at 800 feet AAL.",
      "Fly a left-hand traffic pattern at 800 feet AAL."
    ],
    correct: 0
  },
  {
    question: "44. Visual flying of aircraft in class G airspace at altitudes above 900 m (3,000 ft) MSL or 300 m (1,000 ft) from ground, whichever is higher, up to 3,050 m (10,000 ft), is permitted if the horizontal visibility is at least",
    answers: [
      "1.5 km.",
      "8 km.",
      "5 km."
    ],
    correct: 0
  },
  {
    question: "45. When flying visually in class G airspace at altitudes above 900 m (3,000 ft) MSL or 300 m (1,000 ft) from ground, whichever is higher, the ДЦВ-PEL-ОБ-1001 издање 01 Датум примене: 25.08.2018. Страна 7 / 10 CAD-PEL-OB-1001 Issue 01 Еffective date: 25.08.2018. Page 7 / 10 Скадарска 23, 11000 Београд, Србија, тел. 011 292 70 60 факс 011 311 75 79 e mail:dgca@cad.gov. rs www.cad.gov.rs Skadarska 23, 11000 Belgrade, Serbia, tel.011 292 70 00 fax. 011 311 75 79 e-mail: dgca@cad.gov.rs, www.cad.gov.rs pilot of an aircraft must maintain the vertical separation from clouds at least",
    answers: [
      "300 m.",
      "100 m.",
      "150 m."
    ],
    correct: 0
  },
  {
    question: "46. When flying a sport aircraft above the territory of the Republic of Slovenia, supplemental oxygen shall be used at the altitude above mean sea level greater than",
    answers: [
      "4,000 m.",
      "3,600 m.",
      "3,800 m."
    ],
    correct: 0
  },
  {
    question: "47. Aircraft A with an ATC clearance is flying in VMC conditions within a control area. Aircraft B with no ATC clearance is approaching at approximately the same altitude and on a converging course. Which has the right of way?",
    answers: [
      "Aircraft B if A is on its left.",
      "Aircraft A regardless of the direction which B is approaching.",
      "Aircraft B regardless of the direction A is approaching."
    ],
    correct: 0
  },
  {
    question: "48. With your aeroplane on an IFR flight in airspace class D, you receive a traffic information from ATC, that an helicopter on VFR flight is going to cross your flight path from right to left. Who has the right-of-way?",
    answers: [
      "ATC decides who has the right of way and issues appropriate instruction.",
      "I have the right-of-way as I am on an IFR flight.",
      "The helicopter has the right-of-way."
    ],
    correct: 0
  },
  {
    question: "49. Which of the statements listed, concerning the right-of-way when two aircraft converge, but not head-on, is correct?",
    answers: [
      "Normal category aircraft should give way to ultralight aircraft.",
      "Airplanes should give way to helicopters.",
      "Airplanes in free flight should give way to non-powered aircraft."
    ],
    correct: 0
  },
  {
    question: "50. What should the glider pilot do, if on head-on collision course with the two-engined Cessna?",
    answers: [
      "He should open the air brakes immediately, because a multi-engine airplane has the right- of-way.",
      "He should deviate to the left thus giving way to the airplane.",
      "He should deviate to the right."
    ],
    correct: 0
  },
  {
    question: "51. How long is the period before the expiry date of a single pilot single engine rating, during which a proficiency check for a revalidation may be done?",
    answers: [
      "3 months.",
      "15 days.",
      "1 month."
    ],
    correct: 0
  },
  {
    question: "52. In addition to other preflight actions for a VFR flight away from the vicinity of the departure airport, regulations specifically require the pilot in command to determine",
    answers: [
      "Runway lengths at airports of intended use and the aircraft's takeoff and landing distance data.",
      "Review traffic control light signal procedures.",
      "Check the accuracy of the navigational equipment and the emergency locator transmitter (ELT)."
    ],
    correct: 0
  },
  {
    question: "53. In which of the following cases should the aviation medical certificate deem to be suspended?",
    answers: [
      "Any illness involving incapacity to his functions as a member of flight crew throughout a period of 21 days or more, or any significant personal injury involving incapacity to undertake his functions as a member of the flight crew.",
      "Any surgical operation or invasive procedure and pregnancy.",
      "Any surgical operation or invasive procedure."
    ],
    correct: 0
  },
  {
    question: "54. How long are single pilot single engine class ratings valid?",
    answers: [
      "2 years.",
      "6 months.",
      "1 year."
    ],
    correct: 0
  },
  {
    question: "55. The validity of a pilot licence is determined by the validity of",
    answers: [
      "The ratings contained therein and the Medical Certificate.",
      "The Medical Certificate only.",
      "The licence itself, as endorsed in the licence."
    ],
    correct: 0
  },
  {
    question: "56. Which preflight action is specifically required of the pilot prior to each flight?",
    answers: [
      "Become familiar with all available information concerning the flight.",
      "Check the aircraft logbooks for appropriate entries.",
      "Review wake turbulence avoidance procedures."
    ],
    correct: 0
  },
  {
    question: "57. Preflight action, as required for all flights away from the vicinity of an airport, shall include",
    answers: [
      "An alternate course of action if the flight cannot be completed as planned.",
      "The designation of an alternate airport.",
      "A study of arrival procedures at airports/heliports of intended use."
    ],
    correct: 0
  },
  {
    question: "58. How many hours of total flying hours, required for the practical skill test for an issue of a Private Pilot Licence, may be completed on a Flight & Navigation Procedures Trainer or Simulator?",
    answers: [
      "5",
      "7",
      "10"
    ],
    correct: 0
  },
  {
    question: "59. At least how long must be the cross-country flight, required for the eligibility for the Private Pilot Licence skill test, and how many full stop landings at different aerodromes shall be made at this flight?",
    answers: [
      "150 NM; 2 landings.",
      "100 NM; 2 landings.",
      "200 NM; landings."
    ],
    correct: 0
  },
  {
    question: "60. At least how many hours of flying experience as a pilot of airplanes must have an applicant for a Private Pilot Licence?",
    answers: [
      "45 hours.",
      "50 hours.",
      "40 hours."
    ],
    correct: 0
  },
  {
    question: "61. What does the term \"solo flight time\" mean?",
    answers: [
      "flight time during which a student pilot is the sole occupant of an aircraft.",
      "Entire flight time when a pilot is alone in the aircraft.",
      "Entire flight time, when a pilot is alone in the aircraft, and 50% of the co-pilot flight time."
    ],
    correct: 0
  },
  {
    question: "62. The pilot or student pilot, when becoming aware of hospital admission of more than 12 hours, surgical operation or invasive procedure, the regular use of medication, the regular use of correcting lenses,",
    answers: [
      "Must not fly until seeks the advice of the competent aviation doctor.",
      "Must pass the aviation medical exam again.",
      "Must inform the CAA within the period of 21 days."
    ],
    correct: 0
  },
  {
    question: "63. An ATC clearance provides",
    answers: [
      "Authorization to proceed under specified traffic conditions in controlled airspace.",
      "Priority over all other traffic.",
      "Adequate separation from all traffic."
    ],
    correct: 0
  },
  {
    question: "64. What action should be taken if a pilot receives a clearance that will cause a deviation from a rule?",
    answers: [
      "Refuse the clearance as stated and request that it be amended.",
      "Accept the clearance, because the pilot is not responsible for the deviation.",
      "Accept the clearance and advise Air Traffic Control when deviation occurs."
    ],
    correct: 0
  },
  {
    question: "65. If a pilot has to deviate from an air traffic control clearance due to unforseen circumstances, he has to",
    answers: [
      "Transmit a general call giving all details concerning his deviation from the ATC clearance.",
      "Inform all ATC stations concerned by transmitting a multiple call.",
      "Notify the competent ATC unit without delay and obtain an amended ATC clearance."
    ],
    correct: 0
  },
  {
    question: "66. When intercepted by a military aircraft, the pilot of an VFR aircraft should",
    answers: [
      "Squawk 7700.",
      "Attempt to establish communications with the intercepting aircraft over 121.5 MHz and comply with the intercepts signals.",
      "Acknowledge receipt of intercepting aircraft instructions with the appropriate visual signals."
    ],
    correct: 0
  },
  {
    question: "67. As a substitute for the proficiency check with an examiner, what minimum flight time and what number of takeoffs and landing is required for the revalidation of a single pilot single engine airplane class rating?",
    answers: [
      "12 hours of flight time within 12 months preceding the expiry of the rating, including 6 hours of pilot-in-command time, and 12 takeoffs and 12 landings.",
      "12 hours of flight time within 12 months preceding the expiry of the rating, including 5 hours of pilot-in-command time, and takeoffs and landings.",
      "10 hours of flight time within 12 months preceding the expiry of the rating, including 6 hours of pilot-in-command time, and 12 takeoffs and 12 landings."
    ],
    correct: 0
  },
  {
    question: "68. Flight time during which the flight instructor will only observe the student acting as pilot-in- command and shall not influence or control the flight of the aircraft is",
    answers: [
      "Flight time as student pilot-in-command (SPIC).",
      "Solo flight time under supervision.",
      "Flight time as pilot-in-command."
    ],
    correct: 0
  },
  {
    question: "69. The Flight Time is the total time from the moment",
    answers: [
      "Than an aircraft first moves under its own or external power for the purpose of taking off until the moment it comes to rest at the end of the flight.",
      "Than an aircraft starts its engine(s) for the purpose of taking off or when a non-powered aircraft first moves, until the moment engine(s) stop(s) operating or when a non-powered",
      "Aircraft comes to rest at the end of the flight."
    ],
    correct: 0
  },
  {
    question: "70. To act as pilot in command of an airplane carrying passengers, the holder of PPL(A) must have made at least three takeoffs and three landings in an airplane of the same class, and if a type rating is required, of the same type, within the preceding",
    answers: [
      "90 days.",
      "12 calendar months.",
      "24 calendar months."
    ],
    correct: 0
  },
  {
    question: "71. At least how many hours of dual instructions on aeroplane must have an applicant for a PPL (A)?",
    answers: [
      "25 hours.",
      "10 hours.",
      "15 hours."
    ],
    correct: 0
  },
  {
    question: "72. What Medical Certificate is required for a student pilot?",
    answers: [
      "Class 1 or Class 2 Medical Certificate.",
      "Class 1 Medical Certificate only.",
      "Class A or Class B Medical Certificate."
    ],
    correct: 0
  },
  {
    question: "73. What Medical Certificate is required for a holder of a PPL(A),PPL(H),BPL and SPL?",
    answers: [
      "Class 1 or Class 2 Medical Certificate.",
      "Class 1 Medical Certificate only.",
      "Class A or Class B Medical Certificate"
    ],
    correct: 0
  },
  {
    question: "74. An applicant for a Private Pilot Licence must be at least",
    answers: [
      "17 years old.",
      "15 years old.",
      "16 years old."
    ],
    correct: 0
  },
  {
    question: "75. How long is an Instrument Rating valid for?",
    answers: [
      "12 months.",
      "6 months.",
      "18 months."
    ],
    correct: 0
  },
  {
    question: "76. Who is responsible for ensuring that all relevant aircraft documentation is carried on an international flight?",
    answers: [
      "The pilot in command.",
      "The organisation hiring out the aircraft.",
      "The air traffic organisation to whom the flight plan is submitted."
    ],
    correct: 0
  },
  {
    question: "77. During a cross-country flight you find yourself in the vicinity of an unknown airport. A military aircraft approaches, turns around your aircraft, rocks the wings and finally lowers the landing gear. What does this mean?",
    answers: [
      "You have been intercepted, land at the airport below you!",
      "You may proceed!",
      "Leave the airport zone immediately!"
    ],
    correct: 0
  },
  {
    question: "78. During a cross-country flight you notice the military aircraft approaching your left wingtip and flying along; after a short time it makes an abrupt break-away maneuver of a climbing turn to the left. What does this mean?",
    answers: [
      "You may proceed!",
      "You have been intercepted. Follow me!",
      "Land at the aerodrome in the direction of my flight!"
    ],
    correct: 0
  },
  {
    question: "79. Requested national mark of an aircraft registered in the Republic of Serbia is",
    answers: [
      "A fife-placed mark consisting of a certain combination of letters.",
      "The country flag of the Republic of Serbia and the mark YU.",
      "The country flag of the Republic of Serbia."
    ],
    correct: 0
  }
];

// Total questions: 79

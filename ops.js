const OPS_QUESTIONS = [
  {
    question: "1. When an engine is started up, the pilot should monitor oil pressure. If the engine is cold prior to start up, it should be :",
    answers: [
      "Shut down, if oil pressure is not seen to rise within approximately 30 seconds of start up.",
      "Shut down immediately if oil pressure does not rise immediately upon start up.",
      "Shut down, if oil pressure has not reached normal limits by the time the airplane is ready for takeoff.",
      "Operated normally, since it may take 10 minutes for oil pressure to rise."
    ],
    correct: 0
  },
  {
    question: "2. What should be the first action after starting an aircraft engine?",
    answers: [
      "Adjust for proper RPM and check for desired indications on the engine gauges.",
      "Place the magneto or ignition switch momentarily in the OFF position to check for proper grounding.",
      "Test each brake and the parking brake."
    ],
    correct: 0
  },
  {
    question: "3. As an airplane climbs to higher altitudes with the mixture control set in RICH, the fuel/air mixture :",
    answers: [
      "Becomes richer.",
      "Does not change.",
      "Becomes leaner."
    ],
    correct: 0
  },
  {
    question: "4. If the grade of fuel used in an aircraft engine is lower than specified for the engine, it will most likely cause :",
    answers: [
      "Detonations.",
      "A mixture of fuel and air that is not uniform in all cylinders.",
      "Lower cylinder head temperatures.",
      "An increase in power which could overstress internal engine components."
    ],
    correct: 0
  },
  {
    question: "5. When should the pressure in the barometric subscale of an aircraft altimeter be set?",
    answers: [
      "Before each flight and in the air, if necessary.",
      "Yearly.",
      "Monthly.",
      "Each morning before flying."
    ],
    correct: 0
  },
  {
    question: "6. Which would most likely cause the cylinder head temperature and engine oil temperature gauges to exceed their normal operating ranges?",
    answers: [
      "Using fuel that has a lower-than-specified fuel rating.",
      "Using fuel that has a higher-than-specified fuel rating.",
      "Operating with higher-than-normal oil pressure."
    ],
    correct: 0
  },
  {
    question: "7. If the grade of fuel used in an aircraft engine is lower than specified for the engine, it will most likely cause :",
    answers: [
      "Detonation.",
      "A mixture of fuel and air that is not uniform in all cylinders.",
      "Lower cylinder head temperatures."
    ],
    correct: 0
  },
  {
    question: "8. What fuel should you use in your aircraft if the specified grade is not available?",
    answers: [
      "The next higher grade of aviation fuel.",
      "The next lower grade of aviation fuel.",
      "Unleaded avtomotive gas of the same grade.",
      "Automotive gas SUPER of the same or next higher grade."
    ],
    correct: 0
  },
  {
    question: "9. Aviation gasoline 100LL is colored :",
    answers: [
      "Blue.",
      "Red.",
      "Green.",
      "Violet."
    ],
    correct: 0
  },
  {
    question: "10. Aviation gasoline 100/130 grade is colored?",
    answers: [
      "Green.",
      "Red.",
      "Blue.",
      "Violet."
    ],
    correct: 0
  },
  {
    question: "11. Aviation gasoline 80/87 grade is colored?",
    answers: [
      "Red.",
      "Green.",
      "Blue.",
      "Violet."
    ],
    correct: 0
  },
  {
    question: "12. 53 liters of AVGAS 100 LL weights :",
    answers: [
      "38 kg.",
      "42 kg.",
      "74 kg.",
      "80 kg."
    ],
    correct: 0
  },
  {
    question: "13. On aircraft equipped with fuel pumps, when is the auxiliary electric driven pump used?",
    answers: [
      "In the event engine-driven fuel pump fails.",
      "All the time to aid the engine-driven fuel pump.",
      "Constantly except in starting the engine."
    ],
    correct: 0
  },
  {
    question: "14. Which wind condition would be most critical when taxiing a nosewheel equipped high-wing airplane?",
    answers: [
      "Quartering tailwind.",
      "Direct crosswind.",
      "Quartering headwind."
    ],
    correct: 0
  },
  {
    question: "15. Following an aviation accident in the Republic of Serbia, to which of the following must the accident be reported as expeditiously as possible?",
    answers: [
      "The Civil Aviation Authority and the local police.",
      "The Chief Inspector of the Air Accident Investigation Branch (AAIB) and to the local police.",
      "The home airfield of the aircraft involved in the accident.",
      "The nearest Air Traffic Control Unit."
    ],
    correct: 0
  },
  {
    question: "16. If an emergency situation requires a downwind landing, pilots should expect a faster :",
    answers: [
      "Groundspeed at touchdown, a longer ground roll, and the likelihood of overshooting the desired touchdown point.",
      "Airspeed at touchdown, a longer ground roll, and better control throughout the landing roll.",
      "Groundspeed at touchdown, a shorter ground roll, and the likelihood of undershooting the desired touchdown point."
    ],
    correct: 0
  },
  {
    question: "17. How should the flight controls be held while taxiing a tailwheel airplane into a right quartering headwind?",
    answers: [
      "Right aileron up, elevator up.",
      "Right aileron down, elevator neutral.",
      "Right aileron up, elevator down."
    ],
    correct: 0
  },
  {
    question: "18. How should the flight controls be held while taxiing a tricycle-gear equipped airplane into a left quartering headwind?",
    answers: [
      "Left aileron up, elevator neutral.",
      "Left aileron down, elevator neutral.",
      "Left aileron up, elevator down."
    ],
    correct: 0
  },
  {
    question: "19. Which aileron position should a pilot generally use when taxiing in strong quartering headwinds?",
    answers: [
      "Aileron up on the side from which the wind is blowing.",
      "Aileron down on the side from which the wind is blowing.",
      "Aileron neutral."
    ],
    correct: 0
  },
  {
    question: "20. How should the flight controls be held while taxiing a tailwheel airplane with a left quartering tailwind?",
    answers: [
      "Left aileron down, elevator down.",
      "Left aileron up, elevator neutral.",
      "Left aileron down, elevator neutral."
    ],
    correct: 0
  },
  {
    question: "21. How should the flight controls be held while taxiing a tricycle-gear equipped airplane into a left quartering tailwind?",
    answers: [
      "Left aileron down, elevator down.",
      "Left aileron up, elevator neutral.",
      "Left aileron up, elevator down."
    ],
    correct: 0
  },
  {
    question: "22. A reading 5 inhg on the vacuum gauge of an aircraft is the indication of :",
    answers: [
      "Normal suction.",
      "Insufficient suction.",
      "Excessive suction."
    ],
    correct: 0
  },
  {
    question: "23. How should the flight controls be deflected while taxiing a tailwheel aeroplane with a strong tailwind?",
    answers: [
      "Down.",
      "Up.",
      "In neutral.",
      "Fully up."
    ],
    correct: 0
  },
  {
    question: "24. A reading 2 inhg on the vacuum gauge of an aircraft is the indication of :",
    answers: [
      "Insufficient suction.",
      "Normal suction.",
      "Excessive suction."
    ],
    correct: 0
  },
  {
    question: "25. Braking of an individual main wheel is known as :",
    answers: [
      "Directional braking.",
      "Differential braking.",
      "Individual braking."
    ],
    correct: 0
  },
  {
    question: "26. If a tyre has moved so that the creep marks are out of alignment, then :",
    answers: [
      "It should be inspected and possibly re-fitted or replaced.",
      "It is serviceable.",
      "Tyre pressure should be checked.",
      "The brakes will be unserviceable."
    ],
    correct: 0
  },
  {
    question: "27. The red creep marks on the main tyre and the wheel of an aircraft serve for :",
    answers: [
      "Tyre-wheel alignment checking.",
      "Tyre type recognizing.",
      "Wheel balancing.",
      "Tyre pressure checking."
    ],
    correct: 0
  },
  {
    question: "28. Detonation may occur at high-power settings when :",
    answers: [
      "The fuel mixture ignites instantaneously instead of burning progressively and evenly.",
      "An excessively rich fuel mixture causes an explosive gain in power.",
      "The fuel mixture is ignited too early by hot carbon deposits in the cylinder."
    ],
    correct: 0
  },
  {
    question: "29. When and where should the pilot check the aircraft wheel brakes?",
    answers: [
      "Immediately after leaving the parking spot.",
      "Any time during taxiing towards a runway.",
      "On the runway, after the aircraft gains some speed.",
      "After takeoff."
    ],
    correct: 0
  },
  {
    question: "30. The most probable reason an engine continues to run after the ignition switch has been turned off is :",
    answers: [
      "A broken magneto ground wire.",
      "Carbon deposits glowing on the spark plugs.",
      "A magneto ground wire is in contact with the engine casing."
    ],
    correct: 0
  },
  {
    question: "31. The most probable reason for propeller back-rotating during starting of an reciprocating aviation engine is :",
    answers: [
      "Excessive priming of fuel.",
      "Insufficient priming of fuel.",
      "Too poor mixture.",
      "Too rich mixture."
    ],
    correct: 0
  },
  {
    question: "32. What should normally be done if after start-up of a hot four-stroke aviation engine oil pressure does not reach proper level?",
    answers: [
      "Shut down the engine.",
      "Increase engine RPM thus allowing the oil pump to increase oil pressure.",
      "Nothing, because instruments on modern aircraft are cheap and unreliable.",
      "Enrich the mixture to prevent unnormal rise of the cylinder heads temperature."
    ],
    correct: 0
  },
  {
    question: "33. If a pilot elects to make a distress or urgency call, on which frequency should he first transmit, as an alternative to 121.5 MHz?",
    answers: [
      "The frequency he is currently using.",
      "He should always change immediately to 121.5 MHz before transmitting.",
      "The frequency of the nearest airfield with a full Air traffic Control Service.",
      "His home airfield frequency."
    ],
    correct: 0
  },
  {
    question: "34. Which of the following cases constitutes an aircraft accident?",
    answers: [
      "The injury of a person on the ground after being struck by any part of an aircraft which had detached from the aircraft while it was airborne but where the safety of the aircraft was not necessarily compromised.",
      "A lightning strike on an aircraft in flight.",
      "An engine failure in flight.",
      "A burst main gear or tailwheel tyre during the take-off or landing roll."
    ],
    correct: 0
  },
  {
    question: "35. Which one of the following statements is false? An accident must be reported if, between the time that anyone boards an aircraft to go flying and until everyone has left it:",
    answers: [
      "A passenger dies from natural causes.",
      "Anyone is killed or seriously injured while in or on the aircraft.",
      "The aircraft incurs damage or structural failure.",
      "The aircraft is completely inaccessible or missing."
    ],
    correct: 0
  },
  {
    question: "36. If a pilot judges that his aircraft is in grave and imminent danger, his message should begin with the words:",
    answers: [
      "Mayday Mayday Mayday.",
      "Pan Pan Pan Pan Pan Pan.",
      "Either Pan Pan Pan Pan Pan Pan or Mayday Mayday Mayday.",
      "Emergency Emergency Emergency."
    ],
    correct: 0
  },
  {
    question: "37. For night operation, airplanes and gliders must be equipped with the following lights:",
    answers: [
      "Right wing tip: green light, left wing tip: red light, tail: white light.",
      "Left wing tip: green light, right wing tip: red light, tail: white light.",
      "Left wing tip: white light, right wing tip: white light, tail: red light.",
      "Left wing tip: white light, right wing tip: white light, tail: orange light."
    ],
    correct: 0
  },
  {
    question: "38. What initial precaution should be taken by the pilot when parking an aircraft with a magneto that is unable to be grounded because of a faulty connection in the ignition switch?",
    answers: [
      "A placard should be placed on the aircraft warning others of \"live magnetos\".",
      "Other pilots should be warned against flying the aircraft.",
      "The aircraft should be grounded by making an entry in the Journey Log.",
      "The CCA should be notified at once."
    ],
    correct: 0
  },
  {
    question: "39. While cruising at 9,500 feet MSL, the fuel/air mixture is properly adjusted. What will occur if a descent to 4,500 feet MSL is made without readjusting the mixture?",
    answers: [
      "The fuel/air mixture may become excessively lean.",
      "There will be more fuel in the cylinders than is needed for normal combustion, and the excess fuel will absorb heat and cool the engine.",
      "The excessively rich mixture will create higher cylinder head temperatures and may cause detonation.",
      "The fuel/air mixture may become excessively reach."
    ],
    correct: 0
  },
  {
    question: "40. What will happen if the fuel primer pump is not locked enough after its use?",
    answers: [
      "The fuel/air mixture will be too rich because of the fuel leaking into the intake manifold.",
      "The fuel/air mixture will be too poor because of the air leaking into the intake manifold.",
      "Dropping of a fuel in the cockpit.",
      "Detonations in the engine because of too rich fuel/air mixture."
    ],
    correct: 0
  },
  {
    question: "41. What happens if the filler cap comes loose on one of your wing fuel tanks?",
    answers: [
      "The low pressure on the top of the wing will cause all the fuel to be siphoned out.",
      "Rainwater will enter the tank and contaminate the fuel.",
      "The loose cap will cause damage to control surfaces if it flies off.",
      "The aerodynamics flow about the fuel filler neck will disrupt fuel flow."
    ],
    correct: 0
  },
  {
    question: "42. Filling the fuel tanks after the last flight of the day is considered a good operating procedure because this will :",
    answers: [
      "Prevent moisture condensation by eliminating airspace in the tanks.",
      "Force any existing water to the top of the tank away from the fuel lines to the engine.",
      "Prevent expansion of the fuel by eliminating airspace in the tanks."
    ],
    correct: 0
  },
  {
    question: "43. What is the best way to reduce the possibility of water contamination in fuel tanks?",
    answers: [
      "Always keeping the fuel tanks full will help to eliminate condensation.",
      "Fuel filters should be sealed to keep out rainwater.",
      "Tank vents should be plugged while the aircraft is parked overnight."
    ],
    correct: 0
  },
  {
    question: "44. To properly purge water from the fuel system of an aircraft equipped with fuel tank sumps and a fuel strainer quick drain, it is necessary to drain fuel from the :",
    answers: [
      "Fuel strainer drain and the fuel tank sumps.",
      "Fuel strainer drain.",
      "Lowest point in the fuel system."
    ],
    correct: 0
  },
  {
    question: "45. Which fuel contaminant is the most difficult to isolate with simple filter systems?",
    answers: [
      "Water.",
      "Fine rust or dirt particles.",
      "Grease or oil.",
      "Ice."
    ],
    correct: 0
  },
  {
    question: "46. What unit of measurement is in use in aviation when vertical velocity parameters are reported?",
    answers: [
      "Feet per minute.",
      "Meters per minute.",
      "Meters per second.",
      "Feet per second."
    ],
    correct: 0
  },
  {
    question: "47. What is the most reliable practical method of checking the fuel level in the reservoirs of an aircraft while on ground?",
    answers: [
      "Visual checking the fuel level in the reservoir.",
      "Reading the fuel gauges with engine running.",
      "Weighing of an aircraft.",
      "Shaking the wingtip and observing the fuel bouncing."
    ],
    correct: 0
  },
  {
    question: "48. What is the specific mass of aviation gasoline?",
    answers: [
      "0.72 kg/liter.",
      "0.60 kg/liter.",
      "1.00 kg/liter.",
      "1.72 kg/liter."
    ],
    correct: 0
  },
  {
    question: "49. What is the reason for shutting down an aviation reciprocating engine using the mixture lever rather than the ignition switch?",
    answers: [
      "By doing that we avoid self-ignition due to presence of the fuel/air mixture in cylinders.",
      "Because an engine cannot be shut down by switching the magnetos off.",
      "By doing that we prevent the engine to be shut down at too high temperature.",
      "Because at magnetos switching off the engine stops very rapidly and damage of the main shaft bearings could occur."
    ],
    correct: 0
  },
  {
    question: "50. What should you do if your cylinder head temperature drops too low during an approach to land or in a glide?",
    answers: [
      "Apply sufficient power to keep the engine warm.",
      "Turn on carburetor heating.",
      "Reduce airspeed to decrease the cooling effect of the airflow.",
      "Lean the mixture."
    ],
    correct: 0
  },
  {
    question: "51. Following a sudden and complete loss of power from the engine, there is no mechanical noise and the propeller continues to windmill. The likely cause of the power loss is :",
    answers: [
      "Fuel starvation.",
      "Failure of a magneto.",
      "Break-up of a piston or valve."
    ],
    correct: 0
  },
  {
    question: "52. If an engine failure is accompanied by mechanical noise and the propeller stops rotating, the cause of the engine failure is most likely :",
    answers: [
      "Break-up of a piston valve.",
      "Fuel starvation.",
      "Failure of a magneto."
    ],
    correct: 0
  },
  {
    question: "53. What is the proper pilot procedure in case of a popped-out circuit breaker?",
    answers: [
      "Wait until the circuit breaker cools and push it in; if it popes up again, do not Push the circuit breaker and hold it firmly in by finger until land.",
      "Not to push in the circuit breaker in any case.",
      "Push the circuit breaker in with the related electrical equipment switched off.",
      "Push it again."
    ],
    correct: 0
  },
  {
    question: "54. What should be done if your aircraft engine overheats while taxiing?",
    answers: [
      "Turn into wind and idle at the recommended RPM.",
      "Shut off the engine immediately.",
      "Speed up the engine for improved airflow over the cooling fins.",
      "Enrich mixture to provide cooler combustion temperatures."
    ],
    correct: 0
  },
  {
    question: "55. When tying down an aircraft, when should some slack be left in the rope?",
    answers: [
      "When using manila ropes tie-down.",
      "When using nylon ropes tie-down.",
      "Where there are strong winds.",
      "Tie-downs should be tied firmly, never leave slack."
    ],
    correct: 0
  },
  {
    question: "56. Why should you check a sample of fuel from the sump and filter before each flight?",
    answers: [
      "To be certain that the fuel is free of contaminants and of the proper grade.",
      "To be certain that the fuel is free flowing.",
      "To know that the fuel pump is working properly.",
      "To be sure that the proper grade of fuel is used."
    ],
    correct: 0
  },
  {
    question: "57. What is the purpose of the runway/runway hold position sign?",
    answers: [
      "Denotes intersecting runways.",
      "Denotes entrance to runway from a taxiway.",
      "Denotes area protected for an aircraft approaching or departing a runway."
    ],
    correct: 0
  },
  {
    question: "58. How long will wake turbulence remain after the passage of a large aircraft?",
    answers: [
      "Five minutes or more; ATC permits two or three minutes separation.",
      "Two minutes.",
      "Three minutes."
    ],
    correct: 0
  },
  {
    question: "59. When operating an aircraft at cabin pressure altitudes above 10,000 ft up to and including 13,000 ft MSL, supplemental oxygen shall be used by all crew members :",
    answers: [
      "That flight time in excess of 30 minutes at those altitudes.",
      "The entire flight time at those altitudes.",
      "That flight time in excess of 10 minutes at those altitudes."
    ],
    correct: 0
  },
  {
    question: "60. When operating an aircraft at cabin pressure altitudes above 13,000 ft MSL, sufficient supplemental oxygen should be carried to supply.",
    answers: [
      "Crew members and passengers.",
      "Crew members only.",
      "Passengers only."
    ],
    correct: 0
  },
  {
    question: "61. Following separation of the airflow from one wing and banking and slipping to one side, the pilot would prevent an aircraft of developing a full spin by :",
    answers: [
      "Deflecting the rudder to the opposite side of slipping and easing the elevator forward to gain the speed.",
      "Deflection of all flight controls to the opposite side of rotation instantly.",
      "Applying back pressure on the control stick thus recovering from a dive.",
      "Opening the airbrakes immediately (if installed)."
    ],
    correct: 0
  },
  {
    question: "62. Choose the correct procedure for spin recovery in an aeroplane?",
    answers: [
      "Apply the rudder opposite to direction of rotation, ailerons to neutral, elevator control ease forward, and recover gently from a dive.",
      "Apply the rudder in direction of rotation, ailerons opposite to direction of rotation, and pull on the stick backward.",
      "Apply the rudder opposite to direction of rotation, ailerons to neutral, elevator control backward.",
      "Deflect the rudder and the stick in direction of rotation and firmly push on the stick forward."
    ],
    correct: 0
  },
  {
    question: "63. Choose the correct action for steep spiral recovery.",
    answers: [
      "Level wings with ailerons, and ease out of ensuing dive.",
      "Apply full rudder opposite to direction of rotation, move control column forward to break a stall, and ease out of ensuing dive.",
      "Apply opposite ailerons, ease control column forward, and ease out of ensuing dive."
    ],
    correct: 0
  },
  {
    question: "64. The main benefit of using flaps during approach and land is to :",
    answers: [
      "Provide the same amount of lift at a slower airspeed.",
      "Decrease the angle of descent without increasing the airspeed.",
      "Decrease lift, thus enabling a steeper-than-normal approach to be made."
    ],
    correct: 0
  },
  {
    question: "65. To minimize the side loads placed on the landing gear during touchdown, the pilot should keep the:",
    answers: [
      "Longitudinal axis of the aircraft parallel to the direction of its motion.",
      "Direction of motion of the aircraft parallel to the runway.",
      "Downwind wing lowered sufficiently to eliminate the tendency for the aircraft to drift."
    ],
    correct: 0
  },
  {
    question: "66. Wing flaps at the recommended landing setting :",
    answers: [
      "Cause a large drag increase and a small increase in lifting ability.",
      "Increase lifting ability for a small increase of drag.",
      "Significantly increase drag for a small decrease in lifting ability.",
      "Will not affect lift and drag."
    ],
    correct: 0
  },
  {
    question: "67. The pilot could normally check the state of charge of the oleo-pneumatic units during a walkaround inspection by :",
    answers: [
      "Inspecting how much the struts extend.",
      "Measuring the pressure in the oleo-pneumatic units.",
      "Inspecting the hydraulic fluid level in the oleo-pneumatic units.",
      "This check could not be performed by the pilot."
    ],
    correct: 0
  },
  {
    question: "68. How frequently should the aviation magnetic compass be swung?",
    answers: [
      "Each year before an annual inspection of an aircraft or after installing of optional instruments or radio equipment, or more frequently, if necessary.",
      "Before first initial inspection of an aircraft.",
      "Each month.",
      "After each long flight."
    ],
    correct: 0
  },
  {
    question: "69. The accuracy of an altimeter is checked by :",
    answers: [
      "Setting the altimeter to QNH in checking the elevation reading while on ground.",
      "Low-passing near towers with known height.",
      "Cross-checking of altimeter readings and radioaltimeter readings.",
      "Cross-checking of flight altitudes and altitudes from an aeronautical geographical chart 1:500 000."
    ],
    correct: 0
  },
  {
    question: "70. What is the reason for most of the refuelling fires caused by static electricity sparks?",
    answers: [
      "Refuelling an ungrounded aircraft from plastic containers.",
      "Refuelling an ungrounded aircraft from metal containers.",
      "Refuelling a grounded aircraft with the engine running."
    ],
    correct: 0
  },
  {
    question: "71. What would be most likely to cause an upset while taxiing a nose-wheel equipped aircraft in strong wind?",
    answers: [
      "Turning sharply (causing the wind to lift the up-wind wing).",
      "Applying the brakes suddenly & firmly.",
      "Accelerating suddenly.",
      "Lifting the nose-wheel."
    ],
    correct: 0
  },
  {
    question: "72. Before flight it is the pilot's responsibility to check that the aircraft is properly registered, is airworthy and has been maintained properly. To this end he must check a variety of documents. Which one of the following is not required to be checked?",
    answers: [
      "Minimum Equipment List.",
      "Certificate of Airworthiness.",
      "Technical log.",
      "Third Party Insurance certificate."
    ],
    correct: 0
  },
  {
    question: "73. 1 USA gallon of AVGAS 100 LL weights :",
    answers: [
      "6 lbs.",
      "3 lbs.",
      "4 lbs.",
      "5 lbs."
    ],
    correct: 0
  },
  {
    question: "74. The pilot of an aircraft taking-off from an airfield where the altimeter setting is not readily available, shall set the aircraft altimeter to :",
    answers: [
      "The elevation of the airfield.",
      "The altitude zero.",
      "1013.2 hpa.",
      "The altimeter setting of the nearest controlled airport."
    ],
    correct: 0
  },
  {
    question: "75. What frequency should be monitored by an aircraft when taking-off from an airfield inside the territory of the Republic of Serbia without published frequency?",
    answers: [
      "123.5 MHz.",
      "123.2 MHz.",
      "122.8 MHz.",
      "121.5 MHz."
    ],
    correct: 0
  },
  {
    question: "76. Official data regarding operating limitations and allowed mass of your aircraft could be found in :",
    answers: [
      "Aircraft's Flight Manual.",
      "Maintenance Log.",
      "Certificate of Airworthiness and in Certificate of Registration.",
      "Official Gazette of Civil Aviation Authority."
    ],
    correct: 0
  },
  {
    question: "77. At the scene of an aircraft accident, a survivor has made a ground signal showing a large cross with angles of 90° between the arms of the cross. What does this mean?",
    answers: [
      "Require medical assistance.",
      "Require assistance.",
      "This is our position.",
      "All survivors are uninjured."
    ],
    correct: 0
  },
  {
    question: "78. When must the anti-collision beacon on an aircraft be operating (if installed)?",
    answers: [
      "Must be on all the time the engine of an aircraft is running.",
      "All the time the aircraft is flying.",
      "Must be switched on after engine start-up and switched off before engine shut-down.",
      "Must be switched on shortly before takeoff and switched off when the aircraft vacates the runway."
    ],
    correct: 0
  },
  {
    question: "79. In the course of a flight during daylight hours, a pilot notices that the aircraft's anti collision light has failed. What course of action should he take?",
    answers: [
      "Continue with the flight, as long as it can be completed in daylight, and get the light repaired at the earliest opportunity.",
      "Land immediately at the nearest aerodrome.",
      "Land as soon as practically possible at the nearest suitable airfield.",
      "Return to his base airfield and declare the aircraft unserviceable until the light has been repaired."
    ],
    correct: 0
  },
  {
    question: "80. What units of measurement are in use in aviation when wind parameters are reported to the pilot (with the exception of takeoff and landing)?",
    answers: [
      "True direction and knots.",
      "True direction and kilometers per hour.",
      "Magnetic direction and statute miles per hour.",
      "Magnetic direction and knots."
    ],
    correct: 0
  },
  {
    question: "81. All aircraft on the aircraft movement area of an aerodrome with engines running are display lights to indicate this. Which one of the following is used for this purpose?",
    answers: [
      "Red anti-collision light.",
      "Landing light.",
      "Navigation lights.",
      "Tail light."
    ],
    correct: 0
  },
  {
    question: "82. During a walk around check you move the control column of your aircraft to one side and notice that the up-aileron deflects more than the down-aileron. You would normally :",
    answers: [
      "Do nothing, because the ailerons are of the type \"differential\".",
      "Call the mechanic.",
      "Consider situation normal as long as the difference in deflections on opposite sides is equal, however you would make a technical remark in the book.",
      "Fix uneven deflections by adjusting the regulating screws on the aileron control system."
    ],
    correct: 0
  },
  {
    question: "83. It's the pilot's responsibility to ensure that the aircraft is properly equipped for the planned flight. If there is any doubt the pilot should consult:",
    answers: [
      "Minimum Equipment List.",
      "Certificate of Airworthiness.",
      "Certificate of Maintenance Review,.",
      "Pilot's Operating Handbook."
    ],
    correct: 0
  },
  {
    question: "84. Which of the following is not a Search & Rescue Alerting phase?",
    answers: [
      "Urgency phase.",
      "Uncertainty phase.",
      "Alert Phase.",
      "Distress phase."
    ],
    correct: 0
  },
  {
    question: "85. In establishing noise preferential routes, turns during take off and climb should not be required unless the aircraft has reached:",
    answers: [
      "500 ft above terrain or the highest obstacles under the flight path.",
      "1000 ft above terrain or the highest obstacles under the flight path.",
      "1500 ft above terrain or the highest obstacles under the flight path.",
      "2000 ft above terrain or the highest obstacles under the flight path."
    ],
    correct: 0
  },
  {
    question: "86. What effect does extended wing flaps have on the stalling speed? The stalling speed will :",
    answers: [
      "Decrease.",
      "No change, because the stalling speed does not depend on wing flaps position.",
      "Increase."
    ],
    correct: 0
  },
  {
    question: "87. During landing close to the surface and at low airspeed, it could be dangerous to retract wing flaps, because of :",
    answers: [
      "Rapid decrease of lift and resulting sink into runway.",
      "Drag increase and resulting rapid decrease of the airspeed.",
      "Rapid increase of the airspeed and resulting rapid climb.",
      "Great decrease in effectivness of wing flaps."
    ],
    correct: 0
  },
  {
    question: "88. Which procedure should you follow to avoid wake turbulence if a large jet crosses your course from left to right approximately 1 mile ahead and at your altitude?",
    answers: [
      "Make sure you are slightly above the path of the jet.",
      "Slow your airspeed to VA and maintain altitude and course.",
      "Make sure you are slightly below the path of the jet and perpendicular to the course."
    ],
    correct: 0
  },
  {
    question: "89. When approaching taxiway holding lines from the side with the continuous lines, the pilot :",
    answers: [
      "Should not cross the lines without ATC clearance.",
      "May continue taxiing.",
      "Should continue taxiing until all parts of the aircraft have crossed the lines."
    ],
    correct: 0
  },
  {
    question: "90. One of the main function of flaps during the approach and landing is to :",
    answers: [
      "Increase the angle of descent without increasing the airspeed.",
      "Decrease lift, thus enabling a steeper-than-normal approach to be made.",
      "Permit touchdown at a higher indicated airspeed.",
      "Decrease the angle of descent without increasing the airspeed."
    ],
    correct: 0
  },
  {
    question: "91. Airport taxiway edge lights are identified at night by :",
    answers: [
      "Blue omnidirectional lights.",
      "White directional lights.",
      "Alternate red and green lights."
    ],
    correct: 0
  },
  {
    question: "92. Which of the following describes threshold lights?",
    answers: [
      "Green unidirectional.",
      "Red unidirectional.",
      "Green omni-directional.",
      "Red omni-directional."
    ],
    correct: 0
  },
  {
    question: "93. Low intensity obstacle lights on fixed objects shall be :",
    answers: [
      "Fixed red.",
      "Flashing yellow.",
      "Flashing red.",
      "Fixed orange."
    ],
    correct: 0
  },
  {
    question: "94. VFR approaches to land at night should be accomplished:",
    answers: [
      "The same as during daytime.",
      "At a higher airspeed.",
      "With a steeper descent."
    ],
    correct: 0
  },
  {
    question: "95. Each pilot of an aircraft approaching to land on a runway served by a visual approach slope indicator (VASI) shall :",
    answers: [
      "Maintain an altitude at or above the glide slope.",
      "Maintain a 3° glide to the runway.",
      "Stay high until the runway can be reached in a power-off landing."
    ],
    correct: 0
  },
  {
    question: "96. When approaching to land on a runway served by a visual slope indicator (VASI), the pilot shall :",
    answers: [
      "Maintain an altitude at or above the glide slope.",
      "Maintain an altitude that captures the glide slope at least 2 miles downwind from the runway threshold.",
      "Remain on the glide slope and land between the two-light bars."
    ],
    correct: 0
  },
  {
    question: "97. A slightly high-glide-slope indication from a precision approach path indicator is :",
    answers: [
      "Three white lights and one red light.",
      "Four white lights.",
      "Two white lights and two red lights."
    ],
    correct: 0
  },
  {
    question: "98. A below-glide-slope indication from a tri-color VASI is.",
    answers: [
      "Red light signal.",
      "Pink light signal.",
      "Green light signal."
    ],
    correct: 0
  },
  {
    question: "99. An above-glide-slope indication from a tri-color VASI is.",
    answers: [
      "An amber light signal.",
      "A white light signal.",
      "A green light signal."
    ],
    correct: 0
  },
  {
    question: "100. An on-glide-slope indication from a tri-color VASI is.",
    answers: [
      "A green light signal.",
      "A white light signal.",
      "An amber light signal."
    ],
    correct: 0
  },
  {
    question: "101. A below-glide-slope indication from a pulsating approach slope indicator is a.",
    answers: [
      "Pulsating red light.",
      "Pulsating white light.",
      "Steady white light."
    ],
    correct: 0
  },
  {
    question: "102. What marking may be displayed by day on an aerodrome to indicate unserviceability of any portion of a manoeuvring area?",
    answers: [
      "Crosses of single conspicuous color (preferably white) displayed horizontally.",
      "Orange flags bordering the unserviceable area.",
      "White and orange cones bordering the unserviceable area.",
      "Large red squares with yellow diagonal markings displayed horizontally."
    ],
    correct: 0
  },
  {
    question: "103. Wing flaps at takeoff are not set to fully deflected position to avoid :",
    answers: [
      "Excessive drag.",
      "Excessive lift.",
      "\"Nose heavy\" aircraft.",
      "Damage of the flaps."
    ],
    correct: 0
  },
  {
    question: "104. How should the mixture control be set for takeoff at sea level?",
    answers: [
      "Forward (FULL RICH).",
      "Aft (FULL RICH).",
      "Aft (FULL LEAN).",
      "Forward (FULL LEAN)."
    ],
    correct: 0
  },
  {
    question: "105. In an airplane with a controllable pitch propeller, power reduction should be made by first reducing :",
    answers: [
      "The manifold pressure with the throttle, and then adjusting the RPM with the propeller control.",
      "The RPM with the throttle and then reducing the manifold pressure with the propeller control.",
      "The RPM with the propeller control, and then reducing the manifold pressure with the throttle.",
      "The manifold pressure with the propeller control, and then reducing the RPM with the throttle."
    ],
    correct: 0
  },
  {
    question: "106. When landing behind a large aircraft, the pilot should avoid wake turbulence by staying :",
    answers: [
      "Above the large aircraft's final approach flight path and landing beyond the large aircraft's touchdown point.",
      "Below the large aircraft's final approach flight path and landing before the large aircraft's touchdown point.",
      "Above the large aircraft's final approach flight path and landing before the large aircraft's touchdown point."
    ],
    correct: 0
  },
  {
    question: "107. The carburetor heat during taxi should be used with caution due to :",
    answers: [
      "Dust and other foreign particles which can cause damage if ingested into engine.",
      "High temperatures which can cause detonations.",
      "Rich mixture which can cause fouling of the spark plugs.",
      "Overheating of the engine."
    ],
    correct: 0
  },
  {
    question: "108. Wing flaps at the recommended takeoff setting :",
    answers: [
      "Increase lifting ability for a small penalty of drag.",
      "Increase lifting ability for a large penalty of drag.",
      "Significantly increase drag for a small decrease in lifting ability.",
      "Will not affect lift and drag."
    ],
    correct: 0
  },
  {
    question: "109. During engine run-up test on ground the pilot can check the proper functioning of carburetor heating by moving the carburetor heat lever to HOT and noting :",
    answers: [
      "A slight drop in RPM.",
      "A slight rise in RPM.",
      "Increased flow of hot air into the cockpit.",
      "This check could not be performed on ground."
    ],
    correct: 0
  },
  {
    question: "110. When transiting an airplane with a constant-speed propeller from a cruise to a climb, the pilot should :",
    answers: [
      "Increase the PRM with the propeller control before advancing the throttle.",
      "Increase the manifold pressure with the throttle first, and then increase the RPM with the propeller control.",
      "Increase the RPM with the throttle first, and then increase the manifold pressure with the propeller control.",
      "Decrease the manifold pressure with the propeller control first, and then increase the RPM with the throttle."
    ],
    correct: 0
  },
  {
    question: "111. The presence of carburetor ice in an aircraft equipped with a fixed-pitch propeller can be verified by applying carburettor heat and noting:",
    answers: [
      "A decrease in RPM and then a gradual increase in RPM.",
      "An increase in RPM and then a gradual decrease in RPM.",
      "A decrease in RPM and then a constant RPM indication."
    ],
    correct: 0
  },
  {
    question: "112. How should you select propeller pitch for takeoff if your aircraft has a constant speed propeller?",
    answers: [
      "Fine pitch (High RPM) for maximum power.",
      "Fine pitch (Low RPM) for maximum efficiency.",
      "Coarse pitch (Low RPM) for minimum noise.",
      "Coarse pitch (Low RPM) for maximum thrust."
    ],
    correct: 0
  },
  {
    question: "113. Illustration A indicates that the aircraft is (see Figure PPL OP-3).",
    answers: [
      "Below the glide slope.",
      "On the glide slope.",
      "Above the glide slope."
    ],
    correct: 0
  },
  {
    question: "114. The numbers 4 and 22 on a runway indicate that the runway is oriented approximately : (see Figure PPL OP-2).",
    answers: [
      "040° and 220° (magnetic).",
      "004° and 022° (true).",
      "040° and 220° (true)."
    ],
    correct: 0
  },
  {
    question: "115. What is the difference between area A and area B on the airport depicted? : (see Figure PPL OP-1).",
    answers: [
      "\"A\" may be used for taxi and takeoff; \"E\" may be used only as an overrun.",
      "\"A\" may be used for all operations except heavy aircraft landing; \"E\" may be used for only as an overrun.",
      "\"A\" may be used only for taxiing; \"E\" may be used for all operations except landings."
    ],
    correct: 0
  },
  {
    question: "116. According to the airport diagram, which statement is true? (see Figure PPL OP-1).",
    answers: [
      "Takeoffs may be started at position A on Runway 12, and the landing portion of this runway begins at position B.",
      "Runway 30 is equipped at position E with emergency arresting gear to provide means of stopping military aircraft.",
      "The takeoff and landing portion of Runway 12 begins at position B."
    ],
    correct: 0
  },
  {
    question: "117. Area C on the airport depicted is classified as a (see Figure PPL OP-1).",
    answers: [
      "Closed runway.",
      "Stabilized area.",
      "Multiple heliport."
    ],
    correct: 0
  },
  {
    question: "118. The arrows that appear on the end of the north/south runway indicate that the area : (see Figure PPL OP-2).",
    answers: [
      "Cannot be used for landing, but may be used for taxiing and takeoff.",
      "May be used only for taxiing.",
      "Is usable for taxiing, takeoff, and landing."
    ],
    correct: 0
  },
  {
    question: "119. That portion of the runway identified by the letter A may be used for : (see Figure PPL OP-1).",
    answers: [
      "Taxiing and takeoff.",
      "Landing.",
      "Taxiing and landing."
    ],
    correct: 0
  },
  {
    question: "120. What is the most likely cause of the dangerous turbulence behind heavy aircraft?",
    answers: [
      "Wingtip vortices.",
      "Propeller blast.",
      "Jet blast."
    ],
    correct: 0
  },
  {
    question: "121. Shortly after aircraft engine start-up you notice that the pointer of a center-zero ammeter is deflected to the right with electrical consumers switched off. This indication means :",
    answers: [
      "Charging accumulator, because during an engine start-up the accumulator normally deplenishes a little.",
      "Deplenishing accumulator, because the alternator is not functioning, therefore alternator exciting should be attempted by switching the master switch on and off. If the pointer does not return to zero, the engine should be shut down and the mechanic advised.",
      "Deplenishing accumulator, therefore the engine should be shut down."
    ],
    correct: 0
  },
  {
    question: "122. Shortly after an aviation engine start-up you noticed on the left-zero ammeter a high current reading despite of all electrical consumers not connected? You should normally :",
    answers: [
      "Do nothing, because in such cases an alternator provides the electrical current for battery charging only, which normally deplenishes a little during an engine start-up.",
      "Shut down the engine immediately, because the alternator is not functioning.",
      "Reset the alternator master switch and, if the condition does not recover, shut down the engine and report to the mechanic non-operating alternator."
    ],
    correct: 0
  },
  {
    question: "123. What is indicated by blue smoke emitted from the engine exhaust during the run-up?",
    answers: [
      "The piston rings are stuck or worn.",
      "The choke is out too far.",
      "The mixture is too rich.",
      "The carburetor is set too lean."
    ],
    correct: 0
  },
  {
    question: "124. What is indicated by black smoke emitted from the engine exhaust during the run-up?",
    answers: [
      "The mixture is too rich.",
      "The choke is out too far.",
      "The piston rings are stuck or worn.",
      "The carburetor is set too lean."
    ],
    correct: 0
  },
  {
    question: "125. If, during start-up a fire occurs in the engine air intake, a generally suitable procedure is to :",
    answers: [
      "Keep turning the engine, but move the mixture control to IDLE CUT-OFF and open the throttle.",
      "Place the starter switch to OFF.",
      "Continue with the normal start."
    ],
    correct: 0
  },
  {
    question: "126. Correct procedure for leaning the mixture during cruise is pulling the mixture level back towards LEAN until RPM will :",
    answers: [
      "Reach the maximum; at this point return the mixture level slightly forward.",
      "Drop to the minimum.",
      "Reach the maximum."
    ],
    correct: 0
  },
  {
    question: "127. During the run-up at a high-elevation airport, a pilot notes a slight engine roughness that is not affected by the magneto check but grows worse during the carburetor heat check. Under these circumstances, what would be the most logical initial action?",
    answers: [
      "Check the results obtained with a leaner setting of the mixture.",
      "Taxi back to the flight line for a maintenance check.",
      "Reduce manifold pressure to control detonation.",
      "Check the mixture control lever is in FULL RICH position."
    ],
    correct: 0
  },
  {
    question: "128. To properly compensate for a crosswind during straight-and-level cruising flight, the pilot should :",
    answers: [
      "Establish a proper heading into the wind by coordinated use of controls.",
      "Hold rudder pressure toward the wind.",
      "Hold aileron pressure toward the wind and hold opposite rudder pressure to prevent turning."
    ],
    correct: 0
  },
  {
    question: "129. During cruise flight you apply full carburetor heat to your aircraft with fixed-pitch propeller. What is the expected effect in RPM under normal conditions?",
    answers: [
      "It would cause a slight decrease in RPM due to the change in fuel/air mixture.",
      "No effect.",
      "It would cause a slight increase in RPM due to hot air intake.",
      "The RPM would fluctuate due to the unstable fuel/air mixture."
    ],
    correct: 0
  },
  {
    question: "130. Wingtip vortices are created only when an aircraft is :",
    answers: [
      "Developing lift.",
      "Operating at high airspeeds.",
      "Heavily loaded."
    ],
    correct: 0
  },
  {
    question: "131. During a takeoff made behind a departing large jet airplane, the pilot can minimize the hazard of wingtip vortices by :",
    answers: [
      "Being airborne prior to reaching the jet's flight path until able to turn clear of its wake.",
      "Maintaining extra speed on takeoff and climbout.",
      "Extending the takeoff roll and not rotating until well beyond the jet's rotation point."
    ],
    correct: 0
  },
  {
    question: "132. What precautions are required when stopping a light aircraft behind a heavy aircraft that is stopped on the manoeuvring area?",
    answers: [
      "The light aircraft should be stopped clear of the jet blast danger area.",
      "The light aircraft should be facing the large aircraft.",
      "The light aircraft should face away from the large aircraft.",
      "The light aircraft should be no closer than 125 m from rear of large aircraft."
    ],
    correct: 0
  },
  {
    question: "133. Can the downdraft air currents occurring as a result of wingtip vortices from a heavier aircraft exceed the climb capability of a light aircraft?",
    answers: [
      "Yes, particularly behind large, heavy transport aircraft.",
      "Not normally.",
      "Occasionally, particularly in the vicinity of air pockets."
    ],
    correct: 0
  },
  {
    question: "134. An electrical system failure (battery and alternator) occurs during flight. In this situation, you would :",
    answers: [
      "Experience avionics equipment failure.",
      "Probably experience failure of the engine ignition system, fuel gauges, aircraft lighting system, and avionics equipment.",
      "Probably experience engine failure due to the loss of the engine-driven fuel pump and also experience failure of the radio equipment, lights, and all instruments that require alternating current."
    ],
    correct: 0
  },
  {
    question: "135. In flight you notice the orange light glowing on the instrumental panel. What does this mean?",
    answers: [
      "Alternator does not deliver any electrical current.",
      "Too high output voltage.",
      "Flat battery.",
      "Overheated alternator."
    ],
    correct: 0
  },
  {
    question: "136. In flight you notice that the pointer of a center-zero ammeter is deflected to the left. What does this indication mean and what should you as the pilot of an aircraft normally do?",
    answers: [
      "Not-normal condition; the accumulator deplenishes, because the alternator is not functioning or is not capable to cover all the demands of electrical consumers connected. If after switching off-on of the master switch the situation does not recover, an electrical consumption should be reduced to minimum and a landing should be made to the nearest suitable airfield.",
      "Normal condition; the accumulator is charging, therefore the flight will be continued, the indication of an instrument should be monitored and a drop of indication should be expected.",
      "Normal condition; the instruments indicate present consumption of the electricity, provided by the alternator."
    ],
    correct: 0
  },
  {
    question: "137. What may zero reading on the center-zero ammeter in flight indicates?",
    answers: [
      "Normal condition; the alternator provides electrical power for electrical equipment.",
      "Alternator off-line.",
      "No electrical equipment is switched on.",
      "Abnormal condition; the battery provides electrical power for electrical equipment."
    ],
    correct: 0
  },
  {
    question: "138. How could you recognize by the indication of the left-zero ammeter a non-functioning aircraft alternator? The instrument reading should be :",
    answers: [
      "Zero and stays zero even after the significant electrical consumer is switched on (e.i. The landing light).",
      "Maximum.",
      "Increase significantly after the electrical consumer is switched on."
    ],
    correct: 0
  },
  {
    question: "139. What is the meaning of the zero reading on a left-zero ammeter in flight?",
    answers: [
      "Normal condition because none of electrical consumers is switched on.",
      "The alternator is not functioning.",
      "Deplenishing accumulator."
    ],
    correct: 0
  },
  {
    question: "140. On the controlled airport you noticed a square yellow board bearing a black \"C\", exposed above one of the doors (Picture C). What does that mean? (see Figure PPL OP-4).",
    answers: [
      "Air traffic control reporting office.",
      "Customs office.",
      "Exit for private aircraft crew.",
      "Staff exit."
    ],
    correct: 0
  },
  {
    question: "141. Illustration B indicates that the aircraft is (see Figure PPL OP-3).",
    answers: [
      "On the glide slope.",
      "Below the glide slope.",
      "Above the glide slope."
    ],
    correct: 0
  },
  {
    question: "142. Illustration C indicates that the aircraft is (see Figure PPL OP-3).",
    answers: [
      "Above the glide slope.",
      "Off course to the left.",
      "Below the glide slope."
    ],
    correct: 0
  },
  {
    question: "143. In the signal area of an aerodrome, a white \"T\" (Picture F) means: (see Figure PPL OP-4).",
    answers: [
      "Landing direction is parallel with the shafts towards the cross-arm.",
      "Land on hard surfaces only.",
      "Land and taxi on hard surfaces only.",
      "Do not land."
    ],
    correct: 0
  },
  {
    question: "144. In the signal area of an aerodrome, a white dumb-bell with black stripes on each circular portion at right angles to the shaft (Picture E) means: (see Figure PPL OP-4).",
    answers: [
      "Landing, takeoff, and taxiing on runway and taxiways only, other movement on the ground is not confined to hard surfaces.",
      "Landing prohibited for prolonged period.",
      "Landing, takeoff, and taxiing confined to runway and taxiways only.",
      "Caution, gliders in the air."
    ],
    correct: 0
  },
  {
    question: "145. In the signal area of an aerodrome, a sign (Picture I), means: (see Figure PPL OP-4).",
    answers: [
      "Right-hand traffic circuit in force.",
      "After landing vacate the runway by right turn.",
      "Parking site to the right.",
      "Continue to the next airport, the runway is closed."
    ],
    correct: 0
  },
  {
    question: "146. In the signal area of an aerodrome, a double white cross (Picture H) means: (see Figure PPL OP-4).",
    answers: [
      "Caution, gliders in the air!",
      "Landing prohibited, the airport is not safe!",
      "Take special care during approach and landing!",
      "Ground taxiing permitted outside runway and taxiways!"
    ],
    correct: 0
  },
  {
    question: "147. A white cross, placed horizontally on the beginning of the taxiway (picture G), means: (see Figure PPL OP-4).",
    answers: [
      "Taxiway unserviceable!",
      "Caution, you are approaching the intersection with the runway!",
      "Helicopter landing area!",
      "Caution, you are approaching the intersection with other taxiway!"
    ],
    correct: 0
  },
  {
    question: "148. What is the meaning of the visual ground signal in a form of a horizontal red square panel with yellow diagonals displayed in an airport signal area (Picture A)? (see Figure PPL OP-4).",
    answers: [
      "Landings are prohibited.",
      "Area unfit for movement of aircraft.",
      "Aircraft are required to land, takeoff and taxi on runways and taxiways only.",
      "Special precautions must be observed in approaching to land or in landing."
    ],
    correct: 0
  },
  {
    question: "149. In the signal area of an aerodrome, a red square with a single yellow diagonal strip (Picture B) means: (see Figure PPL OP-4).",
    answers: [
      "Take special care when landing because of the poor state of the manoeuvring area.",
      "Do not land.",
      "Gliders are operating.",
      "Helicopters are operating."
    ],
    correct: 0
  },
  {
    question: "150. In the signal area of an aerodrome, a white dumb-bell (Picture D) means: (see Figure PPL OP-4).",
    answers: [
      "Land and taxi on hard surfaces only.",
      "Landing direction is parallel with the shafts towards the cross-arm.",
      "Land on hard surfaces only.",
      "Do not land."
    ],
    correct: 0
  }
];

// Total questions: 150

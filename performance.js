const PERFORMANCE_QUESTIONS = [
  {
    question: "1. Under which condition will pressure altitude be equal to true altitude?",
    answers: [
      "When standard atmospheric conditions exist.",
      "When the atmospheric pressure is 1013.2 hPa.",
      "When indicated altitude is equal to the pressure altitude."
    ],
    correct: 0
  },
  {
    question: "2. The indicated air speed for the best rate of climb when climbing to cruise altitude will tend to:",
    answers: [
      "Decrease.",
      "Decrease then increase.",
      "Remain the same.",
      "Increase."
    ],
    correct: 0
  },
  {
    question: "3. If the stalling speed in the landing configuration is 55 knots. Vref would be approximately:",
    answers: [
      "71kt.",
      "65kt.",
      "75kt.",
      "69 kt."
    ],
    correct: 0
  },
  {
    question: "4. The Vref to be attained by the landing screen height of 50ft must be:",
    answers: [
      "1.3 times the stalling speed in the landing configuration.",
      "1.15 times the stalling speed in the take off configuration.",
      "1.43 times the stalling speed in the landing configuration.",
      "33% of stall speed."
    ],
    correct: 0
  },
  {
    question: "5. If the aircraft mass is increased by 15%, the landing distance required will increase approximately:",
    answers: [
      "15% or by a factor of 1.15.",
      "33% or by a factor of 1.33.",
      "10% or by a factor of 1.1.",
      "20% or by a factor of 1.2."
    ],
    correct: 0
  },
  {
    question: "6. Landings are carried out into wind because:",
    answers: [
      "It will reduce the ground speed and reduce the landing distance required.",
      "It increases the ground speed and reduces the landing distance required.",
      "It decreases the ground speed and reduces the landing distance available.",
      "It gives the pilot greater control over the aircraft at lower speeds."
    ],
    correct: 0
  },
  {
    question: "7. Maximum Landing Mass (MLM) is best defined as.",
    answers: [
      "Maximum permissible total mass on landing under normal operating conditions.",
      "Maximum permissible total mass on landing.",
      "Maximum permissible total mass on the approach to land.",
      "Maximum permissible total mass on taxiing to park."
    ],
    correct: 0
  },
  {
    question: "8. Increasing the aeroplane's gross weight will have what effect on the take-off?",
    answers: [
      "Increase the stall speed and the take-off run required.",
      "Decrease the stall speed and increase the take-off run required.",
      "Increase the stall speed and decrease the take-off run required.",
      "Decrease the stall speed and the take-off run required."
    ],
    correct: 0
  },
  {
    question: "9. The main reason for taking off into wind is to:",
    answers: [
      "Decrease the ground speed of the aircraft at lift-off.",
      "Decrease the take off distance available (TODA).",
      "Increase the ground speed of the aircraft.",
      "Increase the take-off distance."
    ],
    correct: 0
  },
  {
    question: "10. When the density of the atmosphere is relatively low, the resulting reduction in:",
    answers: [
      "Both lift and engine power will require a longer take-off distance.",
      "Thrust and drag has no apparent effect on the take-off distance required.",
      "Drag will permit the use of greater flap angles.",
      "Drag offsets the loss of engine power giving improved acceleration."
    ],
    correct: 0
  },
  {
    question: "11. If the density of the air is increased above ISA conditions, the effect will be:",
    answers: [
      "To increase the take-off performance.",
      "To increase the take-off distance.",
      "To decrease the take-off performance.",
      "To decrease just the take-off run."
    ],
    correct: 0
  },
  {
    question: "12. The easiest way to determine the pressure altitude is setting an altimeter to.",
    answers: [
      "1013.2 hPa and reading the altitude.",
      "The airport elevation and reading the altitude.",
      "The airport elevation and reading the value in the barometric window.",
      "Zero and reading the value in the barometric window."
    ],
    correct: 0
  },
  {
    question: "13. Which of the statements below, concerning take-off performance of a powered aircraft regarding the density altitude is correct? At higher density altitudes.",
    answers: [
      "Aircraft accelerate poorer, because of reduced engine and propeller efficiency.",
      "Aircraft accelerate better, because of reduced drag due to thinner air.",
      "Aircraft must fly at higher-than-normal indicated airspeed in order to produce enough lift."
    ],
    correct: 0
  },
  {
    question: "14. What is pressure altitude?",
    answers: [
      "The altitude indicated when the barometric pressure scale is set to 1013.2 hPa.",
      "The indicated altitude corrected for position and installation error.",
      "The indicated altitude corrected for nonstandard temperature and pressure."
    ],
    correct: 0
  },
  {
    question: "15. When landing, if an aircraft's true air speed is significantly less than the true ground speed then the aircraft is experiencing:",
    answers: [
      "A tailwind.",
      "A headwind.",
      "A reduced atmospheric density.",
      "A cross wind."
    ],
    correct: 0
  },
  {
    question: "16. Which of the factors below increases the density altitude of an airport?",
    answers: [
      "Increase of temperature.",
      "Increase of atmospheric pressure.",
      "Decrease of relative humidity of the air.",
      "Decrease of temperature."
    ],
    correct: 0
  },
  {
    question: "17. Under what condition is indicated altitude the same as true altitude?",
    answers: [
      "When at sea level under standard conditions.",
      "If the altimeter has no mechanical error.",
      "With the altimeter set at 1013.2 hPa."
    ],
    correct: 0
  },
  {
    question: "18. If the outside air temperature (OAT) at a given altitude is lower than standard, the density altitude is.",
    answers: [
      "Higher than pressure altitude.",
      "Lower than pressure altitude and approximately equal to true altitude.",
      "Higher than true altitude and lower than pressure altitude.",
      "Lower than true altitude."
    ],
    correct: 0
  },
  {
    question: "19. What is density altitude?",
    answers: [
      "The pressure altitude corrected for nonstandard temperature.",
      "The height above the standard datum plane.",
      "The altitude read directly from the altimeter."
    ],
    correct: 0
  },
  {
    question: "20. If the density of the atmosphere is reduced, the take-off distance will be:",
    answers: [
      "Increased.",
      "Decreased.",
      "Unaffected.",
      "Controlled by wind."
    ],
    correct: 0
  },
  {
    question: "21. That part of a runway surface which is used for normal operations during take-off, excluding any clearway or stopway, is referred to as:",
    answers: [
      "The take-off run available (TORA).",
      "The landing distance available (LDA).",
      "The take-off distance available (TODA).",
      "The emergency distance available (EMDA)."
    ],
    correct: 0
  },
  {
    question: "22. What is the effect of runway slope on the take-off?",
    answers: [
      "An uphill slope will increase the take-off distance.",
      "An uphill slope will increase the take-off performance.",
      "A downhill slope will increase the take-off distance.",
      "A downhill slope will decrease the take-off performance."
    ],
    correct: 0
  },
  {
    question: "23. What effect will a higher aircraft mass have on rotate speed and take-off safety speed?",
    answers: [
      "It will increase both speeds.",
      "It will decrease both speeds.",
      "It will increase rotate speed and decrease take off safety speed.",
      "It will decrease rotate speed and increase take off safety speed."
    ],
    correct: 0
  },
  {
    question: "24. When calculating the MZFM (maximum zero fuel mass), the following are included:",
    answers: [
      "Crew, Passengers, Baggage & Catering.",
      "Crew, Passengers & Baggage.",
      "Crew, Passengers, Baggage, Catering & Fuel.",
      "Drinkable water and lavatory chemicals."
    ],
    correct: 0
  },
  {
    question: "25. The Centre of Gravity range of most aircraft reduces as the aircraft mass increases, as a result of:",
    answers: [
      "The forward CG limit moving rearwards to reduce stability.",
      "The aft CG limit moving forward to increase stability.",
      "The aft CG limit moving rearwards to extend the static margin.",
      "The static margin moving forward to reduce manoeuvrability."
    ],
    correct: 0
  },
  {
    question: "26. To gain the greatest amount of height in the shortest time period the aircraft should be flown at:",
    answers: [
      "The best rate of climb speed (Vy).",
      "60 KT.",
      "The best angle of climb speed (Vx).",
      "At the speed for maximum endurance."
    ],
    correct: 0
  },
  {
    question: "27. Basic reason for calculating the density altitude is determining.",
    answers: [
      "The aircraft performance.",
      "The pressure altitude.",
      "The flight levels above the transition altitude.",
      "The safe altitude over mountainous terrain."
    ],
    correct: 0
  },
  {
    question: "28. What is the effect of a headwind on the glide angle and glide distance?",
    answers: [
      "Glide angle will increase and glide distance decrease.",
      "Glide angle will remain the same and glide distance will remain the same.",
      "Glide angle will increase and glide distance increase.",
      "Glide angle will decrease and glide distance decrease."
    ],
    correct: 0
  },
  {
    question: "29. Climbing at Vy will achieve:",
    answers: [
      "The greatest increase in altitude in a given period of time.",
      "The maximum angle of climb.",
      "The maximum increase in height in the shortest horizontal distance.",
      "The best obstacle clearance performance."
    ],
    correct: 0
  },
  {
    question: "30. Increasing the mass (and, therefore, weight) of the aircraft will:",
    answers: [
      "Decrease the rate and angle of climb.",
      "Increase the rate and angle of climb.",
      "Increase the rate of climb and decrease the angle of climb.",
      "Decrease the rate of climb and increase the angle of climb."
    ],
    correct: 0
  },
  {
    question: "31. The best rate of climb is achieved:",
    answers: [
      "When flying at the speed for maximum excess power available.",
      "When flying at the speed for maximum excess thrust available.",
      "When climbing into wind.",
      "When flying at vx."
    ],
    correct: 0
  },
  {
    question: "32. Compared to landing on a level runway, what would be the effect of landing on a downward sloping runway?",
    answers: [
      "The landing distance will be increased.",
      "The landing performance will improve.",
      "The landing distance will be decreased.",
      "The landing distance will be unaffected."
    ],
    correct: 0
  },
  {
    question: "33. The lift produced by the wing of an aeroplane that is climbing and maintaining a constant airspeed will be:",
    answers: [
      "Greater than weight.",
      "Less than weight.",
      "Equal to weight.",
      "Independent of weight."
    ],
    correct: 0
  },
  {
    question: "34. What is the reason for increasing the speed in a prolonged climb:",
    answers: [
      "To increase the flow of air through the engine and keep it cool.",
      "To maintain the best rate of climb speed.",
      "To reduce the noise of the aircraft in sensitive areas.",
      "To maintain the best angle of climb speed."
    ],
    correct: 0
  },
  {
    question: "35. Climbing at Vx will achieve:",
    answers: [
      "The maximum angle of climb.",
      "The best time to height.",
      "The greatest increase in altitude in a given period of time.",
      "The maximum horizontal distance for a given vertical distance."
    ],
    correct: 0
  },
  {
    question: "36. If the centre of gravity is moved aftwards. The effect is?",
    answers: [
      "An increased range and endurance.",
      "A stronger lift-weight couple which requires more tail plane down force.",
      "A reduced range and endurance.",
      "A greater tail load."
    ],
    correct: 0
  },
  {
    question: "37. What speed should be flown for maximum range: (See fig. PPL FPP-10e).",
    answers: [
      "B.",
      "A.",
      "C.",
      "D."
    ],
    correct: 0
  },
  {
    question: "38. What is the maximum range speed for a piston engine aircraft?",
    answers: [
      "Vmd.",
      "VMP.",
      "At a higher speed than Vno and at the lowest safe altitude.",
      "At a speed less than Vmd and at the lowest safe altitude."
    ],
    correct: 0
  },
  {
    question: "39. In order to maximise the glide range, the aircraft should be flown:",
    answers: [
      "At low angles of attack at Vmd.",
      "At high angles of attack at Vmd.",
      "At low angles of attack at Vmp.",
      "At a negative angle of attack at Vmd."
    ],
    correct: 0
  },
  {
    question: "40. What effect would a 2% downslope have on the landing distance required?",
    answers: [
      "Increase it by 10%.",
      "Increase it by 5%.",
      "Decrease it by 5%.",
      "Decrease it by 10%."
    ],
    correct: 0
  },
  {
    question: "41. Which of the following cases will result in a reduced performance and possibly exceed the structural limitations of the aircraft?",
    answers: [
      "An aircraft that is operated above its maximum all up weight.",
      "An aircraft that is stalled at its maximum all up weight.",
      "An aeroplane that is operated above its maximum all up landing weight.",
      "An aircraft with a higher take-off mass than a landing mass."
    ],
    correct: 0
  },
  {
    question: "42. If the approach and landing speed is higher recommended speed in the aircraft manual the effect will be that:",
    answers: [
      "The landing distance will be increased.",
      "The landing distance will be decreased.",
      "The landing performance will improve.",
      "The landing distance will be unaffected."
    ],
    correct: 0
  },
  {
    question: "43. What speed must be flown to attain the maximum cruise endurance?",
    answers: [
      "VMP.",
      "Vy.",
      "Maximum speed.",
      "Vmd."
    ],
    correct: 0
  },
  {
    question: "44. The maximum glide range will be achieved by:-.",
    answers: [
      "a relatively low angle of attack being maintained.",
      "A relatively high angle of attack being maintained.",
      "A negative angle of attack being maintained.",
      "A high descent angle."
    ],
    correct: 0
  },
  {
    question: "45. If weight is increased, the range of the aircraft will be:",
    answers: [
      "Reduced.",
      "Unchanged.",
      "Increased.",
      "Reduced if no increase in lift is achieved."
    ],
    correct: 0
  },
  {
    question: "46. A wing contaminated by a small amount of ice will produce:",
    answers: [
      "More drag, more weight and less lift.",
      "More weight and more lift.",
      "An increase in both lift and drag co-efficient.",
      "An increase in weight and decrease in drag."
    ],
    correct: 0
  },
  {
    question: "47. When gliding for maximum range, an aircraft with a greater weight will:",
    answers: [
      "Have a faster descent speed but the same descent angle.",
      "Have a reduced glide range.",
      "Have a shallower descent angle.",
      "Have a faster descent speed and a reduced descent distance."
    ],
    correct: 0
  },
  {
    question: "48. What speed must be flown to attain the maximum cruise range?",
    answers: [
      "Vmd.",
      "Vx.",
      "Maximum speed.",
      "Vmp."
    ],
    correct: 0
  },
  {
    question: "49. What would be the effect of an increase in temperature upon the air density and aircraft performance?",
    answers: [
      "Reduced density and reduced aircraft performance.",
      "Increased density and reduced aircraft performance.",
      "Increased density and increased aircraft performance.",
      "Reduced density and an increase in aircraft performance."
    ],
    correct: 0
  },
  {
    question: "50. Compared to gliding in still air, the effect of a tailwind will:",
    answers: [
      "Increase the glide range but have no effect on the glide endurance.",
      "Decrease the glide angle and decrease the rate of descent.",
      "Have no effect on the glide range or the rate of descent.",
      "Increase the glide angle and increase the glide range."
    ],
    correct: 0
  },
  {
    question: "51. Which of the speeds indicated by A, B, C or D should be flown for maximum endurance? (See fig. PPL FPP-10e).",
    answers: [
      "A.",
      "B.",
      "C.",
      "D."
    ],
    correct: 0
  },
  {
    question: "52. During straight and level flight, any increase in lift causing an imbalance in the equilibrium of forces is compensated for by:",
    answers: [
      "A downward force on the tailplane.",
      "An upward force on tailplane.",
      "An increase in power.",
      "A decrease in drag."
    ],
    correct: 0
  },
  {
    question: "53. What is the effect of an increase in mass on the staii speed and landing distance required?",
    answers: [
      "Increased stall speed and increased landing distance.",
      "Increased stall speed and decreased landing distance.",
      "Decreased stall speed and decreased landing distance.",
      "Decreased stall speed and increased landing distance."
    ],
    correct: 0
  },
  {
    question: "54. How does higher air humidity affect aircraft take-off performance? Take-off distances are.",
    answers: [
      "Longer due to thinner air.",
      "Longer due to denser air.",
      "Shorter due to denser air."
    ],
    correct: 0
  },
  {
    question: "55. A pilot wishes to fly at a speed which will give him maximum range. He knows that he is flying with a tailwind. How will the speed selected by the pilot compare with the maximum range speed for still air?",
    answers: [
      "It will be decreased by a margin slightly less than the amount of tailwind.",
      "It will be increased by a margin slightly less than the amount of tailwind.",
      "It will be the same as for still air.",
      "It will be decreased by a margin slightly more than the amount of tailwind."
    ],
    correct: 0
  },
  {
    question: "56. What should be done first, following an aircraft's engine failure in flight?",
    answers: [
      "Select the gliding attitude with best glide speed.",
      "Carburetor heat must be applied.",
      "Move the mixture lever to position FULL RICH.",
      "Select a suitable field for forced landing."
    ],
    correct: 0
  },
  {
    question: "57. The density altitude could be approximately calculated from the pressure altitude without using a navigation calculator by.",
    answers: [
      "Increasing/decreasing the pressure altitude by 120 ft for each °C deviation above/below the standard temperature.",
      "Increasing/decreasing the altitude above the sea level for the difference between the standard and actual atmospheric pressure, converted into an altitude.",
      "Increasing the pressure altitude by 4% for each 10°C deviation from the standard temperature."
    ],
    correct: 0
  },
  {
    question: "58. You plan to carry your aircraft's maximum permissible 'Traffic Load'. Your principal consideration during your flight planning will be that:",
    answers: [
      "Your fuel load may have to be limited to prevent you exceeding the Maximum All Up Weight / Mass.",
      "It is mandatory to carry a full fuel load when carrying passengers.",
      "The fuel load is accounted for in 'Traffic Load' calculations.",
      "The 'Traffic Load' may have to be reduced to allow for the full fuel load."
    ],
    correct: 0
  },
  {
    question: "59. An aircraft weighing 2000 lbs with a total CG moment of + 169400 lb in uplifts 440 lbs of fuel. If the effective arm of the fuel is 88.5 inches aft of the datum, what will be the aircraft's new mass and CG moment?",
    answers: [
      "2440 lbs +208340 lb in.",
      "1560 lbs +208340 lb in.",
      "2440 lbs +169488.5 lb in.",
      "1560 lbs +169488.5 lb in."
    ],
    correct: 0
  },
  {
    question: "60. The flight characteristics of an aircraft which has its CG at the forward limit will be:",
    answers: [
      "Insensitivity to Pitch Control and great Longitudinal Stability.",
      "Insensitivity to Pitch Control and little Longitudinal Stability.",
      "Sensitivity to Pitch Control and little Longitudinal Stability.",
      "Sensitivity to Pitch Control and great Longitudinal Stability."
    ],
    correct: 0
  },
  {
    question: "61. An aircraft loaded in a dangerous manner, so that its CG is beyond its forward limit will:",
    answers: [
      "Have both an increased longitudinal stability and stalling speed.",
      "Require less effort to flare when landing.",
      "Require less effort to rotate on take off.",
      "Have both an increased range and endurance."
    ],
    correct: 0
  },
  {
    question: "62. DOM (Dry Operating Mass) is defined as:",
    answers: [
      "The total mass of the aircraft ready for a specific type of operation including crew, crew baggage and special equipment but excluding useable fuel and traffic load.",
      "The total mass of the aircraft ready for a specific type of operation including: crew and crew baggage, catering and removable passenger service equipment and fuel.",
      "The total mass of the aircraft ready for a specific type of operation including: crew and crew baggage, catering and removable passenger service equipment and traffic load.",
      "The total mass of the aircraft ready for a specific type of operation including: crew and crew baggage, catering and removable passenger service equipment, traffic load and fuel."
    ],
    correct: 0
  },
  {
    question: "63. The Maximum Take-off Mass of an aircraft may be limited by:-.",
    answers: [
      "Structural design load limits and or runway length, altitude and temperature.",
      "The authorised performance category of the aircraft, i.e. Utility / normal / aerobatic.",
      "The airworthiness condition of the aircraft.",
      "All of the above."
    ],
    correct: 0
  },
  {
    question: "64. Certification requirements stipulate that when loading a light aircraft:",
    answers: [
      "The CG should remain within the defined limits and the Maximum Take-off Mass must not be exceeded.",
      "All seats, baggage compartments and fuel tanks are contained within the CG limits so that it is impossible to load the aircraft beyond its limits.",
      "With maximum traffic load and full fuel the aircraft will not exceed the authorised Maximum Take-off Mass.",
      "That the Maximum Take-off Mass is not exceeded, and the CG remains at least 5% inside the C of G limits."
    ],
    correct: 0
  },
  {
    question: "65. An aircraft is loaded such that its C of G is on the aft limit:- I The stalling speed decreases, which is a negative factor. II Range and endurance decrease, which are negative factors. III The stall risk increases, which is a negative factor. IV Stick forces increase, which is a negative factor.",
    answers: [
      "Only II and III are correct.",
      "All of the above are correct.",
      "Only I and IV are correct.",
      "Only II and IV are correct."
    ],
    correct: 0
  },
  {
    question: "66. Assuming the aircraft is at rest on the ground, what term best describes image 'D'? (See fig. PPL FPP-2).",
    answers: [
      "Maximum All Up Mass.",
      "Zero Fuel Mass.",
      "Traffic Load.",
      "Empty Mass."
    ],
    correct: 0
  },
  {
    question: "67. Your aircraft has an oil reservoir with a capacity of 3 imp/gal which is positioned 20 inches aft of the datum. Given that the oil weighs 9.1 lbs/gal, the reservoir will possess a moment of:",
    answers: [
      "546 lb in.",
      "60 lb in.",
      "27.3 lb in.",
      "182 lb in."
    ],
    correct: 0
  },
  {
    question: "68. The consequences of operating an aeroplane with the CG beyond the aft limit will be:- I On the ground the aircraft would be tail heavy and passenger or crew movement or fuel usage could make it tip up. II The flying controls would be too sensitive increasing the risk of a tail strike at rotation. III The tendency to stall would increase and it may be impossible to achieve \"hands off\" balanced flight. IV Recovery from a spin would be much more difficult.",
    answers: [
      "All statements are correct.",
      "Only statement I is correct.",
      "Only statements I and IV are correct.",
      "Only statements II and III are correct."
    ],
    correct: 0
  },
  {
    question: "69. The forward speed for minimum rate of descent of an aircraft, compared with its best glide speed, is.",
    answers: [
      "always lower.",
      "always higher.",
      "often higher.",
      "often lower."
    ],
    correct: 0
  },
  {
    question: "70. Assuming the aircraft is at rest on the ground, what term best describes image A'? (See fig. PPL FPP-2).",
    answers: [
      "Zero Fuel Mass.",
      "Take Off Mass.",
      "Maximum All Up Mass.",
      "Empty Mass."
    ],
    correct: 0
  },
  {
    question: "71. An aircraft without an engine will fly the longest distance from a given altitude at the angle of attack at which.",
    answers: [
      "are induced drag and parasite drag equal.",
      "is parasite drag the least.",
      "is parasite drag equal to lift coefficient."
    ],
    correct: 0
  },
  {
    question: "72. Frost on the wings of an airplane may.",
    answers: [
      "make it difficult or impossible to become airborne.",
      "cause the airplane to become airborne with a lower angle of attack and at a lower indicated airspeed.",
      "present no problem since frost will blow off when the aircraft starts moving during takeoff.",
      "change the camber (curvature of the wing) thereby increasing lift during takeoff."
    ],
    correct: 0
  },
  {
    question: "73. What is the main danger arising out of even a slight amount of frost or snow on the wings and controls of an aircraft?",
    answers: [
      "Decrease lift due to irregular airflow over the wings.",
      "Increased weight due to ice will increase stall speed.",
      "Ice and snow will jam control surfaces."
    ],
    correct: 0
  },
  {
    question: "74. When flying in very rough air what is the maximum speed to be adopted in order to avoid overstressing the airframe?",
    answers: [
      "Vra or VA.",
      "VD or VNO.",
      "VNO or VFE.",
      "VD or VA."
    ],
    correct: 0
  },
  {
    question: "75. Never exceed speed (VNE) is the red radial line on the ASI and marks the speed at which:",
    answers: [
      "Flight is permitted in smooth conditions only.",
      "Prolonged flight is unsafe.",
      "Flight is prohibited.",
      "Structural damage will occur."
    ],
    correct: 0
  },
  {
    question: "76. Which of the following situations may, under certain conditions, result in structural damage occurring?",
    answers: [
      "An aircraft being flown above its maximum all up mass.",
      "An aircraft in the utility category being flown at its maximum permissible mass.",
      "An aircraft being flown above its maximum landing mass.",
      "An aircraft in the normal category being flown at its maximum permissible mass."
    ],
    correct: 0
  },
  {
    question: "77. Maximum Take Of Mass (MTOM) is defined best as:",
    answers: [
      "Maximum permissible total mass at the start of the take off run.",
      "Maximum permissible total mass prior to taxiing.",
      "Maximum permissible total mass prior to take off.",
      "Maximum permissible total mass at the point of rotation."
    ],
    correct: 0
  },
  {
    question: "78. Maximum Zero Fuel Mass (MZFM) is best defined as.",
    answers: [
      "Maximum permissible mass of the aircraft with no useable fuel.",
      "Maximum permissible mass of the aircraft with no passengers or fuel.",
      "Maximum permissible mass of the aircraft with no crew or fuel.",
      "Maximum permissible mass of the aircraft without occupants and baggage."
    ],
    correct: 0
  },
  {
    question: "5. Have a reduced rate of climb and operating ceiling. Which of the above are correct?",
    answers: [
      "1, 2, 3, & 5.",
      "1, 2, 4 & 5.",
      "2, 4 & 5.",
      "1, 2, 3 & 4."
    ],
    correct: 0
  },
  {
    question: "80. What name is given to the load at which the aircraft structure will fail?",
    answers: [
      "Ultimate Load.",
      "Safety Factor Load.",
      "Limit Load.",
      "Maximum Load."
    ],
    correct: 0
  },
  {
    question: "81. What is the colour of the caution speed range on an Air Speed Indicator, and what must the pilot be mindful of when operating in this range?",
    answers: [
      "Yellow. - This speed range should not be entered unless the air is smooth. Any manoeuvres should be made using small and gentle control inputs.",
      "Green. - Stalls, airframe deformations, and/or structural damage may occur in this range if the pilot uses abrupt and full control deflections.",
      "Yellow - Stalls, causing airframe deformations, and/or structural damage may occur in this range if the pilot uses abrupt and full control deflections.",
      "Green. - Control flutter may occur if turbulence is encountered."
    ],
    correct: 0
  },
  {
    question: "82. What V speed is it important not to exceed if sudden full-pitch, nose-up, control movements are planned, and why?",
    answers: [
      "VA, sudden control movements can cause structural damage.",
      "VD, sudden control movements can cause a departure from controlled flight.",
      "VNE, sudden control movements can cause structural damage.",
      "VFB, sudden control movements can cause a departure from controlled flight."
    ],
    correct: 0
  },
  {
    question: "83. Which forward speed is normally maintained, following an engine failure in flight in a light airplane?",
    answers: [
      "Best glide speed.",
      "Best endurance speed.",
      "Minimum rate of descend speed.",
      "Minimum speed."
    ],
    correct: 0
  },
  {
    question: "84. At takeoff from a short airfield with an airplane or a powered hang glider, which airspeed should you fly until cleared of obstacles?",
    answers: [
      "Best angle-of-climb speed (Vx).",
      "Best climb speed (VY).",
      "Minimum speed (VS).",
      "Maneuvering speed (VA)."
    ],
    correct: 0
  },
  {
    question: "85. Which combination of atmospheric conditions will reduce aircraft takeoff and climb performance?",
    answers: [
      "High temperature, high relative humidity and high density altitude.",
      "Low temperature, low relative humidity and low density altitude.",
      "High temperature, low relative humidity and low density altitude.",
      "Low temperature, high relative humidity and high density altitude."
    ],
    correct: 0
  },
  {
    question: "86. The aircraft's climb angle during a steady climb depends on.",
    answers: [
      "Excess of thrust.",
      "Power available.",
      "Thrust required."
    ],
    correct: 0
  },
  {
    question: "87. What influence does the wind have on an airplane's angle-of-climb?",
    answers: [
      "A headwind will steepen the angle-of-climb.",
      "No effect.",
      "A headwind will lessen the angle-of-climb.",
      "A tailwind will steepen the angle-of-climb."
    ],
    correct: 0
  },
  {
    question: "88. What is the influence of the wind on an aeroplane's rate of climb?",
    answers: [
      "No effect.",
      "A headwind will increase the rate of climb.",
      "A tailwind will decrease the rate of climb.",
      "A tailwind will increase the rate of climb."
    ],
    correct: 0
  },
  {
    question: "89. What is the proper use for the best-rate-of-climb speed (Vy)?",
    answers: [
      "When trying to get cruising altitude quickly.",
      "When clearing an obstacle.",
      "When approaching high mountains.",
      "When trying to avoid an excessive pitch attitude during a climb."
    ],
    correct: 0
  },
  {
    question: "90. After takeoff, which airspeed would the pilot use to gain the most altitude in a given period of time?",
    answers: [
      "Best climb speed (Vy).",
      "Best angle-of-climb speed (Vx).",
      "Maneuvering speed (VA)."
    ],
    correct: 0
  },
  {
    question: "91. The aircraft's rate-of-climb during a steady climb depends on.",
    answers: [
      "Excess of power.",
      "Excess of thrust.",
      "Thrust available."
    ],
    correct: 0
  },
  {
    question: "92. Which speed would provide the greatest gain in altitude in the shortest distance during climb after takeoff?",
    answers: [
      "Best angle-of-climb speed (Vx).",
      "Best climb speed (VY).",
      "Maneuvering speed (VA)."
    ],
    correct: 0
  },
  {
    question: "93. The airplane's or powered hang glider's best angle-of-climb speed (Vx) is used.",
    answers: [
      "When clearing an obstacle.",
      "When clearing a moving obstacle.",
      "When trying to climb without sacrificing cruising speed.",
      "When trying to get cruising altitude quickly."
    ],
    correct: 0
  },
  {
    question: "94. What effect does high density altitude have on aircraft performance?",
    answers: [
      "It reduces climb performance.",
      "It increases engine performance.",
      "It increases takeoff performance."
    ],
    correct: 0
  },
  {
    question: "95. What effect does an uphill runway slope have on takeoff performance?",
    answers: [
      "Increases takeoff distance.",
      "Increases takeoff speed.",
      "Decreases takeoff distance."
    ],
    correct: 0
  },
  {
    question: "96. What influence does the increased mass have on powered aircraft takeoff performance?",
    answers: [
      "At given engine power the aircraft accelerates poorer; the airspeed required for the production of the lift necessary for leaving the ground is greater.",
      "At given engine power the aircraft accelerates better, however the airspeed required for production of the lift necessary for lift-off remains unchanged.",
      "Each aircraft at given engine power accelerate equally regardless of the mass, however the airspeed required for overcoming the ground effect is greater."
    ],
    correct: 0
  },
  {
    question: "97. In which Category. Utility or Normal, would you expect to operate the aircraft represented in the attached CG /Moment Envelope if its mass is 2100 lbs and its CG Moment 90,000 lb inches? (See fig. PPL FPP-7).",
    answers: [
      "Normal.",
      "Utility.",
      "Both.",
      "Neither."
    ],
    correct: 0
  },
  {
    question: "98. What is used as the aircraft reference for the CG limit, and upon which axis is that limit found? Axis / Reference.",
    answers: [
      "Longitudinal / Datum.",
      "Normal / Spinner.",
      "Lateral / Tail.",
      "Vertical / Wheels."
    ],
    correct: 0
  },
  {
    question: "99. CG limits are set by the manufacturer and:",
    answers: [
      "Are mandatory.",
      "Have only a forward limit.",
      "Are a guide only.",
      "Have only an aft limit."
    ],
    correct: 0
  },
  {
    question: "100. What does \"Best Endurance Speed\" for a propeller aircraft mean?",
    answers: [
      "Maximum time aloft per unit of fuel (flying with least power).",
      "Maximum distance per unit of fuel (flying with least drag).",
      "Maximum distance between two stops."
    ],
    correct: 0
  },
  {
    question: "101. During landing on an airport with high elevation the true air speed (TAS) of an aircraft is higher than normal. What indicated speed (IAS) should be kept in such cases?",
    answers: [
      "Normal speed.",
      "Lower than normal.",
      "Higher than normal.",
      "Increased for 5 kts for each 1,000 ft of airport elevation."
    ],
    correct: 0
  },
  {
    question: "102. How will higher altitude affect the cruising indicated airspeed of an aircraft if a throttle remains unchanged?",
    answers: [
      "It will be lower.",
      "It will be higher.",
      "It will stay unchanged."
    ],
    correct: 0
  },
  {
    question: "103. Maneuvering speed (VA) is the highest speed at which even full abrupt deflection of the elevator will not exceed.",
    answers: [
      "Positive limit load factor.",
      "Load factor 1 g.",
      "Negative limit load factor.",
      "Never exceed speed (vne)."
    ],
    correct: 0
  },
  {
    question: "104. Which V-speed represents maneuvering speed?",
    answers: [
      "VA.",
      "VLO.",
      "VNE."
    ],
    correct: 0
  },
  {
    question: "105. Which maximum range factors decreases as weight decreases?",
    answers: [
      "Airspeed.",
      "Altitude.",
      "Angle of attack."
    ],
    correct: 0
  },
  {
    question: "106. Why should speeds in flight above VNE be avoided?",
    answers: [
      "The design limit factor may be exceeded, if gusts are encountered.",
      "Excessive induced drag will result in a structural failure.",
      "Control effectiveness is so impaired that the aircraft becomes uncontrollable."
    ],
    correct: 0
  },
  {
    question: "107. Maximum structural cruising speed is the maximum speed at which an airplane can be operated.",
    answers: [
      "In smooth air.",
      "During abrupt maneuvers.",
      "At normal operations."
    ],
    correct: 0
  },
  {
    question: "108. Should you use the normal approach speed when approaching to land in gusty wind conditions?",
    answers: [
      "No. Add one half the \"gust factor\" to the calculated approach speed.",
      "No. Use 1.2 times stall speed.",
      "Yes (go by Operator's Manual)."
    ],
    correct: 0
  },
  {
    question: "109. Traffic Load':",
    answers: [
      "Is the total mass of passengers, baggage and freight.",
      "Includes drinkable water and lavatory chemicals.",
      "Is the total mass of passengers, baggage and freight and fuel.",
      "Includes the Basic Empty Mass."
    ],
    correct: 0
  },
  {
    question: "110. Determine the maximum wind velocity for a 30° crosswind if the maximum crosswind component for the airplane is 10 kts? (See fig. PPL FPP-13e).",
    answers: [
      "20 kts.",
      "13 kts.",
      "16 kts.",
      "18 kts."
    ],
    correct: 0
  },
  {
    question: "111. Determine the maximum wind velocity for a 40° crosswind if the maximum crosswind component for the airplane is 10 kts? (See fig. PPL FPP-13e).",
    answers: [
      "15 kts.",
      "20 kts.",
      "18 kts.",
      "12 kts."
    ],
    correct: 0
  },
  {
    question: "112. Determine the maximum wind velocity for a 45° crosswind if the maximum crosswind component for the airplane is 25 kts? (See fig. PPL FPP-13e).",
    answers: [
      "35 kts.",
      "18 kts.",
      "25 kts.",
      "29 kts."
    ],
    correct: 0
  },
  {
    question: "113. What are the headwind and crosswind components with the reported wind of 280°/15 kts for a runway with the magnetic direction 220°? (See fig. PPL FPP-13e).",
    answers: [
      "7.5 kts headwind and 13 kts crosswind.",
      "15.5 kts headwind and 8 kts crosswind.",
      "15.5 kts headwind and 15 kts crosswind.",
      "13.5 kts headwind and 24 kts crosswind."
    ],
    correct: 0
  },
  {
    question: "114. Which runway (06, 14, 24, 32) will you choose for landing, if tower reports south wind 20 kts and if maximum allowed crosswind component for your aircraft is 13 kts? (See fig. PPL FPP-13e).",
    answers: [
      "RWY 14.",
      "RWY 06.",
      "RWY 24.",
      "RWY 32."
    ],
    correct: 0
  },
  {
    question: "115. What is the crosswind component for a landing on Runway 18 if the tower reports the wind as 220°/30 kts? (See fig. PPL FPP-13e).",
    answers: [
      "19 kts.",
      "23 kts.",
      "30 kts.",
      "34 kts."
    ],
    correct: 0
  },
  {
    question: "116. What are the headwind and crosswind components with the reported wind of 130°/20 kts for a runway with the magnetic direction 040°? (See fig. PPL FPP-13e).",
    answers: [
      "Zero headwind component; crosswind component 20 kts.",
      "15 kts headwind and 10 kts crosswind.",
      "10 kts headwind and 15 kts crosswind.",
      "20 kts headwind; zero crosswind component."
    ],
    correct: 0
  },
  {
    question: "117. What is the expected fuel consumption for a 250-nautical flight under the following conditions? (See fig. PPL FPP-14e) pressure altitude - 6,000 ft temperature - 20°C above standard power setting - 60% wind - calm.",
    answers: [
      "15.1 USA gal.",
      "19.7 USA gal.",
      "16.0 USA gal.",
      "12.0 USA gal."
    ],
    correct: 0
  },
  {
    question: "118. What is the expected fuel consumption for a 350-nautical flight under the following conditions? (See fig. PPL FPP-14e) pressure altitude - 4,000 ft temperature - 20°C below standard power setting - 60% wind - calm.",
    answers: [
      "22.7 USA gal.",
      "14.9 USA gal.",
      "15.3 USA gal.",
      "18.6 USA gal."
    ],
    correct: 0
  },
  {
    question: "119. What is the expected fuel consumption under the following conditions? (See fig. PPL FPP-14e) pressure altitude - 8,000 ft temperature - 20°C below standard power setting - 55%.",
    answers: [
      "6.2 USA gal/h.",
      "5.7 USA gal/h.",
      "5.8 USA gal/h.",
      "6.8 USA gal/h."
    ],
    correct: 0
  },
  {
    question: "120. Approximately what engine RPM should be set during cruising at the pressure altitude 2,000 ft and with standard temperature in order to develop 60% of power? (See fig. PPL FPP-14e).",
    answers: [
      "2300 RPM.",
      "2500 RPM.",
      "2400 RPM.",
      "2200 RPM."
    ],
    correct: 0
  },
  {
    question: "121. Determine the total distance required to land. (See fig. PPL FPP-16e) pressure altitude - 1,000 ft temperature - 30°C mass - 2300 lb wind - head 9 kt surface - tarmac.",
    answers: [
      "1197 ft.",
      "1330 ft.",
      "565 ft.",
      "509 ft."
    ],
    correct: 0
  },
  {
    question: "122. Determine the ground roll distance after landing. (See fig. PPL FPP-16e) pressure altitude - 3,000 ft temperature - 20°C mass - 2200 lb wind - calm surface - grass, dry.",
    answers: [
      "855 ft.",
      "590 ft.",
      "660 ft.",
      "685 ft."
    ],
    correct: 0
  },
  {
    question: "123. Determine the ground roll distance after landing. (See fig. PPL FPP-16e) pressure altitude - 0 ft temperature - 15°C mass - 2300 lb wind - calm surface - tarmac.",
    answers: [
      "520 ft.",
      "510 ft.",
      "530 ft.",
      "545 ft."
    ],
    correct: 0
  },
  {
    question: "124. Determine the total distance over a 50-foot obstacle required to land. (See fig. PPL FPP-16e) pressure altitude - 0 ft temperature - 0°C mass - 2300 lb wind - head 18 kt surface - grass, dry.",
    answers: [
      "1,140 ft.",
      "965 ft.",
      "1,205 ft.",
      "1,445 ft."
    ],
    correct: 0
  },
  {
    question: "125. Determine the density altitude of an airport for these conditions: QNH - 1010 hPa temperature - 27°C elevation - 5,250 ft.",
    answers: [
      "7,890 ft.",
      "4,600 ft.",
      "5,875 ft.",
      "8,800 ft."
    ],
    correct: 0
  },
  {
    question: "126. Determine the pressure altitude with an indicated altitude 1,380 ft with an altimeter setting of 1013.2 hPa at standard temperature.",
    answers: [
      "1,380 ft.",
      "1,280 ft.",
      "1,480 ft.",
      "1,580 ft."
    ],
    correct: 0
  },
  {
    question: "127. Calculate the rate of climb for an aircraft operating at 5000ft with an outside air temperature of 0°C. (See fig. PPL FPP-8e).",
    answers: [
      "530 fpm.",
      "585 fpm.",
      "475 fpm.",
      "470 fpm."
    ],
    correct: 0
  },
  {
    question: "128. What is the maximum amount of baggage that may be loaded aboard the normal category airplane for CG to remain inside proper limits? (See fig. PPL FPP-17H)",
    answers: [
      "105 lbs.",
      "120 lbs.",
      "90 lbs.",
      "75 lbs."
    ],
    correct: 0
  },
  {
    question: "129. Determine the moment with the following data: (See fig. PPL FPP-17G)",
    answers: [
      "74.9 lbxin.",
      "38.7 lbxin.",
      "69.9 lbxin.",
      "77.0 lbxin."
    ],
    correct: 0
  },
  {
    question: "130. What is the maximum amount of fuel that may be aboard the airplane on takeoff if loaded as follows? (See fig. PPL FPP-17F)",
    answers: [
      "40 USA gal.",
      "24 USA gal.",
      "34 USA gal.",
      "46 USA gal."
    ],
    correct: 0
  },
  {
    question: "131. An aircraft cruising at 2000ft is cleared to climb to 8000ft. Calculate the time taken in minutes, the fuel used in gallons and the distance flown during the climb. The temperature is standard and the wind is calm. (See fig. PPL FPP-9e) Time (mins) / Fuel (gal) / Distance (nm).",
    answers: [
      "12 / 2.3 / 17.",
      "15 / 3.0 / 21.",
      "3 / 0.7 / 4.",
      "18 / 3.7 / 5."
    ],
    correct: 0
  },
  {
    question: "132. Your aircraft has:- A Take-off Mass of = 2353 tbs A calculated CG for departure = 89.75 inches aft of the datum An estimated fuel burn = 200 lbs with a CG 85.00 inches aft of datum. The position of the CG on landing will be?",
    answers: [
      "90.19 inches aft of the datum.",
      "82.52 inches aft of the datum.",
      "105.98 inches aft of the datum.",
      "96.97 inches aft of the datum."
    ],
    correct: 0
  },
  {
    question: "133. With the reported wind of 360°/20 kts you are approaching an airport. Which runway (06,14 or 24) would you choose for landing, if your airplane had a 13-knots maximum allowed crosswind component on landing? (See fig. PPL FPP-13e).",
    answers: [
      "RWY 32.",
      "RWY 06.",
      "RWY 14.",
      "RWY 24."
    ],
    correct: 0
  },
  {
    question: "134. Determine the takeoff distance over a 50-foot obstacle under the following conditions: (See fig. PPL FPP-15e) pressure altitude - 0 ft temperature - standard mass - 1900 lb wind - calm surface - grass, dry.",
    answers: [
      "1,030 ft.",
      "920 ft.",
      "950 ft.",
      "1,180 ft."
    ],
    correct: 0
  },
  {
    question: "135. What will be the airspeed of an airplane in level flight under the following conditions? (See fig. PPL FPP-14e) pressure altitude - 8,000 ft temperature - 20°C below standard power setting - 55%.",
    answers: [
      "104 kts.",
      "110 kts.",
      "115 kts.",
      "120 kts."
    ],
    correct: 0
  },
  {
    question: "136. What is the headwind component for a landing on Runway 18 if the tower reports the wind as 220°/30 kts? (See fig. PPL FPP-13e).",
    answers: [
      "23 kts.",
      "19 kts.",
      "30 kts.",
      "34 kts."
    ],
    correct: 0
  },
  {
    question: "137. What are the headwind and crosswind components with the reported wind of 030°/10 kts for a runway with the magnetic direction 330°? (See fig. PPL FPP-13e).",
    answers: [
      "5 kts headwind and 8 kts crosswind.",
      "10 kts headwind and 8 kts crosswind.",
      "8 kts headwind and 4 kts crosswind.",
      "8 kts headwind and 8 kts crosswind."
    ],
    correct: 0
  },
  {
    question: "138. Determine the density altitude of an airport for these conditions: QNH - 1025 hPa temperature - -4°C elevation - 3,850 ft.",
    answers: [
      "2,050 ft.",
      "2,900 ft.",
      "3,500 ft.",
      "3,800 ft."
    ],
    correct: 0
  },
  {
    question: "139. Determine the ground roll distance after landing. (See fig. PPL FPP-16e) pressure altitude - 0 ft temperature - 10°C mass - 2300 lb wind - head 10 kt surface - grass, dry.",
    answers: [
      "739 ft.",
      "510 ft.",
      "1235 ft.",
      "1790 ft."
    ],
    correct: 0
  },
  {
    question: "140. Determine the total distance over a 50-foot obstacle required to land. (See fig. PPL FPP-16e) pressure altitude - 1,500 ft temperature - 30°C mass - 2300 lb wind - calm surface - tarmac.",
    answers: [
      "1,350 ft.",
      "1,385 ft.",
      "1,320 ft.",
      "1,280 ft."
    ],
    correct: 0
  },
  {
    question: "141. Determine the total distance over a 50-foot obstacle required to land. (See fig. PPL FPP-16e) pressure altitude - 1,000 ft temperature - 10°C mass - 2300 lb wind - tail 10 kt surface -tarmac.",
    answers: [
      "1,900 ft.",
      "1,265 ft.",
      "1,360 ft.",
      "1,850 ft."
    ],
    correct: 0
  },
  {
    question: "142. Determine the ground roll distance required for takeoff! (See fig. PPL FPP-15e) pressure altitude - 2,000 ft temperature - 40°C mass - 2100 lb wind - tail 4 kt surface - tarmac.",
    answers: [
      "1,120 ft.",
      "565 ft.",
      "850 ft.",
      "935 ft."
    ],
    correct: 0
  },
  {
    question: "143. Determine the takeoff distance over a 50-foot obstacle under the following conditions: (See fig. PPL FPP-15e) pressure altitude - 2,000 ft temperature - 30°C mass - 2100 lb wind - head 18 kt surface - grass, dry.",
    answers: [
      "1,350 ft.",
      "1,555 ft.",
      "1,565 ft.",
      "2,945 ft."
    ],
    correct: 0
  },
  {
    question: "144. Determine approximately density altitude of an airport, where the temperature is standard and an altimeter set to 1011hPa, reads 1,300",
    answers: [
      "1,360 ft.",
      "1,240 ft.",
      "1,300 ft.",
      "1,400 ft."
    ],
    correct: 0
  },
  {
    question: "145. What is increase in density altitude if a temperature increases from 0 to 10°C and if the pressure altitude of an airport remains 3,000 ft?",
    answers: [
      "1,200 ft.",
      "3,000 ft.",
      "2,200 ft.",
      "2,000 ft."
    ],
    correct: 0
  },
  {
    question: "146. What is the effect of a temperature increase of 12°C on the density altitude?",
    answers: [
      "1,440-foot increase.",
      "1,650-foot decrease.",
      "1,340-foot decrease.",
      "1,650-foot increase."
    ],
    correct: 0
  },
  {
    question: "147. What is the approximate pressure altitude if an altimeter is set to 1010 hPa and indicates 1,380 ft?",
    answers: [
      "1,470 ft.",
      "1,200 ft.",
      "1,300 ft.",
      "1,400 ft."
    ],
    correct: 0
  },
  {
    question: "148. Determine the takeoff distance over a 50-foot obstacle under the following conditions: (See fig. PPL FPP-15e) pressure altitude - 4,000 ft temperature - 15°C mass - 2300 lb wind - calm surface - asphalt.",
    answers: [
      "2,100 ft.",
      "1,125 ft.",
      "1,210 ft.",
      "1,970 ft."
    ],
    correct: 0
  }
];

// Total questions: 148

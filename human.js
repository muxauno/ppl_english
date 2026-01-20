const HUMAN_QUESTIONS = [
  {
    question: "1. On what does the causes of noise induced hearing loss depend?",
    answers: [
      "Both the intensity and duration of the noise above 90 dbs.",
      "Both the intensity and duration of the noise above 100 dbs.",
      "The duration of the noise above 100 dbs.",
      "The duration of the noise above 110 dbs."
    ],
    correct: 0
  },
  {
    question: "2. You are suffering from a cold with slightly blocked nose and sinuses and you have an aircraft booked to fly. Should you:",
    answers: [
      "Not fly?",
      "Take a decongestant 1/2 an hour before flight?",
      "Fly as normal?",
      "Fly, but be sure to select only low rates of climb and descent?"
    ],
    correct: 0
  },
  {
    question: "3. The Vestibular Apparatus detects_____________.acceleration:",
    answers: [
      "Angular and linear.",
      "Linear.",
      "Angular.",
      "Positive \"g\"."
    ],
    correct: 0
  },
  {
    question: "4. Which of the following should a pilot primarily rely on if he becomes disorientated in Instrument Meteorological Conditions?",
    answers: [
      "The aircraft's instruments.",
      "His sense of sight.",
      "Turning the head to recover from disorientation.",
      "His sense of balance."
    ],
    correct: 0
  },
  {
    question: "5. Loudness is measured in:",
    answers: [
      "Decibels.",
      "Hertz.",
      "Pascal's.",
      "Cycles per second."
    ],
    correct: 0
  },
  {
    question: "6. During straight and level flight any pronounced linear acceleration may produce sensation of the nose pitching up. In such a situation, the pilot should:",
    answers: [
      "Ignore vestibular information and believe what the instruments are indicating.",
      "Correct the pitching movement by moving the control column slightly forward.",
      "Rely on information from the vestibular apparatus to maintain orientation.",
      "Rely on his \"seat of the pants\" feeling to make any necessary correction."
    ],
    correct: 0
  },
  {
    question: "7. One of the main contributory factors to the onset of motion sickness is:",
    answers: [
      "The mismatch between visual and vestibular sensory inputs.",
      "Rolling quickly into turns.",
      "Performing high g maneuvers.",
      "Stalling."
    ],
    correct: 0
  },
  {
    question: "8. When making a decision, will a pilot be influenced by previous experience?",
    answers: [
      "Yes, past experience can play a part in decision-making.",
      "Yes, but only if the experience is good.",
      "Yes, but only if the experience was bad.",
      "No, each decision is unrelated."
    ],
    correct: 0
  },
  {
    question: "9. The frequency band that a healthy young person can hear is :",
    answers: [
      "20 - 20,000 cycles per second.",
      "70 - 15.000 cycles per second.",
      "80- 20.000 cycles per second.",
      "500 - 15.000 cycles per second."
    ],
    correct: 0
  },
  {
    question: "10. The best preventative actions to take if someone is showing symptoms of Stroboscopic Effect is to:",
    answers: [
      "Place the person in the shade and get them to close their eyes.",
      "Sit the person in a sunny area.",
      "Give him a task to distract him.",
      "Take no action, as the symptoms last for a short time only."
    ],
    correct: 0
  },
  {
    question: "11. Which of the following should a pilot primarily rely on if he becomes disorientated in Visual Meteorological Conditions?",
    answers: [
      "His sense of sight.",
      "Turning the head to recover from disorientation.",
      "His sense of balance.",
      "The aircraft's instruments."
    ],
    correct: 0
  },
  {
    question: "12. What is the most important sense for spatial orientation?",
    answers: [
      "Sight.",
      "Hearing and balance.",
      "\"Seat of the pants\".",
      "All senses play their part in situation awareness."
    ],
    correct: 0
  },
  {
    question: "13. When can a pilot experience the \"leans\"?",
    answers: [
      "In all flight conditions.",
      "In the climb.",
      "In the descent.",
      "In the climb or the descent."
    ],
    correct: 0
  },
  {
    question: "14. What is noise induced hearing loss?",
    answers: [
      "Loss of hearing due to damage to the cochlea.",
      "Loss of hearing due to damage to the ossicles.",
      "Loss of hearing due to damage to the vestibular apparatus.",
      "Loss of hearing due to damage to the middle ear."
    ],
    correct: 0
  },
  {
    question: "15. When flying solo, a pilot who suspects he is suffering from spatial disorientation should:",
    answers: [
      "Believe the indications of his instruments.",
      "Blink rapidly several times.",
      "Swallow hard, pinch the nostrils and blow down the nose to clear the Eustachian tube.",
      "Believe his somatosensory senses."
    ],
    correct: 0
  },
  {
    question: "16. The power of accommodation in an eye:",
    answers: [
      "Is decreased as the elasticity of the lens decreases.",
      "Is increased as the elasticity of the lens decreases.",
      "Is not affected by the degree of elasticity of the lens.",
      "Has nothing to do with the lens."
    ],
    correct: 0
  },
  {
    question: "17. Dark adaptation takes about ____________ for the Rods, and ______________for the Cones.",
    answers: [
      "30 minutes / 7 minutes.",
      "15 minutes / 20 minutes.",
      "7 minutes / 30 minutes.",
      "25 minutes / 45 minutes."
    ],
    correct: 0
  },
  {
    question: "18. What is the purpose of the Eustachian tube?",
    answers: [
      "To allow ambient pressure to equalise on both sides of the ear drum.",
      "To pass sound waves across the middle ear to the auditory nerve.",
      "To allow ambient pressure to equalise on the middle ear side of the ear drum.",
      "To allow ambient pressure to equalise on both sides of the vestibular apparatus."
    ],
    correct: 0
  },
  {
    question: "19. When compared to visual stimuli, auditory stimuli (noises) are:",
    answers: [
      "More likely to attract attention and more likely to be responded to in error.",
      "Less likely to attract attention and less likely to be responded to in error.",
      "Less likely to attract attention and more likely to be responded to in error.",
      "More likely to attract attention and less likely to be responded to in error."
    ],
    correct: 0
  },
  {
    question: "20. In the International Standard Atmosphere (ISA), as altitude increases in the troposphere, air density:",
    answers: [
      "Decreases.",
      "Also increases.",
      "Stays the same.",
      "Will not be affected as air density is independent of altitude."
    ],
    correct: 0
  },
  {
    question: "21. As captain of an aircraft you will need to show good leadership skills. Which of the following is not one such skill?",
    answers: [
      "Aggressive assertiveness.",
      "Forward planning.",
      "Maintaining good situational awareness.",
      "The art of delegation."
    ],
    correct: 0
  },
  {
    question: "22. Which of the following will give the illusion that the aircraft is too low during an approach?",
    answers: [
      "A down-sloping runway.",
      "An up-sloping runway.",
      "A brightly lit aerodrome in an otherwise dark area.",
      "A narrower than normal runway."
    ],
    correct: 0
  },
  {
    question: "23. From the options below, choose the correct sequence of the various stages of the reasoning process.",
    answers: [
      "Detection, Perception, Decisions taken, Action, Feedback.",
      "Perception, Action, Feedback, Detection, Decisions taken.",
      "Detection, Feedback, Decisions taken, Action, Perception.",
      "Detection, Perception, Decisions taken, Feedback, Action."
    ],
    correct: 0
  },
  {
    question: "24. If a pilot is used to flying in relatively polluted hazy air and then flies in a very clear sky:",
    answers: [
      "Distant objects may appear closer than they are.",
      "Distant objects may appear further away than they are.",
      "Near objects may be mistaken for those further away.",
      "Near objects may appear further away than they are."
    ],
    correct: 0
  },
  {
    question: "25. It is generally accepted that the short-term memory can hold how many items long ?",
    answers: [
      "7 items for 10-20 seconds.",
      "4 items for 15 seconds.",
      "15 items for 1-5 minutes.",
      "7 items for 5-10 minutes."
    ],
    correct: 0
  },
  {
    question: "26. Repeating information several times transfer it to long-term memory is called:",
    answers: [
      "Rehearsing.",
      "Memory induction.",
      "Prompting.",
      "Chunking."
    ],
    correct: 0
  },
  {
    question: "27. Complete the following sentence. If your Eustachian tube is blocked and you cannot clear your ears, you should:",
    answers: [
      "Ground yourself until the condition causing the blocking of the Eustachian tube has cleared up.",
      "Clear your nose with a nasal inhaler before flying.",
      "Fly only as a passenger.",
      "Proceed with your flight but ensure that you swallow hard frequently."
    ],
    correct: 0
  },
  {
    question: "28. If a pilot is approaching a runway much larger than that at his home airfield, what is his visual perception of the runway likely to be?",
    answers: [
      "The runway will appear closer than it actually is.",
      "The runway will appear further away than it actually is.",
      "Distances will be easy to judge.",
      "A different approach path should be adopted."
    ],
    correct: 0
  },
  {
    question: "29. While flying, the changes in outside air pressure can cause air trapped in the body cavities to expand and contract. This is known as Otic Barotrauma and it most likely to effect:",
    answers: [
      "All of the above.",
      "The middle ear.",
      "The sinuses.",
      "The teeth."
    ],
    correct: 0
  },
  {
    question: "30. Which of the following may cause fainting?",
    answers: [
      "A sudden shock.",
      "A too rapid eye scan.",
      "Over meticulous flight planning.",
      "All of the above."
    ],
    correct: 0
  },
  {
    question: "31. A pilot should not fly for at least how long after a general anesthetic?",
    answers: [
      "48 hours.",
      "2 hours.",
      "12 hours.",
      "24 hours."
    ],
    correct: 0
  },
  {
    question: "32. If an aircraft accelerates, what do the otoliths indicate to the brain?",
    answers: [
      "That the aircraft is pitching up.",
      "That the aircraft is pitching down.",
      "That the aircraft is turning.",
      "That the aircraft is climbing and turning."
    ],
    correct: 0
  },
  {
    question: "33. A pilot should not fly for at least how long after a local anesthetic?",
    answers: [
      "12 hours.",
      "2 hours.",
      "24 hours.",
      "48 hours."
    ],
    correct: 0
  },
  {
    question: "34. The ability of a pilot to withstand even moderate forces can be affected by:",
    answers: [
      "Fatigue in the pilot.",
      "The maximum load limits of the aircraft.",
      "Presbycusis.",
      "All of the above."
    ],
    correct: 0
  },
  {
    question: "35. If taking a course of drugs, is it advisable to pilot an aircraft?",
    answers: [
      "No, unless cleared by an Aviation Medicine Specialist.",
      "Yes, provided that they are antibiotics, as these do not have side-effects.",
      "Yes, provided that the drug is non-prescription.",
      "No, you should never fly while taking any drugs."
    ],
    correct: 0
  },
  {
    question: "36. To lessen the danger of collision with an aircraft which might be in a pilot's blind spot and closing on a constant relative bearing, the pilot should:",
    answers: [
      "Carry out a systematic look out at all times.",
      "Change heading by a few degrees every 10 minutes or so.",
      "Roll the aircraft from right to left by a few degrees every 10 minutes or so.",
      "Carry out periodic clearing turns."
    ],
    correct: 0
  },
  {
    question: "37. A false perception characterised by a distortion of real sensory stimuli is known as:",
    answers: [
      "Hallucination.",
      "Day-dreaming.",
      "Mirage.",
      "Boredom response."
    ],
    correct: 0
  },
  {
    question: "38. Which gas, which is absorbed by the body during normal breathing, plays an important role in decompression sickness?",
    answers: [
      "Nitrogen.",
      "Oxygen.",
      "Carbon Dioxide.",
      "Carbon Monoxide."
    ],
    correct: 0
  },
  {
    question: "39. Accommodation is the power of the lens to focus rays of light from near objects onto the Fovea. Accommodation is controlled by:",
    answers: [
      "The Ciliary muscles.",
      "The Iris.",
      "The Rods and Cones.",
      "The Retina."
    ],
    correct: 0
  },
  {
    question: "40. Which of the following gases regulate the rate and depth of breathing, depending on the levels at which the gas is present in the blood?",
    answers: [
      "Carbon Dioxide.",
      "Oxygen.",
      "Nitrogen.",
      "Carbon Monoxide."
    ],
    correct: 0
  },
  {
    question: "41. Brain cells that have been deprived of oxygen will start to die in:",
    answers: [
      "2 minutes.",
      "2 seconds.",
      "1/2 hour.",
      "2 hours."
    ],
    correct: 0
  },
  {
    question: "42. The maximum recommended levels of alcohol consumption per week are_____for men and_____for women.",
    answers: [
      "21 units / 14 units.",
      "14 units / 21 units.",
      "3 units / 7 units.",
      "7 units / 3 units."
    ],
    correct: 0
  },
  {
    question: "43. Which part of the nervous system usually controls breathing?",
    answers: [
      "The Autonomic Nervous System.",
      "The Central Nervous System.",
      "The Peripheral Nervous System.",
      "AII of the above."
    ],
    correct: 0
  },
  {
    question: "44. The blood carries________around the body and removes_______ from the body with the exchange occurring in the____________.",
    answers: [
      "Oxygen / Carbon Dioxide / Capillaries.",
      "Carbon / Dioxide / Oxygen Veins.",
      "Oxygen / Carbon Dioxide / Arteries.",
      "Carbon Dioxide / Oxygen / Capillaries."
    ],
    correct: 0
  },
  {
    question: "45. Which body system is responsible for distributing oxygen around the body?",
    answers: [
      "The Circulatory System.",
      "The Nervous System.",
      "The Respiratory System.",
      "The Oxidation System."
    ],
    correct: 0
  },
  {
    question: "46. Approximately how long does it take a person to dissipate one unit of alcohol from the blood?",
    answers: [
      "1 hour.",
      "1/2 hour.",
      "2 hours.",
      "12 hours."
    ],
    correct: 0
  },
  {
    question: "47. After donating blood, what is the minimum time a pilot should wait before flying?",
    answers: [
      "24 hours.",
      "2 hours.",
      "12 hours.",
      "48 hours."
    ],
    correct: 0
  },
  {
    question: "48. Hemoglobin in red blood cells is more readily attracted to_________than__________.",
    answers: [
      "Carbon Monoxide / Oxygen.",
      "Nitrogen / Oxygen.",
      "Oxygen / Nitrogen.",
      "Carbon Dioxide / Nitrogen."
    ],
    correct: 0
  },
  {
    question: "49. In the International Standard Atmosphere (ISA), as altitude increases in the Stratosphere, temperature:",
    answers: [
      "Remains almost constant at -56 degrees Celsius.",
      "Also increases.",
      "Decreases.",
      "Fluctuates between positive and negative temperatures."
    ],
    correct: 0
  },
  {
    question: "50. At altitude, the volumetric proportion of oxygen in the atmosphere is:",
    answers: [
      "The same as at mean sea level (MSL).",
      "Higher than at MSL.",
      "Lower than at MSL.",
      "Dependent on the actual altitude."
    ],
    correct: 0
  },
  {
    question: "51. In the international standard atmosphere (ISA), as altitude increases in the troposphere, pressure:",
    answers: [
      "Decreases.",
      "Also increases.",
      "Stays the same.",
      "Will not be affected as pressure is independent of altitude."
    ],
    correct: 0
  },
  {
    question: "52. If the atmospheric pressure decreases, the partial pressure of the oxygen in the atmosphere will:",
    answers: [
      "Decrease.",
      "Increase.",
      "Stay the same.",
      "Not be affected as it is independent of atmospheric pressure."
    ],
    correct: 0
  },
  {
    question: "53. In the International Standard Atmosphere (ISA), as altitude increases in the Troposphere, temperature:",
    answers: [
      "Decreases.",
      "Also increases.",
      "Stays the same.",
      "Will not be affected as it is independent of altitude."
    ],
    correct: 0
  },
  {
    question: "54. Air in the atmosphere is made up of:",
    answers: [
      "Nitrogen (78 %), Oxygen (21%), Carbon Dioxide (0.03%) and Argon (1%).",
      "Nitrogen (78%), Oxygen (21%), Carbon Dioxide (0.03%) and Hydrogen (1%).",
      "Nitrogen (1%), Oxygen (78%), Carbon Dioxide (21%) and Argon (0.03%).",
      "Nitrogen (21%), Oxygen (0.03%), Carbon Dioxide (78%) and Argon (1%)."
    ],
    correct: 0
  },
  {
    question: "55. The International Standard Atmosphere (ISA) sea-level pressure is equal to:",
    answers: [
      "1013.25 mb.",
      "1014.00 mb.",
      "1014.25 Hpa.",
      "50 inches of mercury."
    ],
    correct: 0
  },
  {
    question: "56. Blood pressure may be too high due to:",
    answers: [
      "All of the above.",
      "Age.",
      "Stress.",
      "Smoking."
    ],
    correct: 0
  },
  {
    question: "57. A likely symptom, or likely symptoms, of Hypoxia might be:",
    answers: [
      "All of the above.",
      "Unconsciousness.",
      "Impaired judgment.",
      "Tingling fingers and toes."
    ],
    correct: 0
  },
  {
    question: "58. Mental Overload usually:",
    answers: [
      "Leads to degraded performance.",
      "Leads to better performance.",
      "Has no effect on performance.",
      "Causes changes in the speed and accuracy of performance which vary from individual to individual."
    ],
    correct: 0
  },
  {
    question: "59. At night it is easier to focus on an object if you:",
    answers: [
      "Look slightly to one side of it.",
      "Look directly at it.",
      "Look about 50 degrees either side of it.",
      "Look directly at it while holding your eyes open as wide as you can."
    ],
    correct: 0
  },
  {
    question: "60. Empty Field Myopia is a condition where the eyes naturally focus at a distance of approximately:",
    answers: [
      "1 - 2 meters.",
      "Infinity.",
      "20 - 500 meters.",
      "At the horizon."
    ],
    correct: 0
  },
  {
    question: "61. What is the component of the eye responsible for peripheral vision and sensitive to low light levels?",
    answers: [
      "The Rods.",
      "The Cones.",
      "The Fovea.",
      "The Retina."
    ],
    correct: 0
  },
  {
    question: "62. Which of the following organs of the body supplies the single most dependable source of sensory information?",
    answers: [
      "The Eye.",
      "The Ear.",
      "The Nose.",
      "The Neo-cortex."
    ],
    correct: 0
  },
  {
    question: "63. Hypermetropia is caused by a____________eyeball and treated by a_________ whereas Myopia is caused by a_____________eyeball and treated with.",
    answers: [
      "Shortened / convex / lengthened / concave.",
      "Lengthened / convex / shortened / concave.",
      "Shortened / concave / lengthened / convex.",
      "Lengthened / concave / shortened / convex."
    ],
    correct: 0
  },
  {
    question: "64. Hypermetropia and Myopia are normally caused by:",
    answers: [
      "A misshapened eye ball.",
      "Eye strain.",
      "Stress.",
      "Badly fitting spectacles."
    ],
    correct: 0
  },
  {
    question: "65. When a person is experiencing stress or fear, adrenaline is released into the blood stream causing immediate:",
    answers: [
      "Increase in the pulse-rate.",
      "Fatigue.",
      "Loss of consciousness.",
      "Decrease in the pulse-rate."
    ],
    correct: 0
  },
  {
    question: "66. For the pilot of an aircraft on a head-on collision course with a fast-moving jet, the image of the approaching jet will appear to grow in size in the following manner:",
    answers: [
      "Only slowly at first until just before impact when the image would grow in size very rapidly.",
      "At a constant rate.",
      "Very rapidly at first but then continue to grow at a constant rate.",
      "Rapidly initially, and then remain at a constant size until impact."
    ],
    correct: 0
  },
  {
    question: "67. Where is the blind spot?",
    answers: [
      "Where the optic nerve enters the Retina.",
      "On the Iris.",
      "On the Fovea.",
      "On the edge of the Lens."
    ],
    correct: 0
  },
  {
    question: "68. You are taking a friend flying and are cruising at 6,000 ft. Your passenger begins suffering from a tingling sensation, dizziness and visual disorders and then becomes unconscious. Your passenger is probably suffering from:",
    answers: [
      "Hyperventilation.",
      "Hypoxia.",
      "Food poisoning.",
      "Angina."
    ],
    correct: 0
  },
  {
    question: "69. The effects of Hypoxia can be increased by:",
    answers: [
      "All of the above.",
      "Increased altitude.",
      "Increased temperature.",
      "Alcohol."
    ],
    correct: 0
  },
  {
    question: "70. Compared to a non-smoker, someone who smokes is likely to experience the effects of hypoxia at:",
    answers: [
      "A lower altitude.",
      "A higher altitude.",
      "The same altitude.",
      "Any altitude."
    ],
    correct: 0
  },
  {
    question: "71. Above what altitude do pilots need to breath supplementary oxygen?",
    answers: [
      "10,000 ft.",
      "2,000 ft.",
      "8,000 ft.",
      "20,000 ft."
    ],
    correct: 0
  },
  {
    question: "72. A likely symptom, or likely symptoms, of Hypoxia might be:",
    answers: [
      "Increased heart rate.",
      "Cyanosis.",
      "Formication.",
      "All of the above."
    ],
    correct: 0
  },
  {
    question: "73. The condition whereby the body does not enough oxygen to function correctly is known as:",
    answers: [
      "Hypoxia.",
      "Hypotension.",
      "Hyperventilation.",
      "Hyperglycemia."
    ],
    correct: 0
  },
  {
    question: "74. Which organ controls all other bodily functions?",
    answers: [
      "The brain.",
      "The heart.",
      "The lungs.",
      "The spinal cord."
    ],
    correct: 0
  },
  {
    question: "75. Color-blindness or, more accurately, color-defective vision, is caused by:",
    answers: [
      "A defect in the structure of the color-sensitive cones in the retina.",
      "A defect in the lens tissue of the eye.",
      "Defective functioning of the ciliary muscles.",
      "A foreshortened eyeball."
    ],
    correct: 0
  },
  {
    question: "76. A rapid acceleration can create the illusion of being in a.",
    answers: [
      "Nose up attitude.",
      "Left turn.",
      "Nose down attitude."
    ],
    correct: 0
  },
  {
    question: "77. Hazardous attitudes occur to every pilot to some degree at some time. What are some of these hazardous attitudes?",
    answers: [
      "Antiauthority, impulsivity, macho, resignation, and invulnerability.",
      "Poor risk management and lack of stress management.",
      "Poor situational awareness, snap judgments, and lack of a decision making process."
    ],
    correct: 0
  },
  {
    question: "78. Risk management, as a part of aeronautical decision making (AM process, relies on which features to reduce the risk associated with each flight?",
    answers: [
      "Situational awareness, problem recognition, and good judgment.",
      "Application of stress management and risk element procedures.",
      "The mental process of analyzing all information in a particular situation and making a timely.",
      "Decision on what action to take."
    ],
    correct: 0
  },
  {
    question: "79. The positive three-step process in the exchange of flight controls between pilots includes these verbal steps: (a) You have the flight controls, (b) I have the flight controls, and (c) _________.",
    answers: [
      "You have the flight controls.",
      "I have the aircraft.",
      "I have the flight controls."
    ],
    correct: 0
  },
  {
    question: "80. To avoid missing important steps, always use the.",
    answers: [
      "Appropriate checklists.",
      "Placarded airspeeds.",
      "Airworthiness certificate."
    ],
    correct: 0
  },
  {
    question: "81. Consistent adherence to approved checklists is a sign of.",
    answers: [
      "Disciplined and competent pilot.",
      "Pilot who lacks the required knowledge.",
      "Low-tome pilot."
    ],
    correct: 0
  },
  {
    question: "82. What is one of the neglected items when a pilot relies on short and long term memory for repetitive tasks?",
    answers: [
      "Checklists.",
      "Situation awareness.",
      "Flying outside the envelope."
    ],
    correct: 0
  },
  {
    question: "83. You have planned to take a couple of friends on an air experience flight. On the day, the weather conditions are marginal and there is a strong cross-wind on the runway. As a competent assessor of risk, which of the following decisions should you take?",
    answers: [
      "Reschedule the flight for another time, discounting the immediate disappointment to your friends.",
      "Get airborne as planned, as it is always wise to stick to your flight plan if you possibly can.",
      "Proceed with the flight and treat it as an opportunity to practise flying in adverse conditions.",
      "Ask your friends if they are prepared to fly in the prevailing conditions, before assessing the situation yourself."
    ],
    correct: 0
  },
  {
    question: "84. Who is responsible for determining whether a pilot is fit to fly for a particular flight, even though he or she holds a current medical certificate?",
    answers: [
      "The pilot.",
      "The medical examiner.",
      "The FA-1."
    ],
    correct: 0
  },
  {
    question: "85. What is the antidote when a pilot has a hazardous attitude, such as \"Antiauthority\"?",
    answers: [
      "Follow the rules.",
      "Rules do not apply in this situation.",
      "I know what I am doing."
    ],
    correct: 0
  },
  {
    question: "86. What effect does haze have on the ability to see traffic or terrain features during flight?",
    answers: [
      "All traffic or terrain features appear to be farther away than their actual distance.",
      "Haze causes the eyes to focus at infinity.",
      "The eyes tend to overwork in haze and do not detect relative movement easily."
    ],
    correct: 0
  },
  {
    question: "87. Which technique should a pilot use to scan for traffic to the right and left during.",
    answers: [
      "Straight-and-level flight?",
      "Systematically focus on different segments of the sky for short intervals.",
      "Continuous sweeping of the windshield from right to left.",
      "Concentrate on relative movement detected in the peripheral vision area."
    ],
    correct: 0
  },
  {
    question: "88. What is the one common factor which affects most preventable accidents?",
    answers: [
      "Human error.",
      "Mechanical malfunction.",
      "Structural failure."
    ],
    correct: 0
  },
  {
    question: "89. A person may not act as a crewmember of a civil aircraft if alcoholic beverages have been consumed by that person within the preceding.",
    answers: [
      "8 hours.",
      "12 hours.",
      "24 hours."
    ],
    correct: 0
  },
  {
    question: "90. The amount of light entering the eye is controlled by the:",
    answers: [
      "Iris.",
      "Cornea.",
      "Lens.",
      "Pupil."
    ],
    correct: 0
  },
  {
    question: "91. In order to see a sharp image of an oncoming aircraft which has been detected by the eye, a pilot should:",
    answers: [
      "Look directly at the oncoming aircraft.",
      "Look to one side of the oncoming aircraft.",
      "Commence a systematic scan of the airspace in front of him.",
      "Blink several times to make the image clearer."
    ],
    correct: 0
  },
  {
    question: "92. In which part of the eye is visual acuity at its highest?",
    answers: [
      "The Fovea.",
      "The Retina.",
      "The Pupil.",
      "The Cornea."
    ],
    correct: 0
  },
  {
    question: "93. What causes conductive deafness?",
    answers: [
      "Damage to the ossicles or the eardrum.",
      "Damage to the outer ear.",
      "Damage to the pinna.",
      "Damage to the middle ear."
    ],
    correct: 0
  },
  {
    question: "94. Presbycusis is an impairment of hearing due to:",
    answers: [
      "Age.",
      "Damage to the cochlea.",
      "Damage to the semi-circular canals.",
      "Smoking."
    ],
    correct: 0
  },
  {
    question: "95. The outer, middle and inner ear are filled with :",
    answers: [
      "Air, air, and liquid, respectively.",
      "Air, liquid, and liquid, respectively.",
      "Liquid, air, and air, respectively.",
      "Liquid, liquid, and air, respectively."
    ],
    correct: 0
  },
  {
    question: "96. Which of the following are terms generally used to describe a type or types of memory within the subject of Human Performance and Limitations?",
    answers: [
      "Long-term memory.",
      "Sensitive memory.",
      "Felicitous memory.",
      "All of them."
    ],
    correct: 0
  },
  {
    question: "97. In the aeronautical decision making (ADM) process, what is the first step in neutralizing a hazardous attitude?",
    answers: [
      "Recognizing hazardous thoughts.",
      "Making a rational judgment.",
      "Recognizing the invulnerability of the situation."
    ],
    correct: 0
  },
  {
    question: "98. An illusion, that an aircraft is at a higher altitude than it actually is, is produced by.",
    answers: [
      "Downsloping terrain.",
      "Upsloping terrain.",
      "Atmospheric haze."
    ],
    correct: 0
  },
  {
    question: "99. What is the antidote when a pilot has a hazardous attitude, such as \"Impulsivity\"?",
    answers: [
      "Not so fast, think first.",
      "It could happen to me.",
      "Do it quickly to get it over with."
    ],
    correct: 0
  },
  {
    question: "100. Which statement best defines hypoxia?",
    answers: [
      "A state of oxygen deficiency in the body.",
      "An abnormal increase in the volume of air breathed.",
      "A condition of gas bubble formation around the joints or muscles."
    ],
    correct: 0
  },
  {
    question: "101. Which statement is true regarding alcohol in the human system?",
    answers: [
      "Alcohol renders a pilot more susceptible to hypoxia.",
      "Small amounts of alcohol will not impair flying skills.",
      "Coffee helps metabolize alcohol and alleviates a hangover."
    ],
    correct: 0
  },
  {
    question: "102. \"Error\" is a generic term which describes all those occasions when a series of mental or physical activities do not achieve their intended effect. Now, complete the following statement. Errors:",
    answers: [
      "May be isolated or cumulative.",
      "Are isolated with no further consequence or influence.",
      "Are cumulative, one error leads to a second, which leads to a third etc.",
      "Are always part of the error chain."
    ],
    correct: 0
  },
  {
    question: "103. Being badly overweight increases a pilot's susceptibility to which of the following conditions?",
    answers: [
      "Heart attack.",
      "Hypoxia at higher altitudes.",
      "Hypothermia.",
      "All of the above."
    ],
    correct: 0
  },
  {
    question: "104. At altitude the pressure of oxygen in the atmosphere is:",
    answers: [
      "Lower than at MSL.",
      "The same as at mean sea level (MSL).",
      "Higher than at MSL.",
      "Unaffected, as partial pressure is independent of altitude."
    ],
    correct: 0
  },
  {
    question: "105. What is the antidote when a pilot has the hazardous attitude of \"Invulnerability\"?",
    answers: [
      "It could happen to me.",
      "It can not be that bad.",
      "It will not happen to me."
    ],
    correct: 0
  },
  {
    question: "106. If a pilot experiences spatial disorientation during flight in a restricted visibility condition, the best way to overcome the effect is to.",
    answers: [
      "Rely upon the aircraft instrument indications.",
      "Concentrate on yaw, pitch, and roll sensations.",
      "Consciously slow the breathing rate until symptoms clear and then resume normal.",
      "Breathing rate."
    ],
    correct: 0
  },
  {
    question: "107. The danger of spatial disorientation during flight in poor visual conditions may be reduced by.",
    answers: [
      "Having faith in the instruments rather than taking a chance on the sensory organs.",
      "Shifting the eyes quickly between the exterior visual field and the instrument panel.",
      "Leaning the body in the opposite direction of the motion of the aircraft.",
      ""
    ],
    correct: 0
  },
  {
    question: "108. Pilots are more subject to spatial disorientation if.",
    answers: [
      "Body signals are used to interpret flight attitude.",
      "They ignore the sensations of muscles and inner ear.",
      "Eyes are moved often in the process of cross-checking the flight instruments.",
      ""
    ],
    correct: 0
  },
  {
    question: "109. Which procedure is recommended to prevent or overcome spatial disorientation?",
    answers: [
      "Rely entirely on the indications of the flight instruments.",
      "Avoid steep turns and rough control movements.",
      "Reduce head and eye movements to the greatest extend possible.",
      ""
    ],
    correct: 0
  },
  {
    question: "110. A state of temporary confusion resulting from misleading information being sent to the brain by various sensory organs is defined as.",
    answers: [
      "Spatial disorientation.",
      "Hyperventilation.",
      "Hypoxia."
    ],
    correct: 0
  },
  {
    question: "111. The most effective technique to use for detecting other aircraft at night is to avoid staring directly at the point where another aircraft is suspected to be flying.",
    answers: [
      "Turn the head and sweep the eyes rapidly over the entire visible region.",
      "Avoid scanning the region below the horizon so as to avoid the effect on ground light on.",
      "The eyes."
    ],
    correct: 0
  },
  {
    question: "112. The three-needle type altimeter used in many light aircraft",
    answers: [
      "Easy to mis-read. B. Hardly ever mis-read. C. Accurate and reliable. D. Not very accurate or reliable.",
      "A) and C).",
      "Only A).",
      "Only A).",
      "B) and D)."
    ],
    correct: 0
  },
  {
    question: "113. An analogue display is generally better than a digital display for showing which sort of data?",
    answers: [
      "Qualitative.",
      "Quantitative.",
      "Numerical.",
      "Subjective."
    ],
    correct: 0
  },
  {
    question: "114. Prior to starting each maneuver, pilots should.",
    answers: [
      "Visually scan the entire area for collision avoidance.",
      "Check altitude, airspeed, and heading indications.",
      "Announce their intentions on the nearest ctaf."
    ],
    correct: 0
  },
  {
    question: "115. In an unpressurised aircraft, at high altitudes the amount of oxygen that diffuses across.",
    answers: [
      "The lung membranes into the blood is.",
      "Decreased because of the low partial pressure of oxygen.",
      "Decreased because of the lower temperatures.",
      "Unchanged to that at sea level."
    ],
    correct: 0
  },
  {
    question: "116. What suggestion could you make to your pilot fellow who is experiencing motion sickness?",
    answers: [
      "Avoid unnecessary head movement and to keep her/his eyes on a point outside the aircraft.",
      "Recommend taking medication to prevent motion sickness.",
      "Lower her/his head, shut her/his eyes, and take deep breaths."
    ],
    correct: 0
  },
  {
    question: "117. Motion sickness is caused by.",
    answers: [
      "Continued stimulation of the tiny portion of the inner ear which controls sense of balance.",
      "Instability in the brain cells which affect balance and will generally be overcome with experience.",
      "The movement of an aircraft causing the stomach to create an acid substance which.",
      "Causes the stomach lining to contract."
    ],
    correct: 0
  },
  {
    question: "118. As a pilot, flying for long periods in hot summer temperatures increases the susceptibility.",
    answers: [
      "Of dehydration since the.",
      "Dry air at altitude tends to increase the rate of water loss from the body.",
      "Moist air at altitude helps retain the body´s moisture.",
      "Temperature decreases with altitude."
    ],
    correct: 0
  },
  {
    question: "119. Which will always affect your ability to fly?",
    answers: [
      "Prescription analgesics and antihistamines.",
      "Over-the-counter analgesics and antihistamines.",
      "Antibiotics and anesthetics drugs."
    ],
    correct: 0
  },
  {
    question: "120. If advice is needed concerning possible flight with an illness, a pilot should contact.",
    answers: [
      "An Aviation Medical Examiner.",
      "Their family doctor.",
      "The nearest hospital."
    ],
    correct: 0
  },
  {
    question: "121. Although not required, supplemental oxygen is recommended for use when flying at.",
    answers: [
      "night above.",
      "1,500 m (5,000 ft).",
      "3,050 m (10,000 ft).",
      "3,800 m (12,500 ft)."
    ],
    correct: 0
  },
  {
    question: "122. Which of the following occur when a pilot is sitting too high in a cockpit?",
    answers: [
      "Good downward outside view. b. Poor view of instruments. c. Upwards outside view obstructed.",
      "a), b) and c).",
      "only a).",
      "a) and b) only.",
      "a) and c) only."
    ],
    correct: 0
  },
  {
    question: "123. Hypoxia is the result of.",
    answers: [
      "Shortage of oxygen in the body.",
      "Insufficient oxygen in the air.",
      "Excessive nitrogen in the bloodstream."
    ],
    correct: 0
  },
  {
    question: "124. What are Stress Factors or Stressors?",
    answers: [
      "Events and circumstances which cause stress.",
      "Pulse-rate inducers.",
      "Circumstances or events which provoke any kind of reaction to the demands placed upon the human organism.",
      "Measures of stress exhibited by a person."
    ],
    correct: 0
  },
  {
    question: "125. Which of the following are ways to help avoid stress in the cockpit?",
    answers: [
      "Not allowing yourself to be rushed into acting before you are ready.",
      "Having a cool drink at hand, at all times.",
      "Modifying your pre-flight plan whenever you feel you are off-track or behind time.",
      "All of the above."
    ],
    correct: 0
  },
  {
    question: "126. Which of the following attitudes and/or characteristics have b good communication and especially dangerous when flying?",
    answers: [
      "Arrogance and aggressiveness.",
      "A highly developed sense of leadership.",
      "Respect for other peoples' opinions.",
      "All of the above."
    ],
    correct: 0
  },
  {
    question: "127. Two pilots, both seated at the controls and qualified on type, have just commenced a flight when they experience an engine failure. Who should take control of the aircraft.",
    answers: [
      "The pilot who, during the pre-flight briefing on emergencies, the captain agreed should take over control in such a situation.",
      "The pilot in the left-hand seat.",
      "The captain.",
      "The more experienced of the two."
    ],
    correct: 0
  },
  {
    question: "128. Complete the following statement. The most appropriate time for a pilot to give passengers an initial briefing on emergency procedures is:",
    answers: [
      "During a pre-flight safety briefing.",
      "At the moment any emergency occurs; it is not necessary to worry them before that.",
      "While waiting at the hold for take-off.",
      "Just after take-off."
    ],
    correct: 0
  },
  {
    question: "129. Good briefings are very important. Which of the following could be the result of a bad briefing?",
    answers: [
      "Increased uncertainty.",
      "Good transfer of knowledge.",
      "Good understanding of information.",
      "Decreased uncertainty."
    ],
    correct: 0
  },
  {
    question: "130. Complete the following statement. If, as an inexperienced pilot, you are flying with someone of much greater experience, and you see him do something you consider to be dangerous, you should:",
    answers: [
      "Immediately question his course of action.",
      "Wait until the action or manoeuvre is completed, and then questions him.",
      "Ignore the situation because he obviously knows what he is doing.",
      "Do nothing for the moment, but check the wisdom and correctness of his action by discussing it with an instructor after you have landed."
    ],
    correct: 0
  },
  {
    question: "131. You are preparing for a training flight with an instructor and cannot find your checklist. You should:",
    answers: [
      "Take time to find the checklist at the risk of missing part of your airborne time.",
      "Perform the checks from memory.",
      "Use a checklist for a different aircraft type.",
      "Rely on the instructor to point out anything that you might have missed."
    ],
    correct: 0
  },
  {
    question: "132. Rapid or extra deep breathing while using oxygen can cause a condition known as.",
    answers: [
      "Hyperventilation.",
      "Aerosinusitis.",
      "Aerotitis."
    ],
    correct: 0
  },
  {
    question: "133. The pulse is generated by the contraction of which heart chamber?",
    answers: [
      "Left Ventricle.",
      "Left Auricle.",
      "Right Ventricle.",
      "Right Auricle."
    ],
    correct: 0
  },
  {
    question: "134. What is the most effective way to use the eyes during night flight?",
    answers: [
      "Scan slowly to permit off-center viewing.",
      "Look only at far away, dim lights.",
      "Concentrate directly on each object for a few seconds."
    ],
    correct: 0
  },
  {
    question: "135. One aid in increasing night vision effectiveness would be to.",
    answers: [
      "Force the eyes to view off center.",
      "Look directly at objects.",
      "Increase intensity of interior lighting."
    ],
    correct: 0
  },
  {
    question: "136. What preparation should a pilot make to adapt the eyes for night flying?",
    answers: [
      "Avoid bright white lights at least 30 minutes before the flight.",
      "Wear sunglasses after sunset until ready for flight.",
      "Avoid red lights at least 30 minutes before the flight."
    ],
    correct: 0
  },
  {
    question: "137. Dark adaptation is impaired by exposure to.",
    answers: [
      "Cabin pressure altitudes above 5,000 feet.",
      "Carbon dioxide.",
      "Vitamin a in the diet."
    ],
    correct: 0
  },
  {
    question: "138. If an individual has gone scuba diving which has required a controlled ascent and will be flying to cabin pressure altitudes of 8,000 feet or less, the recommended waiting time is at least.",
    answers: [
      "24 hours.",
      "4 hours.",
      "12 hours."
    ],
    correct: 0
  },
  {
    question: "139. If an individual has gone scuba diving which has not required a controlled ascent and will be flying to cabin pressure altitudes of 8,000 feet or less, the recommended waiting time is at least.",
    answers: [
      "4 hours.",
      "12 hours.",
      "24 hours."
    ],
    correct: 0
  },
  {
    question: "140. During a climb to 18,000 ft, the percentage of oxygen in the atmosphere.",
    answers: [
      "Remains the same.",
      "Increases.",
      "Decreases."
    ],
    correct: 0
  },
  {
    question: "141. Hyperventilation results from.",
    answers: [
      "A lack of carbon dioxide in the body.",
      "Flying too high without supplemental oxygen.",
      "Breathing too rapidly causing a lack of oxygen."
    ],
    correct: 0
  },
  {
    question: "142. The best method to use when looking for other traffic at night is to.",
    answers: [
      "Look to the side of the object and scan slowly.",
      "Scan the visual field very rapidly.",
      "Look to the side of the object and scan rapidly."
    ],
    correct: 0
  },
  {
    question: "143. Which would most likely result in hyperventilation?",
    answers: [
      "Emotional tension, anxiety, or fear.",
      "The excessive consumption of alcohol.",
      "An extremely slow rate of breathing and insufficient oxygen."
    ],
    correct: 0
  },
  {
    question: "144. What is one effect smoking has on a pilot?",
    answers: [
      "Increases body heat which, in turn, creates a demand for more oxygen.",
      "Decreases night vision by 50 percent.",
      "Creates additional carbon dioxide gases in the body which often leads to hyperventilation."
    ],
    correct: 0
  },
  {
    question: "145. Large accumulations of carbon monoxide in the human body result in.",
    answers: [
      "Loss of muscular power.",
      "Tightness across the forehead.",
      "An increased sense of well-being."
    ],
    correct: 0
  },
  {
    question: "146. Carbon monoxide in an aircraft cabin is.",
    answers: [
      "Difficult to recognize because of its odorless and colorless.",
      "Easily recognizable because of its peculiar odor.",
      "Easily recognizable because of its peculiar color."
    ],
    correct: 0
  },
  {
    question: "147. Susceptibility to carbon monoxide poisoning increases as.",
    answers: [
      "Altitude increases.",
      "Altitude decreases.",
      "Air pressure increases."
    ],
    correct: 0
  },
  {
    question: "148. Which occurs when climbing above 18,000 feet in an unpressurized aircraft without supplemental oxygen?",
    answers: [
      "The oxygen pressure within the lungs cannot be maintained without an increase in inhaled.",
      "Oxygen pressure.",
      "Gases trapped in the body contract and prevent nitrogen from escaping the bloodstream.",
      "The pressure in the middle ear becomes less than the atmospheric pressure in the cabin."
    ],
    correct: 0
  },
  {
    question: "149. Which statement concerning hypoxia is true?",
    answers: [
      "Tingling of the skin and a false sense of security may be symptoms of hypoxia.",
      "Hypoxia is caused by nitrogen bubbles in the joints and bloodstream.",
      "Forcing oneself to concentrate on the flight instruments will help to overcome the effects.",
      "Of hypoxia."
    ],
    correct: 0
  },
  {
    question: "150. A pilot should be able to overcome the symptoms or avoid future occurrences of.",
    answers: [
      "Hyperventilation by.",
      "Slowing the breathing rate, breathing into a bag, or talking aloud.",
      "Closely monitoring the flight instruments to control the airplane.",
      "Increasing the breathing rate in order to increase lung ventilation.__"
    ],
    correct: 0
  }
];

// Total questions: 150

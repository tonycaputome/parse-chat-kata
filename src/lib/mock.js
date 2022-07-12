const stepsMockData = {
  // Step 1 (single sentence)
  1: `14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,

  // Step 2 (two sentences)
  2: `14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.`,
  // Step 3 (two customer mentions as start)
  3: `14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      14:27:00 Customer : Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.
      14:27:47 Agent : Vestibulum tempor diam eu leo molestie eleifend.
      14:28:28 Customer : Contrary to popular belief, Lorem Ipsum is not simply random text.`,

  // Step 4 (date splitting)
  4: `14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.`,

  // Step 5 (ignore extra dates)
  5: `14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent : I received it at 12:24:48, ut blandit lectus.`,
  // Step 6 (full name)
  6: `14:24:32 Luca Galasso : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Emanuele Querzola : I received the package, ut blandit lectus.`,
  // Step 7 [Extra] (missing colon after the names)
  7: `14:24:32 Customer Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent I received it at 12:24:48, ut blandit lectus.`,
};

module.exports = {
  stepsMockData,
};

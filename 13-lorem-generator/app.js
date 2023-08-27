const loremData = [
  "Taste the happy, Michael! Taste it! Well, OK, have sex with this girl. Right now. Get in there, have some sex with her. Let's see some bananas and nuts! She's always got to wedge herself in the middle of us so that she can control everything. Yeah. Mom's awesome. Hey, it was one night of wild passion! And yet you didn't notice her body? I like to look in the mirror.",

  "Heyyyyy, hermano. I thought the two of us could talk man-on-man.",

  "Everybody dance… NOW. [climbing under trampoline] This shall keep me safe from the hot Mexican sun. Suddenly he's too much of a big-shot to brush mother's hair. Uncle Gob… was Aunt Lindsay ever pregnant? Yeah, sure, dozens of times. Could it be love? I know what an erection feels like, Michael. No, it's the opposite… like my heart is getting hard.",

  "If this were a Lifetime Moment of Truth movie, this would be our act break. But it wasn't. No, I was ashamed to be SEEN with you. I like being WITH you.",

  "It just seems like there's still light coming in from under the door. If you're suggesting I play favorites, you're wrong. I love all of my children equally. [earlier] I don't care for Gob. I see you've wasted no time in filling my seat hole. [climbing under trampoline] This shall keep me safe from the hot Mexican sun. Chaw-chee, chaw-chee chaw-chee! Coo coo ca cha! Ah coodle doodle do Caw ca caw, caw ca caw. Well excuse me, Judge Reinhold. I'm foolish and I'm funny and I'm needy. Am I needy? Are you sure I'm not needy? 'Cause I feel needy sometimes. Mr. Zuckerkorn, you've been warned about touching. Barry: You said spanking.",

  "Wow, this is the best free scrapbooking class I've ever taken! ps This one really cracks me up for some reason. I'm gonna build me an airport, put my name on it. Why, Michael? So you can fly away from your feelings? And don't make the water too hot. The scabs come right off. Fried cheese… with club sauce. The guy runs a prison, he can have any piece of ass he wants.",

  "Excuse me, do these effectively hide my thunder? Look at us, crying like a bunch of girls on the last day of camp. Michael was having brunch with Sally Sitwell at a restaurant called Skip Church's Bistro. In addition to brunch, the restaurant was known for an item on the menu called the 'Skip's Scramble', an omelet that contained everything on the menu. Do not order the Skip's Scramble. The only thing more terrifying than the escaped lunatic's hook was his twisted call… Hey campers! Well excuse me, Judge Reinhold.",

  "Say goodbye to THESE! ♪♪ It's The Final Countdown ♪♪ Yes. Lindsay and I are planning a night of heterosexual intercourse. Well excuse me for liking the way they frame my junk! I don't criticize you! And if you're worried about criticism, sometimes a diet is the best defense.",

  "Either I zip down, or he zips up, and that is a mighty long zipper on Mother's Cher jumpsuit. Sorry, some of my students are arguing the significance of the shankbone on the seder plate. But we do not - NOT wag our genitals at one another to make a point. She's a contestant. It's sorta like an inner beauty pageant. Ah, there it is. You mean the guy we're meeting with can't even grow his own hair? Come on! She's always got to wedge herself in the middle of us so that she can control everything. Yeah. Mom's awesome.",

  "There are dozens of us! Dozens! Well, they got the Asian right… 'hotties' might be a stretch. A lady of the evening. Working girl. She turns illusions for money. Well, I hope you also carry a spare bowl of candy beans.",
];

const loremForm = document.querySelector(".lorem-form");
const submitBtn = document.querySelector(".btn");
const loremText = document.querySelector(".lorem-text");

const genLorem = (e) => {
  e.preventDefault();
  loremText.innerHTML = "";
  // input number field value returned from a form event object, is a string value so needs to be converted to number type for manipulation.
  let numofParas = parseInt(e.target[0].value);

  if (numofParas === 1) {
    loremText.innerHTML = `
      <p>${loremData[0]}</p>`;
  } else if (numofParas > 1 && numofParas < loremData.length) {
    for (let i = 1; i <= numofParas; i++) {
      loremText.innerHTML += `
      <p>${loremData[i]}</p>`;
    }
    // if input value exceeds length of lorem data array, then just output all items of array instead.
  } else if (numofParas >= loremData.length) {
    for (let i = 0; i <= loremData.length - 1; i++) {
      loremText.innerHTML += `
        <p>${loremData[i]}</p>`;
    }
  }
};

loremForm.addEventListener("submit", genLorem);

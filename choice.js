// Nested Object Array of questions and possible choices
// ----------------------------------------------------------------------------

let wineChoices = [{
    question: "1. I tend to gravitate towards strong flavours...",
    choices: {
      a: 'I love strong flavours!',
      b: 'I like strong flavours sometimes',
      c: 'Strong flavours are OK',
      d: 'I dont like strong flavours'
    }
  },
  {
  question: "2. I tend to gravitate towards delicate flavours...",
  choices: {
    a: 'Delicate flavours are my favourite',
    b: 'I like delicate flavours sometimes',
    c: 'Delicate flavours are OK',
    d: 'I dont like delicate flavours'
  }
},
  {
  question: "3. I mostly drink wine with meat dishes...",
  choices: {
    a: 'I always pair wine with meat dishes',
    b: 'I often pair wine with meat dishes',
    c: 'If I must pair wine with meat dishes I will',
    d: 'I never pair wine with meat dishes'
  }
},
  {
  question: "4. I mostly drink wine with salad dishes...",
  choices: {
    a: 'I always pair wine with salad dishes',
    b: 'I often pair wine with salad dishes',
    c: 'If I must pair wine with salad dishes I will',
    d: 'I never pair wine with salad dishes'
  }
},
  {
  question: "5. I have enjoyed fruity wines in the past...",
  choices: {
    a: 'Fruity wines are my favourite',
    b: 'I am a fan of fruity wines',
    c: 'Fruity wines are not my go to',
    d: 'Not a fan of fruity wines at all'
  }
},
  {
  question: "6. I have enjoyed dry wines in the past...",
  choices: {
    a: 'Dry wines are my favourite',
    b: 'I am a fan of dry wines',
    c: 'Dry wines are not my go to',
    d: 'Not a fan of dry wines at all'
  }
},
  {
  question: "7. I have enjoyed red wines in the past...",
  choices: {
    a: 'Red wines are my favourite',
    b: 'I am a fan of red wines',
    c: 'Red wines are not my go to',
    d: 'Not a fan of red wines at all'
  }
},
  {
  question: "8. I have enjoyed white wines in the past...",
  choices: {
    a: 'White wines are my favourite',
    b: 'I am a fan of white wines',
    c: 'White wines are not my go to',
    d: 'Not a fan of white wines at all'
  }
},




];


const worldofwine = Object.entries(wineChoices);


// Elements in the HTML page
// ----------------------------------------------------------------------------

let choiceContainer = document.getElementById('choices');
let submitButton = document.getElementById('makeChoice');

// Generate the Choices on the page
// ----------------------------------------------------------------------------

let qlist = worldofwine.map(question => {

  // Generate Choices
  let a = question[1].choices;
  let as = Object.entries(a);

  var choices = as.map(function (choice) {
    return '<li> <input type="radio" value="' + choice[1] + '" name="q' + worldofwine.indexOf(question) + '" id="q' + worldofwine.indexOf(question) + choice[0] + '">   <label for="q' + worldofwine.indexOf(question) + choice[0] + '"    >' + choice[1] + '</label> </li>';
  }).join('');


  // Generate Questions
  let q = '<p>' + question[1].question; '</p>'

  return q + '<ul class="choicebox">' + choices + '</ul>';

}).join('');


choiceContainer.innerHTML = qlist;

// Choice Check
// ----------------------------------------------------------------------------
function getUserChoices() {
  var radios = document.getElementsByTagName('input');

let wineAnswer = 0;

  for (var i = 0; i < radios.length; i++) {
      if (radios[i].type === 'radio' && radios[i].checked) {

          let wineAttribute = radios[i].value;


          // question one
          if (wineAttribute === 'I love strong flavours!') {
            // console.log('A')
            wineAnswer += 1;
          }
          if (wineAttribute === 'I like strong flavours sometimes') {
            // console.log('B')
            wineAnswer += 2;
          }
          if (wineAttribute === 'Strong flavours are OK') {
            // console.log('C')
            wineAnswer += 3;
          }
          if (wineAttribute === 'I dont like strong flavours') {
            // console.log('D')
            wineAnswer += 4;
          }
          // question two
          if (wineAttribute === 'Delicate flavours are my favourite') {
            // console.log('B')
            wineAnswer += 4;
          }
          if (wineAttribute === 'I like delicate flavours sometimes') {
            // console.log('B')
            wineAnswer += 3;
          }
          if (wineAttribute === 'Delicate flavours are OK') {
            // console.log('C')
            wineAnswer += 2;
          }
          if (wineAttribute === 'I dont like delicate flavours') {
            // console.log('D')
            wineAnswer += 1;
          }
          // question three
          if (wineAttribute === 'I always pair wine with meat dishes') {
            // console.log('A')
            wineAnswer += 1;
          }
          if (wineAttribute === 'I often pair wine with meat dishes') {
            // console.log('B')
            wineAnswer += 2;
          }
          if (wineAttribute === 'If I must pair wine with meat dishes I will') {
            // console.log('C')
            wineAnswer += 3;
          }
          if (wineAttribute === 'I never pair wine with meat dishes') {
            // console.log('D')
            wineAnswer += 4;
          }
          // question four
          if (wineAttribute === 'I always pair wine with salad dishes') {
            // console.log('A')
            wineAnswer += 4;
          }
          if (wineAttribute === 'I often pair wine with salad dishes') {
            // console.log('B')
            wineAnswer += 3;
          }
          if (wineAttribute === 'If I must pair wine with salad dishes I will') {
            // console.log('C')
            wineAnswer += 2;
          }
          if (wineAttribute === 'I never pair wine with salad dishes') {
            // console.log('D')
            wineAnswer += 1;
          }
          // question five
          if (wineAttribute === 'Fruity wines are my favourite') {
            // console.log('A')
            wineAnswer += 4;
          }
          if (wineAttribute === 'I am a fan of fruity wines') {
            // console.log('B')
            wineAnswer += 1;
          }
          if (wineAttribute === 'Fruity wines are not my go to') {
            // console.log('C')
            wineAnswer += 2;
          }
          if (wineAttribute === 'Not a fan of fruity wines at all') {
            // console.log('D')
            wineAnswer += 3;
          }
          // question six
          if (wineAttribute === 'Dry wines are my favourite') {
            // console.log('A')
            wineAnswer += 3;
          }
          if (wineAttribute === 'I am a fan of dry wines') {
            // console.log('B')
            wineAnswer += 4;
          }
          if (wineAttribute === 'Dry wines are not my go to') {
            // console.log('C')
            wineAnswer += 2;
          }
          if (wineAttribute === 'Not a fan of dry wines at all') {
            // console.log('D')
            wineAnswer += 1;
          }
          // question seven
          if (wineAttribute === 'Red wines are my favourite') {
            // console.log('A')
            wineAnswer += 1;
          }
          if (wineAttribute === 'I am a fan of red wines') {
            // console.log('B')
            wineAnswer += 2;
          }
          if (wineAttribute === 'Red wines are not my go to') {
            // console.log('C')
            wineAnswer += 3;
          }
          if (wineAttribute === 'Not a fan of red wines at all') {
            // console.log('D')
            wineAnswer += 4;
          }
          // question Eight
          if (wineAttribute === 'White wines are my favourite') {
            // console.log('A')
            wineAnswer += 4;
          }
          if (wineAttribute === 'I am a fan of white wines') {
            // console.log('B')
            wineAnswer += 3;
          }
          if (wineAttribute === 'White wines are not my go to') {
            // console.log('C')
            wineAnswer += 2;
          }
          if (wineAttribute === 'Not a fan of white wines at all') {
            // console.log('D')
            wineAnswer += 1;
          }

            }

          }
    if (wineAnswer > 24) {
        document.getElementById('resultsBox').innerHTML = "You Might Like.... </br> Savignon Blanc";
          }
    else if (wineAnswer > 20) {
        document.getElementById('resultsBox').innerHTML = "You Might Like.... </br> Chardonnay";
          }
    else if (wineAnswer > 12) {
        document.getElementById('resultsBox').innerHTML = "You Might Like.... </br> Pinot Noir";
          }
    else if (wineAnswer) {
        document.getElementById('resultsBox').innerHTML = "You Might Like.... </br> Cabernet Sauvignon";
          }
      }



// Submit button
// ----------------------------------------------------------------------------

submitButton.addEventListener("click", getUserChoices);

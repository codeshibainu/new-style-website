var Count;
var Title;
var ButtonStart;
var ButtonOne;
var ButtonTwo;
var ButtonThree;
var ButtonFour;
var SentenceOne;
var SentenceTwo;
var SentenceThree;
var SentenceNow;
var SentenceRandom;
var SuccessiveNumber;
var ErrorNumber;
var Answer;
var Start;
var Correct;
var Successive;
var Error;

function setup()
{
  noCanvas();

  initialization();

  Start = 0;
  SentenceNow = 3;
  Correct = -1;
  Successive = 0;
  Error = 0;

  Title = createP(Sentence[0]);
  Title.addClass('title');

  SuccessiveNumber = createP('連斬：' + Successive);
  SuccessiveNumber.addClass('successive');

  ErrorNumber = createP('失誤：' + Error);
  ErrorNumber.addClass('error');

  ButtonStart = createButton('開始');
  ButtonStart.mousePressed(buttonStart_Clicked);
  ButtonStart.addClass('start');

  SentenceOne = createP(' ');
  SentenceOne.addClass('one');
  SentenceTwo = createP(' ');
  SentenceTwo.addClass('two');
  SentenceThree = createP(' ');
  SentenceThree.addClass('three');

  ButtonOne = createButton('1');
  ButtonOne.mousePressed(buttonOne_Clicked);
  ButtonOne.addClass('one');
  ButtonOne.hide();
  ButtonTwo = createButton('2');
  ButtonTwo.mousePressed(buttonTwo_Clicked);
  ButtonTwo.addClass('two');
  ButtonTwo.hide();
  ButtonThree = createButton('3');
  ButtonThree.mousePressed(buttonThree_Clicked);
  ButtonThree.addClass('three');
  ButtonThree.hide();
  ButtonFour = createButton('4');
  ButtonFour.mousePressed(buttonFour_Clicked);
  ButtonFour.addClass('four');
  ButtonFour.hide();
}

function draw()
{
  if(Start)
  {
    if(Correct == 1)
    {
      SentenceThree.html(Sentence[SentenceNow]);
      $("p.three").css('color', '#0096DC');
    }else if(Correct == 0)
    {
      SentenceThree.html(Sentence[SentenceNow]);
      $("p.three").css('color', '#C8141E');
    }

    $("p.successive").text('連斬：' + Successive);
    $("p.error").text('失誤：' + Error);
  }
}

function buttonStart_Clicked()
{
  ButtonStart.hide();

  SentenceOne.html(Sentence[SentenceNow-2]);
  SentenceTwo.html(Sentence[SentenceNow-1]);

  SentenceRandom = Math.floor(Math.random() * Count);
  ButtonOne.show();
  $("button.one").text(Sentence[SentenceRandom]);

  SentenceRandom = Math.floor(Math.random() * Count);
  ButtonTwo.show();
  $("button.two").text(Sentence[SentenceRandom]);

  SentenceRandom = Math.floor(Math.random() * Count);
  ButtonThree.show();
  $("button.three").text(Sentence[SentenceRandom]);

  SentenceRandom = Math.floor(Math.random() * Count);
  ButtonFour.show();
  $("button.four").text(Sentence[SentenceRandom]);

  Answer = Math.floor(Math.random() * 4) + 1;
  if(Answer == 1)
  {
    $("button.one").text(Sentence[SentenceNow]);
  }else if(Answer == 2)
  {
    $("button.two").text(Sentence[SentenceNow]);
  }else if(Answer == 3)
  {
    $("button.three").text(Sentence[SentenceNow]);
  }else if(Answer == 4)
  {
    $("button.four").text(Sentence[SentenceNow]);
  }

  SentenceNow--;
}

function buttonOne_Clicked()
{
  Start = 1;

  if(Answer == 1)
  {
    Successive++;
    Correct = 1;
  }else
  {
    Successive = 0;
    Error++;
    Correct = 0;
  }

  SentenceNow++;

  SentenceRandom = Math.floor(Math.random() * Count);
  $("button.one").text(Sentence[SentenceRandom]);
  SentenceRandom = Math.floor(Math.random() * Count);
  $("button.two").text(Sentence[SentenceRandom]);
  SentenceRandom = Math.floor(Math.random() * Count);
  $("button.three").text(Sentence[SentenceRandom]);
  SentenceRandom = Math.floor(Math.random() * Count);
  $("button.four").text(Sentence[SentenceRandom]);

  Answer = Math.floor(Math.random() * 4) + 1;
  if(Answer == 1)
  {
    $("button.one").text(Sentence[SentenceNow+1]);
  }else if(Answer == 2)
  {
    $("button.two").text(Sentence[SentenceNow+1]);
  }else if(Answer == 3)
  {
    $("button.three").text(Sentence[SentenceNow+1]);
  }else if(Answer == 4)
  {
    $("button.four").text(Sentence[SentenceNow+1]);
  }
}

function buttonTwo_Clicked()
{
  Start = 1;

  if(Answer == 2)
  {
    Successive++;
    Correct = 1;
  }else
  {
    Successive = 0;
    Error++;
    Correct = 0;
  }

  SentenceNow++;

  SentenceRandom = Math.floor(Math.random() * Count);
  $("button.one").text(Sentence[SentenceRandom]);
  SentenceRandom = Math.floor(Math.random() * Count);
  $("button.two").text(Sentence[SentenceRandom]);
  SentenceRandom = Math.floor(Math.random() * Count);
  $("button.three").text(Sentence[SentenceRandom]);
  SentenceRandom = Math.floor(Math.random() * Count);
  $("button.four").text(Sentence[SentenceRandom]);

  Answer = Math.floor(Math.random() * 4) + 1;
  if(Answer == 1)
  {
    $("button.one").text(Sentence[SentenceNow+1]);
  }else if(Answer == 2)
  {
    $("button.two").text(Sentence[SentenceNow+1]);
  }else if(Answer == 3)
  {
    $("button.three").text(Sentence[SentenceNow+1]);
  }else if(Answer == 4)
  {
    $("button.four").text(Sentence[SentenceNow+1]);
  }
}

function buttonThree_Clicked()
{
  Start = 1;

  if(Answer == 3)
  {
    Successive++;
    Correct = 1;
  }else
  {
    Successive = 0;
    Error++;
    Correct = 0;
  }

  SentenceNow++;

  SentenceRandom = Math.floor(Math.random() * Count);
  $("button.one").text(Sentence[SentenceRandom]);
  SentenceRandom = Math.floor(Math.random() * Count);
  $("button.two").text(Sentence[SentenceRandom]);
  SentenceRandom = Math.floor(Math.random() * Count);
  $("button.three").text(Sentence[SentenceRandom]);
  SentenceRandom = Math.floor(Math.random() * Count);
  $("button.four").text(Sentence[SentenceRandom]);

  Answer = Math.floor(Math.random() * 4) + 1;
  if(Answer == 1)
  {
    $("button.one").text(Sentence[SentenceNow+1]);
  }else if(Answer == 2)
  {
    $("button.two").text(Sentence[SentenceNow+1]);
  }else if(Answer == 3)
  {
    $("button.three").text(Sentence[SentenceNow+1]);
  }else if(Answer == 4)
  {
    $("button.four").text(Sentence[SentenceNow+1]);
  }
}

function buttonFour_Clicked()
{
  Start = 1;

  if(Answer == 4)
  {
    Successive++;
    Correct = 1;
  }else
  {
    Successive = 0;
    Error++;
    Correct = 0;
  }

  SentenceNow++;

  SentenceRandom = Math.floor(Math.random() * Count);
  $("button.one").text(Sentence[SentenceRandom]);
  SentenceRandom = Math.floor(Math.random() * Count);
  $("button.two").text(Sentence[SentenceRandom]);
  SentenceRandom = Math.floor(Math.random() * Count);
  $("button.three").text(Sentence[SentenceRandom]);
  SentenceRandom = Math.floor(Math.random() * Count);
  $("button.four").text(Sentence[SentenceRandom]);

  Answer = Math.floor(Math.random() * 4) + 1;
  if(Answer == 1)
  {
    $("button.one").text(Sentence[SentenceNow+1]);
  }else if(Answer == 2)
  {
    $("button.two").text(Sentence[SentenceNow+1]);
  }else if(Answer == 3)
  {
    $("button.three").text(Sentence[SentenceNow+1]);
  }else if(Answer == 4)
  {
    $("button.four").text(Sentence[SentenceNow+1]);
  }
}

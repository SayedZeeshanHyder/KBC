let x=0;
let correct=0;
let randomques=0;
let ques=1;
let sel=0;
let q2,q3,q4,q5;
function option1()
{
    x=1;
    if(sel == 0)
    {
        document.getElementById("butt1").style="background-color : yellow";
        document.getElementById("lockmsg").innerHTML="Lock kar diya jaye ?";
        document.getElementById("chbutt1").style="display : flex";
        document.getElementById("chbutt2").style="display : flex";
        sel=1;
    }
}
function option2()
{
    x=2;
    if(sel == 0)
    {
        document.getElementById("butt2").style="background-color : yellow";
        document.getElementById("lockmsg").innerHTML="Lock kar diya jaye ?";
        document.getElementById("chbutt1").style="display : flex";
        document.getElementById("chbutt2").style="display : flex";
        sel=1;
    }
}
function option3()
{
    x=3;
    if(sel == 0)
    {
        document.getElementById("butt3").style="background-color : yellow";
        document.getElementById("lockmsg").innerHTML="Lock kar diya jaye ?";
        document.getElementById("chbutt1").style="display : flex";
        document.getElementById("chbutt2").style="display : flex";
        sel=1;
    }
}
function option4()
{
    x=4;
    if(sel == 0)
    {
        document.getElementById("butt4").style="background-color : yellow";
        document.getElementById("lockmsg").innerHTML="Lock kar diya jaye ?";
        document.getElementById("chbutt1").style="display : flex";
        document.getElementById("chbutt2").style="display : flex";
        sel=1;
    }
}
function reset()
{
    sel = 0;
        document.getElementById("butt1").style="background-color : white"; 
        document.getElementById("butt2").style="background-color : white"; 
        document.getElementById("butt3").style="background-color : white"; 
        document.getElementById("butt4").style="background-color : white"; 
}
function ji()
{
    let y;
    if(ques==1)
    {
            document.getElementById("butt1").style="background-color : green";
            document.getElementById("chbutt1").style="display : none";
            document.getElementById("chbutt2").style="display : none";
            if(x!=1)
            {
                document.getElementById("lockmsg").innerHTML="Afsos Yeh Galat Jawab !";
                y=document.getElementById("butt1");
                y.className = " anim1";
            }
            else{
                document.getElementById("lockmsg").innerHTML="Bilkul Sahi Jawab";
                document.getElementById("nextq").style="display : flex";
                ques=2;
                y=document.getElementById("butt1");
                y.className = " anim";
            }
    }
    else if(ques==2)
    {
            document.getElementById("chbutt1").style="display : none";
            document.getElementById("chbutt2").style="display : none";
            if(x!=correct)
            {
                document.getElementById("lockmsg").innerHTML="Afsos Yeh Galat Jawab !";
            }
            else{
                document.getElementById("lockmsg").innerHTML="Bilkul Sahi Jawab";
                document.getElementById("nextq").style="display : flex";
            }
            if(correct==1)
                {
                    y=document.getElementById("butt1");
                }
                else if(correct==2)
                {
                    y=document.getElementById("butt2");
                }
                else if(correct==3)
                {
                    y=document.getElementById("butt3");
                }
                else
                {
                    y=document.getElementById("butt4");
                }
                y.className = " anim";
    }
    else if(ques==3)
    {
            document.getElementById("chbutt1").style="display : none";
            document.getElementById("chbutt2").style="display : none";
            if(x!=correct)
            {
                document.getElementById("lockmsg").innerHTML="Afsos Yeh Galat Jawab !";
            }
            else{
                document.getElementById("lockmsg").innerHTML="Bilkul Sahi Jawab";
                document.getElementById("nextq").style="display : flex";
            }
            if(correct==1)
                {
                    y=document.getElementById("butt1");
                }
                else if(correct==2)
                {
                    y=document.getElementById("butt2");
                }
                else if(correct==3)
                {
                    y=document.getElementById("butt3");
                }
                else
                {
                    y=document.getElementById("butt4");
                }
                y.className = " anim";
    }
    else if(ques==4)
    {
            document.getElementById("chbutt1").style="display : none";
            document.getElementById("chbutt2").style="display : none";
            if(x!=correct)
            {
                document.getElementById("lockmsg").innerHTML="Afsos Yeh Galat Jawab !";
            }
            else{
                document.getElementById("lockmsg").innerHTML="Bilkul Sahi Jawab";
                document.getElementById("nextq").style="display : flex";
            }
            if(correct==1)
                {
                    y=document.getElementById("butt1");
                }
                else if(correct==2)
                {
                    y=document.getElementById("butt2");
                }
                else if(correct==3)
                {
                    y=document.getElementById("butt3");
                }
                else
                {
                    y=document.getElementById("butt4");
                }
                y.className = " anim";
    }
    else if(ques==5)
    {
            document.getElementById("chbutt1").style="display : none";
            document.getElementById("chbutt2").style="display : none";
            if(x!=correct)
            {
                document.getElementById("lockmsg").innerHTML="Afsos Yeh Galat Jawab !";
            }
            else{
                document.getElementById("lockmsg").innerHTML="Bilkul Sahi Jawab";
                document.getElementById("nextq").style="display : flex";
            }
            if(correct==1)
                {
                    y=document.getElementById("butt1");
                }
                else if(correct==2)
                {
                    y=document.getElementById("butt2");
                }
                else if(correct==3)
                {
                    y=document.getElementById("butt3");
                }
                else
                {
                    y=document.getElementById("butt4");
                }
                y.className = " anim";
    }
    else if(ques==6)
    {
            document.getElementById("chbutt1").style="display : none";
            document.getElementById("chbutt2").style="display : none";
            if(x!=correct)
            {
                document.getElementById("lockmsg").innerHTML="Afsos Yeh Galat Jawab !";
            }
            else{
                document.getElementById("lockmsg").innerHTML="Bilkul Sahi Jawab";
                document.getElementById("nextq").style="display : flex";
            }
            if(correct==1)
                {
                    y=document.getElementById("butt1");
                }
                else if(correct==2)
                {
                    y=document.getElementById("butt2");
                }
                else if(correct==3)
                {
                    y=document.getElementById("butt3");
                }
                else
                {
                    y=document.getElementById("butt4");
                }
                y.className = " anim";
                ques++;
    }
    else{
        document.getElementById("butt1").style="display : none";
        document.getElementById("butt2").style="display : none";
        document.getElementById("butt3").style="display : none";
        document.getElementById("butt4").style="display : none";
        document.getElementById("questions").style="justify-content: center";
        document.getElementById("questions").style="align-items: center";
        document.getElementById("questions").innerHTML="You Win !!";
    }
}
function nextquestion()
{
    scoreboard();
    let y=document.getElementById("butt1");
    y.className = "option1"; 
    y=document.getElementById("butt2");
    y.className = "option2"; 
    y=document.getElementById("butt3");
    y.className = "option3";
    y=document.getElementById("butt4");
    y.className = "option4";  
    document.getElementById("butt1").style="background-color : white"; 
    document.getElementById("butt2").style="background-color : white"; 
    document.getElementById("butt3").style="background-color : white"; 
    document.getElementById("butt4").style="background-color : white"; 
    document.getElementById("nextq").style="display : none";
    document.getElementById("lockmsg").innerHTML="";
    questiongenerator();
    sel=0;
    ques++;
}
function questiongenerator()
{
    randomques=Math.random()*10;
    if(randomques>0 && randomques<2.5 && q2!=2)
    {
        document.getElementById("questions").innerHTML= "The language of Lakshadweep. a Union Territory of India, is";
        document.getElementById("butt1").innerHTML="A.Tamil";
        document.getElementById("butt2").innerHTML="B.Hindi";
        document.getElementById("butt3").innerHTML="C.Malayalam";
        document.getElementById("butt4").innerHTML="D.Telugu";
        correct=3;
        q2=2;
    }
    else if(randomques>=2.5 && randomques<5 && q3!=3)
    {
        document.getElementById("questions").style= "font-size : 37px";
        document.getElementById("questions").innerHTML= "In which group of places the Kumbha Mela is held every twelve years?";
        document.getElementById("butt1").style= "font-size : 30px";
        document.getElementById("butt1").innerHTML="A.Ujjain. Purl; Prayag. Haridwar";
        document.getElementById("butt2").style= "font-size : 30px";
        document.getElementById("butt2").innerHTML="B.Prayag. Haridwar, Ujjain,. Nasik";
        document.getElementById("butt3").style= "font-size : 30px";
        document.getElementById("butt3").innerHTML="C.Rameshwaram. Purl, Badrinath. Dwarika";
        document.getElementById("butt4").style= "font-size : 30px";
        document.getElementById("butt4").innerHTML="D.Chittakoot, Ujjain, Prayag,'Haridwar";
        correct=2;
        q3=3;
    }
    else if(randomques>=5 && randomques<7.5 && q4!=4)
    {
        document.getElementById("questions").innerHTML= "Bahubali festival is related to";
        document.getElementById("butt1").innerHTML="A.Islam";
        document.getElementById("butt2").innerHTML="B.Hinduism";
        document.getElementById("butt3").innerHTML="C.Buddhism";
        document.getElementById("butt4").innerHTML="D.Jainism";
        correct=4;
        q4=4;
    }
    else if(randomques>=7.5 && randomques<10 && q5!=5)
    {
        document.getElementById("questions").innerHTML= "Which day is observed as the World Standards  Day?";
        document.getElementById("butt1").innerHTML="A.June 26";
        document.getElementById("butt2").innerHTML="B.Oct 14";
        document.getElementById("butt3").innerHTML="C.Nov 15";
        document.getElementById("butt4").innerHTML="D.Dec 2";
        correct=2;
        q5=5;
    }
    else if(q2==2 && q3==3 && q4==4 && q5==5)
    {
        ji();
    }
    else{
        questiongenerator();
    }
}
function scoreboard()
{
    scoreboardreset();
    if(ques==2)
    {
        document.getElementById("11p").style="background-color : darkblue";
    }
    if(ques==3)
    {
        document.getElementById("10p").style="background-color : darkblue";
    }
    if(ques==4)
    {
        document.getElementById("9p").style="background-color : darkblue";
    }
    if(ques==5)
    {
        document.getElementById("8p").style="background-color : darkblue";
    }
    if(ques==6)
    {
        document.getElementById("7p").style="background-color : darkblue";
    }
    if(ques==7)
    {
        document.getElementById("6p").style="background-color : darkblue";
    }
    if(ques==8)
    {
        document.getElementById("5p").style="background-color : darkblue";
    }
    if(ques==9)
    {
        document.getElementById("4p").style="background-color : darkblue";
    }
    if(ques==10)
    {
        document.getElementById("3p").style="background-color : darkblue";
    }
    if(ques==11)
    {
        document.getElementById("2p").style="background-color : darkblue";
    }
    if(ques==12)
    {
        document.getElementById("1p").style="background-color : darkblue";
    }
}
function scoreboardreset()
{
    document.getElementById("1p").style="background-color : lightgreen";
    document.getElementById("2p").style="background-color : lightgreen";
    document.getElementById("3p").style="background-color : lightgreen";
    document.getElementById("4p").style="background-color : lightgreen";
    document.getElementById("5p").style="background-color : lightgreen";
    document.getElementById("6p").style="background-color : lightgreen";
    document.getElementById("7p").style="background-color : lightgreen";
    document.getElementById("8p").style="background-color : lightgreen";
    document.getElementById("9p").style="background-color : lightgreen";
    document.getElementById("10p").style="background-color : lightgreen";
    document.getElementById("11p").style="background-color : lightgreen";
    document.getElementById("p12").style="background-color : lightgreen";
}
// I did my best here, def needs work. I feel like i might be a bit behind
// on the classwork. i feel like i am on the verge of getting all this down
//just need to keep studying and practicing. 

// creating all the variables i will need 
let defend;
let attack;
let defendcharacter;
let defenderHP;
let defenderAP;
let defenderCAP;
let attackcharacter;
let attackerHP;
let attackerAP;
let attackerCAP;
let name;
let yourChar;
let yourDef;
let myChar = " ";
let myDef = " "; 

// creating the characters and setting their stats up
let characters = {
    PrinLeia: {
        name: "Princess Leia",
        fullName: "Princess Leia",
        healthPoints: 160,
        attackPoints: 10,
        counterAttackPoints: 26
    },

    DarMaul: {
        name: "Darth Maul",
        fullName: "Darth Maul",
        healthPoints: 140,
        attackPoints: 12,
        counterAttackPoints: 23
    },

    GG: {
        name: "General Greivous",
        fullName: "General Greivous",
        healthPoints: 125,
        attackPoints: 9,
        counterAttackPoints: 30
    }
}

//starting up the document her
$(document).ready(function() {


    // a listener event to recognize what character needs to be clicked needs to be next
    $(".row1").click(function() {

    // characters are undefined. possibly need to make new variables in this function?
        if(yourChar === GG) {
            $(".yourChar").append('<img src="./assets/images/GG.jpg" />')
        }

        if(yourChar === PrinLeia) {
            $(".yourChar").append('<img src="./assets/images/Princess Leia920x920.jpg" />')
        }

        if(yourChar === DarMaul) {
            $(".yourChar").append('<img src="./assets/images/darthMaul.png" />')
        }

        //hide image row
        $("#imgRow").hide(); 
    }); 

    // need to move the images to the right divs

    $(".move").click(function() {
        //depending on if the defender hp is above 0 or not move to defeated area 
        // otherwise keep in battle zone
        
    })


    // attack button function next

    $(".atkBtn").click(function() {
        // creating if statements to determine and compare stats and return the results
        //if there is no enemy selected prompt attacker to choose an enemy
        //if attacker hp is 0 then display you lose
        //if defender hp is 0 bring in next defender
        //if all defender hp is 0 then diplsay you win message and clear all divs
        $(".youAttacked").empty();
        $(".retaliation").empty();
        $(".youDefeated").empty();
        $(".noEnemy").empty();
        $(".youWon").html("Ayyy ya did it!");

        //if attacker hp is 0 then display you lose and clear divs
        $(".restart").show();    			
        $(".attackButton").hide();     			
        $(".youAttacked").empty();
         $(".retaliation").empty();
        $(".youDefeated").empty();
        $(".youLose").html("Try again young padawan!")
    })

    // reset button to start over, or instructions to refresh page??


    $(".restart").click(function() {
        //i can't figure this one out 
    })







})
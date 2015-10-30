function jacob() {
    //Variables and functions
    var greeting = function(name) {
        userName = name;
        console.log("Nice to meet you, " + name + "!");
    };

    //Player STATS
    var userName = "Adventurer";
    var health = Math.max(25, 25);
    var potions = 1;
    var gold = 100;
    var swordDamage = 1;
    var canteen = Math.max(8, 8);
    var shipHealth = 20;
    var warmth = 10;
    var poisoned = false;

    function ApplyDamage(Damage) {
        health -= Damage;
        console.log(userName + "'s Health: " + health + "/25" + " (-" + Damage + ")");
        if (health <= 0) { //Dead Player
            sleep(1000);
            console.log("Your adventure ends here...");
            sleep(1000);
            gameRestart(prompt("Restart? (Y/N)"));
        }
        else {
            sleep(1000);
        }
    }

    function ApplyShipDamage(Damage) {
        shipHealth -= Damage;
        console.log(userName + "'s Ship: " + shipHealth + "/20" + " (-" + Damage + ")");
        if (shipHealth <= 0) { //Dead Player
            sleep(1000);
            console.log("Your adventure ends here...");
            sleep(1000);
            gameRestart(prompt("Restart? (Y/N)"));
        }
        else {
            sleep(1000);
        }
    }

    //Healing with Potions
    function ApplyHealing() {
        if (potions > 0) {
        health += 5;
		if (health > 25) {
			health = 25;
		}
        potions -= 1;
        console.log(userName + "'s Health: " + health + "/25 (+5)");
        console.log(userName + "'s Potions: " + potions + " (-1)");
        sleep(1000);
        }
        else {
            console.log("You don't have a potion.");
            sleep(1000);
        }
    }
	
	function maxHeal() {
		health += 25;
		if (health > 25) {
			health = 25;
		}
		console.log(userName + "'s Health: " + health + "/25");
		sleep(1000);
	}

    var userHeal = function(answer) {
        console.log( userName + "'s Current Health: " + health + "/25");
        if (answer === "Y"){
            ApplyHealing(1);
        }
        else {
            sleep(1000);
        }
    };

    //Total Potion Number
    function findPotion(number) {
        potions += number;
        console.log(userName + "'s potions: " + potions + " (+" + number + ")");
        sleep(1000);
    }

    //Money Find
    function findMoney(number) {
        gold += number;
        console.log(userName + "'s Gold: " + gold + " (+" + number + ")");
        sleep(1000);
    }

    //Money Lost
    function loseMoney(number) {
        gold -= number;
        console.log(userName + "'s Gold: " + gold + " (-" + number + ")");
        sleep(1000);
    }

    //Better Sword
    function newSwordDamage(number) {
        swordDamage = number;
        console.log(userName + " equips a better sword!");
        sleep(1000);
    }

    //Spider Poison Feature
    function becomePoisoned() {
        poisoned = true;
    }

    function poisonDamage() {
        if (poisoned = true) {
            health -= 1;
            console.log(userName + "'s Health: " + health + "/25" + " (- 1 from Poison)");
            if (health <= 0) { //Dead Player
                sleep(1000);
                console.log("Your adventure ends here...");
                sleep(1000);
                gameRestart(prompt("Restart? (Y/N)"));
            }
            else {
                sleep(1000);
            }
        }
    }

    function healPoison() {
        poisoned = false;
    }

    //DESERT WATER MECHANIC
    //Water Find
    function findWater() {
        canteen += 8;
		if (canteen > 8) {
			canteen = 8;
		}
		else {
		console.log("You refill your canteen!");
		sleep(1000);
		}
        console.log(userName + "'s Canteen: " + canteen + "/8");
        sleep(1000);
    }

    //Water Lost
    function loseWater(number) {
        canteen -= number;
		if (canteen < 0) {
			canteen = 0;
			console.log("You are extremely thirsty.");
			sleep(1000);
			console.log("Your canteen is empty...");
			ApplyDamage(1);
		}
		else {
		console.log("You drink from your canteen.");
		sleep(1000);
		}
        console.log(userName + "'s Canteen: " + canteen + "/8 (-" + number + ")");
        sleep(1000);
    }

    //COLD TEMPERATURE MECHANIC
    //Warmth Gained
    function gainWarmth() {
        warmth += 10;
        if (warmth > 10) {
            warmth = 10;
        }
        else {
            console.log("You warm up!");
            sleep(5000);
        }
        console.log(userName + "'s Warmth: " + warmth + "/10");
        sleep(1000);
    }

    //Warmth Lost
    function loseWarmth(number) {
        warmth -= number;
        if (warmth < 0) {
            warmth = 0;
            console.log("You are extremely cold.");
            sleep(1000);
            ApplyDamage(2);
        }
        else {
            console.log("It's freezing!");
            sleep(1000);
        }
        console.log(userName + "'s Warmth: " + warmth + "/10 (-" + number + ")");
        sleep(1000);
    }

    //ENEMY STATS

    //BEAR
    var bearHealth = 8;

    function bearDamage (Damage) {
        bearHealth -= Damage + swordDamage;
        console.log("Bear Health: " + bearHealth + "/8");
        sleep(1000);
    }

    //BANDIT
    var banditHealth = 8;

    function banditDamage (Damage) {
        banditHealth -= Damage + swordDamage;
        console.log("Bandit Health: " + banditHealth + "/8");
        sleep(1000);
    }

    //ENT
    var entHealth = 22;

    function entDamage (Damage) {
        entHealth -= Damage + swordDamage;
        console.log("Ent Health: " + entHealth + "/22");
        sleep(1000);
    }

    //MAN (PACK FIGHT)
    var manHealth = 18;

    function manDamage (Damage) {
        manHealth -= Damage + swordDamage;
        console.log("Man's Health: " + manHealth + "/18");
        sleep(1000);
    }

    //SPIDER FIGHT
    var spiderHealth = 12;

    function spiderDamage (Damage) {
        spiderHealth -= Damage + swordDamage;
        console.log("Spider's Health: " + spiderHealth + "/12");
        sleep(1000);
    }

    //Mugger Cart DECOY
    var muggerHealth = 18;

    function muggerDamage (Damage) {
        muggerHealth -= Damage + swordDamage;
        console.log("Mugger's Health: " + muggerHealth + "/18");
        sleep(1000);
    }

    //YETI FIGHT
    var yetiHealth = 15;

    function yetiDamage (Damage) {
        yetiHealth -= Damage + swordDamage;
        console.log("Yeti's Health: " + yetiHealth + "/15");
        sleep(1000);
    }

    //Miner Fight
    var minerHealth = 12;

    function minerDamage (Damage) {
        minerHealth -= Damage + swordDamage;
        console.log("Miner's Health: " + minerHealth + "/12");
        sleep(1000);
    }

    //RAIDER FIGHT (DESERT)
    var raiderHealth = 10;

    function raiderDamage (Damage) {
        raiderHealth -= Damage + swordDamage;
        console.log("Raider's Health: " + raiderHealth + "/10");
        sleep(1000);
    }

    //MUMMY FIGHT
    var mummyHealth = 7;

    function mummyDamage (Damage) {
        mummyHealth -= Damage + swordDamage;
        console.log("Mummy's Health: " + mummyHealth + "/7");
        sleep(1000);
    }

    //Merchant Fight (DESERT)
    var merchantHealth = 11;

    function merchantDamage (Damage) {
        merchantHealth -= Damage + swordDamage;
        console.log("Merchant's Health: " + merchantHealth + "/11");
        sleep(1000);
    }

    //Desert Assassin
    var assassinHealth = 15;

    function assassinDamage (Damage) {
        assassinHealth -= Damage + swordDamage;
        console.log("Assassin's Health: " + assassinHealth + "/15");
        sleep(1000);
    }

    //PIRATE SHIP HEALTH
    var pirateShipHealth = 15;
    var pirateCaptainHealth = 20;

    function pShipDamage (Damage) {
        pirateShipHealth -= Damage;
        console.log("Pirate Ship Health: " + pirateShipHealth + "/15");
        sleep(1000);
    }
    function captainDamage (Damage) {
        pirateCaptainHealth -= Damage + swordDamage;
        console.log("Pirate Captains's Health: " + pirateCaptainHealth + "/20");
        sleep(1000);
    }
    //Secret SHIP DAMAGE
    function pShipSecretDamage (Damage) {
        pirateShipHealth -= Damage;
        sleep(1000);
    }

    //PIRATE SHIP HEALTH
    var vikingShipHealth = 13;
    var vikingCaptainHealth = 18;

    function vShipDamage (Damage) {
        vikingShipHealth -= Damage;
        console.log("Viking Ship Health: " + vikingShipHealth + "/13");
        sleep(1000);
    }
    function vikingDamage (Damage) {
        vikingCaptainHealth -= Damage + swordDamage;
        console.log("Pirate Captains's Health: " + vikingCaptainHealth + "/18");
        sleep(1000);
    }
    //Secret SHIP DAMAGE
    function vShipSecretDamage (Damage) {
        vikingShipHealth -= Damage;
        sleep(1000);
    }

    //SEA MONSTER
    var seaMonsterHealth = 12;

    function seaMonsterDamage (Damage) {
        seaMonsterHealth -= Damage;
        console.log("Sea Monster Health: " + seaMonsterHealth + "/12");
        sleep(1000);
    }
	
	//THUG FIGHT (ISLAND)
	var islandThugHealth = 15;

    function islandThugDamage (Damage) {
        islandThugHealth -= Damage;
        console.log("Thug Health: " + islandThugHealth + "/15");
        sleep(1000);
    }

    //Skeleton Fight
    var skeletonHealth = 12;

    function skeletonDamage (Damage) {
        skeletonHealth -= Damage;
        console.log("Skeleton Health: " + skeletonHealth + "/12");
        sleep(1000);
    }

    //BOSS FIGHT (THE PROTECTOR)
    var protectorHealth = 50;
    var protectorShield = 20;

    function protectorShieldDamage (Damage) {
        protectorShield -= Damage + swordDamage;
        console.log("Protector's Shield: " + protectorShield + "/20");
        sleep(1000);
    }


    function protectorDamage (Damage) {
        protectorHealth -= Damage + swordDamage;
        console.log("Protector's Health: " + protectorHealth + "/50");
        sleep(1000);
    }




    //WAIT FUNCTION
    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds){
                break;
            }
        }
    }



    //Restart game Command

    var gameRestart = function(answer) {
        if (answer === "Y"){
            game();
        }
        else {
            console.log("Thanks for playing!");
			sleep(5000);
			throw new Error("Refresh the page!");
        }
    };



    //START GAME
    console.log("Welcome!");
    sleep(1000);
    greeting(prompt("What is your name?"));
    sleep(5000);
    console.log("THIS GAME REACTS TO YOUR CHOICES - TYPE EXACTLY AS IT ASKS - THIS GAME IS CASE SENSITIVE");
    sleep(5000);
	sleep(5000);
    console.log("You heard of a great tale of a shining golden sword?");
    sleep(2500);
    console.log("Your tiny stone sword wouldn't even compare to it!");
    sleep(2500);
    console.log("Only a few adventurers have ever seen it, and you are the next one to search!");
    sleep(2500);
    console.log("You are about to embark on a new journey!");
    sleep(5000);
    var directions = function(direction) {
        //NORTHWARD
        if (direction === "N") {
            console.log("You head off towards the mountains!");
            sleep(5000);
            console.log("After hours of walking you finally make it into the snowy white hills.");
            sleep(3000);
            console.log("The temperature is slowly dropping.");
            sleep(5000);
            if (Math.random() < 0.34) {
                console.log("It seems that a storm is heading towards you");
                sleep(2000);
                console.log("The wind blows and is chilling your bones.");
                sleep(5000);
                console.log("You decide it best to wait out in a cave farther up the mountain.");
                sleep(5000);
                console.log("You climb up to the cavern.");
                sleep(2000);
                console.log("You sit on the floor and slowly begin to .");
                sleep(4000);
                console.log("You turn around to see a raider charging at you!");
                sleep(2000);
                while (raiderHealth > 0){
                    if (Math.random() < 0.34) {
                        sleep(1000);
                        console.log("The skeleton stabs at you with his sword!");
                        ApplyDamage(2);
                    }
                    else if(Math.random() <= 0.67) {
                        sleep(1000);
                        console.log("The skeleton slashes at you!");
                        ApplyDamage(1);
                    }
                    else if(Math.random() <= 0.8) {
                        sleep(1000);
                        console.log("The skeleton chills you with magic!");
                        ApplyDamage(1);
                        loseWarmth(1);
                    }
                    else {
                        console.log("You dodged the blade!");
                    }
                    sleep(1000);
                    var skeletonFight = function(attack) {
                        console.log("You " + attack + " your sword!");
                        if (attack === "Slash") {
                            sleep(1000);
                            if (Math.random() <= 0.1) {
                                console.log("You critically strike the skeleton!");
                                skeletonDamage(5);
                            }
                            else {
                                console.log("You slash the skeleton's bones!");
                                skeletonDamage(3);
                            }
                        }
                        else if (attack === "Stab") {
                            if (Math.random() <= 0.05) {
                                console.log("You knock a bone off the skeleton!");
                                skeletonDamage(5);
                            }
                            else if (Math.random() <= 0.5){
                                console.log("You stab at the skeleton!");
                                skeletonDamage(3);
                            }
                            else {
                                console.log("You hurt the skeleton!");
                                skeletonDamage(1);
                            }
                        }
                        else {
                            if (Math.random() <= 0.01) {
                                console.log("You killed the skeleton!");
                                skeletonDamage(20);
                            }
                            else if (Math.random() <= 0.5){
                                console.log("You swing at the skeleton!");
                                skeletonDamage(3);
                            }
                            else {
                                console.log("You missed!");
                                sleep(1000);
                            }
                        }
                    };
                    skeletonFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
                }
                sleep(3000);
                console.log("The skeleton falls apart!");
                sleep(4000);
                console.log("The skeleton dropped a potion!");
                findPotion(1);
                sleep(2000);
                userHeal(prompt("Heal with a potion? +5 (Y/N)"));
                sleep(2000);
            }
            else if(Math.random() <= 0.67) {
                sleep(5000);
                console.log("You continue walking up into the mountains.");
                sleep(1000);
                console.log("You follow trail markers upward");
                sleep(1000);
                console.log("A terrible storm is heading straight for you.");
                sleep(1000);
                console.log("You quickly continue hiking into the hills.");
                sleep(1000);
                console.log("The temperature is dropping fast.");
                sleep(1000);
                loseWarmth(1);
                sleep(1000);
                console.log("The storm quickly gains on you!");
                sleep(1000);
                console.log("You have to push through the storm!");
                sleep(1000);
                console.log("The storm is so windy its hard to see the path!");
                sleep(3000);
                sleep(3000);
                console.log("You are freezing from the blizard.");
                sleep(1000);
                loseWarmth(1);
                while (warmth > 2 || warmth > 9) {
                    sleep(4000);
                    console.log("You have to decide which direction to go.");
                    sleep(5000);
                    var mountainDirections = function(answer) {
                        if (answer === "N") {
                            if (Math.random < 0.2) {
                                console.log("You head north.");
                                sleep(1000);
                                console.log("The storm is causing visibility to be tiny.");
                                sleep(1000);
                                console.log("The cold is cutting through your clothing.");
                                sleep(1000);
                                loseWarmth(1);
                            }
                            else if (Math.random < 0.5) {
                                console.log("You think you are going north.");
                                sleep(1000);
                                console.log("You see a sign post, however snow completely defaced it.");
                                sleep(1000);
                                console.log("You are certain you are getting hypothermia.");
                                sleep(1000);
                                loseWarmth(1);
                            }
                            else if (Math.random < 0.7) {
                                console.log("You continue towards what you think is North");
                                sleep(1000);
                                console.log("The snow is pelting you hard.");
                                sleep(1000);
                                console.log("The blizzard isn't making anything easy.");
                                sleep(1000);
                                loseWarmth(1);
                            }
                            else {
                                console.log("You think this way is north.");
                                sleep(1000);
                                console.log("You can barely see five feet in front of you.");
                                sleep(1000);
                                console.log("The storm is definitely not letting up.");
                                sleep(1000);
                                loseWarmth(1);
                            }
                        }
                        else if (answer === "E") {
                            if (Math.random < 0.2) {
                                console.log("You continue towards what might be the East.");
                                sleep(1000);
                                console.log("You see a small rock formation in front of you!");
                                sleep(1000);
                                console.log("Slowly you make your way towards it.");
                                sleep(1000);
                                console.log("It leads into a cave!");
                                sleep(1000);
                                console.log("You sit at the mouth of the cave and make a fire!");
                                gainWarmth();
                            }
                            else if (Math.random < 0.5) {
                                console.log("You continue towards what you think is East.");
                                sleep(1000);
                                console.log("The storm is ruthless.");
                                sleep(1000);
                                console.log("You can feel the frostbite.");
                                sleep(1000);
                                loseWarmth(1);
                            }
                            else if (Math.random < 0.7) {
                                console.log("You head towards East.");
                                sleep(1000);
                                console.log("The storm is absolutely chilling.");
                                sleep(1000);
                                console.log("You are desperate for warmth.");
                                sleep(1000);
                                loseWarmth(1);
                            }
                            else {
                                console.log("You continue towards what you think is East.");
                                sleep(1000);
                                console.log("You think you see something up ahead.");
                                sleep(1000);
                                console.log("When you reach it, you find its only a pile of snow.");
                                sleep(1000);
                                loseWarmth(1);
                            }
                        }
                        else if (answer === "S") {
                            if (Math.random < 0.05) {
                                console.log("You continue towards what you think is South.");
                                sleep(1000);
                                console.log("You continue walking until you step on something slippery.");
                                sleep(5000);
                                console.log("You believe its a frozen water source and instantly turn around.");
                                sleep(1000);
                                loseWarmth(1);
                            }
                            else if (Math.random < 0.2) {
                                console.log("You continue towards what you think is South.");
                                sleep(1000);
                                console.log("Its so cold you could use your nose drippings as chopsticks.");
                                sleep(5000);
                                console.log("Its absolutely freezing.");
                                sleep(1000);
                                loseWarmth(1);
                            }
                            else if (Math.random < 0.5) {
                                console.log("You think you are heading South.");
                                sleep(1000);
                                console.log("You can't find anything!");
                                sleep(1000);
                                console.log("You might as well have been walking in circles!");
                                sleep(1000);
                                loseWarmth(1);
                            }
                            else if (Math.random < 0.7) {
                                console.log("You continue towards what you think is South.");
                                sleep(1000);
                                console.log("The storm hasn't let up at all.");
                                sleep(1000);
                                console.log("It's actually getting worse!");
                                sleep(1000);
                                loseWarmth(1);
                            }
                            else {
                                console.log("You might be heading South.");
                                sleep(1000);
                                console.log("You think you recognize this area.");
                                sleep(1000);
                                console.log("You can't tell, its too snowed in.");
                                sleep(1000);
                                loseWarmth(1);
                            }
                        }
                        else {
                            if (Math.random < 0.2) {
                                console.log("You continue towards what you think is West.");
                                sleep(1000);
                                console.log("The storm is absolutely brutal.");
                                sleep(1000);
                                console.log("You can't believe how cold it is.");
                                sleep(1000);
                                loseWarmth(1);
                            }
                            else if (Math.random < 0.5) {
                                console.log("You continue towards what you think is West.");
                                sleep(1000);
                                console.log("It's so cold your exposed arms feel hot.");
                                sleep(1000);
                                console.log("It's definitely storming harder now.");
                                sleep(1000);
                                loseWarmth(1);
                            }
                            else if (Math.random < 0.7) {
                                console.log("You think this is West.");
                                sleep(1000);
                                console.log("The cold is starting to give you a brain freeze.");
                                sleep(1000);
                                console.log("You didn't even think that was possible!");
                                sleep(1000);
                                loseWarmth(1);
                            }
                            else {
                                console.log("You continue towards what you think is West.");
                                sleep(1000);
                                console.log("The cold is worst than cold");
                                sleep(1000);
                                console.log("Its freezing.");
                                sleep(1000);
                                loseWarmth(1);
                            }
                        }
                    };
                    mountainDirections(prompt("Which way would you like to go? (N/E/S/W)"));
                    sleep(1000);
                }
                if (warmth > 7) {
                    console.log("You watch the storm from inside the cave.")
                }
                else {
                    if (warmth < 8) {
                        mountainDirections(prompt("Which way would you like to go? (N/E/S/W)"));
                        sleep(1000);
                    }
                    if (warmth < 8) {
                        mountainDirections(prompt("Which way would you like to go? (N/E/S/W)"));
                        sleep(1000);
                    }
                    if (warmth < 8) {
                        mountainDirections(prompt("Which way would you like to go? (N/E/S/W)"));
                        sleep(1000);
                    }
                    if (warmth < 8) {
                        mountainDirections(prompt("Which way would you like to go? (N/E/S/W)"));
                        sleep(1000);
                    }
                    console.log("You see a small rock formation in front of you!");
                    sleep(1000);
                    console.log("Slowly you make your way towards it.");
                    sleep(1000);
                    console.log("It leads into a cave!");
                    sleep(1000);
                    console.log("You sit at the mouth of the cave and make a fire!");
                    gainWarmth();
                    sleep(1000);
                }
            }
            else {
                console.log("As you are hiking into the mountains, you see a large figure emerge from the cave.");
                sleep(3000);
                console.log("It stops for a second.");
                sleep(1000);
                if (Math.random() < 0.8) {
                    sleep(1000);
                    console.log("You think it saw you.");
                    sleep(1000);
                    console.log("It ran back into the cave.");
                    ApplyDamage(1);
                    sleep(1000);
                    console.log("You chase after it, into the cave.");
                    while (yetiHealth > 0) {
                        if (Math.random() < 0.4) {
                            sleep(1000);
                            console.log("It scratches you!");
                            ApplyDamage(2);
                        }
                        else if(Math.random() <= 0.8) {
                            sleep(1000);
                            console.log("It throws an icicle at you!");
                            if (Math.random() <= 0.05) {
                                sleep(1000);
                                console.log("The icicle stabs into your arm!");
                                ApplyDamage(3);
                            }
                            else {
                                sleep(1000);
                                console.log("The icicle misses!")
                            }
                        }
                        else if (Math.random() < 0.2){
                            sleep(1000);
                            console.log("It swings it's club at you!");
                            ApplyDamage(5)
                        }
                        else {
                            sleep(1000);
                            console.log("It roars at you!");
                        }
                        sleep(1000);
                        console.log("Now is your chance!");
                        sleep(1000);
                        var caveFight = function(attack) {
                            console.log("You " + attack + " your sword!");
                            if (attack === "Slash") {
                                if (Math.random() < 0.4) {
                                    console.log("You slash at the Yeti!");
                                    yetiDamage(5);
                                }
                                else if (Math.random() < 0.7) {
                                    console.log("You slash at the Yeti!");
                                    yetiDamage(3);
                                }
                                else {
                                    console.log("You slash at the Yeti!");
                                    yetiDamage(1);
                                }
                            }
                            else if (attack === "Stab") {
                                if (Math.random() < 0.2) {
                                    console.log("You slab the Yeti!");
                                    yetiDamage(6);
                                }
                                else if (Math.random() < 0.5) {
                                    console.log("You puncture the Yeti's fur!");
                                    yetiDamage(3);
                                }
                                else {
                                    console.log("You try to stab the Yeti.");
                                    yetiDamage(2);
                                }
                            }
                            else {
                                if (Math.random() < 0.2) {
                                    console.log("You furiously swing at the Yeti!");
                                    yetiDamage(8);
                                }
                                else if (Math.random() < 0.5) {
                                    console.log("You swing at the Yeti!");
                                    yetiDamage(5);
                                }
                                else if (Math.random() < 0.7) {
                                    console.log("You try to swing at the Yeti!");
                                    yetiDamage(3);
                                }
                                else {
                                    console.log("You miss.");
                                }
                            }
                        };
                        caveFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
                    }
                    sleep(1000);
                    console.log("The yeti is dead.");
                    sleep(1000);
                    userHeal(prompt("Heal with a potion? +5 (Y/N)"));
                    sleep(1000);
                    console.log("You find gold and a potions in the cave.");
                    findMoney(120);
                    findPotion(2);
                }
                else {
                    sleep(1000);
                    console.log("You are certain it didn't notice you.");
                    sleep(1000);
                    console.log("You follow quietly behind as it re-enters the cave");
                    sleep(1000);
                    console.log("You sneak attack the yeti!");
                    while (yetiHealth > 0) {
                        if (Math.random() < 0.4) {
                            sleep(1000);
                            console.log("It scratches you!");
                            ApplyDamage(2);
                        }
                        else if (Math.random() <= 0.8) {
                            sleep(1000);
                            console.log("It throws an icicle at you!");
                            if (Math.random() <= 0.05) {
                                sleep(1000);
                                console.log("The icicle stabs into your arm!");
                                ApplyDamage(3);
                            }
                            else {
                                sleep(1000);
                                console.log("The icicle misses!")
                            }
                        }
                        else {
                            sleep(1000);
                            console.log("It roars at you!");
                        }
                        sleep(1000);
                        console.log("Now is your chance!");
                        sleep(1000);
                        var caveSneakFight = function (attack) {
                            console.log("You " + attack + " your sword!");
                            if (attack === "Slash") {
                                if (Math.random() < 0.4) {
                                    console.log("You slash at the Yeti!");
                                    yetiDamage(5);
                                }
                                else if (Math.random() < 0.7) {
                                    console.log("You slash at the Yeti!");
                                    yetiDamage(3);
                                }
                                else {
                                    console.log("You slash at the Yeti!");
                                    yetiDamage(1);
                                }
                            }
                            else if (attack === "Stab") {
                                if (Math.random() < 0.2) {
                                    console.log("You slab the Yeti!");
                                    yetiDamage(6);
                                }
                                else if (Math.random() < 0.5) {
                                    console.log("You puncture the Yeti's fur!");
                                    yetiDamage(3);
                                }
                                else {
                                    console.log("You try to stab the Yeti.");
                                    yetiDamage(2);
                                }
                            }
                            else {
                                if (Math.random() < 0.2) {
                                    console.log("You furiously swing at the Yeti!");
                                    yetiDamage(8);
                                }
                                else if (Math.random() < 0.5) {
                                    console.log("You swing at the Yeti!");
                                    yetiDamage(5);
                                }
                                else if (Math.random() < 0.7) {
                                    console.log("You try to swing at the Yeti!");
                                    yetiDamage(3);
                                }
                                else {
                                    console.log("You miss.");
                                }
                            }
                        };
                        caveSneakFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
                    }
                }
            }
            sleep(2000);
            console.log("After camping in the cave, you notice that the blizzard is definitely not letting up.");
            sleep(2000);
            console.log("After quick examination of the cave you realize, it continues farther in.");
            sleep(2000);
            console.log("You decide that you might find a way out through there.");
            sleep(1000);
            console.log("You grab a piece of wood from your fire to lead yourself");
            sleep(2000);
            console.log("You continue into the cave.");
            if (Math.random() < 0.34) {
                sleep(1000);
                console.log("The cave is very narrow.");
                sleep(3000);
                console.log("However, it is slowly growing wider");
                sleep(5000);
                console.log("You step through a threshold and find a giant underground city.");
                sleep(5000);
                console.log("You discover it to be full of goblins.");
                var caveTownInvestigate = function(search) {
                    if (search === "Y") {
                       sleep(1000);
                        console.log()
                    }
                    else {

                    }
                };
                caveTownInvestigate(prompt("Investigate the city? (Y/N)"));
            }
            else if(Math.random() <= 0.67) {

            }
            else {
                sleep(3000);
                console.log("You follow the cavern farther into the mountain.");
                sleep(4000);
                console.log("The tunnel comes to a small opening which appears to be a mineshaft of some sort.");
                sleep(1000);
                console.log("A miner's pack lays near a mine cart.");
                sleep(1000);
                console.log("There could be untold riches inside");
                var minersPackQuestion = function(answer) {
                    if (answer === "Y") {
                        sleep(1000);
                        console.log("You search the pack.");
                        if (Math.random() < 0.5) {
                            sleep(1000);
                            console.log("Someone yells at you!");
                            sleep(1000);
                            console.log("You see the miner a little ways down the mineshaft.");
                            sleep(1000);
                            console.log("The miner comes running at you!");
                            while (muggerHealth >= 6) {
                                if (Math.random() < 0.34) {
                                    sleep(1000);
                                    console.log("He swings his pick axe towards you!");
                                    ApplyDamage(4);
                                }
                                else if(Math.random() <= 0.67) {
                                    sleep(1000);
                                    console.log("He swings his pick axe at you!");
                                    ApplyDamage(2);
                                }
                                else {
                                    sleep(1000);
                                    console.log("He missed his attack!");
                                }
                                var cartFight = function(attack) {
                                    console.log("You " + attack + " your sword!");
                                    if (attack === "Slash") {
                                        sleep(1000);
                                        if (Math.random() <= 0.03) {
                                            console.log("You furiously slash your sword!");
                                            minerDamage(5);
                                        }
                                        else {
                                            console.log("You slash at the miner's armour!");
                                            minerDamage(4);
                                        }
                                    }
                                    else if (attack === "Stab") {
                                        if (Math.random() <= 0.01) {
                                            console.log("You stab with your sword!");
                                            minerDamage(2);
                                        }
                                        else if (Math.random() <= 0.5){
                                            console.log("You stab at the miner!");
                                            minerDamage(3);
                                        }
                                        else {
                                            console.log("You hurt the miner!");
                                            minerDamage(1);
                                        }
                                    }
                                    else {
                                        if (Math.random() <= 0.01) {
                                            console.log("You critically wound the miner!");
                                            minerDamage(40);
                                        }
                                        else if (Math.random() <= 0.6){
                                            console.log("You swing at the miner!");
                                            minerDamage(5);
                                        }
                                        else {
                                            console.log("You missed!");
                                            sleep(1000);
                                        }
                                    }
                                };
                                cartFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
                            }
                            sleep(1000);
                            console.log("You continue searching the pack.");
                            sleep(1000);
                            console.log("Inside the pack you find barely any gold and a potion.");
                            findMoney(20);
                            findPotion(1);
                            sleep(1000);
                            console.log("You took everything useful from the pack.");
                        }
                        else {
                            console.log("Inside the pack you find barely any gold and a potion.");
                            findMoney(20);
                            findPotion(1);
                            sleep(1000);
                            console.log("You took everything useful from the pack.")
                        }
                    }
                    else {
                        sleep(1000);
                        console.log("You leave it alone.");
                    }
                };
                minersPackQuestion(prompt("Search the Miner's Pack? (Y/N)"));
            }
            sleep(2000);
            console.log("You continue deeper into the cavern");
            sleep(5000);
            console.log("The floor slowly levels out.");
            sleep(3000);
            console.log("The cavern opens up into a large room.");
        }
        //EASTWARD
        else if (direction === "E") {
            console.log("You board a boat and head to sea!");
            sleep(5000);
            console.log("The sea is quite calm right now.");
            sleep(3000);
            console.log("This could be a long journey.");
            sleep(10000);
            console.log("After a while at sea...");
            sleep(4000);
            if (Math.random() < 0.33) {
                sleep(4000);
                console.log("You see another boat.");
                sleep(5000);
                console.log("You see a black flag rise onto the mast of the ship.");
                sleep(2000);
                console.log("The pirates are heading straight for you!");
                while (pirateShipHealth > 0){
                    console.log("The ship's cannons fire!");
                    if (Math.random() < 0.34) {
                        sleep(1000);
                        console.log("A volley of cannonballs barrages your ship.");
                        ApplyShipDamage(2);
                    }
                    else if(Math.random() <= 0.67) {
                        sleep(1000);
                        console.log("Only a few cannon balls manage to hit your ship.");
                        ApplyShipDamage(1);
                    }
                    else {
                        console.log("All enemy cannons miss their targets!");
                    }
                    sleep(1000);
                    var pirateShipFight = function(attack) {
                        if (attack === "Fire") {
                            sleep(1000);
                            if (Math.random() <= 0.6) {
                                console.log("Your Cannons hit directly!");
                                pShipDamage(5);
                            }
                            else {
                                console.log("Your cannons miss.");
                            }
                        }
                        else if (attack === "Board") {
                            sleep(1000);
                            console.log("You get close enough to board with the ship.");
                            sleep(1500);
                            console.log("You and your crew shuffle aboard.");
                            sleep(1500);
                            console.log("The Pirate Captain engages you!");
                            sleep(2000);
                            while (pirateCaptainHealth > 0) {
                                if (Math.random() < 0.34) {
                                    sleep(1000);
                                    console.log("He slashed at you with his cutlass!");
                                    ApplyDamage(3);
                                }
                                else if(Math.random() <= 0.67) {
                                    sleep(1000);
                                    console.log("He swing at you with his cutlass!");
                                    ApplyDamage(2);
                                }
                                else {
                                    console.log("You dodge his blade!");
                                }
                                var captainFight = function(attack) {
                                    console.log("You " + attack + " your sword!");
                                    if (attack === "Slash") {
                                        sleep(1000);
                                        if (Math.random() <= 0.05) {
                                            console.log("You critically strike the Pirate Captain!");
                                            captainDamage(5);
                                        }
                                        else {
                                            console.log("You slash through the Captain's armour!");
                                            captainDamage(3);
                                        }
                                    }
                                    else if (attack === "Stab") {
                                        if (Math.random() <= 0.01) {
                                            console.log("You critically wound the Captain!");
                                            captainDamage(5);
                                        }
                                        else if (Math.random() <= 0.5){
                                            console.log("You stab at the Captain!");
                                            captainDamage(3);
                                        }
                                        else {
                                            console.log("You hurt the Captain!");
                                            captainDamage(1);
                                        }
                                    }
                                    else {
                                        if (Math.random() <= 0.01) {
                                            console.log("You killed the Pirate!");
                                            captainDamage(20);
                                        }
                                        else if (Math.random() <= 0.5){
                                            console.log("You swing at the Captain!");
                                            captainDamage(3);
                                        }
                                        else {
                                            console.log("You missed!");
                                            sleep(1000);
                                        }
                                    }
                                };
                                captainFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
                            }
                            console.log("The rest of the pirate surrender as they see their leader fall.");
                            sleep(3000);
                            console.log("You take potions and gold from the ship.");
                            sleep(7000);
                            findMoney(400);
                            findPotion(3);
                            sleep(1000);
                            userHeal(prompt("Heal with a potion? +5 (Y/N)"));
                            sleep(1000);
                            console.log("Your cannoneers sink the ship after reboarding your own.");
                            pShipSecretDamage(500);
                        }
                        else {
                            if (Math.random() <= 0.08) {
                                console.log("Your ship remains fully intact after ramming the enemy ship.");
                                pShipDamage(30);
                            }
                            else if (Math.random() <= 0.5){
                                console.log("You ram the enemy ship but in turn damage yourself and don't sink the enemy.");
                                pShipDamage(6);
                                ApplyShipDamage(3);
                            }
                            else {
                                console.log("You attempt to ram the ship but fail.");
                                sleep(1000);
                            }
                        }
                    };
                    pirateShipFight(prompt("You cannons are ready! (Fire/Board/Ram)"));
                }
                sleep(3000);
                console.log("The ship sinks.");
                sleep(4000);
                console.log("You continue sailing.")
            }
            else if(Math.random() <= 0.66) {
                sleep(4000);
                console.log("You see another boat.");
                sleep(5000);
                console.log("The ship turns to engage you.");
                while (vikingShipHealth > 0){
                    console.log("The ship's cannons fire!");
                    if (Math.random() < 0.34) {
                        sleep(1000);
                        console.log("A volley of arrows barrages your ship.");
                        ApplyShipDamage(2);
                        ApplyDamage(1);
                    }
                    else if(Math.random() <= 0.40) {
                        sleep(1000);
                        console.log("Cannon balls barrage your ship.");
                        ApplyShipDamage(3);
                    }
                    else if(Math.random() <= 0.67) {
                        sleep(1000);
                        console.log("Only a few cannon balls manage to hit your ship.");
                        ApplyShipDamage(2);
                    }
                    else {
                        console.log("All enemy cannons miss their targets!");
                    }
                    sleep(1000);
                    var vikingShipFight = function(attack) {
                        if (attack === "Fire") {
                            sleep(1000);
                            if (Math.random() <= 0.1) {
                                console.log("Your Cannons damage the ship!");
                                vShipDamage(8);
                            }
                            else if (Math.random() <= 0.6) {
                                console.log("Your Cannons hit directly!");
                                vShipDamage(5);
                            }
                            else {
                                console.log("Your cannons miss.");
                            }
                        }
                        else if (attack === "Board") {
                            sleep(1000);
                            console.log("You get close enough to board with the ship.");
                            sleep(1500);
                            console.log("You and your crew climb aboard.");
                            sleep(1500);
                            console.log("The Viking Captain engages you!");
                            sleep(2000);
                            while (vikingCaptainHealth > 0) {
                                if (Math.random() < 0.34) {
                                    sleep(1000);
                                    console.log("He swings at you with his war axes!");
                                    ApplyDamage(3);
                                }
								else if(Math.random() <= 0.47) {
                                    sleep(1000);
                                    console.log("He furiously swings his axes at you!");
                                    ApplyDamage(4);
                                }
                                else if(Math.random() <= 0.67) {
                                    sleep(1000);
                                    console.log("He swings at you with his axe!");
                                    ApplyDamage(2);
                                }
                                else {
                                    console.log("You dodge his blades!");
                                }
                                var vikingCaptainFight = function(attack) {
                                    console.log("You " + attack + " your sword!");
                                    if (attack === "Slash") {
                                        sleep(1000);
                                        if (Math.random() <= 0.05) {
                                            console.log("You critically strike the Viking Captain!");
                                            vikingDamage(5);
                                        }
										else if (Math.random() <= 0.38) {
                                            console.log("You slash toward the Viking Captain!");
                                            vikingDamage(5);
                                        }
                                        else {
                                            console.log("You slash through the Viking's armour!");
                                            vikingDamage(3);
                                        }
                                    }
                                    else if (attack === "Stab") {
                                        if (Math.random() <= 0.01) {
                                            console.log("You critically wound the Viking!");
                                            vikingDamage(5);
                                        }
                                        else if (Math.random() <= 0.5){
                                            console.log("You stab at the Viking!");
                                            vikingDamage(3);
                                        }
                                        else {
                                            console.log("You hurt the Viking!");
                                            vikingDamage(1);
                                        }
                                    }
                                    else {
                                        if (Math.random() <= 0.08) {
                                            console.log("You killed the Pirate!");
                                            vikingDamage(20);
                                        }
                                        else if (Math.random() <= 0.6){
                                            console.log("You swing at the Viking!");
                                            vikingDamage(3);
                                        }
                                        else {
                                            console.log("You missed!");
                                            sleep(1000);
                                        }
                                    }
                                };
                                vikingCaptainFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
                            }
                            console.log("The rest of the viking abandon ship!");
                            sleep(3000);
                            console.log("You take potions and gold from the ship.");
                            sleep(7000);
                            findMoney(200);
                            findPotion(3);
                            sleep(1000);
                            userHeal(prompt("Heal with a potion? +5 (Y/N)"));
                            sleep(1000);
                            console.log("Your cannoneers sink the ship after reboarding your own.");
                            vShipSecretDamage(500);
                        }
                        else {
                            if (Math.random() <= 0.01) {
                                console.log("Your ship remains fully intact after ramming the enemy ship");
                                pShipDamage(30);
                            }
                            else if (Math.random() <= 0.5){
                                console.log("You ram the enemy ship but in turn damage yourself and don't sink the enemy.");
                                pShipDamage(6);
                                ApplyShipDamage(3);
                            }
                            else {
                                console.log("You attempt to ram the ship but fail.");
                                sleep(1000);
                            }
                        }
                    };
                    vikingShipFight(prompt("You cannons are ready! (Fire/Board/Ram)"));
                }
                sleep(3000);
                console.log("The viking ship sinks.");
                sleep(4000);
                console.log("You continue sailing.");
            }
            else {
                console.log("As you are sailing, you notice the clouds quickly form around your ship.");
                sleep(5000);
                console.log("A large slimy sea creature emerges from the water and begins climbing your boat.");
                if (Math.random() < 0.8) {
                    sleep(1000);
                    console.log("As he climbs up the boat, he breaks part of the ship!");
                    sleep(1000);
                    ApplyShipDamage(2);
                    sleep(1000);
                    console.log("The Sea Monster reaches the deck!")
                }
                else {
                    console.log("The Sea Monster reaches the deck of the ship!");
                    sleep(1000);
                }
                while (seaMonsterHealth > 0) {
                    if (Math.random() < 0.34) {
                        sleep(1000);
                        console.log("It scratches you!");
                        ApplyDamage(2);
                    }
                    else if(Math.random() <= 0.67) {
                        sleep(1000);
                        console.log("It throws a barnacle at you!");
                        if (Math.random() <= 0.05) {
                            sleep(1000);
                            console.log("The barnacle stabs into your arm!");
                            ApplyDamage(3);
                        }
                        else {
                            sleep(1000);
                            console.log("The barnacle misses!")
                            }
                        }
                    else {
                        sleep(1000);
                        console.log("The violent waves hurtle you around the boat.!");
						ApplyShipDamage(1);
                        ApplyDamage(2);
                    }
                    sleep(1000);
                    console.log("Now is your chance!");
                    var monsterFight = function(attack) {
                        console.log("You " + attack + "your sword!");
                        if (attack === "Slash") {
                            sleep(1000);
                            console.log("You cut the Sea Monster up!");
                            seaMonsterDamage(4);
                        }
                        else if (attack === "Stab") {
                            if (Math.random() < 0.2) {
                                sleep(1000);
                                console.log("You seriously hurt the Sea Monster!");
                                seaMonsterDamage(6);
                            }
                            else {
                                sleep(1000);
                                console.log("You stab at the Sea Monster!");
                                seaMonsterDamage(3);
                            }
                        }
                        else {
                            sleep(1000);
                            console.log("You cut off parts of the Sea Monster's Tentacles!");
                            seaMonsterDamage(2);
                        }
                    };
					monsterFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
                }
            }
            sleep(2000);
            console.log("You sail further.");
            sleep(2000);
            if (Math.random() < 0.34) {
                console.log("Your navigator shouts, 'LAND HO!'");
                sleep(5000);
                console.log("You dock and disembark!");
                sleep(5000);
                console.log("You head eastward on land.");
                sleep(5000);
                var islandTownInvestigate = function(search) {
                    if (search === "Y") {
                        sleep(1000);
                        console.log("You decide to search the town.");
                        sleep(4000);
                        console.log("As you walk through the town...");
                        sleep(2000);
                        console.log("You notice that this is a pirate haven!");
                        sleep(3000);
                        console.log("You slowly start retracing your steps.");
                        sleep(2000);
                        console.log("A blade pokes into your back.");
                        sleep(2000);
                        console.log("He threatens you to give money to him.");
                        sleep(2000);
                        var thugQuestion = function(answer) {
							if (answer === "Y" && gold >= 150) {
								console.log("You give him the 150 gold.");
								sleep(1000);
								loseMoney(50);
								console.log("The thug takes off into the city.");
								sleep(1000);
								console.log("You turn and flee the city.")
							}
							else if (answer === "Y" && gold < 150) {
								console.log("You don't have the money to give him!");
								sleep(3000);
								console.log("The thug gets very angry with you!");
								sleep(1000);
								console.log("He pulls out a blade to fight!");
								sleep(1000);
								while (islandThugHealth > 0) {
									if (Math.random() < 0.33) {
										console.log("The thug catches you with his blade!");
										ApplyDamage(4);
									}
									else if (Math.random() < 0.5) {
										console.log("The thug stabs at you!");
										ApplyDamage(3);
									}
									else if (Math.random() < 0.8) {
										console.log("The thug tries to cut you with his dagger!");
										ApplyDamage(2);
									}
									else {
										console.log("You manage to dodge his blade!")
									}
									sleep(2000);
									console.log("You have a chance to attack!");
									var islandThugMoneyFight = function(attack) {
										console.log("You " + attack + " with your sword");
										sleep(2000);
										if (attack === "Slash") {
											if (Math.random() < 0.25) {
												console.log("You hit the thug insanely hard!");
												islandThugDamage(5);
											}
											else if (Math.random() < 0.52) {
												console.log("You manage to hit the thug!");
												islandThugDamage(3);
											}
											else if (Math.random() < 0.82) {
												console.log("You land a hit on the thug!");
												islandThugDamage(2);
											}
											else {
												console.log("You slash at the thug!");
												islandThugDamage(1);
											}
										}
										else if (attack === "Stab") {
											if (Math.random() < 0.2) {
												console.log("You puncture the thug's armour!");
												islandThugDamage(5);
											}
											else if (Math.random() < 0.6) {
												console.log("You stab at the thug!");
												islandThugDamage(3);
											}
											else {
												console.log("The thug dodges your attack.");
											}
										}
										else {
											if (Math.random() < 0.08) {
												console.log("You smash the thug with your sword!");
												islandThugDamage(20);
											}
											else if (Math.random() < 0.6) {
												console.log("You swing towards the thug!");
												islandThugDamage(6);
											}
											else if (Math.random() < 0.6) {
												console.log("You swing at the thug!");
												islandThugDamage(3);
											}
											else {
												console.log("You miss.")
											}
										}
									};
									islandThugMoneyFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
									console.log("The thug is dead!");
									sleep(1000);
									console.log("You find money and a potion on him!");
									findMoney(60);
									findPotion(1);
									sleep(1000);
									userHeal(prompt("Heal with a potion? +5 (Y/N)"));
									sleep(1000);
									console.log("You flee the pirate haven.");
								}
							}
							else {
								console.log("The thug gets very angry with you!");
								sleep(1000);
								console.log("He pulls out a blade to fight!");
								sleep(1000);
								while (islandThugHealth > 0) {
									if (Math.random() < 0.33) {
										console.log("The thug catches you with his blade!");
										ApplyDamage(4);
									}
									else if (Math.random() < 0.5) {
										console.log("The thug stabs at you!");
										ApplyDamage(3);
									}
									else if (Math.random() < 0.8) {
										console.log("The thug tries to cut you with his dagger!");
										ApplyDamage(2);
									}
									else {
										console.log("You manage to dodge his blade!")
									}
									sleep(2000);
									console.log("You have a chance to attack!");
									var islandThugFight = function(attack) {
										console.log("You " + attack + " with your sword");
										sleep(2000);
										if (attack === "Slash") {
											if (Math.random() < 0.25) {
												console.log("You hit the thug insanely hard!");
												islandThugDamage(5);
											}
											else if (Math.random() < 0.52) {
												console.log("You manage to hit the thug!");
												islandThugDamage(3);
											}
											else if (Math.random() < 0.82) {
												console.log("You land a hit on the thug!");
												islandThugDamage(2);
											}
											else {
												console.log("You slash at the thug!");
												islandThugDamage(1);
											}
										}
										else if (attack === "Stab") {
											if (Math.random() < 0.2) {
												console.log("You puncture the thug's armour!");
												islandThugDamage(5);
											}
											else if (Math.random() < 0.6) {
												console.log("You stab at the thug!");
												islandThugDamage(3);
											}
											else {
												console.log("The thug dodges your attack.")
											}
										}
										else {
											if (Math.random() < 0.08) {
												console.log("You smash the thug with your sword!");
												islandThugDamage(20);
											}
											else if (Math.random() < 0.6) {
												console.log("You swing towards the thug!");
												islandThugDamage(6);
											}
											else if (Math.random() < 0.6) {
												console.log("You swing at the thug!");
												islandThugDamage(3);
											}
											else {
												console.log("You miss.");
											}
										}
									};
									islandThugFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
									console.log("The thug is dead!");
									sleep(1000);
									console.log("You find money and a potion on him!");
									findMoney(60);
									findPotion(1);
									sleep(1000);
									userHeal(prompt("Heal with a potion? +5 (Y/N)"));
									sleep(1000);
									console.log("You flee the pirate haven.");
								}
							}
						};
						thugQuestion(prompt("Pay 150 gold? (Y/N)"))
                    }
                    else {
                        sleep(1000);
                        console.log("You decide to move onwards.");
                    }

                };
                islandTownInvestigate(prompt("Investigate the Town? (Y/N)"));
                sleep(1000);
                console.log("You head through thick jungle paths.")
            }
            else if(Math.random() <= 0.67) {
                console.log("Your navigator shouts, 'LAND HO!'");
                sleep(5000);
                console.log("You dock and disembark!");
                sleep(5000);
                console.log("You head eastward on land.");
                sleep(5000);
                console.log("You pass a small town, where your crew decides to wait until you return.");
				sleep(5000);
				console.log("You continue into the jungle.");
				sleep(5000);
				console.log("Slowly the jungle becomes denser.");
				sleep(5000);
				console.log("You come to a small waterfall with a tiny pond below.");
				sleep(5000);
                var pondQuestion = function(answer) {
					if (answer === "Y" && health === 25) {
						console.log("You investigate the pond but find nothing useful.");
					}
					else if (answer === "Y") {
						console.log("You begin investigating the pond.");
						sleep(1000);
						console.log("As you examine the pond...");
						sleep(1000);
						console.log("You trip and fall inside!");
						sleep(5000);
						if (health > 20) {
							console.log("As you clamber out of the water...");
							sleep(1000);
							console.log("You realize you feel very sluggish.");
							ApplyDamage(3);
							sleep(1000);
						}
						else {
							console.log("As you clamber out of the water...");
							sleep(1000);
							console.log("You realize you feel extremely refreshed!");
							maxHeal();
							sleep(1000);
						}
					}
					else {
						console.log("You decide to leave the pond alone.");
						sleep(1000);
					}
				};
                pondQuestion(prompt("Investigate the Pond?(Y/N)"));
				console.log("You continue on your way.");
                sleep(1000);
            }
            else {
                sleep(3000);
                console.log("You sail further East searching for land.");
                sleep(4000);
                console.log("Night comes and you leave your crew in charge of the ship while you sleep.");
                sleep(2000);
                console.log("You are awaken by the rustle and movement aboard the boat.");
                sleep(2000);
                console.log("Shouts come from above deck!");
                sleep(2000);
                console.log("You race up above deck and find out the ship is headed straight for a whirlpool!");
                sleep(2000);
                console.log("The crew are desperately trying to save the ship, but to no avail.");
                sleep(2000);
                console.log("The ship is torn apart and all sailors are thrown overboard.");
                ApplyDamage(2);
                sleep(2000);
                console.log("Luckily you are able to grab parts of the ship.");
                sleep(2000);
                console.log("You slowly drift at sea.");
                sleep(5000);
                console.log("After hours of being lost at sea, you finally see land.");
                sleep(3000);
                console.log("You land on a small island.");
            }
            sleep(2000);
            console.log("After walking through the jungle.");
            sleep(3000);
            console.log("You come to a clearing in the vegetation.")
        }
        //SOUTHWARD
        else if (direction === "S") {
            console.log("You head into the Desert.");
            sleep(5000);
            console.log("The sun is burning bright.");
            sleep(3000);
            console.log("Your canteen is full.");
            sleep(5000);
            if (Math.random() < 0.34) {
                console.log("The wind blows sand into your eyes.");
                sleep(5000);
                console.log("You use some water to clean out the sand.");
                sleep(2000);
                console.log("A battle call sounds from over the hill in front of you.");
                sleep(2000);
                console.log("You climb up the sandy mound.");
                sleep(2000);
                console.log("You see a small village being raided!");
                sleep(5000);
                console.log("You hear a blade being drawn.");
                sleep(4000);
                console.log("You turn around to see a raider charging at you!");
                sleep(2000);
                while (raiderHealth > 0){
                    if (Math.random() < 0.34) {
                            sleep(1000);
                        console.log("The raider stabs at you with his dagger!");
                            ApplyDamage(2);
                        }
                    else if(Math.random() <= 0.67) {
                        sleep(1000);
                        console.log("The raider slashes at you!");
                        ApplyDamage(1);
                    }
                    else {
                        console.log("You dodged the blade!");
                    }
                    sleep(1000);
                    var raiderFight = function(attack) {
                        console.log("You " + attack + " your sword!");
                        if (attack === "Slash") {
                            sleep(1000);
                            if (Math.random() <= 0.05) {
                                console.log("You critically strike the raider!");
                                raiderDamage(5);
                            }
                            else {
                                console.log("You slash through the raider's armour!");
                                raiderDamage(3);
                            }
                        }
                        else if (attack === "Stab") {
                            if (Math.random() <= 0.01) {
                                console.log("You critically wound the raider!");
                                raiderDamage(5);
                            }
                            else if (Math.random() <= 0.5){
                                console.log("You stab at the raider!");
                                raiderDamage(3);
                            }
                            else {
                                console.log("You hurt the raider!");
                                raiderDamage(1);
                            }
                        }
                        else {
                            if (Math.random() <= 0.01) {
                                console.log("You killed the raider!");
                                raiderDamage(20);
                            }
                            else if (Math.random() <= 0.5){
                                console.log("You swing at the raider!");
                                raiderDamage(3);
                            }
                            else {
                                console.log("You missed!");
                                sleep(1000);
                            }
                        }
                    };
                    raiderFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
                }
                sleep(3000);
                console.log("The raider is dead!");
                sleep(4000);
                console.log("You search the raider and find gold and a potion!");
                findMoney(230);
                findPotion(1);
                sleep(2000);
                userHeal(prompt("Heal with a potion? +5 (Y/N)"));
                sleep(2000);
            } 
			else if(Math.random() <= 0.67) {
                sleep(5000);
				console.log("The heat is pounding down on you.");
				sleep(1000);
				console.log("You follow a trail southward.");
				sleep(1000);
				console.log("Over time you lose the trail.");
				sleep(1000);
				console.log("You continue walking.");
				sleep(1000);
				console.log("The sun is insanely hot.");
				sleep(1000);
				loseWater(1);
				sleep(1000);
				console.log("On the horizon you seen an approaching dust storm.");
				sleep(1000);
				console.log("The storm is approaching very quick.");
				sleep(1000);
				console.log("You take cover from the storm!");
				sleep(1000);
				console.log("The storm arrives and dust and sand blows into your eyes!");
				sleep(3000);
				sleep(5000);
				sleep(3000);
				console.log("The storm clears however you have no idea where you are.");
				sleep(1000);
				console.log("You are overheating from the heat.");
				sleep(1000);
				while (canteen > 0 || canteen > 7) {
					sleep(4000);
					console.log("You have to decide which direction to go.");
					sleep(5000);
					var desertDirections = function(answer) {
						if (answer === "N") {
							if (Math.random < 0.2) {
								console.log("You continue towards what you think is North.");
								sleep(1000);
								console.log("You can't find any recognizable features.");
								sleep(1000);
								console.log("The insane heat parches your throat.");
								sleep(1000);
								loseWater(1);
							}
							else if (Math.random < 0.5) {
								console.log("You continue towards what you think is North.");
								sleep(1000);
								console.log("You pass some small rocks.");
								sleep(1000);
								console.log("You notice how dehydrated you are.");
								sleep(1000);
								loseWater(1);
							}
							else if (Math.random < 0.7) {
								console.log("You continue towards what you think is North");
								sleep(1000);
								console.log("You notice a tiny cactus.");
								sleep(1000);
								console.log("The heat is causing you to sweat.");
								sleep(1000);
								loseWater(1);
							}
							else {
								console.log("You continue towards what you think is North.");
								sleep(1000);
								console.log("You watch a snake slither into the sand.");
								sleep(1000);
								console.log("The heat was even too hot for it.");
								sleep(1000);
								loseWater(1);
							}
						}
						else if (answer === "E") {
							if (Math.random < 0.2) {
								console.log("You continue towards what you think is East.");
								sleep(1000);
								console.log("You scan the desert for any signs of life.");
								sleep(1000);
								console.log("The heat must be too hot for anything to live.");
								sleep(1000);
								loseWater(1);
							}
							else if (Math.random < 0.5) {
								console.log("You continue towards what you think is East.");
								sleep(1000);
								console.log("The desert seems to be endless.");
								sleep(1000);
								console.log("You can feel the sun burn settling in.");
								sleep(1000);
								loseWater(1);
							}
							else if (Math.random < 0.7) {
								console.log("You continue towards what you think is East.");
								sleep(1000);
								console.log("You wonder if anyone has ever made it out of this desert.");
								sleep(1000);
								console.log("You are desperate for water.");
								sleep(1000);
								loseWater(1);
							}
							else {
								console.log("You continue towards what you think is East.");
								sleep(1000);
								console.log("You wonder where the trail went.");
								sleep(1000);
								console.log("The sun is still high in the sky.");
								sleep(1000);
								loseWater(1);
							}
						}
						else if (answer === "S") {
							if (Math.random < 0.05) {
								console.log("You continue towards what you think is South.");
								sleep(1000);
								console.log("You stumble your way towards an Oasis!");
								sleep(1000);
								console.log("The water is crisp and refreshing!");
								maxHeal();
								sleep(1000);
								findWater();
							}
							else if (Math.random < 0.2) {
								console.log("You continue towards what you think is South.");
								sleep(1000);
								console.log("You see water up ahead!");
								sleep(5000);
								console.log("Sadly it was only a mirage...");
								sleep(1000);
								loseWater(1);
							}
							else if (Math.random < 0.5) {
								console.log("You continue towards what you think is South.");
								sleep(1000);
								console.log("In the distance you see three coyotes.");
								sleep(1000);
								console.log("You watch as they disappear into the horizon.");
								sleep(1000);
								loseWater(1);
							}
							else if (Math.random < 0.7) {
								console.log("You continue towards what you think is South.");
								sleep(1000);
								console.log("The sand hasn't changed a bit.");
								sleep(1000);
								console.log("The sun is still high in the sky.");
								sleep(1000);
								loseWater(1);
							}
							else {
								console.log("You continue towards what you think is South.");
								sleep(1000);
								console.log("You lose your train of thought and look behind you for your footprints.");
								sleep(1000);
								console.log("There aren't any footprints in the sand.");
								sleep(1000);
								loseWater(1);
							}
						}
						else {
							if (Math.random < 0.2) {
								console.log("You continue towards what you think is West.");
								sleep(1000);
								console.log("You see the dust storm in the distance.");
								sleep(1000);
								console.log("It's too far to be a threat again.");
								sleep(1000);
								loseWater(1);
							}
							else if (Math.random < 0.5) {
								console.log("You continue towards what you think is West.");
								sleep(1000);
								console.log("The sun is burning you.");
								sleep(1000);
								console.log("You are extremely dehydrated.");
								sleep(1000);
								loseWater(1);
							}
							else if (Math.random < 0.7) {
								console.log("You continue towards what you think is West.");
								sleep(1000);
								console.log("The lack of water is disorientating you.");
								sleep(1000);
								console.log("You can't remember which direction you were going.");
								sleep(1000);
								loseWater(1);
							}
							else {
								console.log("You continue towards what you think is West.");
								sleep(1000);
								console.log("The heat is giving you a headache.");
								sleep(1000);
								console.log("You need to get out of the sun as soon as possible.");
								sleep(1000);
								loseWater(1);
							}
						}
					};
					desertDirections(prompt("Which way would you like to go? (N/E/S/W)"));
					sleep(1000);
				}
				if (canteen > 7) {

				}
				else {
					if (canteen < 7) {
					desertDirections(prompt("Which way would you like to go? (N/E/S/W)"));
					sleep(1000);
					}
					if (canteen < 7) {
					desertDirections(prompt("Which way would you like to go? (N/E/S/W)"));
					sleep(1000);
					}
					if (canteen < 7) {
					desertDirections(prompt("Which way would you like to go? (N/E/S/W)"));
					sleep(1000);
					}
					if (canteen < 7) {
					desertDirections(prompt("Which way would you like to go? (N/E/S/W)"));
					sleep(1000);
					}
					console.log("You finally see civilization in the distance!");
                    sleep(2000);
                    console.log("A glimmer of hope runs through your body and empowers you to continue");
                    sleep(5000);
                    console.log("You reach the town, and head straight for their well.");
                    findWater();
                    console.log("You get back on the path and dare not to leave it.");
				}
            }
			else {
                console.log("As you are walking, you suddenly trigger a trap door!");
                sleep(5000);
                if (Math.random() < 0.8) {
                    sleep(1000);
                    console.log("The trapdoor opens beneath you!");
                    sleep(1000);
                    console.log("You fall down into what looks to be an ancient tomb!");
                    ApplyDamage(1);
                    sleep(1000);
                    console.log("A undead mummy throws the cover off its grave!");
                    while (mummyHealth > 0) {
                        if (Math.random() < 0.34) {
                            sleep(1000);
                            console.log("It scratches you!");
                            ApplyDamage(2);
                        }
                        else if(Math.random() <= 0.67) {
                            sleep(1000);
                            console.log("It throws a poisoned dagger at you!");
                            if (Math.random() <= 0.05) {
                                sleep(1000);
                                console.log("The dagger catches you in the arm!");
                                ApplyDamage(3);
                            }
                            else {
                                sleep(1000);
                                console.log("The dagger misses!")
                            }
                        }
                        else {
                            sleep(1000);
                            console.log("You hurt yourself on tomb traps!");
                            ApplyDamage(2);
                        }
                        sleep(1000);
                        console.log("Now is your chance!");
                        var tombFight = function(attack) {
                            console.log("You " + attack + " your sword!");
                            if (attack === "Slash") {
                                sleep(1000);
                                console.log("You cut the mummy up!");
                                mummyDamage(4);
                            }
                            else if (attack === "Stab") {
                                sleep(1000);
                                console.log("You seriously hurt the mummy!");
                                mummyDamage(6);
                            }
                            else {
                                sleep(1000);
                                console.log("The mummy is hurt by your attack");
                                mummyDamage(2);
                            }
                        };
                        tombFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
                    }
                    sleep(1000);
                    console.log("The mummy is dead.");
                    sleep(1000);
                    userHeal(prompt("Heal with a potion? +5 (Y/N)"));
                    sleep(1000);
                    console.log("You find gold and a potions in the tomb.");
                    findMoney(120);
                    findPotion(2);
                }
                else {
                    console.log("You catch yourself on the ledge, and climb out!");
                    sleep(1000);
                    console.log("It looks like almost certain death in the dark pit.");
                    sleep(1000);
                    console.log("You continue walking.");
                }
            }
            sleep(2000);
            console.log("You continue walking through the Desert.");
            sleep(2000);
            if (Math.random() < 0.34) {
                console.log("You find a small town in the desert.");
                var desertTownInvestigate = function(search) {
                    if (search === "Y") {
                        sleep(1000);
                        console.log("You decide to search the town.");
                        sleep(4000);
                        console.log("As you walk through the town, you find a sword stall.");
                        sleep(1000);
                        console.log("He welcomes you to his shop and tells you he just recieved a new shipment of swords.");
                        sleep(2000);
                        console.log("Your Gold: " + gold);
                        console.log("Price: 120 Gold");
                        sleep(1000);
                        var desertSwordShop = function(answer) {
                            if (answer === "Y" && gold >= 120) {
                                console.log("You buy the Iron Sword!");
                                sleep(1000);
                                loseMoney(120);
                                newSwordDamage(3);
                                sleep(2000);
                                console.log("You leave the store.")
                            }
                            else if (answer === "Y" && gold < 120) {
                                console.log("You don't have enough money to buy the sword.");
                                sleep(2000);
                                console.log("You leave the store.")
                            }
                            else {
                                console.log("You don't want to buy the sword.");
                                sleep(1000);
                                console.log("Desperatly, the clerk lowers the price to 50 Gold.");
                                sleep(1000);
                                var desertFightIronShop = function(answer) {
                                    if (answer === "Y" && gold >= 50) {
                                        console.log("You buy the Iron Sword!");
                                        sleep(1000);
                                        loseMoney(50);
                                        newSwordDamage(3);
                                        sleep(2000);
                                        console.log("You leave the store.")
                                    }
                                    else if (answer === "Y" && gold < 50) {
                                        console.log("You don't have enough money to buy the sword.");
                                        sleep(2000);
                                        console.log("You leave the store.")
                                    }
                                    else {
                                        console.log("You don't want to buy the sword.");
                                        sleep(2000);
                                        if (Math.random() < 0.06) {
                                            console.log("You have angered the merchant.");
                                            sleep(1000);
                                            console.log("The merchant pulls a longsword on you!");
                                            while (merchantHealth > 0) {
                                                if (Math.random() < 0.34) {
                                                    sleep(1000);
                                                    console.log("He swings at you!");
                                                    ApplyDamage(2);
                                                }
                                                else if(Math.random() <= 0.67) {
                                                    sleep(1000);
                                                    console.log("He throws some of his daggers at you!");
                                                    ApplyDamage(2);
                                                }
                                                else {
                                                    sleep(1000);
                                                    console.log("He stabs at you with his sword!");
                                                    ApplyDamage(2);
                                                }
                                                sleep(1000);
                                                console.log("Now is your chance!");
                                                var merchantFight = function(attack) {
                                                    console.log("You " + attack + " your sword!");
                                                    if (attack === "Slash") {
                                                        sleep(1000);
                                                        if (Math.random() <= 0.03) {
                                                            console.log("You slash at the merchant!");
                                                            merchantDamage(8);
                                                        }
                                                        else {
                                                            console.log("You slice at his armour!");
                                                            merchantDamage(4);
                                                        }
                                                    }
                                                    else if (attack === "Stab") {
                                                        if (Math.random() <= 0.01) {
                                                            console.log("You stab at the merchant!");
                                                            merchantDamage(2);
                                                        }
                                                        else if (Math.random() <= 0.5){
                                                            console.log("You stab at the merchant!");
                                                            merchantDamage(3);
                                                        }
                                                        else {
                                                            console.log("You hurt the merchant!");
                                                            merchantDamage(1);
                                                        }
                                                    }
                                                    else {
                                                        if (Math.random() <= 0.75){
                                                            console.log("You swing at the merchant!");
                                                            merchantDamage(5);
                                                        }
                                                        else {
                                                            console.log("You missed!");
                                                            sleep(1000);
                                                        }
                                                    }
                                                };
                                                merchantFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
                                            }
                                            sleep(1000);
                                            console.log("You flee from the market.");
                                            sleep(1000);
                                            userHeal(prompt("Heal with a potion? +5 (Y/N)"));
                                        }
                                        else {
                                            sleep(1000);
                                            console.log("You leave the store.")
                                        }
                                    }
                                };
                                desertFightIronShop(prompt("Buy the Sword? (Y/N)"));
                            }
                        };
                        desertSwordShop(prompt("Buy the Sword? (Y/N)"));
                    }
                    else {
                        sleep(1000);
                        console.log("You decide to keep moving.");
                    }

                };
                desertTownInvestigate(prompt("Investigate the town? (Y/N)"));
            }
            else if(Math.random() <= 0.67) {
                console.log("You find a small town in the desert.");
                sleep(1000);
                console.log("You enter the town and start searching for shops.");
                sleep(1000);
                console.log("You turn down an alley.");
                sleep(1000);
                console.log("A man at the end of the alley turns and starts coming towards you.");
                sleep(1000);
                console.log("You notice you've walked into an assassin's trap.");
                while (assassinHealth > 0) {
                    if (Math.random() >= 0.25) {
                        sleep(1000);
                        console.log("He stabs at you!");
                        ApplyDamage(4);
                    }
                    else if (Math.random() >= 0.4) {
                        sleep(1000);
                        console.log("He throws a blade at you!");
                        ApplyDamage(2)
                    }
                    else if (Math.random() >= 0.85) {
                        sleep(1000);
                        console.log("He swings at you!");
                        ApplyDamage(3);
                    }
                    else {
                        sleep(1000);
                        console.log("He missed!")
                    }
                    console.log("Now is your chance!");
                    var assassinFight = function(attack) {
                        if (attack === "Slash") {
                            if (Math.random() <= 0.34) {
                                sleep(1000);
                                console.log("You slash at the Assassin!");
                                assassinDamage(4);
                            }
                            else if (Math.random() <= 0.76) {
                                sleep(1000);
                                console.log("You hurt the Assassin!");
                                assassinDamage(2);
                            }
                            else {
                                sleep(1000);
                                console.log("You cut the Assassin.");
                                assassinDamage(3);
                            }
                        }
                        else if (attack === "Stab") {
                            if (Math.random() <= 0.34) {
                                sleep(1000);
                                console.log("You stab at the Assassin.");
                                assassinDamage(3);
                            }
                            else if (Math.random() <= 0.56) {
                                sleep(1000);
                                console.log("You puncture the Assassin's armour.");
                                assassinDamage(6);
                            }
                            else {
                                sleep(1000);
                                console.log("The Assassin dodges your attack.");
                            }
                        }
                        else {
                            if (Math.random() <= 0.34) {
                                sleep(1000);
                                console.log("You swing your sword!");
                                assassinDamage(3);
                            }
                            else if (Math.random() <= 0.66) {
                                sleep(1000);
                                console.log("You cut the Assassin!");
                                assassinDamage(4);
                            }
                            else {
                                sleep(1000);
                                console.log("You manage to hit the assassin.");
                                assassinDamage(2);
                            }
                        }
                    };
                    assassinFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
                }
                sleep(1000);
            }
            else {
                sleep(3000);
                console.log("You find a trail and follow it.");
                sleep(4000);
                console.log("Along the path you find a merchant's cart. It sits alone.");
                var cartQuestion = function(answer) {
                    if (answer === "Y") {
                        sleep(1000);
                        console.log("You search the cart.");
                        if (Math.random() < 0.5) {
                            sleep(1000);
                            console.log("Someone yells at you!");
                            sleep(1000);
                            console.log("It was a decoy!");
                            sleep(1000);
                            console.log("A mugger approaches!");
                            while (muggerHealth >= 6) {
                                if (Math.random() < 0.34) {
                                    sleep(1000);
                                    console.log("He stabs at you!");
                                    ApplyDamage(3);
                                }
                                else if(Math.random() <= 0.67) {
                                    sleep(1000);
                                    console.log("He swings his sword at you!");
                                    ApplyDamage(2);
                                }
                                else {
                                    sleep(1000);
                                    console.log("He missed his attack!");
                                }
                                var cartFight = function(attack) {
                                    console.log("You " + attack + " your sword!");
                                    if (attack === "Slash") {
                                        sleep(1000);
                                        if (Math.random() <= 0.03) {
                                            console.log("You furiously slash your sword!");
                                            muggerDamage(5);
                                        }
                                        else {
                                            console.log("You slash at the mugger's armour!");
                                            muggerDamage(4);
                                        }
                                    }
                                    else if (attack === "Stab") {
                                        if (Math.random() <= 0.01) {
                                            console.log("You stab your sword!");
                                            muggerDamage(2);
                                        }
                                        else if (Math.random() <= 0.5){
                                            console.log("You stab at the mugger!");
                                            muggerDamage(3);
                                        }
                                        else {
                                            console.log("You hurt the mugger!");
                                            muggerDamage(1);
                                        }
                                    }
                                    else {
                                        if (Math.random() <= 0.01) {
                                            console.log("You critically wound the mugger!");
                                            muggerDamage(40);
                                        }
                                        else if (Math.random() <= 0.6){
                                            console.log("You swing at the mugger!");
                                            muggerDamage(5);
                                        }
                                        else {
                                            console.log("You missed!");
                                            sleep(1000);
                                        }
                                    }
                                };
                                cartFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
                            }
                            sleep(1000);
                            console.log("You continue searching the pack.");
                            sleep(1000);
                            console.log("Inside the pack you find gold, potions, and a new sword!");
                            findMoney(75);
                            findPotion(2);
                            newSwordDamage(4);
                            sleep(1000);
                            console.log("You took everything useful from the cart.");
                        }
                        else {
                            console.log("Inside the cart you find gold, potions, and a new sword!");
                            findMoney(75);
                            findPotion(2);
                            newSwordDamage(4);
                            sleep(1000);
                            console.log("You took everything useful from the cart.")
                        }
                    }
                    else {
                        sleep(1000);
                        console.log("You leave the cart alone.");
                    }
                };
                cartQuestion(prompt("Search the Cart? (Y/N)"));
            }
            sleep(2000);
            console.log("You follow a trail up to the peak of a mountain.");
            sleep(5000);
            console.log("You reach the peak!");
            sleep(3000);
            console.log("You come to a clearing on the peak.");
        }
        //WESTWARD
        else {
            console.log("You head west, into a wild forest!");
            sleep(5000);
            console.log("The forest is teeming with life.");
            sleep(3000);
            console.log("You walk for an uneventful while...");
            sleep(5000);
            if (Math.random() < 0.34) {
                console.log("The wind blows quietly...");
                sleep(5000);
                console.log("Its too quiet...");
                sleep(2000);
                console.log("An arrow whistles past!");
                sleep(2000);
                console.log("A bandit appears!");
                sleep(1000);
                console.log("You are being ambushed!");
                sleep(1000);
                if (Math.random() <= 0.01) {
                    console.log("An arrow strikes you!");
                    ApplyDamage(1);
                }
                else {
                    console.log("An arrow shoots past your face!");
                }
                sleep(1000);
                console.log("You locate your attacker!");
                sleep(1000);
                console.log("You charge them!");
                sleep(1000);
                console.log("The bandit pulls out a dagger!");
                sleep(1000);
                while (banditHealth > 0){
                    if (Math.random() < 0.34) {
                            sleep(1000);
                        console.log("The bandit stabs at you with his dagger!");
                            ApplyDamage(2);
                            sleep(1000);
                            console.log("Ouch!");
                        }
                    else if(Math.random() <= 0.67) {
                        sleep(1000);
                        console.log("The bandit slashes at you!");
                        ApplyDamage(1);
                        sleep(1000);
                        console.log("That stings!");
                    }
                    else {
                        console.log("You dodged the dagger!");
                    }
                    sleep(1000);
                    var banditfight = function(attack) {
                        console.log("You " + attack + " your sword!");
                        if (attack === "Slash") {
                            sleep(1000);
                            if (Math.random() <= 0.05) {
                                console.log("You critically strike the bandit!");
                                banditDamage(5);
                            }
                            else {
                                console.log("You slash through the bandit's armour!");
                                banditDamage(3);
                            }
                        }
                        else if (attack === "Stab") {
                            if (Math.random() <= 0.01) {
                                console.log("You critically wound the bandit!");
                                banditDamage(5);
                            }
                            else if (Math.random() <= 0.5){
                                console.log("You stab at the bandit!");
                                banditDamage(3);
                            }
                            else {
                                console.log("You hurt the bandit!");
                                banditDamage(1);
                            }
                        }
                        else {
                            if (Math.random() <= 0.01) {
                                console.log("You killed the bandit!");
                                banditDamage(20);
                            }
                            else if (Math.random() <= 0.5){
                                console.log("You swing at the bandit!");
                                banditDamage(3);
                            }
                            else {
                                console.log("You missed!");
                                sleep(1000);
                            }
                        }
                    };
                    banditfight(prompt("You ready your sword! (Slash/Stab/Swing)"));
                }
                sleep(3000);
                console.log("The Bandit is dead!");
                sleep(4000);
                console.log("You search the bandit and find gold and a potion!");
                findPotion(1);
                sleep(2000);
                userHeal(prompt("Heal with a potion? +5 (Y/N)"));
                sleep(2000);
            } else if(Math.random() <= 0.67) {
                console.log("The forest is really starting to get thick.");
                sleep(1000);
                console.log("You need to use your sword to cut through the branches.");
                sleep(1000);
                var thickForest = function(answer) {
                    if (answer === "Y") {
                        console.log("You use your sword to chop through the brush.");
                        sleep(1000);
                        console.log("After a while of cutting...");
                        sleep(1000);
                        console.log("You push through the brush only to be greeted by a giant spider.");
                        sleep(1000);
                        console.log("The spider bites you!");
                        becomePoisoned();
                        sleep(1000);
                        console.log("You can feel poison going through your body!");
                        while (spiderHealth > 0) {
                            poisonDamage();
                            if (Math.random() < 0.34) {
                                sleep(1000);
                                console.log("It scratches you!");
                                ApplyDamage(2);
                                sleep(1000);
                            }
                            else if(Math.random() <= 0.67) {
                                sleep(1000);
                                console.log("It tries to bite you!");
                                sleep(2000);
                                console.log("Luckily it missed!");
                            }
                            else {
                                console.log("The spider hits you.");
                                ApplyDamage(1);
                            }
                            sleep(1000);
                            console.log("Now is your chance!");
                            var spiderFight = function(attack) {
                                if (attack === "Slash") {
                                    if (Math.random() <= 0.25) {
                                        sleep(1000);
                                        console.log("You slash the spiders legs!");
                                        spiderDamage(5);
                                    }
                                    else if (Math.random() <= 0.5) {
                                        sleep(1000);
                                        console.log("You seriously hurt the spider!");
                                        spiderDamage(2);
                                    }
                                }
                                else if (attack === "Stab") {
                                    if (Math.random() <= 0.25) {
                                        sleep(1000);
                                        console.log("You puncture the spider!");
                                        spiderDamage(5);
                                    }
                                    else if (Math.random() <= 0.5) {
                                        sleep(1000);
                                        console.log("You stab at the spider!");
                                        spiderDamage(2);
                                    }
                                    else {
                                        sleep(1000);
                                        console.log("You spider is slightly hurt.");
                                        spiderDamage(2);
                                    }
                                }
                                else {
                                    if (Math.random() <= 0.2) {
                                        sleep(1000);
                                        console.log("You chop one of its legs off!");
                                        spiderDamage(8);
                                    }
                                    else if (Math.random() <= 0.5) {
                                        sleep(1000);
                                        console.log("You swing at the spider!");
                                        spiderDamage(4);
                                    }
                                    else {
                                        sleep(1000);
                                        console.log("You miss the spider!");
                                    }
                                }
                            };
                            spiderFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
                        }
                        sleep(1000);
                        console.log("You kill the spider!");
                        sleep(1000);
                        console.log("You quickly drink a potion to cure the poison");
                        ApplyHealing();
                        healPoison();
                        sleep(1000);
                        console.log("You quickly get out of the thick forest.");
                    }
                    else {
                        sleep(1000);
                        console.log("You find and alternate route.");
                    }
                };
                thickForest(prompt("Continue through the thick forest?(Y/N)"))
            } else {
                console.log("Suddenly a giant brown bear enters the clearing!");
                sleep(1000);
                if (Math.random() < 0.6) {
                    sleep(1000);
                    console.log("The bear has seen you!");
                    sleep(1000);
                    console.log("He charges you!");
                    while (bearHealth > 0) {
                        if (Math.random() < 0.34) {
                            sleep(1000);
                        console.log("It scratches you!");
                            ApplyDamage(2);
                            sleep(1000);
                            console.log("Ouch!");
                        }
                        else if(Math.random() <= 0.67) {
                            sleep(1000);
                            console.log("It tries to bite you!");
                            sleep(2000);
                            console.log("Luckily it missed!");
                        }
                        else {
                            console.log("The bear roars ferociously trying to scare you off!");
                        }
                        sleep(1000);
                        console.log("Now is your chance!");
                        var bearfight = function(attack) {
                            console.log("You " + attack + "your sword!");
                        };
                        bearfight(prompt("You ready your sword! (Slash/Stab/Swing)"));
                        if (Math.random() <= 0.25) {
                            sleep(1000);
                            console.log("You cut the bear!");
                            bearDamage(2);
                        }
                        else if (Math.random() <= 0.5) {
                            sleep(1000);
                            console.log("You seriously hurt the bear!");
                            bearDamage(4);
                        }
                        else if (Math.random() <= 0.75) {
                            sleep(1000);
                            console.log("The bear is mildly hurt by your attack!");
                            bearDamage(2);
                        }
                        else {
                            sleep(1000);
                            console.log("You missed!");
                        }
                    }
                    sleep(1000);
                    console.log("The bear is dead.");
                    sleep(1000);
                    userHeal(prompt("Heal with a potion? +5 (Y/N)"));
                }
                else {
                    sleep(4000);
                    console.log("The bear hasn't seen you!");
                    sleep(2000);
                    console.log("You carefully sneak away.");
                    sleep(6000);
                    console.log("You got away from the bear!");
                }
            }
            sleep(2000);
            console.log("You continue walking into the forest.");
            sleep(2000);
            if (Math.random() < 0.34) {
                console.log("You find a small shack in the forest.");
                var shackInvestigate = function(search) {
                    if (search === "Y") {
                        sleep(1000);
                        console.log("You decide to search the house!");
                        sleep(4000);
                        console.log("Inside you find a tiny shop with an old merchant!");
                        sleep(1000);
                        console.log("He welcomes you to his shop and tells you he just received a new iron sword!");
                        sleep(2000);
                        console.log("Your Gold: " + gold);
                        console.log("Price: 80 Gold");
                        sleep(1000);
                        var ironSwordShop = function(answer) {
                            if (answer === "Y" && gold >= 80) {
                                console.log("You buy the Iron Sword!");
                                sleep(1000);
                                loseMoney(80);
                                newSwordDamage(3);
                                sleep(2000);
                                console.log("You leave the store.")
                            }
                            else if (answer === "Y" && gold < 80) {
                                console.log("You don't have enough money to buy the sword.");
                                sleep(2000);
                                console.log("You leave the store.")
                            }
                            else {
                                console.log("You don't want to buy the sword.");
                                sleep(1000);
                                console.log("Desperately, the clerk lowers the price to 50 Gold.");
                                sleep(1000);
                                var loweredPriceIronShop = function(answer) {
                                    if (answer === "Y" && gold >= 70) {
                                        console.log("You buy the Iron Sword!");
                                        sleep(1000);
                                        loseMoney(70);
                                        newSwordDamage(3);
                                        sleep(2000);
                                        console.log("You leave the store.")
                                    }
                                    else if (answer === "Y" && gold < 70) {
                                        console.log("You don't have enough money to buy the sword.");
                                        sleep(2000);
                                        console.log("You leave the store.");
                                    }
                                    else {
                                        console.log("You don't want to buy the sword.");
                                        sleep(2000);
                                        console.log("You leave the store.");
                                    }
                                };
                                loweredPriceIronShop(prompt("Buy the Sword? (Y/N)"));
                            }
                        };
                        ironSwordShop(prompt("Buy the Sword? (Y/N)"));
                    }
                    else {
                        sleep(1000);
                        console.log("You decide to keep moving.");
                    }

                };
                shackInvestigate(prompt("Investigate the shack? (Y/N)"));
            }
            else if(Math.random() <= 0.67) {
                console.log("You find a giant tree in the forest!");
                sleep(1000);
                var giantTree = function(answer) {
                    if (answer === "Y") {
                        sleep(3000);
                        console.log("After climbing into the tree you find a small loot chest.");
                        sleep(1000);
                        console.log("Inside the chest you find gold and a potion.");
                        findMoney(55);
                        findPotion(1);
                        sleep(1000);
                        console.log("You also find an ancient steel sword.");
                        var ancientSwordQuestion = function(answer) {
                            if (answer === "Y") {
                                sleep(1000);
                                newSwordDamage(4);
                                console.log("As you take the sword, the tree comes to life!");
                                while (entHealth > 0) {
                                    if (Math.random() < 0.34) {
                                        sleep(1000);
                                        console.log("It scratches you!");
                                        ApplyDamage(2);
                                    }
                                    else if(Math.random() <= 0.67) {
                                        sleep(1000);
                                        console.log("It swings at you with its branches!");
                                        ApplyDamage(2);
                                    }
                                    else {
                                        sleep(1000);
                                        console.log("The Ent smashes you with its branches!");
                                        ApplyDamage(2);
                                    }
                                    sleep(1000);
                                    console.log("Now is your chance!");
                                    var entFight = function(attack) {
                                        console.log("You " + attack + " your sword!");
                                        if (attack === "Slash") {
                                            sleep(1000);
                                            if (Math.random() <= 0.03) {
                                                console.log("You cut off a branch of the Ent!");
                                                entDamage(8);
                                            }
                                            else {
                                                console.log("You slash at the Ent's bark!");
                                                entDamage(4);
                                            }
                                        }
                                        else if (attack === "Stab") {
                                            if (Math.random() <= 0.01) {
                                                console.log("You stab at the Ent!");
                                                entDamage(2);
                                            }
                                            else if (Math.random() <= 0.5){
                                                console.log("You stab at the Ent!");
                                                entDamage(3);
                                            }
                                            else {
                                                console.log("You hurt the Ent!");
                                                entDamage(1);
                                            }
                                        }
                                        else {
                                            if (Math.random() <= 0.01) {
                                                console.log("You cut the Ent in half!");
                                                entDamage(40);
                                            }
                                            else if (Math.random() <= 0.6){
                                                console.log("You swing at the Ent!");
                                                entDamage(5);
                                            }
                                            else {
                                                console.log("You missed!");
                                                sleep(1000);
                                            }
                                        }
                                    };
                                    entFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
                                }
                                sleep(1000);
                                console.log("You killed the Ent Spirit");
                                sleep(1000);
                                console.log("The Spirit leaves the tree.");
                                sleep(1000);
                                userHeal(prompt("Heal with a potion? +5 (Y/N)"));
                            }
                            else {
                                sleep(1000);
                                console.log("You decide the sword is probably sacred and decide not to take it.");
                                sleep(1000);
                                console.log("You climb back down the tree.");
                            }
                        };
                        ancientSwordQuestion(prompt("Take the Sword? (Y/N)"));
                    }
                    else {
                    sleep(1000);
                    console.log("You decide the tree is possibly sacred and don't disturb it.");
                    }
                };
                giantTree(prompt("Investigate the Tree? (Y/N)"));
                sleep(1000);
            }
            else {
                sleep(3000);
                console.log("You find a path and start following it.");
                sleep(4000);
                console.log("Along the path you find a small pack. It sits alone.");
                var packQuestion = function(answer) {
                    if (answer === "Y") {
                        sleep(1000);
                        console.log("You search the pack.");
                        if (Math.random() < 0.5) {
                            sleep(1000);
                            console.log("Someone yells at you!");
                            sleep(1000);
                            console.log("The owner of the pack draws his sword!");
                            sleep(1000);
                            console.log("He believes you are a thief and will have no words with you.");
                            sleep(1000);
                            console.log("The only way out of this is a fight!");
                            while (manHealth >= 6) {
                                if (Math.random() < 0.34) {
                                        sleep(1000);
                                        console.log("He stabs at you!");
                                        ApplyDamage(3);
                                    }
                                    else if(Math.random() <= 0.67) {
                                        sleep(1000);
                                        console.log("He swings his sword at you!");
                                        ApplyDamage(2);
                                    }
                                    else {
                                        sleep(1000);
                                        console.log("He missed his attack!");
                                    }
                                var packFight = function(attack) {
                                    console.log("You " + attack + " your sword!");
                                    if (attack === "Slash") {
                                        sleep(1000);
                                        if (Math.random() <= 0.03) {
                                            console.log("You furiously slash your sword!");
                                            manDamage(5);
                                        }
                                        else {
                                            console.log("You slash at the man's armour!");
                                            manDamage(4);
                                        }
                                    }
                                    else if (attack === "Stab") {
                                        if (Math.random() <= 0.01) {
                                            console.log("You stab your sword!");
                                            entDamage(2);
                                        }
                                        else if (Math.random() <= 0.5){
                                            console.log("You stab at the man!");
                                            entDamage(3);
                                        }
                                        else {
                                            console.log("You hurt the man!");
                                            entDamage(1);
                                        }
                                    }
                                    else {
                                        if (Math.random() <= 0.01) {
                                            console.log("You critically wound the man!");
                                            manDamage(40);
                                        }
                                        else if (Math.random() <= 0.6){
                                            console.log("You swing at the man!");
                                            manDamage(5);
                                        }
                                        else {
                                            console.log("You missed!");
                                            sleep(1000);
                                        }
                                    }
                                };
                                packFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
                            }
                            sleep(1000);
                            console.log("The man yields and flees!");
                            sleep(1000);
                            console.log("You continue searching the pack.");
                            sleep(1000);
                            console.log("Inside the pack you find gold, potions, and a new sword!");
                            findMoney(75);
                            findPotion(2);
                            newSwordDamage(4);
                            sleep(1000);
                            console.log("You took everything useful from the pack.");
                        }
                        else {
                            console.log("Inside the pack you find gold, potions, and a new sword!");
                            findMoney(75);
                            findPotion(2);
                            newSwordDamage(4);
                            sleep(1000);
                            console.log("You took everything useful from the pack.");
                        }
                    }
                    else {
                        sleep(1000);
                        console.log("You leave the pack alone.");
                    }
                };
                packQuestion(prompt("Search the pack? (Y/N)"));
                sleep(1000);
                console.log("You continue walking.");
            }
            sleep(2000);
            console.log("You continue walking into the forest.");
            sleep(2000);
            console.log("You find a large clearing in the forest!");
        }
        //BOSS FIGHT
        sleep(1000);
        console.log("A large rock sits in the center.");
        sleep(1000);
        console.log("You approach the rock.");
        sleep(1000);
        console.log("Sticking out of the rock is the Golden Sword!!!");
        sleep(5000);
        console.log("After a few minutes you pull the sword out!");
        sleep(2000);
        newSwordDamage(8);
        console.log("The rock begins to shake!");
        sleep(1000);
        console.log("The Sword's protector emerges from beneath the rock!");
        sleep(1000);
        console.log("It charges at you!");
        sleep(1000);
        console.log("You can't hurt it until it's magical shield is away!");
        sleep(2000);
        while (protectorShield > 0) {
            if (Math.random() < 0.34) {
                sleep(1000);
                console.log("It stabs at you!");
                ApplyDamage(3);
            }
            else if(Math.random() <= 0.8) {
                sleep(1000);
                console.log("It swings at you with its sword!");
                ApplyDamage(2);
            }
            else {
                sleep(1000);
                console.log("It attacks you with magic!");
                ApplyDamage(4);
            }
            sleep(1000);
            console.log("Now is your chance!");
            var bossShieldFight = function(attack) {
                console.log("You " + attack + " your sword!");
                if (attack === "Slash") {
                    sleep(1000);
                    if (Math.random() <= 0.15) {
                        console.log("The Shield absorbs all the damage!");
                        protectorShieldDamage(5);
                    }
                    else if (Math.random() <= 0.4) {
                        console.log("You slash at the Protector's Shield!");
                        protectorShieldDamage(3);
                    }
					else if (Math.random() <= 0.7) {
                        console.log("You cut at the Protector's Shield!");
                        protectorShieldDamage(2);
                    }
					else {
						console.log("The sword bounces off the Shield!");
                        protectorShieldDamage(1);
					}
                }
                else if (attack === "Stab") {
                    if (Math.random() <= 0.2) {
                        console.log("You stab at the Shield!");
                        protectorShieldDamage(4);
                    }
                    else if (Math.random() <= 0.35){
                        console.log("You stab at the Protector!");
                        protectorShieldDamage(3);
                    }
					else if (Math.random() <= 0.6){
                        console.log("You stab into the Shield!");
                        protectorShieldDamage(2);
                    }
                    else {
                        console.log("You weaken the Shield!");
                        protectorShieldDamage(2);
                    }
                }
                else {
                    if (Math.random() <= 0.12) {
                        console.log("You slice at the shield!");
                        protectorShieldDamage(5);
                    }
					else if (Math.random() <= 0.4){
                        console.log("Your swing your sword into the Shield!");
                        protectorShieldDamage(3);
                    }
                    else if (Math.random() <= 0.6){
                        console.log("You Hit the Protector's Shield!");
                        protectorShieldDamage(2);
                    }
                    else {
                        console.log("You missed!");
                        sleep(1000);
                    }
                }
            };
            bossShieldFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
        }
        sleep(1000);
        console.log("The Protector is stunned momentarily!");
        sleep(2000);
        userHeal(prompt("Heal with a potion? +5 (Y/N)"));
        while (protectorHealth > 0) {
            if (Math.random() < 0.3) {
                sleep(1000);
                console.log("It stabs at you!");
                ApplyDamage(3);
            }
            else if(Math.random() <= 0.5) {
                sleep(1000);
                console.log("It swings at you with its sword!");
                ApplyDamage(2);
            }
			else if(Math.random() <= 0.1) {
                sleep(1000);
                console.log("It uses dark magic against you!");
                ApplyDamage(4);
            }
			else if(Math.random() <= 0.75) {
                sleep(1000);
                console.log("It attacks with its sword.");
                ApplyDamage(2);
            }
            else {
                sleep(1000);
                console.log("It attacks you with magic!");
                ApplyDamage(2);
            }
            sleep(1000);
            console.log("Now is your chance!");
            var bossFight = function(attack) {
                console.log("You " + attack + " your sword!");
                if (attack === "Slash") {
                    sleep(1000);
                    if (Math.random() <= 0.3) {
                        console.log("You slash the Protector's armour!");
                        protectorDamage(4);
                    }
                    else if (Math.random() <= 0.6) {
                        console.log("You slash at the Protector!");
                        protectorDamage(3);
                    }
                    else {
                        console.log("You slash at the Protector!");
                        protectorDamage(1);
                    }
                }
                else if (attack === "Stab") {
                    if (Math.random() <= 0.3) {
                        console.log("You critically strike the Protector!");
                        protectorDamage(4);
                    }
                    else if (Math.random() <= 0.6){
                        console.log("You stab at the Protector!");
                        protectorDamage(3);
                    }
                    else {
                        console.log("You weaken the Protector!");
                        protectorDamage(2);
                    }
                }
                else {
                    if (Math.random() <= 0.1) {
                        console.log("You slice at the Protector!");
                        protectorDamage(5);
                    }
                    else if (Math.random() <= 0.6){
                        console.log("You hit the Protector!");
                        protectorDamage(2);
                    }
                    else {
                        console.log("You missed!");
                        sleep(1000);
                    }
                }
            };
            bossFight(prompt("You ready your sword! (Slash/Stab/Swing)"));
        }
        sleep(5000);
        console.log("The Protector disintegrates!");
        sleep(2000);
        console.log("You obtained the Legend's Sword!");
        sleep(2000);
        console.log("You have beat the game!");
        sleep(10000);
        gameRestart(prompt("Restart? (Y/N)"));
    };
    directions(prompt("Which way would you like to go? (N/E/S/W)"));
}

game();
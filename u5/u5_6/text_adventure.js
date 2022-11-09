alert("You're camping alone in the Springwood Forest. Unfortunately, you had the best of luck and got lost. Now you're in front of a fork in a trail, trying to remember which way you came from.")

let left_or_right = prompt("You can (1) go to the left trail that looks a little suspicious or (2) go to the right trail that looks safer.");

if (left_or_right == 1) {
    let escape_or_hide = prompt("You tentatively travel down the narrow, winding road. It's starting to get a little dark—or is it the trees? You start to feel like something is watching you, so you turn around. A lone, hungry-looking wolf is eyeing you like you're it's next meal. Do you (1) have a piece of meat on you for some reason, so you toss it as a distraction and run for your life, or (2) scramble up a tree and hang on for dear life?");

    if (escape_or_hide == 1) {
        let berry_or_noberry = prompt("While you managed to escape the wolf, you ran so blindly that you lost the trail. You're very hungry and thirsty now. You pass a thicket of bushes with... berries! Now, you've heard that some berries are poisonous so you're not sure if you should eat them or not. But as you examine them, they look so tantalizing. Do you (1) give in to your hunger and eat them or (2) decide that it's better to be safe than sorry and move on?");

        if (berry_or_noberry == 1) {
            alert("The berries turn out to be non-poisonous, to your great relief. You pick out as many as you can and stuff your pockets with them, hoping that they can sustain you until you find a way out. A few hours later, you stumble your way out into the glorious daylight. You've made it!");
        } else {
            alert("You continue wandering and starve to death. Game over!");
        }
    } else {
        let move_or_stay = prompt("You peer beneath you as the wolf snarls menacingly. It approaches the base of the tree and stands on its hind legs, clawing at the trunk. After a while, it gives up and paces back and forth on the ground. Your arms and legs are getting sore from the awkward position you're holding yourself in. Do you (1) try to move around or (2) hang on a little longer?");

        if (move_or_stay == 1) {
            alert("You shift your weight to the other leg. Suddenly, you feel the branch beneath you creak a little. Maybe if you're just a little careful... the branch snaps and you plummet to the ground, becoming the wolf's next meal. Game over!");
        } else {
            alert("After another half hour of excruciatingly holding your position, the wolf gets bored and leaves. You watch it disappear in the other direction and wait for a few minutes to make sure it doesn't come back. With great relief, you climb down the tree and continue trekking. A few hours later, you stumble your way out into the glorious daylight. You've made it!");
        }
    } 
 } else {
    let knock_or_walk = prompt("You walk down the broad, sunlit path as you examine your surroundings. The trees and flowers are really pretty, and birds and deer are frolicking around. It feels too perfect, like something out of a Disney movie. Around halfway, a cottage sits right next to the path. It doesn't quite look vacant—somebody must be inside. You hesitate to knock on the door, but at that moment your stomach growls. You could use some food. Do you (1) knock on the door or (2) continue to walk?");

    if (knock_or_walk == 1) {
        let eat_or_noteat = prompt("You knock on the door. A minute of silence passes so you turn around to walk away. However, the door opens and a short, old lady with curled hair and a garish pink dress beams at you. \"My my, who are you?\" she asked, pushing her glasses up her nose. \"I'm a lost camper,\" you reply, \"and I could really use some food, if you don't mind?\" She lets you in her cottage but you can't help but think that her aura is a little off. A few minutes later, she sets a bowl of stew and bread in front of you. It smells really good... Do you (1) dig in and wolf it down or (2) decline and decide to leave her cottage?");

        if (eat_or_noteat == 1) {
            alert("Alas, the food turned out to be poisoned! The old lady is actually a witch and you've become an ingredient in her cauldron of weird, bubbling broth. Game over!");
        } else {
            alert("You shake your head and tell the old lady, \"Actually, I'm not hungry anymore.\" She looks a little disappointed as you leave. As you close the door behind you, a fairy poofs out of nowhere and tells you, \"That was a close one! That old woman is a witch.\" You look at the fairy in disbelief. To prove that she's real, she magically teleports you out of the forest. You've made it!");
        }
    } else {
        let swim_or_sit = prompt("You feel really hot after walking for another hour in the sun and regret not stopping by the cottage. There's a really nice pond that you encounter. Maybe you could take a swim in it to cool down. Do you (1) dive in and wade in the water or (2) sit down on a rock to cool down?");

        if (swim_or_sit == 1) {
            alert("You jump into the cool water and let it soak your entire body. After floating around for a while, you climb out. Now that you feel more refreshed and energized, you continue trekking. A few hours later, you stumble your way out into the glorious daylight. You've made it!");
        } else {
            alert("Unfortunately, you fell asleep on the rock out of exhaustion. After a few hours passed, you were exposed to too much sun and died of heat stroke. Game over!");
        }
    }
}

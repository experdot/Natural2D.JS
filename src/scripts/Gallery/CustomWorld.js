import {
    Color
} from "../Fundamental/Color";
import {
    GameWorld
} from "../Engine/Core/GameWorld/GameWorld";
import {
    GameWorldView
} from "../Engine/Core/GameWorld/GameWorldView";
import {
    ParticlesView
} from "../Engine/Visual/ParticleSystem/ParticleSystem";
import {
    ParticlesTree
} from "../Engine/Visual/ParticleSystem/Tree/ParticlesTree";
import {
    ParticlesWalker
} from "../Engine/Visual/ParticleSystem/Walker/ParticlesWalker";

class CustomWorld extends GameWorld {
    initialize() {
        this.view = new GameWorldView(this);
        this.view.clearColor = new Color(0, 0, 0);
    }

    createObjects() {
        let visual = new ParticlesTree(new ParticlesView());
        this.addVisual(visual);

        // let visual2 = new ParticlesWalker(new ParticlesView());
        // this.addVisual(visual2);
    }
}

export {
    CustomWorld
};
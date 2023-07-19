class Character {
    constructor(name, LifePts, attackPts, defensePts) {
        this.name = name
        this.LifePts = LifePts
        this.attackPts = attackPts
        this.defensePts = defensePts
    }

    attack(targetCharacter) {
        targetCharacter.LifePts -= this.attackPts - targetCharacter.defensePts
    }
}

module.exports = Character
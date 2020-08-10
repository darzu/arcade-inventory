namespace ItemKind {
    /**
     * Gets the item kind
     */
    //% shim=KIND_GET
    //% blockId="item_kind" block="$kind"
    //% kindNamespace=ItemKind kindMemberName=kind kindPromptHint="e.g. Coins, ..."
    //% blockHidden=true
    export function _itemKind(kind: number): number {
        return kind;
    }

    let nextKind: number
    export function create() {
        if (nextKind === undefined) nextKind = 1;
        return nextKind++;
    }

    //% isKind
    export const Thing = create();
}

//% color=#84b89f icon="\uf279"
//% block="Inventory"
//% groups='["Pickup"]'
namespace inventory {

    //% block
    //% kind.shadow=item_kind
    export function setItemKind(kind: number) {

    }

    //% block
    export function foobar() {

    }

    //% block
    //% kind.shadow=spritekind
    export function pickupItems(source: Sprite, kind: number, distance: number = 16) {
        const sprites = getSpritesWithin(source.x, source.y, kind, distance)
        const timeToPickup = distance * 10
        sprites.forEach(s => {
            s.setFlag(SpriteFlag.Ghost, true);
            s.follow(source);
            setTimeout(() => {
                pickupItem(source, s)
            }, timeToPickup)
        })
    }

    function pickupItem(source: Sprite, target: Sprite) {
        target.destroy()
    }

    function getSpritesWithin(fromX: number, fromY: number, kind: number, distance: number) {
        const spritesByKind = game.currentScene().spritesByKind;
        if (!(kind >= 0) || !spritesByKind[kind]) return [];
        
        const d2 = distance**2
        
        return spritesByKind[kind]
            .sprites()
            .filter(s => dist2(s.x, s.y, fromX, fromY) <= d2)
    }


    function spriteDist2(s1: Sprite, s2: Sprite) {
        return dist2(s1.x, s1.y, s2.x,  s2.y);
    }
    function dist2(ax: number, ay: number, bx: number, by: number) {
        return (ax - bx)**2 + (ay - by)**2
    }

    
}
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
    export const Coin = create();
}

//% color=#84b89f icon="\uf279"
//% block="Inventory"
//% groups='["Pickup"]'
namespace inventory {

    //% kind.shadow=item_kindd
    function setItemKind(kind: number) {

    }
}
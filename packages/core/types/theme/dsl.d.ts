declare type WrappedMap<Key extends string, Map> = {
    [MapKey in keyof Map]: {
        [key in Key]: Map[MapKey];
    };
};
export declare const wrapValues: <Key extends string, Map_1>(wrapKey: Key, map: Map_1) => WrappedMap<Key, Map_1>;
interface MaybeWrapMap<TopKey extends string> {
    <Map>(map: Map): WrappedMap<TopKey, Map>;
    <ItemKey extends string, Map>(itemKey: ItemKey, map: Map): WrappedMap<TopKey, WrappedMap<ItemKey, Map>>;
}
export declare const propMap: MaybeWrapMap<'props'>;
export declare const styleMap: MaybeWrapMap<'style'>;
export declare const dsl: {
    wrapValues: <Key extends string, Map_1>(wrapKey: Key, map: Map_1) => WrappedMap<Key, Map_1>;
    styleMap: MaybeWrapMap<"style">;
    propMap: MaybeWrapMap<"props">;
};
export {};

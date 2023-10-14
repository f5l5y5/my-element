import type { TreeNodeData } from 'element-plus/es/components/tree/src/tree.type';
export declare function isValidValue(val: any): any;
export declare function isValidArray(val: any): number | false;
export declare function toValidArray(val: any): any[];
declare type TreeCallback<T extends TreeNodeData, R> = (data: T, index: number, array: T[], parent?: T) => R;
declare type TreeFindCallback<T extends TreeNodeData> = TreeCallback<T, boolean>;
export declare function treeFind<T extends TreeNodeData>(treeData: T[], findCallback: TreeFindCallback<T>, getChildren: (data: T) => T[]): T | undefined;
export declare function treeFind<T extends TreeNodeData, R>(treeData: T[], findCallback: TreeFindCallback<T>, getChildren: (data: T) => T[], resultCallback?: TreeCallback<T, R>, parent?: T): R | undefined;
export {};

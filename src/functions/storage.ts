import localforage from "localforage";
// @ts-ignore
import LZString from "./lzstring";

export async function saveItem(key: string, value: any):Promise<void>{
  let s=JSON.stringify(value);
  s=LZString.compressToUTF16(s);
  //s=await compress(s);
  localforage.setItem(key,s);
}

export async function loadItem(key:string):Promise<Object | null>{
  let s:string|null=await localforage.getItem(key);
  if(!s) return null;
  s=LZString.decompressFromUTF16(s);
  if(s){
  //s=await decompress(s);
    return JSON.parse(s);
  }else{
    return null;
  }
}
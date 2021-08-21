export const kangxiHtml=cp=>{
    if (typeof cp=='string') cp=cp.codePointAt(0);
    if (typeof kxzd=='undefined') return false;
    return kxzd.fileByUnicode(cp);
}
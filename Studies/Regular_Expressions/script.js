function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^(a|e|i|o|u).*\1$/;
    return re;
}


function main() {
    const re = regexVar();
    const str1 = 'easee';
    const str2 = 'aasee';
    const str3 = 'oaseo';

    console.log(re.test(str1));
    console.log(re.test(str2));
    console.log(re.test(str3));
}

main();

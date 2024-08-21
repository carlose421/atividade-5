
function saoAnagramas(palavra1, palavra2) {

    palavra1 = palavra1.replace(/\s+/g, '').toLowerCase();
    palavra2 = palavra2.replace(/\s+/g, '').toLowerCase();

    if (palavra1.length !== palavra2.length) {
        return false;
    }


    let sortedPalavra1 = palavra1.split('').sort().join('');
    let sortedPalavra2 = palavra2.split('').sort().join('');
    return sortedPalavra1 === sortedPalavra2;
}

let palavra1 = "amor";
let palavra2 = "roma";

if (saoAnagramas(palavra1, palavra2)) {
    console.log(`"${palavra2}" é um anagrama de "${palavra1}"`);
} else {
    console.log(`"${palavra2}" não é um anagrama de "${palavra1}"`);
}

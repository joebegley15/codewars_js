function isAnagram(wordA,wordB){
	wordA = wordA.toLowerCase().split('').sort().join('');
	wordB = wordB.toLowerCase().split('').sort().join('');
	return wordA === wordB;
}

const isAnagramOneLine = (wordA,wordB) => wordA.toLowerCase().split('').sort().join('') == wordB.toLowerCase().split('').sort().join('');

console.log(isAnagramOneLine('Tac','Cat'));
console.log(isAnagramOneLine('Guitar','Bass'));
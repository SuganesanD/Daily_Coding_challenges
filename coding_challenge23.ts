function countVowels(str: string): number {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example usage
const input = "Hello, World!";
console.log(`Number of vowels in "${input}": ${countVowels(input)}`);

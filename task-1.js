function slug (title ) 
{
  return title.toLowerCase ( ).replace(/\s+/g, '-');
}

console.log(slug("Arrays for beginners")); 
console.log(slug("English for developer")); 
console.log(slug("Ten secrets of JavaScript")); 
console.log(slug("How to become a JUNIOR developer in TWO WEEKS")); 
console.log("__________________________________________");
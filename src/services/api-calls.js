const baseUrl = "https://openlibrary.org/search.json?title=";

export async function bookSearch(input){
  let newInput = input.query.replaceAll(' ', '+')
  console.log(`${baseUrl}${newInput}`)
  const res = await fetch(`${baseUrl}${newInput}`)
  return res.json()
}

async function getDirection(text) {
  // Determine if the text contains any characters that are primarily used in RTL languages
  const rtlCharsRegex = /[\u0590-\u08FF\uFB1D-\uFDFD\uFE70-\uFEFC]/;
  const containsRTLChars = await rtlCharsRegex.test(text);
  
  // If the text contains RTL characters, return 'rtl', otherwise return 'ltr'
  return await containsRTLChars ? 'rtl' : 'ltr';
}

export async function getdir(text){
  return await getDirection(text)
}

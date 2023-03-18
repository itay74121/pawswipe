
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


export function textlinefixes(text,treshhold){
  let lines = []
  const fontsize = 20
  console.log("t",treshhold/(fontsize/2))
  text.split("\n").forEach(e=>{
    if (e.length*fontsize > treshhold){
      const chars = 25 //Math.floor(treshhold/(fontsize/1.5))
      console.log(chars)
      while(e.length > 0)
      {
        let line = ""
        for (let j = 0; j < chars; j++)
        {
          if (e.length === 0)
          {
            break
          }
          line += e[0]
          e = e.substring(1)
        }
        lines.push(line)
      }
    }
    else{
      lines.push(e)
    }
  })
  let t = ""
  lines.forEach(e=>{
    t += e + "\n"
  })
  return t
}


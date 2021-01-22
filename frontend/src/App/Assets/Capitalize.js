function capitalizeEachWord(str) {
  const words = str.split(' ');
  const arr = [];

  words.forEach(element => {
    const PalabraMinusculas = element.toLowerCase();
    const PalabraCitalida =
      PalabraMinusculas.charAt(0).toUpperCase() + PalabraMinusculas.substring(1);
    arr.push(PalabraCitalida);
  });

  return arr.join(' ');
}

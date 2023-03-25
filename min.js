function *getfruit(){
    yield 'apple'
    yield 'orange'
    yield 'spinach'
    yield 'waterMelon'
}
const fruiltIterator = getfruit()

for(let fruilt of fruiltIterator){
   try {
    console.log(fruilt);
    if(fruilt ==='spinach'){
        fruiltIterator.throw('Vegetable Found in the list')
    }
   } catch (error) {
    console.log(`Exception : ${error}`)
   }
}